"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Briefcase } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function NavigationMenuSegmentoWeb() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium">
                        Segmentos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="p-5">

                            <NavigationMenuItem className="font-bold">Comércio:</NavigationMenuItem>
                            <ul className="w-[800px] text-xs p-4">
                                <div className="grid grid-cols-6">
                                    <ListItem title="Casa de Ração" />
                                    <ListItem title="Loja de Roupas" />
                                    <ListItem title="Supermercados" />
                                    <ListItem title="Mercearias" />
                                    <ListItem title="Lojas de Roupas e Acessórios" />
                                    <ListItem title="Loja de Calçados" />
                                    <ListItem title="Eletrodomésticos e Eletrônicos" />
                                    <ListItem title="Móveis e Decoração" />
                                    <ListItem title="Papelarias" />
                                    <ListItem title="Óticas" />
                                    <ListItem title="Joalherias" />
                                </div>
                            </ul>
                            <NavigationMenuItem className="font-bold">Serviços:</NavigationMenuItem>
                            <ul className="w-[800px] text-xs p-4">
                                <div className="grid grid-cols-6">
                                    <ListItem title="Funerárias" />
                                    <ListItem  title="Oficinas" />
                                    <ListItem  title="Bares" />
                                    <ListItem  title="Distribuidora" />
                                </div>
                            </ul>
                            <NavigationMenuItem className="font-bold">Alimentação:</NavigationMenuItem>
                            <ul className="w-[800px] text-xs p-4">
                                <div className="grid grid-cols-6">
                                    <ListItem  title="Padarias" />
                                    <ListItem  title="Restaurantes" />
                                    <ListItem  title="Açougues" />
                                </div>
                            </ul>
                            <NavigationMenuItem className="font-bold">Construção e Reforma:</NavigationMenuItem>
                            <ul className="w-[800px] text-xs p-4">
                                <div className="grid grid-cols-6">
                                    <ListItem  title="Material de Construção" />
                                    <ListItem  title="Madeireiras" />
                                    <ListItem  title="Marmorarias" />
                                </div>
                            </ul>
                            <NavigationMenuItem className="font-bold">Varejo e Atacado:</NavigationMenuItem>
                            <ul className="w-[800px] text-xs p-4">
                                <div className="grid grid-cols-6">
                                    <ListItem  title="Atacado em Geral" />
                                    <ListItem  title="Varejo em Geral" />
                                </div>
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
