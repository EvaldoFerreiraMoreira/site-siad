import { Button } from "@/components/ui/button";
import DialogImageWEB from "@/components/ui/componentsWeb/DialogImageWeb";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";

interface BannerRightProps {
    title: String,
    description: String,
    img: String,
    colortitle: String,
    colordescription: String,
    button: String
}

const BannerRightWeb = ({ title, description, img, colortitle, colordescription, button }: BannerRightProps) => {

  
    const colortitle2 = "#" + colortitle;
    const colordescription2 = "#" + colordescription;


    return (
        <div className=" flex justify-between items-center gap-10 mx-64">
            <div className="flex flex-col text-left ml-0  w-[50%] " style={{ color: colordescription2 }}>
                <h1 className="font-bold text-2xl" style={{ color: colortitle2 }}>{title}</h1>
                <p className="text-sm mt-5 ">{description}</p>
                <Link href="/planos">
                    <Button className="bg-[#26B547] mt-6">
                        {button}
                    </Button>
                </Link>
            </div>

            <motion.div className="flex w-[50%] justify-end"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 16 }}
            >
                <DialogImageWEB imagem={img} />
            
            </motion.div>
        </div>
    );
}

export default BannerRightWeb;