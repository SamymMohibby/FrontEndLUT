//console.log("Hello!");





document.getElementById("submitBtn").onclick = function() {
    let username;
    username = document.getElementById("textArea").value;
    document.getElementById("myH3").textContent = `Hello ${username}!`;
}



document.getElementById("calculateBtn").onclick = function() {
    let circumeference;
    let radius;
    const PI = 3.14159
    radius = Number(radius);
    radius = document.getElementById("textCirc").value;

    circumeference = 2 * PI * radius
    circumeference = Math.round(circumeference * 10) / 10;
    document.getElementById("result").textContent = `The circumference is ${circumeference}`;
}



document.getElementById("plusBtn").onclick = function() {
    let num = 0;
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


const inputBox


