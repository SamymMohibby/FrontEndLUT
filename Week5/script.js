const inputBox = document.getElementById("task-input"); //Text field for input.
const listContainer = document.getElementById("list-container"); // UL element to hold the list items.
const addBtn = document.getElementById("add-task-btn"); //Button to add tasks.

document.getElementById("add-task-btn").onclick = function() { //When the button is clicked, this function runs.
    let task = inputBox.value;
    if (task === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = task;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //Found on the web. Represents the multiplication sign (×) or close button.
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); //This prevents the default action of the Enter key, which is to submit a form.
        addBtn.click(); //Previously defined button onclick function.
    }
});

function saveData(){ //Saving data in local storage.
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); //Calling the function to show the task when the page loads.