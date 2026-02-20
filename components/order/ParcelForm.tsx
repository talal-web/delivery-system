"use client";

import { useState } from "react";
import { useParcelOrders } from "@/hooks/useParcel";
import type { ParcelOrder } from "@/types/parcelOrder";

export default function ParcelForm() {
  const { createOrderMutation } = useParcelOrders();

  const [form, setForm] = useState<ParcelOrder>({
    customerName: "",
    phone: "",
    pickupAddress: "",
    deliveryAddress: "",
    packageDetails: "",
  });

  const handleChange = (field: keyof ParcelOrder, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (
      !form.customerName ||
      !form.phone ||
      !form.pickupAddress ||
      !form.deliveryAddress
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await createOrderMutation.mutateAsync(form);
      alert("✅ Parcel order placed!");

      // reset
      setForm({
        customerName: "",
        phone: "",
        pickupAddress: "",
        deliveryAddress: "",
        packageDetails: "",
      });
    } catch {
      alert("❌ Failed to place parcel order");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Send Parcel</h2>

      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Customer Name"
        value={form.customerName}
        onChange={(e) => handleChange("customerName", e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Pickup Address"
        value={form.pickupAddress}
        onChange={(e) => handleChange("pickupAddress", e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Delivery Address"
        value={form.deliveryAddress}
        onChange={(e) => handleChange("deliveryAddress", e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-4 rounded"
        placeholder="Package Details (optional)"
        value={form.packageDetails}
        onChange={(e) => handleChange("packageDetails", e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={createOrderMutation.isPending}
        className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded w-full"
      >
        {createOrderMutation.isPending ? "Placing Order..." : "Send Parcel"}
      </button>
    </div>
  );
}
