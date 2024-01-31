import React, { useEffect } from "react";
import { getMealsByFirstLetter } from "../../apis/meal";
import "./Meal.css";
import { Link } from "react-router-dom";
function MealsByLetter() {
  const [selectedLetter, setSelectedLetter] = React.useState("A");
  const [meals, setMeals] = React.useState([]);
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  useEffect(() => {
    getMealsByFirstLetter(selectedLetter).then((res) => {
      if (res && res?.meals) {
        setMeals(res.meals);
      } else {
        setMeals([]);
      }
    });
  }, [selectedLetter]);
  return (
    <div className="meal-main-wrapper">
      <div className="flex gap-2 items-center">
        {letters.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedLetter(item);
            }}
            className={"border-none outline-none "}
          >
            <button
              style={{
                background: selectedLetter === item ? "red" : "unset",
                color: selectedLetter === item ? "white" : "unset",
              }}
              className={
                "p-2 rounded-full w-6 h-6 justify-center flex items-center"
              }
            >
              {item}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 max-w-xl m-auto gap-4">
        {meals?.map((meal, index) => (
          <Link
            to={`/meals/${meal.idMeal}`}
            className="hover:text-amber-800 hover:scale-[1.01]"
            key={`${index}_meal`}
          >
            <img src={meal.strMealThumb} />
            <span className={"font-bold text-md"}>{meal.strMeal}</span>
          </Link>
        ))}
        {meals?.length === 0 ? "no meals found." : ""}
      </div>
    </div>
  );
}
export default MealsByLetter;
