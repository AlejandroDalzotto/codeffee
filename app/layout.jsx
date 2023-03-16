import "./globals.css"
import { Josefin_Sans as Jsans } from '@next/font/google'
import Navbar from "@/app/components/Navbar"
import Footer from "./components/Footer"

const jsans = Jsans({
  weight: ["400", "700"],
  subsets: ['latin']
})

export const metadata = {
  title: "Codeffe - Inicio"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" translate="no">
      <head />
      <body className={jsans.className + " bg-neutral-300"}>
        <Navbar />
        <div className="max-w-[100vw]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
