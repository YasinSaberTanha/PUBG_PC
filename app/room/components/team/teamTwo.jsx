import "./teamTwo.css"
import Image from "next/image"
import { FaRegUser } from "react-icons/fa6";

export default function TeamTwo({ team, index }) {
    return (
        <div className="team w-100 m-auto">
            <div className="team_name z-2 text-center">
                گروه {index}
            </div>
            <div className="team_members w-100 d-flex justify-content-between align-items-center p-3 rounded gap-3">
                {
                    team[0].user_id ?
                        <div className="rounded position-relative">
                            <Image src={`/users/${team[0].game_photo}`} className="h-100 w-100 rounded" alt="image" width={50} height={50} />
                            <div dir="ltr" className="w-100 bg-black h-25 position-absolute bg-opacity-50 bottom-0 start-0 rounded-bottom px-1 d-flex justify-content-center align-items-center">
                                <span className="name_palyer_box h-100 d-flex justify-content-start align-items-center overflow-y-hidden overflow-x-scroll">
                                    <span className="name_palyer">{team[0].game_name}</span>
                                </span>
                            </div>
                        </div> :
                        <div className="rounded position-relative">
                            <FaRegUser className="icon_user border border-3 rounded w-100 h-100 p-4" />
                        </div>
                }

                {
                    team[1].user_id ?
                        <div className="rounded position-relative">
                            <Image src={`/users/${team[1].game_photo}`} className="h-100 w-100 rounded" alt="*" width={50} height={50} />
                            <div dir="ltr" className="w-100 bg-black h-25 position-absolute bg-opacity-50 bottom-0 start-0 rounded-bottom px-1 d-flex justify-content-center align-items-center">
                                <span className="name_palyer_box h-100 d-flex justify-content-start align-items-center overflow-y-hidden overflow-x-scroll">
                                    <span className="name_palyer">{team[1].game_name}</span>
                                </span>
                            </div>
                        </div> :
                        <div className="rounded position-relative">
                            <FaRegUser className="icon_user border border-3 rounded w-100 h-100 p-4" />
                        </div>
                }
            </div>
        </div>
    )
}