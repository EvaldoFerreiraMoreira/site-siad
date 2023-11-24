import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const FuncSiadBanner = () => {
    return (
        <div>
            <div className="flex text-center font-bold text-xl">
                <h1>Lorem <span className="text-[#3D5685]">Ipsum </span>is simply <span className="text-[#3D5685]">dummy </span>text of <span className="text-[#3D5685]">the </span> printing </h1>
            </div>
            <div className="flex mt-10 gap-7">
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
                <div className="flex flex-col w-48 font-semibold text-xs gap-5">
                    <p className="text-[#575E69]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
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

export default FuncSiadBanner;