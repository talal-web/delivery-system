"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c3d66]/10 bg-[#faf9ff]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo/penguinmama.jpg"
              alt="PenguinMama Logo"
              width={42}
              height={42}
              priority
              className="rounded-2xl object-cover"
            />

            <span className="text-xl font-bold tracking-tight text-[#01274c]">
              penguin
              <span className="text-[#ffbd42]">mama</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition ${
                    isActive
                      ? "text-[#01274c]"
                      : "text-[#1c3d66] hover:text-[#01274c]"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#ffbd42] rounded-full"></span>
                  )}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/order"
              className="bg-[#ffbd42] text-[#01274c] px-5 py-2 rounded-2xl text-sm font-semibold hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              Place Order
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl hover:bg-[#1c3d66]/10 transition"
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={22} className="text-[#01274c]" />
            ) : (
              <Menu size={22} className="text-[#01274c]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 mt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-[#ffbd42]/20 text-[#01274c]"
                      : "text-[#1c3d66] hover:bg-[#1c3d66]/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/order"
              onClick={() => setOpen(false)}
              className="mt-3 bg-[#ffbd42] text-[#01274c] px-5 py-2 rounded-2xl text-sm font-semibold text-center hover:scale-105 transition-all"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
