import BannerContato from "./components/BannerContato";
import BannerPlanos from "./components/BannerPlanos";
import CardGratis from "./components/CardGratis";
import CarrosselPlanos from "./components/CarrosselPlanos";
import FuncSiadBanner from "./components/FuncSiadBanner";


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
                <CardGratis/>
            </div>
            <div className=" flex w-full p-10 bg-white h-96 ">

            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9]">
                <FuncSiadBanner />
            </div>
            
            <div className="flex w-full p-10 bg-[#3D5685]  ">
                <BannerContato/>
            </div>
        </div>
    );
}

export default Planos;