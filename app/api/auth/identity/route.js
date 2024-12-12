import { cookies } from "next/headers"
export async function POST(values) {

    const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/auth/identity/`, {
        method: "POST",
        body: await values.formData()
    })


    if (result.ok) {
        const cookie = await cookies()
        const data = await result.json()

        cookie.set("Token_User", data.JWT_token, {
            httpOnly: true
        })

        return Response.json(data)
    }
}