"use client";

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object with a random ID
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

// Primeiro, adicione um estado para controlar qual botão está ativo
const [activeButton, setActiveButton] = useState(null);

// Na função que diminui a quantidade
const handleDecrease = () => {
  setActiveButton('decrease');
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
  // Reset do estado após um tempo curto
  setTimeout(() => setActiveButton(null), 300);
};

    // Call the onAddItem prop with the new item
    onAddItem(item);

    // Reset the form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-2 rounded text-black"
        />

        <div className="flex justify-between mb-2">
          <div className="flex">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="h-10 w-10 flex items-center justify-center rounded-l bg-blue-700 text-white"
            >
              -
            </button>
            <span className="h-10 w-10 flex items-center justify-center bg-white text-black">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(Math.min(99, quantity + 1))}
              disabled={quantity >= 20}
              className="h-10 w-10 flex items-center justify-center rounded-r bg-blue-500 text-white"
            >
              +
            </button>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded text-black w-40"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full p-3 rounded flex items-center justify-center text-white text-xl bg-blue-500"
        >
          +
        </button>
      </form>
    </div>
  );
}