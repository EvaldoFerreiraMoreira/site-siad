import BannerPlanos from "./components/BannerPlanos";
import CardGratis from "./components/CardGratis";
import CarrosselPlanos from "./components/CarrosselPlanos";
import FuncSiadBanner from "./components/FuncSiadBanner";
import CommonQuestion from "./components/CommonQuestion";
import BannerCarrossel from "./components/BannerCarrossel";


const Planos = () => {
    return (
        <div className="flex flex-col pt-24">
            <div className=" flex w-full p-10 bg-[#f1f4f9]">
                <BannerPlanos />
            </div>
            <div className="bg-[#f1f4f9]" id="carrosselPlanos">
                <div className=" relative w-full bg-[#f1f4f9] h-40">
                    <div className="relative pt-0 z-10">
                        <CarrosselPlanos />
                    </div>
                </div>
                <div className=" relative w-full bg-[#3D5685] h-96">
                    <div className="pt-64">
                        <CardGratis />
                    </div>
                </div>
            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9] h-56 ">

            </div>
        
            <div className="bg-[#f1f4f9] h-auto">
                <BannerCarrossel/>
            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9]">
                <CommonQuestion/>
            </div>
            <div className=" flex w-full p-10 bg-[#f1f4f9]">
                <FuncSiadBanner />
            </div>
            <div className="flex w-full p-10 bg-[#3D5685] h-96 ">

            </div>
        </div>
    );
}

export default Planos;