"use client"
import "./tabbedPage.css";
import Link from "next/link";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { LuBookOpen } from "react-icons/lu";
import { usePathname } from "next/navigation";


export default function TabbedPage() {

    const url = usePathname()

    return (
        <div className="tabbed_Page position-fixed">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-sm-column justify-content-sm-around justify-content-lg-start gap-lg-5 pt-lg-5">
                <Link href="/" className="tabbed_Page_link w-100 text-decoration-none d-flex justify-content-center flex-column align-items-center gap-lg-2">
                    <BiSolidHomeAlt2 className={
                        url == "/" ?
                            "tabbed_Page_icon on_focus" :
                            "tabbed_Page_icon"
                    } strokeWidth={3} />
                    <p className="tabbed_Page_text">خانه</p>
                </Link>

                <Link href="/account" className="tabbed_Page_link w-100 text-decoration-none d-flex justify-content-center flex-column align-items-center gap-lg-2">
                    <HiOutlineUser className={
                        url.startsWith("/account") ?
                            "tabbed_Page_icon on_focus" :
                            "tabbed_Page_icon"
                    } strokeWidth={3} />
                    <p className="tabbed_Page_text">اکانت</p>
                </Link>

                <Link href="/" className="tabbed_Page_link w-100 text-decoration-none d-flex justify-content-center flex-column align-items-center gap-lg-2">
                    <LuBookOpen className={
                        url.startsWith("/amozas") ?
                            "tabbed_Page_icon on_focus" :
                            "tabbed_Page_icon"
                    } strokeWidth={3} />
                    <p className="tabbed_Page_text">اموزش</p>
                </Link>
            </div>
        </div>
    )
}