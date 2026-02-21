"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShoppingCart, Pill, Utensils } from "lucide-react";

const categories = [
  {
    title: "Food Delivery",
    icon: Utensils,
    value: "food",
    description: "Order meals from restaurants or home-made food.",
  },
  {
    title: "Medicines",
    icon: Pill,
    value: "medicine",
    description: "Get medicines delivered from nearby pharmacies.",
  },
  {
    title: "Groceries",
    icon: ShoppingCart,
    value: "grocery",
    description: "Daily grocery items delivered to your doorstep.",
  },
];

export default function Categories() {
  const router = useRouter();

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Do You Want to Order?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              onClick={() =>
                router.push(`/order/shopping?category=${cat.value}`)
              }
              className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <cat.icon className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-500 text-sm">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
