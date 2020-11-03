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
    width: '100%'
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
    children: uid
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
/*! exports provided: UPDATE_LOADING, UPDATE_LANDING_STATE, UPDATE_USER_LOGIN_STATE, UPDATE_USER_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOADING", function() { return UPDATE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LANDING_STATE", function() { return UPDATE_LANDING_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_LOGIN_STATE", function() { return UPDATE_USER_LOGIN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_INFO", function() { return UPDATE_USER_INFO; });
const UPDATE_LOADING = 'UPDATE_LOADING';
const UPDATE_LANDING_STATE = 'UPDATE_LANDING_STATE';
const UPDATE_USER_LOGIN_STATE = 'UPDATE_USER_LOGIN_STATE';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

/***/ }),

/***/ "./frontend/redux/actions.js":
/*!***********************************!*\
  !*** ./frontend/redux/actions.js ***!
  \***********************************/
/*! exports provided: updateLoading, updateLandingState, updateUserLoginState, updateUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLoading", function() { return updateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLandingState", function() { return updateLandingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserLoginState", function() { return updateUserLoginState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserInfo", function() { return updateUserInfo; });
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

/***/ }),

/***/ "./frontend/services/path.js":
/*!***********************************!*\
  !*** ./frontend/services/path.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const path = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_API_VERSION}/auth`;
const path = `http://localhost:5000/api/v1/`;
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
}).then(results => results.data).catch(err => console.log(err));

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
// import {
//     useEffect, 
//     useState,
// } from 'react';
// import Router from 'next/router';
// import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/styles';
// import Loading from '../frontend/containers/Loading';
 // import { isLoggedIn } from '../frontend/services/auth';
// import { updateUserLoginState } from '../frontend/redux/actions';
// const useStyles = makeStyles({
//     root: {
//         // height: '100%',
//         // width: '100%',
//         // minWidth: 800,
//         // overflow: 'auto',
//         // position: 'relative',
//         // fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
//     }
// });
// const Main = ({
//     uid,
//     updateUserLoginState,
// }) => {
//     const [initialRender, setInitialRender] = useState(true);    
//     const classes = useStyles();
//     useEffect(() => {
//         isLoggedIn()
//         .then(results => {
//             updateUserLoginState(results);
//             setInitialRender(false);
//         })
//         .catch(err => {
//             console.log(err);
//             setInitialRender(false);
//         });
//     }, []);
//     if (initialRender) return <></>;
//     if (uid) {
//         return (        
//             <div className={classes.root}>
//                 <Loading />
//             </div>
//         );
//     }
//     else {
//         // Router.push('/login');
//         return <></>
//     }
// };
// const mapStateToProps = ({
//     uid,
// }) => ({
//     uid,
// });
// const mapDispatchToProps = {
//     updateUserLoginState,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Main);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29udGFpbmVycy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHV4L2FjdGlvbi10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NlcnZpY2VzL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2VydmljZXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJoZWlnaHQiLCJ3aWR0aCIsIkhvbWUiLCJ1aWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVwZGF0ZUxvYWRpbmciLCJ1cGRhdGVVc2VySW5mbyIsImNsYXNzZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiVVBEQVRFX0xPQURJTkciLCJVUERBVEVfTEFORElOR19TVEFURSIsIlVQREFURV9VU0VSX0xPR0lOX1NUQVRFIiwiVVBEQVRFX1VTRVJfSU5GTyIsImxvYWRpbmciLCJ0eXBlIiwidHlwZXMiLCJ1cGRhdGVMYW5kaW5nU3RhdGUiLCJzdGF0ZSIsInVwZGF0ZVVzZXJMb2dpblN0YXRlIiwiaW5mbyIsInBhdGgiLCJ1c2VyUGF0aCIsImdldFVzZXJJbmZvIiwiYXhpb3MiLCJwb3N0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bUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQyxRQUFRLEdBQUdELDZDQUFJLEdBQUcsTUFBeEI7QUFFTyxNQUFNRSxXQUFXLEdBQUd0QixHQUFHLElBQzFCdUIsNENBQUssQ0FDQUMsSUFETCxDQUNXLEdBQUVILFFBQVMsRUFEdEIsRUFDeUI7QUFDakJyQjtBQURpQixDQUR6QixFQUlLeUIsSUFKTCxDQUlVQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsSUFKN0IsRUFLS0MsS0FMTCxDQUtXQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTGxCLENBREcsQzs7Ozs7Ozs7Ozs7O0FDTFA7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBR2U5QixnSUFBZixFOzs7Ozs7Ozs7OztBQ3hFQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgZ2V0VXNlckluZm8gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHsgXHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlVXNlckluZm8sXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBIb21lID0gKHtcclxuICAgIHVpZCxcclxuICAgIGZpcnN0TmFtZSxcclxuICAgIGxhc3ROYW1lLFxyXG4gICAgdXBkYXRlTG9hZGluZyxcclxuICAgIHVwZGF0ZVVzZXJJbmZvLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAge3VpZH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuICAgIHVpZCxcclxuICAgIGZpcnN0TmFtZSxcclxuICAgIGxhc3ROYW1lLFxyXG59KSA9PiAoe1xyXG4gICAgdWlkLFxyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgdXBkYXRlTG9hZGluZyxcclxuICAgIHVwZGF0ZVVzZXJJbmZvLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7IiwiZXhwb3J0IGNvbnN0IFVQREFURV9MT0FESU5HID0gJ1VQREFURV9MT0FESU5HJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9MQU5ESU5HX1NUQVRFID0gJ1VQREFURV9MQU5ESU5HX1NUQVRFJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0xPR0lOX1NUQVRFID0gJ1VQREFURV9VU0VSX0xPR0lOX1NUQVRFJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX0lORk8gPSAnVVBEQVRFX1VTRVJfSU5GTyc7IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9hY3Rpb24tdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxvYWRpbmcgPSBsb2FkaW5nID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfTE9BRElORyxcclxuICAgIGxvYWRpbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxhbmRpbmdTdGF0ZSA9IHN0YXRlID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfTEFORElOR19TVEFURSxcclxuICAgIHN0YXRlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyTG9naW5TdGF0ZSA9IHVpZCA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX1VTRVJfTE9HSU5fU1RBVEUsXHJcbiAgICB1aWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJJbmZvID0gaW5mbyA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX1VTRVJfSU5GTyxcclxuICAgIGluZm8sXHJcbn0pOyIsIi8vIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfSE9TVH06JHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfUE9SVH0vJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1ZFUlNJT059L2F1dGhgO1xyXG5jb25zdCBwYXRoID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhdGg7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHBhdGggZnJvbSAnLi9wYXRoJztcclxuXHJcbmNvbnN0IHVzZXJQYXRoID0gcGF0aCArICd1c2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IHVpZCA9PiAoXHJcbiAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGAke3VzZXJQYXRofWAsIHtcclxuICAgICAgICAgICAgdWlkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHJlc3VsdHMuZGF0YSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbik7IiwiLy8gaW1wb3J0IHtcclxuLy8gICAgIHVzZUVmZmVjdCwgXHJcbi8vICAgICB1c2VTdGF0ZSxcclxuLy8gfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2Zyb250ZW5kL2NvbnRhaW5lcnMvTG9hZGluZyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2Zyb250ZW5kL2NvbnRhaW5lcnMvSG9tZSc7XHJcbi8vIGltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICcuLi9mcm9udGVuZC9zZXJ2aWNlcy9hdXRoJztcclxuLy8gaW1wb3J0IHsgdXBkYXRlVXNlckxvZ2luU3RhdGUgfSBmcm9tICcuLi9mcm9udGVuZC9yZWR1eC9hY3Rpb25zJztcclxuXHJcbi8vIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4vLyAgICAgcm9vdDoge1xyXG4vLyAgICAgICAgIC8vIGhlaWdodDogJzEwMCUnLFxyXG4vLyAgICAgICAgIC8vIHdpZHRoOiAnMTAwJScsXHJcbi8vICAgICAgICAgLy8gbWluV2lkdGg6IDgwMCxcclxuLy8gICAgICAgICAvLyBvdmVyZmxvdzogJ2F1dG8nLFxyXG4vLyAgICAgICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4vLyAgICAgICAgIC8vIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLEhlbHZldGljYSBOZXVlLEZpcmEgU2FucyxVYnVudHUsT3h5Z2VuLE94eWdlbiBTYW5zLENhbnRhcmVsbCxEcm9pZCBTYW5zLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbCxMdWNpZGEgR3JhbmRlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJyxcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBNYWluID0gKHtcclxuLy8gICAgIHVpZCxcclxuLy8gICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxyXG4vLyB9KSA9PiB7XHJcbi8vICAgICBjb25zdCBbaW5pdGlhbFJlbmRlciwgc2V0SW5pdGlhbFJlbmRlcl0gPSB1c2VTdGF0ZSh0cnVlKTsgICAgXHJcbi8vICAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBpc0xvZ2dlZEluKClcclxuLy8gICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcclxuLy8gICAgICAgICAgICAgdXBkYXRlVXNlckxvZ2luU3RhdGUocmVzdWx0cyk7XHJcbi8vICAgICAgICAgICAgIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgICAgIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgIH0sIFtdKTtcclxuXHJcbi8vICAgICBpZiAoaW5pdGlhbFJlbmRlcikgcmV0dXJuIDw+PC8+O1xyXG5cclxuLy8gICAgIGlmICh1aWQpIHtcclxuLy8gICAgICAgICByZXR1cm4gKCAgICAgICAgXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4vLyAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgLy8gUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4vLyAgICAgICAgIHJldHVybiA8PjwvPlxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuLy8gICAgIHVpZCxcclxuLy8gfSkgPT4gKHtcclxuLy8gICAgIHVpZCxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbi8vICAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==