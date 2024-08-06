import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { openSans } from "@/utils/fonts";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/sections/navbar";
import { NavbarProvider } from "@/providers/navbar_provider";
import MobileMenuWrapper from "@/components/globals/mobile_menu_wrapper";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Portfolio - Royal G",
  description: "Royal GAETAN - Updates, Blog, Projects, etc...",
  icons: {
    icon: "../public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NavbarProvider>
          <Navbar />
          <MobileMenuWrapper>
            <NextTopLoader color="#F31260" showSpinner={false} />
            <body className={openSans.className}>
              {children}
              <Toaster />
            </body>
          </MobileMenuWrapper>
        </NavbarProvider>
      </ThemeProvider>
    </html>
  );
}
