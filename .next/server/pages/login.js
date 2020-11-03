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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login/index.js");
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./frontend/containers/Landing/Logo.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SignIn */ "./frontend/containers/Landing/SignIn.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignUp */ "./frontend/containers/Landing/SignUp.js");
/* harmony import */ var _ForgotPassword__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ForgotPassword */ "./frontend/containers/Landing/ForgotPassword.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth */ "./frontend/services/auth.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions */ "./frontend/redux/actions.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Landing\\index.js";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
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
  'Sign In': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignIn__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 16
  }, undefined),
  'Sign Up': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignUp__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 16
  }, undefined),
  'Forgot Password': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ForgotPassword__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 24
  }, undefined)
};

const Login = ({
  landingState,
  updateUserLoginState
}) => {
  const classes = useStyles();
  console.log('landing'); // useEffect(() => {
  //     isLoggedIn()
  //     .then(results => {
  //         updateUserLoginState(results);
  //         if (results) {
  //             Router.push('/')
  //         }
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.loginContainer // elevation={24}    
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), landingStates[landingState]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, undefined);
};

const mapStateToProps = ({
  landingState
}) => ({
  landingState
});

const mapDispatchToProps = {
  updateUserLoginState: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["updateUserLoginState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Login));

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

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_containers_Landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../frontend/containers/Landing */ "./frontend/containers/Landing/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_frontend_containers_Landing__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29udGFpbmVycy9MYW5kaW5nL0ZvcmdvdFBhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbnRhaW5lcnMvTGFuZGluZy9Mb2dvLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbnRhaW5lcnMvTGFuZGluZy9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29udGFpbmVycy9MYW5kaW5nL1NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb250YWluZXJzL0xhbmRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdXgvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2VydmljZXMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zZXJ2aWNlcy9wYXRoLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJmaWVsZCIsIndpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uIiwiYWN0aW9uRmllbGRDb250YWluZXIiLCJhY3Rpb25GaWVsZCIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJjdXJzb3IiLCJlcnJvck1zZyIsIkZvcmdvdFBhc3N3b3JkIiwidXBkYXRlTGFuZGluZ1N0YXRlIiwiY2xhc3NlcyIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInNldEVycm9yTXNnIiwiaGFuZGxlRm9yZ290UGFzc3dvcmQiLCJlIiwibGVuZ3RoIiwidGFyZ2V0IiwidmFsdWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0IiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJsb2dvIiwiTG9nbyIsIlNpZ25JbiIsImxvYWRpbmciLCJ1cGRhdGVMb2FkaW5nIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU2lnbkluIiwic2lnbkluIiwidGhlbiIsInJlc3VsdHMiLCJSb3V0ZXIiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWFwU3RhdGVUb1Byb3BzIiwiU2lnblVwIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImhhbmRsZVNpZ25VcCIsInNpZ25VcCIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsb2dpbkNvbnRhaW5lciIsImxhbmRpbmdTdGF0ZXMiLCJMb2dpbiIsImxhbmRpbmdTdGF0ZSIsIlVQREFURV9MT0FESU5HIiwiVVBEQVRFX0xBTkRJTkdfU1RBVEUiLCJVUERBVEVfVVNFUl9MT0dJTl9TVEFURSIsIlVQREFURV9VU0VSX0lORk8iLCJ0eXBlIiwidHlwZXMiLCJzdGF0ZSIsInVpZCIsInVwZGF0ZVVzZXJJbmZvIiwiaW5mbyIsImF1dGhQYXRoIiwicGF0aCIsImlzTG9nZ2VkSW4iLCJheGlvcyIsImdldCIsImRhdGEiLCJwb3N0IiwiTGFuZGluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsV0FBTyxFQUFFLE1BRFA7QUFFRkMsaUJBQWEsRUFBRSxRQUZiO0FBR0ZDLGNBQVUsRUFBRTtBQUhWLEdBRG1CO0FBTXpCQyxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFLEtBREo7QUFFSEMsYUFBUyxFQUFFLEVBRlI7QUFHSEMsZ0JBQVksRUFBRTtB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Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHtcclxuICAgIHVwZGF0ZUxhbmRpbmdTdGF0ZSxcclxufSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBmaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25GaWVsZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZpZWxkOiB7XHJcbiAgICAgICAgY29sb3I6ICdibHVlJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDUsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiA1LFxyXG5cclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXJyb3JNc2c6IHtcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9ICh7XHJcbiAgICB1cGRhdGVMYW5kaW5nU3RhdGUsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9yZ290UGFzc3dvcmQgPSBlID0+IHtcclxuICAgICAgICBpZiAoIWVtYWlsLmxlbmd0aCkgcmV0dXJuIHNldEVycm9yTXNnKCdQbGVhc2UgZW50ZXIgZW1haWwhJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWVsZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbConXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRm9yZ290UGFzc3dvcmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJldHJpZXZlIFBhc3N3b3JkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25GaWVsZENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvck1zZ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTXNnfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25GaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVMYW5kaW5nU3RhdGUoJ1NpZ24gSW4nKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTaWduIEluXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUxhbmRpbmdTdGF0ZSgnU2lnbiBVcCcpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhbiBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgdXBkYXRlTGFuZGluZ1N0YXRlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZvcmdvdFBhc3N3b3JkKTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbi8vIGltcG9ydCBtb25leSBmcm9tICcuLi8uLi9waWNTcmMvbW9uZXkucG5nJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGhlaWdodDogMTEwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgICB3aWR0aDogNjAsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgTG9nbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgey8qIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cclxuICAgICAgICAgICAgICAgIHNyYz17bW9uZXl9IFxyXG4gICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvOyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aCc7XHJcbmltcG9ydCB7XHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlTGFuZGluZ1N0YXRlLFxyXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgZmllbGQ6IHtcclxuICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAxMCxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIHdpZHRoOiAnNzAlJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uRmllbGRDb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25GaWVsZDoge1xyXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiA1LFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNSxcclxuXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yTXNnOiB7XHJcbiAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2lnbkluID0gKHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlTGFuZGluZ1N0YXRlLFxyXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTaWduSW4gPSBlID0+IHtcclxuICAgICAgICBpZiAoIWVtYWlsLmxlbmd0aCB8fCAhcGFzc3dvcmQubGVuZ3RoKSByZXR1cm4gc2V0RXJyb3JNc2coJ1BsZWFzZSBlbnRlciBib3RoIGVtYWlsIGFuZCBwYXNzd29yZCEnKTtcclxuXHJcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICB1cGRhdGVMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNpZ25JbihlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZShyZXN1bHRzKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB1cGRhdGVMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0VtYWlsKidcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmllbGR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nUGFzc3dvcmQqJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25Jbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uRmllbGRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JNc2d9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvck1zZ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlTGFuZGluZ1N0YXRlKCdTaWduIFVwJyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25GaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVMYW5kaW5nU3RhdGUoJ0ZvcmdvdCBQYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2xvYWRpbmd9KSA9PiAoe2xvYWRpbmd9KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIHVwZGF0ZUxvYWRpbmcsXHJcbiAgICB1cGRhdGVMYW5kaW5nU3RhdGUsXHJcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ25Jbik7IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQge1xyXG4gICAgdXBkYXRlTGFuZGluZ1N0YXRlLFxyXG4gICAgdXBkYXRlTG9hZGluZyxcclxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBzaWduVXAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBmaWVsZDoge1xyXG4gICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25GaWVsZENvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25GaWVsZDoge1xyXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiA1LFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNSxcclxuXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yTXNnOiB7XHJcbiAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2lnblVwID0gKHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICB1cGRhdGVMYW5kaW5nU3RhdGUsXHJcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNpZ25VcCA9IGUgPT4ge1xyXG4gICAgICAgIGlmICghZmlyc3ROYW1lLmxlbmd0aCB8fCAhbGFzdE5hbWUubGVuZ3RoIHx8ICFlbWFpbC5sZW5ndGggfHwgIXBhc3N3b3JkLmxlbmd0aCkgcmV0dXJuIHNldEVycm9yTXNnKCdQbGVhc2UgZW50ZXIgYWxsIHRoZSBmaWVsZHMhJyk7XHJcblxyXG4gICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHVwZGF0ZUxvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIHNpZ25VcChmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB1cGRhdGVMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB1cGRhdGVMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0ZpcnN0IE5hbWUqJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmllbGR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nTGFzdCBOYW1lKidcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmllbGR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwqJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWVsZH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSdQYXNzd29yZConXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaWduVXB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkZpZWxkQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yTXNnfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNc2d9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUxhbmRpbmdTdGF0ZSgnU2lnbiBJbicpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2xvYWRpbmd9KSA9PiAoe2xvYWRpbmd9KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIHVwZGF0ZUxhbmRpbmdTdGF0ZSxcclxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lnblVwKTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbyc7XHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9TaWduSW4nO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vU2lnblVwJztcclxuaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gJy4vRm9yZ290UGFzc3dvcmQnO1xyXG5pbXBvcnQgeyBpc0xvZ2dlZEluIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aCc7XHJcbmltcG9ydCB7IHVwZGF0ZVVzZXJMb2dpblN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudChyZ2JhKDI1MCwwLDAsMC41KSx0cmFuc3BhcmVudCknLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxMTViZjAnLFxyXG4gICAgfSxcclxuICAgIGxvZ2luQ29udGFpbmVyOiB7XHJcbiAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBsYW5kaW5nU3RhdGVzID0ge1xyXG4gICAgJ1NpZ24gSW4nOiA8U2lnbkluLz4sXHJcbiAgICAnU2lnbiBVcCc6IDxTaWduVXAvPixcclxuICAgICdGb3Jnb3QgUGFzc3dvcmQnOiA8Rm9yZ290UGFzc3dvcmQvPixcclxufTtcclxuXHJcbmNvbnN0IExvZ2luID0gKHtcclxuICAgIGxhbmRpbmdTdGF0ZSxcclxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbmNvbnNvbGUubG9nKCdsYW5kaW5nJylcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaXNMb2dnZWRJbigpXHJcbiAgICAvLyAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAvLyAgICAgICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlKHJlc3VsdHMpO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYgKHJlc3VsdHMpIHtcclxuICAgIC8vICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5Db250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAvLyBlbGV2YXRpb249ezI0fSAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExvZ28vPlxyXG4gICAgICAgICAgICAgICAge2xhbmRpbmdTdGF0ZXNbbGFuZGluZ1N0YXRlXX1cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2xhbmRpbmdTdGF0ZX0pID0+ICh7bGFuZGluZ1N0YXRlfSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTsiLCJleHBvcnQgY29uc3QgVVBEQVRFX0xPQURJTkcgPSAnVVBEQVRFX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfU1RBVEUgPSAnVVBEQVRFX0xBTkRJTkdfU1RBVEUnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfTE9HSU5fU1RBVEUgPSAnVVBEQVRFX1VTRVJfTE9HSU5fU1RBVEUnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfSU5GTyA9ICdVUERBVEVfVVNFUl9JTkZPJzsiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvbi10eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTG9hZGluZyA9IGxvYWRpbmcgPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9MT0FESU5HLFxyXG4gICAgbG9hZGluZyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTGFuZGluZ1N0YXRlID0gc3RhdGUgPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9MQU5ESU5HX1NUQVRFLFxyXG4gICAgc3RhdGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJMb2dpblN0YXRlID0gdWlkID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfVVNFUl9MT0dJTl9TVEFURSxcclxuICAgIHVpZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckluZm8gPSBpbmZvID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfVVNFUl9JTkZPLFxyXG4gICAgaW5mbyxcclxufSk7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHBhdGggZnJvbSAnLi9wYXRoJztcclxuXHJcbmNvbnN0IGF1dGhQYXRoID0gcGF0aCArICdhdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBpc0xvZ2dlZEluID0gKCkgPT4gKFxyXG4gICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGAke2F1dGhQYXRofWApXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiByZXN1bHRzLmRhdGEudWlkKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduSW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiAoXHJcbiAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGAke2F1dGhQYXRofS9zaWduaW5gLCB7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiByZXN1bHRzLmRhdGEudWlkKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXAgPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiAoXHJcbiAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KGAke2F1dGhQYXRofS9zaWdudXBgLCB7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiByZXN1bHRzLmRhdGEudWlkKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuKTsiLCIvLyBjb25zdCBwYXRoID0gYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0hPU1R9OiR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BPUlR9LyR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9WRVJTSU9OfS9hdXRoYDtcclxuY29uc3QgcGF0aCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2A7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXRoOyIsImltcG9ydCBMYW5kaW5nIGZyb20gJy4uLy4uL2Zyb250ZW5kL2NvbnRhaW5lcnMvTGFuZGluZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==