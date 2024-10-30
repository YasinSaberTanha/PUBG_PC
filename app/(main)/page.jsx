
import { Suspense } from "react";
import Loading from "./loading";
import "./home.css"
import SliderBar from "./components/slider";
import Header from "../layout/header/header";
import TypeGame from "./components/typeGame";


export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>

      <Header slug={<span className="logo_animation"></span>} />
      <div className="container w-100">
        <div className="container-p w-100">
          <SliderBar />
          <TypeGame />
        </div>

      </div>


    </Suspense>
  )
}
