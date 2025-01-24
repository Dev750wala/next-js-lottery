import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
// import { ThirdwebProvider } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Raffle",
  description: "Raffle DApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThirdwebProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ThirdwebProvider >
  );
}
