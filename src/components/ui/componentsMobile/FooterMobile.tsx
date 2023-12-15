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

const FooterMobile = () => {
  return (
    <div className="bg-[#F1F4F9] h-2/3 p-5 pb-20">
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
          <Link href="#header">
            <p>Segmentos</p>
          </Link>
          <div>
            <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
              <p>Fale Conosco</p>
              <p className="text-[#5576B3] flex items-center gap-2">
                Whatsapp
                <FaWhatsapp size={20} />
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-40">
          <p className="text-[#242858] font-bold">SIAD Sistemas</p>
          <div className="mt-5 text-xs">
            <p className="flex gap-1">
              <MapPin size={30} />
              Av. Brasil, 114 - 3º andar - Lacê, Colatina - ES, 29703-032{" "}
            </p>
            <p className="flex gap-1">
              <Phone size={15} />
              (33) 3267-3797
            </p>
            <p className="flex gap-1">
              <Phone size={15} />
              (33) 9 9805-6488
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
      <div className="flex gap-10 font-medium text-[#242858] justify-center p-5">
        <Link href="https://www.facebook.com/siadsistemasbr">
          <p className="flex gap-1">
            <Facebook />
            @siadsistemasbr
          </p>
        </Link>
        <Link href="https://www.instagram.com/siad_sistemas/">
          <p className="flex gap-1">
            <Instagram />
            @siadsistemasbr
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FooterMobile;
