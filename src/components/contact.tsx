"use client"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

const Contact = () => {

    const [sucessForm, setSucessForm] = useState(false)

    const formSchema = z.object({
        username: z.string().min(2, "El nombre debe tener al menos dos caracteres").max(50, "El nombre debe tener menos de 50 caracteres"),
        email: z.string().refine((val) => {
            // Expresión regular básica
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(val);
        }, {
            message: "Por favor ingresa un correo electrónico válido",
        }),
        message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
        // CHECKBOX npx shadcn-ui@latest add checkbox 
        acceptPolicy: z.boolean().refine((val) => val === true, {
            message: "Debes aceptar las políticas de privacidad",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
            acceptPolicy: false
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        // Depuración de pruebas (quitar async)
        // console.log(values)

        // React to HTML npm install @react-email/render
        const response = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        })
        if (response.status === 200) {
            setSucessForm(true)
        }
    }

    return (
        <div className="mt-8 mb-6">
            <h2 className="text-3xl font-semibold text-center mb-6" id="contact">Contacto</h2>
            <h3 className="text-xl text-gray-400 text-center mb-6">Ponte en contacto conmigo</h3>
            <div className="mt-8 col-spam-2 ">
                {/* FORM npx shadcn@latest add form */}
                <Form {...form}>
                    {sucessForm ? (
                        <h4 className="text-center border-2 border-purple p-6 mb-6">Mensaje enviado con éxito</h4>
                    ) : (
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-slate-400 border-2 rounded-lg p-10">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) =>
                                    <FormItem>
                                        <FormControl>
                                            {/* INPUT npx shadcn@latest add input*/}
                                            <Input
                                                placeholder="Tu nombre"
                                                {...field}
                                                className="dark:bg-slate-800" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                }
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) =>
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Tu e-mail"
                                                {...field}
                                                className="dark:bg-slate-800" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                }
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) =>
                                    <FormItem>
                                        <FormControl>
                                            {/* TEXTAREA npx shadcn@latest add textarea*/}
                                            <Textarea
                                                placeholder="Escribe tu mensaje"
                                                {...field}
                                                className="dark:bg-slate-800" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                }
                            />
                            <FormField
                                control={form.control}
                                name="acceptPolicy"
                                render={({ field }) => (
                                    <FormItem className="flex items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <label htmlFor="acceptPolicy" className="text-sm">
                                                Acepto las <a href="/privacy" className="text-blue-400">políticas de privacidad</a>
                                            </label>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Enviar</Button>
                        </form>
                    )}
                </Form>
            </div>
        </div>
    );
}

export default Contact;