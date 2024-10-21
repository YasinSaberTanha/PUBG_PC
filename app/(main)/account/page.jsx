

//import { FaCrown } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { PiMapPinPlus } from "react-icons/pi";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";

export default function Account() {



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

                <Link href={"/"} className="link w-100 d-flex justify-content-between align-items-center text-decoration-none">
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























{/* 



            <div className="box_user w-100 d-flex flex-column">

                <button className="setting position-relative w-100 rounded d-flex justify-content-center align-items-center">
                    <AiFillSetting />
                    <div className="box_setting w-100 h-100 position-absolute bg-primary align-items-center d-none gap-1  justify-content-around p-1 flex-column">
                        <Link href={"/"} className="w-100 h-50 btn btn-light">
                            تغییر رمز
                        </Link>
                        <Link href={"/"} className="w-100 h-50 btn btn-light">
                            تغییر اطلاعات
                        </Link>
                    </div>
                </button>

                <button className="money position-relative w-100 rounded d-flex justify-content-center align-items-center">
                    <RiMoneyDollarCircleFill />
                    <div className="box_money w-100 h-100 position-absolute d-none align-items-center gap-1 justify-content-between p-1 flex-column">
                        <p className="w-100 h-100 d-flex align-items-center justify-content-center">30,000</p>
                        <div className="w-100 d-flex align-items-center justify-content-center gap-1">
                            <Link href={"/"} className="btn btn-light w-50">برداشت</Link>
                            <Link href={"/"} className="btn btn-light  w-50">افزایش</Link>
                        </div>
                    </div>
                </button>

                <button className="team_add w-100 position-relative rounded d-flex justify-content-center align-items-center ">
                    <FaUsers />
                    <div className="box_team_add w-100 h-100 position-absolute align-items-center d-none gap-1 bg-success justify-content-around p-1 flex-column">
                        <input type="text" className="form-control text-center w-75 focus-ring focus-ring-success" placeholder="شناسه اتاق" />
                    </div>
                </button>

                <button className="create_room w-100 position-relative rounded d-flex justify-content-center align-items-center ">
                    <RiMapPinAddFill />
                    <div className="box_create_room w-100 h-100 position-absolute align-items-center d-none gap-1 bg-success justify-content-around p-1 flex-column">
                        <input type="text" className="form-control text-center w-75 focus-ring focus-ring-success" placeholder="شناسه اتاق" />
                    </div>
                </button> */}