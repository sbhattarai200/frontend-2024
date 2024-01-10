
function turnOnLight(switchNumber){
    switch(switchNumber){
        case 1:
            alert('Illuminate bulb 1');
            break;
        case 2:
            alert('Illuminate bulb 2');
            break;
        case 3:
            alert('Illuminate bulb 3');
            break;
        case 4:
            alert('Illuminate bulb 4');
            break;
        case 5:
            alert('Illuminate bulb 5');
            break;
        case 6:
            alert('Illuminate bulb 6');
        case "ON":
            alert('Pressed switch named ON');
            break;
        default:
            alert("bulb not found!")
    }
}
// turnOnLight(1)
// turnOnLight("ON")
function getDayOfWeek(day){
    switch(day){
        case 3: 
            return "Wednesday";
    }
}
let today=new Date().getDay();
console.log("here");
document.getElementById('day').innerText=getDayOfWeek(today);