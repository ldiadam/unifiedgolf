import { FooterSection } from "@/components/layout/sections/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection />
    </>
  );
}
