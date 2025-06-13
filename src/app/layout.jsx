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
        <script id="chatway" async="true" src="https://cdn.chatway.app/widget.js?id=fXdOgCJTwbRr"></script>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-VTSHMQ4D54" />
    </html>
  );
}
