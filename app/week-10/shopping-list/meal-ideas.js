'use client';

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // This function fetches meal ideas based on the ingredient
  const fetchMealIdeas = async (ingredient) => {
    if (!ingredient) return;
    
    try {
      setLoading(true);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      
      // If no meals, set as empty array
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch meal ideas when the ingredient changes
  useEffect(() => {
    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      {!ingredient ? (
        <p className="text-gray-400">Select an item to see meal ideas</p>
      ) : loading ? (
        <p className="text-gray-400">Loading meal ideas...</p>
      ) : meals.length === 0 ? (
        <p className="text-gray-400">No meals found for {ingredient}.</p>
      ) : (
        <div>
          <p className="mb-4 text-gray-300">Here are some meal ideas using {ingredient}:</p>
          <ul className="space-y-2">
            {meals.map((meal) => (
              <li 
                key={meal.idMeal}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
              >
                <div className="flex items-center">
                  <img 
                    src={meal.strMealThumb} 
                    alt={meal.strMeal}
                    className="w-12 h-12 rounded-md mr-3 object-cover"
                  />
                  <span>{meal.strMeal}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}