import { MessageCircle, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

const FixedBarWeb = () => {
  return (
    <div className="fixed bg-[#5576B3] shadow-md mx-auto w-full p-5 bottom-0 h-[75px] flex items-center gap-96 justify-center text-white">
      <div className="flex items-center gap-2">
        <p>Quer falar com um especialista?</p>
        <div className="flex items-center ">
          <Smartphone size={50} />
          <p>0800 000 0000</p>
        </div>
      </div>

      <div className="flex items-center gap-20 h-16 bg-[#6387C4]">
        <p className="flex text-sm text-center items-center font-semibold">
          <Smartphone size={50} />
          Fale com a gente no Whatsapp
        </p>
        <Button className="bg-[#242858] gap-2"> 
        <MessageCircle />
        Fale conosco</Button>
      </div>
    </div>
  );
};

export default FixedBarWeb;
