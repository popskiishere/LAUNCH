import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "./components/ChatBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amlifi",
  description: "Amlifi - Connecting Founders and Consultants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
