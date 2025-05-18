"use client";

import type { NavbarProps } from "@heroui/react";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link,
    Button,
    Divider,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";
import Image from "next/image";


const menuItems = [
    "About",
    "Blog",
    "Customers",
    "Pricing",
    "Enterprise",
    "Changelog",
    "Documentation",
    "Contact Us",
];

export default function Component(props: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar
            {...props}
            classNames={{
                base: cn("border-[#b7a47a] bg-black/80 backdrop-blur-md", {
                    "bg-black/95": isMenuOpen,
                }),
                wrapper: "w-full justify-center",
                item: "hidden md:flex",
            }}
            height="60px"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            {/* Left Content */}
            <NavbarBrand>
                <div className="rounded-full bg-[#b7a47a] text-black">
                    <Image src="/logo.png" alt="SantoTomás" priority width={34} height={34} />
                </div>
                <span className="ml-2 text-small font-serif font-medium text-[#b7a47a]">SantoTomás</span>
            </NavbarBrand>

            {/* Center Content */}
            <NavbarContent justify="center">
                <NavbarItem>
                    <Link className="text-[#b7a47a] hover:text-white transition" href="#hero" size="sm">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-[#b7a47a] hover:text-white transition" href="#producto" size="sm">
                        Producto
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-[#b7a47a] hover:text-white transition" href="#servicios" size="sm">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-[#b7a47a] hover:text-white transition" href="#nosotros" size="sm">
                        Nosotros
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Right Content */}
            <NavbarContent className="hidden md:flex" justify="end">
                <NavbarItem className="ml-2 !flex gap-2">

                    <Button
                        as={Link}
                        href="#contacto"
                        className="bg-[#b7a47a] font-medium text-black"
                        color="secondary"
                        endContent={<Icon icon="solar:alt-arrow-right-linear" />}
                        radius="full"
                        variant="flat"
                    >
                        Contáctanos
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenuToggle className="text-[#b7a47a] md:hidden" />

            <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-black/90 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150">
                <NavbarMenuItem>
                    <Button fullWidth as={Link} href="#hero" variant="faded" className="text-[#b7a47a]">
                        Inicio
                    </Button>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Button fullWidth as={Link} href="#producto" variant="faded" className="text-[#b7a47a]">
                        Producto
                    </Button>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Button fullWidth as={Link} href="#servicios" variant="faded" className="text-[#b7a47a]">
                        Servicios
                    </Button>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Button fullWidth as={Link} href="#nosotros" variant="faded" className="text-[#b7a47a]">
                        Nosotros
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
