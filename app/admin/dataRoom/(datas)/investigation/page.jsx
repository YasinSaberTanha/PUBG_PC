"use client"
import "./investigation.css"
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineWallet } from "react-icons/hi2";

export default function Warning() {



    return (
        <section className="investigation_section py-4">
            <div>

                <details>
                    <summary>نیرومند می‌شوند و در سایهٔ نیرومندی </summary>
                    <div className="d-flex align-items-center gap-3 mt-3">
                        <p className="h6">شناسه :</p> <span className="h6">4854</span>
                    </div>
                    <div dir="ltr" className="w-100 d-flex flex-column align-items-center">
                        <img src="/image/download_11zon.png" className="image_room" alt="image" />
                        <span>1334SQx3#$1234</span>
                        <span>1334SQx3#$1234</span>
                    </div>

                    <div className="d-flex justify-content-between">
                        <input type="checkbox" className="btn-check" id="btn-check-2" checked autocomplete="off"
                            onChange={(e) => {
                                if (e.target.parentElement.parentElement.firstElementChild.style.backgroundColor == "green") {
                                    e.target.parentElement.parentElement.firstElementChild.style.backgroundColor = "#ffffff"
                                }
                                else {
                                    e.target.parentElement.parentElement.firstElementChild.style.backgroundColor = "green"
                                }
                            }} />
                        <label className="btn btn-success" htmlFor="btn-check-2"><AiOutlineLike /></label>

                        <button className="btn btn-primary">
                            <HiOutlineWallet />
                        </button>
                    </div>
                </details>
                <hr />
                
            </div>
        </section >

    )
}