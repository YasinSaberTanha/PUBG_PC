import "./admin.css"
import Link from "next/link"
import PanelHeader from "../layout/panelHeader/panelHeader"
import { Rooms } from "./components/rooms"



export default function Admin() {
    return (
        <>
            <PanelHeader />
            <Rooms />
        </>
    )
}