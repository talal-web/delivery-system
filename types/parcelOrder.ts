export interface ParcelOrder {
  _id?: string;
  customerName: string;
  phone: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageDetails?: string;
  status?: "pending" | "picked-up" | "delivered" | "cancelled";
  createdAt?: string;
  updatedAt?: string;
}
