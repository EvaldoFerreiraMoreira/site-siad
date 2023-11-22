import { Button } from "@/components/ui/button";
import Image from "next/image";

const BannerRight = () => {
    return (
        <div>
            <div className="flex flex-col text-center">
                <h1 className="text-[#303666] text-2xl font-bold">Lorem Ipsum</h1>
                <p className="text-sm mt-5 text-[#68686F]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
            </div>
            <div className="flex mt-8 justify-center">
                <Button className="bg-[#26B547]">
                    Experimente
                </Button>
            </div>
            <div className="mt-14">
            <Image
                    src="/IMG-01.png"
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

export default BannerRight;