import { Plus, Trash2 } from "lucide-react";
import { OrderCategory, categoryConfig } from "./orderCategories";

type Item = {
  name: string;
  quantity: string;
};

interface Props {
  items: Item[];
  setItems: (items: Item[]) => void;
  category: OrderCategory;
}

export default function ItemsSection({ items, setItems, category }: Props) {
  const config = categoryConfig[category];

  const addItem = () => {
    setItems([...items, { name: "", quantity: "" }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof Item, value: string) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">📦 Items</h3>

        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-1 text-sm bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
        >
          <Plus size={16} /> Add Item
        </button>
      </div>

      {items.map((item, index) => (
        <div key={index} className="grid md:grid-cols-5 gap-3 items-center">
          <input
            className="input md:col-span-3"
            placeholder={`${config.placeholder} *`}
            value={item.name}
            onChange={(e) => updateItem(index, "name", e.target.value)}
          />

          <input
            className="input md:col-span-1"
            placeholder="Qty *"
            value={item.quantity}
            onChange={(e) => updateItem(index, "quantity", e.target.value)}
          />

          {items.length > 1 && (
            <button
              onClick={() => removeItem(index)}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
