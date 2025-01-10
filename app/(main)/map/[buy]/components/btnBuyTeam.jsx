"use client"
import CreateFormData from '@/app/layout/functions/createFormData';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BtnBuyTeam({ NumberAmount, idMap }) {

    const router = useRouter()
    const [btnSubmit, setBtnSubmit] = useState(false)
    const [loding, setLoding] = useState(false)

    const BuyTeam = async () => {
        try {
            setLoding(true);

            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NEXT}/program/buyTeam/`, {
                method: "POST",
                body: CreateFormData({ map_id: idMap })
            });
            console.log(idMap);
            const data = await result.json();
            console.log(data);
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
                <button className="btn btn_teams w-100 btn-primary d-flex align-items-center justify-content-center gap-2"><div className="loader"></div></button>
                :
                btnSubmit ?
                    <div className="btn-group w-100">
                        <button className="btn btn-outline-success w-50" onClick={() => { BuyTeam(); setBtnSubmit(false) }}>خرید</button>
                        <button className="btn btn-outline-primary   w-50" onClick={() => setBtnSubmit(false)}>لغو</button>
                    </div>
                    :
                    <button className="btn btn_teams w-100 btn-primary d-flex align-items-center justify-content-center gap-2"
                        onClick={() => setBtnSubmit(true)}
                    >  بازی گروهی <span>{NumberAmount}</span></button>
            }
        </>
    )
}