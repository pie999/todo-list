import Task from "./task";

export const taskArr = {home: []};

export function createProject(name) {
    taskArr[name] = [];
}

export function deleteProject(name) {
    delete taskArr[name];
}

export function checkNoProjects() {
    return Object.keys(taskArr).length == 0;
}

export function createTask(name, done, projectname) {
    taskArr[projectname].push(new Task(name, done))
}

export function deleteTask(projectname, index) {
    taskArr[projectname].splice(index, 1)
}
