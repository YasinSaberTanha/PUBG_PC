"use client"
import "./archive.css"
import Link from "next/link"
import { useState } from "react"

export default function Archive() {

    const [pages, setPages] = useState("win")

    return (
        <article className="running_game_article position-fixed w-100 top-0">
            <div className="head_link w-100 d-flex justify-content-between align-items-center">
                <button onClick={() => setPages("win")} className={
                    pages == "win" ?
                        "link_visible link h-100 h-100  w-50 d-flex justify-content-center align-items-center rounded-top-4" :
                        "link_information w-50 h-100  d-flex justify-content-center align-items-center rounded-top-4"
                }>پیروزی</button>

                <button onClick={() => setPages("report")} className={
                    pages == "report" ?
                        "link_visible link h-100 h-100  w-50 d-flex justify-content-center align-items-center rounded-top-4" :
                        "link_information w-50 h-100  d-flex justify-content-center align-items-center rounded-top-4"
                }>گزارش</button>
            </div>

            <div className="show_information w-100">
                {

                    pages == "win" ?
                        <div className="w-100 p-4">
                            <div className="show_information_item d-flex flex-column gap-3">


                                <div>
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
                            <button className="btn btn-danger p-2 mt-4 w-100">ثبت</button>
                        </div>
                        :
                        <div className="w-100 p-4 ">
                            <div className="show_information_item d-flex flex-column gap-3">

                                <div>
                                    <label htmlFor="" className="form-label">شناسه فرد : </label>
                                    <input type="text" name="" className="form-control" />
                                </div>

                                <div>
                                    <label htmlFor="" className="form-label">فیلم :</label>
                                    <div className="input-group custom-file-button">
                                        <label className="input-group-text" htmlFor="review-image" role="button">انتخاب فیلم</label>
                                        <label htmlFor="review-image" className="form-control" id="review-image-label" role="button"> <span className="image_name">فیلم انتخاب نشده است</span></label>
                                        <input type="file" className="d-none" id="review-image" accept="image/*" />
                                    </div>
                                    <div className="p-2 pb-0">
                                        <span className="notice">این عکس را مشابه با عکسی که درون بازی استفاده میکنید اپلود کنید تا هویت شما در روم ها مورد تایید باشد</span>
                                    </div>
                                </div>

                            </div>
                            <button className="btn btn-danger p-2 mt-4 w-100">ثبت</button>
                        </div>
                }
            </div>
        </article >
    )
}