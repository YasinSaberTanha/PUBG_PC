import "./tabbedPage.css";
import Link from "next/link";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi2";
import { LuBookOpen } from "react-icons/lu";

export default function TabbedPage() {
    return (
        <div className="tabbed_Page position-fixed start-0 bottom-0 w-100 d-grid">
            <div className="row p-1">
                <Link href="/" className="col text-decoration-none d-flex justify-content-center flex-column align-items-center">
                    <BiSolidHomeAlt2 className="tabbed_Page_icon" strokeWidth={3} />
                    <p className="tabbed_Page_text">خانه</p>
                </Link>

                <Link href="/account" className="col text-decoration-none d-flex justify-content-center flex-column align-items-center">
                    <HiOutlineUser className="tabbed_Page_icon" strokeWidth={3} />
                    <p className="tabbed_Page_text">اکانت</p>
                </Link>

                <Link href="/" className="col text-decoration-none d-flex justify-content-center flex-column align-items-center">
                    <LuBookOpen className="tabbed_Page_icon" strokeWidth={3} />
                    <p className="tabbed_Page_text">اموزش</p>
                </Link>
            </div>
        </div>
    )
}