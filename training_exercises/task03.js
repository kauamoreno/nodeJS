/*
Task 3:

Create an array todoList that stores objects. Each object should have:

- task (the description of the task),
- priority (the priority of the task as a string: "low", "medium", "high"),
- completed (a boolean indicating if the task is completed or not).

Write a function addTask that adds a new task object to 
the todoList array with the task, priority, and completed properties.

Write a function markTaskAsCompleted that takes a task description 
and marks that task as completed by setting the completed property to true.

Write a function viewTasks that:

Loops through all tasks and displays:

- Task description
- Priority
- Completed status

Write a function getHighPriorityTasks that returns an 
array of tasks with "high" priority that are not completed.

Finally, write a function deleteTask that takes a task 
description and removes the task from the todoList.

Test your code by adding, completing, and deleting tasks.
*/

let todoList = [
    {
        task: "a",
        priority: 'low',
        completed: false
    },
    {
        task: "b",
        priority: "high",
        completed: false
    },
    {
        task: "c",
        priority: "high",
        completed: false
    },
] 

const addTask  = (task, priority, completed) => {
    let newTask = {
        task: task,
        priority: priority,
        completed: completed
    }

    todoList.push(newTask);
}

function markTaskAsCompleted(task) {
    for(i = 0; i < todoList.length; i++) {
        if(todoList[i].task === task) {
            todoList[i].completed = true;
            break;
        }
    }
}

function viewTasks() {
    for(i = 0; i < todoList.length; i++) {
        let { task, priority, completed } = todoList[i];

        console.log(`Index: ${i+1} | Task: ${task} | Priority: ${priority} | Completed: ${completed}`);
    }
}

function getHighPriorityTasks() {
    let highPriorityTasks = [];

    for(i = 0; i < todoList.length; i++) {
        if(todoList[i].priority === "high" && todoList[i].completed === false) {
            highPriorityTasks.push(todoList[i]);
        }
    }

    return highPriorityTasks;
}

function deleteTask(task) {
    for(i = 0; i < todoList.length; i++) {
        if(todoList[i].task === task) {
            todoList.splice(i, 1);
            break;
        }
    }
}


addTask("z", "medium", false);
markTaskAsCompleted("c");
console.log(getHighPriorityTasks());
deleteTask("a")

viewTasks()