import React, { useEffect, useState } from "react";
import { getRandomMeal } from "../../apis/meal";
import "./Meal.css";
import MealsByLetter from "./MealsByLetter";
function Meal() {
  const [meal, setRandomMeal] = useState({});
  const [fetchAgain, setFetchAgain] = React.useState(true);
  useEffect(() => {
    getRandomMeal().then((res) => {
      setRandomMeal(res.meals[0]);
    });
  }, [fetchAgain]);
  return (
    <div className="meal-wrapper">
      <MealsByLetter/>
    </div>
  );
}
export default Meal;
