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
        <div className="flex mx-64 justify-between items-center w-full">
            <div className="flex mt-14 h-56 w-[50%]">
                 <Image
                    src={imagem}
                    alt="Compiuter"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[100%] max-h-[100%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="flex flex-col w-[50%]">
                <div className="flex flex-col text-end">
                    <h1 className="text-2xl font-bold" style={{
                        color: colortitle,
                    }}>{title}</h1>
                    <p className="text-sm mt-5" style={{
                        color: colordescription,
                    }}> {description} </p>
                </div>
                <div className="flex mt-8 justify-end">
                    <Link href="/planos">
                        <Button className="bg-[#26B547]">
                            Experimente
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BannerLeftWeb;