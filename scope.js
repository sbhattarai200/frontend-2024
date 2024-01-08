//SCOPE
let _scopeA="test value"; //global scope

function getDayOfWeek(){
    let newVar="somevar";
    let a=2;
    console.log(_scopeA); 
    if(a){
        let a2="123";
        console.log(a);
    }
    else{
        console.log(a2);//returns error
        console.log(a);
   }
}

console.log(_scopeA); 
console.log(newVar); 