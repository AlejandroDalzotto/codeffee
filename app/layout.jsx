"use client"
import "./globals.css"
import { Josefin_Sans as Jsans } from '@next/font/google'
import Navbar from "@/app/components/Navbar"
import Footer from "./components/Footer"
import { ThemeProvider } from "next-themes"

const jsans = Jsans({
  weight: ["400", "700"],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" translate="no">
      <head />
      <body className={jsans.className + " bg-[#CD853F] dark:bg-[#5D4037]"}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <div className="max-w-[100vw]">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
