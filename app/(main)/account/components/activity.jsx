//import { FaCrown } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { PiMapPinPlus } from "react-icons/pi";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";


export default function Activity() {
    return (
        <article className="account_article">

            <div className="box_activity d-flex flex-column w-100 align-items-center gap-2">
                <Link href={"/"} className="inventory p-1 w-100 h-100 text-decoration-none rounded-3 d-flex justify-content-center align-items-center">
                    <RiMoneyDollarCircleFill className="icon_inventory" />
                    <div className="overflow-hidden w-100  d-flex align-items-center justify-content-center gap-1">
                        <p>موجودی :</p> <span className="money">10,000,000 </span> <p>ت</p>
                    </div>
                </Link>

                <Link href={"/account/runningGame"} className="active_game p-1 w-100 h-100 text-decoration-none rounded-3 d-flex justify-content-center align-items-center">
                    <IoGameController className="icon_active_game" />
                    <div className="overflow-hidden w-100  d-flex align-items-center justify-content-center gap-1">
                        <p>این اتاق را به پایان رسانید</p>
                    </div>
                </Link>
            </div>

            <div className="box_link">
                <Link href={{
                    pathname: "/account/information",
                    query: { visible: "data" }
                }} className="link w-100 d-flex justify-content-between align-items-center text-decoration-none border-0">
                    <div className="d-flex align-items-center gap-2">
                        <IoSettingsOutline className="icon" /> <p>تنظیمات</p>
                    </div>
                    <FaChevronLeft className="chevron_icon" />
                </Link>

                <Link href={"/account/groupGame"} className="link w-100 d-flex justify-content-between align-items-center text-decoration-none">
                    <div className="d-flex align-items-center gap-2">
                        <LuUsers className="icon" strokeWidth={1.6} /> <p>بازیی گروهی</p>
                    </div>
                    <FaChevronLeft className="chevron_icon" />
                </Link>

                <Link href={"/account/productionRoom"} className="link w-100 d-flex justify-content-between align-items-center text-decoration-none">
                    <div className="d-flex align-items-center gap-2">
                        <PiMapPinPlus className="icon" /> <p>ساخت اتاق</p>
                    </div>
                    <FaChevronLeft className="chevron_icon" />
                </Link>

                <Link href={"/account/history"} className="link w-100 d-flex justify-content-between align-items-center text-decoration-none">
                    <div className="d-flex align-items-center gap-2">
                        <HiOutlineArchiveBoxArrowDown className="icon" strokeWidth={1.5} /> <p>بایگانی</p>
                    </div>
                    <FaChevronLeft className="chevron_icon" />
                </Link>
            </div>

        </article>
    )
}