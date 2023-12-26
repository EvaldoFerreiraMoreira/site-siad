import { Button } from "@/components/ui/button";
import DialogImageWEB from "@/components/ui/componentsWeb/DialogImageWeb";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BannerLeftProps {
    title: String,
    description: String,
    img: String,
    colorTitle: String,
    colorDescription: String;
}

const BannerLeftWeb = ({ title, description, img, colorTitle, colorDescription }: BannerLeftProps) => {


    const colortitle = "#" + colorTitle;
    const colordescription = "#" + colorDescription;
    return (
        <div className=" flex justify-evenly items-center gap-10 mx-64">
           
           <motion.div className="flex w-[50%]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 16 }}
            >
              <DialogImageWEB imagem={img}
                />
            </motion.div>
            <div className="flex flex-col text-right ml-0 w-[50%]" style={{ color: colordescription }}>
                <h1 className="font-bold text-2xl" style={{ color: colortitle }}>{title}</h1>
                <p className="text-sm mt-5 ">{description}</p>
                <Link href="/planos">
                    <Button className="bg-[#26B547] mt-6">
                        Experimente
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default BannerLeftWeb;