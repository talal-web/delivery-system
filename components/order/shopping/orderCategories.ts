export type OrderCategory = "food" | "medicine" | "grocery";

export const categoryConfig = {
  food: {
    label: "Food Delivery",
    emoji: "🍔",
    placeholder: "e.g., Pizza, Burger, Biryani",
  },
  medicine: {
    label: "Medicines",
    emoji: "💊",
    placeholder: "e.g., Panadol, Vitamin C, Syrup",
  },
  grocery: {
    label: "Groceries",
    emoji: "🛒",
    placeholder: "e.g., Rice, Milk, Sugar",
  },
};
