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
export function getMealById(id){
    return new Promise((resolve,reject)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
export function getMealsByFirstLetter(letter){
    return new Promise((resolve,reject)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}