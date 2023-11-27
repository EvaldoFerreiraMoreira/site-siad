import { Button } from "@/components/ui/button";
import { Instagram, Phone, Smartphone } from "lucide-react";
import Link from "next/link";

const BannerContatoMobile = () => {
    return (
        <div className="flex flex-row items-center justify-center text-center gap-20 h-36 w-80 ">

            <div className=" text-center  bg-white w-24 h-24 rounded-full shadow-lg shadow-[#23314C] gap-2">
                <Link href="https://">
                    <p className="flex gap-1 justify-center mt-7 mb-10 ">
                        <Smartphone size={40} style={{color:"#3D5685"}} />
                    </p>
                </Link>
                    <h1 className="text-center font-bold text-[#FFFFFF] text-sm" >mande um whastapp</h1>
            </div>

            <div className=" text-center  bg-white w-24 h-24 rounded-full shadow-lg shadow-[#23314C] gap-2">
                <Link href="https://">
                    <p className="flex gap-1 justify-center mt-7 mb-10 ">
                        <Phone size={40} style={{color:"#3D5685"}}/>
                    </p>
                </Link>
                    <h1 className="text-center font-bold text-[#FFFFFF] text-sm" >0800</h1>
            </div>

        </div>
    );
}

export default BannerContatoMobile;