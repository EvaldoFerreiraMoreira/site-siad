// Código específico para a web
import React from "react";
import Image from "next/image";
import { Button } from "../button";
import { FaWhatsapp } from "react-icons/fa";
import {
  Smartphone,
} from "lucide-react";
import { Separator } from "../separator";
import Link from "next/link";
import { NavigationMenuSegmentoWeb } from "./NavigationMenuWeb";
import Formulario from "@/components/ui/Formulario";


const HeaderWeb = () => {
  return (
    <div
      className="fixed bg-white shadow-md w-full p-5 h-[75px] flex justify-evenly items-center z-20"
      id="header"
    >
      <div className="relative h-[75px] w-[175px] ">
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

      <div className="flex gap-16 items-center text-[#808080]">
        <Link href="/planos">
          <h1 className="font-medium">Planos</h1>
        </Link>
        <NavigationMenuSegmentoWeb />
      </div>
      <div className="flex gap-20">
        <div className="flex items-center">
          <Formulario/>
        </div>
        <div className="flex flex-col font-bold">
          <h1>Fale Conosco</h1>
          <p className="flex gap-2 text-[#5576B3]">
            Whatsapp  
            <FaWhatsapp size={20}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderWeb;
