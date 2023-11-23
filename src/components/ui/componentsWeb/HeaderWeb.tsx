// Código específico para a web
import React from "react";
import Image from "next/image";
import { Button } from "../button";
import {
  Smartphone,
} from "lucide-react";
import { Separator } from "../separator";
import Link from "next/link";
import { NavigationMenuSegmentoWeb } from "./NavigationMenuWeb";


const HeaderWeb = () => {
  return (
    <div
      className="fixed bg-white shadow-md mx-auto w-full p-5 h-[110px] flex justify-between items-center"
      id="header"
    >
      <div className="relative h-[95px] w-[200px]">
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
        <div>
          <Button
            variant={"default"}
            size={"lg"}
            className="bg-[#5576B3] rounded-3xl"
          >
            Demonstração
          </Button>
        </div>
        <div className="flex flex-col font-bold">
          <h1>Fale Conosco</h1>
          <p className="flex text-[#5576B3]">
            Whatsapp
            <Smartphone />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderWeb;