"use client"
import 'react-toastify/dist/ReactToastify.css';
import "@/app/layout/loding/doteLoader/doteLoder.css";
import CreateFormData from '@/app/layout/functions/createFormData';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProductionForm({ userId }) {

    const [imageName, setImageName] = useState({ user_photo: "عکسی انتخاب نشده", national_card: "عکسی انتخاب نشده" })
    const [loding, setLoding] = useState(false)
    const router = useRouter()

    const format = ["image/png", "image/jpg", "image/jpeg"]
    const productionForm = Yup.object().shape({
        user_photo: Yup.mixed()
            .test("fileSize", "حجم فایل بیش از 200 کیلوبایت", value => value && value.size <= 200000)
            .test("fileFormat", "فرمت عکس باید png , jpg , jpeg باشد", value => value && format.includes(value.type))
            .required("عکسی انتخاب نشده است"),
        national_card: Yup.mixed()
            .test("fileSize", "حجم فایل بیش از 200 کیلوبایت", value => value && value.size <= 200000)
            .test("fileFormat", "فرمت عکس باید png , jpg , jpeg باشد", value => value && format.includes(value.type))
            .required("عکسی انتخاب نشده است"),
        checkbox: Yup.bool().oneOf([true], "با قوانین موافقید"),
    })


    const ProductionUser = async (values) => {
        try {
            setLoding(true)
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/userAccount/Production/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json();
            if (data.status) {
                router.refresh();
            } else {
                toast.error(data);
            }
        } catch {
            toast.error("مشکلی پیش آمده دوباره تلاش کنید");
        } finally {
            setLoding(false)
        }
    }

    return (
        <>
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
                    user_photo: null,
                    national_card: null,
                    checkbox: false,
                }}
                validationSchema={productionForm}
                onSubmit={values => {
                    delete values.checkbox;
                    ProductionUser({ ...values, user_id: userId })
                    console.log(values);

                }}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form>
                        <div className="show_information_item d-flex flex-column gap-3">

                            <div>
                                <label htmlFor="" className="form-label">عکس شما :</label>
                                <div className="input-group custom-file-button">

                                    <label className="input-group-text" htmlFor="user_photo" role="button">انتخاب عکس</label>
                                    <label htmlFor="user_photo" className="form-control rounded-end-2 overflow-hidden" id="review-image-label" role="button"> <span className="image_name">{imageName.user_photo}</span></label>
                                    <input type="file" name="user_photo" className="d-none" id="user_photo"
                                        onChange={(e) => {
                                            console.log(e.target.files[0]);

                                            setFieldValue("user_photo", e.target.files[0])
                                            setImageName({ ...imageName, user_photo: e.target.files[0].name })
                                        }} />

                                </div>
                                {errors.user_photo && touched.user_photo && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.user_photo}</span>}
                            </div>

                            <div>
                                <label htmlFor="" className="form-label">عکس کارت ملی :</label>
                                <div className="input-group custom-file-button">

                                    <label className="input-group-text upload_image_btn" htmlFor="national_card" role="button">انتخاب عکس</label>
                                    <label htmlFor="national_card" className="form-control rounded-end-2 overflow-hidden" id="review-image-label" role="button"> <span className="image_name">{imageName.national_card}</span></label>
                                    <input type="file" name="national_card" className="d-none" id="national_card"
                                        onChange={(e) => {
                                            setFieldValue("national_card", e.target.files[0])
                                            setImageName({ ...imageName, national_card: e.target.files[0].name })
                                        }} />
                                </div>
                                {errors.national_card && touched.national_card && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.national_card}</span>}
                            </div>

                            <div className="d-flex gap-2 align-items-center p-1">
                                <Field type="checkbox" name="checkbox" id="checkbox" className="checkbox" />
                                <label htmlFor="checkbox">با قوانین موافقم</label>
                                {errors.checkbox && touched.checkbox && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.checkbox}</span>}
                            </div>

                        </div>
                        {loding ?
                            <div className="btn btn-danger p-2 mt-3 w-100 d-flex justify-content-center align-items-center">
                                <div className="loader"></div>
                            </div>
                            :
                            <button type="submit" className="btn btn-danger p-2 mt-3 w-100">ثبت</button>
                        }
                    </Form>
                )}
            </Formik>

            <div className="d-none alert_box d-flex justify-content-center align-items-center position-fixed start-0 top-0 w-100 h-100 bg-black bg-opacity-50 z-3">
                <div className="alert_header w-75 rounded-3 position-relative py-2">
                    <h5 className="w-100 position-absolute text-center p-2">قوانین</h5>
                    <div className="overflow-y-scroll h-100 p-4 pt-5">
                        <p>
                            مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…
                            مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…
                        </p>
                        <button type="submit" className="btn btn-danger p-2 w-100 mt-3">موافقم</button>
                    </div>
                </div>
            </div>
        </>
    )
}