"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ParcelOrderForm() {
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");

  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [parcelType, setParcelType] = useState("");
  const [weight, setWeight] = useState(""); // string OK
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (
      !senderName ||
      !senderPhone ||
      !pickupAddress ||
      !receiverName ||
      !receiverPhone ||
      !deliveryAddress
    ) {
      alert("Please fill all required fields");
      return;
    }

    const message = `
📦 *Parcel Delivery Order*

🚚 *Sender Details*
Name: ${senderName}
Phone: ${senderPhone}
Pickup: ${pickupAddress}

🎯 *Receiver Details*
Name: ${receiverName}
Phone: ${receiverPhone}
Delivery: ${deliveryAddress}

📦 Parcel Type: ${parcelType || "N/A"}
⚖️ Weight: ${weight || "N/A"}

📝 Notes: ${notes || "N/A"}
`;

    const whatsappNumber = "923479107491"; // 🔴 CHANGE

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">📦 Parcel Delivery</h2>

      {/* Sender */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Sender Name *"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
        />

        <input
          className="input"
          placeholder="Sender Phone *"
          value={senderPhone}
          onChange={(e) => setSenderPhone(e.target.value)}
        />
      </div>

      <input
        className="input"
        placeholder="Pickup Address *"
        value={pickupAddress}
        onChange={(e) => setPickupAddress(e.target.value)}
      />

      {/* Receiver */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Receiver Name *"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
        />

        <input
          className="input"
          placeholder="Receiver Phone *"
          value={receiverPhone}
          onChange={(e) => setReceiverPhone(e.target.value)}
        />
      </div>

      <input
        className="input"
        placeholder="Delivery Address *"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      />

      {/* Parcel Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Parcel Type (e.g., Documents)"
          value={parcelType}
          onChange={(e) => setParcelType(e.target.value)}
        />

        <input
          className="input"
          placeholder="Weight (e.g., 2kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <textarea
        className="input"
        rows={3}
        placeholder="Additional notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 flex items-center justify-center gap-2"
      >
        <Send size={18} />
        Send via WhatsApp
      </button>
    </div>
  );
}
