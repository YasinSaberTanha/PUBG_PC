"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import "./focus.css"
export default function TypeGame() {

    const [map, setMap] = useState({ Classic: true, tdm: false, wow: false })
    const [mode, setMode] = useState(true)

    return (
        <section className="section_type_game d-flex flex-column pt-0 p-4">


            <div className="box_btn_change d-flex w-100 gap-3">
                <button
                    className={
                        map.Classic ?
                            "btn_change w-100 d-flex justify-content-center align-items-center  btn_change_focus" :
                            "btn_change w-100 d-flex justify-content-center align-items-center"
                    }
                    onClick={() => setMap({ Classic: true, tdm: false, wow: false })}
                >Clssic</button>

                <button className={
                    map.tdm ?
                        "btn_change w-100 d-flex justify-content-center align-items-center  btn_change_focus" :
                        "btn_change w-100 d-flex justify-content-center align-items-center"
                }
                    onClick={() => setMap({ Classic: false, tdm: true, wow: false })}
                >TDM</button>

                <button className={
                    map.wow ?
                        "btn_change w-100 d-flex justify-content-center align-items-center  btn_change_focus" :
                        "btn_change w-100 d-flex justify-content-center align-items-center"
                }
                    onClick={() => setMap({ Classic: false, tdm: false, wow: true })}
                >WOW</button>
            </div>


            {
                map.Classic &&
                <div className="">
                    <div className="d-flex w-100 justify-content-center">
                        <div className="box_btn_change w-75 d-flex gap-3 justify-content-between mb-3">

                            <button className={
                                mode == true ?
                                    "btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus" :
                                    "btn_mobe w-100 d-flex justify-content-center align-items-center"
                            }
                                onClick={() => setMode(true)}
                            >Mode</button>

                            <button className={
                                mode == false ?
                                    "btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus" :
                                    "btn_mobe w-100 d-flex justify-content-center align-items-center"
                            }
                                onClick={() => setMode(false)}
                            >Normal</button>

                        </div>
                    </div>
                    <div className="box_scroll d-flex flex-column gap-3">
                        {
                            mode == false ?
                                <>
                                    <Link href={{
                                        pathname: "/map",
                                        query: { slug: "Erangel" }
                                    }}
                                        className="link_image text-decoration-none rounded">
                                        <div className="w-100 position-relative">
                                            <Image src={"/image/erangel.jpg"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                            <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Erangel</p>
                                        </div>
                                    </Link>

                                    <Link href={{
                                        pathname: "/map",
                                        query: { slug: "Livik" }
                                    }}
                                        className="link_image text-decoration-none rounded">
                                        <div className="w-100 position-relative">
                                            <Image src={"/image/livik.jpg"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                            <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Livik</p>
                                        </div>
                                    </Link>

                                    <Link href={{
                                        pathname: "/map",
                                        query: { slug: "Miramar" }
                                    }}
                                        className="link_image text-decoration-none rounded">
                                        <div className="w-100 position-relative">
                                            <Image src={"/image/miramar.webp"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                            <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Miramar</p>
                                        </div>
                                    </Link>

                                    <Link href={{
                                        pathname: "/map",
                                        query: { slug: "Vikendi" }
                                    }}
                                        className="link_image text-decoration-none rounded">
                                        <div className="w-100 position-relative">
                                            <Image src={"/image/vikendi.jpeg"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                            <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Vikendi</p>
                                        </div>
                                    </Link>

                                    <Link href={{
                                        pathname: "/map",
                                        query: { slug: "Sanhok" }
                                    }}
                                        className="link_image text-decoration-none rounded">
                                        <div className="w-100 position-relative">
                                            <Image src={"/image/sanhok.jpg"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                            <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Sanhok</p>
                                        </div>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link href={{
                                        pathname: "/map",
                                        query: { slug: "M-Erangel" }
                                    }}
                                        className="link_image text-decoration-none rounded">
                                        <div className="w-100 position-relative">
                                            <Image src={"/image/erangel.jpg"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                            <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Erangel</p>
                                        </div>
                                    </Link>

                                    <Link href={{
                                        pathname: "/map",
                                        query: { slug: "M-Livik" }
                                    }}
                                        className="link_image text-decoration-none rounded">
                                        <div className="w-100 position-relative">
                                            <Image src={"/image/livik.jpg"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                            <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Livik</p>
                                        </div>
                                    </Link>

                                    <Link href={{
                                        pathname: "/map",
                                        query: { slug: "M-Miramar" }
                                    }}
                                        className="link_image text-decoration-none rounded">
                                        <div className="w-100 position-relative">
                                            <Image src={"/image/miramar.webp"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                            <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">Miramar</p>
                                        </div>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            }
            {
                map.tdm &&
                <div className="">
                    <div className="d-flex w-100 justify-content-center">
                        <div className="box_btn_change w-75 d-flex gap-3 justify-content-between mb-3">

                            <button className={
                                mode == true ?
                                    "btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus" :
                                    "btn_mobe w-100 d-flex justify-content-center align-items-center"
                            }
                                onClick={() => setMode(true)}
                            >Mode</button>

                            <button className={
                                mode == false ?
                                    "btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus" :
                                    "btn_mobe w-100 d-flex justify-content-center align-items-center"
                            }
                                onClick={() => setMode(false)}
                            >Normal</button>
                        </div>
                    </div>
                    <div className="box_scroll d-flex flex-column gap-3">
                        {
                            mode == false ?
                                <Link href={{
                                    pathname: "/map",
                                    query: { slug: "TDM" }
                                }}
                                    className="link_image text-decoration-none rounded">
                                    <div className="w-100 position-relative">
                                        <Image src={"/image/tdm.jpg"} className="image_map rounded w-100" alt="image" width={300} height={100} />
                                        <p className="name_map position-absolute bg-black w-100 start-0 bottom-0 m-0 bg-opacity-25 h-100 rounded d-flex justify-content-center align-items-center">TDM</p>
                                    </div>
                                </Link>
                                :
                                null
                        }
                    </div>
                </div>
            }
            {
                map.wow &&
                <div className="">

                </div>
            }


        </section >

    )
}