import {
  Facebook,
  FacebookIcon,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../separator";
import { FaWhatsapp } from "react-icons/fa";

const FooterWeb = () => {
  return (
    <div className="bg-[#F1F4F9] h-2/3 p-5 pb-14">
      <div className="flex justify-around items-center">
        <div className="flex gap-32">
          <div className="flex flex-col w-80 text-justify">
            <div className="relative h-40 w-48">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Siad Sistemas"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
            </div>
            <p className="text-sm">
              SOBRE SIAD Sistemas é uma empresa com forte crescimento no mercado
              de desenvolvimento de software. Presente desde 1999 no ramo, SIAD
              Sistemas vem se dedicando à melhoria dos processos organizacionais
              de empresas, com softwares que auxiliam na gestão e domínio do
              seus negócios.NOSSA MISSÃO é fornecer automatização dos processos{" "}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col pl-5 gap-32 mt-10">
              <div className="flex flex-col gap-5">
                <Link href="/planos">
                  <p>Planos</p>
                </Link>
                <Link href="#header">
                  <p>Segmentos</p>
                </Link>
              </div>
              <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
                <div>
                  <p>Fale Conosco</p>
                  <p className="text-[#5576B3] flex items-center gap-2">
                    Whatsapp
                    <FaWhatsapp size={20} />
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-auto">
          <p className="text-[#242858] font-bold">SIAD Sistemas</p>
          <div className="mt-5 text-xs">
            <p className="flex gap-1">
              <MapPin size={15} />
              Av. Brasil, 114 - 3º andar - Lacê, Colatina - ES, 29703-032{" "}
            </p>
            <p className="flex gap-1">
              <Phone size={15} />
              (33) 3267-3797
            </p>
            <p className="flex gap-1">
              <Phone size={15} />
              (33) 99805-6488
            </p>
            <p className="flex gap-1">
              <Mail size={15} />
              contato@siad.com.br
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Separator className="bg-black" />
      </div>
      <div className="flex gap-10 font-medium text-lg text-[#242858] justify-center items-center- p-5">
        <p>Siga nossas redes sociais:</p>
        <Link href="https://www.facebook.com/siadsistemasbr">
          <p className="flex gap-1">
            <Facebook />
            @siadsistemasbr
          </p>
        </Link>
        <Link href="https://www.instagram.com/siad_sistemas/">
          <p className="flex gap-1">
            <Instagram />
            @siad_sistemas
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FooterWeb;
