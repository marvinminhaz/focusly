
// Selecting elements

const input = document.querySelector('.input-group input');
const addBtn = document.querySelector('.add-btn');
const p = document.getElementById('p1')
const listGroup = document.querySelector('.list-group');


//counting tasks
let count = 0;



//function to add task 
function addTask() {
    const taskText = input.value.trim();

    if (taskText !== ''){
        count++;
    }
    
    console.log(count);

    


    //conditional to replace the "add your first task" statement on addition of first task and creating new elements after the first task
    if (count == 1) {

        // dont add empty tasks
        if (taskText === '') {
            return
        }
        //replacing the "add your first task" statement with input
        document.getElementById('p1').innerHTML = taskText;

        //clearing input
        input.value = '';

        //focus back on input
        input.focus()
    } else {

        // dont add empty tasks
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

        //clearing input
        input.value = '';

        //focus back on input
        input.focus()
    }

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