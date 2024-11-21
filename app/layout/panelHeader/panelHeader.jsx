import "./panelHeader.css"
import Link from "next/link"

export default function PanelHeader() {
    return (
        <header className="header w-100 p-3 d-flex gap-4">
            <Link href={"/admin/setting"} className="link link-dark text-decoration-none">تنظیمات</Link>
            <Link href={"/admin/subAdmins"} className="link link-dark text-decoration-none">ادمین ها</Link>
            <Link href={"/admin/validity"} className="link link-dark text-decoration-none">تایید اعتبار</Link>
            <Link href={"/admin/search"} className="link link-dark text-decoration-none">جستجو</Link>
            <Link href={"/admin/archive"} className="link link-dark text-decoration-none ms-auto">بایگانی</Link>
        </header>
    )
}