"use client"
import "./recovery.css"
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import CreateFormData from "@/app/layout/functions/createFormData";

export default function Recovery() {

    const router = useRouter()

    const recovery = Yup.object().shape({
        phone: Yup.string().min(11, "حداقل 11 عدد").max(11, "حداکثر 11 عدد").required("شماره موبایل را وارد کنید"),
    })

    const UserRecovery = async (values) => {
        try {
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/auth/recovery/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json();

            if (data.status === true) {
                const [_, minutes1, seconds1] = data.time_left.split(':');
                sessionStorage.setItem("phone", values.phone)
                sessionStorage.setItem("time_left", (+minutes1 * 60) + +seconds1)
                router.push('/login/passwordRecovery')
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
                        phone: '',
                    }}
                    validationSchema={recovery}
                    onSubmit={values => {
                        UserRecovery(values)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="form_box w-100">

                            <div className="box_login w-100 d-flex flex-column p-4 rounded-5 mb-5">
                                <h2 className="text-center mb-2">احزار هویت</h2>

                                <div className="mt-3">
                                    <Field type="text" name="phone" className="input form-control focus-ring focus-ring-light text-center" placeholder="شماره موبایل" />
                                </div>
                                {errors.phone && touched.phone && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.phone}</span>}

                                <button className="btn_submit btn-danger btn mt-4">ورود</button>
                            </div>
                        </Form>
                    )}

                </Formik>
            </div>
        </section>
    )
}