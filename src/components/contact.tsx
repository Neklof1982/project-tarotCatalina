"use client"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {

    const formSchema = z.object({
        username: z.string().min(2, "El nombre debe tener al menos dos caracteres").max(50, "El nombre debe tener menos de 50 caracteres"),
        email: z.string().refine((val) => {
        // Expresión regular básica
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(val);
    }, {
        message: "Por favor ingresa un correo electrónico válido",
    }),
        message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {

        console.log(values)
    }

    return (
        <div className="mt-8 mb-6">
            <h2 className="text-3xl font-semibold text-center mb-6" id="#contact">Contacto</h2>
            <h3 className="text-xl text-gray-400 text-center mb-6">Ponte en contacto conmigo</h3>
            <div className="mt-8 col-spam-2 ">
                {/* FORM npx shadcn@latest add form */}
                <Form {...form}>
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
                                            placeholder="Tu mensaje"
                                            {...field}
                                            className="dark:bg-slate-800" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }
                        />
                        <Button type="submit">Enviar</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default Contact;