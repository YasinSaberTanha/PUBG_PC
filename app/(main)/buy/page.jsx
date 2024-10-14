import "./buy.css"
import Header from "@/app/layout/header/header"
import Image from "next/image"
import Link from "next/link"
export default function Buy({ searchParams }) {

    return (
        <>
            <Header slug={searchParams.slug} />
            <section className="buy_section">
                <div className="w-100 d-flex justify-content-center align-items-center p-5">
                    <Image className="header_icon" src={`/svg/${searchParams.icon}`} width={90} height={90} />
                </div>
                <div className="data_map w-100 d-flex justify-content-center align-items-center flex-column ">
                    <p>جایزه تا به الان : <span>580,000</span></p>
                    <p>جایزه کل : <span>900,000</span></p>
                    <p>گروه های : <span>4</span> نفره</p>
                    <p>بازیکنان : <span>57</span></p>
                </div>

                <div className="buy_map w-100 position-fixed start-0 bottom-0 z-3 d-flex justify-content-center align-items-center p-3">
                    <Link href={"/room"} className="btn w-100 btn-danger d-flex align-items-center justify-content-center">10,000 تومان</Link>
                </div>
            </section>
        </>
    )
}