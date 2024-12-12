import { cookies } from "next/headers"

export default async function GetCookies(url, values) {

    const cookie = await cookies()
    const tokenUser = cookie.get("Token_User")

    const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend${url}`, {
        method: "POST",
        headers: {
            Cookie: `${tokenUser.name}=${tokenUser.value}`
        },
        body: await values.formData()
    })

    return result
}