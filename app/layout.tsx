import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SearchProvider } from "@/hook/search-context";
import { NavbarNew } from "@/components/layout/navbar-new";
import { Toaster } from "@/components/ui/sonner";
import { CompanyProvider } from "@/hook/company-context";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background min-w-fit overflow-x-hidden",
          inter.className
        )}
      >
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
