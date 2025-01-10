import "./productionVeiw.css"
import TeamFore from "@/app/room/components/team/teamFour";
import Link from "next/link";

export default function ProductionVeiw() {
    return (
        <div className="production_view position-fixed  top-0 start-0 h-100 w-100 z-1 overflow-y-scroll">

            <div className="production_view_header w-100 d-flex align-items-center p-3">
                <Link href={"/account/production"} className="btn btn-close me-3"></Link>
                <div className="d-flex gap-3 flex-column flex-md-row">
                    <span>نام : 1204060990</span>
                    <span>رمز : 1204060990</span>
                    <span>شناشه : 1204060990</span>
                </div>
                <div className="ms-auto d-flex align-items-center">
                    <span className="me-2">تعداد بازیکنان :</span>
                    <span className="h2 m-0 text-bg-danger px-2 pt-1 rounded-2">43</span>
                </div>
            </div>

            <div className="container_room py-4 px-2">
                <TeamFore />
            </div>
        </div>
    )
}
