import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const MobilePesentation = () => {
    return (
        <div className=" flex flex-col  gap-2 text-[#A7A7A7]">
          
                <div className="flex w-56 font-bold text-2xl">
                    <h1 className="text-[#3D5685]">Lorem Ipsum  </h1>
                </div>
                <div className="flex mt-2 w-56 font-semibold text-xl">
                    <span className="text-[#3D5685]">Lorem Ipsum is simply</span>
                </div>
                <div className="flex flex-col  gap-2 mt-3 text-[#3D5685] text-lg" >
                    <ul className="w-full justify-start gap-2" >
                        <li className="flex gap-1 ">
                            <Smartphone size={30} />
                            Lorem Ipsum is
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={30} />
                            simplydummy text of the
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={30} />
                            printing and typesetting
                        </li>
                        <li className="flex gap-1 mt-2" >
                            <Smartphone size={30} />
                            industry. Lorem Ipsum h
                        </li>
                    </ul>
                </div>
                <div className="flex mt-5">
                    <Button className="bg-[#26B547]">
                        <p>Experimente</p>
                    </Button>

                </div>
            <div>
                <div>
                    imagem
                </div>
            </div>
        </div>
    );
}

export default MobilePesentation;