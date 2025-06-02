import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { NavbarNew } from "@/components/layout/navbar-new";
import { Toaster } from "@/components/ui/sonner";
import { CompanyProvider } from "@/hook/company-context";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background overflow-x-hidden", inter.className)}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <CompanyProvider>
            <NavbarNew />
            {children}
            <Toaster />
          </CompanyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
