import { HiMenu } from "react-icons/hi";


export default function DataRoom() {
    return (
        <>
            <div className="box_key position-fixed z-2 p-0 m-1">
                <div className="box_icon_key p-1">
                    <HiMenu className="icon_key" />
                </div>
            </div>

            <div className="d-none box_data_room position-fixed top-50 start-50 translate-middle w-100 h-100 z-3">
                <div className="data_room position-absolute top-50 start-50 translate-middle w-100 h-100 gap-2 p-3 d-flex disabled flex-column align-items-center">

                    <div className="h-auto w-100">
                        <div className=" w-100"><button type="button" className="btn-close p-2" aria-label="Close"></button></div>
                    </div>


                    <div className="pass_room w-75 h-100 justify-content-center d-flex flex-column gap-2">
                        <div className="btn_mode btn btn-dark w-100">
                            <p>شناسه : yaasinasaeb23</p>
                        </div>
                        <div className="btn_mode btn btn-dark w-100">
                            <p>رمز : 11020450</p>
                        </div>

                        <div className="btn_mode_warning btn btn-danger w-100">
                            <p>گزارش خطا</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="d-none box_data_room position-fixed top-50 start-50 translate-middle w-100 h-100 z-3">
                <div className="data_room position-absolute top-50 start-50 translate-middle w-100 h-100 gap-2 p-3 d-flex disabled flex-column align-items-center">
                    <div className="h-auto w-100">
                        <div className=" w-100"><button type="button" className="btn-close p-2" aria-label="Close"></button></div>
                    </div>


                    <div className="pass_room w-75 h-100 justify-content-center d-flex flex-column gap-2">

                        <button className="btn_mode_warning btn btn-danger w-100">روم بدون من شروع شده </button>


                        <button className="btn_jay btn btn-primary w-100">جای من در روم گرفته شده بود</button>

                        <button className="btn_jay btn btn-success w-100">بیشتر</button>


                        <div className="d-none d-flex flex-column gap-2">
                            <div>
                                <label htmlFor="" className="form-label">توضیحات : </label>
                                <textarea className="form-control" name="" id=""></textarea>
                            </div>

                            <button className="btn_mode_warning btn btn-danger w-100">ثبت</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}