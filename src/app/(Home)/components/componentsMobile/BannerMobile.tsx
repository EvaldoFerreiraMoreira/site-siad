import DialogZoomMobile from "@/components/ui/componentsMobile/DialogZoomMobile";
import Image from "next/image";

const BannerMobile = () => {
    return (
        <div className="text-[#A7A7A7]">
            <div className="flex w-60 font-semibold text-2xl">
                <h1><span className="text-[#3D5685]">Nota fiscal</span> do consumidor eletrônica NFCe</h1>
            </div>
            <div className="mt-6 text-sm text-justify">
                <p> Através do SIAD, é possível emitir rapidamente a Nota Fiscal do Consumidor Eletrônica (NFC-e). A emissão da NFC-e é essencial para fins de fiscalização e comprovação tributária.</p>
            </div>
            <div className="flex mt-10 h-56 justify-center">
               
           
                <Image
                    src="/PC-01.png"
                    alt="Compiuter"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[100%] max-h-[90%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}

export default BannerMobile;