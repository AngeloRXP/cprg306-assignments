"use client";

export default function Item({ name, quantity, category }) {
  // Formatação da categoria para exibição (substituir hífen por espaço)
  const formattedCategory = category.replace("-", " ");

  return (
    <li className="bg-blue-900 p-3 rounded shadow-sm">
      <div className="text-white text-lg font-medium">
        {name}
      </div>
      <div className="text-sm text-gray-300">
        Buy {quantity} in {formattedCategory}
      </div>
    </li>
  );
}