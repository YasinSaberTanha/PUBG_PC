
import { useState, useEffect } from "react";
import CreateFormData from "@/app/layout/functions/createFormData";


export default function TimeLeft({ TimeLeft }) {
    const [timeLeft, setTimeLeft] = useState(TimeLeft);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(e => e - 1);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const UserCreateAccountSMS = async () => {
        const values = {
            phone: sessionStorage.getItem("phone"),
            password: sessionStorage.getItem("password"),
        }
        try {

            const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/auth/createAccount/`, {
                method: "POST",
                body: CreateFormData(values)
            })
            const data = await result.json();
            console.log(data);

            if (data.status === true) {
                const [_, minutes1, seconds1] = data.time_left.split(':');
                sessionStorage.setItem("time_left", (+minutes1 * 60) + +seconds1);
                setTimeLeft(sessionStorage.getItem("time_left"));
            } else {
                toast.error(data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    sessionStorage.setItem("time_left", timeLeft);
    return (
        <>
            {
                timeLeft > 0 ?
                    <>
                        <p>ارسال مجدد </p>   <span>{Math.floor(timeLeft / 60)}:{Math.floor(timeLeft % 60)}</span>
                    </>
                    :
                    <button type="button" className="btn btn-success w-100" onClick={() => UserCreateAccountSMS()}>ارسال مجدد</button>

            }

        </>
    )
}