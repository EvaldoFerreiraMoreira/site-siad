import Image from "next/image";

const BannerWeb = () => {
    return (
        <div className="flex text-[#A7A7A7] mx-64">
            <div className="flex flex-col justify-center">
                <div className="flex font-bold text-4xl">
                    <h1><span className="text-[#3D5685]">Nota fiscal</span> eletrônica</h1>
                </div>
                <div className="mt-6 w-2/3 text-sm text-justify">
                    <p> Emita suas notas fiscais de forma simples e rápida e sem limite de NF-e e NFC-e, enviando o xml e o pdf para seu cliente sem dificuldade.  </p>
                </div>
            </div>
            <div className="flex mt-10 h-80 justify-center">
                <Image
                    src="/PC-01.png"
                    alt="Compiuter"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[100%] max-h-[100%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}

export default BannerWeb;