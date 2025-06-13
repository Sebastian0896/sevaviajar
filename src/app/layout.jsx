//import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";


import { GoogleAnalytics } from '@next/third-parties/google'
import WhatsAppButton from "@/components/WhatsappButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""

        cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <WhatsAppButton />
        {/* Botton de chat en escritorio por Chaty service */}
        <script id="pixel-chaty" async="true" src="https://cdn.chaty.app/pixel.js?id=8PJhUgCC"></script>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-VTSHMQ4D54" />
    </html>
  );
}
