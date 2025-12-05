
// Selecting elements

const input = document.querySelector('.input-group input');
const addBtn = document.querySelector('.add-btn');
const p = document.getElementById('p1')
const listGroup = document.querySelector('.list-group');
const counterBtn = document.querySelector('.counter');



//counting tasks
let count = 0;

//displaying the count
function updateCounter(){
    counterBtn.textContent = count;
}

updateCounter();



//function to add task 
function addTask() {
    const taskText = input.value.trim();

    if (taskText !== '') {
        count++;
        updateCounter();
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
        const deleteBtn = document.createElement("button");
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'x';

        //appending
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskParagraph);
        taskItem.appendChild(deleteBtn);
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





//Themeing

//selecting items
const themeBtns = document.querySelectorAll('.theme-btn');
const body = document.body;

//load saved themes
const savedTheme = localStorage.getItem('theme') || 'default';

if (savedTheme !== 'default') {
    body.setAttribute('data-theme', savedTheme);
}


//Update Active button on load

themeBtns.forEach(btn => {
    if (btn.dataset.theme === savedTheme) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

//Theme switcher
themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;

        // Update active state
        themeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Apply theme
        if (theme === 'default') {
            body.removeAttribute('data-theme');
        } else {
            body.setAttribute('data-theme', theme);
        }

        // Save preference
        localStorage.setItem('theme', theme);
    });
});


//delete button functionality, event delegation
listGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.preventDefault();
        e.target.closest('.task-item').remove();
        count--;
        updateCounter();
    }
});