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
/* harmony export */   "loadProjectUI": () => (/* binding */ loadProjectUI),
/* harmony export */   "loadTaskUI": () => (/* binding */ loadTaskUI),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _htmlHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlHelper */ "./src/htmlHelper.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");




const createProjectDiv = document.querySelector(".createProjectDiv");
const addProjectBut = document.querySelector(".addProjectBut");
const projectList = document.querySelector(".projectList");

const createTaskDiv = document.querySelector(".createTaskDiv");
const addTaskBut = document.querySelector(".addtask");
const taskList = document.querySelector(".taskList");

let selectedProject = "home";

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
    for (const project in _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskArr) {
        const projectDiv = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("div", projectList, 0, 0, "projectDiv");
        const projectDivName = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", projectDiv, 0, project, 0, () => {
            selectedProject = project;
            renderTasks(project);
        });
        const projectDivRemoveBut = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", projectDiv, 0, "r", 0, () => {
            (0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(project);
            if ((0,_taskManager__WEBPACK_IMPORTED_MODULE_1__.checkNoProjects)()) addTaskBut.disabled = true;
            else if (project == selectedProject) selectedProject = _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskArr[0];
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
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "taskArr": () => (/* binding */ taskArr)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


const taskArr = {home: []};

function createProject(name) {
    taskArr[name] = [];
}

function deleteProject(name) {
    delete taskArr[name];
}

function checkNoProjects() {
    return Object.keys(taskArr).length == 0;
}

function createTask(name, done, projectname) {
    taskArr[projectname].push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](name, done))
}

function deleteTask(projectname, index) {
    taskArr[projectname].splice(index, 1)
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

;(0,_UI__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
(0,_UI__WEBPACK_IMPORTED_MODULE_0__.renderTasks)("home");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ2tEOzs7QUFHN0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0EsNkJBQTZCLHVEQUFVO0FBQ3ZDLGlDQUFpQyx1REFBVTtBQUMzQyxRQUFRLDJEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkRBQWU7QUFDNUIsUUFBUSw4REFBaUI7QUFDekI7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLHVEQUFVO0FBQzFDLFFBQVEsK0RBQWlCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1AsSUFBSSw4REFBaUI7QUFDckIsMEJBQTBCLGlEQUFPO0FBQ2pDLDJCQUEyQix1REFBVTtBQUNyQywrQkFBK0IsdURBQVU7QUFDekM7QUFDQTtBQUNBLFNBQVM7QUFDVCxvQ0FBb0MsdURBQVU7QUFDOUMsWUFBWSwyREFBYTtBQUN6QixnQkFBZ0IsNkRBQWU7QUFDL0IsbUVBQW1FLG9EQUFVO0FBQzdFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDBCQUEwQix1REFBVTtBQUNwQyw4QkFBOEIsdURBQVU7QUFDeEMsUUFBUSx3REFBVTtBQUNsQjtBQUNBLFFBQVEsOERBQWlCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMLDZCQUE2Qix1REFBVTtBQUN2QyxRQUFRLDhEQUFpQjtBQUN6QjtBQUNBLEtBQUs7O0FBRUw7O0FBRU87QUFDUCxJQUFJLDhEQUFpQjtBQUNyQixJQUFJLGlEQUFPO0FBQ1gsd0JBQXdCLHVEQUFVO0FBQ2xDLDRCQUE0Qix1REFBVTtBQUN0QyxpQ0FBaUMsdURBQVU7QUFDM0MsUUFBUSx3REFBVTtBQUNsQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDBCOztBQUVuQixpQkFBaUI7O0FBRWpCO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1Asa0NBQWtDLDZDQUFJO0FBQ3RDOztBQUVPO0FBQ1A7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhFOztBQUU5RTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQSxJQUFJLG1EQUFhO0FBQ2pCLENBQUM7O0FBRUQsb0RBQWM7QUFDZCxnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaHRtbEhlbHBlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlaHRtbCwgcmVtb3ZlQWxsQ2hpbGRyZW59IGZyb20gXCIuL2h0bWxIZWxwZXJcIjtcbmltcG9ydCB7dGFza0FyciwgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgY2hlY2tOb1Byb2plY3RzLCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrfSBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5cbmNvbnN0IGNyZWF0ZVByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVByb2plY3REaXZcIik7XG5jb25zdCBhZGRQcm9qZWN0QnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0XCIpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RMaXN0XCIpO1xuXG5jb25zdCBjcmVhdGVUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVUYXNrRGl2XCIpO1xuY29uc3QgYWRkVGFza0J1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkdGFza1wiKTtcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcblxubGV0IHNlbGVjdGVkUHJvamVjdCA9IFwiaG9tZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RVSSgpIHtcbiAgICBjcmVhdGVQcm9qZWN0RGl2LnJlbW92ZUNoaWxkKGFkZFByb2plY3RCdXQpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBjcmVhdGVodG1sKFwiaW5wdXRcIiwgY3JlYXRlUHJvamVjdERpdiwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IGNvbWZpcm1BZGRQcm9qZWN0QnV0ID0gY3JlYXRlaHRtbChcImJ1dHRvblwiLCBjcmVhdGVQcm9qZWN0RGl2LCAwLCBcImFkZFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICAgIGlmICghY2hlY2tOb1Byb2plY3RzKCkpIGFkZFRhc2tCdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY3JlYXRlUHJvamVjdERpdik7XG4gICAgICAgIGNyZWF0ZVByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dCk7XG4gICAgfSlcbiAgICBjb25zdCBjYW5jZWxBZGRQcm9qZWN0QnV0ID0gY3JlYXRlaHRtbChcImJ1dHRvblwiLGNyZWF0ZVByb2plY3REaXYsIDAsIFwiY2FuY2VsXCIsIDAsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY3JlYXRlUHJvamVjdERpdik7XG4gICAgICAgIGNyZWF0ZVByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHByb2plY3RMaXN0KTtcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gdGFza0Fycikge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlaHRtbChcImRpdlwiLCBwcm9qZWN0TGlzdCwgMCwgMCwgXCJwcm9qZWN0RGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2TmFtZSA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgcHJvamVjdERpdiwgMCwgcHJvamVjdCwgMCwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdlJlbW92ZUJ1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgcHJvamVjdERpdiwgMCwgXCJyXCIsIDAsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBpZiAoY2hlY2tOb1Byb2plY3RzKCkpIGFkZFRhc2tCdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpZiAocHJvamVjdCA9PSBzZWxlY3RlZFByb2plY3QpIHNlbGVjdGVkUHJvamVjdCA9IHRhc2tBcnJbMF07XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUYXNrVUkoKSB7XG4gICAgY3JlYXRlVGFza0Rpdi5yZW1vdmVDaGlsZChhZGRUYXNrQnV0KTtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gY3JlYXRlaHRtbChcImlucHV0XCIsIGNyZWF0ZVRhc2tEaXYsIFwidGV4dFwiKTtcbiAgICBjb25zdCBjb21maXJtQWRkVGFza0J1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgY3JlYXRlVGFza0RpdiwgMCwgXCJhZGRcIiwgMCwgKCkgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrKHRhc2tOYW1lSW5wdXQudmFsdWUsIGZhbHNlLCBzZWxlY3RlZFByb2plY3QpO1xuICAgICAgICByZW5kZXJUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihjcmVhdGVUYXNrRGl2KTtcbiAgICAgICAgY3JlYXRlVGFza0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnV0KTtcbiAgICB9KTtcbiAgICBjb25zdCBjYW5jZWxBZGRUYXNrQnV0ID0gY3JlYXRlaHRtbChcImJ1dHRvblwiLGNyZWF0ZVRhc2tEaXYsIDAsIFwiY2FuY2VsXCIsIDAsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY3JlYXRlVGFza0Rpdik7XG4gICAgICAgIGNyZWF0ZVRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dCk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCkge1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHRhc2tMaXN0KTtcbiAgICB0YXNrQXJyW3Byb2plY3RdLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBjcmVhdGVodG1sKFwiZGl2XCIsIHRhc2tMaXN0LCAwLCAwLCBcInRhc2tEaXZcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEaXZOYW1lID0gY3JlYXRlaHRtbChcInBcIiwgdGFza0RpdiwgMCwgdGFzay5uYW1lKTtcbiAgICAgICAgY29uc3QgdGFza0RpdlJlbW92ZUJ1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgdGFza0RpdiwgMCwgXCJyZW1vdmVcIiwgMCwgKCkgPT4ge1xuICAgICAgICBkZWxldGVUYXNrKHByb2plY3QsIGluZGV4KTtcbiAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XG4gICAgICAgIH0pOyBcbiAgICB9KVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZWh0bWwoa2V5bmFtZSwgcGFyZW50LCB0eXBlLCB0ZXh0LCBjbGFzc05hbWUsIGZ1bmNPbkNsaWNrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoa2V5bmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIFxuICAgIGlmICh0eXBlKSAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgIGlmICh0ZXh0KSAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoY2xhc3NOYW1lKSAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgaWYgKGZ1bmNPbkNsaWNrKWVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmNPbkNsaWNrKVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpIHtcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCkgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRvbmUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICB9XG59IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgY29uc3QgdGFza0FyciA9IHtob21lOiBbXX07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICB0YXNrQXJyW25hbWVdID0gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KG5hbWUpIHtcbiAgICBkZWxldGUgdGFza0FycltuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9Qcm9qZWN0cygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGFza0FycikubGVuZ3RoID09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGRvbmUsIHByb2plY3RuYW1lKSB7XG4gICAgdGFza0Fycltwcm9qZWN0bmFtZV0ucHVzaChuZXcgVGFzayhuYW1lLCBkb25lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdG5hbWUsIGluZGV4KSB7XG4gICAgdGFza0Fycltwcm9qZWN0bmFtZV0uc3BsaWNlKGluZGV4LCAxKVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkVGFza1VJLCBsb2FkUHJvamVjdFVJLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVGFza3MgfSBmcm9tIFwiLi9VSVwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0XCIpO1xuY29uc3QgYWRkVGFza0J1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkdGFza1wiKTtcblxuYWRkVGFza0J1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRUYXNrVUkoKTtcbn0pXG5cbmFkZFByb2plY3RCdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkUHJvamVjdFVJKCk7XG59KVxuXG5yZW5kZXJQcm9qZWN0cygpO1xucmVuZGVyVGFza3MoXCJob21lXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9