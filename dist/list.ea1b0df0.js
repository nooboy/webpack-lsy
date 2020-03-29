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
/* harmony import */ var _utils_insert_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/insert-element.js */ "./src/utils/insert-element.js");
/* harmony import */ var _utils_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/ajax */ "./src/utils/ajax.js");
/* harmony import */ var _utils_print_me_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/print-me.js */ "./src/utils/print-me.js");
/* harmony import */ var _utils_print_her__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/print-her */ "./src/utils/print-her.js");




Object(_utils_print_me_js__WEBPACK_IMPORTED_MODULE_2__["printMe"])();
Object(_utils_print_her__WEBPACK_IMPORTED_MODULE_3__["printHer"])();
Object(_utils_insert_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  element: 'div',
  className: 'div1',
  content: '列表页'
}); // consolee.log('这是错误代码');   // inline-source-map测试

Object(_utils_ajax__WEBPACK_IMPORTED_MODULE_1__["default"])({
  url: '/api/list'
});
var url = 'http://www.baidu.com';
console.log('---PRODUCTION: ',  true ? 'pro' : undefined);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luc2VydC1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9wcmludC1oZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ByaW50LW1lLmpzIl0sIm5hbWVzIjpbInByaW50TWUiLCJwcmludEhlciIsImluc2VydEVsZW1lbnQiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udGVudCIsImFqYXgiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiUFJPRFVDVElPTiIsInR5cGUiLCJhc3luYyIsImRhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImVycm9yIiwic2VuZCIsIm51bXMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImJvZHkiLCJmcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImkiLCJlbGUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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TSxDQUFDUyxXQUFQLENBQW1CTixJQUFuQjtBQUNELEM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBTyxTQUFTM0IsUUFBVCxHQUFxQjtBQUMxQk8sU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNGRDtBQUFBO0FBQU8sU0FBU1QsT0FBVCxHQUFvQjtBQUN6QlEsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNELEMiLCJmaWxlIjoibGlzdC5lYTFiMGRmMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xzeS5jb21cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvTGlzdC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBpbnNlcnRFbGVtZW50IGZyb20gJ0B1dGlscy9pbnNlcnQtZWxlbWVudC5qcyc7XG5pbXBvcnQgYWpheCBmcm9tICdAdXRpbHMvYWpheCc7XG5cbmltcG9ydCB7IHByaW50TWUgfSBmcm9tICdAdXRpbHMvcHJpbnQtbWUuanMnO1xuaW1wb3J0IHsgcHJpbnRIZXIgfSBmcm9tICdAdXRpbHMvcHJpbnQtaGVyJztcbnByaW50TWUoKTtcbnByaW50SGVyKCk7XG5cbmluc2VydEVsZW1lbnQoe1xuICBlbGVtZW50OiAnZGl2JyxcbiAgY2xhc3NOYW1lOiAnZGl2MScsXG4gIGNvbnRlbnQ6ICfliJfooajpobUnLFxufSk7XG5cbi8vIGNvbnNvbGVlLmxvZygn6L+Z5piv6ZSZ6K+v5Luj56CBJyk7ICAgLy8gaW5saW5lLXNvdXJjZS1tYXDmtYvor5VcblxuYWpheCh7XG4gIHVybDogJy9hcGkvbGlzdCdcbn0pO1xuXG5sZXQgdXJsID0gJ2h0dHA6Ly93d3cuYmFpZHUuY29tJztcbmNvbnNvbGUubG9nKCctLS1QUk9EVUNUSU9OOiAnLCBQUk9EVUNUSU9OID8gJ3BybycgOiAnZGV2Jyk7XG4iLCJleHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gYWpheCAoe1xuICB1cmwsXG4gIHR5cGUgPSAnZ2V0JyxcbiAgYXN5bmMgPSB0cnVlLFxuICBkYXRhID0ge31cbn0gPSB7fSkge1xuICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgfHwgbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gIC8vIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgeGhyLm9wZW4odHlwZSwgdXJsLCBhc3luYyk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIC8vIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2h0dHAgcmVzcG9uc2U6ICcsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHhoci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2h0dHAgcmVxdWVzdCBlcnJvci4uLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHhoci5zZW5kKCk7XG4gIC8vIH0pXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydEVsZW1lbnQgKHtcbiAgZWxlbWVudCA9IG51bGwsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBjb250ZW50ID0gJycsXG4gIG51bXMgPSAxLFxuICB0YXJnZXQgPSBkb2N1bWVudC5ib2R5LFxufSA9IHt9KSB7XG4gIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtczsgaSsrKSB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBlbGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGVsZS5pbm5lclRleHQgPSAgY29udGVudDtcbiAgICBmcmFnLmFwcGVuZENoaWxkKGVsZSk7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGZyYWcpO1xufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gcHJpbnRIZXIgKCkge1xuICBjb25zb2xlLmxvZygncHJpbnQgaGVyIG5hbWUnKTtcbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByaW50TWUgKCkge1xuICBjb25zb2xlLmxvZygncHJpbnQgbXkgbmFtZScpO1xufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==