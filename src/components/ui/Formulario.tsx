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
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import ComboSeguimentos from "./ComboSeguimento";
const Formulario = () => {
    const formSchema = z.object({
        username: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
      })
       
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#3D5685]">Nome Completo:</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="Fulano Silva" {...field} />
                                        </FormControl>

                                        <FormLabel className="text-[#3D5685]">Telefone:</FormLabel>
                                        <FormControl>
                                            <Input  className="border border-[#A7A7A7]" placeholder="(27)3700-00000" {...field} />
                                        </FormControl>

                                        <FormLabel className="text-[#3D5685]">Email:</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]"  placeholder="fulano@gmail.com" {...field} />
                                        </FormControl>

                                        <FormLabel className="text-[#3D5685]">Segmento: </FormLabel>
                                        <FormControl>
                                            <ComboSeguimentos/>
                                        </FormControl>

                                        <FormLabel className="text-[#3D5685]">Como podemos ajudar?</FormLabel>
                                        <FormControl>
                                            <Textarea className="border border-[#A7A7A7]" placeholder="" {...field} />
                                        </FormControl>

                                       
                                    </FormItem>
                                )}
                            />

                            <Button  className=" w-[21rem] bg-[#26B547] border border-[#A7A7A7]"type="submit">Enviar</Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog >
    );
}
export default Formulario;