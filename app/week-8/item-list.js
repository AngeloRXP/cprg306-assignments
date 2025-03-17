"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Function to sort items based on the selected sort criteria
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Shopping List</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy("name")}
            className={`px-3 py-1 rounded ${
              sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`px-3 py-1 rounded ${
              sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Sort by Category
          </button>
        </div>
      </div>

      {items.length === 0 ? (
        <p>No items in the shopping list</p>
      ) : (
        <ul className="grid grid-cols-1 gap-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id || item.name}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}