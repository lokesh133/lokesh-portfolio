import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Senior UI/UX Designer | Premium Portfolio",
  description: "Senior UI/UX Designer with 8+ years of experience designing premium SaaS products, enterprise dashboards, CRM systems, and mobile-first digital experiences.",
  keywords: "UI/UX Designer, Product Designer, SaaS Design, Dashboard Design, Figma, Portfolio",
  openGraph: {
    title: "Alex Morgan — Senior UI/UX Designer",
    description: "8+ years crafting premium digital experiences for SaaS, enterprise, and mobile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0B1020] text-[#F8FAFC] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
