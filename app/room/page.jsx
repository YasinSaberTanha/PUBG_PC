import DataRoom from "./components/dataRoom"
import Team from "./components/team"
import "./room.css"

export default function Room() {

    return (
        <section className="room_section w-100">
            <DataRoom />
            <Team />
        </section>
    )

}