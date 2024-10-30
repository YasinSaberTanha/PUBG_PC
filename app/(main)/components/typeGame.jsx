"use client"

import "./focus.css"
import { useState } from "react"
import Classic from "./mapTypegame/classic"
import ClassicMode from "./mapTypegame/classicMode"
import Tdm from "./mapTypegame/tdm"
import TdmMode from "./mapTypegame/tdmMode"
import Wow from "./mapTypegame/wow"



export default function TypeGame() {

    const [map, setMap] = useState({ Classic: true, tdm: false, wow: false })
    const [mode, setMode] = useState(true)


    return (
        <section className="section_type_game d-flex flex-column pt-0 p-4">

            <div className="box_btn w-100 d-sm-flex overflow-hidden">
                <div className="box_btn_change d-flex w-100 gap-3 flex-sm-column justify-content-sm-center ">
                    <button
                        className={
                            map.Classic ?
                                "btn_change w-100 d-flex justify-content-center align-items-center btn_change_focus" :
                                "btn_change w-100 d-flex justify-content-center align-items-center"
                        }
                        onClick={() => setMap({ Classic: true, tdm: false, wow: false })}
                    >Clssic</button>

                    <button
                        className={
                            map.tdm ?
                                "btn_change w-100 d-flex justify-content-center align-items-center btn_change_focus" :
                                "btn_change w-100 d-flex justify-content-center align-items-center"
                        }
                        onClick={() => setMap({ Classic: false, tdm: true, wow: false })}
                    >TDM</button>

                    <button
                        className={
                            map.wow ?
                                "btn_change w-100 d-flex justify-content-center align-items-center btn_change_focus" :
                                "btn_change w-100 d-flex justify-content-center align-items-center"
                        }
                        onClick={() => setMap({ Classic: false, tdm: false, wow: true })}
                    >WOW</button>
                </div>

                {/* ________________________________________________Classic___________________________________________________ */}

                {
                    map.Classic &&
                    <div className="box_item_map w-100 h-100">
                        <div className="box_btn_border_bottom d-flex w-100 justify-content-center justify-content-sm-start">
                            <div className="box_btn_change_mode w-75 d-flex gap-3 justify-content-between justify-content-sm-start me-sm-3">

                                <button className={
                                    mode == true ?
                                        "btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus_mode" :
                                        "btn_mobe w-100 d-flex justify-content-center align-items-center"
                                }
                                    onClick={() => setMode(true)}
                                >Mode</button>

                                <button className={
                                    mode == false ?
                                        "btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus_mode" :
                                        "btn_mobe w-100 d-flex justify-content-center align-items-center"
                                }
                                    onClick={() => setMode(false)}
                                >Normal</button>

                            </div>
                        </div>
                        <div className="box_scroll d-flex flex-column gap-3 w-100 me-sm-3 pt-3">
                            {
                                mode == false ? <Classic /> : <ClassicMode />
                            }
                        </div>
                    </div>
                }

                {/* ________________________________________________TDM___________________________________________________ */}

                {
                    map.tdm &&
                    <div className="box_item_map w-100 h-100">
                        <div className="box_btn_border_bottom d-flex w-100 justify-content-center justify-content-sm-start">
                            <div className="box_btn_change_mode w-75 d-flex gap-3 justify-content-between justify-content-sm-start me-sm-3">

                                <button className={
                                    mode == true ?
                                        "btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus_mode" :
                                        "btn_mobe w-100 d-flex justify-content-center align-items-center"
                                }
                                    onClick={() => setMode(true)}
                                >Mode</button>

                                <button className={
                                    mode == false ?
                                        "btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus_mode" :
                                        "btn_mobe w-100 d-flex justify-content-center align-items-center"
                                }
                                    onClick={() => setMode(false)}
                                >Normal</button>
                            </div>
                        </div>
                        <div className="box_scroll d-flex flex-column gap-3 w-100 me-sm-3 pt-3">
                            {
                                mode == false ? <Tdm /> : <TdmMode />
                            }
                        </div>
                    </div>
                }

                {/* ________________________________________________WOW_________________________________________________ */}

                {
                    map.wow &&
                    <div className="box_item_map w-100 h-100">
                        <div className="box_btn_border_bottom d-flex w-100 justify-content-center justify-content-sm-start">
                            <div className="box_btn_change_mode w-25 d-flex gap-3 justify-content-between justify-content-sm-start me-sm-3">
                                <button className="btn_mobe w-100 d-flex justify-content-center align-items-center btn_change_focus_mode">Normal</button>
                            </div>
                        </div>
                        <div className="box_scroll d-flex flex-column gap-3 w-100 me-sm-3 pt-3">
                            <Wow />
                        </div>
                    </div>
                }
            </div>

        </section >

    )
}