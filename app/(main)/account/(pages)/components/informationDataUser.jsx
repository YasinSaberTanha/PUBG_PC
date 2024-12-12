import 'react-toastify/dist/ReactToastify.css';
import CreateFormData from "@/app/layout/functions/createFormData";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import imageCompression from 'browser-image-compression';
import { useRouter } from 'next/navigation';
import "@/app/layout/loding/doteLoader/doteLoder.css";

export default function InfoUserData({ dataUser }) {
    const router = useRouter()
    const [data, setData] = useState(dataUser)
    const [imageSrc, setImageSrc] = useState(null)
    const [imageLabel, setImageLabel] = useState("عکسی انتخاب نشده است")
    const [lodingImage, setLodingImage] = useState(false)
    const [loding, setLoding] = useState(false)

    const format = ["image/png", "image/jpg", "image/jpeg"]
    const userData = Yup.object().shape({
        game_name: Yup.string().required("اسم بازی خود را وارد کنید"),
        game_id: Yup.string().min(11, "حداقل 11 کارکتر").max(11, "حداکثر 11 کراکتر").required("شناسه بازی خود را وارد کنید"),
        card_number: Yup.string().min(3, "حداقل 16 کارکتر").max(3, "حداکثر 16 کراکتر").required("شماره کارت خود را وارد کنید"),
        game_photo: Yup.mixed()
            .test("fileSize", "حجم فایل بیش از 200 کیلوبایت", value => { if (!value) return true; return value.size < 200000 })
            .test("fileFormat", "فرمت عکس باید png , jpg , jpeg باشد", value => { if (!value) return true; return format.includes(value.type) }).notRequired(),
    })


    const handleImageUpload = async (event, setFieldValue) => {
        setLodingImage(true)
        try {
            const imageFile = event.target.files[0];

            const options = {
                maxSizeMB: 1,
                useWebWorker: true,
                maxWidthOrHeight: 100,
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result
                img.onload = () => {
                    const canvas = document.createElement('canvas')
                    const ctx = canvas.getContext("2d")

                    const size = img.height;
                    const offsetX = (img.width - size) / 2;
                    const offsetY = (img.height - size) / 2;

                    canvas.width = size
                    canvas.height = size
                    ctx.drawImage(img, offsetX, offsetY, size, size, 0, 0, size, size);

                    canvas.toBlob(async (blob) => {
                        const url = URL.createObjectURL(blob)
                        setImageSrc(url)
                        setFieldValue("game_photo", await imageCompression(blob, options));
                    }, "image/jpeg")
                }
            }
            reader.readAsDataURL(imageFile);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => { setLodingImage(false) }, 2000)
        }
    }

    const UserData = async (values) => {
        if (lodingImage) return;
        try {
            setLoding(true)
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NEXT}/userAccount/information/`, {
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

    const formChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }




    return (
        <div className=" w-100 p-4 ">
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
                    game_name: data?.game_name,
                    game_id: data?.game_id,
                    card_number: data?.card_number,
                    game_photo: null,
                }}
                validationSchema={userData}
                onSubmit={values => {
                    UserData(values)
                }}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form>
                        <div className="show_information_item d-flex flex-column gap-3">
                            <div>
                                <label htmlFor="" className="form-label">نام :</label>
                                <input type="text" name="game_name" className="form-control" value={data?.game_name}
                                    onChange={(e) => {
                                        formChange(e);
                                        setFieldValue([e.target.name], e.target.value);
                                    }}
                                />
                                {errors.game_name && touched.game_name && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.game_name}</span>}
                            </div>

                            <div>
                                <label htmlFor="" className="form-label">شناسه :</label>
                                <input type="text" name="game_id" className="form-control" value={data?.game_id}
                                    onChange={(e) => {
                                        formChange(e);
                                        setFieldValue([e.target.name], e.target.value);
                                    }}
                                />
                                {errors.game_id && touched.game_id && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.game_id}</span>}
                            </div>

                            <div>
                                <label htmlFor="" className="form-label">شماره کارت :</label>
                                <input type="text" name="card_number" className="form-control" value={data?.card_number}
                                    onChange={(e) => {
                                        formChange(e);
                                        setFieldValue([e.target.name], e.target.value);
                                    }}
                                />
                                {errors.card_number && touched.card_number && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.card_number}</span>}
                                <div className="p-2 pb-0">
                                    <span className="notice">این شماره کارت برای برداشت جوایز شما است</span>
                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="" className="form-label">عکس :</label>
                                <div className="input-group custom-file-button">

                                    {lodingImage ? <label className="input-group-text bg-danger" htmlFor="review-image" role="button"><div className="loader"></div></label> :
                                        <label className="input-group-text" htmlFor="review-image" role="button">عکس انتخاب</label>
                                    }
                                    <label htmlFor="review-image" className="form-control rounded-end-2 overflow-hidden" id="review-image-label" role="button"><span className="image_name">{imageLabel}</span></label>
                                    <input type="file" name="game_photo" className="d-none" id="review-image" onChange={async (e) => {
                                        const file = e.target.files[0];
                                        setFieldValue("game_photo", file)
                                        setImageLabel(file.name)
                                        if (file.size < 200000 && format.includes(file.type)) await handleImageUpload(e, setFieldValue);
                                    }} />
                                </div>
                                {imageSrc && <img src={imageSrc} alt='image' style={{ height: 100, width: 100 }} className='mt-3 rounded' />}
                                {errors.game_photo && touched.game_photo && <span className="form_errors text-danger ps-1 pt-1 m-0">{errors.game_photo}</span>}
                                <div className="p-2 pb-0">
                                    <span className="notice">این عکس را مشابه با عکسی که درون بازی استفاده میکنید اپلود کنید تا هویت شما در روم ها مورد تایید باشد</span>
                                </div>
                            </div>
                        </div>

                        {loding ?
                            <div className="btn btn-danger p-2 mt-3 w-100 d-flex justify-content-center align-items-center">
                                <div className="loader"></div>
                            </div>
                            :
                            <button type="submit" className="btn btn-danger p-2 mt-3 w-100 d-flex justify-content-center align-items-center">ثبت</button>
                        }
                    </Form>
                )}
            </Formik>
            <br className="br" />
        </div>
    )
}