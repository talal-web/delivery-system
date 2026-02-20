import api from "@/lib/axios";
import type { ParcelOrder } from "@/types/parcelOrder";
import { getAxiosErrorMessage } from "@/utils/error";

export const parcelService = {
  // 📦 GET PARCEL ORDERS
  async getOrders(): Promise<ParcelOrder[]> {
    try {
      const response = await api.get<ParcelOrder[]>("/parcel");
      return response.data;
    } catch (error) {
      throw getAxiosErrorMessage(error) ?? "Failed to fetch parcel orders";
    }
  },

  // 📦 CREATE PARCEL ORDER
  async createOrder(order: ParcelOrder): Promise<ParcelOrder> {
    try {
      const response = await api.post<ParcelOrder>("/parcel", order);
      return response.data;
    } catch (error) {
      throw getAxiosErrorMessage(error) ?? "Failed to create parcel order";
    }
  },
};
