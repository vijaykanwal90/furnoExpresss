import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
// import {FollowerPointerCard } from "../components/ui/following-pointer";
import { Navbar } from "../components/Navbar";
import Categories from "../components/Categories";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Footer } from "../components/Footer";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const poppins = Poppins({
  weight: ['400', '600', '700'], // You can adjust weights as per your design needs
  subsets: ['latin'],            // Specify the subset, Latin is common
  variable: '--font-poppins',    // Define a CSS variable for use in Tailwind
  display: 'swap',               // Font display strategy for better performance
});
export const metadata: Metadata = {
  title: "FurnoExpress",
  description: "Create and Test furniture designs online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-poppins text-amber-800 bg-white `}
      >
       
        {/* <FollowerPointerCard> */}
        <Navbar/>
        {children}
        <Categories/>
        <AnimatedTestimonials/>
        <Footer/>
        {/* </FollowerPointerCard> */}

      
      </body>
    </html>
  );
}
