// Código específico para dispositivos móveis
import React from 'react';
import Image from 'next/image';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '../sheet';
import { Button } from '../button';
import { MenuIcon, HomeIcon, GanttChartSquare, Smartphone } from 'lucide-react';
import { Separator } from '../separator';
import Link from 'next/link';
import { NavigationMenuSegmentoMobile } from './NavigationMenuMobile';
import Formulario from '@/components/ui/componentsWeb/FormularioWeb';
import { FaWhatsapp } from 'react-icons/fa';
import FormularioMobile from './FormularioMobile';

const HeaderMobile = () => {
  return (
    <div className="fixed bg-white container shadow-md mx-auto p-5 top-0 h-[93px] flex justify-between items-center z-20" id="header">
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
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <div className="flex flex-col"></div>
              </div>
              <Separator />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant={"outline"}
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Inicio
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/planos">
                  <Button
                    variant={"outline"}
                    className="w-full justify-start gap-2"
                  >
                    <GanttChartSquare size={16} />
                    Planos
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
                  <Button
                    variant={"outline"}
                    className="w-full justify-start gap-2"
                  >
                    <FaWhatsapp size={17} />
                    Fale Conosco
                  </Button>
                </Link>
              </SheetClose>
              <NavigationMenuSegmentoMobile />
              <SheetDescription className='text-black'>
                <FormularioMobile/>
              </SheetDescription>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HeaderMobile;
