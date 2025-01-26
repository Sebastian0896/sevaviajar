//import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";


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
    </html>
  );
}
