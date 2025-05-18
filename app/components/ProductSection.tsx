"use client";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";

export default function ProductSection() {
    return (
        <section id="producto" className="py-20 bg-black text-[#b7a47a] flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <Image
                    isZoomed
                    src="/puro.png"
                    alt="Puro Santo Tomás"
                    className="w-40 h-full object-cover rounded-lg bg-black"
                    width={160}
                />
            </motion.div>
            <motion.div
                className="max-w-xl"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Vitola: Robusto</h2>
                <ul className="mb-4 space-y-1 text-lg">
                    <li><b>Liga:</b> Tradicional</li>
                    <li><b>Anilla:</b> 50</li>
                    <li><b>Pulgadas:</b> 5.0 / 18 cms</li>
                    <li><b>Capa:</b> Sumatra</li>
                    <li><b>Capote:</b> Marrón Claro</li>
                    <li><b>Tripa:</b> Criollo claro 50%, Oscuro 50%</li>
                    <li><b>Fermentación:</b> 18 meses</li>
                    <li><b>Añejamiento:</b> 2 meses</li>
                    <li><b>Fortaleza:</b> Suave</li>
                </ul>
                <div className="bg-[#b7a47a]/10 p-4 rounded-lg">
                    <b>Nota de cata:</b>
                    <p>Puro corto que evoluciona a cada tercio, se perciben matices tostados sobre todo en el primer tercio, añejo, maduro e inigualable.</p>
                </div>
            </motion.div>
        </section>
    );
} 