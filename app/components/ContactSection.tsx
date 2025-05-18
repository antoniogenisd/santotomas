"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Input, Textarea } from "@heroui/input";

export default function ContactSection() {
    const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes integrar un servicio de envío real (EmailJS, Formspree, etc.)
        setEnviado(true);
        setTimeout(() => setEnviado(false), 4000);
    };

    return (
        <section id="contacto" className="py-20 bg-black text-[#b7a47a] flex flex-col items-center justify-center">
            <motion.h2
                className="text-3xl md:text-4xl font-serif mb-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >
                Contáctanos
            </motion.h2>
            <h1 className="text-2xl font-serif mb-8">Envíanos un correo electrónico</h1>
            <motion.form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-[#b7a47a]/10 p-8 rounded-lg flex flex-col gap-4 mb-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <Input
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="text-[#b7a47a]"
                />
                <Input
                    label="Correo electrónico"
                    name="email"
                    placeholder="Correo electrónico"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="text-[#b7a47a]"
                />
                <Textarea
                    label="Mensaje"
                    name="mensaje"
                    placeholder="Mensaje"
                    value={form.mensaje}
                    onValueChange={v => setForm(f => ({ ...f, mensaje: v }))}
                    minRows={4}
                    required
                    className="text-[#b7a47a]"
                />
                <Button
                    type="submit"
                    className="bg-[#b7a47a] text-black font-semibold hover:bg-white transition"
                    radius="full"
                >
                    Enviar
                </Button>
                {enviado && <span className="text-green-400 mt-2">¡Mensaje enviado!</span>}
            </motion.form>
            <motion.div
                className="flex gap-6 mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                <a
                    href="https://wa.me/521234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                    aria-label="WhatsApp"
                >
                    <Icon icon="mdi:whatsapp" width={40} height={40} style={{ color: '#b7a47a' }} className="hover:scale-110 transition-transform" />
                </a>
                <a
                    href="https://facebook.com/500puros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                    aria-label="Facebook"
                >
                    <Icon icon="ri:facebook-fill" width={40} height={40} style={{ color: '#b7a47a' }} className="hover:scale-110 transition-transform" />
                </a>
            </motion.div>
        </section>
    );
} 