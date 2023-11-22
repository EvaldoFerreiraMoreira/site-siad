import { MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./separator";

const Footer = () => {
  return (
    <div className="bg-[#F1F4F9] h-96 p-5">
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
      <div className="flex justify-between">
        <div className="flex flex-col pl-5 gap-5">
          <Link href="/planos">
            <p>Planos</p>
          </Link>
          <p>Segmentos</p>
          <div>
            <p>Fale Conosco</p>
            <p className="text-[#5576B3] flex items-center gap-2">
              Whatsapp
              <Smartphone size={16} />
            </p>
          </div>
        </div>
        <div className="flex flex-col w-40">
          <p className="text-[#242858] font-bold">SIAD Sistemas</p>
          <div className="mt-5 text-xs ">
            <p className="flex">
              <MapPin size={20} />
              Av. Brasil, 114 - 1º andar - Lacê, Colatina - ES, 29703-032{" "}
            </p>
            <p>(33) 3267-3797</p>
            <p>(33) 99805-6488</p>
            <p>contato@siad.com.br</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
