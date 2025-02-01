import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950 min-h-screen text-white">
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}