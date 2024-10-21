import { BiKey } from "react-icons/bi";


export default function DataRoom() {
    return (
        <>
            <div className="box_key position-fixed z-2 p-1">
                <div className="box_icon_key">
                    <BiKey className="icon_key" />
                </div>
            </div>

            <div className="d-none box_data_room position-fixed top-50 start-50 translate-middle w-100 h-100 z-3">
                <div className="data_room shadow-lg position-absolute top-50 start-50 translate-middle w-75 gap-2 rounded-4 p-3 d-flex disabled flex-column justify-content-center align-items-center">
                    <div className="btn btn-dark w-100">
                        <p>شناسه : yaasinasaeb23</p>
                    </div>
                    <div className="btn btn-dark w-100">
                        <p>رمز : 11020450</p>
                    </div>
                </div>
            </div>
        </>
    )
}