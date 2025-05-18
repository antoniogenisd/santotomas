"use client";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";

export default function ServicesSection() {
    return (
        <section id="servicios" className="py-20 bg-black text-[#b7a47a] flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
                className="max-w-xl"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Cajas personalizadas y tu marca propia</h2>
                <ul className="list-disc pl-5 space-y-2 text-lg">
                    <li>Cajas personalizadas para tus puros.</li>
                    <li>Desde la creación de tu liga</li>
                    <li>Diseño de marca</li>
                    <li>Diseño de empaque</li>
                    <li>Producción de anilla</li>
                    <li>Producción del empaque</li>
                    <li>Armado del producto final listo para venta</li>
                </ul>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <Image
                    isZoomed
                    src="/personalizada.png"
                    alt="Caja personalizada"
                    className="w-full h-56 object-cover rounded-lg bg-black"
                    width={320}
                />
            </motion.div>
        </section>
    );
} 