import "./setting.css"
import Image from "next/image"
export default function Setting() {
    return (
        <section className="setting_section p-2 p-lg-5">
            <form className="setting_form">
                <div>
                    <label htmlFor="" className="form-label">بنر صفحه اصلی :</label>
                    <input type="file" className="form-control" name="" id="" />
                </div>
            </form>

            <div className="mt-5 d-flex flex-column gap-3">

                <div dir="ltr" className="box_image_baner p-2 rounded d-flex justify-content-between">
                    <Image src={"/image/download_11zon.png"} className="image_baner rounded" alt="image" width={100} height={60} />
                    <div className="d-flex flex-column justify-content-between align-items-end">
                        <button className="btn-close"></button>
                        <div className="d-flex gap-2">
                            <input type="text" className="form-control text-center" name="" id="" />
                            <button className="btn btn-danger">ثبت</button>
                        </div>
                    </div>
                </div>

                <div dir="ltr" className="box_image_baner p-2 rounded d-flex justify-content-between">
                    <Image src={"/image/download_11zon.png"} className="image_baner rounded" alt="image" width={100} height={60} />
                    <div className="d-flex flex-column justify-content-between align-items-end">
                        <button className="btn-close"></button>
                        <div className="d-flex gap-2">
                            <input type="text" className="form-control text-center" name="" id="" />
                            <button className="btn btn-danger">ثبت</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}