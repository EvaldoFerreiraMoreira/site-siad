import { Button } from "@/components/ui/button";
import DialogVideoMobile from "@/components/ui/componentsMobile/DialogVideoMobile";
import Image from "next/image";
import Link from "next/link";

const FuncSiadBannerMobile = () => {
    return (
        <div>
            <div className="flex text-center font-bold text-xl">
                <h1>SIAD <span className="text-[#3D5685]">um jeito fácil </span>de cuidar da sua gestão,<span className="text-[#3D5685]"> um sistema </span> pensado<span className="text-[#3D5685]"> em você </span>e sua <span className="text-[#3D5685]">empresa </span></h1>
            </div>
            <div className="flex flex-col mt-10 gap-7 items-center justify-center">
                <div>
                    <Image
                        src="/IMG-FuncSiad.png"
                        alt="Imagem"
                        width={0}
                        height={0}
                        sizes="110vw"
                        className="h-auto w-auto max-w-[110%] max-h-[110%] rounded-3xl shadow-xl"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                    <DialogVideoMobile video={"https://www.youtube.com/watch?v=rXBbaPidpPM"} />
                </div>
                <div className="flex flex-col w-64 font-semibold text-sm gap-5">
                    <p className="text-[#575E69]"> Administre todo a sua empresa de uma forma fácil e sem complicação, com siad, tarefas
                        passíveis de erros, como cálculo e digitação de preços, quantidades, preenchimento de um
                        cheque, emissão de nota fiscal, ficam mais seguras e eficientes. Melhorando o trabalho dos
                        funcionários e o atendimento aos clientes. ou Trabalhe com os planejamentos de recursos empresarial de uma forma fácil, o controle de
                        toda a sua gestão, bem palma de suas mãos, Agende uma demonstração gratuíta. </p>
                    <Link href="/planos">
                        <Button variant={"default"} size={"sm"} className="bg-[#26B547] rounded-2xl">
                            Experimente
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FuncSiadBannerMobile;