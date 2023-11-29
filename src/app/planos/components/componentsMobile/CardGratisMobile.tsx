import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardGratisMobile = () => {
    return (
        <div className="flex flex-col items-center text-center gap-8 h-96 z-8">

            <div className="flex flex-col items-center text-center bg-white w-80 h-60 rounded-3xl shadow-lg shadow-[#888B8D] ">
                <div className="flex flex-col mt-6 justify-center ml-6 mr-6 ">
                    <h1 className="text-[#000] text-left font-bold text-lg">Lorem Ipsum is simply dummy text of the printing</h1>
                </div>
                <div className="flex  mt-6 items-center gap-4 ml-6 mr-6 ">
                    <p className=" text-[#A7A7A7] text-justify text-xs  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <Link href="#carrosselPlanos">
                    <Button className="bg-[#E4F0FC] border border-[#2687E9] text-[#2687E9]">
                        Experimente
                    </Button>
                    </Link>

                </div>
            </div>
            <div className="flex flex-col items-center text-center w-80 h-20 gap-2 ">
            <h1 className="text-[#A7A7A7]  font-bold text-xl">Seu negócio terá mais <span className="text-[#303666]">controle financeiro</span>, reduzirá <span className="text-[#303666]"> custos</span> e aumentará as<span className="text-[#303666]"> vendas!</span> </h1>
            </div>
        </div>

    );
}

export default CardGratisMobile;