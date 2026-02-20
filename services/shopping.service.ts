import api from "@/lib/axios";
import type { ShoppingOrder } from "@/types/shopingOrder";
import { getAxiosErrorMessage } from "@/utils/error";

export const shoppingService = {
  // 🛒 GET ALL SHOPPING ORDERS
  async getOrders(): Promise<ShoppingOrder[]> {
    try {
      const response = await api.get<ShoppingOrder[]>("/shopping");
      return response.data;
    } catch (error) {
      throw getAxiosErrorMessage(error) ?? "Failed to fetch shopping orders";
    }
  },

  // 🛒 CREATE NEW SHOPPING ORDER
  async createOrder(order: ShoppingOrder): Promise<ShoppingOrder> {
    try {
      const response = await api.post<ShoppingOrder>("/shopping", order);
      return response.data;
    } catch (error) {
      throw getAxiosErrorMessage(error) ?? "Failed to create shopping order";
    }
  },
};
