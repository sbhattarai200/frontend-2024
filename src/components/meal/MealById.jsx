import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../../apis/meal";

function MealById(){
    const[meal,setMeal]=React.useState({});
    const {mealId}=useParams();
    useEffect(()=>{
        getMealById(mealId).then(res=>{
            setMeal(res?.meals?.[0])
        })
    },[])
    return <div>
        {meal.strMeal}
    </div>
}
export default MealById;