import "./validity.css"
import Image from "next/image"

export default function Validity() {
    return (
        <section className="validity_section">
            <div className="w-100 d-flex flex-column pt-4">
                <details>
                    <summary className="h5 m-0">Sub Admin</summary>
                    <div className="w-100 d-flex flex-column gap-3 pt-2">

                        <div className="data_room_admin d-flex p-2 align-items-center rounded-3">
                            <Image src={"/image/download (2).jpg"} className="rounded" alt="image" width={100} height={100} />
                            <div className="d-flex flex-column align-items-start gap-3 ms-3">
                                <span className="h4 m-0">yasin saber</span>
                                <span >123458</span>
                            </div>
                            <span dir="ltr" className="ms-5">0915 934 2983</span>

                            <button className="btn_ban_number btn btn-danger ms-3">
                                حذف
                            </button>
                            <button className="btn btn-success ms-3">
                                تایید
                            </button>

                        </div>
                    </div>
                </details>

                <hr />
        

            </div>
        </section>
    )
}