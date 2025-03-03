import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
