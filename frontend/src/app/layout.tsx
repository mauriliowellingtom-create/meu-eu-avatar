import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Eu 2.0 - Crie seu Avatar Digital com IA",
  description: "Plataforma completa para criar avatares digitais com voz sintética, vídeos automáticos e integração com WhatsApp Business e redes sociais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
