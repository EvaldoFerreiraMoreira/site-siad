import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import Image from "next/image";


const MobilePresentation = () => {
    return (
        <div className=" flex text-[#A7A7A7] justify-center ">
            <div className="flex flex-col  ">
                <div className="flex w-56 font-bold text-2xl">
                    <h1 className="text-[#3D5685]">Lorem Ipsum  </h1>
                </div>
                <div className="flex mt-2 w-56 font-semibold text-xl">
                    <span className="text-[#3D5685]">Lorem Ipsum is simply</span>
                </div>
                <div className="flex flex-col  gap-2 mt-3 text-[#3D5685] text-sm" >
                    <ul className="w-full justify-start gap-2" >
                        <li className="flex gap-1 ">
                            <Smartphone size={25} />
                            <p> Lorem Ipsum is </p>
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={25} />
                            <p>simplydummy text of the </p>
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={25} />
                            <p>printing and typesetting</p>
                        </li>
                        <li className="flex gap-1 mt-2" >
                            <Smartphone size={25} />
                            <p>industry. Lorem Ipsum h</p>
                        </li>
                    </ul>
                </div>
                <div className="flex mt-8  ml-3">
                    <Button className="bg-[#26B547]">
                        <p>Experimente</p>
                    </Button>
                </div>
            </div>

            <div className="pr-20">
                <div className="flex mt-16 h-36 w-52 ">
                    <Image
                        src="/Iphone-mobile.png"
                        alt="SMARTPHONE"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-w-[100%] max-h-[100%]"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default MobilePresentation;