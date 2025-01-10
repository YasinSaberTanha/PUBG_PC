import "./buy.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from "@/app/layout/header/header"
import Image from "next/image"
import BtnBuyTeam from "./components/btnBuyTeam"
import BtnBuy from "./components/btnBuy"
import { cookies } from "next/headers";
import JWT from "jsonwebtoken"
import { redirect } from "next/navigation";

export default async function Buy({ params, searchParams }) {

    const cookie = (await cookies()).get("Token_User");

    if (!cookie) {
        redirect("/login")
    } else if (!JWT.decode(cookie.value).game_id) {
        redirect("/account/information")
    }

    const idMap = (await params).buy;

    const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/program/getBuy/?map_id=${idMap}`)
    const map = await result.json()

    const NumberAmount = (number) => {
        number = number.toString()
        if (number.length < 7) {
            return number.slice(0, -3) + "," + number.slice(-3)
        } else {
            return number.slice(0, -6) + "," + number.slice(-6, -3) + "," + number.slice(-3)
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
            <Header slug={(await searchParams).slug} />
            <section className="buy_section d-lg-flex justify-content-lg-center align-items-lg-center">
                <div className="buy_box shadow-lg mt-4 pb-3 rounded-5">
                    <div className="buy_header_icon w-100 d-flex justify-content-center align-items-center p-5">
                        <Image className="header_icon" src={`/svg/${map.level_svg}`} alt="image" width={90} height={90} priority />
                    </div>
                    <div className="data_map w-100 d-flex justify-content-center align-items-center flex-column flex-lg-column-reverse gap-3">
                        <p className="m-0">جایزه تا به الان : <span>{map.number_players && NumberAmount(map.input_amount * map.number_players)}</span></p>
                        <p className="m-0">جایزه کل : <span>{NumberAmount(map.input_amount * map.maximum_player)}</span></p>
                        <p className="m-0">گروه های : <span>{map.multi_player}</span> نفره</p>
                        <p className="m-0">بازیکنان : <span>{map.number_players}</span></p>
                    </div>
                    <div className="buy_map w-100 position-absolute z-3 gap-2 d-flex flex-column justify-content-center align-items-center p-3">
                        {map.multi_player == 1 || <BtnBuyTeam idMap={idMap} NumberAmount={NumberAmount(map.input_amount * map.multi_player)} />}
                        <BtnBuy idMap={idMap} NumberAmount={NumberAmount(map.input_amount)} />
                    </div>
                </div>
            </section>
        </>
    )
}