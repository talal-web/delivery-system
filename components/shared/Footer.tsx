import Link from "next/link";
import { Truck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
            <Truck />
            FastExpress
          </div>
          <p className="text-sm">
            Fast and reliable courier service across Pakistan with real-time
            tracking and affordable pricing.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <Link href="/" className="block hover:text-white">
              Home
            </Link>
            <Link href="/services" className="block hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="block hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-sm">
            <p className="flex gap-2">
              <Phone size={16} /> +92 300 0000000
            </p>
            <p className="flex gap-2">
              <Mail size={16} /> info@fastexpress.com
            </p>
            <p className="flex gap-2">
              <MapPin size={16} /> Pakistan
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-white font-semibold mb-4">Ready to Ship?</h3>
          <Link
            href="/public/order"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Order now
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-sm py-4">
        © {new Date().getFullYear()} FastExpress. All rights reserved.
      </div>
    </footer>
  );
}
