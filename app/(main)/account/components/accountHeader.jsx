import Image from "next/image"

export default function AccountHeader() {
    return (
        <div className="account_header w-100 d-flex align-items-center position-fixed start-0 top-0">
            <div className="account_image rounded h-100">
                <Image src={"/image/download (1)_11zon.png"} alt="image" width={100} height={100}/>
            </div>
            <div className="account_id p-3 h-100  d-flex flex-column justify-content-between align-content-center">
                <h2 className="account_name overflow-x-scroll">YST</h2>
                <p className="account_game_id overflow-x-scroll">023104523103</p>
            </div>
        </div>
    )
}