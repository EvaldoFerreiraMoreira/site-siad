import { Button } from "@/components/ui/button";
import { Instagram, Phone, Smartphone } from "lucide-react";
import Link from "next/link";

const BannerContatoWeb = () => {
    return (
        <div className="flex  items-center justify-center text-center gap-32 h-36 mx-64  w-[80%] ">
            <div >
                <div className=" text-center ml-5  border  border-white bg-white w-24 h-24 rounded-full shadow-lg shadow-[#23314C] gap-2">
                    <Link href="https://">
                        <p className="flex gap-1 justify-center mt-7 mb-10 ">
                            <Smartphone size={40} style={{ color: "#3D5685" }} />
                        </p>
                    </Link>
                </div>
                <h1 className="text-center  mt-2 font-bold  text-[#FFFFFF] text-sm" >Mande um whastapp</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className=" text-center ml-5  border  border-white bg-white w-24 h-24 rounded-full shadow-lg shadow-[#23314C] gap-2">
                    <Link href="https://">
                        <p className="flex gap-1 justify-center mt-7 mb-10 ">
                            <Phone size={40} style={{ color: "#3D5685" }} />
                        </p>
                    </Link>
                </div>
                <h1 className="mt-2 ml-5 font-bold text-[#FFFFFF] text-sm" >0800 000 000</h1>
            </div>
        </div>
    );
}

export default BannerContatoWeb;