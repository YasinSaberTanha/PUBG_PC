import "./panelHeader.css"
import Link from "next/link"

export default function PanelHeader() {
    return(
        <header className="header w-100 p-3 d-flex gap-4">
            <Link href={"/admin"} className="link link-dark text-decoration-none">تنظیمات</Link>
            <Link href={"/admin"} className="link link-dark text-decoration-none">ادمین ها</Link>
            <Link href={"/admin"} className="link link-dark text-decoration-none">بنرها</Link>
        </header>
    )
}