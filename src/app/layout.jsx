//import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";


import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-VTSHMQ4D54" />
    </html>
  );
}
