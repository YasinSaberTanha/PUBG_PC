import { cookies } from "next/headers"

export async function POST(values) {

    const cookie = await cookies()
    const tokenUser = cookie.get("Token_User")

    const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/program/buy/`, {
        method: "POST",
        headers: {
            Cookie: `${tokenUser.name}=${tokenUser.value}`
        },
        body: await values.formData()
    })

    if (result.ok) {
        const data = await result.json();
        cookie.delete("Team_Code")
        return Response.json(data)
    }
}