"use client";

import { useState } from "react";
import { useShoppingOrders } from "@/hooks/useShopping";
import type { ShoppingItem, ShoppingOrder } from "@/types/shopingOrder";

export default function ShoppingForm() {
  const { createOrderMutation } = useShoppingOrders();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [items, setItems] = useState<ShoppingItem[]>([
    { name: "", quantity: "1" },
  ]);

  const handleAddItem = () => setItems([...items, { name: "", quantity: "1" }]);
  const handleRemoveItem = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  const handleChangeItem = (
    index: number,
    field: keyof ShoppingItem,
    value: string,
  ) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = async () => {
    if (
      !customerName ||
      !phone ||
      !deliveryAddress ||
      items.some((i) => !i.name || !i.quantity)
    ) {
      alert("Please fill in all fields and items");
      return;
    }

    const order: ShoppingOrder = {
      customerName,
      phone,
      deliveryAddress,
      items,
    };

    try {
      await createOrderMutation.mutateAsync(order);
      alert("✅ Order placed successfully!");
      // Reset form
      setCustomerName("");
      setPhone("");
      setDeliveryAddress("");
      setItems([{ name: "", quantity: "1" }]);
    } catch (err) {
      alert("❌ Failed to place order");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Place Shopping Order</h2>

      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2 rounded"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-4 rounded"
        placeholder="Delivery Address"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
      />

      <h3 className="font-semibold mb-2">Items</h3>
      {items.map((item, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            className="border p-2 flex-1 rounded"
            placeholder="Item Name"
            value={item.name}
            onChange={(e) => handleChangeItem(index, "name", e.target.value)}
          />
          <input
            className="border p-2 w-20 rounded"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) =>
              handleChangeItem(index, "quantity", e.target.value)
            }
          />
          {items.length > 1 && (
            <button
              className="bg-red-500 text-white px-2 rounded"
              onClick={() => handleRemoveItem(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={handleAddItem}
      >
        Add Item
      </button>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
        onClick={handleSubmit}
        disabled={createOrderMutation.isPending}
      >
        {createOrderMutation.isPending ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}
