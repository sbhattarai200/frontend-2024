import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../../apis/meal";
import ReactPlayer from "react-player";
import "./Meal.css";

function MealById() {
  const [meal, setMeal] = React.useState({});
  const { mealId } = useParams();
  useEffect(() => {
    getMealById(mealId).then((res) => {
      setMeal(res?.meals?.[0]);
    });
  }, []);
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 10,
      }}
    >
      <span className="meal-detail-title">{meal.strMeal}</span>
      {meal?.strYoutube ? (
        <ReactPlayer width={"100%"} height={250} url={meal.strYoutube} />
      ) : (
        <img width={250} height={250} src={meal.strMealThumb} alt="" />
      )}
      <div className={"meal-category-wrapper"}>
        {meal?.strArea}, {meal?.strCategory}
      </div>
      <div>
        <b>Instructions</b>
        <div>{meal?.strInstructions}</div>
      </div>
      <div className={"meal-ingredient-wrapper"}>
        <div>
          <b>Ingredients</b>
          {Array.from({ length: 20 })
            .filter(
              (item, index) => meal[`strIngredient${index + 1}`]?.length > 1,
            )
            .map((item, index) => (
              <div>{meal[`strIngredient${index + 1}`]}</div>
            ))}
        </div>
        <div>
          <b>Measures</b>
          {Array.from({ length: 20 })
            .filter((item, index) => meal[`strMeasure${index + 1}`]?.length > 1)
            .map((item, index) => (
              <div>{meal[`strMeasure${index + 1}`]}</div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MealById;
