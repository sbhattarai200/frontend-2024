const getRandomMeal=()=>{
    return new Promise((resolve,reject)=>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>res.json())
        .then(res=>resolve(res))
        .catch(err=>{
            console.log(err);
            reject(err)
        })
    })
}
getRandomMeal().then(resp=>{
    let meal=resp?.meals[0];
    let mealElem=document.getElementById("mealDetail");
    let titleElem=document.createElement('span');
    let imageElem=document.createElement('img');
    imageElem.className="mealImage";
    imageElem.src=meal?.strMealThumb;
    titleElem.innerText=meal.strMeal;
    mealElem.appendChild(titleElem)
    mealElem.appendChild(imageElem)

})