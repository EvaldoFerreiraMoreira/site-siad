import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import FormularioMobile from "./FormularioMobile";
import FormularioModificadoMobile from "./FormularioModificadoMobile";

const FixedBarMobile = () => {
    return (
        <div className="fixed bg-[#5576B3] container shadow-md mx-auto p-5 bottom-0 h-[70px] flex items-center text-white z-20">
            <div className="flex gap-3 items-center">
                
            <div className="flex   ">
            <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
                <FaWhatsapp size={35} />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
                <div className="flex flex-col">
                    <p className="text-sm w-24 text-center ">
                        Fale no
                    </p>
                    <p className="text-sm w-24 text-center ">Whatsapp</p>
                </div>
            </Link>
            </div>
            <div className="flex">
            <FormularioModificadoMobile/>
            </div>
            {/* <div className="flex w-2 h-4 left-full ">
                <script src="//code.jivosite.com/widget/pasrKoKcWR" async></script>
            </div> */}
        </div>
            </div>
    );
}

export default FixedBarMobile;
