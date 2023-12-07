import { MessageCircle, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { FaWhatsapp } from "react-icons/fa";

const FixedBarWeb = () => {
  return (
    <div className="fixed bg-[#5576B3] shadow-md mx-auto w-full p-5 bottom-0 h-[60px] z-10 flex items-center gap-96 justify-center text-white">
      <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
        <div className="flex items-center gap-2">
          <p>Quer falar com um consultor?</p>
          <div className="flex items-center ">
            <Smartphone size={35} />
            <p></p>
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-20 h-12 bg-[#6387C4] w-[20%] rounded-lg">
        <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
          <p className="flex justify-center px-5 gap-3 text-sm text-center items-center font-medium">
            <FaWhatsapp size={30} />
            Fale com a gente no Whatsapp
          </p>
        </Link>
      </div>
      <script src="//code.jivosite.com/widget/pasrKoKcWR" async></script>
    </div>
  );
};

export default FixedBarWeb;
