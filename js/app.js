//selected elements
const input = document.getElementById("input-task");
const list = document.getElementById("task-list");
const addBtn = document.getElementById("add-task-button");
const clearBtn = document.getElementById("clear-button");
const ul = document.getElementById("task-list");

//class names
const LINE_THROUGH = "lineThrough";

allTasks();

addBtn.onclick = () => { //when user clicks on add button
    let userValues = input.value; //getting input field value
    let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorageData == null) { //if localstorage has no data
        listArray = []; //create a blank array
    }
    else {
        listArray = JSON.parse(getLocalStorageData); //transforming json string into a js object
    }
    listArray.push(userValues); //pushing or adding new value in array
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
    allTasks();//calling allTasks function
}

clearBtn.onclick = () => {
    var checkboxes = document.getElementsByName('checkbox'); 
    removeValFromIndex = [];     //Empty List for indexes of the finished-checked tasks
    for ( let i = 0; i < checkboxes.length; i++ ) {
        if(checkboxes[i].checked) { // Respond to the result
            removeValFromIndex.push(i);
        }
    }
    for (var i = removeValFromIndex.length -1; i >= 0; i--) {
        archiveItem( removeValFromIndex[i])
    }
    allTasks();
}

input.addEventListener("keypress", function(event) {   // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {       // Cancel the default action, if needed
      event.preventDefault();         // Trigger the button element with a click
      document.getElementById("add-task-button").click();
    }
});

function allTasks() {
    let getLocalStorageData = localStorage.getItem("New Todo");  //get localstorage object
    if (getLocalStorageData == null) {   //if null initialize
        listArray = [];
    }
    else   //if !null parse object list
    {
        listArray = JSON.parse(getLocalStorageData);
    }
    let newLi = "";  //create new li element with an unorthodox way that helps us a lot
    listArray.forEach((element, index) => {
        newLi += `<li><input type="checkbox" name="checkbox"><span class="task">${element}</span><button onclick="archiveItem(${index})" class="fas fa-trash-alt delete-btn"></button></li>`;
    });
    list.innerHTML = newLi;
    input.value = "";
}

function archiveItem( index ) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    allTasks();
}
