import axios from "axios"

export function getRandomMeal(){
    return new Promise((resolve,reject)=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}