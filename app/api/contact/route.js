import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nueva historia compartida - Con-Textura Real",
      text: `
Nombre: ${data.nombre || "No indicado"}
Correo: ${data.correo || "No indicado"}

Mensaje:
${data.mensaje}
      `,
    });

    return Response.json({
      success: true,
      message: "Mensaje enviado",
    });

  } catch (error) {
    console.error("ERROR EMAIL:", error);

    return Response.json(
      {
        success: false,
        error: "Error al enviar",
      },
      { status: 500 }
    );
  }
}