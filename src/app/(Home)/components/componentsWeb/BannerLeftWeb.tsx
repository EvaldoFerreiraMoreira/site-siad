import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface BannerLeftProps {
    title: String,
    description: String,
    img: String,
    colorTitle: String,
    colorDescription: String;
}

const BannerLeftWeb = ({ title, description, img, colorTitle, colorDescription }: BannerLeftProps) => {

    const imagem = "/" + img;
    const colortitle = "#" + colorTitle;
    const colordescription = "#" + colorDescription;
    return (
        <div className=" flex justify-evenly items-center gap-10 mx-64">
            <div className="w-[50%]">
                <Image
                    src={imagem}
                    alt="Compiuter"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[80%] max-h-[80%] shadow-lg rounded-2xl"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="flex flex-col text-right ml-0 w-[50%]" style={{ color: colordescription }}>
                <h1 className="font-bold text-2xl" style={{ color: colortitle }}>{title}</h1>
                <p className="text-sm mt-5 ">{description}</p>
                <Link href="/planos">
                    <Button className="bg-[#26B547] mt-6">
                        Experimente
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default BannerLeftWeb;