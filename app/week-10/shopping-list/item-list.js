'use client';

import { useState } from "react";

// Item component with delete functionality
function Item({ id, name, quantity, category, onSelect, onDelete }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(name);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent the click on the delete button from also selecting the item
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <li 
      className="py-3 px-2 border-b border-gray-800 hover:bg-gray-800 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <span className="font-medium">{name}</span>
          <div className="text-sm text-gray-400">
            Buy {quantity} in {category}
          </div>
        </div>
        <button 
          onClick={handleDelete}
          className="text-red-500 hover:text-red-400"
          aria-label="Delete item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default function ItemList({ items, onItemSelect, onItemDelete }) {
  const [sortBy, setSortBy] = useState("name");
  
  // Function to sort items
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
        <p className="text-sm mb-2">Sort by:</p>
        <div className="flex space-x-2">
          <button 
            onClick={() => setSortBy("name")}
            className={`px-4 py-1 rounded ${sortBy === "name" 
              ? "bg-orange-500 text-white" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            Name
          </button>
          <button 
            onClick={() => setSortBy("category")}
            className={`px-4 py-1 rounded ${sortBy === "category" 
              ? "bg-orange-500 text-white" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            Category
          </button>
        </div>
      </div>
      
      {items.length === 0 ? (
        <p className="text-gray-400">No items in the shopping list yet.</p>
      ) : (
        <ul className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          {sortedItems.map((item) => (
            <Item 
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item.name)}
              onDelete={onItemDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}