import DataRoom from "./components/dataRoom"
import "./room.css"
import dynamic from "next/dynamic"

export default async function Room({ searchParams }) {

    const ChunkArray = (array, size) => {
        let result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    const renderTeam = async () => {
        const result = await fetch(`http://localhost/PUBG/app/backend/rooms/getRoom/?map_id=${(await searchParams).map_id}`)
        const data = await result.json()
        console.log(data);
        

        switch (data.multi_player) {
            case "4":
                const TeamFore = dynamic(() => import('./components/team/teamFour'));
                return (
                    <div className="box_items w-100 d-flex flex-column gap-3 align-items-center">
                        {ChunkArray(data.players, 4).map((team, index) => <TeamFore team={team} index={index + 1} key={index} />)}
                    </div>
                );
            case "2":
                const TeamTwo = dynamic(() => import('./components/team/teamTwo'));
                return (
                    <div className="box_items w-100 d-grid gap-2 row-gap-3">
                        {ChunkArray(data.players, 2).map((team, index) => <TeamTwo team={team} index={index + 1} key={index} />)}
                    </div>
                );
            case "1":
                const Team = dynamic(() => import('./components/team/team'));
                return (
                    <div className="box_items w-100 d-grid gap-2 row-gap-3">
                        {data.players.map((team, index) => <Team team={team} key={index} />)}
                    </div>
                );
        }
    }

    return (
        <section className="room_section w-100">
            <DataRoom />
            <div className="container_room">
                {renderTeam()}
            </div>
        </section>
    )

}