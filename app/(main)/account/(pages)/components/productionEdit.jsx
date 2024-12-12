import CreateFormData from '@/app/layout/functions/createFormData';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from "react"


export default function ProductionEdit() {

    const [loding, setLoding] = useState(false)

    const roomEdit = Yup.object().shape({
        room_name: Yup.string().min(6, "حداقل 6 کاراکتر").max(6, "حداکثر 6 کاراتر").required("این فیلد را پر کنید"),
        room_id: Yup.string().min(6, "حداقل 6 کاراکتر").max(6, "حداکثر 6 کاراتر").required("این فیلد را پر کنید"),
        room_password: Yup.string().min(4, "حداقل 4 کاراکتر").max(4, "حداکثر 4 کاراتر").required("این فیلد را پر کنید"),
    })

    const RoomEdit = async (values) => {
        try {
            setLoding(true)
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NEXT}/userAccount/productionEdit/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json()

            if (data.status === true) {
                toast.success(data.message)
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
                room_name: "",
                room_id: "",
                room_password: "",
            }}
            validationSchema={roomEdit}
            onSubmit={values => {
                RoomEdit(values)
            }}
        >
            {({ errors, touched }) => (
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