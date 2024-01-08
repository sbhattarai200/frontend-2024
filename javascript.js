//variables
//string number boolean

//String
// let a="ram";
const country ="Nepal";//constant declaration using const
let studentName='ram';//variable declaration using let
var a ="ram";//variable declaration using var
let fullInfo=`${studentName} from ${country}. ${new Date().getDate()}`;//use of js string inline
let surname="Rai"; //concat two string
let concatedName=studentName+" "+surname; //concat two string
console.log(concatedName);
console.log(fullInfo);
console.log(a)
a='hari'
console.log(a)
//Number
let num1=10;
let num2=20.2;
let num3=-20.2;
num1="changed"//example of loosely typed language
console.log(num1);
//boolean
let isNepali=true;
let isChinese=false;

let num4=10;
let num4String="10";

console.log(num4==num4String);//true :: only value is checked
console.log(num4===num4String);//false :: datatype is checked as well
console.log(num4+num4String);//returns 1010, :: + concats
console.log(num4-num4String);//returns 0, :: - does arithematic ops

console.log(typeof num4);// Number
console.log(typeof num4String);// String
console.log(typeof isChinese);// boolean

