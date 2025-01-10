import Link from "next/link";
import Image from "next/image"
import { BiUserPin } from "react-icons/bi";
import { ImMobile2 } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";



export default function Maps({ data, slug }) {

    const InputAmount = (text) => {
        text = text.toString()
        return text.slice(0, -3) + "," + text.slice(-3)
    }

    return (
        <div className="map_border">
            <Link href={{
                pathname: `map/${data.map_id}/`,
                query: {
                    slug: slug,
                }
            }} className="map w-100 d-flex text-decoration-none align-items-center">
                <div>
                    <Image src={`/svg/${data.level_svg}`} className="helmet_icon" alt="helmet" width={70} height={70} />
                </div>

                <div className="ms-3 d-flex w-100 justify-content-between align-items-center">
                    <div className="price_box d-flex flex-column justify-content-between align-items-start">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <FiUser className="price" /><span className="count_user">{data.multi_player}</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <LuLogIn className="price" /><span className="price_login">
                                {
                                    InputAmount(data.input_amount)
                                }
                            </span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">

                        <div className="me-5">
                            {data.license_pc ? <FiMonitor className="map_pc_icon" /> : <ImMobile2 className="map_mobile_icon" />}
                        </div>

                        <div className="map_user">
                            <div className=" d-flex flex-column justify-content-center align-items-center">
                                <BiUserPin className="map_user_icon" />
                                <span className="map_user_login">{data.number_players}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    )
}