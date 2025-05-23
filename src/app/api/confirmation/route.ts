// app/api/confirmation/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { nume, prenume, nrPersoane, telefon, mentions } = await request.json();

  // Configure your SMTP transporter (e.g. Gmail, SendGrid SMTP, etc.)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",   // ← compare strings
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  

  const mailOptions = {
    from: `"RSVP Bot" <${process.env.SMTP_USER}>`,
    to: "constantin.s.olteanu@gmail.com",
    subject: "Confirmare participare",
    text: `
      Nume: ${nume}
      Prenume: ${prenume}
      Nr persoane: ${nrPersoane}
      Telefon: ${telefon}
      Alte mențiuni: ${mentions || "—"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Email send error:", err);
    return NextResponse.error();
  }
}
