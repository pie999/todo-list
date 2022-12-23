import Task from "./task";

export const taskArr = {home: []};

export let selectedProject = "home";

export function createProject(name) {
    taskArr[name] = [];
}

export function createTask(name, done, projectname) {
    taskArr[projectname].push(new Task(name, done))
}

export function deleteTask(projectname, index) {
    taskArr[projectname].splice(index, 1)
}
