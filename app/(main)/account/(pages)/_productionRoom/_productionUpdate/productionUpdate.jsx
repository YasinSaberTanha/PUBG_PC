"use client"
import "./productionUpdate.css"
import 'react-toastify/dist/ReactToastify.css';
import "@/app/layout/loding/doteLoader/doteLoder.css";
import { useState } from 'react';
import ProductionEnd from "../../components/productionEnd";
import ProductionEdit from "../../components/productionEdit";
import { ToastContainer } from 'react-toastify';

export default function ProductionUpdate() {

    const [pages, setPages] = useState(0)

    return (
        <article className="running_game_article position-fixed w-100 top-0">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="head_link w-100 d-flex justify-content-between align-items-center">
                <button onClick={() => setPages(0)} className={
                    pages == 0 ?
                        "link_visible link h-100 h-100  w-50 d-flex justify-content-center align-items-center rounded-top-4" :
                        "link_information w-50 h-100  d-flex justify-content-center align-items-center rounded-top-4"
                }>تکمیل</button>

                <button onClick={() => setPages(1)} className={
                    pages == 1 ?
                        "link_visible link h-100 h-100  w-50 d-flex justify-content-center align-items-center rounded-top-4" :
                        "link_information w-50 h-100  d-flex justify-content-center align-items-center rounded-top-4"
                }>ویرایش</button>
            </div>

            <div className="show_information w-100">
                {
                    pages == 0 ? <ProductionEnd /> : <ProductionEdit />
                }
            </div>
        </article >
    )
}