"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Clock,
  ShieldCheck,
  MapPin,
  Warehouse,
} from "lucide-react";

const services = [
  {
    title: "Same Day Delivery",
    description:
      "Fast and reliable same-day delivery service within major cities across Pakistan.",
    icon: Truck,
  },
  {
    title: "Parcel Delivery",
    description:
      "Secure parcel delivery for documents, packages, and business shipments nationwide.",
    icon: Package,
  },
  {
    title: "Express Shipping",
    description:
      "Urgent shipments delivered with priority handling and fastest routes.",
    icon: Clock,
  },
  {
    title: "Secure Handling",
    description:
      "Your parcels are protected with professional packaging and safe handling.",
    icon: ShieldCheck,
  },
  {
    title: "Nationwide Coverage",
    description: "We deliver to major cities and remote areas across Pakistan.",
    icon: MapPin,
  },
  {
    title: "Warehousing",
    description:
      "Smart storage and inventory solutions for growing businesses.",
    icon: Warehouse,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold md:text-5xl"
          >
            Our Courier Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-blue-100"
          >
            FastExpress Courier provides reliable, fast, and secure delivery
            solutions tailored for individuals and businesses across Pakistan.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-gray-600">{service.description}</p>

                <div className="mt-4 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-16" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-indigo-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Ship Your Parcel?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Book your delivery today with FastExpress Courier and experience
            fast, secure, and affordable shipping.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="public/order"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-gray-100"
          >
            Place an Order
          </motion.a>
        </div>
      </section>
    </div>
  );
}
