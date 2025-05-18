"use client";
import { Image } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function FooterSection() {
    return (
        <footer className="bg-black text-[#b7a47a] border-t border-[#b7a47a]/30 pt-12 pb-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Logo y nombre */}
                <div className="flex flex-col justify-center items-center align-middle gap-2">
                    <Image
                        src="/logo.png"
                        alt="Logo Puros Santo Tomás"
                        className="w-16 h-16 rounded-full border-2 border-[#b7a47a] bg-black"
                        width={64}
                        style={{ height: "auto" }}
                    />
                    <span className="font-serif text-xl font-semibold">Puros Santo Tomás</span>
                </div>
                {/* Redes y contacto */}
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex gap-4 mb-2">
                        <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <Icon icon="mdi:whatsapp" width={32} height={32} style={{ color: '#b7a47a' }} className="hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://facebook.com/500puros" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Icon icon="ri:facebook-fill" width={32} height={32} style={{ color: '#b7a47a' }} className="hover:scale-110 transition-transform" />
                        </a>
                    </div>
                    <span className="text-sm text-[#b7a47a]/80">Orizaba, Veracruz, México</span>
                    <span className="text-sm text-[#b7a47a]/80">info@500puros.com</span>
                </div>
            </div>
            <div className="mt-8 text-center text-xs text-[#b7a47a]/60">
                © {new Date().getFullYear()} Puros Santo Tomás. Todos los derechos reservados.
            </div>
        </footer>
    );
} 