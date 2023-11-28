import { Button } from "@/components/ui/button";
import { Description } from "@radix-ui/react-dialog";
import Image from "next/image";

import Link from "next/link";

interface BannerRightProps {
    title: String,
    description: String,
    img: String,
    colortitle: String,
    colordescription: String,
    button: String
}

const BannerRightWeb = ({ title, description, img, colortitle, colordescription, button }: BannerRightProps) => {

    const imagem = "/" + img;
    const colortitle2 = "#" + colortitle;
    const colordescription2 = "#" + colordescription;


    return (
        <div className=" flex justify-between items-center gap-10 mx-64">
            <div className="flex flex-col text-left ml-0  w-[50%] " style={{ color: colordescription2 }}>
                <h1 className="font-bold text-2xl" style={{ color: colortitle2 }}>{title}</h1>
                <p className="text-sm mt-5 ">{description}</p>
                <Link href="/planos">
                    <Button className="bg-[#26B547] mt-6">
                        {button}
                    </Button>
                </Link>
            </div>

            <div className="flex w-[50%] justify-end">
                <Image
                    src={imagem}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[80%] max-h-[80%] shadow-lg rounded-2xl"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}

export default BannerRightWeb;