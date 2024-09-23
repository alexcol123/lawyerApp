import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ClerkProvider } from '@clerk/nextjs'
import Providers from "./providers";
import Navbar from "@/components/myComponents/navbar/Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Latino Inmigración | Ajusta tu Estatus Migratorio de Forma Rápida y Económica",
  description: "Ayudamos a la comunidad latina a completar sus aplicaciones migratorias de manera rápida, segura y a bajo costo. Simplifica tu proceso con nuestra plataforma fácil de usar.",


  openGraph: {
    type: "website",
    locale: "es_US",

    // url: "https://turo-rentals.vercel.app/",
    title: "Latino Inmigración | Servicios Migratorios para la Comunidad Latina en los Estados Unidos",
    description: "Facilitamos el ajuste de estatus migratorio para latinos en los Estados Unidos con un proceso económico y rápido. Obtén el apoyo que necesitas para completar tus planillas migratorias.",
    siteName: "Latino Inmigración",
    // images: [
    //   {
    //     url: "https://turo-rentals.vercel.app/corvette.jpg ",
    //     width: 1200,
    //     height: 630,
    //     alt: "9Pilares | Figuras y Estatuas Exclusivas de anime Demon Slayer, dragon ball, one piece, naruto entre otros",
    //   },
    // ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>
      <html lang="en"
        suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>
            <Navbar />
            <main className='container'>
              <div className="pt-32">{children}</div>
            </main>

          </Providers>
        </body>
      </html>

    </ClerkProvider>

  );
}
