"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li className="p-2 border border-gray-200 rounded-lg shadow-sm bg-white hover:bg-gray-50 cursor-pointer"
        onClick={() => onSelect({ name, quantity, category })}>
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{quantity}</span>
      </div>
      <div className="text-xs text-gray-500">
        {category}
      </div>
    </li>
  );
}