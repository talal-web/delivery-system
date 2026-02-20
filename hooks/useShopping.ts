import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { ShoppingOrder } from "@/types/shopingOrder";
import { shoppingService } from "@/services/shopping.service";

interface UseShoppingOrdersReturn {
  ordersQuery: ReturnType<typeof useQuery<ShoppingOrder[], Error>>;
  createOrderMutation: ReturnType<
    typeof useMutation<ShoppingOrder, Error, ShoppingOrder>
  >;
}

export const useShoppingOrders = (): UseShoppingOrdersReturn => {
  const queryClient = useQueryClient();

  // Fetch all shopping orders
  const ordersQuery = useQuery<ShoppingOrder[], Error>({
    queryKey: ["shoppingOrders"],
    queryFn: shoppingService.getOrders,
  });

  // Create a new order
  const createOrderMutation = useMutation<ShoppingOrder, Error, ShoppingOrder>({
    mutationFn: shoppingService.createOrder,
    onSuccess: () => {
      // Refetch orders after successful creation
      queryClient.invalidateQueries({ queryKey: ["shoppingOrders"] });
    },
  });

  return { ordersQuery, createOrderMutation };
};
