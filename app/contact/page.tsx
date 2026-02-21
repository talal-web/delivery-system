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

    await new Promise((r) => setTimeout(r, 1200));

    alert("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="bg-[#faf9ff]">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#01274c] to-[#1c3d66] text-[#faf9ff]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold md:text-5xl"
          >
            Get in Touch with PenguinMama
          </motion.h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#faf9ff]/80">
            Have questions about delivery or need assistance? Our team is always
            ready to support you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-md"
          >
            <h2 className="mb-6 text-2xl font-semibold text-[#01274c]">
              Send us a Message
            </h2>

            <div className="grid gap-4">
              <InputField
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />

              <InputField
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
              />

              <InputField
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />

              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="rounded-2xl border border-[#1c3d66]/20 p-3 outline-none focus:ring-2 focus:ring-[#1c3d66]"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#ffbd42] py-3 font-semibold text-[#01274c] transition hover:shadow-lg disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </motion.button>
            </div>
          </motion.form>

          {/* INFO SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoCard icon={Phone} title="Call Us" value="+92 300 1234567" />
              <InfoCard
                icon={Mail}
                title="Email"
                value="support@penguinmama.com"
              />
              <InfoCard icon={MapPin} title="Office" value="Pakistan" full />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-md">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Lower Dir&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* Reusable Input */
function InputField(props: any) {
  return (
    <input
      required
      {...props}
      className="rounded-2xl border border-[#1c3d66]/20 p-3 outline-none focus:ring-2 focus:ring-[#1c3d66]"
    />
  );
}

/* Info Card */
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
      className={`rounded-3xl bg-white p-6 shadow-md ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <div className="mb-4 inline-flex rounded-2xl bg-[#ffbd42]/20 p-3 text-[#01274c]">
        <Icon size={22} />
      </div>

      <h4 className="font-semibold text-[#01274c]">{title}</h4>
      <p className="text-[#1c3d66]">{value}</p>
    </div>
  );
}
