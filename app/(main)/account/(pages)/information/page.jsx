"use client"
import "./information.css"
import Link from "next/link"
import { useState } from "react"

export default function Information(props) {
    const [pages, setPages] = useState("data")

    return (
        <article className="information_article position-fixed top-0 w-100">
            <div className="head_link w-100 d-flex justify-content-between align-items-center  ">
                <button onClick={() => setPages("data")} className={
                    pages == "data" ?
                        "link_visible link h-100 h-100  w-50 d-flex justify-content-center align-items-center rounded-top-4" :
                        "link_information w-50 h-100  d-flex justify-content-center align-items-center rounded-top-4"
                }>حساب کاربری</button>

                <button onClick={() => setPages("password")} className={
                    pages == "password" ?
                        "link_visible link h-100 w-50 d-flex justify-content-center align-items-center rounded-top-4" :
                        "link_information h-100 w-50 d-flex justify-content-center align-items-center rounded-top-4"
                }>رمز عبور</button>
            </div>

            <div className="show_information w-100 h-100 overflow-y-scroll">
                {

                    pages == "data" ?
                        <div className=" w-100 p-4 ">
                            <div className="show_information_item d-flex flex-column gap-3">


                                <div>
                                    <label htmlFor="" className="form-label">نام :</label>
                                    <input type="text" name="" className="form-control" />
                                </div>

                                <div>
                                    <label htmlFor="" className="form-label">شناسه :</label>
                                    <input type="text" name="" className="form-control" />
                                </div>

                                <div>
                                    <label htmlFor="" className="form-label">شماره کارت :</label>
                                    <input type="text" name="" className="form-control" />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="form-label">عکس :</label>
                                    <div className="input-group custom-file-button">

                                        <label className="input-group-text" htmlFor="review-image" role="button">انتخاب عکس</label>
                                        <label htmlFor="review-image" className="form-control rounded-end-2" id="review-image-label" role="button"> <span className="image_name">عکسی انتخاب نشده است</span></label>
                                        <input type="file" className="d-none" id="review-image" accept="image/*" />
                                    </div>
                                    <div className="p-2 pb-0">
                                        <span className="notice">این عکس را مشابه با عکسی که درون بازی استفاده میکنید اپلود کنید تا هویت شما در روم ها مورد تایید باشد</span>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-danger p-2 mt-3 w-100">ثبت</button>
                            <br className="br" />
                        </div>
                        :
                        <div className="w-100 p-4 ">
                            <div className="show_information_item d-flex flex-column gap-3">
                                <div>
                                    <label htmlFor="" className="form-label">رمز عبور :</label>
                                    <input type="text" name="" className="form-control" />
                                </div>

                                <div>
                                    <label htmlFor="" className="form-label">رمز عبور جدید :</label>
                                    <input type="text" name="" className="form-control" />
                                </div>

                                <div>
                                    <label htmlFor="" className="form-label">تکرار رمز عبور :</label>
                                    <input type="text" name="" className="form-control" />
                                </div>
                            </div>
                            <button className="btn btn-danger p-2 mt-4 w-100">ثبت</button>
                            <br className="br" />
                        </div>
                }
            </div>
        </article>
    )
}