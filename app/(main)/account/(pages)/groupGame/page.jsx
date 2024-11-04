"use client"
import "./groupGame.css"

export default function GroupGame() {
    return (
        <article className="group_game_article position-fixed top-0 w-100 z-1">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center position-relative">
                <div className="search_box position-absolute start-50 w-75 top-50 translate-middle">
                    <input type="text" className="form-control text-center shadow-lg" placeholder="شناسه اتاق را وارد کنید"/>
                </div>

                <button className="btn_search w-100 btn btn-danger align-self-end m-2 p-2">جستوجوی اتاق</button>
            </div>

        </article>
    )
}