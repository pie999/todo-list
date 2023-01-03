import { loadTaskUI, loadProjectUI, renderProjects, renderTasks } from "./UI";

const addProjectBut = document.querySelector(".addProjectBut");
const addTaskBut = document.querySelector(".addtask");

addTaskBut.addEventListener("click", () => {
    loadTaskUI();
})

addProjectBut.addEventListener("click", () => {
    loadProjectUI();
})

renderProjects();
renderTasks("home");
