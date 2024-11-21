import "./dataRoom.css";
import Image from "next/image";
import Link from "next/link";

export default function DataRoom() {
    return (
        <section className="data_room_section w-100">
            <div className="data_room_admin d-flex p-2 align-items-center rounded-3">
                <Image src={"/image/download (2).jpg"} className="rounded" alt="image" width={80} height={80} />
                <div className="d-flex flex-column align-items-start gap-2 ms-3">
                    <span className="h4 m-0">yasin saber</span>
                    <span dir="ltr">0915 934 2983</span>
                </div>

                <span className="ms-5">شناسه : 123458</span>

                <button className="btn_ban_number btn btn-warning ms-5">
                    <p className="m-0">اشتباهات</p>
                    <p className="m-0">10</p>
                </button>
            </div>
            <div className="data_room_box w-100 d-sm-flex">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center flex-column gap-3 mb-5 pb-5">
                        <Image src={"/svg/gold.svg"} alt="image" width={100} height={100} />

                        <p className="h1">Erangel</p>

                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <p className="h3">برنده ها :</p> <span className="h1">200,000</span>
                        </div>

                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <p className="h5">کل :</p> <span className="h5">1,000,000</span>
                        </div>

                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <p className="h6">ورودی :</p> <span className="h5">10,000</span>
                        </div>

                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <p className="h6">تعداد :</p> <span className="h5">100</span>
                        </div>

                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <p className="h6">شناسه :</p> <span className="h6">4854</span>
                        </div>

                    </div>
                </div>

                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center flex-column gap-4 mb-5">
                        <Link href={"/admin/dataRoom/warning"} className="btn btn-danger">
                            گزارش ها : جاگیری : {1} \ شروع اتاق : {2} \ بیشتر : {0}
                        </Link>

                        <Link href={"/admin/dataRoom/imageRoom"} className="w-100 btn btn-success">
                            عکس ها : {4}
                        </Link>

                        <Link href={"/admin/dataRoom/investigation"} className="w-100 btn btn-primary">
                            برنده گان : {2}
                        </Link>

                        <div className="btn-group w-100">
                            <Link href={"/admin/dataRoom/players"} className="w-50 btn btn-secondary">
                                بازی کنان : {97}
                            </Link>
                            <button className="w-50 btn btn-secondary border-start">
                                بایگانی کردن
                            </button>
                        </div>

                        <button className="btn btn-dark">
                            تکمیل شده
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}