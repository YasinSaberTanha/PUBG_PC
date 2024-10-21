import "./archive.css"
import Link from "next/link"

export default function Archive({ searchParams }) {
    return (
        <article className="running_game_article position-fixed w-100 start-0 top-0">
            <div className="head_link w-100 d-flex justify-content-between align-items-center">
                <Link className={
                    searchParams.visible == "win" ?
                        "link_visible link h-100 w-50 d-flex justify-content-center align-items-center text-decoration-none" :
                        "link_information w-50 d-flex justify-content-center align-items-center text-decoration-none"
                } href={{
                    pathname: "/account/archive",
                    query: { visible: "win" }
                }} >پیروزی</Link>

                <Link className={
                    searchParams.visible == "report" ?
                        "link_visible link h-100 w-50 d-flex justify-content-center align-items-center text-decoration-none" :
                        "link_information w-50 d-flex justify-content-center align-items-center text-decoration-none"
                } href={{
                    pathname: "/account/archive",
                    query: { visible: "report" }
                }} >گزارش</Link>
            </div>

            <div className="show_information w-100">
                {

                    searchParams.visible == "win" ?
                        <div className="w-100 p-4 d-flex flex-column gap-3">
                            <div>
                                <label htmlFor="" className="form-label">عکس :</label>
                                <div className="input-group custom-file-button">
                                    <label className="input-group-text" htmlFor="review-image" role="button">انتخاب عکس</label>
                                    <label htmlFor="review-image" className="form-control" id="review-image-label" role="button"> <span className="image_name">عکسی انتخاب نشده است</span></label>
                                    <input type="file" className="d-none" id="review-image" accept="image/*" />
                                </div>
                                <div className="p-2 pb-0">
                                    <span className="notice">این عکس را مشابه با عکسی که درون بازی استفاده میکنید اپلود کنید تا هویت شما در روم ها مورد تایید باشد</span>
                                </div>
                            </div>


                            <button className="btn btn-danger p-2 mt-3">ثبت</button>
                        </div>
                        :
                        <div className="w-100 p-4 d-flex flex-column gap-3">

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

                            <button className="btn btn-danger p-2 mt-3">ثبت</button>
                        </div>
                }
            </div>
        </article>
    )
}