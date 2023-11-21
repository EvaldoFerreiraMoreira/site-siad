import { MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./separator";

const Footer = () => {
    return (
        <div className="bg-[#F1F4F9] h-96 p-5">
            <div className="relative h-40 w-48">
                <Link href="/">
                    <Image src="/logo.png" alt="Full Stack Week" fill />
                </Link>
            </div>
            <div className="flex">
                <div className="text-ellipsis">
                    <p className="text-xs text-justify w-44 h-28"> SOBRE SIAD Sistemas é uma empresa com forte crescimento no mercado de desenvolvimento de software. Presente desde 1999 no ramo, SIAD Sistemas vem se dedicando à melhoria dos processos organizacionais de empresas, com softwares que auxiliam na gestão e domínio do seus negócios.NOSSA MISSÃO é fornecer automatização dos processos</p>
                </div>
                <div className="flex flex-col pl-5 gap-5">
                    <p>Planos</p>
                    <p>Segmentos</p>
                    <div className="pt-8">
                        <p className="text-xs">Fale Conosco</p>
                        <p className="text-[#5576B3] flex items-center gap-2">Whatsapp
                            <Smartphone size={16} />
                        </p>
                    </div>
                </div>
                <div className="text-xs">
                    <p className="text-[#242858] font-bold">SIAD Sistemas</p>
                    <div className="mt-8">

                    <p className="flex"> <MapPin size={20} />
                        Av. Brasil, 114 - 1º andar - Lacê, Colatina - ES, 29703-032 </p>
                    <p>(33) 3267-3797</p>
                    <p>(33) 99805-6488</p>
                    <p>contato@siad.com.br</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;