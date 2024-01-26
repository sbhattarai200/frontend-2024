import React,{ useEffect } from "react";
import { getMealsByFirstLetter } from "../../apis/meal";
import "./Meal.css"
function MealsByLetter() {
  const [selectedLetter, setSelectedLetter] = React.useState("A");
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
    getMealsByFirstLetter(selectedLetter).then((res) => {});
  }, [selectedLetter]);
  return (
    <div className="meal-main-wrapper">
        <div className="letters-wrapper">
            {letters.map((item, index) => (
                <div key={index}>
                    <button>{item}</button>
                </div>
            ))}
        </div>
    
    </div>
  );
}
export default MealsByLetter;
