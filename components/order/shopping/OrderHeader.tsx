import { categoryConfig, OrderCategory } from "./orderCategories";

interface Props {
  category: OrderCategory;
}

export default function OrderHeader({ category }: Props) {
  const config = categoryConfig[category];

  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold">
        {config.emoji} {config.label}
      </h2>
      <p className="text-gray-500 text-sm">
        Fill the details below to place your order quickly.
      </p>
    </div>
  );
}
