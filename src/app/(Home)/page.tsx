import Banner from "./components/Banner";
import BannerRight from "./components/BannerRight";
import BannerLeft from "./components/BannerLeft";

export default function Home() {
  return (
    <div className="flex flex-col pt-24">
      <div className="flex w-full p-10">
        <Banner />
      </div>
      <div className="border h-96">

      </div>
      <div className="flex w-full p-10  border  ">
      <BannerRight/>
      </div>
      <div className="flex w-full p-10">
          <BannerLeft />
      </div>
      <div className="border bg-[#3D5685] h-96">

      </div>
      <div className="border bg-[#3D5685] h-96">

      </div>
      <div className="border bg-[#f1f4f9] h-96">

      </div>
      <div className="border bg-[#3D5685] h-96">

      </div>
      <div className="border bg-[#f1f4f9] h-96">

      </div>
    </div>
  )
}
