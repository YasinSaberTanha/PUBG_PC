import Header from "../../layout/header/header"
import Image from "next/image"
import "./map.css"
import Link from "next/link";
import { BiUserPin } from "react-icons/bi";
import { ImMobile2 } from "react-icons/im";
import { FiMonitor } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import Maps from "./components/maps";


export default async function map({ searchParams }) {

  const slug = (await searchParams).slug;

  const RenderMap = async () => {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/program/getMap/?room_type=${slug}`)
      const maps = await result.json()

      const RenderMap = maps.map((map) => (
        <Maps data={map} slug={slug} />
      ))

      return RenderMap;
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <Header slug={slug} />
      <div className="container w-100">
        <div className="container-p w-100">
          <section className="map_section">

            {RenderMap()}

            {/* <div className="map_border">
              <Link href={{
                pathname: "/buy",
                query: {
                  slug: slug,
                  id: 23,
                  icon: "gold.svg"
                }
              }} className="map w-100 d-flex text-decoration-none align-items-center">
                <div>
                  <Image src={"/svg/silver.svg"} className="helmet_icon" alt="helmet" width={70} height={70} />
                </div>

                <div className="ms-3 d-flex w-100 justify-content-between align-items-center">
                  <div className="price_box d-flex flex-column justify-content-between align-items-start">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <FiUser className="price" /><span className="count_user">1</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <LuLogIn className="price" /><span className="price_login">10,000</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">

                    <div className="me-5">
                      <ImMobile2 className="map_mobile_icon" />
                    </div>

                    <div className="map_user">
                      <div className=" d-flex flex-column justify-content-center align-items-center">
                        <BiUserPin className="map_user_icon" />
                        <span className="map_user_login">45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div >

            <div className="map_border">
              <Link href={"/"} className="map w-100 d-flex text-decoration-none align-items-center">
                <div>
                  <Image src={"/svg/bronze.svg"} className="helmet_icon" alt="helmet" width={70} height={70} />
                </div>

                <div className="ms-3 d-flex w-100 justify-content-between align-items-center">
                  <div className="price_box d-flex flex-column justify-content-between align-items-start">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <FiUser className="price" /><span className="count_user">1</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <LuLogIn className="price" /><span className="price_login">10,000</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">

                    <div className="me-5">
                      <ImMobile2 className="map_mobile_icon" />
                    </div>

                    <div className="map_user">
                      <div className=" d-flex flex-column justify-content-center align-items-center">
                        <BiUserPin className="map_user_icon" />
                        <span className="map_user_login">45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div >

            <div className="map_border">
              <Link href={"/"} className="map w-100 d-flex text-decoration-none align-items-center">
                <div>
                  <Image src={"/svg/gold.svg"} className="helmet_icon" alt="helmet" width={70} height={70} />
                </div>

                <div className="ms-3 d-flex w-100 justify-content-between align-items-center">
                  <div className="price_box d-flex flex-column justify-content-between align-items-start">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <FiUser className="price" /><span className="count_user">1</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <LuLogIn className="price" /><span className="price_login">10,000</span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">

                    <div className="me-5">
                      <ImMobile2 className="map_mobile_icon" />
                    </div>

                    <div className="map_user">
                      <div className=" d-flex flex-column justify-content-center align-items-center">
                        <BiUserPin className="map_user_icon" />
                        <span className="map_user_login">45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div > */}

          </section>
        </div>
      </div>

    </>
  )
}
