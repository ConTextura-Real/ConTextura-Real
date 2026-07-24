import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    console.log("DATOS ORACION:", data);

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

      subject: "Nueva solicitud de oración - Con-Textura Real",

      text: `
Nueva solicitud de oración

Nombre:
${data.nombre || "No indicado"}

Correo:
${data.correo || "No indicado"}

Petición de oración:

${data.mensaje || "Sin mensaje"}

      `,
    });


    return Response.json({
      success: true,
      message: "Oración enviada correctamente",
    });


  } catch (error) {

    console.error("ERROR ORACION:", error);


    return Response.json(
      {
        success: false,
        error: "Error al enviar oración",
      },
      {
        status: 500,
      }
    );

  }
}