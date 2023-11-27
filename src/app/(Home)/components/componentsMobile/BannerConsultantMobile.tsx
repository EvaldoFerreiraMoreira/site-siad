import { Button } from "@/components/ui/button";

const BannerConsultantMobile = () => {
    return ( 
        <div>
            <div className=" flex font-semibold text-2xl">
                <h1 className="text-center font-bold text-[#3D5685]">Como a SIAD pode ajudar o seu negócio?</h1>
            </div>
            <div className=" flex  justify-center mt-10 text-sm text-center">
                <p className="text-center font-semibold text-[#3D5685]">Estamos prontos para ajudar.</p>
            </div>
            <div className="flex mt-10 justify-center">
                <Button 
                className="bg-[#FFFFFF] border w-64 hover:bg-[#3D5685]">
                    <p className="text-center font-semibold text-[#000000] hover:text-[#FFFFFF]">Falar com consultor</p>
                </Button>
            </div>
        </div>
     );
     
}
 
export default BannerConsultantMobile;