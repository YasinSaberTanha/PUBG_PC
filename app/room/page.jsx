import DataRoom from "./components/dataRoom"
//import Team from "./components/team/team"
 import TeamFore from "./components/team/teamFour"
// import TeamTwo from "./components/team/teamTwo"
import "./room.css"

export default function Room() {

    return (
        <section className="room_section w-100">
            <DataRoom />

            <div className="container_room">
                <TeamFore />
            </div>

        </section>
    )

}