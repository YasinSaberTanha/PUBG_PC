import Link from "next/link"
import Image from "next/image"

export default function ClassicMode() {
    return (
        <>
            <div className="d-flex flex-column gap-3">
                <Link href={{
                    pathname: "/map",
                    query: { slug: "M-Erangel" }
                }}
                    className="link_image text-decoration-none rounded overflow-hidden">
                    <div className="w-100 h-100 position-relative">
                        <Image src={"/image/erangel.jpg"} className="image_map rounded w-100 h-100" alt="image" width={300} height={100} />
                        <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Erangel</p>
                    </div>
                </Link>

                <Link href={{
                    pathname: "/map",
                    query: { slug: "M-Livik" }
                }}
                    className="link_image text-decoration-none rounded overflow-hidden">
                    <div className="w-100 h-100 position-relative">
                        <Image src={"/image/livik.jpg"} className="image_map rounded w-100 h-100" alt="image" width={300} height={100} />
                        <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Livik</p>
                    </div>
                </Link>
            </div>

            <div className="d-flex flex-column gap-3">
                <Link href={{
                    pathname: "/map",
                    query: { slug: "M-Miramar" }
                }}
                    className="link_image text-decoration-none rounded overflow-hidden">
                    <div className="w-100 h-100 position-relative">
                        <Image src={"/image/miramar.webp"} className="image_map rounded w-100 h-100" alt="image" width={300} height={100} />
                        <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Miramar</p>
                    </div>
                </Link>

                <div className="none_block h-50 d-none">

                </div>
            </div>

        </>
    )
}