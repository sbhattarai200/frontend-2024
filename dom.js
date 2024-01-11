let elem=document.getElementById('test');//selector
elem.innerHTML="Hello";//innertext
//styling
elem.style.fontSize="25px";
elem.style.color="red";
elem.style.fontFamily="san-serif";
elem.style.textTransform="uppercase";
elem.style.textDecoration="underline";  
elem.style.fontStyle="italic";

//creating new element using 
let newElem=document.createElement('div');
newElem.innerText="Hello child";
newElem.style.textDecoration="none !important";
newElem.style.fontStyle="normal";
newElem.style.color="green";
elem.appendChild(newElem);

//targeting div using class
let someElem=document.getElementsByClassName('someClass')
someElem[0].classList.add('newClass');

let someElemArray=[...someElem];
someElemArray.forEach((item,index)=>{
    console.log(item,index);
    switch (index){
        case 0:
            item.innerText="SUDHIR";
            break;
        case 1:
            item.innerText="BHATTARAI";
            break;
        default:
            item.innerText="AAYENA"    

    }
})

// let divElem=document.getElementsByTagName('div')
let buttonElem=document.getElementById('randomBtn');

buttonElem.addEventListener('mouseenter',(event)=>{
    buttonElem.innerText="Hello Ram"
})
buttonElem.addEventListener('mouseout',(event)=>{
    buttonElem.innerText="Hello Shyam"
})
buttonElem.addEventListener('click',(event)=>{
    alert("user clicked")
})

let inputElem=document.getElementById('name');
inputElem.addEventListener('input',(event)=>{
    let studentName=event.target.value;
    console.log(studentName);
})