import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const FixedBarMobile = () => {
    return (
        <div className="fixed bg-[#5576B3] container shadow-md mx-auto p-5 bottom-0 h-[70px] flex items-center text-white z-20">
            <div className="flex items-center ">
                <FaWhatsapp size={35} />
            </div>
            <Link href="https://api.whatsapp.com/send?phone=553398056488&text=Ol%C3%A1%2C%20vim%20pelo%20Site%20da%20Siad">
                <div>
                    <p className="text-sm w-36 text-center font-semibold">
                        Fale com a gente no
                        Whatsapp
                    </p>
                </div>
            </Link>
            <div className="flex w-2 h-4 left-full ">
                <script src="//code.jivosite.com/widget/pasrKoKcWR" async></script>
            </div>
        </div>
    );
}

export default FixedBarMobile;