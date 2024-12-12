"use client"

import "./login.css"
import 'react-toastify/dist/ReactToastify.css';
import "@/app/layout/loding/doteLoader/doteLoder.css"
import Link from "next/link"
import { LuPhone } from "react-icons/lu";
import { RiLock2Line } from "react-icons/ri";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import CreateFormData from "@/app/layout/functions/createFormData";
import { useState } from "react";


export default function Login() {
    const [loding, setLoding] = useState(false)
    const router = useRouter()

    const login = Yup.object().shape({
        phone: Yup.string().min(11, "حداقل 11 عدد").max(11, "حداکثر 11 عدد").required("شماره موبایل را وارد کنید"),
        password: Yup.string().min(8, "حداقل 8 کارکتر").required("رمز عبور را وارد کنید"),
    })

    const UserLogin = async (values) => {
        try {
            setLoding(true)
            const result = await fetch(`http://localhost:3000/api/auth/login`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json()

            if (data.status === true) {
                router.push("/")
            } else {
                toast.error(data)
            }
        } catch (err) {
            toast.error("مشکلی پیش آمده دوباره تلاش کنید")
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
                        phone: '',
                        password: '',
                    }}
                    validationSchema={login}
                    onSubmit={values => {
                        UserLogin(values)
                    }}
                >
                    {({ errors, touched }) => (

                        <Form className="form_box w-100">
                            <div className="box_login w-100 d-flex flex-column p-4 rounded-5 mb-5">
                                <h2 className="text-center mb-3">ورود</h2>

                                <div className="input-group  mt-4">
                                    <Field type="text" name="phone" className="input form-control focus-ring focus-ring-light" placeholder="شماره موبایل" />
                                    <span className="input-group-text"> <LuPhone /></span>
                                </div>
                                {errors.phone && touched.phone && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.phone}</span>}

                                <div className="input-group mt-4">
                                    <Field type="text" name="password" className="input form-control focus-ring focus-ring-light" placeholder="رمز عبور" />
                                    <span className="input-group-text"> <RiLock2Line /></span>
                                </div>
                                {errors.password && touched.password && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.password}</span>}

                                {loding ?
                                    <div className="btn btn_submit btn-danger p-2 mt-3 w-100 d-flex justify-content-center align-items-center">
                                        <div className="loader"></div>
                                    </div> :
                                    <button type="submit" className="btn btn_submit btn-danger p-2 mt-3 w-100 d-flex justify-content-center align-items-center"> ثبت </button>
                                }

                                <div className="d-flex gap-2  justify-content-center mt-4">
                                    <p className="">حساب کاربری ندارید ؟</p>
                                    <Link href={"/login/createAccount"} className="link-primary text-decoration-none">ثبت نام کنید</Link>
                                </div>

                                <div className="d-flex gap-2  justify-content-center mt-1">
                                    <p className="">بازیابی رمز عبور ؟</p>
                                    <Link href={"/login/recovery"} className="link-primary text-decoration-none">بازیابی</Link>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}