"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#faf9ff]">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#01274c]">
              Fast, Safe & Reliable
              <span className="text-[#1c3d66] block">
                Delivery with PenguinMama
              </span>
            </h1>

            <p className="text-lg text-[#1c3d66]/80 max-w-lg">
              We deliver your parcels and shopping items with speed, care and
              full tracking support. Your trust is our priority.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/order"
                className="bg-[#ffbd42] text-[#01274c] px-6 py-3 rounded-2xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Place Order
              </Link>

              <Link
                href="/services"
                className="border border-[#1c3d66] text-[#1c3d66] px-6 py-3 rounded-2xl font-semibold hover:bg-[#1c3d66] hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="text-sm text-[#1c3d66]/70">
                ✔ Same Day Delivery
              </div>
              <div className="text-sm text-[#1c3d66]/70">✔ Secure Handling</div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#ffbd42]/30 rounded-full blur-2xl"></div>

            <Image
              src="/logo/penguinmama.jpg"
              alt="PenguinMama Delivery"
              width={500}
              height={500}
              priority
              className="rounded-3xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
