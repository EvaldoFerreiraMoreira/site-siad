"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const segmentos = [
    {
        value: "segmento1",
        label: "Casa de Ração",
    },
    {
        value: "segmento2",
        label: "Loja de Roupas",
    },
    {
        value: "segmento3",
        label: "Padarias",
    },
    {
        value: "segmento4",
        label: "Funerárias",
    },
    {
        value: "segmento5",
        label: "Material de Construção ",
    },
    {
        value: "segmento6",
        label: "Oficinas",
    },
    {
        value: "segmento7",
        label: "Bares",
    },
    {
        value: "segmento8",
        label: "Madeireiras",
    },
    {
        value: "segmento9",
        label: "Marmorarias",
    },
    {
        value: "segmento10",
        label: "Supermercados",
    }, {
        value: "segmento11",
        label: "Mercearias",
    },
    {
        value: "segmento12",
        label: "Lojas de Roupas e Acessórios",
    },
    {
        value: "segmento13",
        label: "Loja de Calçados",
    },
    {
        value: "segmento14",
        label: "Funerárias",
    },
    {
        value: "segmento15",
        label: "Material de Construção ",
    },
    {
        value: "segmento16",
        label: "Eletrodomésticos e Eletrônicos",
    },
    {
        value: "segmento17",
        label: "Móveis e Decoração",
    },
    {
        value: "segmento18",
        label: "Papelarias",
    },
    {
        value: "segmento19",
        label: "Óticas",
    },
    {
        value: "segmento20",
        label: "Joalherias",
    },
    {
        value: "segmento21",
        label: "Restaurantes",
    },
    {
        value: "segmento22",
        label: "Distribuidora",
    },
    {
        value: "segmento23",
        label: "Açougues",
    },
    {
        value: "segmento24",
        label: "Atacado em Geral",
    },
    {
        value: "segmento25",
        label: "Joalherias",
    },

]


const ComboSeguimentos = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <div className="">

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        
                        role="combobox"
                        aria-expanded={open}
                        className=" h-10 w-full rounded-md px-3 py-2 justify-between border border-[#A7A7A7]"
                    >
                        {value
                            ? segmentos.find((segmentos) => segmentos.value === value)?.label
                            : "Selecione um segmento..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput  placeholder="Selecione um segmento..." />
                        <CommandEmpty>Nenhuma segmento selecionado.</CommandEmpty>
                        <CommandGroup >
                            {segmentos.map((segmentos) => (
                                <CommandItem 
                                    key={segmentos.value}
                                    value={segmentos.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === segmentos.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {segmentos.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
export default ComboSeguimentos;