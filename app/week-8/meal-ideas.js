"use client";
import { useState, useEffect } from 'react';


const fetchMealIdeas = async (ingredient) => {
  if (!ingredient) return [];
  
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to load meal ideas
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      {!ingredient && <p>Select an item to see meal ideas</p>}
      {ingredient && meals.length === 0 && <p>No meal ideas found for {ingredient}</p>}
      <ul className="divide-y">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="py-2">
            <div className="flex items-center gap-2">
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span>{meal.strMeal}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}