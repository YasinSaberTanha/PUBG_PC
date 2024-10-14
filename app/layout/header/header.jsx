
import "./header.css"

export default function Header({ slug }) {
    return (
        <header className="w-100 z-3 d-flex justify-content-center align-items-center">
            <span className="logo">
                {slug}
            </span>
        </header>
    )
}


