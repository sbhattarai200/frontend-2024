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