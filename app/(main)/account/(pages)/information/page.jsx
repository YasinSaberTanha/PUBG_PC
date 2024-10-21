import "./information.css"
import Link from "next/link"

export default function Information({ searchParams }) {
    return (
        <article className="information_article position-fixed start-0 top-0 w-100 z-1">
            <div className="head_link w-100 d-flex justify-content-between align-items-center">
                <Link className={
                    searchParams.visible == "data" ?
                        "link_visible link h-100 w-50 d-flex justify-content-center align-items-center text-decoration-none" :
                        "link_information w-50 d-flex justify-content-center align-items-center text-decoration-none"
                } href={{
                    pathname: "/account/information",
                    query: { visible: "data" }
                }} >حساب کاربری</Link>

                <Link className={
                    searchParams.visible == "password" ?
                        "link_visible link h-100 w-50 d-flex justify-content-center align-items-center text-decoration-none" :
                        "link_information w-50 d-flex justify-content-center align-items-center text-decoration-none"
                } href={{
                    pathname: "/account/information",
                    query: { visible: "password" }
                }} >رمز عبور</Link>
            </div>

            <div className="show_information w-100">
                {

                    searchParams.visible == "data" ?
                        <div className="w-100 p-4 d-flex flex-column gap-3">
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

                            <button className="btn btn-danger p-2 mt-3">ثبت</button>
                        </div>
                }
            </div>
        </article>
    )
}