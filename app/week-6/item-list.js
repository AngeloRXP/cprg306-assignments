"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  // State to keep track of the sort order
  const [sortBy, setSortBy] = useState("name");
  // State to track if we should group by category
  const [groupByCategory, setGroupByCategory] = useState(false);

  // Sort items based on the selected sort criteria
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category
  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Get categories sorted alphabetically
  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div>
      <div className="mb-4">
        <span className="mr-2">Sort by:</span>
        <button
          className={`sort-button ${
            sortBy === "name" && !groupByCategory ? "active" : "inactive"
          }`}
          onClick={() => {
            setSortBy("name");
            setGroupByCategory(false);
          }}
        >
          Name
        </button>
        <button
          className={`sort-button ${
            sortBy === "category" && !groupByCategory ? "active" : "inactive"
          }`}
          onClick={() => {
            setSortBy("category");
            setGroupByCategory(false);
          }}
        >
          Category
        </button>
        <button
          className={`sort-button ${
            groupByCategory ? "active" : "inactive"
          }`}
          onClick={() => setGroupByCategory(true)}
        >
          Grouped Category
        </button>
      </div>

      {!groupByCategory ? (
        // Regular sorted list
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      ) : (
        // Grouped by category
        <div>
          {sortedCategories.map((category) => (
            <div key={category} className="category-group">
              <h2 className="category-title">{category}</h2>
              <ul>
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}