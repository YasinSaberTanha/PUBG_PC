import Link from "next/link"

export default function TypeGame() {
    return (

        <section className="section_type_game d-flex justify-content-center flex-wrap p-1">
            <Link href={{
                pathname: '/map',
                query: { slug: 'Erangel' },
            }}
                className="erangel rounded-4 ">Erangel</Link>

            <Link href={{
                pathname: '/map',
                query: { slug: 'Livik' },
            }} className="livik rounded-4 " >Livik</Link>

            <Link href={{
                pathname: '/map',
                query: { slug: 'TDM' },
            }} className="tdm rounded-4">TDM</Link>

            <Link href={{
                pathname: '/map',
                query: { slug: 'WOW' },
            }} className="wow rounded-4">WOW</Link>

            <Link href={{
                pathname: '/map',
                query: { slug: 'AllMap' },
            }} className="َ all rounded-4">ALL</Link>
        </section>

    )
}