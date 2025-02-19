import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav-bar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp-button/whatsapp-button";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DJ Henkz - Música e Entretenimento",
  description:
    "Acompanhe DJ Henkz para as melhores experiências musicais e eventos inesquecíveis. Saiba mais sobre suas apresentações, mixagens e novidades!",
  openGraph: {
    title: "DJ Henkz - Música e Entretenimento",
    description:
      "Acompanhe DJ Henkz para as melhores experiências musicais e eventos inesquecíveis.",
    url: "https://rq569jr7-3000.brs.devtunnels.ms/",
    siteName: "DJ Henkz",
    type: "website",
    images: [
      {
        url: "https://rq569jr7-3000.brs.devtunnels.ms/imagens/albumExemplo.jpg", // URL absoluta
        width: 1200,
        height: 630,
        alt: "DJ Henkz tocando em um evento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Henkz - Música e Entretenimento",
    description:
      "As melhores mixagens e eventos com DJ Henkz. Acompanhe as novidades!",
    images: [
      "https://rq569jr7-3000.brs.devtunnels.ms/imagens/albumExemplo.jpg", // URL absoluta
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <HamburgerMenu />
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
