import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { useForm } from "react-hook-form";
import * as o from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import ComboSeguimentos from "./ComboSeguimento";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import api from "@/api/api";

const Formulario = () => {
    const formSchema = o.object({  // Jovens, a letra "o" se refere ao objeto que esta sendo utilizado na restrição
        nome: o.string().min(3, {
            message: "Campo `Nome Completo` precisa ter mais que 3 caracteres.",
        }),
        telefone: o.string().min(10, {
            message: "Campo `Telefone` precisa ter DDD e o número.",
        }),
        email: o.string().min(5, {
            message: "Campo `Email` precisa ter mais que 5 caracteres.",
        }),
        segmento: o.string().min(3, {
            message: "Campo `Segmento` precisa ser preenchido",
        }),
        texto: o.string().max(255, {
            message: "Campo `Como podemos ajudar?` é restrito a 255 caracteres.",
        }),
    })

    const form = useForm<o.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            telefone: "",
            email: "",
            segmento: "",
            texto: "",
        },
    })
    function onSubmit(values: o.infer<typeof formSchema>) {
        console.log("valores que entraram na funcao:", values)

        const contato = {
            "dados": [
                {
                    "nome": values.nome,
                    "telefone": values.telefone,
                    "email": values.email,
                    "segmento": values.segmento,
                    "texto": values.texto
                }
            ]
        }

        console.log("envio dos dados:", contato)
        const rota = "";

        fetch('https://siad.com.br/vendas/api/post_contato.php?funcao=post_contato', {
            method: 'POST',
            body: JSON.stringify({
                dados: [
                    {
                        nome: values.nome,
                        telefone: values.telefone,
                        email: values.email,
                        segmento: values.segmento,
                        texto: values.texto
                    }
                ]
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'
            }
        });
        // api.post(rota,contato, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization':'Bearer'
        //     },
        //     validateStatus: status => {
        //         return status < 405;
        //     }
        // }
        // ).then((res) => {
        //     if (res.status === 404) {
        //         alert("Erro 404 , erro:"+ res)
        //     } else {
        //         console.log("veio:", res)
        //         alert('Sua mensagem foi enviada');

        //     }
        // })

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-[#7AA4F1] text-white rounded-3xl">Demonstração</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] bg-gradient-to-b from-[#E4F0FC] via-[#F1F4F9] to-[#FFFF]">
                <DialogHeader className=" text-left text-[#3D5685] font-bold">
                    <DialogTitle>Entre em Contato</DialogTitle>
                </DialogHeader>
                <div className="felx flex-col grid gap-6 py-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">

                            <FormField
                                control={form.control}
                                name="nome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#3D5685]">Nome Completo:</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="Fulano Silva" {...field} />
                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="telefone"
                                render={({ field }) => (
                                    <FormItem>


                                        <FormLabel className="text-[#3D5685]">Telefone:</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="(27)3700-00000" {...field} />
                                        </FormControl>
                                        <FormMessage />


                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel className="text-[#3D5685]">Email:</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="fulano@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>
                                )}
                            />

                            <FormLabel className="text-[#3D5685]">Segmento:</FormLabel>
                            <FormControl>
                                <FormField
                                    control={form.control}
                                    name="segmento"
                                    render={({ field }) => (
                                        <FormItem>

                                            <Select onValueChange={field.onChange} defaultValue={field.value} >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="selecione um segmento" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent  >
                                                    <SelectGroup >

                                                        <SelectLabel>Comércio:</SelectLabel>
                                                        <SelectItem value="casa_de_racao">Casa de Ração</SelectItem>
                                                        <SelectItem value="loja_de_roupas">Loja de Roupas</SelectItem>
                                                        <SelectItem value="material_de_construcao">Material de Construção</SelectItem>
                                                        <SelectItem value="madeireiras">Madeireiras</SelectItem>
                                                        <SelectItem value="marmorarias">Marmorarias</SelectItem>
                                                        <SelectItem value="supermercados">Supermercados</SelectItem>
                                                        <SelectItem value="mercearias">Mercearias</SelectItem>
                                                        <SelectItem value="lojas_de_roupas_e_acessorios">Lojas de Roupas e Acessórios</SelectItem>
                                                        <SelectItem value="lojas_de_calçados">Loja de Calçados</SelectItem>
                                                        <SelectItem value="eletrodomesticos_e_eletronicos">Eletrodomésticos e Eletrônicos</SelectItem>
                                                        <SelectItem value="moveis_e_decoracao">Móveis e Decoração</SelectItem>
                                                        <SelectItem value="papelarias">Papelarias</SelectItem>
                                                        <SelectItem value="oticas">Óticas</SelectItem>
                                                        <SelectItem value="joalherias">Joalherias</SelectItem>
                                                    </SelectGroup>
                                                    <SelectGroup>
                                                        <SelectLabel>Serviços:</SelectLabel>
                                                        <SelectItem value="funerarias">Funerárias</SelectItem>
                                                        <SelectItem value="oficinas">Oficinas</SelectItem>
                                                        <SelectItem value="bares">Bares</SelectItem>
                                                        <SelectItem value="distribuidora">Distribuidora</SelectItem>
                                                    </SelectGroup>
                                                    <SelectGroup>

                                                        <SelectLabel>Alimentação:</SelectLabel>
                                                        <SelectItem value="padarias">Padarias</SelectItem>
                                                        <SelectItem value="restaurantes">Restaurantes</SelectItem>
                                                        <SelectItem value="acougues">Açougues</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </FormControl>

                            <FormField
                                control={form.control}
                                name="texto"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#3D5685]">Como podemos ajudar?</FormLabel>
                                        <FormControl>
                                            <Textarea className="border border-[#A7A7A7]" placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />


                                    </FormItem>
                                )}
                            />

                            <div className="flex"></div>

                            <Button className="  bg-[#26B547] border border-[#A7A7A7] h-10 w-full rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="submit">Enviar</Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog >
    );
}
export default Formulario;