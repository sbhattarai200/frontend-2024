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
    return <div style={{maxWidth:500,margin:"auto",display:"flex",flexDirection:"column"}}>
        <span>{meal.strMeal}</span>
        <img width={250} height={250} src={meal.strMealThumb} alt="" />
    </div>
}
export default MealById;