import "./buy.css"
import Header from "@/app/layout/header/header"
import Image from "next/image"
import Link from "next/link"
export default async function Buy(props) {

    const searchParams = await props.searchParams;

    const NumberAmount = (number) => {
        number = number.toString()
        let text = number.slice(0, -3) + "," + number.slice(-3)
        if (text.length >= 8) {
            text = text.slice(0, -7) + "," + text.slice(-7)
        }
        return text
    }

    return (
        <>
            <Header slug={searchParams.slug} />
            <section className="buy_section d-lg-flex justify-content-lg-center align-items-lg-center">
                <div className="buy_box shadow-lg mt-4 pb-3 rounded-5">
                    <div className="buy_header_icon w-100 d-flex justify-content-center align-items-center p-5">
                        <Image className="header_icon" src={`/svg/${searchParams.level_svg}`} alt="image" width={90} height={90} />
                    </div>
                    <div className="data_map w-100 d-flex justify-content-center align-items-center flex-column flex-lg-column-reverse gap-2">
                        <p className="m-0">جایزه تا به الان : <span>{NumberAmount(searchParams.input_amount * searchParams.number_players)}</span></p>
                        <p className="m-0">جایزه کل : <span>{NumberAmount(searchParams.input_amount * searchParams.maximum_player)}</span></p>
                        <p className="m-0">گروه های : <span>{searchParams.multi_player}</span> نفره</p>
                        <p className="m-0">بازیکنان : <span>{searchParams.number_players}</span></p>
                    </div>
                    <div className="buy_map w-100 position-absolute z-3 d-flex justify-content-center align-items-center p-3">
                        <Link href={"/room"} className="btn w-100 btn-danger d-flex align-items-center justify-content-center">10,000 تومان</Link>
                    </div>
                </div>
            </section>
        </>
    )
}