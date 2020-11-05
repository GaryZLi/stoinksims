module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/containers/Home/index.js":
/*!*******************************************!*\
  !*** ./frontend/containers/Home/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user */ "./frontend/services/user.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./frontend/redux/actions.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Home\\index.js";





const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    backgroundColor: 'blue'
  }
});

const Home = ({
  uid,
  firstName,
  lastName,
  updateLoading,
  updateUserInfo
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
      },
      children: uid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};

const mapStateToProps = ({
  uid,
  firstName,
  lastName
}) => ({
  uid,
  firstName,
  lastName
});

const mapDispatchToProps = {
  updateLoading: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["updateLoading"],
  updateUserInfo: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["updateUserInfo"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./frontend/redux/action-types.js":
/*!****************************************!*\
  !*** ./frontend/redux/action-types.js ***!
  \****************************************/
/*! exports provided: UPDATE_LOADING, UPDATE_LANDING_STATE, UPDATE_USER_LOGIN_STATE, UPDATE_USER_INFO, UPDATE_SEARCH_INPUT, UPDATE_SIDE_PANEL, UPDATE_STOCK_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOADING", function() { return UPDATE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_STATE", function() { return UPDATE_LANDING_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_LOGIN_STATE", function() { return UPDATE_USER_LOGIN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_INFO", function() { return UPDATE_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCH_INPUT", function() { return UPDATE_SEARCH_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SIDE_PANEL", function() { return UPDATE_SIDE_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STOCK_INFO", function() { return UPDATE_STOCK_INFO; });
const UPDATE_LOADING = 'UPDATE_LOADING';
const UPDATE_LANDING_STATE = 'UPDATE_LANDING_STATE';
const UPDATE_USER_LOGIN_STATE = 'UPDATE_USER_LOGIN_STATE';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
const UPDATE_SIDE_PANEL = 'UPDATE_SIDE_PANEL';
const UPDATE_STOCK_INFO = 'UPDATE_STOCK_INFO';

/***/ }),

/***/ "./frontend/redux/actions.js":
/*!***********************************!*\
  !*** ./frontend/redux/actions.js ***!
  \***********************************/
/*! exports provided: updateLoading, updateLandingState, updateUserLoginState, updateUserInfo, updateSearchInput, updateSidePanel, updateStockInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoading", function() { return updateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingState", function() { return updateLandingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserLoginState", function() { return updateUserLoginState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserInfo", function() { return updateUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchInput", function() { return updateSearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSidePanel", function() { return updateSidePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStockInfo", function() { return updateStockInfo; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./frontend/redux/action-types.js");

const updateLoading = loading => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LOADING"],
  loading
});
const updateLandingState = state => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LANDING_STATE"],
  state
});
const updateUserLoginState = uid => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_LOGIN_STATE"],
  uid
});
const updateUserInfo = info => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_INFO"],
  info
});
const updateSearchInput = ticker => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SEARCH_INPUT"],
  ticker
});
const updateSidePanel = opened => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SIDE_PANEL"],
  opened
});
const updateStockInfo = stockInfo => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STOCK_INFO"],
  stockInfo
});

/***/ }),

/***/ "./frontend/services/path.js":
/*!***********************************!*\
  !*** ./frontend/services/path.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const path = 'http://localhost:5000/api/v1/'; // '/api/v1/';

/* harmony default export */ __webpack_exports__["default"] = (path);

/***/ }),

/***/ "./frontend/services/user.js":
/*!***********************************!*\
  !*** ./frontend/services/user.js ***!
  \***********************************/
/*! exports provided: getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./frontend/services/path.js");


const userPath = _path__WEBPACK_IMPORTED_MODULE_1__["default"] + 'user';
const getUserInfo = uid => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${userPath}`, {
  uid
}).then(results => results.data).catch(err => {
  throw err;
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_containers_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frontend/containers/Home */ "./frontend/containers/Home/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_frontend_containers_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29udGFpbmVycy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHV4L2FjdGlvbi10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NlcnZpY2VzL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2VydmljZXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIb21lIiwidWlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1cGRhdGVMb2FkaW5nIiwidXBkYXRlVXNlckluZm8iLCJjbGFzc2VzIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsIlVQREFURV9MT0FESU5HIiwiVVBEQVRFX0xBTkRJTkdfU1RBVEUiLCJVUERBVEVfVVNFUl9MT0dJTl9TVEFURSIsIlVQREFURV9VU0VSX0lORk8iLCJVUERBVEVfU0VBUkNIX0lOUFVUIiwiVVBEQVRFX1NJREVfUEFORUwiLCJVUERBVEVfU1RPQ0tfSU5GTyIsImxvYWRpbmciLCJ0eXBlIiwidHlwZXMiLCJ1cGRhdGVMYW5kaW5nU3RhdGUiLCJzdGF0ZSIsInVwZGF0ZVVzZXJMb2dpblN0YXRlIiwiaW5mbyIsInVwZGF0ZVNlYXJjaElucHV0IiwidGlja2VyIiwidXBkYXRlU2lkZVBhbmVsIiwib3BlbmVkIiwidXBkYXRlU3RvY2tJbmZvIiwic3RvY2tJbmZvIiwicGF0aCIsInVzZXJQYXRoIiwiZ2V0VXNlckluZm8iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzdWx0cyIsImRhdGEiLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLE1BQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFVBQU0sRUFBRSxNQUROO0FBRUZDLFNBQUssRUFBRSxNQUZMO0FBR0ZDLFdBQU8sRUFB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Ozs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7QUFFZXZDLGdJQUFmLEU7Ozs7Ozs7Ozs7O0FDRkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcic7XHJcbmltcG9ydCB7IFxyXG4gICAgdXBkYXRlTG9hZGluZyxcclxuICAgIHVwZGF0ZVVzZXJJbmZvLFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcblxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoe1xyXG4gICAgdWlkLFxyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlVXNlckluZm8sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICB7dWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMzAsIHdpZHRoOiAzMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAge3VpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDMwLCB3aWR0aDogMzAsIGJhY2tncm91bmRDb2xvcjogJ3JlZCd9fT5cclxuICAgICAgICAgICAgICAgIHt1aWR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICB7dWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMzAsIHdpZHRoOiAzMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAge3VpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDMwLCB3aWR0aDogMzAsIGJhY2tncm91bmRDb2xvcjogJ3JlZCd9fT5cclxuICAgICAgICAgICAgICAgIHt1aWR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICB7dWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMzAsIHdpZHRoOiAzMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAge3VpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDMwLCB3aWR0aDogMzAsIGJhY2tncm91bmRDb2xvcjogJ3JlZCd9fT5cclxuICAgICAgICAgICAgICAgIHt1aWR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICB7dWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMzAsIHdpZHRoOiAzMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAge3VpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDMwLCB3aWR0aDogMzAsIGJhY2tncm91bmRDb2xvcjogJ3JlZCd9fT5cclxuICAgICAgICAgICAgICAgIHt1aWR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICB7dWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMzAsIHdpZHRoOiAzMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAge3VpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDMwLCB3aWR0aDogMzAsIGJhY2tncm91bmRDb2xvcjogJ3JlZCd9fT5cclxuICAgICAgICAgICAgICAgIHt1aWR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICB7dWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMzAsIHdpZHRoOiAzMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAge3VpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDMwLCB3aWR0aDogMzAsIGJhY2tncm91bmRDb2xvcjogJ3JlZCd9fT5cclxuICAgICAgICAgICAgICAgIHt1aWR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAzMCwgd2lkdGg6IDMwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XHJcbiAgICAgICAgICAgICAgICB7dWlkfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMzAsIHdpZHRoOiAzMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJ319PlxyXG4gICAgICAgICAgICAgICAge3VpZH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuICAgIHVpZCxcclxuICAgIGZpcnN0TmFtZSxcclxuICAgIGxhc3ROYW1lLFxyXG59KSA9PiAoe1xyXG4gICAgdWlkLFxyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgdXBkYXRlTG9hZGluZyxcclxuICAgIHVwZGF0ZVVzZXJJbmZvLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7IiwiZXhwb3J0IGNvbnN0IFVQREFURV9MT0FESU5HID0gJ1VQREFURV9MT0FESU5HJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1NUQVRFID0gJ1VQREFURV9MQU5ESU5HX1NUQVRFJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0xPR0lOX1NUQVRFID0gJ1VQREFURV9VU0VSX0xPR0lOX1NUQVRFJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0lORk8gPSAnVVBEQVRFX1VTRVJfSU5GTyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VBUkNIX0lOUFVUID0gJ1VQREFURV9TRUFSQ0hfSU5QVVQnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NJREVfUEFORUwgPSAnVVBEQVRFX1NJREVfUEFORUwnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NUT0NLX0lORk8gPSAnVVBEQVRFX1NUT0NLX0lORk8nOyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uLXR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMb2FkaW5nID0gbG9hZGluZyA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX0xPQURJTkcsXHJcbiAgICBsb2FkaW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMYW5kaW5nU3RhdGUgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX0xBTkRJTkdfU1RBVEUsXHJcbiAgICBzdGF0ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckxvZ2luU3RhdGUgPSB1aWQgPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9VU0VSX0xPR0lOX1NUQVRFLFxyXG4gICAgdWlkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VySW5mbyA9IGluZm8gPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9VU0VSX0lORk8sXHJcbiAgICBpbmZvLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTZWFyY2hJbnB1dCA9IHRpY2tlciA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX1NFQVJDSF9JTlBVVCxcclxuICAgIHRpY2tlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2lkZVBhbmVsID0gb3BlbmVkID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfU0lERV9QQU5FTCxcclxuICAgIG9wZW5lZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU3RvY2tJbmZvID0gc3RvY2tJbmZvID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfU1RPQ0tfSU5GTyxcclxuICAgIHN0b2NrSW5mbyxcclxufSk7XHJcbiIsImNvbnN0IHBhdGggPSBcclxuICAgICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxLydcclxuICAgIC8vICcvYXBpL3YxLyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGF0aDsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICcuL3BhdGgnO1xyXG5cclxuY29uc3QgdXNlclBhdGggPSBwYXRoICsgJ3VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gdWlkID0+IChcclxuICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYCR7dXNlclBhdGh9YCwge1xyXG4gICAgICAgICAgICB1aWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy5kYXRhKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSlcclxuKTsiLCJpbXBvcnQgSG9tZSBmcm9tICcuLi9mcm9udGVuZC9jb250YWluZXJzL0hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9