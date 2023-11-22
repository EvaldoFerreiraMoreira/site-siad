import { Button } from "@/components/ui/button";
import Image from "next/image";

const BannerRight = () => {
    return ( 
    <div className="flex flex-col text-center text-[#666666]">
        <div className="font-semibold text-2xl mt-10">
        <h1 className="text-[#3D5685]">Lorem Ipsum</h1>

        </div>
       <div className="text-sm mt-5 ">

        <p>Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industrys
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
    </div>
    <div className="flex justify-center mt-8">
        <Button className="bg-[#26B547]">
            Experimente
        </Button>
    </div>
    <div className="flex mt-10 h-56 justify-center">
            <Image
            src="/PC-01.png"
            alt="Compiuter"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-auto max-w-[100%] max-h-[90%]"
            style={{
              objectFit: "contain",
            }}
          />
       </div>
     </div>
    );
}
 
export default BannerRight ;