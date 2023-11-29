import { Button } from "@/components/ui/button";

const BannerConsultantWeb = () => {
    return ( 
        <div className="mx-64">
            <div className=" flex font-semibold justify-center text-4xl">
                <h1 className="text-center font-bold text-[#3D5685]">Como a SIAD pode ajudar o seu negócio?</h1>
            </div>
            <div className=" flex  justify-center mt-10 text-sm text-center">
                <p className="text-center font-semibold text-[#3D5685]">Estamos prontos para ajudar.</p>
            </div>
            <div className="flex mt-10 justify-center">
                <Button 
                className="bg-[#FFFFFF] border w-64" variant={"outline"}>
                    <p className="text-center font-semibold text-[#000000]">Falar com consultor</p>
                </Button>
            </div>
        </div>
     );
     
}
 
export default BannerConsultantWeb;