'use client';

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the new item
    const newItem = {
      id: Date.now().toString(),
      name,
      quantity,
      category
    };
    
    // Call the function to add the item
    onAddItem(newItem);
    
    // Clear the form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
          className="w-full p-2 mb-2 bg-gray-800 border border-gray-700 rounded text-white"
        />
      </div>
      
      <div className="flex gap-2 mb-4">
        <div className="flex items-center bg-gray-800 border border-gray-700 rounded">
          <button 
            type="button" 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 text-gray-400 hover:text-white"
          >
            −
          </button>
          <input
            type="number"
            id="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-12 text-center bg-gray-800 border-0 text-white"
          />
          <button 
            type="button" 
            onClick={() => setQuantity(Math.min(99, quantity + 1))}
            className="px-3 py-2 text-blue-500 hover:text-blue-400"
          >
            +
          </button>
        </div>
        
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded text-white"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <button 
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
      >
        <span className="mr-1">+</span> Add
      </button>
    </form>
  );
}