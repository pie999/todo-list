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
/* harmony export */   "loadTaskUI": () => (/* binding */ loadTaskUI)
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
        (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.removeAllChildren)(createProjectDiv);
        renderProjects();
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
        const taskDivName = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", projectDiv, 0, project, 0, () => {
            selectedProject = project;
            renderTasks(project);
        });
        const taskDivRemoveBut = (0,_htmlHelper__WEBPACK_IMPORTED_MODULE_0__.createhtml)("button", projectDiv, 0, "r", 0, () => {
            delete _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskArr[project];
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
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "selectedProject": () => (/* binding */ selectedProject),
/* harmony export */   "taskArr": () => (/* binding */ taskArr)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


const taskArr = {home: []};

let selectedProject = "home";

function createProject(name) {
    taskArr[name] = [];
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNrQjs7O0FBRzdFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBLDZCQUE2Qix1REFBVTtBQUN2QyxpQ0FBaUMsdURBQVU7QUFDM0MsUUFBUSwyREFBYTtBQUNyQixRQUFRLDhEQUFpQjtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyx1REFBVTtBQUMxQyxRQUFRLCtEQUFpQjtBQUN6QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksOERBQWlCO0FBQ3JCLDBCQUEwQixpREFBTztBQUNqQywyQkFBMkIsdURBQVU7QUFDckMsNEJBQTRCLHVEQUFVO0FBQ3RDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaUNBQWlDLHVEQUFVO0FBQzNDLG1CQUFtQixpREFBTztBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVPO0FBQ1A7QUFDQSwwQkFBMEIsdURBQVU7QUFDcEMsOEJBQThCLHVEQUFVO0FBQ3hDLFFBQVEsd0RBQVU7QUFDbEI7QUFDQSxRQUFRLDhEQUFpQjtBQUN6QjtBQUNBLEtBQUs7QUFDTCw2QkFBNkIsdURBQVU7QUFDdkMsUUFBUSw4REFBaUI7QUFDekI7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsSUFBSSw4REFBaUI7QUFDckIsSUFBSSxpREFBTztBQUNYLHdCQUF3Qix1REFBVTtBQUNsQyw0QkFBNEIsdURBQVU7QUFDdEMsaUNBQWlDLHVEQUFVO0FBQzNDLFFBQVEsd0RBQVU7QUFDbEI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDBCOztBQUVuQixpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ1A7QUFDQTs7QUFFTztBQUNQLGtDQUFrQyw2Q0FBSTtBQUN0Qzs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05pRDs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBLElBQUksK0NBQVU7QUFDZCxDQUFDOztBQUVEO0FBQ0EsSUFBSSxtREFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9odG1sSGVscGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVodG1sLCByZW1vdmVBbGxDaGlsZHJlbn0gZnJvbSBcIi4vaHRtbEhlbHBlclwiO1xuaW1wb3J0IHt0YXNrQXJyLCBjcmVhdGVQcm9qZWN0LCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrfSBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5cbmNvbnN0IGNyZWF0ZVByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZVByb2plY3REaXZcIik7XG5jb25zdCBhZGRQcm9qZWN0QnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnV0XCIpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RMaXN0XCIpO1xuXG5jb25zdCBjcmVhdGVUYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVUYXNrRGl2XCIpO1xuY29uc3QgYWRkVGFza0J1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkdGFza1wiKTtcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrTGlzdFwiKTtcblxubGV0IHNlbGVjdGVkUHJvamVjdCA9IFwiaG9tZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RVSSgpIHtcbiAgICBjcmVhdGVQcm9qZWN0RGl2LnJlbW92ZUNoaWxkKGFkZFByb2plY3RCdXQpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBjcmVhdGVodG1sKFwiaW5wdXRcIiwgY3JlYXRlUHJvamVjdERpdiwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IGNvbWZpcm1BZGRQcm9qZWN0QnV0ID0gY3JlYXRlaHRtbChcImJ1dHRvblwiLCBjcmVhdGVQcm9qZWN0RGl2LCAwLCBcImFkZFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGNyZWF0ZVByb2plY3REaXYpO1xuICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXQpO1xuICAgIH0pXG4gICAgY29uc3QgY2FuY2VsQWRkUHJvamVjdEJ1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIixjcmVhdGVQcm9qZWN0RGl2LCAwLCBcImNhbmNlbFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGNyZWF0ZVByb2plY3REaXYpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXQpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHByb2plY3RMaXN0KTtcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gdGFza0Fycikge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlaHRtbChcImRpdlwiLCBwcm9qZWN0TGlzdCwgMCwgMCwgXCJwcm9qZWN0RGl2XCIpO1xuICAgICAgICBjb25zdCB0YXNrRGl2TmFtZSA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgcHJvamVjdERpdiwgMCwgcHJvamVjdCwgMCwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFza0RpdlJlbW92ZUJ1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgcHJvamVjdERpdiwgMCwgXCJyXCIsIDAsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSB0YXNrQXJyW3Byb2plY3RdO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGFza1VJKCkge1xuICAgIGNyZWF0ZVRhc2tEaXYucmVtb3ZlQ2hpbGQoYWRkVGFza0J1dCk7XG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGNyZWF0ZWh0bWwoXCJpbnB1dFwiLCBjcmVhdGVUYXNrRGl2LCBcInRleHRcIik7XG4gICAgY29uc3QgY29tZmlybUFkZFRhc2tCdXQgPSBjcmVhdGVodG1sKFwiYnV0dG9uXCIsIGNyZWF0ZVRhc2tEaXYsIDAsIFwiYWRkXCIsIDAsICgpID0+IHtcbiAgICAgICAgY3JlYXRlVGFzayh0YXNrTmFtZUlucHV0LnZhbHVlLCBmYWxzZSwgc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oY3JlYXRlVGFza0Rpdik7XG4gICAgICAgIGNyZWF0ZVRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dCk7XG4gICAgfSk7XG4gICAgY29uc3QgY2FuY2VsQWRkVGFza0J1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIixjcmVhdGVUYXNrRGl2LCAwLCBcImNhbmNlbFwiLCAwLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGNyZWF0ZVRhc2tEaXYpO1xuICAgICAgICBjcmVhdGVUYXNrRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdXQpO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MocHJvamVjdCkge1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHRhc2tMaXN0KTtcbiAgICB0YXNrQXJyW3Byb2plY3RdLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBjcmVhdGVodG1sKFwiZGl2XCIsIHRhc2tMaXN0LCAwLCAwLCBcInRhc2tEaXZcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEaXZOYW1lID0gY3JlYXRlaHRtbChcInBcIiwgdGFza0RpdiwgMCwgdGFzay5uYW1lKTtcbiAgICAgICAgY29uc3QgdGFza0RpdlJlbW92ZUJ1dCA9IGNyZWF0ZWh0bWwoXCJidXR0b25cIiwgdGFza0RpdiwgMCwgXCJyZW1vdmVcIiwgMCwgKCkgPT4ge1xuICAgICAgICBkZWxldGVUYXNrKHByb2plY3QsIGluZGV4KTtcbiAgICAgICAgcmVuZGVyVGFza3MocHJvamVjdCk7XG4gICAgICAgIH0pOyBcbiAgICB9KVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZWh0bWwoa2V5bmFtZSwgcGFyZW50LCB0eXBlLCB0ZXh0LCBjbGFzc05hbWUsIGZ1bmNPbkNsaWNrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoa2V5bmFtZSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIFxuICAgIGlmICh0eXBlKSAgICAgICBlbGVtZW50LnR5cGUgPSB0eXBlO1xuICAgIGlmICh0ZXh0KSAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoY2xhc3NOYW1lKSAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgaWYgKGZ1bmNPbkNsaWNrKWVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmNPbkNsaWNrKVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpIHtcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCkgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRvbmUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICB9XG59IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgY29uc3QgdGFza0FyciA9IHtob21lOiBbXX07XG5cbmV4cG9ydCBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gXCJob21lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICB0YXNrQXJyW25hbWVdID0gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGRvbmUsIHByb2plY3RuYW1lKSB7XG4gICAgdGFza0Fycltwcm9qZWN0bmFtZV0ucHVzaChuZXcgVGFzayhuYW1lLCBkb25lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdG5hbWUsIGluZGV4KSB7XG4gICAgdGFza0Fycltwcm9qZWN0bmFtZV0uc3BsaWNlKGluZGV4LCAxKVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkVGFza1VJLCBsb2FkUHJvamVjdFVJIH0gZnJvbSBcIi4vVUlcIjtcblxuY29uc3QgYWRkUHJvamVjdEJ1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEJ1dFwiKTtcbmNvbnN0IGFkZFRhc2tCdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHRhc2tcIik7XG5cbmFkZFRhc2tCdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkVGFza1VJKCk7XG59KVxuXG5hZGRQcm9qZWN0QnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZFByb2plY3RVSSgpO1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==