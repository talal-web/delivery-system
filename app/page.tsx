import Link from "next/link";
import { Truck, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-linear-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fast & Reliable Courier Service
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-8">
            Deliver parcels across Pakistan with real-time pricing and secure
            handling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/public/order"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Place Order
            </Link>
            <Link
              href="/services"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Feature
            icon={<Truck />}
            title="Nationwide Delivery"
            desc="We deliver parcels quickly across all major cities in Pakistan."
          />
          <Feature
            icon={<Clock />}
            title="On-Time Delivery"
            desc="Fast processing and guaranteed delivery timelines."
          />
          <Feature
            icon={<ShieldCheck />}
            title="Secure Handling"
            desc="Your packages are handled with maximum care and safety."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <MapPin className="mx-auto mb-4 text-blue-600" size={40} />
          <h2 className="text-3xl font-bold mb-4">
            Get Instant Delivery Quote
          </h2>
          <p className="text-gray-600 mb-6">
            Enter pickup and delivery locations to calculate your shipping cost.
          </p>
        </div>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
