module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/articles/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: articles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articles\", function() { return articles; });\nconst articles = [{\n  \"type\": \"articles\",\n  \"id\": \"1\",\n  \"title\": \"JSON:API paints my bikeshed!\",\n  \"body\": \"The shortest article. Ever.\",\n  \"created\": \"2015-05-22T14:56:29.000Z\",\n  \"updated\": \"2015-05-22T14:56:28.000Z\",\n  \"relationships\": {\n    \"author\": {\n      \"data\": {\n        \"id\": \"42\",\n        \"type\": \"people\"\n      }\n    }\n  }\n}, {\n  \"type\": \"articles\",\n  \"id\": \"2\",\n  \"title\": \"JSON:API paints my bikeshed!\",\n  \"body\": \"The shortest article. Ever.\",\n  \"created\": \"2015-05-22T14:56:29.000Z\",\n  \"updated\": \"2015-05-22T14:56:28.000Z\",\n  \"relationships\": {\n    \"author\": {\n      \"data\": {\n        \"id\": \"42\",\n        \"type\": \"people\"\n      }\n    }\n  }\n}, {\n  \"type\": \"articles\",\n  \"id\": \"3\",\n  \"title\": \"JSON:API paints my bikeshed!\",\n  \"body\": \"The shortest article. Ever.\",\n  \"created\": \"2015-05-22T14:56:29.000Z\",\n  \"updated\": \"2015-05-22T14:56:28.000Z\",\n  \"relationships\": {\n    \"author\": {\n      \"data\": {\n        \"id\": \"42\",\n        \"type\": \"people\"\n      }\n    }\n  }\n}, {\n  \"type\": \"articles\",\n  \"id\": \"4\",\n  \"title\": \"JSON:API paints my bikeshed!\",\n  \"body\": \"The shortest article. Ever.\",\n  \"created\": \"2015-05-22T14:56:29.000Z\",\n  \"updated\": \"2015-05-22T14:56:28.000Z\",\n  \"relationships\": {\n    \"author\": {\n      \"data\": {\n        \"id\": \"42\",\n        \"type\": \"people\"\n      }\n    }\n  }\n}, {\n  \"type\": \"articles\",\n  \"id\": \"5\",\n  \"title\": \"JSON:API paints my bikeshed!\",\n  \"body\": \"The shortest article. Ever.\",\n  \"created\": \"2015-05-22T14:56:29.000Z\",\n  \"updated\": \"2015-05-22T14:56:28.000Z\",\n  \"relationships\": {\n    \"author\": {\n      \"data\": {\n        \"id\": \"42\",\n        \"type\": \"people\"\n      }\n    }\n  }\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLmpzPzg4NWEiXSwibmFtZXMiOlsiYXJ0aWNsZXMiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBTyxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUNyQixVQUFRLFVBRGE7QUFFckIsUUFBTSxHQUZlO0FBR25CLFdBQVMsOEJBSFU7QUFJbkIsVUFBUSw2QkFKVztBQUtuQixhQUFXLDBCQUxRO0FBTW5CLGFBQVcsMEJBTlE7QUFPckIsbUJBQWlCO0FBQ2YsY0FBVTtBQUNSLGNBQVE7QUFBQyxjQUFNLElBQVA7QUFBYSxnQkFBUTtBQUFyQjtBQURBO0FBREs7QUFQSSxDQUFELEVBY3RCO0FBQ0UsVUFBUSxVQURWO0FBRUUsUUFBTSxHQUZSO0FBR0ksV0FBUyw4QkFIYjtBQUlJLFVBQVEsNkJBSlo7QUFLSSxhQUFXLDBCQUxmO0FBTUksYUFBVywwQkFOZjtBQU9FLG1CQUFpQjtBQUNmLGNBQVU7QUFDUixjQUFRO0FBQUMsY0FBTSxJQUFQO0FBQWEsZ0JBQVE7QUFBckI7QUFEQTtBQURLO0FBUG5CLENBZHNCLEVBNEJyQjtBQUNDLFVBQVEsVUFEVDtBQUVDLFFBQU0sR0FGUDtBQUdHLFdBQVMsOEJBSFo7QUFJRyxVQUFRLDZCQUpYO0FBS0csYUFBVywwQkFMZDtBQU1HLGFBQVcsMEJBTmQ7QUFPQyxtQkFBaUI7QUFDZixjQUFVO0FBQ1IsY0FBUTtBQUFDLGNBQU0sSUFBUDtBQUFhLGdCQUFRO0FBQXJCO0FBREE7QUFESztBQVBsQixDQTVCcUIsRUF5Q3RCO0FBQ0UsVUFBUSxVQURWO0FBRUUsUUFBTSxHQUZSO0FBR0ksV0FBUyw4QkFIYjtBQUlJLFVBQVEsNkJBSlo7QUFLSSxhQUFXLDBCQUxmO0FBTUksYUFBVywwQkFOZjtBQU9FLG1CQUFpQjtBQUNmLGNBQVU7QUFDUixjQUFRO0FBQUMsY0FBTSxJQUFQO0FBQWEsZ0JBQVE7QUFBckI7QUFEQTtBQURLO0FBUG5CLENBekNzQixFQXVEckI7QUFDQyxVQUFRLFVBRFQ7QUFFQyxRQUFNLEdBRlA7QUFHRyxXQUFTLDhCQUhaO0FBSUcsVUFBUSw2QkFKWDtBQUtHLGFBQVcsMEJBTGQ7QUFNRyxhQUFXLDBCQU5kO0FBT0MsbUJBQWlCO0FBQ2YsY0FBVTtBQUNSLGNBQVE7QUFBQyxjQUFNLElBQVA7QUFBYSxnQkFBUTtBQUFyQjtBQURBO0FBREs7QUFQbEIsQ0F2RHFCLENBQWpCIiwiZmlsZSI6Ii4vZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGFydGljbGVzID0gW3tcbiAgICBcInR5cGVcIjogXCJhcnRpY2xlc1wiLFxuICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICBcInRpdGxlXCI6IFwiSlNPTjpBUEkgcGFpbnRzIG15IGJpa2VzaGVkIVwiLFxuICAgICAgXCJib2R5XCI6IFwiVGhlIHNob3J0ZXN0IGFydGljbGUuIEV2ZXIuXCIsXG4gICAgICBcImNyZWF0ZWRcIjogXCIyMDE1LTA1LTIyVDE0OjU2OjI5LjAwMFpcIixcbiAgICAgIFwidXBkYXRlZFwiOiBcIjIwMTUtMDUtMjJUMTQ6NTY6MjguMDAwWlwiLFxuICAgIFwicmVsYXRpb25zaGlwc1wiOiB7XG4gICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgIFwiZGF0YVwiOiB7XCJpZFwiOiBcIjQyXCIsIFwidHlwZVwiOiBcInBlb3BsZVwifVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB7XG4gICAgXCJ0eXBlXCI6IFwiYXJ0aWNsZXNcIixcbiAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkpTT046QVBJIHBhaW50cyBteSBiaWtlc2hlZCFcIixcbiAgICAgIFwiYm9keVwiOiBcIlRoZSBzaG9ydGVzdCBhcnRpY2xlLiBFdmVyLlwiLFxuICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxNS0wNS0yMlQxNDo1NjoyOS4wMDBaXCIsXG4gICAgICBcInVwZGF0ZWRcIjogXCIyMDE1LTA1LTIyVDE0OjU2OjI4LjAwMFpcIixcbiAgICBcInJlbGF0aW9uc2hpcHNcIjoge1xuICAgICAgXCJhdXRob3JcIjoge1xuICAgICAgICBcImRhdGFcIjoge1wiaWRcIjogXCI0MlwiLCBcInR5cGVcIjogXCJwZW9wbGVcIn1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFxuXHQgIFxuICAge1xuICAgIFwidHlwZVwiOiBcImFydGljbGVzXCIsXG4gICAgXCJpZFwiOiBcIjNcIixcbiAgICAgIFwidGl0bGVcIjogXCJKU09OOkFQSSBwYWludHMgbXkgYmlrZXNoZWQhXCIsXG4gICAgICBcImJvZHlcIjogXCJUaGUgc2hvcnRlc3QgYXJ0aWNsZS4gRXZlci5cIixcbiAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTUtMDUtMjJUMTQ6NTY6MjkuMDAwWlwiLFxuICAgICAgXCJ1cGRhdGVkXCI6IFwiMjAxNS0wNS0yMlQxNDo1NjoyOC4wMDBaXCIsXG4gICAgXCJyZWxhdGlvbnNoaXBzXCI6IHtcbiAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgXCJkYXRhXCI6IHtcImlkXCI6IFwiNDJcIiwgXCJ0eXBlXCI6IFwicGVvcGxlXCJ9XG4gICAgICB9XG4gICAgfVxuICAgfSxcbiAge1xuICAgIFwidHlwZVwiOiBcImFydGljbGVzXCIsXG4gICAgXCJpZFwiOiBcIjRcIixcbiAgICAgIFwidGl0bGVcIjogXCJKU09OOkFQSSBwYWludHMgbXkgYmlrZXNoZWQhXCIsXG4gICAgICBcImJvZHlcIjogXCJUaGUgc2hvcnRlc3QgYXJ0aWNsZS4gRXZlci5cIixcbiAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTUtMDUtMjJUMTQ6NTY6MjkuMDAwWlwiLFxuICAgICAgXCJ1cGRhdGVkXCI6IFwiMjAxNS0wNS0yMlQxNDo1NjoyOC4wMDBaXCIsXG4gICAgXCJyZWxhdGlvbnNoaXBzXCI6IHtcbiAgICAgIFwiYXV0aG9yXCI6IHtcbiAgICAgICAgXCJkYXRhXCI6IHtcImlkXCI6IFwiNDJcIiwgXCJ0eXBlXCI6IFwicGVvcGxlXCJ9XG4gICAgICB9XG4gICAgfVxuICAgfSxcdCAgXG5cbiAgIHtcbiAgICBcInR5cGVcIjogXCJhcnRpY2xlc1wiLFxuICAgIFwiaWRcIjogXCI1XCIsXG4gICAgICBcInRpdGxlXCI6IFwiSlNPTjpBUEkgcGFpbnRzIG15IGJpa2VzaGVkIVwiLFxuICAgICAgXCJib2R5XCI6IFwiVGhlIHNob3J0ZXN0IGFydGljbGUuIEV2ZXIuXCIsXG4gICAgICBcImNyZWF0ZWRcIjogXCIyMDE1LTA1LTIyVDE0OjU2OjI5LjAwMFpcIixcbiAgICAgIFwidXBkYXRlZFwiOiBcIjIwMTUtMDUtMjJUMTQ6NTY6MjguMDAwWlwiLFxuICAgIFwicmVsYXRpb25zaGlwc1wiOiB7XG4gICAgICBcImF1dGhvclwiOiB7XG4gICAgICAgIFwiZGF0YVwiOiB7XCJpZFwiOiBcIjQyXCIsIFwidHlwZVwiOiBcInBlb3BsZVwifVxuICAgICAgfVxuICAgIH1cbiAgIH1cdCAgICAgXG5dXG4gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data.js\n");

/***/ }),

/***/ "./pages/api/articles/[id].js":
/*!************************************!*\
  !*** ./pages/api/articles/[id].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ \"./data.js\");\n\nfunction handler({\n  query: {\n    id\n  }\n}, res) {\n  const filtered = _data__WEBPACK_IMPORTED_MODULE_0__[\"articles\"].filter(article => article.id === id);\n\n  if (filtered.length > 0) {\n    res.status(200).json(filtered[0]);\n  } else {\n    res.status(400).json({\n      message: `Article with the id of ${id} is not found`\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXJ0aWNsZXMvLmpzPzk4Y2UiXSwibmFtZXMiOlsiaGFuZGxlciIsInF1ZXJ5IiwiaWQiLCJyZXMiLCJmaWx0ZXJlZCIsImFydGljbGVzIiwiZmlsdGVyIiwiYXJ0aWNsZSIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUMsT0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFBVCxDQUFqQixFQUFtQ0MsR0FBbkMsRUFBd0M7QUFDdEQsUUFBTUMsUUFBUSxHQUFHQyw4Q0FBUSxDQUFDQyxNQUFULENBQWlCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0wsRUFBUixLQUFlQSxFQUE1QyxDQUFqQjs7QUFFQSxNQUFHRSxRQUFRLENBQUNJLE1BQVQsR0FBa0IsQ0FBckIsRUFBdUI7QUFDdEJMLE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTixRQUFRLENBQUMsQ0FBRCxDQUE3QjtBQUNBLEdBRkQsTUFFTTtBQUNMRCxPQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNwQkMsYUFBTyxFQUFHLDBCQUF5QlQsRUFBRztBQURsQixLQUFyQjtBQUdBO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXJ0aWNsZXMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFydGljbGVzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHsgcXVlcnk6IHsgaWQgfX0sIHJlcykge1xuXHRjb25zdCBmaWx0ZXJlZCA9IGFydGljbGVzLmZpbHRlcigoYXJ0aWNsZSkgPT4gYXJ0aWNsZS5pZCA9PT0gaWQpXG5cblx0aWYoZmlsdGVyZWQubGVuZ3RoID4gMCl7XG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oZmlsdGVyZWRbMF0pXG5cdH1lbHNlIHtcblx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7XG5cdFx0XHRtZXNzYWdlOiBgQXJ0aWNsZSB3aXRoIHRoZSBpZCBvZiAke2lkfSBpcyBub3QgZm91bmRgXG5cdFx0fSlcdFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/articles/[id].js\n");

/***/ })

/******/ });