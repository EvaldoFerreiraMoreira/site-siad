import BannerCarrossel from "./components/BannerCarrossel";
import BannerContato from "./components/BannerContato";
import BannerPlanos from "./components/BannerPlanos";
import CardGratis from "./components/CardGratis";
import CarrosselPlanos from "./components/CarrosselPlanos";
import CommonQuestion from "./components/CommonQuestion";
import FuncSiadBanner from "./components/FuncSiadBanner";

const Planos = () => {
    return (
        <div className="flex flex-col pt-16">
            <div className=" flex w-full p-10 bg-[#f1f4f9]">
                <BannerPlanos />
            </div>
            <div className="bg-[#f1f4f9]" id="carrosselPlanos">
                <div className=" relative w-full bg-[#f1f4f9] h-40">
                    <div className="relative pt-0 z-10">
                        <CarrosselPlanos />
                    </div>
                </div>
                <div className=" relative w-full bg-[#3D5685] h-[40rem]">
                    <div className="pt-[35rem]">
                        <CardGratis />
                    </div>
                </div>
            </div>
            <div className=" flex w-full p-10  bg-[#f1f4f9] h-56 ">

            </div>
        
            <div className="bg-[#f1f4f9] pt-20 h-auto">
                <BannerCarrossel/>
            </div>
            <div className=" flex w-full p-10 bg-white">
                <CommonQuestion />
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