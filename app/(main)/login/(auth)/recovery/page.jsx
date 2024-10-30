import "./recovery.css"
import Link from "next/link"
import { LuPhone } from "react-icons/lu";
import { RiLock2Line } from "react-icons/ri";

export default function CreateAccount() {
    return (
        <section className="login_section position-fixed start-0 top-0 w-100 h-100 z-1">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center p-4">
                <form className="form_box w-100">
                    <div className="box_login w-100 d-flex flex-column p-4 rounded-5 mb-5">
                        <h2 className="text-center mb-2">احزار هویت</h2>

                        <div className="mt-3">
                            <input type="text" id="" className="input form-control focus-ring focus-ring-light text-center" placeholder="شماره موبایل" />
                        </div>

                        

                        <button className="btn_submit btn-danger btn mt-4">ورود</button>
                    </div>
                </form>
            </div>
        </section>
    )
}