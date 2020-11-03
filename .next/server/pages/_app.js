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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/App.js":
/*!*************************!*\
  !*** ./frontend/App.js ***!
  \*************************/
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
/* harmony import */ var _containers_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/Loading */ "./frontend/containers/Loading/index.js");
/* harmony import */ var _containers_Landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/Landing */ "./frontend/containers/Landing/index.js");
/* harmony import */ var _containers_SidePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/SidePanel */ "./frontend/containers/SidePanel/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth */ "./frontend/services/auth.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux/actions */ "./frontend/redux/actions.js");


var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\App.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex'
  }
});

const App = ({
  Component,
  pageProps,
  uid,
  updateUserLoginState
}) => {
  const {
    0: initialRender,
    1: setInitialRender
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_7__["isLoggedIn"])().then(results => {
      updateUserLoginState(results);
      setInitialRender(false);
    }).catch(err => {
      console.log(err);
      setInitialRender(false);
    });
  }, []);
  if (initialRender) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);

  if (uid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_SidePanel__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_Landing__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 16
    }, undefined);
  }
};

const mapStateToProps = ({
  loading,
  uid
}) => ({
  loading,
  uid
});

const mapDispatchToProps = {
  updateUserLoginState: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateUserLoginState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./frontend/containers/Landing/ForgotPassword.js":
/*!*******************************************************!*\
  !*** ./frontend/containers/Landing/ForgotPassword.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./frontend/redux/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Landing\\ForgotPassword.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  field: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    width: '70%',
    marginTop: 10,
    marginBottom: 10
  },
  actionFieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20
  },
  actionField: {
    color: 'blue',
    marginTop: 5,
    marginBottom: 5,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  errorMsg: {
    color: 'red'
  }
});

const ForgotPassword = ({
  updateLandingState
}) => {
  const classes = useStyles();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleForgotPassword = e => {
    if (!email.length) return setErrorMsg('Please enter email!');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.field,
      label: "Email*",
      variant: "outlined",
      onChange: e => setEmail(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.button,
      variant: "contained",
      color: "primary",
      onClick: handleForgotPassword,
      children: "Retrieve Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.actionFieldContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.errorMsg,
        children: errorMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.actionField,
        onClick: () => updateLandingState('Sign In'),
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.actionField,
        onClick: () => updateLandingState('Sign Up'),
        children: "Create an account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, undefined);
};

const mapDispatchToProps = {
  updateLandingState: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["updateLandingState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(ForgotPassword));

/***/ }),

/***/ "./frontend/containers/Landing/Logo.js":
/*!*********************************************!*\
  !*** ./frontend/containers/Landing/Logo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Landing\\Logo.js";
 // import money from '../../picSrc/money.png';

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    height: 110,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 60,
    width: 60
  }
});

const Logo = () => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./frontend/containers/Landing/SignIn.js":
/*!***********************************************!*\
  !*** ./frontend/containers/Landing/SignIn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth */ "./frontend/services/auth.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions */ "./frontend/redux/actions.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Landing\\SignIn.js";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  field: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    width: '70%',
    marginTop: 10,
    marginBottom: 10
  },
  actionFieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20
  },
  actionField: {
    color: 'blue',
    marginTop: 5,
    marginBottom: 5,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  errorMsg: {
    color: 'red'
  }
});

const SignIn = ({
  loading,
  updateLoading,
  updateLandingState,
  updateUserLoginState
}) => {
  const classes = useStyles();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleSignIn = e => {
    if (!email.length || !password.length) return setErrorMsg('Please enter both email and password!');
    if (loading) return;
    updateLoading(true);
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_7__["signIn"])(email, password).then(results => {
      updateLoading(false);
      updateUserLoginState(results);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }).catch(err => {
      console.log(err);
      updateLoading(false);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.field,
      label: "Email*",
      variant: "outlined",
      onChange: e => setEmail(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.field,
      label: "Password*",
      variant: "outlined",
      onChange: e => setPassword(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.button,
      variant: "contained",
      color: "primary",
      onClick: handleSignIn,
      children: "Sign In"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.actionFieldContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.errorMsg,
        children: errorMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.actionField,
        onClick: () => updateLandingState('Sign Up'),
        children: "Don't have an account?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.actionField,
        onClick: () => updateLandingState('Forgot Password'),
        children: "Forgot password?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }, undefined);
};

const mapStateToProps = ({
  loading
}) => ({
  loading
});

const mapDispatchToProps = {
  updateLoading: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateLoading"],
  updateLandingState: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateLandingState"],
  updateUserLoginState: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateUserLoginState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(SignIn));

/***/ }),

/***/ "./frontend/containers/Landing/SignUp.js":
/*!***********************************************!*\
  !*** ./frontend/containers/Landing/SignUp.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions */ "./frontend/redux/actions.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth */ "./frontend/services/auth.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Landing\\SignUp.js";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  field: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    width: '70%',
    marginTop: 10,
    marginBottom: 10
  },
  actionFieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20
  },
  actionField: {
    color: 'blue',
    marginTop: 5,
    marginBottom: 5,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  errorMsg: {
    color: 'red'
  }
});

const SignUp = ({
  loading,
  updateLandingState,
  updateUserLoginState
}) => {
  const classes = useStyles();
  const {
    0: firstName,
    1: setFirstName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: lastName,
    1: setLastName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: errorMsg,
    1: setErrorMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleSignUp = e => {
    if (!firstName.length || !lastName.length || !email.length || !password.length) return setErrorMsg('Please enter all the fields!');
    if (loading) return;
    Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateLoading"])(true);
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_9__["signUp"])(firstName, lastName, email, password).then(results => {
      updateUserLoginState(results);
      Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateLoading"])(false);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }).catch(err => {
      console.log(err);
      Object(_redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateLoading"])(false);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.field,
      label: "First Name*",
      variant: "outlined",
      onChange: e => setFirstName(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.field,
      label: "Last Name*",
      variant: "outlined",
      onChange: e => setLastName(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.field,
      label: "Email*",
      variant: "outlined",
      onChange: e => setEmail(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.field,
      label: "Password*",
      variant: "outlined",
      type: "password",
      onChange: e => setPassword(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.button,
      variant: "contained",
      color: "primary",
      onClick: handleSignUp,
      children: "Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.actionFieldContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.errorMsg,
        children: errorMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.actionField,
        onClick: () => updateLandingState('Sign In'),
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, undefined);
};

const mapStateToProps = ({
  loading
}) => ({
  loading
});

const mapDispatchToProps = {
  updateLandingState: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateLandingState"],
  updateUserLoginState: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateUserLoginState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(SignUp));

/***/ }),

/***/ "./frontend/containers/Landing/index.js":
/*!**********************************************!*\
  !*** ./frontend/containers/Landing/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./frontend/containers/Landing/Logo.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignIn */ "./frontend/containers/Landing/SignIn.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUp */ "./frontend/containers/Landing/SignUp.js");
/* harmony import */ var _ForgotPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ForgotPassword */ "./frontend/containers/Landing/ForgotPassword.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Landing\\index.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(rgba(250,0,0,0.5),transparent)',
    backgroundColor: '#115bf0'
  },
  loginContainer: {
    width: 300
  }
});
const landingStates = {
  'Sign In': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignIn__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 16
  }, undefined),
  'Sign Up': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 16
  }, undefined),
  'Forgot Password': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 24
  }, undefined)
};

const Login = ({
  landingState
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.loginContainer // elevation={24}    
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), landingStates[landingState]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};

const mapStateToProps = ({
  landingState
}) => ({
  landingState
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Login));

/***/ }),

/***/ "./frontend/containers/Loading/index.js":
/*!**********************************************!*\
  !*** ./frontend/containers/Loading/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Loading\\index.js";


const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'fixed',
    zIndex: 10
  },
  loading: {}
});

const Loading = ({
  loading
}) => {
  if (!loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: "Loading"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

const mapStateToProps = ({
  loading
}) => ({
  loading
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Loading));

/***/ }),

/***/ "./frontend/containers/SidePanel/index.js":
/*!************************************************!*\
  !*** ./frontend/containers/SidePanel/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\SidePanel\\index.js";


const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    height: '100%',
    width: '30%',
    backgroundColor: 'red'
  }
});

const SidePanel = ({}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: "SidePanel"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

const mapStateToProps = ({}) => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(SidePanel));

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

/***/ "./frontend/redux/reducer.js":
/*!***********************************!*\
  !*** ./frontend/redux/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ "./frontend/redux/action-types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  landingState: 'Sign In',
  loading: false
};

const mainReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LANDING_STATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        landingState: action.state
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_LOGIN_STATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        uid: action.uid
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_INFO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        firstName: action.info.firstname,
        lastName: action.info.lastname,
        portfolioValue: action.info.portfoliovalue
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (mainReducer);

/***/ }),

/***/ "./frontend/redux/store.js":
/*!*********************************!*\
  !*** ./frontend/redux/store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./frontend/redux/reducer.js");



const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])());
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./frontend/services/auth.js":
/*!***********************************!*\
  !*** ./frontend/services/auth.js ***!
  \***********************************/
/*! exports provided: isLoggedIn, signIn, signUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./frontend/services/path.js");


const authPath = _path__WEBPACK_IMPORTED_MODULE_1__["default"] + 'auth';
const isLoggedIn = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${authPath}`).then(results => results.data.uid).catch(err => console.log(err));
const signIn = (email, password) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${authPath}/signin`, {
  email,
  password
}).then(results => results.data.uid).catch(err => console.log(err));
const signUp = (firstName, lastName, email, password) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${authPath}/signup`, {
  firstName,
  lastName,
  email,
  password
}).then(results => results.data.uid).catch(err => console.log(err));

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _frontend_redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../frontend/redux/store */ "./frontend/redux/store.js");
/* harmony import */ var _frontend_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../frontend/App */ "./frontend/App.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\pages\\_app.js";







function Main(props) {
  const {
    Component,
    pageProps
  } = props;
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        className: "jsx-3940230593",
        children: "Stoink Sims"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width",
        className: "jsx-3940230593"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3940230593",
      children: "html,body{height:100%;width:100%;margin:0px;}body>div:first-child{height:100%;width:100%;margin:0px;min-width:800px;overflow:auto;position:relative;font-family:-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ3hsaXp5XFxEZXNrdG9wXFxqYXZhc2NyaXB0XFxzdG9pbmtzaW1zXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmlCLEFBSXFDLEFBTUEsWUFMRCxBQU1BLFdBTEEsQUFNQSxXQUxmLEFBTW9CLGdCQUNGLGNBQ0ksa0JBQ3lOLHlPQUMvTyIsImZpbGUiOiJDOlxcVXNlcnNcXGd4bGl6eVxcRGVza3RvcFxcamF2YXNjcmlwdFxcc3RvaW5rc2ltc1xccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2Zyb250ZW5kL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IEFwcCBmcm9tICcuLi9mcm9udGVuZC9BcHAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbihwcm9wcykge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgICAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICAgICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICAgICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+U3RvaW5rIFNpbXM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBodG1sLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxGaXJhIFNhbnMsVWJ1bnR1LE94eWdlbixPeHlnZW4gU2FucyxDYW50YXJlbGwsRHJvaWQgU2FucyxBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2wsTHVjaWRhIEdyYW5kZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxBcHAgQ29tcG9uZW50PXtDb21wb25lbnR9IHBhZ2VQcm9wcz17cGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbk1haW4ucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICAgIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\gxlizy\\\\Desktop\\\\javascript\\\\stoinksims\\\\pages\\\\_app.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: _frontend_redux_store__WEBPACK_IMPORTED_MODULE_6__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_frontend_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
        Component: Component,
        pageProps: pageProps
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}
Main.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvQXBwLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbnRhaW5lcnMvTGFuZGluZy9Gb3Jnb3RQYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb250YWluZXJzL0xhbmRpbmcvTG9nby5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb250YWluZXJzL0xhbmRpbmcvU2lnbkluLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbnRhaW5lcnMvTGFuZGluZy9TaWduVXAuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29udGFpbmVycy9MYW5kaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbnRhaW5lcnMvTG9hZGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb250YWluZXJzL1NpZGVQYW5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1eC9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3NlcnZpY2VzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2VydmljZXMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidWlkIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJpbml0aWFsUmVuZGVyIiwic2V0SW5pdGlhbFJlbmRlciIsInVzZVN0YXRlIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwicmVzdWx0cyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsImxvYWRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJmaWVsZCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImJ1dHRvbiIsImFjdGlvbkZpZWxkQ29udGFpbmVyIiwiYWN0aW9uRmllbGQiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIiwiZXJyb3JNc2ciLCJGb3Jnb3RQYXNzd29yZCIsInVwZGF0ZUxhbmRpbmdTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJzZXRFcnJvck1zZyIsImhhbmRsZUZvcmdvdFBhc3N3b3JkIiwiZSIsImxlbmd0aCIsInRhcmdldCIsInZhbHVlIiwianVzdGlmeUNvbnRlbnQiLCJsb2dvIiwiTG9nbyIsIlNpZ25JbiIsInVwZGF0ZUxvYWRpbmciLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU2lnbkluIiwic2lnbkluIiwiUm91dGVyIiwicHVzaCIsIlNpZ25VcCIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJoYW5kbGVTaWduVXAiLCJzaWduVXAiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwibG9naW5Db250YWluZXIiLCJsYW5kaW5nU3RhdGVzIiwiTG9naW4iLCJsYW5kaW5nU3RhdGUiLCJvcGFjaXR5IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJMb2FkaW5nIiwiU2lkZVBhbmVsIiwiVVBEQVRFX0xPQURJTkciLCJVUERBVEVfTEFORElOR19TVEFURSIsIlVQREFURV9VU0VSX0xPR0lOX1NUQVRFIiwiVVBEQVRFX1VTRVJfSU5GTyIsInR5cGUiLCJ0eXBlcyIsInN0YXRlIiwidXBkYXRlVXNlckluZm8iLCJpbmZvIiwiaW5pdGlhbFN0YXRlIiwibWFpblJlZHVjZXIiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJhY3Rpb24iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInBvcnRmb2xpb1ZhbHVlIiwicG9ydGZvbGlvdmFsdWUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXV0aFBhdGgiLCJwYXRoIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwicG9zdCIsIk1haW4iLCJwcm9wcyIsIlJlYWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHNFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxVQUFNLEVBQUUsTUFETjtBQUVGQyxTQUFLLEVBQUUsTUFGTDtBQUdGQyxXQUFPLEVBQUU7QUFIUDtBQURtQixDQUFELENBQTVCOztBQVFBLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQ1RDLFdBRFM7QUFFVEMsV0FGUztBQUdUQyxLQUhTO0FBSVRDO0FBSlMsQ0FBRCxLQUtOO0FBQ0YsUUFB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NkcsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEcEI7QUFFYjlHLFdBQVMsRUFBRTRHLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJEO0FBRmYsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREEscUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7XG4gICAgdXNlRWZmZWN0LCBcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vY29udGFpbmVycy9Mb2FkaW5nJztcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vY29udGFpbmVycy9MYW5kaW5nJztcbmltcG9ydCBTaWRlUGFuZWwgZnJvbSAnLi9jb250YWluZXJzL1NpZGVQYW5lbCc7XG5pbXBvcnQgeyBpc0xvZ2dlZEluIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoJztcbmltcG9ydCB7IHVwZGF0ZVVzZXJMb2dpblN0YXRlIH0gZnJvbSAnLi9yZWR1eC9hY3Rpb25zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH1cbn0pO1xuXG5jb25zdCBBcHAgPSAoe1xuICAgIENvbXBvbmVudCxcbiAgICBwYWdlUHJvcHMsXG4gICAgdWlkLFxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxufSkgPT4ge1xuICAgIGNvbnN0IFtpbml0aWFsUmVuZGVyLCBzZXRJbml0aWFsUmVuZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTG9nZ2VkSW4oKVxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlKHJlc3VsdHMpO1xuICAgICAgICAgICAgc2V0SW5pdGlhbFJlbmRlcihmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgIH0sIFtdKTtcblxuICAgIGlmIChpbml0aWFsUmVuZGVyKSByZXR1cm4gPD48Lz47XG4gICAgXG4gICAgaWYgKHVpZCkge1xuICAgICAgICByZXR1cm4gKCAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgIDxTaWRlUGFuZWwvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxMYW5kaW5nLz5cbiAgICB9XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xuICAgIGxvYWRpbmcsXG4gICAgdWlkLFxufSkgPT4gKHtcbiAgICBsb2FkaW5nLFxuICAgIHVpZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQge1xyXG4gICAgdXBkYXRlTGFuZGluZ1N0YXRlLFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgICB3aWR0aDogJzcwJScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAxMCxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZpZWxkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uRmllbGQ6IHtcclxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogNSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDUsXHJcblxyXG4gICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvck1zZzoge1xyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IEZvcmdvdFBhc3N3b3JkID0gKHtcclxuICAgIHVwZGF0ZUxhbmRpbmdTdGF0ZSxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3Jnb3RQYXNzd29yZCA9IGUgPT4ge1xyXG4gICAgICAgIGlmICghZW1haWwubGVuZ3RoKSByZXR1cm4gc2V0RXJyb3JNc2coJ1BsZWFzZSBlbnRlciBlbWFpbCEnKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsKidcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGb3Jnb3RQYXNzd29yZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmV0cmlldmUgUGFzc3dvcmRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkZpZWxkQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yTXNnfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNc2d9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUxhbmRpbmdTdGF0ZSgnU2lnbiBJbicpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlTGFuZGluZ1N0YXRlKCdTaWduIFVwJyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGFuIGFjY291bnRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICB1cGRhdGVMYW5kaW5nU3RhdGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoRm9yZ290UGFzc3dvcmQpOyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuLy8gaW1wb3J0IG1vbmV5IGZyb20gJy4uLy4uL3BpY1NyYy9tb25leS5wbmcnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGxvZ286IHtcclxuICAgICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICAgIHdpZHRoOiA2MCxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICB7LyogPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxyXG4gICAgICAgICAgICAgICAgc3JjPXttb25leX0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9J2xvZ28nXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoJztcclxuaW1wb3J0IHtcclxuICAgIHVwZGF0ZUxvYWRpbmcsXHJcbiAgICB1cGRhdGVMYW5kaW5nU3RhdGUsXHJcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcclxufSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBmaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25GaWVsZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZpZWxkOiB7XHJcbiAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDUsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiA1LFxyXG5cclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3JNc2c6IHtcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBTaWduSW4gPSAoe1xyXG4gICAgbG9hZGluZyxcclxuICAgIHVwZGF0ZUxvYWRpbmcsXHJcbiAgICB1cGRhdGVMYW5kaW5nU3RhdGUsXHJcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ25JbiA9IGUgPT4ge1xyXG4gICAgICAgIGlmICghZW1haWwubGVuZ3RoIHx8ICFwYXNzd29yZC5sZW5ndGgpIHJldHVybiBzZXRFcnJvck1zZygnUGxlYXNlIGVudGVyIGJvdGggZW1haWwgYW5kIHBhc3N3b3JkIScpO1xyXG5cclxuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHVwZGF0ZUxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2lnbkluKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmllbGR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwqJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWVsZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSdQYXNzd29yZConXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbklufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTaWduIEluXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25GaWVsZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvck1zZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTXNnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25GaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVMYW5kaW5nU3RhdGUoJ1NpZ24gVXAnKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUxhbmRpbmdTdGF0ZSgnRm9yZ290IFBhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7bG9hZGluZ30pID0+ICh7bG9hZGluZ30pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgdXBkYXRlTG9hZGluZyxcclxuICAgIHVwZGF0ZUxhbmRpbmdTdGF0ZSxcclxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lnbkluKTsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7XHJcbiAgICB1cGRhdGVMYW5kaW5nU3RhdGUsXHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNpZ25VcCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGZpZWxkOiB7XHJcbiAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgICB3aWR0aDogJzcwJScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAxMCxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZpZWxkQ29udGFpbmVyOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZpZWxkOiB7XHJcbiAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDUsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiA1LFxyXG5cclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3JNc2c6IHtcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBTaWduVXAgPSAoe1xyXG4gICAgbG9hZGluZyxcclxuICAgIHVwZGF0ZUxhbmRpbmdTdGF0ZSxcclxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lnblVwID0gZSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdE5hbWUubGVuZ3RoIHx8ICFsYXN0TmFtZS5sZW5ndGggfHwgIWVtYWlsLmxlbmd0aCB8fCAhcGFzc3dvcmQubGVuZ3RoKSByZXR1cm4gc2V0RXJyb3JNc2coJ1BsZWFzZSBlbnRlciBhbGwgdGhlIGZpZWxkcyEnKTtcclxuXHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdXBkYXRlTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgc2lnblVwKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlVXNlckxvZ2luU3RhdGUocmVzdWx0cyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmllbGR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nRmlyc3QgTmFtZSonXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWVsZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSdMYXN0IE5hbWUqJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWVsZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbConXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J1Bhc3N3b3JkKidcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uRmllbGRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JNc2d9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvck1zZ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlTGFuZGluZ1N0YXRlKCdTaWduIEluJyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7bG9hZGluZ30pID0+ICh7bG9hZGluZ30pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgdXBkYXRlTGFuZGluZ1N0YXRlLFxyXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWduVXApOyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJztcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuL1NpZ25Jbic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9TaWduVXAnO1xyXG5pbXBvcnQgRm9yZ290UGFzc3dvcmQgZnJvbSAnLi9Gb3Jnb3RQYXNzd29yZCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudChyZ2JhKDI1MCwwLDAsMC41KSx0cmFuc3BhcmVudCknLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxMTViZjAnLFxyXG4gICAgfSxcclxuICAgIGxvZ2luQ29udGFpbmVyOiB7XHJcbiAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBsYW5kaW5nU3RhdGVzID0ge1xyXG4gICAgJ1NpZ24gSW4nOiA8U2lnbkluLz4sXHJcbiAgICAnU2lnbiBVcCc6IDxTaWduVXAvPixcclxuICAgICdGb3Jnb3QgUGFzc3dvcmQnOiA8Rm9yZ290UGFzc3dvcmQvPixcclxufTtcclxuXHJcbmNvbnN0IExvZ2luID0gKHtcclxuICAgIGxhbmRpbmdTdGF0ZSxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ2luQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxldmF0aW9uPXsyNH0gICAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMb2dvLz5cclxuICAgICAgICAgICAgICAgIHtsYW5kaW5nU3RhdGVzW2xhbmRpbmdTdGF0ZV19XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtsYW5kaW5nU3RhdGV9KSA9PiAoe2xhbmRpbmdTdGF0ZX0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExvZ2luKTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgekluZGV4OiAxMCxcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nOiB7XHJcblxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBMb2FkaW5nID0gKHtsb2FkaW5nfSkgPT4ge1xyXG4gICAgaWYgKCFsb2FkaW5nKSByZXR1cm4gPD48Lz47XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICBMb2FkaW5nXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgbG9hZGluZyB9KSA9PiAoeyBsb2FkaW5nIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExvYWRpbmcpOyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMzAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBTaWRlUGFuZWwgPSAoe1xyXG5cclxufSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIFNpZGVQYW5lbFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7fSkgPT4gKHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlUGFuZWwpOyIsImV4cG9ydCBjb25zdCBVUERBVEVfTE9BRElORyA9ICdVUERBVEVfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTEFORElOR19TVEFURSA9ICdVUERBVEVfTEFORElOR19TVEFURSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9MT0dJTl9TVEFURSA9ICdVUERBVEVfVVNFUl9MT0dJTl9TVEFURSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUl9JTkZPID0gJ1VQREFURV9VU0VSX0lORk8nOyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uLXR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMb2FkaW5nID0gbG9hZGluZyA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX0xPQURJTkcsXHJcbiAgICBsb2FkaW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMYW5kaW5nU3RhdGUgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX0xBTkRJTkdfU1RBVEUsXHJcbiAgICBzdGF0ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckxvZ2luU3RhdGUgPSB1aWQgPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9VU0VSX0xPR0lOX1NUQVRFLFxyXG4gICAgdWlkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VySW5mbyA9IGluZm8gPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9VU0VSX0lORk8sXHJcbiAgICBpbmZvLFxyXG59KTsiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvbi10eXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsYW5kaW5nU3RhdGU6ICdTaWduIEluJyxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgbWFpblJlZHVjZXIgPSAoc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGluaXRpYWxTdGF0ZSkpLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHR5cGVzLlVQREFURV9MT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBhY3Rpb24ubG9hZGluZyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfTEFORElOR19TVEFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbGFuZGluZ1N0YXRlOiBhY3Rpb24uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX1VTRVJfTE9HSU5fU1RBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVpZDogYWN0aW9uLnVpZCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSB0eXBlcy5VUERBVEVfVVNFUl9JTkZPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGFjdGlvbi5pbmZvLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBhY3Rpb24uaW5mby5sYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb1ZhbHVlOiBhY3Rpb24uaW5mby5wb3J0Zm9saW92YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpblJlZHVjZXIiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgcm9vdFJlZHVjZXIsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKCksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICcuL3BhdGgnO1xyXG5cclxuY29uc3QgYXV0aFBhdGggPSBwYXRoICsgJ2F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9nZ2VkSW4gPSAoKSA9PiAoXHJcbiAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYCR7YXV0aFBhdGh9YClcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHJlc3VsdHMuZGF0YS51aWQpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25JbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IChcclxuICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYCR7YXV0aFBhdGh9L3NpZ25pbmAsIHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHJlc3VsdHMuZGF0YS51aWQpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcCA9IChmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IChcclxuICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYCR7YXV0aFBhdGh9L3NpZ251cGAsIHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHJlc3VsdHMuZGF0YS51aWQpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4pOyIsIi8vIGNvbnN0IHBhdGggPSBgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfSE9TVH06JHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfUE9SVH0vJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQVBJX1ZFUlNJT059L2F1dGhgO1xyXG5jb25zdCBwYXRoID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhdGg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9mcm9udGVuZC9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vZnJvbnRlbmQvQXBwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4ocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICAgICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG4gICAgICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAgICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlN0b2luayBTaW1zPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCxcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib2R5ID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsRmlyYSBTYW5zLFVidW50dSxPeHlnZW4sT3h5Z2VuIFNhbnMsQ2FudGFyZWxsLERyb2lkIFNhbnMsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sLEx1Y2lkYSBHcmFuZGUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8QXBwIENvbXBvbmVudD17Q29tcG9uZW50fSBwYWdlUHJvcHM9e3BhZ2VQcm9wc30vPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5NYWluLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=