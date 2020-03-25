// webpack打包后的文件 —— 分析：

(function(modules) { // webpackBootstrap
	var installedModules = {};      // The module cache
	function __webpack_require__(moduleId) {
		if(installedModules[moduleId]) {     // Check if module is in cache
			return installedModules[moduleId].exports;
		}
		var module = installedModules[moduleId] = {   // Create a new module (and put it into the cache)
			i: moduleId,
			l: false,
			exports: {}
		};
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Execute the module function
    module.l = true;  		// Flag the module as loaded
		return module.exports;
	}

	__webpack_require__.m = modules;  	// expose the modules object (__webpack_modules__)
	__webpack_require__.c = installedModules; 	// expose the module cache
	__webpack_require__.d = function(exports, name, getter) { 	// define getter function for harmony exports
		if(!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};

	__webpack_require__.r = function(exports) {   	// define __esModule on exports
		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};

	// create a fake namespace object
	// mode & 1: value is a module id, require it
	// mode & 2: merge all properties of value into the ns
	// mode & 4: return value when already ns object
	// mode & 8|1: behave like require
	__webpack_require__.t = function(value, mode) {
		if(mode & 1) value = __webpack_require__(value);
		if(mode & 8) return value;
		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		return ns;
	};

	// getDefaultExport function for compatibility with non-harmony modules
	__webpack_require__.n = function(module) {
		var getter = module && module.__esModule ?
			function getDefault() { return module['default']; } :
			function getModuleExports() { return module; };
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};

	// Object.prototype.hasOwnProperty.call
	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	__webpack_require__.p = ""; 	// __webpack_public_path__
	return __webpack_require__(__webpack_require__.s = "./src/index.js"); 	// Load entry module and return exports
})

({
  "./src/a.js":
  (function(module, exports) {    /*! no static exports found */
    eval("module.exports = 'this is file a';\n\n\n//# sourceURL=webpack:///./src/a.js?");
  }),

  "./src/index.js":
  (function(module, exports, __webpack_require__) {   /*! no static exports found */
    eval("console.log('src index file');\n\nlet a = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\nconsole.log('a: ', a);\n\n//# sourceURL=webpack:///./src/index.js?");
  })
});