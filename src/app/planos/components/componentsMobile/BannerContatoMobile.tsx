import { Button } from "@/components/ui/button";
import { Instagram, Phone, Smartphone } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const BannerContatoMobile = () => {
    return (
        <div className="flex flex-row items-center justify-center text-center gap-20 h-36 w-80">

            <div className=" text-center  bg-white w-24 h-24 rounded-full shadow-lg shadow-[#23314C] gap-2">
                <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
                    <p className="flex gap-1 justify-center mt-7 mb-10 ">
                        <FaWhatsapp size={40} style={{ color: "#3D5685" }} />
                    </p>
                </Link>
                <h1 className="text-center font-bold text-[#FFFFFF] text-sm" >mande um whastapp</h1>
            </div>

            <div className=" text-center  bg-white w-24 h-24 rounded-full shadow-lg shadow-[#23314C] gap-2">
                <p className="flex gap-1 justify-center mt-7 mb-10 ">
                    <Phone size={40} style={{ color: "#3D5685" }} />
                </p>
                <h1 className="text-center font-bold text-[#FFFFFF] text-sm" >Contato</h1>
            </div>

        </div>
    );
}

export default BannerContatoMobile;