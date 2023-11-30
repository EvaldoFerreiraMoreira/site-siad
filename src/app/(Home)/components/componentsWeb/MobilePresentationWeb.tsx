import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const MobilePresentationWeb = () => {
    return (
        <div className=" flex mx-64 justify-evenly w-full h-96 ">
            <div className="flex flex-col justify-center ">
                <div className="flex w-72 font-bold text-4xl">
                    <h1 className="text-[#3D5685]">Gestor Mobile</h1>
                </div>
                <div className="mt-6 w-2/3 font-semibold text-justify">
                    <span className="text-[#3D5685]">Confira a nossa solução mobile com os principais resultados da sua empresa</span>
                </div>
                <div className="flex flex-col gap-2 mt-5 text-[#3D5685] text-sm" >
                    <ul className="w-full justify-start gap-2" >
                        <li className="flex gap-1 ">
                            <Smartphone size={25} />
                            <p> Melhor horário das vendas</p>
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={25} />
                            <p>mês a mês</p>
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={25} />
                            <p>pranking de vendas</p>
                        </li>
                        <li className="flex gap-1 mt-2" >
                            <Smartphone size={25} />
                            <p>formas de pagamentos e vendedores</p>
                        </li>
                    </ul>
                </div>
                <div className="flex mt-8">
                    <Link href="/planos">
                        <Button className="bg-[#26B547]">
                            <p>Experimente</p>
                        </Button>
                    </Link>
                </div>
            </div>

            <div>
                <div className="flex h-96 justify-center">
                    <Image
                        src="/Iphone-mobile.png"
                        alt="SMARTPHONE"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-w-[100%] max-h-[100%]"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default MobilePresentationWeb;