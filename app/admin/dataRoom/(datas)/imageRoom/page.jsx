import "./imageRoom.css";


export default function ImageRoom() {
    return (
        <section className="image_room_section py-4">
            <div className="w-100 d-flex flex-column align-items-center gap-5">
                <img src="/image/download (2).jpg" className="image_room" alt="image" />
                <img src="/image/download_11zon.png" className="image_room" alt="image" />
                <img src="/image/download (1)_11zon.png" className="image_room" alt="image" />
                <img src="/image/miramar.webp" className="image_room" alt="image" />
                <div className="mb-5 pb-5 d-flex gap-3">
                    <button className="btn btn-dark mb-5 px-4">ثبت</button>
                    <input type="text" className="form-control mb-5" />
                </div>
            </div>
        </section>
    )
}