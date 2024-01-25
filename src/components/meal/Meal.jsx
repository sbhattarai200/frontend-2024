import React, { useEffect, useState } from "react";
import { getRandomMeal } from "../../apis/meal";
import "./Meal.css";
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
      <button
        onClick={() => {
            setFetchAgain(!fetchAgain);
        }}
      >
        Fetch again
      </button>
      <span className="meal-title"> {meal.strMeal}</span>
      <img src={meal.strMealThumb} alt="" />
      <span className="meal-desc">{meal.strInstructions}</span>
    </div>
  );
}
export default Meal;
