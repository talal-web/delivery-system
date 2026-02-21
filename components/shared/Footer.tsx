import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#01274c] text-[#faf9ff]">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            penguin<span className="text-[#ffbd42]">mama</span>
          </h2>
          <p className="text-sm text-[#faf9ff]/80 leading-relaxed">
            Fast, safe and reliable delivery service across Pakistan. We ensure
            your parcels reach on time with complete care and real-time support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-[#ffbd42]">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <Link href="/" className="block hover:text-[#ffbd42] transition">
              Home
            </Link>
            <Link
              href="/services"
              className="block hover:text-[#ffbd42] transition"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block hover:text-[#ffbd42] transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-[#ffbd42]">Contact</h3>
          <div className="space-y-3 text-sm text-[#faf9ff]/90">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +92 300 0000000
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@penguinmama.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Pakistan
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-4 text-[#ffbd42]">Ready to Ship?</h3>
          <Link
            href="/order"
            className="inline-block bg-[#ffbd42] text-[#01274c] px-6 py-3 rounded-2xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Place Order
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1c3d66] text-center text-sm py-5 text-[#faf9ff]/70">
        © {new Date().getFullYear()} PenguinMama. All rights reserved.
      </div>
    </footer>
  );
}
