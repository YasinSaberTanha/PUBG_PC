"use client"
import "./productionLevel.css"
import 'react-toastify/dist/ReactToastify.css';
import "@/app/layout/loding/doteLoader/doteLoder.css";
import CreateFormData from '@/app/layout/functions/createFormData';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductionLevel() {

    const router = useRouter()
    const [onSubmit, setOnSubmit] = useState(false)
    const [loding, setLoding] = useState(false)

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
            <h2 className="head_history text-center">مشاهدی اتاق</h2>
            <div className="w-100 p-4">
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

                <div className="production_view_border rounded-4 p-5 d-flex justify-content-center">
                    <Link href={"/account/productionVeiw"} className="btn btn-success p-2 w-100 rounded-3">مشاهدی اتاق</Link>
                </div>

                {
                    onSubmit ?
                        <div className="btn btn-group w-100 mt-4">
                            <button className="btn btn-outline-danger p-2 w-100">ثبت</button>
                            <button className="btn btn-outline-primary p-2 w-100" onClick={() => setOnSubmit(false)}>لغو</button>
                        </div>
                        :
                        <button className="btn btn-danger p-2 mt-4 w-100" onClick={() => setOnSubmit(true)}>پایان اتاق</button>
                }
            </div>

        </article>
    )
}