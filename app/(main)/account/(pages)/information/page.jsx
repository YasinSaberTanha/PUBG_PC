"use client"
import "./information.css"
import { useState, useEffect } from "react"
import InfoUserData from "../components/informationDataUser"


export default function Information() {
    const [dataUser, setDataUser] = useState(null)

    useEffect(() => {
        setDataUser(JSON.parse(document.getElementById("user_data").innerHTML))
        sessionStorage.setItem("user_data", document.getElementById("user_data").innerHTML)
    }, [])

    return (
        <article className="information_article position-fixed top-0 w-100">
            <h2 className="head_history text-center">اطلاعات حساب</h2>
            <div className="show_information w-100 h-100 overflow-y-scroll">
                {
                    dataUser && <InfoUserData dataUser={dataUser} />
                }
            </div>
        </article>
    )
}