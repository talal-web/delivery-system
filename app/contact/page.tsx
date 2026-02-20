"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 🔥 later connect to backend
    await new Promise((r) => setTimeout(r, 1200));

    alert("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="bg-linear-to-br from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold md:text-5xl"
          >
            Contact Us
          </motion.h1>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Have questions about delivery or need support? Our team is ready to
            help you anytime.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT — FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              Send us a Message
            </h2>

            <div className="grid gap-4">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </motion.button>
            </div>
          </motion.form>

          {/* RIGHT — INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} title="Call Us" value="+92 300 1234567" />
              <InfoCard
                icon={Mail}
                title="Email"
                value="support@fastexpress.com"
              />
              <InfoCard
                icon={MapPin}
                title="Office"
                value="Lower Dir, Pakistan"
                full
              />
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Lower Dir%20Pakistan&output=embed"
                className="h-75 w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  full,
}: {
  icon: any;
  title: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-5 shadow-sm ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600">
        <Icon size={22} />
      </div>

      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
