import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const MobilePresentationMobile = () => {
    return (
        <div className=" flex text-[#A7A7A7] justify-center ">
            <div className="flex flex-col  ">
                <div className="flex w-56 font-bold text-2xl">
                    <h1 className="text-[#3D5685]">Gestor Mobile</h1>
                </div>
                <div className="flex mt-2 w-56 font-semibold text-xs">
                    <span className="text-[#3D5685]">Confira a nossa solução mobile com os principais resultados da sua empresa</span>
                </div>
                <div className="flex flex-col  gap-2 mt-3 text-[#3D5685] text-sm" >
                    <ul className="w-full justify-start gap-2" >
                        <li className="flex gap-1 ">
                            <Smartphone size={25} />
                            <p>Melhor horário das vendas</p>
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={25} />
                            <p>Mês a mês</p>
                        </li>
                        <li className="flex gap-1 mt-2">
                            <Smartphone size={25} />
                            <p>Ranking de vendas</p>
                        </li>
                        <li className="flex gap-1 mt-2" >
                            <Smartphone size={30} />
                            <p>Formas de pagamentos e vendedores</p>
                        </li>
                    </ul>
                </div>
                <div className="flex mt-8  ml-3">
                    <Link href="/planos">
                        <Button className="bg-[#26B547]">
                            <p>Experimente</p>
                        </Button>
                    </Link>
                </div>
            </div>

            <div>
                <div className="flex mt-16 h-48 w-[7.5rem]">
                    <Image
                        src="/Iphone-mobile.png"
                        alt="SMARTPHONE"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" absolute h-auto w-auto max-w-[100%] max-h-[100%]"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default MobilePresentationMobile;