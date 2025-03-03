export default function Item({ name, quantity, category }) {
    return (
      <li className="p-2 my-2 bg-gray-800 text-white">
        {name}
        <div className="flex justify-between">
          <span className="text-sm">Buy {quantity} in {category}</span>
        </div>
      </li>
    );
  }