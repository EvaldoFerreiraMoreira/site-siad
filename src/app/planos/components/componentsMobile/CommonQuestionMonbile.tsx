import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const CommonQuestionMobile = () => {
    return (
        <div >
            <div className="flex w-72 font-bold text-2xl">
                <h1 className="text-[#3D5685]">Perguntas Frequentes</h1>
            </div>
            <div className=" mt-5 text-[#A7A7A7]">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Como posso controlar o estoque de forma eficiente no sistema?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            No nosso sistema, o controle de estoque é realizado automaticamente. Basta cadastrar seus produtos e o sistema atualiza as quantidades disponíveis a cada venda, facilitando o acompanhamento em tempo real.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Posso cadastrar diferentes usuários e definir permissões específicas para cada um no sistema?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            Sim, é possível cadastrar usuários e atribuir permissões personalizadas. Isso garante que cada membro da equipe tenha acesso apenas às funcionalidades necessárias para suas responsabilidades.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Como funciona o processo de emissão de notas fiscais no sistema?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            Nosso sistema permite a emissão de notas fiscais de forma simples e rápida. Você pode gerar notas fiscais eletrônicas (NF-e) e notas fiscais eletrônica de consumidor (NFC-e) diretamente no sistema, garantindo conformidade com a legislação fiscal.

                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            É possível acompanhar as vendas em tempo real no sistema?

                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            Sim, o sistema oferece relatórios e aplicativo mobile que exibem informações em tempo real sobre as vendas, facilitando a tomada de decisões e o acompanhamento do desempenho do negócio.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                            Como realizar a gestão de clientes no sistema?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                            A gestão de clientes é fácil de ser realizada. Você pode cadastrar clientes, acompanhar histórico de compras, e até mesmo oferecer limite de compra personalizados, contribuindo para a fidelização.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                           É possível importar dados de outro sistema, como listas de produtos e clientes, para facilitar o cadastro?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                        Sim, oferecemos funcionalidades de importação, permitindo que seja aproveitado os dados já cadastrados em outro sistema de maneira eficiente.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                          Como o sistema lida com promoções e descontos?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                        Nosso sistema suporta a criação e gerenciamento de promoções e descontos. Você pode definir ofertas especiais, descontos por quantidade, data da promoção, entre outras estratégias para impulsionar suas vendas.
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="font-bold text-md text-left hover:text-[#3D5685]"
                        >
                         Qual é a segurança oferecida para os dados armazenados no sistema?
                        </AccordionTrigger>
                        <AccordionContent className="font-medium text-sm  text-[#737373]">
                        A segurança dos dados é uma prioridade. Utilizamos tecnologias avançadas de criptografia para proteger as informações armazenadas no sistema, garantindo a confidencialidade e integridade dos dados.

                        </AccordionContent>
                    </AccordionItem>
                
                </Accordion>

            </div>
        </div>
    );
}

export default CommonQuestionMobile;