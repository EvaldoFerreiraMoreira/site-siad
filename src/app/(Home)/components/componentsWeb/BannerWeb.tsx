import { motion } from "framer-motion";
import Image from "next/image";

const BannerWeb = () => {
    return (
        <>
            <div className="h-96 w-1">
                <motion.div
                    className="flex flex-col items-center justify-center w-8 h-8 bg-[#5576B3] rounded-md"
                    animate={{
                        x: "70vw",
                        y:"-1rem",
                        opacity: 0.5,
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center w-20 h-20 bg-[#5576B3] rounded-md z-10"
                    animate={{
                        x: "79vw",
                        y:"-3rem",
                        opacity: 0.5,
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center w-8 h-8 bg-[#F1F4F9]  rounded-md"
                    animate={{
                        x: "46vw",
                        y:"-6rem",
                        opacity: 1,
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 3,
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center w-20 h-20 bg-[#F1F4F9] rounded-md"
                    animate={{
                        x: "77vw",
                        y:"-8rem",
                        opacity: 0.8,
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center w-5 h-5 bg-[#5576B3]  rounded-md"
                    animate={{
                        x: "40vw",
                        y:"-5rem",
                        opacity: 0.5,
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 3,
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center w-8 h-8 bg-[#F1F4F9]  rounded-md"
                    animate={{
                        x: "48vw",
                        y:"-3rem",
                        opacity: 1,
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 3,
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center w-20 h-20 bg-[#5576B3]  rounded-md"
                    animate={{
                        x: "77vw",
                        y:"2rem",
                        opacity: 0.5,
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 4,
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center w-8 h-8 bg-[#5576B3] rounded-md"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        x: "60vw",
                        y:"-0.8rem",
                        opacity: 0.5,
                    }}

                    exit={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 4,
                    }}
                >
                </motion.div>
                <motion.div
                    className="flex flex-col items-center justify-center w-5 h-5 bg-[#F1F4F9]  rounded-md"
                    animate={{
                        x: "25vw",
                        y:"-4rem",
                        opacity: 1,
                    }}
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 4,
                    }}
                >
                </motion.div>
            </div>
            <div className="flex text-[#A7A7A7] mx-64 z-10">
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
        </>
    );
}

export default BannerWeb;