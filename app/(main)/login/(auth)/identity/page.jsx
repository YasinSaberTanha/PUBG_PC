"use client"
import "./identity.css"
import CreateFormData from "@/app/layout/functions/createFormData";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TimeLeft from "../components/timeLeft";
import { useRouter } from "next/navigation";


export default function Identity() {

    const router = useRouter()

    const [Storage, setStorage] = useState({ phone: null, time_left: null })

    useEffect(() => {
        const GetSessionStorage = () => {
            setStorage({
                phone: sessionStorage.getItem("phone"),
                time_left: sessionStorage.getItem("time_left"),
            })

            if (Storage.time_left && Storage.time_left != 600) {
                toast.error(`کد تایید شما هنوز ${Math.floor(Storage.time_left / 60)}:${Math.floor(Storage.time_left % 60)} اعتبار دارد`)
            }
        }
        GetSessionStorage()
    }, [Storage.time_left])





    const identity = Yup.object().shape({
        validition_code: Yup.number().typeError("عدد وارد کنید").min(100000, "حداقل 6 عدد").max(999999, "حداکثر 6 عدد").required("کد تایید را وارد کنید"),
    })

    const UserIdentity = async (values) => {
        try {
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/auth/identity/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json();
            if (data.status === true) {
                router.push('/')
            } else {
                toast.error(data)
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="login_section position-fixed start-0 top-0 w-100 h-100 z-1">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="w-100 h-100 d-flex justify-content-center align-items-center p-4">
                <Formik
                    initialValues={{
                        validition_code: "",
                    }}
                    validationSchema={identity}
                    onSubmit={values => {
                        UserIdentity({ ...values, phone: Storage.phone })
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="form_box w-100">
                            <div className="box_login w-100 d-flex flex-column p-4 rounded-5 mb-5">
                                <h2 className="text-center mb-2">احزار هویت</h2>

                                <div className="mt-3">
                                    <Field name="validition_code" type="text" className="input form-control focus-ring focus-ring-light text-center" placeholder="کد تایید را وارد کنید" />
                                </div>
                                {errors.validition_code && touched.validition_code && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.validition_code}</span>}

                                <div className="time_sms d-flex gap-2 mt-2">
                                    <p>ارسال مجدد </p> {Storage.time_left && <TimeLeft TimeLeft={Storage.time_left} />}
                                </div>


                                <button className="btn_submit btn-danger btn mt-2">ورود</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}