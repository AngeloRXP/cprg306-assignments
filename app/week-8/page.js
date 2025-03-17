"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "../week-6/items.json";

export default function Page() {
  // State to store shopping list items
  const [items, setItems] = useState(itemsData);
  // State to store the selected item's name (for meal ideas)
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to handle adding a new item to the list
  const handleAddItem = (newItem) => {
    // Add a unique ID to the new item
    const itemWithId = { ...newItem, id: Date.now().toString() };
    setItems([...items, itemWithId]);
  };

  // Function to handle selecting an item from the list
  const handleItemSelect = (item) => {
    // Clean up the item name by removing size, emoji, etc.
    const cleanName = item.name
      .split(",")[0] // Remove anything after a comma (e.g., "1 kg")
      .trim() // Remove extra spaces
      .replace(/[^\w\s]/gi, "") // Remove emojis and special characters
      .trim(); // Remove any trailing spaces
    
    setSelectedItemName(cleanName);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      
      {/* Layout de duas colunas */}
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Coluna da esquerda - Lista de compras */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-4">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        
        {/* Coluna da direita - Ideias de refeições */}
        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}