"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

 
  useEffect(() => {
    if (user === null) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>loading...</p>
      </div>
    );
  }

  
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

 
  const handleItemSelect = (itemName) => {
    
    const cleanName = itemName.split(",")[0].trim();
    
    const ingredientName = cleanName.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍖|🧀|🍎|🥔|[\d+]/g, "").trim();
    setSelectedItemName(ingredientName);
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shopping list</h1>
        <button 
          onClick={() => router.push("/week-9")}
          className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
        >
          To go back
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Add new item</h2>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="border p-4 rounded-lg">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}