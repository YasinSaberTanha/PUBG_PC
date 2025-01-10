import CreateFormData from '@/app/layout/functions/createFormData';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from "react"
import { useRouter } from "next/navigation";
import { Collapse } from 'react-bootstrap';


export default function ProductionEnd() {

    const router = useRouter()
    const [imageLabel, setImageLabel] = useState("عکسی انتخاب نشده است")
    const [imageLabel2, setImageLabel2] = useState("عکسی انتخاب نشده است")
    const [open, setOpen] = useState(false);
    const [loding, setLoding] = useState(false)

    const format = ["image/png", "image/jpg", "image/jpeg"];
    const roomEnd = Yup.object().shape({
        original_id: Yup.string().required("این فیلد را پر کنید"),
        id_image: Yup.mixed()
            .test("fileSize", "حجم فایل بیش از 3 مگابایت", value => { if (!value) return true; return value.size < 3000000 })
            .test("fileFormat", "فرمت عکس باید png , jpg , jpeg باشد", value => { if (!value) return true; return format.includes(value.type) })
            .required("این فیلد را پر کنید"),
        winner_photo: Yup.mixed()
            .test("fileSize", "حجم فایل بیش از 3 مگابایت", value => { if (!value) return true; return value.size < 3000000 })
            .test("fileFormat", "فرمت عکس باید png , jpg , jpeg باشد", value => { if (!value) return true; return format.includes(value.type) })
            .notRequired()
    })

    const RoomEdit = async (values) => {
        try {
            setLoding(true)
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NEXT}/userAccount/productionEnd/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json()
            console.log(data);

            if (data.status === true) {
                toast.success(data.message)
                router.refresh()
            }
            else {
                throw new Error();
            }
        } catch (err) {
            toast.error("مشکلی پیش آمده دوباره تلاش کنید")
        } finally {
            setLoding(false)
        }
    }

    return (
        <Formik
            initialValues={{
                original_id: "",
                id_image: null,
                winner_photo: null
            }}
            validationSchema={roomEnd}
            onSubmit={values => {
                console.log(values);
                RoomEdit(values)
            }}
        >
            {({ errors, touched, setFieldValue }) => (
                <Form>
                    <div className="w-100 p-4">
                        <div className="show_information_item d-flex flex-column gap-3">

                            <div>
                                <label htmlFor="" className="form-label">شناسه اتاق :</label>
                                <Field type="text" name="original_id" className="form-control" />
                                {errors.original_id && touched.original_id && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.original_id}</span>}
                            </div>

                            <div>
                                <label htmlFor="" className="form-label">عکس از شناسه اتاق :</label>
                                <div className="input-group custom-file-button">
                                    <label className="input-group-text" htmlFor="review-image" role="button">انتخاب عکس</label>
                                    <label htmlFor="review-image" className="form-control rounded-end-2 overflow-hidden" id="review-image-label" role="button"> <span className="image_name">{imageLabel}</span></label>
                                    <input type="file" name="id_image" className="d-none" id="review-image" onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFieldValue("id_image", file)
                                        setImageLabel(file.name)
                                    }} />
                                </div>
                                {errors.id_image && touched.id_image && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.id_image}</span>}
                            </div>

                            <a
                                className="btn btn-primary btn_collapse my-auto me-auto"
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                مشخص کردن برنده
                            </a>
                            <Collapse in={open}>
                                <div>
                                    <label htmlFor="" className="form-label">عکس از برنده :</label>
                                    <div className="input-group custom-file-button">
                                        <label className="input-group-text" htmlFor="review-image2" role="button">انتخاب عکس</label>
                                        <label htmlFor="review-image2" className="form-control rounded-end-2 overflow-hidden" id="review-image-label" role="button"> <span className="image_name">{imageLabel2}</span></label>
                                        <input type="file" name="winner_photo" className="d-none" id="review-image2" onChange={(e) => {
                                            const file = e.target.files[0];
                                            setFieldValue("winner_photo", file)
                                            setImageLabel2(file.name)
                                        }} />
                                    </div>
                                    {errors.winner_photo && touched.winner_photo && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.winner_photo}</span>}
                                </div>
                            </Collapse>

                        </div>
                        {loding ?
                            <div className="btn btn-danger p-2 mt-4 w-100 d-flex justify-content-center align-items-center">
                                <div className="loader"></div>
                            </div>
                            :
                            <button type="submit" className="btn btn-danger p-2 mt-4 w-100 d-flex justify-content-center align-items-center">ثبت</button>
                        }
                    </div>
                </Form>
            )}
        </Formik>
    )
}