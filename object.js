//Object
let student={
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
    getFavoriteColor:()=>{
        return 'red';  
    }
}
console.log(student.getFavoriteColor());

function changeSubjectGrade(subject,grade){
    student.grades[subject]=grade;
}
changeSubjectGrade('maths','D-');
changeSubjectGrade('science','F-');
changeSubjectGrade('history','A-');
console.log(student);

console.log("age: ",student.age);
console.log(student.name);
console.log(student['name']);
console.log(student.nationality);

//displaying values in html
let nameElem=fetchElement('studentName');
changeTextByDocument(nameElem,student.name)

let rollElem=fetchElement('studentRoll');
changeTextByDocument(rollElem,student.roll)

let subjectElem=fetchElement('studentSubject');
changeTextByDocument(subjectElem,student.subjects.join(", "))

function fetchElement(id) {
    return document.getElementById(id);
}

function changeTextByDocument(item,text) {
    item.innerText=`Value ${text}`;
}

console.log(Object.keys(student));
console.log(Object.values(student));

student.name="Ram"; //reassigning values to object
student.roll=30;
let valuesArray=Object.entries(student);
valuesArray.forEach((item)=>{
    if(typeof item==="Number"){
        alert(`This is number`);
    }
})
