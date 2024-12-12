"use client"
import "./createAccount.css"
import 'react-toastify/dist/ReactToastify.css';
import "@/app/layout/loding/doteLoader/doteLoder.css"
import Link from "next/link"
import { LuPhone } from "react-icons/lu";
import { RiLock2Line } from "react-icons/ri";
import { LuKey } from "react-icons/lu";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import CreateFormData from "@/app/layout/functions/createFormData";
import { useState } from "react";

export default function CreateAccount() {
    const [loding, setLoding] = useState(false)
    const router = useRouter()

    const createAccount = Yup.object().shape({
        phone: Yup.string().min(11, "حداقل 11 عدد").max(11, "حداکثر 11 عدد").required("شماره موبایل را وارد کنید"),
        password: Yup.string().min(8, "حداقل 8 کاراکتر").required("رمز عبور را وارد کنید"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "تکرار رمزعبور  مطابقت ندارد").required("تکرار رمز عبور را وارد کنید ")
    })

    const UserCreateAccount = async (values) => {
        try {
            setLoding(true)
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/auth/createAccount/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json();

            if (data.status === true) {
                sessionStorage.setItem("phone", values.phone)
                sessionStorage.setItem("password", values.password)
                const [_, minutes1, seconds1] = data.time_left.split(':');
                sessionStorage.setItem("time_left", (+minutes1 * 60) + +seconds1)
                router.push('/login/identity')
            } else {
                toast.error(data)
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoding(false)
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
                        phone: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={createAccount}
                    onSubmit={values => {


                        UserCreateAccount(values)
                    }}
                >
                    {({ errors, touched }) => (

                        <Form className="form_box w-100">
                            <div className="box_login w-100 d-flex flex-column p-4 rounded-5 mb-5">
                                <h2 className="text-center mb-3">عضویت</h2>

                                {errors.name && touched.name && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.name}</span>}

                                <div className="input-group mt-4">
                                    <Field type="text" name="phone" className="input form-control focus-ring focus-ring-light" placeholder="شماره موبایل" />
                                    <span className="input-group-text"> <LuPhone /></span>
                                </div>
                                {errors.phone && touched.phone && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.phone}</span>}


                                <div className="input-group mt-4">
                                    <Field type="text" name="password" className="input form-control focus-ring focus-ring-light" placeholder="رمز عبور" />
                                    <span className="input-group-text"> <RiLock2Line /></span>
                                </div>
                                {errors.password && touched.password && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.password}</span>}

                                <div className="input-group mt-4">
                                    <Field type="text" name="confirmPassword" className="input form-control focus-ring focus-ring-light" placeholder="تکرار رمز عبور" />
                                    <span className="input-group-text"> <LuKey /></span>
                                </div>
                                {errors.confirmPassword && touched.confirmPassword && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.confirmPassword}</span>}

                                {loding ?
                                    <div className="btn btn_submit btn-danger p-2 mt-3 w-100 d-flex justify-content-center align-items-center">
                                        <div className="loader"></div>
                                    </div> :
                                    <button type="submit" className="btn btn_submit btn-danger p-2 mt-3 w-100 d-flex justify-content-center align-items-center"> ثبت </button>
                                }


                                <div className="d-flex gap-2 justify-content-center mt-4">
                                    <p className=""> حساب کاربری دارید ؟ </p>
                                    <Link href={"/login"} className="link-primary text-decoration-none ">وارد شوید</Link>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

            </div>
        </section>
    )
}