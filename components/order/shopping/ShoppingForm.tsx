"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { OrderCategory } from "./orderCategories";
import OrderHeader from "./OrderHeader";
import CustomerInfoSection from "./CustomerInfoSection";
import ItemsSection from "./ItemsSection";

type Item = {
  name: string;
  quantity: string;
};

export default function ShoppingOrderForm() {
  const searchParams = useSearchParams();
  const category = (searchParams.get("category") as OrderCategory) || "grocery";

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [items, setItems] = useState<Item[]>([{ name: "", quantity: "" }]);

  const handleSubmit = () => {
    const filledItems = items.filter(
      (item) => item.name.trim() && item.quantity.trim(),
    );

    if (!customerName || !phone || !address || filledItems.length === 0) {
      alert("Please fill all required fields");
      return;
    }

    const itemsText = filledItems
      .map((item, i) => `${i + 1}. ${item.name} — Qty: ${item.quantity}`)
      .join("\n");

    const message = `
🛒 *${category.toUpperCase()} ORDER*

👤 Name: ${customerName}
📞 Phone: ${phone}
📍 Address: ${address}

📦 Items:
${itemsText}

📝 Notes: ${notes || "N/A"}
`;

    const whatsappNumber = "923479107491";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
      <OrderHeader category={category} />

      <CustomerInfoSection
        customerName={customerName}
        phone={phone}
        address={address}
        setCustomerName={setCustomerName}
        setPhone={setPhone}
        setAddress={setAddress}
      />

      <ItemsSection items={items} setItems={setItems} category={category} />

      <textarea
        className="input"
        placeholder="Special instructions (optional)"
        rows={3}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 flex items-center justify-center gap-2"
      >
        <Send size={18} />
        Send Order via WhatsApp
      </button>
    </div>
  );
}
