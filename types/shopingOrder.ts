export interface ShoppingItem {
  name: string;
  quantity: string;
  note?: string;
}

export interface ShoppingOrder {
  _id?: string;
  customerName: string;
  phone: string;
  deliveryAddress: string;
  items: ShoppingItem[];
  status?: "pending" | "delivered" | "cancelled";
  createdAt?: string;
  updatedAt?: string;
}
