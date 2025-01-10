import { cookies } from "next/headers"

export async function POST(values) {

    const cookie = await cookies()
    const tokenUser = cookie.get("Token_User")

    const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/program/buyTeam/`, {
        method: "POST",
        headers: {
            Cookie: `${tokenUser.name}=${tokenUser.value}`
        },
        body: await values.formData()
    })



    if (result.ok) {
        const data = await result.json();
        if (data.teamCode) {
            cookie.set("Team_Code", data.teamCode)
        }
        return Response.json(data)
    }
}