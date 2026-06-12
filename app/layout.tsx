import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lanvok Studio",
  description: "Créé. C'est tout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-[#FFFFFF] text-[#000000]">
        {children}
      </body>
    </html>
  );
}