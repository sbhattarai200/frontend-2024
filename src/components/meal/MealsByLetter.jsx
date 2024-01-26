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
        if(res && res?.meals){
            setMeals(res.meals);
        }
        else{
            setMeals([])
        }
    });
  }, [selectedLetter]);
  return (
    <div className="meal-main-wrapper">
      <div className="letters-wrapper">
        {letters.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedLetter(item);
            }}
          >
            <button
              style={{
                background: selectedLetter === item ? "red" : "unset",
                color: selectedLetter === item ? "white" : "unset",
              }}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
      <div className="meals-wrapper">
        {meals?.map((meal, index) => (
          <Link to={`/meals/${meal.idMeal}`} className="meal-item" key={`${index}_meal`}>
            <img src={meal.strMealThumb}/>
            <span>{meal.strMeal}</span>
          </Link>
        ))}
        {meals?.length===0?"no meals found.":""}
      </div>
    </div>
  );
}
export default MealsByLetter;
