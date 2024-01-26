"use client"
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import "./globals.css";
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer"

import Head from "./components/common/Head"

// Fonts declaration - start

const poppins= Poppins({
  weight:['400','500','600','700'],
  subsets:['latin']
})

const inter = Inter({ subsets: ["latin"] });

// Fonts - end

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const  [isLoading, setIsLoading] = useState(isHome)

  useEffect(() =>{
    if(isLoading){
      return
    }
  },[isLoading])

  return (
    <html lang="en">
      <Head/>
      <body className={`${poppins.className} antialiased`}>
        {
          isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)}/>
          ) : (
          <>
          <Header/>
          <main>
          {children}
          </main>
          </>
          )
        }
        <Footer/>
      </body>
    </html>
  );
}
