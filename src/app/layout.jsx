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
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-VTSHMQ4D54" />
    </html>
  );
}
