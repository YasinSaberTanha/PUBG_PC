"use client"
import "./passwordRecovery.css"
import 'react-toastify/dist/ReactToastify.css';
import { LuPhone } from "react-icons/lu";
import { RiLock2Line } from "react-icons/ri";
import { LuKey } from "react-icons/lu";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CreateFormData from "@/app/layout/functions/createFormData";

export default function PasswordRecovery() {
    
    const router = useRouter()

    useEffect(() => {
        const GetSessionStorage = () => {
            const timeLeft = sessionStorage.getItem("time_left");

            if (timeLeft != 600) {
                toast.error(`کد تایید قبلی شما هنوز ${Math.floor(timeLeft / 60)}:${Math.floor(timeLeft % 60)} اعتبار دارد`)
            }
        }
        GetSessionStorage()

        const interval = setInterval(async () => {
            sessionStorage.setItem("time_left", sessionStorage.getItem("time_left") - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const passwordRecovery = Yup.object().shape({
        password: Yup.string().min(8, "حداقل 8 کاراکتر").required("رمز عبور جدید را وارد کنید"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "تکرار رمزعبور  مطابقت ندارد").required("تکرار رمز عبور را وارد کنید "),
        validition_code: Yup.string().min(6, "حداقل 6 عدد").max(6, "حداقل 6 عدد").required("کد تایید را وارد کنید"),
    })

    const UserPasswordRecovery = async (values) => {

        try {
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/auth/passwordRecovery/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json();

            console.log(data);

            if (data.status === true) {
                router.push('/login')
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
                        password: "",
                        confirmPassword: "",
                        validition_code: "",
                    }}
                    validationSchema={passwordRecovery}
                    onSubmit={values => {
                        UserPasswordRecovery({ ...values, phone: sessionStorage.getItem("phone") })
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="form_box w-100">
                            <div className="box_login w-100 d-flex flex-column p-4 rounded-5 mb-5">
                                <h2 className="text-center mb-2">احزار هویت</h2>

                                <div className="input-group mt-4">
                                    <Field type="text" name="password" className="input form-control focus-ring focus-ring-light" placeholder="رمز عبور جدید" />
                                    <span className="input-group-text"> <RiLock2Line /></span>
                                </div>
                                {errors.password && touched.password && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.password}</span>}

                                <div className="input-group mt-4">
                                    <Field type="text" name="confirmPassword" className="input form-control focus-ring focus-ring-light" placeholder="تکرار رمز عبور" />
                                    <span className="input-group-text"> <LuKey /></span>
                                </div>
                                {errors.confirmPassword && touched.confirmPassword && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.confirmPassword}</span>}

                                <div className="mt-3">
                                    <Field type="text" name="validition_code" className="input form-control focus-ring focus-ring-light text-center" placeholder="کد تایید را وارد کنید" />
                                </div>
                                {errors.validition_code && touched.validition_code && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.validition_code}</span>}

             
                                <button type="submit" className="btn_submit btn-danger btn mt-3">ورود</button>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </section >
    )
}