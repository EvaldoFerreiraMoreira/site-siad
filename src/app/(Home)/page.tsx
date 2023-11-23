import Banner from "./components/Banner";
import MobilePesentation from "./components/MobilePresentation";
import TextCenter from "./components/TextCenter";

export default function Home() {
  return (
    <div className="flex flex-col pt-24">
      <div className="flex w-full p-10">
        <Banner />
      </div>
      <div className=" flex w-full p-10 border h-96">
      <TextCenter/>
      </div>
      <div className="border h-96">

      </div>
      <div className="border h-96">

      </div>
      <div className="border bg-[#3D5685] h-96">

      </div>
      <div className="border bg-[#3D5685] h-96">

      </div>
      <div className=" flex w-full p-10  h-96 border bg-[#f1f4f9] ">
      <MobilePesentation/>
      </div>
      <div className="border bg-[#3D5685] h-96">

      </div>
      <div className="border bg-[#f1f4f9] h-96">

      </div>
    </div>
  )
}
