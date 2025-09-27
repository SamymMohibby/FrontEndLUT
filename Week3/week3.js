//console.log("Hello!");


let username;

document.getElementById("submitBtn").onclick = function() {
    username = document.getElementById("textArea").value;
    document.getElementById("myH3").textContent = `Hello ${username}!`;
}

let circumeference;
let radius;
const PI = 3.14159

document.getElementById("calculateBtn").onclick = function() {
    radius = Number(radius);
    radius = document.getElementById("textCirc").value;

    circumeference = 2 * PI * radius
    circumeference = Math.round(circumeference * 10) / 10;
    document.getElementById("result").textContent = `The circumference is ${circumeference}`;
}

let num = 0;

document.getElementById("plusBtn").onclick = function() {
    num++;
    
    if (num > 15 && num < 100) {
        num = num + 100;
    }else if (num > 100) {
        num = num + 100;
    }
    document.getElementById("thirdH3").textContent = num; 
}

document.getElementById("minusBtn").onclick = function() {
    num--;
    document.getElementById("thirdH3").textContent = num;
    //console.log(`Number is ${num}`)
}

document.getElementById("resetBtn").onclick = function() {
    
    if(confirm("Are you sure?") == true) {
        num = 0;
        document.getElementById("thirdH3").textContent = num;
    }
}



