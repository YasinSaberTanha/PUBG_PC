import "./history.css"
import Link from "next/link"
import Image from "next/image"
import { BiUserPin } from "react-icons/bi";
import { ImMobile2 } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";

export default function History() {
    return (
        <article className="history_article position-fixed w-100 start-0 top-0">
            <h2 className="head_history text-center">بازی های به اتمام رسیده</h2>
            <div className="box_history w-100 h-100">

                <div className="map_border">
                    <Link href={{
                        pathname: "/account/archive",
                        query: { visible: "win" }
                    }} className="map w-100 d-flex text-decoration-none align-items-center">

                        <div>
                            <Image src={"/svg/bronze.svg"} className="helmet_icon" alt="helmet" width={70} height={70} />
                        </div>

                        <div className="ms-3 d-flex w-100 justify-content-between align-items-center">
                            <div className="price_box d-flex flex-column justify-content-between align-items-start">
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <FiUser className="price" /><span className="count_user">1</span>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <LuLogIn className="price" /><span className="price_login">10,000</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="me-5">
                                    <FiMonitor className="map_pc_icon" />
                                </div>

                                <div className="map_user">
                                    <div className=" d-flex flex-column justify-content-center align-items-center">
                                        <BiUserPin className="map_user_icon" />
                                        <span className="map_user_login">45</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div >

                <div className="map_border">
                    <Link href={"/"} className="map w-100 d-flex text-decoration-none align-items-center">
                        <div>
                            <Image src={"/svg/bronze.svg"} className="helmet_icon" alt="helmet" width={70} height={70} />
                        </div>

                        <div className="ms-3 d-flex w-100 justify-content-between align-items-center">
                            <div className="price_box d-flex flex-column justify-content-between align-items-start">
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <FiUser className="price" /><span className="count_user">1</span>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <LuLogIn className="price" /><span className="price_login">10,000</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="me-5">
                                    <ImMobile2 className="map_mobile_icon" />
                                </div>

                                <div className="map_user">
                                    <div className=" d-flex flex-column justify-content-center align-items-center">
                                        <BiUserPin className="map_user_icon" />
                                        <span className="map_user_login">45</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div >

            </div>
        </article>
    )
}