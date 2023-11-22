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
      <div className="flex w-full p-10">
        <BannerRight button={"Experimente"} img={"IMG-01.png"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type "} title={"Lorem Ipsum"} colortitle={"3D5685"} colordescription={"666666"} />
      </div>
      <div className="flex w-full p-10">
        <BannerLeft />
      </div>
      <div className="flex w-full p-10  bg-[#3D5685] ">
        <BannerRight button={"Experimente"} img={"IMG-01.png"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type "} title={"Lorem Ipsum"} colortitle={"FFFFFF"} colordescription={"FFFFFF"} />
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
