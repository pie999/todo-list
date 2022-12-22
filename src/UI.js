import createhtml from "./htmlHelper";
import { taskArr, createTask, deleteTask, getTaskArr } from "./taskManager";

const createTaskDiv = document.querySelector(".createTaskDiv");
const taskList = document.querySelector(".taskList");

export function loadTaskUI() {
    const taskNameInput = createhtml("input", createTaskDiv, "text");

    const comfirmAddTaskBut = createhtml("button", createTaskDiv, 0, "add", 0, () => {
        createTask(taskNameInput.value, false);
        renderTasks();
    });

}

function removeTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function renderTasks() {
    removeTasks();
    taskArr.forEach((task, index) => {
        const taskDiv = createhtml("div", taskList);
        const taskDivName = createhtml("p", taskDiv, 0, task.name);
        const taskDivRemoveBut = createhtml("button", taskDiv, 0, "remove", 0, () => {
            deleteTask(index);
            renderTasks();
        });
    });
}

