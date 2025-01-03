// app/layout.tsx
"use client"
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Seo } from "@/components/Loader";  // Assuming your loader is already in this path
import { motion } from "framer-motion"; // Import Framer Motion
import Head from "./head";  // Ensure this imports the Head component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop the loader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head /> {/* Ensure the Head component is included here */}
          <motion.div
            initial={{ opacity: 0 }} // Start with 0 opacity
            animate={{ opacity: 1 }}  // Fade in with full opacity
            transition={{ duration: 1 }} // Smooth transition for fade-in
          >
            {children} {/* Children fade in after loader */}
          </motion.div>
        
      </body>
    </html>
  );
}
