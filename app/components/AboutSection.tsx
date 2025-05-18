"use client";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="nosotros" className="py-20 bg-black text-[#b7a47a] flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <Image
                    isZoomed
                    src="/artesan.jpg"
                    alt="Proceso artesanal"
                    className="w-72 h-48 object-cover rounded-lg bg-black"
                    width={288}
                />
                <Image
                    isZoomed
                    src="/artesan2.png"
                    alt="Puros apilados"
                    className="w-72 h-48 object-cover rounded-lg bg-black"
                    width={288}
                />
            </motion.div>
            <motion.div
                className="max-w-xl"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Sobre nosotros</h2>
                <p className="text-lg mb-4">
                    Puros Santo Tomás hechos por manos mexicanas con tabaco de alta calidad, directamente de Orizaba Veracruz, México.
                </p>
                <p className="text-lg">
                    En presentaciones de 1, 5, o bien paquete de 25 puros.
                </p>
            </motion.div>
        </section>
    );
} 