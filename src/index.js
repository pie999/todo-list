import { loadTaskUI } from "./UI";

const addTaskBut = document.querySelector(".addtask");

addTaskBut.addEventListener("click", () => {
    loadTaskUI();
})

