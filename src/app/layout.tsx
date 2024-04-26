import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Tiago Pavani",
  description: "Portfolio do Tiago Pavani, acesse e faça um orçamento para sua futura landing page",
  keywords: ["landing page", "software", "website", "webdesign", "site", "designer", "desenvolvedor", "programador", "web developer", "software developer", "software engineer"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
