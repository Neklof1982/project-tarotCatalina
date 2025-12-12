import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Datos del formulario
    const dataForm = await req.json();

    console.log("BREVO_API_KEY:", process.env.BREVO_API_KEY);

    // Generar HTML directamente como string
    const htmlContent = `
      <div>
        <h1>Mail enviado de: ${dataForm.username}</h1>
        <h2>Correo de contacto: ${dataForm.email}</h2>
        <h3>Mensaje: ${dataForm.message}</h3>
      </div>
    `;

    // Payload Brevo
    const payload = {
      sender: { name: "Tarot de Cata", email: "noreply@brevo.com" },
      to: [{ email: "ktajustlove@hotmail.com" }],
      subject: "Cita de Tarot con Cata",
      htmlContent: htmlContent,
    };

    // Enviar email usando fetch a Brevo
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Error Brevo:", result);
      return NextResponse.json(
        { error: result.message || "Error enviando email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error: unknown) {
    console.error("Error enviando email:", error);

    let message = "Error desconocido";
    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}