"use client";

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="bg-slate-900 rounded p-4 w-1/5">
      <div className="text-2xl font-semibold mb-4 text-white text-center">
        Quantity: {quantity}
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          className="quantity-button"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity >= 20}
          className="quantity-button"
        >
          +
        </button>
      </div>
    </div>
  );
}