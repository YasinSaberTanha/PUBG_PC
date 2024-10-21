import "./login.css"
import Link from "next/link"
import { LuPhone } from "react-icons/lu";
import { RiLock2Line } from "react-icons/ri";
import { LuKey } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

export default function Login() {
    return (
        <section className="login_section position-fixed start-0 top-0 w-100 h-100 z-1">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center p-4">
                <form className="w-100">
                    <div className="box_login w-100 d-flex flex-column p-4 rounded-5 mb-5">
                        <h2 className="text-center mb-3">عضویت</h2>

                        <div className="input-group  mt-4">
                            <input type="text" id="" className="input form-control focus-ring focus-ring-light" placeholder="نام کاربری" />
                            <span className="input-group-text"> <FaRegUser style={{ padding: 0.5}} /></span>
                        </div>

                        <div className="input-group  mt-4">
                            <input type="text" id="" className="input form-control focus-ring focus-ring-light" placeholder="شماره موبایل" />
                            <span className="input-group-text"> <LuPhone /></span>
                        </div>

                        <div className="input-group mt-4">
                            <input type="text" id="" className="input form-control focus-ring focus-ring-light" placeholder="رمز عبور" />
                            <span className="input-group-text"> <RiLock2Line /></span>
                        </div>

                        <div className="input-group mt-4">
                            <input type="text" id="" className="input form-control focus-ring focus-ring-light" placeholder="تکرار رمز عبور" />
                            <span className="input-group-text"> <LuKey /></span>
                        </div>

                        <button className="btn_submit btn-danger btn mt-4">ثبت</button>

                        <div className="d-flex gap-2 justify-content-center mt-4">
                            <p className=""> حساب کاربری دارید ؟ </p>
                            <Link href={"/login"} className="link-primary text-decoration-none ">وارد شوید</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}