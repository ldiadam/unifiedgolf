import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
import { SearchProvider } from "@/hook/search-context";
import { CartProvider } from "@/hook/booking-context";
import { NavbarNew } from "@/components/layout/navbar-new";
import { Toaster } from "@/components/ui/sonner";
import { CompanyProvider } from "@/contexts/CompanyContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SearchProvider>
            <CartProvider>
              <CompanyProvider>
                <NavbarNew />
                {children}
                <Toaster />
              </CompanyProvider>
            </CartProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
