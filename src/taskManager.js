import Task from "./task";

export const taskArr = [];

export function createTask(name, done) {
    taskArr.push(new Task(name, done))
}

export function deleteTask(index) {
    taskArr.splice(index, 1)
}

export function getTaskArr() {
    return taskArr;
}