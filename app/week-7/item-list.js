"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  // State for grouping and sorting
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of items based on sortBy state
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
      <div className="mb-4">
        <span className="mr-2 text-white">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className="px-4 py-1 bg-orange-500 text-white"
          style={{ backgroundColor: sortBy === "name" ? "#f97316" : "#c2410c" }}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="px-4 py-1 bg-orange-700 text-white"
          style={{ backgroundColor: sortBy === "category" ? "#f97316" : "#c2410c" }}
        >
          Category
        </button>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}