import { Button } from "@/components/ui/button";
import Link from "next/link";

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
                <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
                    <Button
                        className="bg-[#FFFFFF] border w-64" variant={"outline"}>
                        <p className="text-center font-semibold text-[#000000]">Falar com consultor</p>
                    </Button>
                </Link>
            </div>
        </div>
    );

}

export default BannerConsultantMobile;