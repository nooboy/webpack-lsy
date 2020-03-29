/*! Author: lsy */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://lsy.com";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/List/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/pages/List/index.js":
/*!*********************************!*\
  !*** ./src/pages/List/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_insert_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/insert-element.js */ "./src/utils/insert-element.js");
/* harmony import */ var _utils_insert_element_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_insert_element_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/ajax */ "./src/utils/ajax.js");
/* harmony import */ var _utils_print_me_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/print-me.js */ "./src/utils/print-me.js");
/* harmony import */ var _utils_print_her__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/print-her */ "./src/utils/print-her.js");





Object(_utils_print_me_js__WEBPACK_IMPORTED_MODULE_3__["printMe"])();
Object(_utils_print_her__WEBPACK_IMPORTED_MODULE_4__["printHer"])();
_utils_insert_element_js__WEBPACK_IMPORTED_MODULE_1___default()({
  element: 'div',
  className: 'div1',
  content: '列表页'
}); // consolee.log('这是错误代码');   // inline-source-map测试

Object(_utils_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
  url: '/api/list'
}); // 环境变量

console.log('---PRODUCTION: ',  true ? 'pro' : undefined); // pro

console.log( false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(true));
console.log( false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(false));
console.log( false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(true));
console.log( false ? undefined : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(1+1));

/***/ }),

/***/ "./src/utils/ajax.js":
/*!***************************!*\
  !*** ./src/utils/ajax.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ajax; });
function ajax() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      url = _ref.url,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'get' : _ref$type,
      _ref$async = _ref.async,
      async = _ref$async === void 0 ? true : _ref$async,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data;

  var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP'); // return new Promise(function (resolve, reject) {

  xhr.open(type, url, async);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        // resolve(xhr.responseText);
        console.log('http response: ', xhr.responseText);
      } else {
        // xhr.onerror = reject;
        console.error('http request error...');
      }
    }
  };

  xhr.send(); // })
}

/***/ }),

/***/ "./src/utils/insert-element.js":
/*!*************************************!*\
  !*** ./src/utils/insert-element.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// export default function insertElement({
//   element = null,
//   className = '',
//   content = '',
//   nums = 1,
//   target = document.body,
// } = {}) {
//   const frag = document.createDocumentFragment();
//   for (let i=0; i<nums; i++) {
//     const ele = document.createElement(element);
//     ele.className = className;
//     ele.innerText =  content;
//     frag.appendChild(ele);
//   }
//   target.appendChild(frag);
// }

/***/ }),

/***/ "./src/utils/print-her.js":
/*!********************************!*\
  !*** ./src/utils/print-her.js ***!
  \********************************/
/*! exports provided: printHer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printHer", function() { return printHer; });
function printHer() {
  console.log('print her name');
}

/***/ }),

/***/ "./src/utils/print-me.js":
/*!*******************************!*\
  !*** ./src/utils/print-me.js ***!
  \*******************************/
/*! exports provided: printMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printMe", function() { return printMe; });
function printMe() {
  console.log('print my name');
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9MaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hamF4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbnNlcnQtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcHJpbnQtaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wcmludC1tZS5qcyJdLCJuYW1lcyI6WyJwcmludE1lIiwicHJpbnRIZXIiLCJpbnNlcnRFbGVtZW50IiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJhamF4IiwidXJsIiwiY29uc29sZSIsImxvZyIsIlBST0RVQ1RJT04iLCJWRVJTSU9OIiwiQlJPV1NFUl9TVVBQT1JUU19IVE1MNSIsIlRXTyIsInR5cGUiLCJhc3luYyIsImRhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImVycm9yIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFDQTtBQUNBQSxrRUFBTztBQUNQQyxpRUFBUTtBQUVSQywrREFBYSxDQUFDO0FBQ1pDLFNBQU8sRUFBRSxLQURHO0FBRVpDLFdBQVMsRUFBRSxNQUZDO0FBR1pDLFNBQU8sRUFBRTtBQUhHLENBQUQsQ0FBYixDLENBTUE7O0FBRUFDLDJEQUFJLENBQUM7QUFDSEMsS0FBRyxFQUFFO0FBREYsQ0FBRCxDQUFKLEMsQ0FJQTs7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JDLEtBQVUsR0FBRyxLQUFILEdBQVcsU0FBcEQsRSxDQUE4RDs7QUFDOURGLE9BQU8sQ0FBQ0MsR0FBUiwyRkFBbUJDLElBQW5CO0FBQ0FGLE9BQU8sQ0FBQ0MsR0FBUiwyRkFBbUJFLEtBQW5CO0FBQ0FILE9BQU8sQ0FBQ0MsR0FBUiwyRkFBbUJHLElBQW5CO0FBQ0FKLE9BQU8sQ0FBQ0MsR0FBUiwyRkFBbUJJLEdBQW5CLEc7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQWdCLFNBQVNQLElBQVQsR0FLUjtBQUFBLGlGQUFKLEVBQUk7QUFBQSxNQUpOQyxHQUlNLFFBSk5BLEdBSU07QUFBQSx1QkFITk8sSUFHTTtBQUFBLE1BSE5BLElBR00sMEJBSEMsS0FHRDtBQUFBLHdCQUZOQyxLQUVNO0FBQUEsTUFGTkEsS0FFTSwyQkFGRSxJQUVGO0FBQUEsdUJBRE5DLElBQ007QUFBQSxNQUROQSxJQUNNLDBCQURDLEVBQ0Q7O0FBQ04sTUFBSUMsR0FBRyxHQUFHLElBQUlDLGNBQUosTUFBd0IsSUFBSUMsYUFBSixDQUFrQixtQkFBbEIsQ0FBbEMsQ0FETSxDQUVOOztBQUNBRixLQUFHLENBQUNHLElBQUosQ0FBU04sSUFBVCxFQUFlUCxHQUFmLEVBQW9CUSxLQUFwQjs7QUFDQUUsS0FBRyxDQUFDSSxrQkFBSixHQUF5QixZQUFNO0FBQzdCLFFBQUlKLEdBQUcsQ0FBQ0ssVUFBSixJQUFrQixDQUF0QixFQUF5QjtBQUN2QixVQUFJTCxHQUFHLENBQUNNLE1BQUosSUFBYyxHQUFsQixFQUF1QjtBQUNyQjtBQUNBZixlQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQlEsR0FBRyxDQUFDTyxZQUFuQztBQUNELE9BSEQsTUFHTztBQUNMO0FBQ0FoQixlQUFPLENBQUNpQixLQUFSLENBQWMsdUJBQWQ7QUFDRDtBQUNGO0FBQ0YsR0FWRDs7QUFXQVIsS0FBRyxDQUFDUyxJQUFKLEdBZk0sQ0FnQk47QUFDRCxDOzs7Ozs7Ozs7OztBQ3RCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQU8sU0FBU3pCLFFBQVQsR0FBcUI7QUFDMUJPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDRkQ7QUFBQTtBQUFPLFNBQVNULE9BQVQsR0FBb0I7QUFDekJRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRCxDIiwiZmlsZSI6Imxpc3QuOWI3NDE2MjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sc3kuY29tXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL0xpc3QvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IGluc2VydEVsZW1lbnQgZnJvbSAnQHV0aWxzL2luc2VydC1lbGVtZW50LmpzJztcbmltcG9ydCBhamF4IGZyb20gJ0B1dGlscy9hamF4JztcblxuaW1wb3J0IHsgcHJpbnRNZSB9IGZyb20gJ0B1dGlscy9wcmludC1tZS5qcyc7XG5pbXBvcnQgeyBwcmludEhlciB9IGZyb20gJ0B1dGlscy9wcmludC1oZXInO1xucHJpbnRNZSgpO1xucHJpbnRIZXIoKTtcblxuaW5zZXJ0RWxlbWVudCh7XG4gIGVsZW1lbnQ6ICdkaXYnLFxuICBjbGFzc05hbWU6ICdkaXYxJyxcbiAgY29udGVudDogJ+WIl+ihqOmhtScsXG59KTtcblxuLy8gY29uc29sZWUubG9nKCfov5nmmK/plJnor6/ku6PnoIEnKTsgICAvLyBpbmxpbmUtc291cmNlLW1hcOa1i+ivlVxuXG5hamF4KHtcbiAgdXJsOiAnL2FwaS9saXN0J1xufSk7XG5cbi8vIOeOr+Wig+WPmOmHj1xuY29uc29sZS5sb2coJy0tLVBST0RVQ1RJT046ICcsIFBST0RVQ1RJT04gPyAncHJvJyA6ICdkZXYnKTsgICAvLyBwcm9cbmNvbnNvbGUubG9nKHR5cGVvZiBQUk9EVUNUSU9OKTtcbmNvbnNvbGUubG9nKHR5cGVvZiBWRVJTSU9OKTtcbmNvbnNvbGUubG9nKHR5cGVvZiBCUk9XU0VSX1NVUFBPUlRTX0hUTUw1KTtcbmNvbnNvbGUubG9nKHR5cGVvZiBUV08pO1xuIiwiZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIGFqYXggKHtcbiAgdXJsLFxuICB0eXBlID0gJ2dldCcsXG4gIGFzeW5jID0gdHJ1ZSxcbiAgZGF0YSA9IHt9XG59ID0ge30pIHtcbiAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpIHx8IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAvLyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICB4aHIub3Blbih0eXBlLCB1cmwsIGFzeW5jKTtcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIC8vIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdodHRwIHJlc3BvbnNlOiAnLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBjb25zb2xlLmVycm9yKCdodHRwIHJlcXVlc3QgZXJyb3IuLi4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHhoci5zZW5kKCk7XG4gIC8vIH0pXG59XG5cbiIsIi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydEVsZW1lbnQoe1xuLy8gICBlbGVtZW50ID0gbnVsbCxcbi8vICAgY2xhc3NOYW1lID0gJycsXG4vLyAgIGNvbnRlbnQgPSAnJyxcbi8vICAgbnVtcyA9IDEsXG4vLyAgIHRhcmdldCA9IGRvY3VtZW50LmJvZHksXG4vLyB9ID0ge30pIHtcbi8vICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbi8vICAgZm9yIChsZXQgaT0wOyBpPG51bXM7IGkrKykge1xuLy8gICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4vLyAgICAgZWxlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbi8vICAgICBlbGUuaW5uZXJUZXh0ID0gIGNvbnRlbnQ7XG4vLyAgICAgZnJhZy5hcHBlbmRDaGlsZChlbGUpO1xuLy8gICB9XG4vLyAgIHRhcmdldC5hcHBlbmRDaGlsZChmcmFnKTtcbi8vIH1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcmludEhlciAoKSB7XG4gIGNvbnNvbGUubG9nKCdwcmludCBoZXIgbmFtZScpO1xufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gcHJpbnRNZSAoKSB7XG4gIGNvbnNvbGUubG9nKCdwcmludCBteSBuYW1lJyk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=