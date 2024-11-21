"use client"
import "./search.css"
import { useRef } from "react"

export default function Search() {
    const scrollRef = useRef(null)
    const isDown = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)



    const handleMouseDown = (e) => {
        isDown.current = true
        scrollRef.current.classList.add("active")
        startX.current = e.pageX - scrollRef.current.offsetLeft
        scrollLeft.current = scrollRef.current.scrollLeft
    }

    const handleMouseLeave = () => {
        isDown.current = false
        scrollRef.current.classList.remove("active")
    }

    const handleMouseUp = () => {
        isDown.current = false
        scrollRef.current.classList.remove("active")
    }

    const handleMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const X = e.pageX - scrollRef.current.offsetLeft
        const walk = (X - startX.current)
        scrollRef.current.scrollLeft = scrollLeft.current - walk
    }


    return (
        <section className="search_section">
            <div className="p-4">

                <div className="w-100">
                    <div className="input-group input-group-box ms-auto">
                        <input type="text" className="form-control" />
                        <input type="text" className="form-control" />
                        <select className="form-select" name="" id="">
                            <option value="">انتخاب کنید</option>
                            <option value="yasin">yasin</option>
                        </select>
                        <button className="btn btn-secondary">جستجو</button>
                    </div>
                </div>


                <div dir="ltr" className="w-100 mt-5 overflow-x-scroll user-select-none"
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <table class="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Lst</th>
                                <th scope="col">wpfkkl;jdfhjdfljsljsf</th>
                                <th scope="col">lkjhlkjhlfkf</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Laskjght</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handlkjghe</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="user-select-all">168768768</th>
                                <td>Mark</td>
                                <td>Ottkjghkjghjhgkhgko</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otghjkghjkghtghjhgkhgko</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Ottghjhgkhgko</td>
                                <td>@mdkjghkjghkjghkjgho</td>
                                <td>Mark</td>
                                <td>Ottghjhgkhgko</td>
                                <td>@mdo</td>
                                <td>@khkhmdo</td>
                                <td>Mjkghkjghark</td>
                                <td>Ottghjhgkhgko</td>
                                <td>@mkghkjghjkghdo</td>
                            </tr>
                            <tr>
                                <th scope="row" className="user-select-all">168768768</th>
                                <td>Mark</td>
                                <td>Ottghjhgkhgko</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Ottghjhgkhgko</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Ottghjhgkhgko</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Ottghjhgkhgko</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Ottghjhgkhgko</td>
                                <td>@mdo</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}