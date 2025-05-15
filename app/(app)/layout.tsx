import { FooterSection } from "@/components/layout/sections/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="">{children}</div>
      {/* <FooterSection /> */}
    </>
  );
}
