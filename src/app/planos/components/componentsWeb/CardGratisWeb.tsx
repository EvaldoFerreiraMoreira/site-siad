import Formulario from "@/components/ui/Formulario";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardGratisWeb = () => {
    return (
        <div className="flex flex-col items-center text-center gap-10 h-96 z-8 ">


            <div className="flex  items-center justify-center text-center bg-white mx-64  h-60 rounded-3xl shadow-lg shadow-[#888B8D] ">
                <div className=" flex flex-col w-[70%]">

                    <div className="flex flex-col  justify-center ml-6 mr-6 ">
                        <h1 className="text-[#000] text-left font-bold text-2xl">Você sabia que agora é possível processar pedidos em partes com o SIAD ?</h1>
                    </div>
                    <div className="flex  mt-6 items-center gap-4 ml-6 mr-6 ">
                        <p className=" text-[#A7A7A7] text-justify text-sm  ">
                            O nome disso é faturamento parcial, é quando um pedido não pode ser concluído de uma vez só, seja por falta de produtos em estoque para concluir a venda, ou quando ocorre o envio antecipado de uma parcela.</p>

                    </div>

                </div>
                <Link href="#carrosselPlanos">
                    <Formulario />
                </Link>

            </div>
            <div className="flex flex-col items-center mx-64 text-center   gap-2 ">
                <h1 className="text-[#A7A7A7]  font-bold text-3xl">Seu negócio terá mais <span className="text-[#303666]">controle financeiro</span>, reduzirá <span className="text-[#303666]"> custos</span> e aumentará as<span className="text-[#303666]"> vendas!</span> </h1>
            </div>
        </div>

    );
}

export default CardGratisWeb;