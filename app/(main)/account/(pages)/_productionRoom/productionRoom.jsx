"use client"
import "./productionRoom.css"
import 'react-toastify/dist/ReactToastify.css';
import "@/app/layout/loding/doteLoader/doteLoder.css";
import CreateFormData from '@/app/layout/functions/createFormData';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function ProductionRoom() {

    const router = useRouter()
    const [imageLabel, setImageLabel] = useState("عکسی انتخاب نشده است")
    const [loding, setLoding] = useState(false)

    const format = ["image/png", "image/jpg", "image/jpeg"];
    const productionRoom = Yup.object().shape({
        room_name: Yup.string().min(6, "حداقل 6 کاراکتر").max(6, "حداکثر 6 کاراتر").required("این فیلد را پر کنید"),
        room_id: Yup.string().min(6, "حداقل 6 کاراکتر").max(6, "حداکثر 6 کاراتر").required("این فیلد را پر کنید"),
        room_password: Yup.string().min(4, "حداقل 4 کاراکتر").max(4, "حداکثر 4 کاراتر").required("این فیلد را پر کنید"),
        room_type: Yup.string().required("انتخاب کنید"),
        input_amount: Yup.string().required("انتخاب کنید"),
        multi_player: Yup.string().required("انتخاب کنید"),
        room_image: Yup.mixed()
            .test("fileSize", "حجم فایل بیش از 3 مگابایت", value => { if (!value) return true; return value.size < 3000000 })
            .test("fileFormat", "فرمت عکس باید png , jpg , jpeg باشد", value => { if (!value) return true; return format.includes(value.type) })
            .required("این فیلد را پر کنید")
    })

    const SetRoom = async (values) => {
        try {
            setLoding(true)
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NEXT}/userAccount/productionRoom/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json()

            if (data.status === true) {
                toast.success(data.message)
                router.refresh()
            }
            else {
                toast.error(data)
            }
        } catch (err) {
            toast.error("مشکلی پیش آمده دوباره تلاش کنید")
        } finally {
            setLoding(false)
        }
    }

    return (
        <article className="production_room_article position-fixed top-0 w-100 z-1 overflow-y-scroll">
            <h2 className="head_history text-center">ساخت اتاق</h2>
            <div className="w-100">
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
                <Formik
                    initialValues={{
                        room_name: "",
                        room_id: "",
                        room_password: "",
                        room_type: "",
                        input_amount: "",
                        multi_player: "",
                        license_pc: 0,
                        room_image: null,
                    }}
                    validationSchema={productionRoom}
                    onSubmit={values => {
                        SetRoom(values)
                    }}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            <div className="w-100 p-4 ">
                                <div className="show_information_item d-flex flex-column gap-3">

                                    <div>
                                        <label className="form-label">نام اتاق :</label>
                                        <Field type="text" name="room_name" className="form-control" />
                                        {errors.room_name && touched.room_name && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.room_name}</span>}
                                    </div>

                                    <div>
                                        <label className="form-label">شناسه اتاق :</label>
                                        <Field type="text" name="room_id" className="form-control" />
                                        {errors.room_id && touched.room_id && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.room_id}</span>}
                                    </div>

                                    <div>
                                        <label className="form-label">رمز عبور :</label>
                                        <Field type="text" name="room_password" className="form-control" />
                                        {errors.room_password && touched.room_password && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.room_password}</span>}
                                    </div>

                                    <div>
                                        <label name="room_type" className="form-label">نوع اتاق :</label>
                                        <select className="form-select" aria-label="size 2 select example" onChange={(e) => setFieldValue("room_type", e.target.value)}>
                                            <option>انتخاب کنید</option>
                                            <option value="Erangel">Erangel</option>
                                            <option value="M-Erangel">Erangel-Mode</option>
                                            <option value="Livik">Livik</option>
                                            <option value="M-Livik">Livik-Mode</option>
                                        </select>
                                        {errors.room_type && touched.room_type && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.room_type}</span>}
                                    </div>

                                    <div>
                                        <label name="input_amount" className="form-label">ورودی :</label>
                                        <select className="form-select" aria-label="size 2 select example" onChange={(e) => setFieldValue("input_amount", e.target.value)}>
                                            <option>انتخاب کنید</option>
                                            <option value="3000">3,000</option>
                                            <option value="5000">5,000</option>
                                            <option value="10000">10,000</option>
                                            <option value="15000">15,000</option>
                                            <option value="20000">20,000</option>
                                            <option value="25000">25,000</option>
                                        </select>
                                        {errors.input_amount && touched.input_amount && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.input_amount}</span>}
                                    </div>

                                    <div>
                                        <label name="multi_player" className="form-label">گروه های :</label>
                                        <select className="form-select" aria-label="size 2 select example" onChange={(e) => setFieldValue("multi_player", e.target.value)}>
                                            <option value="">انتخاب کنید</option>
                                            <option value="4">4</option>
                                            <option value="2">2</option>
                                            <option value="1">1</option>
                                        </select>
                                        {errors.multi_player && touched.multi_player && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.multi_player}</span>}
                                    </div>

                                    <div>
                                        <label htmlFor="" className="form-label">عکس از اتاق :</label>
                                        <div className="input-group custom-file-button">
                                            <label className="input-group-text" htmlFor="review-image" role="button">انتخاب عکس</label>
                                            <label htmlFor="review-image" className="form-control rounded-end-2 overflow-hidden" id="review-image-label" role="button"> <span className="image_name">{imageLabel}</span></label>
                                            <input type="file" name="room_image" className="d-none" id="review-image" onChange={(e) => {
                                                const file = e.target.files[0];
                                                setFieldValue("room_image", file)
                                                setImageLabel(file.name)
                                            }} />
                                        </div>
                                        {errors.room_image && touched.room_image && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.room_image}</span>}

                                    </div>

                                    <div className="d-flex gap-2 align-items-center justify-content-lg-center p-1">
                                        <input type="checkbox" name="license_pc" id="checkbox" className="checkbox" onChange={(e) => { setFieldValue("license_pc", e.target.checked ? 1 : 0) }} />
                                        <label htmlFor="checkbox">برای کامپیوتر</label>
                                        {errors.license_pc && touched.license_pc && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.license_pc}</span>}
                                    </div>

                                </div>

                                {loding ?
                                    <div className="btn btn-danger p-2 mt-4 w-100 d-flex justify-content-center align-items-center">
                                        <div className="loader"></div>
                                    </div>
                                    :
                                    <button type="submit" className="btn btn-danger p-2 mt-4 w-100 d-flex justify-content-center align-items-center">ثبت</button>
                                }
                                <br className="br" />

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </article>
    )
}