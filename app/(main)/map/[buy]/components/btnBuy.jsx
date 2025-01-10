"use client"
import "@/app/layout/loding/doteLoader/doteLoder.css";
import { toast } from 'react-toastify';
import CreateFormData from "@/app/layout/functions/createFormData";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BtnBuy({ NumberAmount, idMap }) {

    const router = useRouter()
    const [btnSubmit, setBtnSubmit] = useState(false)
    const [loding, setLoding] = useState(false)

    const Buy = async () => {
        try {
            setLoding(true);
            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NEXT}/program/buy/`, {
                method: "POST",
                body: CreateFormData({ map_id: idMap })
            });
            const data = await result.json();

            switch (data.status) {
                case true:
                    toast.success("خرید انجام شد")
                    router.push(`/room?map_id=${idMap}`)
                    break;
                case false:
                    toast.error("موجودی شما کافی نیست")
                    break;
                default:
                    toast.error(data)
                    break;
            }
        } catch {
            toast.error("مشکلی پیش آمده دوباره تلاش کنید")
        } finally {
            setLoding(false);
        }
    }

    return (
        <>
            {loding ?
                <button className="btn btn_buy w-100 btn-danger d-flex align-items-center justify-content-center gap-2"><div className="loader"></div></button>
                :
                btnSubmit ?
                    <div className="btn-group w-100">
                        <button className="btn btn-outline-success w-50" onClick={() => { Buy(); setBtnSubmit(false) }}>خرید</button>
                        <button className="btn btn-outline-danger w-50" onClick={() => setBtnSubmit(false)}>لغو</button>
                    </div>
                    :
                    <button className="btn btn_buy w-100 btn-danger d-flex align-items-center justify-content-center gap-2"
                        onClick={() => setBtnSubmit(true)}
                    > بازی تکی<span>{NumberAmount}</span></button>
            }
        </>

    )
}