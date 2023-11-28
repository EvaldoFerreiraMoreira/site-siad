import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const FuncSiadBannerWeb = () => {
    return (
        <div className="flex flex-col mx-56 items-center">
            <div className="flex mt-10 gap-7 justify-between items-center">
                <div>
                    <Image
                        src="/IMG-FuncSiad.png"
                        alt="Imagem"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-w-[110%] max-h-[100%] rounded-3xl shadow-xl"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <div className="flex flex-col font-semibold w-[50%]  text-xs gap-5">
                    <div className="flex font-bold text-2xl">
                        <h1>Lorem <span className="text-[#3D5685]">Ipsum </span>is simply <span className="text-[#3D5685]">dummy </span>text of <span className="text-[#3D5685]">the </span> printing </h1>
                    </div>
                    <p className="text-[#575E69]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
                    <Link href="#carrosselPlanos">
                        <Button variant={"default"} size={"sm"} className="bg-[#26B547] rounded-2xl">
                            Experimente
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FuncSiadBannerWeb;