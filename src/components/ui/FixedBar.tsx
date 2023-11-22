import { Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

const FixedBar = () => {
    return (
        <div className="fixed bg-[#5576B3] container shadow-md mx-auto p-5 bottom-0 h-[85px] flex items-center text-white">
            <div className="flex items-center ">
                <Smartphone size={50} />
            </div>
            <div>
                <p className="text-sm w-36 text-center font-semibold">
                    Fale com a gente no

                    Whatsapp

                </p>
            </div>
            <div className="flex w-2 h-4 left-full r">
              
            </div>
        </div>
    );
}

export default FixedBar;