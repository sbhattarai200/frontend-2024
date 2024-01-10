let lunch=['Rice','Daal','Achar','Masu','Paneer'];
lunch.push('Pappad'); //adding item into array
lunch[1]="Water"; //changing value of nth index

lunch.forEach(item=>{
    console.log(item.toUpperCase())
})
lunch.splice(1,1);
console.log(lunch)
let students=[
                {
                    name:"Sudhir",
                    roll:200,
                    age:50,
                    subjects:['maths','science','social Studies'],
                    isMale:true,
                    nationality:"Nepali",
                    grades:{
                        maths:"A",
                        science:"B",
                        accounts:"B+",
                    },
                    attendance:80,
                }
                ,{
                    name:"Ram",
                    roll:201,
                    age:22,
                    subjects:['maths','science','social Studies'],
                    isMale:true,
                    nationality:"Chinese",
                    grades:{
                        maths:"B",
                        science:"B-",
                        accounts:"B+",
                    },
                    attendance:25,
                },
            ]
//array.forEach((item)=>{})
students.forEach((item)=>{
    item.subjects.push("React")
    if(item.attendance<50){
        // alert(`${item.name}'s attendence is below 50%!!`)
    }
    else if(item.attendance>75){
        // alert(`${item.name}'s attendence is above 75%!!`)
    }
})
console.log(students);