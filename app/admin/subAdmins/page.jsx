import "./subAdmins.css"
import Image from "next/image"

export default function SubAdmins() {
    return (
        <section className="sub_admin_section">
            <div className="w-100 d-flex flex-column gap-3 pt-4">

                <details>
                    <summary className="h2 m-0">Sub Admin</summary>
                    <div className="w-100 d-flex flex-column gap-3 pt-4">

                        <div className="data_room_admin d-flex p-2 align-items-center rounded-3">
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

                <details>
                    <summary className="h2 m-0">Advanced User</summary>
                    <div className="w-100 d-flex flex-column gap-3 pt-4">

                        <div className="data_room_admin d-flex p-2 align-items-center rounded-3">
                            <Image src={"/image/download (2).jpg"} className="rounded" alt="image" width={80} height={80} />
                            <div className="d-flex flex-column align-items-start gap-2 ms-3">
                                <span className="h4 m-0">yasin saber</span>
                                <span >123458</span>
                            </div>
                            <span dir="ltr" className="ms-5">0915 934 2983</span>


                            <div className="btn_ban_number btn btn-danger ms-5">
                                10
                            </div>

                            <button className=" btn btn-warning ms-3">
                                حذف
                            </button>
                        </div>


                        <div className="data_room_admin d-flex p-2 align-items-center rounded-3">
                            <Image src={"/image/download (2).jpg"} className="rounded" alt="image" width={80} height={80} />
                            <div className="d-flex flex-column align-items-start gap-2 ms-3">
                                <span className="h4 m-0">yasin saber</span>
                                <span >123458</span>
                            </div>
                            <span dir="ltr" className="ms-5">0915 934 2983</span>


                            <div className="btn_ban_number btn btn-danger ms-5">
                                10
                            </div>

                            <button className=" btn btn-warning ms-3">
                                حذف
                            </button>
                        </div>
                    </div>
                </details>


            </div>

        </section>
    )
}