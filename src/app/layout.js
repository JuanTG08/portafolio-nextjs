import { Onest } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const typography = Onest({ subsets: ["latin"] });

export const metadata = {
  title:
    "Portafolio de Juan David Triana Gómez - Desarrollador y Programador Web con mas de dos años de experiencia.",
  description:
    "Contrata a Juan David para crear tus aplicaciones web o móviles. Desarrollador web, especializado en crear aplicaciones únicas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta charset="UTF-8" />
      </Head>
      <body className={`${typography.className} mx-auto max-w-3xl`}>
        {children}
      </body>
    </html>
  );
}
