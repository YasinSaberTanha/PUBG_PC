import "./production.css"
import { IoCloseSharp } from "react-icons/io5";

export default function Production() {
    return (
        <article className="production_article position-fixed top-0 w-100 z-1 overflow-y-scroll">
            <h2 className="head_history text-center">احراز هویت</h2>
            <div className="d-none alert_box d-flex justify-content-center align-items-center position-fixed start-0 top-0 w-100 h-100 bg-black bg-opacity-50 z-3">
                <div className="alert_header w-75 h-50 rounded-3 position-relative">
                    <h5 className="text-center position-absolute start-50 top-0 translate-middle-x mt-2">قوانین</h5>
                    <button className="btn">
                        <IoCloseSharp className="Close_alert_icon" />
                    </button>

                    <hr />
                    <div className="w-100 px-4 pt-2 h-100 ">
                        <p className="w-100 overflow-y-scroll">

                            مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…

                            مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…

                            <button className="btn btn-danger p-2 w-100 mt-3">موافقم</button>
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-100">
                <div className="w-100 p-4 d-flex flex-column gap-3">
                    <div>
                        <label htmlFor="" className="form-label">نام :</label>
                        <input type="text" name="" className="form-control" />
                    </div>

                    <div>
                        <label htmlFor="" className="form-label">نام خانوادگی :</label>
                        <input type="text" name="" className="form-control" />
                    </div>

                    <div>
                        <label htmlFor="" className="form-label">تاریخ تولد :</label>
                        <input type="text" name="" className="form-control" />
                    </div>

                    <div>
                        <label htmlFor="" className="form-label">عکس شما :</label>
                        <div className="input-group custom-file-button">

                            <label className="input-group-text" htmlFor="review-image" role="button">انتخاب عکس</label>
                            <label htmlFor="review-image" className="form-control" id="review-image-label" role="button"> <span className="image_name">عکسی انتخاب نشده است</span></label>
                            <input type="file" className="d-none" id="review-image" accept="image/*" />
                        </div>
                        <div className="p-2 pb-0">
                            <span className="notice">این عکس را مشابه با عکسی که درون بازی استفاده میکنید اپلود کنید تا هویت شما در روم ها مورد تایید باشد</span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="" className="form-label">عکس کارت ملی :</label>
                        <div className="input-group custom-file-button">

                            <label className="input-group-text upload_image_btn" htmlFor="review-image" role="button">انتخاب عکس</label>
                            <label htmlFor="review-image" className="form-control" id="review-image-label" role="button"> <span className="image_name">عکسی انتخاب نشده است</span></label>
                            <input type="file" className="d-none" id="review-image" accept="image/*" />
                        </div>
                        <div className="p-2 pb-0">
                            <span className="notice">این عکس را مشابه با عکسی که درون بازی استفاده میکنید اپلود کنید تا هویت شما در روم ها مورد تایید باشد</span>
                        </div>
                    </div>

                    <div className="d-flex gap-2 align-items-center">
                        <input type="checkbox" name="" id="checkbox" className="checkbox" />
                        <label htmlFor="checkbox">با قوانین موافقم</label>
                    </div>

                    <button className="btn btn-danger p-2 mt-3">ثبت</button>
                </div>
            </div>
        </article>
    )
}