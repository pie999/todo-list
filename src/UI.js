import {createhtml, removeAllChildren} from "./htmlHelper";
import {taskArr, createProject, deleteProject, checkNoProjects, createTask, deleteTask,
createTaskArr ,saveTaskArr, getTaskArr} from "./taskManager";


const createProjectDiv = document.querySelector(".createProjectDiv");
const addProjectBut = document.querySelector(".addProjectBut");
const projectList = document.querySelector(".projectList");

const createTaskDiv = document.querySelector(".createTaskDiv");
const addTaskBut = document.querySelector(".addtask");
const taskList = document.querySelector(".taskList");

export let selectedProject;

export function initialize() {
    if (localStorage.getItem('taskArr')) {
        getTaskArr();
        
        if (Object.values(taskArr)[0]) {
            for (const project in taskArr) {
                selectedProject = project;
                break
            }
            renderProjects();
            renderTasks(selectedProject);
        }
        else addTaskBut.disabled = true;
    } 
    else {
        createTaskArr();
        selectedProject = "home";
        renderProjects();
        renderTasks(selectedProject);
    }
}

export function loadProjectUI() {
    createProjectDiv.removeChild(addProjectBut);
    const projectNameInput = createhtml("input", createProjectDiv, "text");
    const comfirmAddProjectBut = createhtml("button", createProjectDiv, 0, "add", 0, () => {
        createProject(projectNameInput.value);
        selectedProject = projectNameInput.value;
        renderTasks(selectedProject);
        renderProjects();
        if (!checkNoProjects()) addTaskBut.disabled = false;
        removeAllChildren(createProjectDiv);
        createProjectDiv.appendChild(addProjectBut);
    })
    const cancelAddProjectBut = createhtml("button",createProjectDiv, 0, "cancel", 0, () => {
        removeAllChildren(createProjectDiv);
        createProjectDiv.appendChild(addProjectBut);
    })
}

export function renderProjects() {
    removeAllChildren(projectList);
    getTaskArr();
    for (const project in taskArr) {
        const projectDiv = createhtml("div", projectList, 0, 0, "projectDiv");
        const projectDivName = createhtml("button", projectDiv, 0, project, 0, () => {
            selectedProject = project;
            renderTasks(project);
        });
        const projectDivRemoveBut = createhtml("button", projectDiv, 0, "r", 0, () => {
            deleteProject(project);
            if (checkNoProjects()) {
                addTaskBut.disabled = true;
                removeAllChildren(taskList);
            }
            else if (project == selectedProject) {
                for (const project in taskArr) {
                    selectedProject = project;
                    break
                }
                renderTasks(selectedProject);
            }
            renderProjects();
        })
    }
}

export function loadTaskUI() {
    createTaskDiv.removeChild(addTaskBut);
    const taskNameInput = createhtml("input", createTaskDiv, "text");
    const comfirmAddTaskBut = createhtml("button", createTaskDiv, 0, "add", 0, () => {
        createTask(taskNameInput.value, false, selectedProject);
        renderTasks(selectedProject);
        removeAllChildren(createTaskDiv);
        createTaskDiv.appendChild(addTaskBut);
    });
    const cancelAddTaskBut = createhtml("button",createTaskDiv, 0, "cancel", 0, () => {
        removeAllChildren(createTaskDiv);
        createTaskDiv.appendChild(addTaskBut);
    })

}

export function renderTasks(project) {
    removeAllChildren(taskList);
    getTaskArr();
    taskArr[project].forEach((task, index) => {
        const taskDiv = createhtml("div", taskList, 0, 0, "taskDiv");
        const taskDivName = createhtml("p", taskDiv, 0, task.name);
        const taskDivRemoveBut = createhtml("button", taskDiv, 0, "remove", 0, () => {
        deleteTask(project, index);
        renderTasks(project);
        }); 
    })
}
