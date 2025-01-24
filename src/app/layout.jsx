//import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Sevaviajar",
  description: "Consultoría Migratoria y Consular",
};

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
