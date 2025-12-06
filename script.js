
//selecting items
const input = document.querySelector('.input-group input');
const listGroup = document.querySelector('.list-group');
const addBtn = document.querySelector('.add-btn');
const counter = document.querySelector('.counter');

//setting focus to input on page load/reload
input.focus();

//counter for tasks
let count = 0;
counter.textContent = count;

//Main function - function to add task, it takes the input, replaces the placeholder if still there, and calls the createTaskItem function and passes it the input as argument, while incrementing the counter when task is added
function addTask() {
    //assigning variable to store input
    const taskText = input.value.trim();
    //conditional to not create empty tasks
    if (!taskText) return
    //selecting the placeholder
    const placeholder = document.getElementById('task-item1');
    //conditional to remove placeholder if it exists
    if (placeholder) placeholder.remove();
    //invoking createTaskItem function to create taskItem and related elements, passing it the input as argument
    createTaskItem(taskText);
    //incrementing task counter
    count++;
    counter.textContent = count;

}

//event listening to detect click on add button and enter in the input field
addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
})

//function to create elements dynamically and create new task, empty input box and focus on input box
function createTaskItem(taskText) {
    // creating elements
    const taskItem = document.createElement('label');
    taskItem.className = "task-item";
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskParagraph = document.createElement('p');
    taskParagraph.className = 'p';
    taskParagraph.textContent = taskText; //inserting parameter
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';
    //appending them
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskParagraph);
    taskItem.appendChild(deleteBtn);
    listGroup.appendChild(taskItem);
    //setting input to blank
    input.value = '';
    //setting focus to input
    input.focus();
    //adding option to delete taskItem
    deleteBtn.addEventListener('click', () => deleteTask(taskItem))
}

//function to delete elements and decrement the counter
function deleteTask(taskItem) {
    taskItem.remove();
    count--;
    counter.textContent = count;
}


//Themeing 

//selecting items 
const themeBtns = document.querySelectorAll('.theme-btn');
const body = document.body;

//load and apply theme
let theme = localStorage.getItem('theme') || 'default'; //getting the pre set theme from browser storage
applyTheme(theme); //passing the found theme to the apply theme function

//highlighting the correct button using the setActiveButton function
setActiveButton(theme);

//handling switching
themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        theme = btn.dataset.theme

        //passing the dataset.theme of the selected button as parameter to applyTheme function
        applyTheme(theme);
        //passing the selected theme to the setActiveButton function
        setActiveButton(theme);
        //saving the selected theme to the local storage
        localStorage.setItem('theme', theme);
    });
});

//function to check if the theme passed as parameter is the default one or another, if default it removes theme and if another, it sets the selected theme
function applyTheme(theme) {
    if (theme === 'default') body.removeAttribute('data-theme');
    else body.setAttribute('data-theme', theme);
}

//function to loop over all theme buttons to add or remove css class 'active'
function setActiveButton(theme) {
    themeBtns.forEach(btn =>
        btn.classList.toggle('active', btn.dataset.theme === theme)
    );
}