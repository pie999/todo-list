/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "loadProjectUI": () => (/* binding */ loadProjectUI),
/* harmony export */   "loadTaskUI": () => (/* binding */ loadTaskUI),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "selectedProject": () => (/* binding */ selectedProject)
/* harmony export */ });
/* harmony import */ var _htmlHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlHelper */ "./src/htmlHelper.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");




const createProjectDiv = document.querySelector(".createProjectDiv");
const addProjectBut = document.querySelector(".addProjectBut");
const projectList = document.querySelector(".projectList");

const createTaskDiv = document.querySelector(".createTaskDiv");
const addTaskBut = document.querySelector(".addtask");
const taskList = document.querySelector(".taskList");

let selectedProject;

function initialize() {
    if (localStorage.getItem('taskArr')) {
        (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getTaskArr)();
        
        if (Object.values(_taskManager__WEBPACK_IMPORTED_MODULE_1__.taskArr)[0]) {
            for (const project in _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskArr) {
                selectedProject = project;
                break
            }
            renderProjects();
            renderTasks(selectedProject);
        }
        else addTaskBut.disabled = true;
    } 
    else {
        (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.createTaskArr)();
        selectedProject = "home";
        renderProjects();
        renderTasks(selectedProject);
    }
}

function loadProjectUI() {
    createProjectDiv.removeChild(addProjectBut);
    const projectNameInput = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("input", createProjectDiv, "text");
    const comfirmAddProjectBut = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", createProjectDiv, 0, "add", 0, () => {
        (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectNameInput.value);
        selectedProject = projectNameInput.value;
        renderTasks(selectedProject);
        renderProjects();
        if (!(0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.checkNoProjects)()) addTaskBut.disabled = false;
        (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(createProjectDiv);
        createProjectDiv.appendChild(addProjectBut);
    })
    const cancelAddProjectBut = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button",createProjectDiv, 0, "cancel", 0, () => {
        ;(0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(createProjectDiv);
        createProjectDiv.appendChild(addProjectBut);
    })
}

function renderProjects() {
    (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(projectList);
    (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getTaskArr)();
    for (const project in _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskArr) {
        const projectDiv = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("div", projectList, 0, 0, "projectDiv");
        const projectDivName = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", projectDiv, 0, project, 0, () => {
            selectedProject = project;
            renderTasks(project);
        });
        const projectDivRemoveBut = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", projectDiv, 0, "r", 0, () => {
            (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(project);
            if ((0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.checkNoProjects)()) {
                addTaskBut.disabled = true;
                (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(taskList);
            }
            else if (project == selectedProject) {
                for (const project in _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskArr) {
                    selectedProject = project;
                    break
                }
                renderTasks(selectedProject);
            }
            renderProjects();
        })
    }
}

function loadTaskUI() {
    createTaskDiv.removeChild(addTaskBut);
    const taskNameInput = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("input", createTaskDiv, "text");
    const comfirmAddTaskBut = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", createTaskDiv, 0, "add", 0, () => {
        (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.createTask)(taskNameInput.value, false, selectedProject);
        renderTasks(selectedProject);
        (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(createTaskDiv);
        createTaskDiv.appendChild(addTaskBut);
    });
    const cancelAddTaskBut = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button",createTaskDiv, 0, "cancel", 0, () => {
        (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(createTaskDiv);
        createTaskDiv.appendChild(addTaskBut);
    })

}

function renderTasks(project) {
    (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(taskList);
    (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.getTaskArr)();
    _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskArr[project].forEach((task, index) => {
        const taskDiv = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("div", taskList, 0, 0, "taskDiv");
        const taskDivName = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("p", taskDiv, 0, task.name);
        const taskDivRemoveBut = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", taskDiv, 0, "remove", 0, () => {
        (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(project, index);
        renderTasks(project);
        }); 
    })
}


/***/ }),

/***/ "./src/htmlHelper.js":
/*!***************************!*\
  !*** ./src/htmlHelper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createhtml": () => (/* binding */ createhtml),
/* harmony export */   "removeAllChildren": () => (/* binding */ removeAllChildren)
/* harmony export */ });
function createhtml(keyname, parent, type, text, className, funcOnClick) {
    const element = document.createElement(keyname);
    parent.appendChild(element);
    
    if (type)       element.type = type;
    if (text)       element.textContent = text;
    if (className)  element.classList.add(className);
    if (funcOnClick)element.addEventListener("click", funcOnClick)

    return element;
    
}

function removeAllChildren(parent) {
    while(parent.firstChild) parent.removeChild(parent.firstChild);
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, done) {
        this.name = name;
        this.done = done;
    }
}

/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNoProjects": () => (/* binding */ checkNoProjects),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "createTaskArr": () => (/* binding */ createTaskArr),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "getTaskArr": () => (/* binding */ getTaskArr),
/* harmony export */   "saveTaskArr": () => (/* binding */ saveTaskArr),
/* harmony export */   "taskArr": () => (/* binding */ taskArr)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


let taskArr = {};

function createTaskArr() {
    taskArr = {"home": []};
    saveTaskArr()
}

function saveTaskArr() {
    localStorage.setItem("taskArr", JSON.stringify(taskArr));
}

function getTaskArr() {
    taskArr = JSON.parse(localStorage.getItem("taskArr"));
}

function createProject(name) {
    taskArr[name] = [];
    saveTaskArr()
}

function deleteProject(name) {
    delete taskArr[name];
    saveTaskArr()
}

function checkNoProjects() {
    return Object.keys(taskArr).length == 0;
}

function createTask(name, done, projectname) {
    taskArr[projectname].push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](name, done));
    saveTaskArr()
}

function deleteTask(projectname, index) {
    taskArr[projectname].splice(index, 1);
    saveTaskArr()
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


const addProjectBut = document.querySelector(".addProjectBut");
const addTaskBut = document.querySelector(".addtask");

addTaskBut.addEventListener("click", () => {
    (0,_UI__WEBPACK_IMPORTED_MODULE_0__.loadTaskUI)();
})

addProjectBut.addEventListener("click", () => {
    ;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.loadProjectUI)();
})

;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.initialize)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vdG9kby1saXN0Ly4vc3JjL2h0bWxIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZWh0bWwsIHJlbW92ZUFsbENoaWxkcmVufSBmcm9tIFwiLi9odG1sSGVscGVyXCI7XG5pbXBvcnQge3Rhc2tBcnIsIGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3QsIGNoZWNrTm9Qcm9qZWN0cywgY3JlYXRlVGFzaywgZGVsZXRlVGFzayxcbmNyZWF0ZVRhc2tBcnIgLHNhdmVUYXNrQXJyLCBnZXRUYXNrQXJyfSBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5cbmNvbnN0IGNyZWF0ZVByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVByb2plY3REaXZcIik7XG5jb25zdCBhZGRQcm9qZWN0QnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0XCIpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RMaXN0XCIpO1xuXG5jb25zdCBjcmVhdGVUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVUYXNrRGl2XCIpO1xuY29uc3QgYWRkVGFza0J1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkdGFza1wiKTtcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcblxuZXhwb3J0IGxldCBzZWxlY3RlZFByb2plY3Q7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0FycicpKSB7XG4gICAgICAgIGdldFRhc2tBcnIoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKHRhc2tBcnIpWzBdKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gdGFza0Fycikge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICAgICAgICByZW5kZXJUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgYWRkVGFza0J1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgICAgY3JlYXRlVGFza0FycigpO1xuICAgICAgICBzZWxlY3RlZFByb2plY3QgPSBcImhvbWVcIjtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdFVJKCkge1xuICAgIGNyZWF0ZVByb2plY3REaXYucmVtb3ZlQ2hpbGQoYWRkUHJvamVjdEJ1dCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGNyZWF0ZWh0bWwoXCJpbnB1dFwiLCBjcmVhdGVQcm9qZWN0RGl2LCBcInRleHRcIik7XG4gICAgY29uc3QgY29tZmlybUFkZFByb2plY3RCdXQgPSBjcmVhdGVodG1sKFwiYnV0dG9uXCIsIGNyZWF0ZVByb2plY3REaXYsIDAsIFwiYWRkXCIsIDAsICgpID0+IHtcbiAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgaWYgKCFjaGVja05vUHJvamVjdHMoKSkgYWRkVGFza0J1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihjcmVhdGVQcm9qZWN0RGl2KTtcbiAgICAgICAgY3JlYXRlUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0KTtcbiAgICB9KVxuICAgIGNvbnN0IGNhbmNlbEFkZFByb2plY3RCdXQgPSBjcmVhdGVodG1sKFwiYnV0dG9uXCIsY3JlYXRlUHJvamVjdERpdiwgMCwgXCJjYW5jZWxcIiwgMCwgKCkgPT4ge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihjcmVhdGVQcm9qZWN0RGl2KTtcbiAgICAgICAgY3JlYXRlUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0KTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4ocHJvamVjdExpc3QpO1xuICAgIGdldFRhc2tBcnIoKTtcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gdGFza0Fycikge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlaHRtbChcImRpdlwiLCBwcm9qZWN0TGlzdCwgMCwgMCwgXCJwcm9qZWN0RGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2TmFtZSA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgcHJvamVjdERpdiwgMCwgcHJvamVjdCwgMCwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdlJlbW92ZUJ1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgcHJvamVjdERpdiwgMCwgXCJyXCIsIDAsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tOb1Byb2plY3RzKCkpIHtcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxDaGlsZHJlbih0YXNrTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwcm9qZWN0ID09IHNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiB0YXNrQXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUYXNrVUkoKSB7XG4gICAgY3JlYXRlVGFza0Rpdi5yZW1vdmVDaGlsZChhZGRUYXNrQnV0KTtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gY3JlYXRlaHRtbChcImlucHV0XCIsIGNyZWF0ZVRhc2tEaXYsIFwidGV4dFwiKTtcbiAgICBjb25zdCBjb21maXJtQWRkVGFza0J1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgY3JlYXRlVGFza0RpdiwgMCwgXCJhZGRcIiwgMCwgKCkgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrKHRhc2tOYW1lSW5wdXQudmFsdWUsIGZhbHNlLCBzZWxlY3RlZFByb2plY3QpO1xuICAgICAgICByZW5kZXJUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihjcmVhdGVUYXNrRGl2KTtcbiAgICAgICAgY3JlYXRlVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnV0KTtcbiAgICB9KTtcbiAgICBjb25zdCBjYW5jZWxBZGRUYXNrQnV0ID0gY3JlYXRlaHRtbChcImJ1dHRvblwiLGNyZWF0ZVRhc2tEaXYsIDAsIFwiY2FuY2VsXCIsIDAsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY3JlYXRlVGFza0Rpdik7XG4gICAgICAgIGNyZWF0ZVRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dCk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCkge1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHRhc2tMaXN0KTtcbiAgICBnZXRUYXNrQXJyKCk7XG4gICAgdGFza0Fycltwcm9qZWN0XS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gY3JlYXRlaHRtbChcImRpdlwiLCB0YXNrTGlzdCwgMCwgMCwgXCJ0YXNrRGl2XCIpO1xuICAgICAgICBjb25zdCB0YXNrRGl2TmFtZSA9IGNyZWF0ZWh0bWwoXCJwXCIsIHRhc2tEaXYsIDAsIHRhc2submFtZSk7XG4gICAgICAgIGNvbnN0IHRhc2tEaXZSZW1vdmVCdXQgPSBjcmVhdGVodG1sKFwiYnV0dG9uXCIsIHRhc2tEaXYsIDAsIFwicmVtb3ZlXCIsIDAsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVGFzayhwcm9qZWN0LCBpbmRleCk7XG4gICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xuICAgICAgICB9KTsgXG4gICAgfSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVodG1sKGtleW5hbWUsIHBhcmVudCwgdHlwZSwgdGV4dCwgY2xhc3NOYW1lLCBmdW5jT25DbGljaykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGtleW5hbWUpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBcbiAgICBpZiAodHlwZSkgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICBpZiAodGV4dCkgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaWYgKGNsYXNzTmFtZSkgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGlmIChmdW5jT25DbGljayllbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jT25DbGljaylcblxuICAgIHJldHVybiBlbGVtZW50O1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkb25lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGxldCB0YXNrQXJyID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrQXJyKCkge1xuICAgIHRhc2tBcnIgPSB7XCJob21lXCI6IFtdfTtcbiAgICBzYXZlVGFza0FycigpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFza0FycigpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tBcnJcIiwgSlNPTi5zdHJpbmdpZnkodGFza0FycikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0FycigpIHtcbiAgICB0YXNrQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tBcnJcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgdGFza0FycltuYW1lXSA9IFtdO1xuICAgIHNhdmVUYXNrQXJyKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZSkge1xuICAgIGRlbGV0ZSB0YXNrQXJyW25hbWVdO1xuICAgIHNhdmVUYXNrQXJyKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9Qcm9qZWN0cygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGFza0FycikubGVuZ3RoID09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGRvbmUsIHByb2plY3RuYW1lKSB7XG4gICAgdGFza0Fycltwcm9qZWN0bmFtZV0ucHVzaChuZXcgVGFzayhuYW1lLCBkb25lKSk7XG4gICAgc2F2ZVRhc2tBcnIoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0bmFtZSwgaW5kZXgpIHtcbiAgICB0YXNrQXJyW3Byb2plY3RuYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNhdmVUYXNrQXJyKClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2VsZWN0ZWRQcm9qZWN0ICxpbml0aWFsaXplLCBsb2FkVGFza1VJLCBsb2FkUHJvamVjdFVJLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVGFza3MgfSBmcm9tIFwiLi9VSVwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0XCIpO1xuY29uc3QgYWRkVGFza0J1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkdGFza1wiKTtcblxuYWRkVGFza0J1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRUYXNrVUkoKTtcbn0pXG5cbmFkZFByb2plY3RCdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkUHJvamVjdFVJKCk7XG59KVxuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=