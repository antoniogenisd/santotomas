"use client";
import { motion } from "framer-motion";
import { Image } from "@heroui/react";

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-black text-[#b7a47a] overflow-hidden">
            {/* Imagen de fondo */}
            <img
                src="/Banner.png"
                alt="Fondo Puros Santo Tomás"
                className="absolute inset-0 object-cover opacity-30 z-0 h-screen w-screen"
            />
            {/* Capa para oscurecer más si es necesario */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative z-20 flex flex-col items-center justify-center w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src="/logo.png"
                        alt="Logo Puros Santo Tomás"
                        className="w-40 h-40 mb-6 rounded-full border-4 border-[#b7a47a] bg-black"
                        width={160}
                    />
                </motion.div>
                <motion.h1
                    className="text-5xl md:text-7xl font-serif mb-4 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Puros Santo Tomás
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl font-light text-center max-w-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Tradición, calidad y elegancia en cada puro. ¡Bienvenido!
                </motion.p>
            </div>
        </section>
    );
} 