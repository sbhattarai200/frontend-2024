import React, { useEffect, useState } from "react";
import { getRandomMeal, searchMealByName } from "../../apis/meal";
import "./Meal.css";
import MealsByLetter from "./MealsByLetter";
function Meal() {
  const searchRef = React.useRef();
  const [meal, setRandomMeal] = useState({});
  const [meals, setMeals] = useState([]);
  const [fetchAgain, setFetchAgain] = React.useState(true);
  useEffect(() => {
    getRandomMeal().then((res) => {
      setRandomMeal(res.meals[0]);
    });
  }, [fetchAgain]);
  const handleSearch = () => {
    searchMealByName(searchRef.current.value).then((res) => {
      setMeals(res?.meals);
    });
  };
  return (
    <div className="meal-wrapper">
      <div className={"flex gap-2 w-full justify-center"}>
        <input
          type="text"
          ref={searchRef}
          className={"border-[1px] border-amber-800 w-md p-2"}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <MealsByLetter searchedMeals={meals} />
    </div>
  );
}

export default Meal;
