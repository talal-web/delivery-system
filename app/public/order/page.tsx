"use client";

import Link from "next/link";
import { ShoppingCart, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function OrderPage() {
  const options = [
    {
      title: "Shopping Delivery",
      description:
        "Order groceries, food, or any shopping items and get them delivered fast.",
      href: "/public/order/shopping",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Parcel Delivery",
      description:
        "Send documents or packages safely to your desired destination.",
      href: "/public/order/parcel",
      icon: Package,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose Your Delivery Type
          </h1>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Select the service you want to proceed with your order.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {options.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Link href={item.href}>
                  <div className="h-full rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-gray-100">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5`}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Content */}
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 text-sm font-medium text-blue-600 group-hover:translate-x-1 transition">
                      Continue →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
