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

const BannerRightMobile = ({ title, description, img, colortitle, colordescription, button }: BannerRightProps) => {

    const imagem = "/" + img;
    const colortitle2 = "#" + colortitle;
    const colordescription2 = "#" + colordescription;


    return (
        <div>
            <div className="flex flex-col text-center" style={{ color: colordescription2 }}>
                <h1 className="font-bold text-2xl" style={{ color: colortitle2 }}>{title}</h1>

                <p className="text-sm mt-5 ">{description}</p>
            </div>

            <div className="flex justify-center mt-8">
                <Link href="/planos">
                    <Button className="bg-[#26B547]">
                        {button}
                    </Button>
                </Link>
            </div>
            <div className="flex mt-14 h-56 justify-center">
                <Image
                    src={imagem}
                    alt="Imagem"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[100%] max-h-[70%] shadow-lg rounded-2xl"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}

export default BannerRightMobile;