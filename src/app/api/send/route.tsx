import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";

// Api Key Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Datos del onSubmit
    const dataForm = await req.json();

    const data = await resend.emails.send({
      from: "Tarot de Cata <onboarding@resend.dev>",
      to: ["ktajustlove@hotmail.com"],
      subject: "Cita de Tarot con Cata",
      react: (
        <EmailTemplate
          firstName={dataForm.username}
          email={dataForm.email}
          message={dataForm.message}
        />
      ),

      text: "Petición",
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al enviar el email:", error);
    return NextResponse.json({ error: "Fallo al enviar email" }, { status: 500 });
  }
}
