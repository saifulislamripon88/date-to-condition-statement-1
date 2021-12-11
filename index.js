
const dates = new Date();
document.getElementById("demo1").innerHTML = dates;

const date = new Date("2001-03-02");
document.getElementById("demo2").innerHTML = date;
//
// const datee = new Date();
// const datees = datee.getFullYear();
// console.log(datees)

// const datee = new Date();
// const datees = datee.getMonth();
// console.log(datees)

const datee = new Date();
const datees = datee.getUTCMinutes();
console.log(datees)
//

/**const month = ["january","february","March","april","may","june","july","august","september","october","november","december"];
const d = new Date();
const nMonth = month [d.getMonth()];
console.log(nMonth);
*/

const month = ["january","february","March","april","may","june","july","august","september","october","november","december"];
const d = new Date();
const nMonth = month [d.getDay()];
console.log(nMonth);


const pai = Math.PI;
document.getElementById("demo3").innerHTML = " This is value of pai = "+pai;


// const pai = Math.E;
// document.getElementById("demo3").innerHTML = " This is value of pai = "+pai;

//math methods start here

// const mathr = Math.round(4.6);
// console.log(mathr)
//return 5

// const mathr = Math.round(4.9);
// console.log(mathr)
//return 5

// const mathr = Math.round(4.4);
// console.log(mathr)
// return 4

const mathr = Math.round(4.4);
console.log(mathr)

//

const mathe = Math.ceil(4.1);
console.log(mathe)
// return 5

//

const math = Math.floor(4.2);
console.log(math)
// return 4

//math.Pow()

const power = Math.pow(8,4);
console.log(power) 

//math.root()

// 
// const square = Math.sqrt(64);
// console.log(square);
// return 8

const square = Math.sqrt(1024);
console.log(square);
//
// Math.abs 

// const abs = Math.abs(-400);
// console.log(abs);
//return 400

const abs = Math.abs(-1500);
console.log(abs);

//
//math.max/min
const maxmin = Math.min(10,20,30,40,90,-10,-200);
console.log(maxmin);

const minmax = Math.max(10,20,30,40,90,150,-10,-200);
console.log(minmax);

// math.random
const random = Math.random();
console.log(random);
const rounds = Math.round(random);
console.log(rounds)

//
const logs = Math.log(3);
console.log(logs)

//
const logss = Math.log2(128);
console.log(logss)

const loges = Math.log10(10000);
console.log(loges)

// Math.random()


const randomfloor = Math.floor(Math.random()*10);
document.getElementById("demo5").innerHTML = randomfloor;


const randomfor = Math.floor(Math.random()*100);
document.getElementById("demo6").innerHTML = randomfor;
//

const mathrandom = Math.floor(Math.random()*10)+3;
document.getElementById("demo8").innerHTML = mathrandom;

const mathrando = Math.floor(Math.random()*100)+10;
document.getElementById("demo9").innerHTML = mathrando;





//Math.floor(Math.random()*(max-min))+min;

/**function randomFunction(){
    const randomfunc = document.getElementById("demo10").innerHTML;
    console.log("btn is clicked")

    document.getElementById("demo10").innerHTML =Math.floor( Math.random()*10)+1;
    
}
 */


function randomFunction(){
    const randomfunc = document.getElementById("demo10").innerHTML;
    console.log("btn is clicked")

    document.getElementById("demo10").innerHTML =Math.floor( Math.random()*100)+10;
    
}

//
function myFloor(){
    document.getElementById("demo11").innerHTML = myRound(5,21) ;
}
function myRound(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
//

//boolean

/**const x = (10>9);
const y = Boolean(x)
console.log(y)

*/

const x = (20<19);
console.log(Boolean(x));
//false


const xx = 100;
console.log(Boolean(xx));
//result true


const yy = 0;
console.log(Boolean(yy));
//result false

/**const yy = -0;
console.log(Boolean(yy));
 */


const xs = false;
console.log(Boolean(xs));

// const bolean = new Boolean("false");
// console.log(bolean);
//output true


const bolean = new Boolean(false);
console.log(bolean);

//output false


//logical operator

function myOperator(){
    let age = document.getElementById("age").value;
    let voteAble = (age < 17) ? "too young":"too old man";
    document.getElementById("demo12").innerHTML = voteAble + " 👈 too vote";
}

//

function myComparison(){
    let voteAbles;
    let ages = Number(document.getElementById("ages").value);
    if (isNaN(ages)) {
        voteAbles = "input is not a number";
        
    }else{
        voteAbles = (ages < 21) ? "too young":"too old man";

    }

    document.getElementById("demo13").innerHTML = voteAbles;
}




////else if 

const hour = new Date().getHours;
let greetings;
if (hour > 24) {
    greetings = "good evening";
    
}else{
    greetings ="good time";
};
document.getElementById("demo14").innerHTML = greetings;



//if,else if, else


//



const time = new Date().getTime;
let ifElseIfElse;

if(time < 10){
    ifElseIfElse = "good time"

}
else if(time < 20){
    ifElseIfElse = "good morning"

}else{
    ifElseIfElse = "good luck man"

}
document.getElementById("demo15").innerHTML = ifElseIfElse;


//switch

let day;
switch (new Date().getDay()) {
    case 0:
        day = "sunday"
        
        break;

    case 1:
        day = "monday"

        break;
    
    case 2:
        day = "tuesday" ;

        break;
        
    case 3:
        day = "wednesday";

        break;
    
    case 4:
       day = "Thursday";

       break;

    case 5:
        day = "friday";

        break;
    
    case 6:
        day = "saturday";   

}

document.getElementById("demo16").innerHTML = " Today is 👉"+day;

///
//default keyword 

let getDay;
switch (new Date().getDay()) {
    case 0:
        getDay = "saturday";
        
        break;
     
        case 6:
            getDay = "this is sunday";
        
            break;

    default:
        getDay = "this day is an weekend day";
}

document.getElementById("demo17").innerHTML = getDay;

//

//


// 
//strict comparison

let switc;

switch (switc) {
    case 0:
        text = "on";
        
        break;
    case 1:
        text = "of";
        
       

    default:
        text = "no value found";
        
}

document.getElementById("demo18").innerHTML = text;

///for loop start here


const cars = ["micro","bmw","volvo","truck","privetcar","xcorolla","lamborghini","prado"]
let textPrivet = " ";

for (let i = 0; i < cars.length; i++) {
    textPrivet += cars[i]+"<br>"; 
}
document.getElementById("demo19").innerHTML = textPrivet;

////again for loop 

/**let textss = " ";
for (let i = 2; i < 10; i++) {
    // const element = array[index];
    textss += "This number is " + [i] + "<br>";
}
console.log(textss);
document.getElementById("demo20").innerHTML = textss;
*/
//result 2-9 print korbe 

let textss = " ";
for (let i = 0; i < 10; i++) {
    // const element = array[index];
    textss += "This number is " + [i] + "<br>";
}
console.log(textss);
document.getElementById("demo20").innerHTML = textss;

//for loop

// const ghari = ["car","bus","helicopter","rocket"];
// let i, len, ghariText;
// for( i = 0, len = ghari.length, ghariText = " "; i < len; i++){

//     ghariText += ghari[i] + "<br>"
// }
// document.getElementById("demo21").innerHTML = ghariText;

///loop statement 1

const names = ["saiful","islam","ripon","konok","raju","kamal"];
let i = 2;
let len = names.length;
let nametext = " ";
for(; i < len; i++){
    nametext += names[i]+"<br>"
}
document.getElementById("demo22").innerHTML = nametext;

//
