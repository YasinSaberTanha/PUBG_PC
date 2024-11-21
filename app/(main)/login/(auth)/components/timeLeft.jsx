
import { useState, useEffect } from "react";



export default function TimeLeft({ TimeLeft }) {
    const [timeLeft, setTimeLeft] = useState(TimeLeft);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(e => e - 1);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    sessionStorage.setItem("time_left", timeLeft);
    return (
        <span>{Math.floor(timeLeft / 60)}:{Math.floor(timeLeft % 60)}</span>
    )
}