//selected elements
const input = document.getElementById("input-task");
const list = document.getElementById("task-list");
const addBtn = document.getElementById("add-task-button");

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

function allTasks() {
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    }
    else
    {
        listArray = JSON.parse(getLocalStorageData);
    }
    let newLi = "";
    listArray.forEach((element, index) => {
        newLi += `<li><input type="checkbox"><span class="task">${element}</span><button onclick="archiveItem(${index})" class="fas fa-trash-alt delete-btn"></button></li>`;
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

