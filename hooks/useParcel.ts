import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { ParcelOrder } from "@/types/parcelOrder";
import { parcelService } from "@/services/parcel.service";

interface UseParcelOrdersReturn {
  ordersQuery: ReturnType<typeof useQuery<ParcelOrder[], Error>>;
  createOrderMutation: ReturnType<
    typeof useMutation<ParcelOrder, Error, ParcelOrder>
  >;
}

export const useParcelOrders = (): UseParcelOrdersReturn => {
  const queryClient = useQueryClient();

  const ordersQuery = useQuery<ParcelOrder[], Error>({
    queryKey: ["parcelOrders"],
    queryFn: parcelService.getOrders,
  });

  const createOrderMutation = useMutation<ParcelOrder, Error, ParcelOrder>({
    mutationFn: parcelService.createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["parcelOrders"] });
    },
  });

  return { ordersQuery, createOrderMutation };
};
