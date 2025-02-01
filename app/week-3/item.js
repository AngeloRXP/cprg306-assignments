export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 my-2 bg-slate-900 text-white w-96 rounded border border-slate-700 shadow hover:bg-slate-800">
      <div className="text-xl font-bold text-white">{name}</div>
      <div className="text-sm text-slate-300">Buy {quantity} in {category}</div>
    </li>
  );
}