//import { IoCloseSharp } from "react-icons/io5";
import "./production.css"
import ProductionForm from "../components/production";
import CreateFormData from "@/app/layout/functions/createFormData";
import { cookies } from "next/headers";
import JWT from "jsonwebtoken"
import ProductionRoom from "../_productionRoom/productionRoom";
import ProductionUpdate from "../_productionRoom/_productionUpdate/productionUpdate";

export default async function Production() {

    const cookie = (await cookies()).get("Token_User").value
    const result = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/backend/userAccount/getProduction/`, {
        method: "POST",
        body: CreateFormData({
            Token_User: cookie
        })
    })
    const data = await result.json()

    return (
        <>
            {
                data.user_type != "user" ?
                    data.user_room ? <ProductionUpdate /> : <ProductionRoom />
                    :
                    < article className="production_article position-fixed top-0 w-100 z-1 overflow-y-scroll" >
                        <h2 className="head_history text-center">احراز هویت</h2>


                        <div className="w-100">
                            <div className="w-100 p-4">
                                {
                                    data.status ? <div className="alert alert-success text-center shadow">در حال پردازش</div> : <ProductionForm userId={JWT.decode(cookie).user_id} />
                                }
                            </div>
                        </div>
                    </ article>
            }
        </>

    )
}