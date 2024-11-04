import "./buy.css"
import Header from "@/app/layout/header/header"
import Image from "next/image"
import Link from "next/link"
export default async function Buy(props) {
    const searchParams = await props.searchParams;

    return (
        <>
            <Header slug={searchParams.slug} />
            <section className="buy_section d-lg-flex justify-content-lg-center align-items-lg-center">
                <div className="buy_box shadow-lg mt-4 pb-3 rounded-5">
                        <div className="buy_header_icon w-100 d-flex justify-content-center align-items-center p-5">
                            <Image className="header_icon" src={`/svg/${searchParams.icon}`} alt="image" width={90} height={90} />
                        </div>
                        <div className="data_map w-100 d-flex justify-content-center align-items-center flex-column flex-lg-column-reverse ">
                            <p>جایزه تا به الان : <span>580,000</span></p>
                            <p>جایزه کل : <span>900,000</span></p>
                            <p>گروه های : <span>4</span> نفره</p>
                            <p>بازیکنان : <span>57</span></p>
                        </div>
                    <div className="buy_map w-100 position-absolute z-3 d-flex justify-content-center align-items-center p-3">
                        <Link href={"/room"} className="btn w-100 btn-danger d-flex align-items-center justify-content-center">10,000 تومان</Link>
                    </div>
                </div>
            </section>
        </>
    )
}