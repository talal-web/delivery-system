import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: {
    default: "PenguinMama",
    template: "%s | PenguinMama",
  },
  description:
    "PenguinMama - Fast, Safe & Reliable delivery service across Pakistan.",
  keywords: ["PenguinMama", "Courier Service", "Delivery Pakistan"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#faf9ff] text-[#01274c]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
