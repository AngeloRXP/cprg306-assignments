"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item
  const handleAddItem = (item) => {
    // Add the new item to the items array
    setItems([...items, item]);
  };

  return (
    <main className="bg-blue-950 min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl text-white font-bold mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}