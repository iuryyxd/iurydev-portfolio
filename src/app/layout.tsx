import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iury - Portfólio",
  description: "Portfólio de Iury Sena",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-[#0D0E11] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
