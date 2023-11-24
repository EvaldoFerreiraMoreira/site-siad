import BannerPlanos from "./components/BannerPlanos";
import CarrosselPlanos from "./components/CarrosselPlanos";
import CommonQuestion from "./components/CommonQuestion";


const Planos = () => {
    return (
        <div className="flex flex-col pt-24">
            <div className=" flex w-full p-10 bg-[#f1f4f9] h-96 ">
                <BannerPlanos />
            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9] h-96 ">

            </div>
            <div className="border bg-[#3D5685]">
                <CarrosselPlanos />
            </div>
            <div className=" flex w-full p-10  bg-[#f1f4f9] h-96 ">

            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9] h-96 ">
                <CommonQuestion/>
            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9] h-96 ">

            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9] h-96 ">

            </div>
            <div className="flex w-full p-10 bg-[#3D5685] h-96 ">

            </div>
        </div>
    );
}

export default Planos;