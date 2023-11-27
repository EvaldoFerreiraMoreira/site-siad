import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const CommonQuestionWeb= () => {
    return (
        <div className="mx-64">
            <div className="flex font-bold text-4xl">
                <h1 className="text-[#3D5685]">Perguntas Frequentes</h1>
            </div>
            <div className=" mt-5 text-[#A7A7A7]">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting lorem Ipsum is simply dummy text of the printing and typesetting
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting lorem Ipsum is simply dummy text of the printing and typesetting
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting lorem Ipsum is simply dummy text of the printing and typesetting
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting lorem Ipsum is simply dummy text of the printing and typesetting
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting lorem Ipsum is simply dummy text of the printing and typesetting
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

            </div>
        </div>
    );
}

export default CommonQuestionWeb;