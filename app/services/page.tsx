"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShoppingCart,
  Package,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
};

const services: Service[] = [
  {
    title: "Fast Delivery",
    description:
      "Lightning-fast delivery service ensuring your orders arrive on time.",
    icon: Truck,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Shopping Delivery",
    description:
      "We shop and deliver groceries, food, and daily essentials for you.",
    icon: ShoppingCart,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Parcel Service",
    description:
      "Secure parcel handling with real-time tracking and safe delivery.",
    icon: Package,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "On-Time Guarantee",
    description:
      "We respect your time with our highly reliable delivery schedule.",
    icon: Clock,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Secure Handling",
    description: "Your packages are handled with maximum care and protection.",
    icon: ShieldCheck,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Live Tracking",
    description: "Track your delivery in real-time from pickup to doorstep.",
    icon: MapPin,
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We provide reliable, fast, and secure delivery solutions tailored to
            your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="h-full rounded-2xl bg-white p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5`}
                  >
                    <Icon size={26} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover line */}
                  <div className="mt-5 h-1 w-0 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
