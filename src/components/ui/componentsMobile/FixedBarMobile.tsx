import { FaWhatsapp } from "react-icons/fa";

const FixedBarMobile = () => {
    return (
        <div className="fixed bg-[#5576B3] container shadow-md mx-auto p-5 bottom-0 h-[85px] flex items-center text-white z-20">
            <div className="flex items-center ">
            <FaWhatsapp size={35}/>
            </div>
            <div>
                <p className="text-sm w-36 text-center font-semibold">
                    Fale com a gente no

                    Whatsapp

                </p>
            </div>
            <div className="flex w-2 h-4 left-full r">
              
            </div>
        </div>
    );
}

export default FixedBarMobile;