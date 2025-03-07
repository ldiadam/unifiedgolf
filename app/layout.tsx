import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
import { SearchProvider } from "@/hook/search-context";
import { CartProvider } from "@/hook/booking-context";
import { NavbarNew } from "@/components/layout/navbar-new";
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
          enableSystem={false}
          disableTransitionOnChange
        >
          <SearchProvider>
            <CartProvider>
              <NavbarNew />
              {children}
            </CartProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
