import "./players.css"
import Image from "next/image"

export default function Players() {
    return (
        <section className="players_section">
            <div className="w-100 d-flex flex-column pt-4">
                <details>
                    <summary className="h4 m-0">Sub Admin</summary>
                    <div className="w-100 d-flex flex-column gap-3 pt-2">

                        <div className="d-flex p-1 align-items-center rounded-3">
                            <Image src={"/image/download (2).jpg"} className="rounded" alt="image" width={80} height={80} />
                            <div className="d-flex flex-column align-items-start gap-2 ms-3">
                                <span className="h4 m-0">yasin saber</span>
                                <span >123458</span>
                            </div>
                            <span dir="ltr" className="ms-5">0915 934 2983</span>

                            <button className="btn_ban_number btn btn-warning ms-3">
                                حذف
                            </button>
                        </div>
                    </div>
                </details>
                <hr />

            </div>
        </section>
    )
}