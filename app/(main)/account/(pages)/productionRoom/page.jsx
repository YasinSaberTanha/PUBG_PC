"use client"
import "./productionRoom.css"

export default function ProductionRoom() {
    return (
        <article className="production_room_article position-fixed top-0 w-100 z-1 overflow-y-scroll">
            <h2 className="head_history text-center">ساخت اتاق</h2>
            <div className="w-100">
                <div className="w-100 p-4 ">
                    <div className="show_information_item d-flex flex-column gap-3">


                        <div>
                            <label htmlFor="" className="form-label">نام اتاق :</label>
                            <input type="text" name="" className="form-control" />
                        </div>

                        <div>
                            <label htmlFor="" className="form-label">شناسه اتاق :</label>
                            <input type="text" name="" className="form-control" />
                        </div>

                        <div>
                            <label htmlFor="" className="form-label">رمز عبور :</label>
                            <input type="text" name="" className="form-control" />
                        </div>

                        <div>
                            <label htmlFor="" className="form-label">نوع اتاق :</label>
                            <select className="form-select" aria-label="size 2 select example">
                                <option>انتخاب کنید</option>
                                <option value="1">ٍErangel</option>
                                <option value="1">Erangel-Mode</option>
                                <option value="1">Livik</option>
                                <option value="1">Livik-Mode</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="" className="form-label">ورودی :</label>
                            <select className="form-select" aria-label="size 2 select example">
                                <option>انتخاب کنید</option>
                                <option value="1">3,000</option>
                                <option value="1">5,000</option>
                                <option value="1">10,000</option>
                                <option value="1">15,000</option>
                                <option value="1">20,000</option>
                                <option value="1">25,000</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-danger p-2 mt-4 w-100">ثبت</button>
                    <br className="br" />
                </div>
            </div>
        </article>
    )
}