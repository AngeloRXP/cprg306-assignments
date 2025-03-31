"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "../week-6/items.json";

export default function Page() {
 
  const [items, setItems] = useState(itemsData);
  
  const [selectedItemName, setSelectedItemName] = useState("");

 
  const handleAddItem = (newItem) => {
    
    const itemWithId = { ...newItem, id: Date.now().toString() };
    setItems([...items, itemWithId]);
  };

  
  const handleItemSelect = (item) => {
    
    const cleanName = item.name
      .split(",")[0] 
      .trim() 
      .replace(/[^\w\s]/gi, "") 
      .trim(); 
    
    setSelectedItemName(cleanName);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      
      
      <div className="flex flex-col md:flex-row md:gap-8">
        
        <div className="md:w-1/2 mb-6 md:mb-0">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-4">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        
        
        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}