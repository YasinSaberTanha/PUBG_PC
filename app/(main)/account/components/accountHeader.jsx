import Image from "next/image"
import { FaRegUser } from "react-icons/fa6";

export default function AccountHeader({ data }) {
    return (
        <div className="account_header w-100 d-flex align-items-center position-fixed start-0 top-0">
            <div className="account_image rounded h-100">
                {
                    data.game_photo ?
                        <Image src={`/users/${data.game_photo}`} alt="image" width={100} height={100} className="rounded" /> :
                        <FaRegUser className="icon_user border border-3 rounded w-100 h-100 p-4" />
                }

            </div>
            <div className="account_id p-3 h-100  d-flex flex-column justify-content-between align-content-center">
                {
                    data.game_name ?
                        <>
                            <h2 className="account_name overflow-x-scroll">{data.game_name}</h2>
                            <p className="account_game_id overflow-x-scroll">{data.game_id}</p>
                        </>
                        :
                        <>
                            <div className="w-100 p-2 rounded-2 mt-2 bg-secondary"></div>
                            <div className="w-100 p-1 rounded-2 mb-2 bg-secondary"></div>
                        </>
                }
            </div>
        </div>
    )
}