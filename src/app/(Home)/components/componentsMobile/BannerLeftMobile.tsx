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

const BannerLeftMobile = ({ title, description, img, colorTitle, colorDescription }: BannerLeftProps) => {

    const imagem = "/" + img;
    const colortitle = "#" + colorTitle;
    const colordescription = "#" + colorDescription;
    return (
        <div>
            <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold" style={{
                    color: colortitle,
                }}>{title}</h1>
                <p className="text-sm mt-5" style={{
                    color: colordescription,
                }}> {description} </p>
            </div>
            <div className="flex mt-8 justify-center">
                <Link href="/planos">
                    <Button className="bg-[#26B547]">
                        Experimente
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
                    className="h-auto w-auto max-w-[100%] max-h-[90%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}

export default BannerLeftMobile;