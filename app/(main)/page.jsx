
import { Suspense } from "react";
import Loading from "./loading";
import "./home.css"
import SliderBar from "./components/slider";
import Header from "../layout/header/header";
import TypeGame from "./components/typeGame";


export default async function Home() {
  return (

    <Suspense fallback={<Loading />}>

      <Header slug={"WIR"} />
      <SliderBar />
      <TypeGame />

    </Suspense>
  )
}
