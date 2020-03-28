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

/***/ "./src/pages/List/index.js":
/*!*********************************!*\
  !*** ./src/pages/List/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_insert_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/insert-element.js */ "./src/utils/insert-element.js");
/* harmony import */ var _utils_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ajax */ "./src/utils/ajax.js");


Object(_utils_insert_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  element: 'div',
  className: 'div1',
  content: '列表页'
}); // consolee.log('这是错误代码');   // inline-source-map测试

Object(_utils_ajax__WEBPACK_IMPORTED_MODULE_1__["default"])({
  url: '/api/list'
});

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return insertElement; });
function insertElement() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$element = _ref.element,
      element = _ref$element === void 0 ? null : _ref$element,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? '' : _ref$content,
      _ref$nums = _ref.nums,
      nums = _ref$nums === void 0 ? 1 : _ref$nums,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? document.body : _ref$target;

  var frag = document.createDocumentFragment();

  for (var i = 0; i < nums; i++) {
    var ele = document.createElement(element);
    ele.className = className;
    ele.innerText = content;
    frag.appendChild(ele);
  }

  target.appendChild(frag);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luc2VydC1lbGVtZW50LmpzIl0sIm5hbWVzIjpbImluc2VydEVsZW1lbnQiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udGVudCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiYXN5bmMiLCJkYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2VUZXh0IiwiZXJyb3IiLCJzZW5kIiwibnVtcyIsInRhcmdldCIsImRvY3VtZW50IiwiYm9keSIsImZyYWciLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaSIsImVsZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSx3RUFBYSxDQUFDO0FBQ1pDLFNBQU8sRUFBRSxLQURHO0FBRVpDLFdBQVMsRUFBRSxNQUZDO0FBR1pDLFNBQU8sRUFBRTtBQUhHLENBQUQsQ0FBYixDLENBTUE7O0FBRUFDLDJEQUFJLENBQUM7QUFDSEMsS0FBRyxFQUFFO0FBREYsQ0FBRCxDQUFKLEM7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBZ0IsU0FBU0QsSUFBVCxHQUtSO0FBQUEsaUZBQUosRUFBSTtBQUFBLE1BSk5DLEdBSU0sUUFKTkEsR0FJTTtBQUFBLHVCQUhOQyxJQUdNO0FBQUEsTUFITkEsSUFHTSwwQkFIQyxLQUdEO0FBQUEsd0JBRk5DLEtBRU07QUFBQSxNQUZOQSxLQUVNLDJCQUZFLElBRUY7QUFBQSx1QkFETkMsSUFDTTtBQUFBLE1BRE5BLElBQ00sMEJBREMsRUFDRDs7QUFDTixNQUFJQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixNQUF3QixJQUFJQyxhQUFKLENBQWtCLG1CQUFsQixDQUFsQyxDQURNLENBRU47O0FBQ0VGLEtBQUcsQ0FBQ0csSUFBSixDQUFTTixJQUFULEVBQWVELEdBQWYsRUFBb0JFLEtBQXBCOztBQUNBRSxLQUFHLENBQUNJLGtCQUFKLEdBQXlCLFlBQU07QUFDN0IsUUFBSUosR0FBRyxDQUFDSyxVQUFKLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFVBQUlMLEdBQUcsQ0FBQ00sTUFBSixJQUFjLEdBQWxCLEVBQXVCO0FBQ3JCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCUixHQUFHLENBQUNTLFlBQW5DO0FBQ0QsT0FIRCxNQUdPO0FBQ0w7QUFDQUYsZUFBTyxDQUFDRyxLQUFSLENBQWMsdUJBQWQ7QUFDRDtBQUNGO0FBQ0YsR0FWRDs7QUFXQVYsS0FBRyxDQUFDVyxJQUFKLEdBZkksQ0FnQk47QUFDRCxDOzs7Ozs7Ozs7Ozs7QUN0QkQ7QUFBQTtBQUFlLFNBQVNwQixhQUFULEdBTVA7QUFBQSxpRkFBSixFQUFJO0FBQUEsMEJBTE5DLE9BS007QUFBQSxNQUxOQSxPQUtNLDZCQUxJLElBS0o7QUFBQSw0QkFKTkMsU0FJTTtBQUFBLE1BSk5BLFNBSU0sK0JBSk0sRUFJTjtBQUFBLDBCQUhOQyxPQUdNO0FBQUEsTUFITkEsT0FHTSw2QkFISSxFQUdKO0FBQUEsdUJBRk5rQixJQUVNO0FBQUEsTUFGTkEsSUFFTSwwQkFGQyxDQUVEO0FBQUEseUJBRE5DLE1BQ007QUFBQSxNQUROQSxNQUNNLDRCQURHQyxRQUFRLENBQUNDLElBQ1o7O0FBQ04sTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLHNCQUFULEVBQWI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixJQUFwQixFQUEwQk0sQ0FBQyxFQUEzQixFQUErQjtBQUM3QixRQUFNQyxHQUFHLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QjVCLE9BQXZCLENBQVo7QUFDQTJCLE9BQUcsQ0FBQzFCLFNBQUosR0FBZ0JBLFNBQWhCO0FBQ0EwQixPQUFHLENBQUNFLFNBQUosR0FBaUIzQixPQUFqQjtBQUNBc0IsUUFBSSxDQUFDTSxXQUFMLENBQWlCSCxHQUFqQjtBQUNEOztBQUNETixRQUFNLENBQUNTLFdBQVAsQ0FBbUJOLElBQW5CO0FBQ0QsQyIsImZpbGUiOiJsaXN0LjU0MGIyNzIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbHN5LmNvbVwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9MaXN0L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGluc2VydEVsZW1lbnQgZnJvbSAnLi4vLi4vdXRpbHMvaW5zZXJ0LWVsZW1lbnQuanMnO1xuaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vdXRpbHMvYWpheCc7XG5cbmluc2VydEVsZW1lbnQoe1xuICBlbGVtZW50OiAnZGl2JyxcbiAgY2xhc3NOYW1lOiAnZGl2MScsXG4gIGNvbnRlbnQ6ICfliJfooajpobUnLFxufSk7XG5cbi8vIGNvbnNvbGVlLmxvZygn6L+Z5piv6ZSZ6K+v5Luj56CBJyk7ICAgLy8gaW5saW5lLXNvdXJjZS1tYXDmtYvor5VcblxuYWpheCh7XG4gIHVybDogJy9hcGkvbGlzdCdcbn0pOyIsImV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBhamF4ICh7XG4gIHVybCxcbiAgdHlwZSA9ICdnZXQnLFxuICBhc3luYyA9IHRydWUsXG4gIGRhdGEgPSB7fVxufSA9IHt9KSB7XG4gIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSB8fCBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB4aHIub3Blbih0eXBlLCB1cmwsIGFzeW5jKTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgLy8gcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnaHR0cCByZXNwb25zZTogJywgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8geGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignaHR0cCByZXF1ZXN0IGVycm9yLi4uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQoKTtcbiAgLy8gfSlcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zZXJ0RWxlbWVudCAoe1xuICBlbGVtZW50ID0gbnVsbCxcbiAgY2xhc3NOYW1lID0gJycsXG4gIGNvbnRlbnQgPSAnJyxcbiAgbnVtcyA9IDEsXG4gIHRhcmdldCA9IGRvY3VtZW50LmJvZHksXG59ID0ge30pIHtcbiAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zOyBpKyspIHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGVsZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZWxlLmlubmVyVGV4dCA9ICBjb250ZW50O1xuICAgIGZyYWcuYXBwZW5kQ2hpbGQoZWxlKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoZnJhZyk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=