import Task from "./task";

export let taskArr = {};

export function createTaskArr() {
    taskArr = {"home": []};
    saveTaskArr()
}

export function saveTaskArr() {
    localStorage.setItem("taskArr", JSON.stringify(taskArr));
}

export function getTaskArr() {
    taskArr = JSON.parse(localStorage.getItem("taskArr"));
}

export function createProject(name) {
    taskArr[name] = [];
    saveTaskArr()
}

export function deleteProject(name) {
    delete taskArr[name];
    saveTaskArr()
}

export function checkNoProjects() {
    return Object.keys(taskArr).length == 0;
}

export function createTask(name, done, projectname) {
    taskArr[projectname].push(new Task(name, done));
    saveTaskArr()
}

export function deleteTask(projectname, index) {
    taskArr[projectname].splice(index, 1);
    saveTaskArr()
}
