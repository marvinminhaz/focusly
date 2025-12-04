//Selecting elements

const input = document.querySelector('.input-group input');
const addBtn = document.querySelector('.add-btn');
const p = document.getElementById('p1')
const listGroup = document.querySelector('.list-group');

//Function to add task
function addTask() {
    const taskText = input.value.trim();
    console.log(taskText);

    //dont add empty tasks
    if (taskText === '') {
        return
    }

    //creating elements
    const taskItem = document.createElement('label');
    taskItem.className = 'task-item';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = taskText;

    //appending
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskParagraph);
    listGroup.appendChild(taskItem);

    // document.getElementById('p1').innerHTML = taskText; doesnt work bc creates new element and also changes the first line

    //clearing input
    input.value = '';

    //focus back on input
    input.focus();

    

}

//function to addTask on Enter
function eol(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}


//event listening click and enter
addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', eol);

//reference for addEventListener (e)
// input.addEventListener('keydown', (e) => {
//   // e is the event object, it has lots of info:
//   console.log(e.key);        // Which key? 'Enter', 'a', 'Shift', etc.
//   console.log(e.type);       // What event? 'keydown'
//   console.log(e.target);     // Which element? The input element
//   console.log(e.timeStamp);  // When? Timestamp in milliseconds
// });



