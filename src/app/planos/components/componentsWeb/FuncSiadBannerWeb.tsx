import { Button } from "@/components/ui/button";
import DialogVideoWEB from "@/components/ui/componentsWeb/DialogVideoWeb";
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
                        className="h-auto w-auto max-w-[50%] max-h-[50%] rounded-3xl shadow-xl "
                        style={{
                            objectFit: "contain",
                        }}
                    />
                    <DialogVideoWEB video={"https://www.youtube.com/watch?v=rXBbaPidpPM"} />
                </div>
                <div className="flex flex-col font-semibold w-[50%]  text-sm gap-5">
                    <div className="flex font-bold text-2xl">
                        <h1>SIAD <span className="text-[#3D5685]">um jeito fácil </span>de cuidar da sua gestão,<span className="text-[#3D5685]"> um sistema </span> pensado<span className="text-[#3D5685]"> em você </span>e sua <span className="text-[#3D5685]">empresa </span></h1>
                    </div>
                    <p className="text-[#575E69]"> Administre todo a sua empresa de uma forma fácil e sem complicação, com siad, tarefas
                        passíveis de erros, como cálculo e digitação de preços, quantidades, preenchimento de um
                        cheque, emissão de nota fiscal, ficam mais seguras e eficientes. Melhorando o trabalho dos
                        funcionários e o atendimento aos clientes. ou Trabalhe com os planejamentos de recursos empresarial de uma forma fácil, o controle de
                        toda a sua gestão, bem palma de suas mãos, Agende uma demonstração gratuíta. </p>
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