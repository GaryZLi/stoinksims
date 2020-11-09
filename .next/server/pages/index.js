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

/***/ "./frontend/components/Card/index.js":
/*!*******************************************!*\
  !*** ./frontend/components/Card/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\components\\Card\\index.js";


const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: 222
  },
  heading: {
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center'
  }
});

const Card = ({
  heading,
  Component,
  className
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: className ? [classes.root, className].join(' ') : classes.root,
    elevation: 7,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.heading,
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), Component]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./frontend/components/Gauge/Pin.js":
/*!******************************************!*\
  !*** ./frontend/components/Gauge/Pin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\components\\Gauge\\Pin.js";

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    position: 'relative'
  },
  pin: {
    width: 0,
    height: 0,
    borderLeft: '2px solid transparent',
    borderRight: '2px solid transparent',
    borderBottom: '100px solid #007bff',
    zIndex: 9,
    transformOrigin: 'bottom',
    position: 'absolute',
    bottom: 0,
    transition: 'all 2.5s ease-out'
  },
  ball: {
    position: 'absolute',
    bottom: -4,
    left: -4,
    height: 12,
    width: 12,
    borderRadius: '50%',
    backgroundColor: '#007bff',
    zIndex: 9
  }
});

const Pin = ({
  deg
}) => {
  const classes = useStyles(); // const deg = 
  // // ((def? def : 0) + 10000) * 0.00163636363636363636363636363636 - 90;
  // def? -34 : -90;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.pin,
      style: {
        transform: `rotateZ(${deg}deg)`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.ball
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Pin);

/***/ }),

/***/ "./frontend/components/Gauge/index.js":
/*!********************************************!*\
  !*** ./frontend/components/Gauge/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Pin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pin */ "./frontend/components/Gauge/Pin.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\components\\Gauge\\index.js";


const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    height: 100,
    width: 200,
    borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%',
    background: 'linear-gradient(to right, red 0%, yellow 30%, green 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative'
  },
  inner: {
    height: 70,
    width: 140,
    backgroundColor: 'white',
    borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%',
    position: 'absolute'
  }
});

const Gauge = ({
  deg
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.inner
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Pin__WEBPACK_IMPORTED_MODULE_2__["default"], {
      deg: deg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Gauge);

/***/ }),

/***/ "./frontend/components/GaugeCard/index.js":
/*!************************************************!*\
  !*** ./frontend/components/GaugeCard/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Gauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Gauge */ "./frontend/components/Gauge/index.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\components\\GaugeCard\\index.js";



const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    marginBottom: 10
  },
  outer: {
    height: 100,
    width: 200,
    borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%',
    background: 'linear-gradient(to right, red 0%, yellow 30%, green 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative'
  },
  inner: {
    height: 70,
    width: 140,
    backgroundColor: 'white',
    borderRadius: '50% 50% 50% 50% / 100% 100% 0% 0%',
    position: 'absolute'
  }
});

const GaugeCard = ({
  deg,
  heading
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      className: classes.heading,
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
      deg: deg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GaugeCard);

/***/ }),

/***/ "./frontend/components/Table/index.js":
/*!********************************************!*\
  !*** ./frontend/components/Table/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\components\\Table\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    // margin: 'auto',
    maxHeight: '70%',
    // marginTop: 50,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    height: '100%',
    justifyContent: 'space-evenly'
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const Table = ({
  tableTitle,
  rows,
  columns,
  width,
  filterable,
  styles
}) => {
  const classes = useStyles();
  const {
    0: filter,
    1: setFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    elevation: 15,
    style: _objectSpread({
      width
    }, styles),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.top,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "h5",
        children: tableTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), filterable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
        label: "Filter Ticker",
        onChange: e => setFilter(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 32
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default.a, {
        stickyHeader: true,
        "aria-label": "sticky table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, {
            children: columns.map((column, id) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
              style: {
                minWidth: column.minWidth
              },
              align: column.align,
              children: column.name
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 33
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: rows.filter(row => filter.length ? row.symbol.toLowerCase().includes(filter.toLowerCase()) : true).map((row, id) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, {
              children: columns.map((column, id) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7___default.a, {
                align: column.align,
                children: column.format(row[column.label])
              }, id, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 49
              }, undefined))
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 37
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./frontend/containers/Home/Content.js":
/*!*********************************************!*\
  !*** ./frontend/containers/Home/Content.js ***!
  \*********************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Table */ "./frontend/components/Table/index.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Card */ "./frontend/components/Card/index.js");
/* harmony import */ var _components_GaugeCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/GaugeCard */ "./frontend/components/GaugeCard/index.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Home\\Content.js";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    minWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  intro: {
    padding: 10,
    display: 'inline-block'
  },
  gauge: {
    display: 'flex',
    marginTop: 10,
    maxHeight: 200
  },
  container: {
    paddingTop: 30,
    display: 'flex',
    justifyContent: 'center'
  },
  infoCards: {
    width: '50%',
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  infoCard: {
    margin: '10px 5px 0 5px'
  },
  extra: {
    width: '100%',
    backgroundColor: 'gray',
    opacity: 0.6,
    padding: '100px 0',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    color: 'white',
    fontSize: 40
  }
});

const Content = ({
  firstName,
  buyingPower,
  totalStockWorth,
  stockPrices
}) => {
  const classes = useStyles();
  const totalStocks = [];

  for (const stock in stockPrices) {
    totalStocks.push(stock);
  }

  const getOverallGainText = () => {
    if (buyingPower - 10000 < 0) {
      return `Overall gain: -$${buyingPower ? (-(buyingPower - 10000)).toLocaleString() : 0}`;
    } else {
      return `Overall gain: $${buyingPower ? (buyingPower - 10000).toLocaleString() : 0}`;
    }
  };

  const getTodaysEarnings = () => {
    const total = buyingPower + totalStockWorth - 10000;

    if (total < 0) {
      return `-$${(-total).toLocaleString()}`;
    }

    return `$${total.toLocaleString()}`;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      className: classes.intro,
      elevation: 7,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        variant: "h5",
        children: ["Welcome to Stoink Sims, ", firstName, "!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "Stoink Sims is a simulator that mocks how the real life stock exchanges work. You can buy or sell any stocks available on the stock exchange."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
        className: classes.gauge,
        elevation: 7,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GaugeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          deg: buyingPower ? -30 : -90,
          heading: `Buying Power: $${buyingPower ? buyingPower.toLocaleString() : 0}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_GaugeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          deg: buyingPower ? 0 : -90,
          heading: getOverallGainText()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.infoCards,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: classes.infoCard,
          heading: "Total Worth",
          Component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h3",
            children: ["$", (buyingPower + totalStockWorth).toLocaleString()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: classes.infoCard,
          heading: "Total Stock Worth",
          Component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h3",
            children: ["$", parseFloat(totalStockWorth.toFixed(2)).toLocaleString()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: classes.infoCard,
          heading: "Top Earnings",
          Component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h3",
            children: ["$", Math.max(buyingPower + totalStockWorth - 10000, 0).toLocaleString()]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: classes.infoCard,
          heading: "Today's Earnings",
          Component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h3",
            children: getTodaysEarnings()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: classes.infoCard,
          heading: "Average Earnings",
          Component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h3",
            children: getTodaysEarnings()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: classes.infoCard,
          heading: "Number of stocks owned",
          Component: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h3",
            children: totalStocks.length.toLocaleString()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.extra,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: "MORE ANALYTICS COMING SOON!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 9
  }, undefined);
};

const states = ({
  firstName,
  buyingPower,
  totalStockWorth,
  stockPrices
}) => ({
  firstName,
  buyingPower,
  totalStockWorth,
  stockPrices
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(states)(Content));

/***/ }),

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Table */ "./frontend/components/Table/index.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./frontend/containers/Home/Content.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user */ "./frontend/services/user.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions */ "./frontend/redux/actions.js");

var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Home\\index.js";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    overflow: 'auto',
    padding: '100px 20px',
    position: 'relative',
    minWidth: 1200
  }
});
const stocksColumns = [{
  label: 'symbol',
  name: 'Symbol',
  align: 'left',
  format: e => e
}, {
  label: 'shares',
  name: 'Shares',
  align: 'center',
  format: e => e.toLocaleString()
}];
const watchListColumns = [{
  label: 'symbol',
  name: 'Symbol',
  align: 'left',
  format: e => e
}, {
  label: 'shares',
  name: 'Owned',
  align: 'center',
  format: e => e ? 'Yes' : 'No'
}];

const Home = ({
  sidePanelOpened,
  portfolio,
  updateTotalStockWorth,
  updateStockPrices
}) => {
  const classes = useStyles();
  const rows = [];
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    const stocks = [];

    for (const stock in portfolio) {
      stocks.push(stock);
    }

    Object(_services_user__WEBPACK_IMPORTED_MODULE_6__["getUserWorth"])(stocks).then(res => {
      updateStockPrices(res);
      let totalStockWorth = 0;

      for (const stock in res) {
        totalStockWorth += portfolio[stock] * res[stock];
      }

      updateTotalStockWorth(totalStockWorth);
    }).catch(err => console.log(err));
  }, [portfolio]);

  for (const symbol in portfolio) {
    rows.push({
      symbol,
      shares: portfolio[symbol]
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      tableTitle: "Stocks",
      columns: stocksColumns,
      rows: rows,
      width: 200,
      styles: {
        position: 'sticky',
        top: 0,
        marginRight: 10
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      tableTitle: "Watchlist",
      columns: watchListColumns,
      rows: [],
      width: 200,
      styles: {
        position: 'sticky',
        top: 0,
        marginLeft: 10
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }, undefined);
};

const states = ({
  sidePanelOpened,
  portfolio
}) => ({
  sidePanelOpened,
  portfolio
});

const dispatch = {
  updateTotalStockWorth: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["updateTotalStockWorth"],
  updateStockPrices: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["updateStockPrices"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(states, dispatch)(Home));

/***/ }),

/***/ "./frontend/redux/action-types.js":
/*!****************************************!*\
  !*** ./frontend/redux/action-types.js ***!
  \****************************************/
/*! exports provided: UPDATE_LOADING, UPDATE_LANDING_STATE, UPDATE_USER_LOGIN_STATE, UPDATE_USER_INFO, UPDATE_SEARCH_INPUT, UPDATE_SIDE_PANEL, UPDATE_STOCK_INFO, UPDATE_CHART_TYPE, UPDATE_BUYING_POWER, UPDATE_SHARES, UPDATE_PORTFOLIO, UPDATE_TRANSACTIONS, UPDATE_TOTAL_STOCK_WORTH, UPDATE_STOCK_PRICES */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CHART_TYPE", function() { return UPDATE_CHART_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BUYING_POWER", function() { return UPDATE_BUYING_POWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SHARES", function() { return UPDATE_SHARES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PORTFOLIO", function() { return UPDATE_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TRANSACTIONS", function() { return UPDATE_TRANSACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TOTAL_STOCK_WORTH", function() { return UPDATE_TOTAL_STOCK_WORTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STOCK_PRICES", function() { return UPDATE_STOCK_PRICES; });
const UPDATE_LOADING = 'UPDATE_LOADING';
const UPDATE_LANDING_STATE = 'UPDATE_LANDING_STATE';
const UPDATE_USER_LOGIN_STATE = 'UPDATE_USER_LOGIN_STATE';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
const UPDATE_SIDE_PANEL = 'UPDATE_SIDE_PANEL';
const UPDATE_STOCK_INFO = 'UPDATE_STOCK_INFO';
const UPDATE_CHART_TYPE = 'UPDATE_CHART_TYPE';
const UPDATE_BUYING_POWER = 'UPDATE_BUYING_POWER';
const UPDATE_SHARES = 'UPDATE_SHARES';
const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO';
const UPDATE_TRANSACTIONS = 'UPDATE_TRANSACTIONS';
const UPDATE_TOTAL_STOCK_WORTH = 'UPDATE_TOTAL_STOCK_WORTH';
const UPDATE_STOCK_PRICES = 'UPDATE_STOCK_PRICES';

/***/ }),

/***/ "./frontend/redux/actions.js":
/*!***********************************!*\
  !*** ./frontend/redux/actions.js ***!
  \***********************************/
/*! exports provided: updateLoading, updateLandingState, updateUserLoginState, updateUserInfo, updateSearchInput, updateSidePanel, updateStockInfo, updateChartType, updateBuyingPower, updateShares, updatePortfolio, updateTransactions, updateTotalStockWorth, updateStockPrices */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateChartType", function() { return updateChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBuyingPower", function() { return updateBuyingPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShares", function() { return updateShares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePortfolio", function() { return updatePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTransactions", function() { return updateTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTotalStockWorth", function() { return updateTotalStockWorth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStockPrices", function() { return updateStockPrices; });
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
const updateChartType = chartType => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CHART_TYPE"],
  chartType
});
const updateBuyingPower = buyingPower => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_BUYING_POWER"],
  buyingPower
});
const updateShares = (symbol, shares) => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SHARES"],
  symbol,
  shares
});
const updatePortfolio = portfolio => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PORTFOLIO"],
  portfolio
});
const updateTransactions = transactions => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TRANSACTIONS"],
  transactions
});
const updateTotalStockWorth = totalStockWorth => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TOTAL_STOCK_WORTH"],
  totalStockWorth
});
const updateStockPrices = stockPrices => ({
  type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STOCK_PRICES"],
  stockPrices
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
/*! exports provided: getUserInfo, getUserPortfolio, getUserTransactions, getUserWorth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPortfolio", function() { return getUserPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserTransactions", function() { return getUserTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserWorth", function() { return getUserWorth; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./frontend/services/path.js");


const userPath = _path__WEBPACK_IMPORTED_MODULE_1__["default"] + 'user/';
const getUserInfo = uid => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${userPath}`, {
  uid
}).then(results => results.data).catch(err => {
  throw err;
});
const getUserPortfolio = uid => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(userPath + 'portfolio', {
  uid
}).then(results => results.data).catch(err => {
  throw err;
});
const getUserTransactions = uid => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(userPath + 'transactions', {
  uid
}).then(results => results.data).catch(err => {
  throw err;
});
const getUserWorth = stocks => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(userPath + 'worth', {
  stocks
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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9DYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvR2F1Z2UvUGluLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2NvbXBvbmVudHMvR2F1Z2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9HYXVnZUNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvY29tcG9uZW50cy9UYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb250YWluZXJzL0hvbWUvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9jb250YWluZXJzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdXgvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2VydmljZXMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zZXJ2aWNlcy91c2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsInBhZGRpbmciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJtaW5XaWR0aCIsImhlYWRpbmciLCJtYXJnaW5Cb3R0b20iLCJDYXJkIiwiQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsImpvaW4iLCJwb3NpdGlvbiIsInBpbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyTGVmdCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiekluZGV4IiwidHJhbnNmb3JtT3JpZ2luIiwiYm90dG9tIiwidHJhbnNpdGlvbiIsImJhbGwiLCJsZWZ0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiUGluIiwiZGVnIiwidHJhbnNmb3JtIiwiYmFja2dyb3VuZCIsImp1c3RpZnlDb250ZW50IiwiaW5uZXIiLCJHYXVnZSIsIm91dGVyIiwiR2F1Z2VDYXJkIiwibWF4SGVpZ2h0IiwiY29udGFpbmVyIiwidG9wIiwiVGFibGUiLCJ0YWJsZVRpdGxlIiwicm93cyIsImNvbHVtbnMiLCJmaWx0ZXJhYmxlIiwic3R5bGVzIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidXNlU3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJjb2x1bW4iLCJpZCIsImFsaWduIiwibmFtZSIsInJvdyIsImxlbmd0aCIsInN5bWJvbCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmb3JtYXQiLCJsYWJlbCIsImludHJvIiwiZ2F1Z2UiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nVG9wIiwiaW5mb0NhcmRzIiwiZmxleFdyYXAiLCJpbmZvQ2FyZCIsIm1hcmdpbiIsImV4dHJhIiwib3BhY2l0eSIsImNvbG9yIiwiZm9udFNpemUiLCJDb250ZW50IiwiZmlyc3ROYW1lIiwiYnV5aW5nUG93ZXIiLCJ0b3RhbFN0b2NrV29ydGgiLCJzdG9ja1ByaWNlcyIsInRvdGFsU3RvY2tzIiwic3RvY2siLCJwdXNoIiwiZ2V0T3ZlcmFsbEdhaW5UZXh0IiwidG9Mb2NhbGVTdHJpbmciLCJnZXRUb2RheXNFYXJuaW5ncyIsInRvdGFsIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJNYXRoIiwibWF4Iiwic3RhdGVzIiwiY29ubmVjdCIsImZsZXgiLCJvdmVyZmxvdyIsInN0b2Nrc0NvbHVtbnMiLCJ3YXRjaExpc3RDb2x1bW5zIiwiSG9tZSIsInNpZGVQYW5lbE9wZW5lZCIsInBvcnRmb2xpbyIsInVwZGF0ZVRvdGFsU3RvY2tXb3J0aCIsInVwZGF0ZVN0b2NrUHJpY2VzIiwidXNlRWZmZWN0Iiwic3RvY2tzIiwiZ2V0VXNlcldvcnRoIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNoYXJlcyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImRpc3BhdGNoIiwiVVBEQVRFX0xPQURJTkciLCJVUERBVEVfTEFORElOR19TVEFURSIsIlVQREFURV9VU0VSX0xPR0lOX1NUQVRFIiwiVVBEQVRFX1VTRVJfSU5GTyIsIlVQREFURV9TRUFSQ0hfSU5QVVQiLCJVUERBVEVfU0lERV9QQU5FTCIsIlVQREFURV9TVE9DS19JTkZPIiwiVVBEQVRFX0NIQVJUX1RZUEUiLCJVUERBVEVfQlVZSU5HX1BPV0VSIiwiVVBEQVRFX1NIQVJFUyIsIlVQREFURV9QT1JURk9MSU8iLCJVUERBVEVfVFJBTlNBQ1RJT05TIiwiVVBEQVRFX1RPVEFMX1NUT0NLX1dPUlRIIiwiVVBEQVRFX1NUT0NLX1BSSUNFUyIsInVwZGF0ZUxvYWRpbmciLCJsb2FkaW5nIiwidHlwZSIsInR5cGVzIiwidXBkYXRlTGFuZGluZ1N0YXRlIiwic3RhdGUiLCJ1cGRhdGVVc2VyTG9naW5TdGF0ZSIsInVpZCIsInVwZGF0ZVVzZXJJbmZvIiwiaW5mbyIsInVwZGF0ZVNlYXJjaElucHV0IiwidGlja2VyIiwidXBkYXRlU2lkZVBhbmVsIiwib3BlbmVkIiwidXBkYXRlU3RvY2tJbmZvIiwic3RvY2tJbmZvIiwidXBkYXRlQ2hhcnRUeXBlIiwiY2hhcnRUeXBlIiwidXBkYXRlQnV5aW5nUG93ZXIiLCJ1cGRhdGVTaGFyZXMiLCJ1cGRhdGVQb3J0Zm9saW8iLCJ1cGRhdGVUcmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbnMiLCJwYXRoIiwidXNlclBhdGgiLCJnZXRVc2VySW5mbyIsImF4aW9zIiwicG9zdCIsInJlc3VsdHMiLCJkYXRhIiwiZ2V0VXNlclBvcnRmb2xpbyIsImdldFVzZXJUcmFuc2FjdGlvbnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUtBLE1BQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFdBQU8sRUFBRSxFQURQO0FBRUZDLFdBQU8sRUFBRSxNQUZQO0FBR0ZDLGNBQVUsRUFBRSxRQUhWO0FBSUZDLGlCQUFhLEVBQUUsUUFKYjtBQUtGQyxZQUFRLEVBQUU7QUFMUixHQURtQjtBQVF6QkMsU0FBTyxFQUFFO0FBQ0xDLGdCQUFZLEVBQUUsRUFEVDtBQUVMTCxXQUFPLEVBQUUsTUFGSjtBQUdMQyxjQUFVLEVBQUU7QUFIUDtBQVJnQixDQUFELENBQTVCOztBQWVBLE1BQU1LLElBQUksR0FBRyxDQUFDO0FBQ1ZGLFNBRFU7QUFFVkcsV0FGVTtBQUdWQztBQUhVLENBQUQsS0FJUDtBQUNGLFFBQU1DLE9BQU8sR0FBR2IsU0FBUyxFQUF6QjtBQUVBLHNCQUNJLHFFQUFDLHVEQUFEO0FBQ0ksYUFBUyxFQUFFWSxTQUFTLEdBQUUsQ0FBQ0MsT0FBTyxDQUFDWCxJQUFULEVBQWVVLFNBQWYsRUFBMEJFLElBQTFCLENBQStCLEdBQS9CLENBQUYsR0FBd0NELE9BQU8sQ0FBQ1gsSUFEeEU7QUFFSSxhQUFTLEVBQUUsQ0FGZjtBQUFBLDRCQUlJLHFFQUFDLDREQUFEO0FBQVksZUFBUyxFQUFFVyxPQUFPLENBQUNMLE9BQS9CO0FBQUEsZ0JBQ0tBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixFQU9LRyxTQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBV0gsQ0FsQkQ7O0FBb0JlRCxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRUEsTUFBTVYsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRmEsWUFBUSxFQUFFO0FBRFIsR0FEbUI7QUFJekJDLEtBQUcsRUFBRTtBQUNEQyxTQUFLLEVBQUUsQ0FETjtBQUVEQyxVQUFNLEVBQUUsQ0FGUDtBQUdEQyxjQUFVLEVBQUUsdUJBSFg7QUFJREMsZUFBVyxFQUFFLHVCQUpaO0FBS0RDLGdCQUFZLEVBQUUscUJBTGI7QUFNREMsVUFBTSxFQUFFLENBTlA7QUFPREMsbUJBQWUsRUFBRSxRQVBoQjtBQVFEUixZQUFRLEVBQUUsVUFSVDtBQVNEUyxVQUFNLEVBQUUsQ0FUUDtBQVVEQyxjQUFVLEVBQUU7QUFWWCxHQUpvQjtBQWdCekJDLE1BQUksRUFBRTtBQUNGWCxZQUFRLEVBQUUsVUFEUjtBQUVGUyxVQUFNLEVBQUUsQ0FBQyxDQUZQO0FBR0ZHLFFBQUksRUFBRSxDQUFDLENBSEw7QUFJRlQsVUFBTSxFQUFFLEVBSk47QUFLRkQsU0FBSyxFQUFFLEVBTEw7QUFNRlcsZ0JBQVksRUFBRSxLQU5aO0FBT0ZDLG1CQUFlLEVBQUUsU0FQZjtBQVFGUCxVQUFNLEVBQUU7QUFSTjtBQWhCbUIsQ0FBRCxDQUE1Qjs7QUE0QkEsTUFBTVEsR0FBRyxHQUFHLENBQUM7QUFDVEM7QUFEUyxDQUFELEtBRU47QUFDRixRQUFNbEIsT0FBTyxHQUFHYixTQUFTLEVBQXpCLENBREUsQ0FFRjtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVhLE9BQU8sQ0FBQ1gsSUFBeEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRVcsT0FBTyxDQUFDRyxHQUF4QjtBQUNJLFdBQUssRUFBRTtBQUNIZ0IsaUJBQVMsRUFBRyxXQUFVRCxHQUFJO0FBRHZCO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JO0FBQUssZUFBUyxFQUFFbEIsT0FBTyxDQUFDYTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBVUgsQ0FsQkQ7O0FBb0JlSSxrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBRUEsTUFBTTlCLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZnQixVQUFNLEVBQUUsR0FETjtBQUVGRCxTQUFLLEVBQUUsR0FGTDtBQUdGVyxnQkFBWSxFQUFFLG1DQUhaO0FBSUZLLGNBQVUsRUFBRSwyREFKVjtBQUtGN0IsV0FBTyxFQUFFLE1BTFA7QUFNRkMsY0FBVSxFQUFFLFVBTlY7QUFPRjZCLGtCQUFjLEVBQUUsUUFQZDtBQVFGbkIsWUFBUSxFQUFFO0FBUlIsR0FEbUI7QUFXekJvQixPQUFLLEVBQUU7QUFDSGpCLFVBQU0sRUFBRSxFQURMO0FBRUhELFNBQUssRUFBRSxHQUZKO0FBR0hZLG1CQUFlLEVBQUUsT0FIZDtBQUlIRCxnQkFBWSxFQUFFLG1DQUpYO0FBS0hiLFlBQVEsRUFBRTtBQUxQO0FBWGtCLENBQUQsQ0FBNUI7O0FBb0JBLE1BQU1xQixLQUFLLEdBQUcsQ0FBQztBQUNYTDtBQURXLENBQUQsS0FFUjtBQUNGLFFBQU1sQixPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRWEsT0FBTyxDQUFDWCxJQUF4QjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFVyxPQUFPLENBQUNzQjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsNENBQUQ7QUFBSyxTQUFHLEVBQUVKO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBWEQ7O0FBYWVLLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUdBO0FBRUEsTUFBTXBDLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFdBQU8sRUFBRSxFQURQO0FBRUZDLFdBQU8sRUFBRSxNQUZQO0FBR0ZFLGlCQUFhLEVBQUUsUUFIYjtBQUlGRCxjQUFVLEVBQUU7QUFKVixHQURtQjtBQU96QkcsU0FBTyxFQUFFO0FBQ0xDLGdCQUFZLEVBQUU7QUFEVCxHQVBnQjtBQVV6QjRCLE9BQUssRUFBRTtBQUNIbkIsVUFBTSxFQUFFLEdBREw7QUFFSEQsU0FBSyxFQUFFLEdBRko7QUFHSFcsZ0JBQVksRUFBRSxtQ0FIWDtBQUlISyxjQUFVLEVBQUUsMkRBSlQ7QUFLSDdCLFdBQU8sRUFBRSxNQUxOO0FBTUhDLGNBQVUsRUFBRSxVQU5UO0FBT0g2QixrQkFBYyxFQUFFLFFBUGI7QUFRSG5CLFlBQVEsRUFBRTtBQVJQLEdBVmtCO0FBb0J6Qm9CLE9BQUssRUFBRTtBQUNIakIsVUFBTSxFQUFFLEVBREw7QUFFSEQsU0FBSyxFQUFFLEdBRko7QUFHSFksbUJBQWUsRUFBRSxPQUhkO0FBSUhELGdCQUFZLEVBQUUsbUNBSlg7QUFLSGIsWUFBUSxFQUFFO0FBTFA7QUFwQmtCLENBQUQsQ0FBNUI7O0FBNkJBLE1BQU11QixTQUFTLEdBQUcsQ0FBQztBQUNmUCxLQURlO0FBRWZ2QjtBQUZlLENBQUQsS0FHWjtBQUNGLFFBQU1LLE9BQU8sR0FBR2IsU0FBUyxFQUF6QjtBQUVBLHNCQUNJO0FBQ0ksYUFBUyxFQUFFYSxPQUFPLENBQUNYLElBRHZCO0FBQUEsNEJBR0kscUVBQUMsNERBQUQ7QUFBWSxlQUFTLEVBQUVXLE9BQU8sQ0FBQ0wsT0FBL0I7QUFBQSxnQkFDS0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBTUkscUVBQUMsOENBQUQ7QUFBTyxTQUFHLEVBQUV1QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFVSCxDQWhCRDs7QUFrQmVPLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNdEMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRjtBQUNBcUMsYUFBUyxFQUFFLEtBRlQ7QUFHRjtBQUNBOUIsZ0JBQVksRUFBRSxFQUpaO0FBS0ZMLFdBQU8sRUFBRSxNQUxQO0FBTUZFLGlCQUFhLEVBQUU7QUFOYixHQURtQjtBQVN6QmtDLFdBQVMsRUFBRTtBQUNQdEIsVUFBTSxFQUFFLE1BREQ7QUFFUGdCLGtCQUFjLEVBQUU7QUFGVCxHQVRjO0FBYXpCTyxLQUFHLEVBQUU7QUFDRHJDLFdBQU8sRUFBRSxNQURSO0FBRUQ4QixrQkFBYyxFQUFFO0FBRmY7QUFib0IsQ0FBRCxDQUE1Qjs7QUFtQkEsTUFBTVEsS0FBSyxHQUFHLENBQUM7QUFDWEMsWUFEVztBQUVYQyxNQUZXO0FBR1hDLFNBSFc7QUFJWDVCLE9BSlc7QUFLWDZCLFlBTFc7QUFNWEM7QUFOVyxDQUFELEtBT1I7QUFDRixRQUFNbEMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0EsUUFBTTtBQUFBLE9BQUNnRCxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBRUEsc0JBQ0kscUVBQUMsOERBQUQ7QUFDSSxhQUFTLEVBQUVyQyxPQUFPLENBQUNYLElBRHZCO0FBRUksYUFBUyxFQUFFLEVBRmY7QUFHSSxTQUFLO0FBQUdlO0FBQUgsT0FBYThCLE1BQWIsQ0FIVDtBQUFBLDRCQUtJLHFFQUFDLGlFQUFEO0FBQVMsZUFBUyxFQUFFbEMsT0FBTyxDQUFDNEIsR0FBNUI7QUFBQSw4QkFDSSxxRUFBQyxvRUFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBLGtCQUNLRTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFJS0csVUFBVSxpQkFBSSxxRUFBQyxrRUFBRDtBQUFXLGFBQUssRUFBQyxlQUFqQjtBQUFpQyxnQkFBUSxFQUFFSyxDQUFDLElBQUlGLFNBQVMsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBV0kscUVBQUMsdUVBQUQ7QUFBZ0IsZUFBUyxFQUFFeEMsT0FBTyxDQUFDMkIsU0FBbkM7QUFBQSw2QkFDSSxxRUFBQyw4REFBRDtBQUFVLG9CQUFZLE1BQXRCO0FBQXVCLHNCQUFXLGNBQWxDO0FBQUEsZ0NBQ0kscUVBQUMsbUVBQUQ7QUFBQSxpQ0FDSSxxRUFBQyxpRUFBRDtBQUFBLHNCQUNLSyxPQUFPLENBQUNTLEdBQVIsQ0FBWSxDQUFDQyxNQUFELEVBQVNDLEVBQVQsa0JBQ1QscUVBQUMsa0VBQUQ7QUFFSSxtQkFBSyxFQUFFO0FBQUVqRCx3QkFBUSxFQUFFZ0QsTUFBTSxDQUFDaEQ7QUFBbkIsZUFGWDtBQUdJLG1CQUFLLEVBQUVnRCxNQUFNLENBQUNFLEtBSGxCO0FBQUEsd0JBS0tGLE1BQU0sQ0FBQ0c7QUFMWixlQUNTRixFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQWNJLHFFQUFDLGtFQUFEO0FBQUEsb0JBQ0taLElBQUksQ0FDQUksTUFESixDQUNXVyxHQUFHLElBQUlYLE1BQU0sQ0FBQ1ksTUFBUCxHQUFnQkQsR0FBRyxDQUFDRSxNQUFKLENBQVdDLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDZixNQUFNLENBQUNjLFdBQVAsRUFBbEMsQ0FBaEIsR0FBMEUsSUFENUYsRUFFSVIsR0FGSixDQUVRLENBQUNLLEdBQUQsRUFBTUgsRUFBTixLQUFhO0FBQ2QsZ0NBQ0kscUVBQUMsaUVBQUQ7QUFBQSx3QkFDS1gsT0FBTyxDQUNIUyxHQURKLENBQ1EsQ0FBQ0MsTUFBRCxFQUFTQyxFQUFULGtCQUNELHFFQUFDLGtFQUFEO0FBRUkscUJBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUZsQjtBQUFBLDBCQUlLRixNQUFNLENBQUNTLE1BQVAsQ0FBY0wsR0FBRyxDQUFDSixNQUFNLENBQUNVLEtBQVIsQ0FBakI7QUFKTCxpQkFDU1QsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZQO0FBREwsZUFBZUEsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBY0gsV0FqQko7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFtREgsQ0E5REQ7O0FBaUVlZCxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQSxNQUFNMUMsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkssWUFBUSxFQUFFLEdBRFI7QUFFRkgsV0FBTyxFQUFFLE1BRlA7QUFHRkUsaUJBQWEsRUFBRSxRQUhiO0FBSUZELGNBQVUsRUFBRTtBQUpWLEdBRG1CO0FBT3pCNkQsT0FBSyxFQUFFO0FBQ0gvRCxXQUFPLEVBQUUsRUFETjtBQUVIQyxXQUFPLEVBQUU7QUFGTixHQVBrQjtBQVd6QitELE9BQUssRUFBRTtBQUNIL0QsV0FBTyxFQUFFLE1BRE47QUFFSGdFLGFBQVMsRUFBRSxFQUZSO0FBR0g3QixhQUFTLEVBQUU7QUFIUixHQVhrQjtBQWdCekJDLFdBQVMsRUFBRTtBQUNQNkIsY0FBVSxFQUFFLEVBREw7QUFFUGpFLFdBQU8sRUFBRSxNQUZGO0FBR1A4QixrQkFBYyxFQUFFO0FBSFQsR0FoQmM7QUFxQnpCb0MsV0FBUyxFQUFFO0FBQ1ByRCxTQUFLLEVBQUUsS0FEQTtBQUVQYixXQUFPLEVBQUUsYUFGRjtBQUdQbUUsWUFBUSxFQUFFLE1BSEg7QUFJUHJDLGtCQUFjLEVBQUU7QUFKVCxHQXJCYztBQTJCekJzQyxVQUFRLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBREYsR0EzQmU7QUE4QnpCQyxPQUFLLEVBQUU7QUFDSHpELFNBQUssRUFBRSxNQURKO0FBRUhZLG1CQUFlLEVBQUUsTUFGZDtBQUdIOEMsV0FBTyxFQUFFLEdBSE47QUFJSHhFLFdBQU8sRUFBRSxTQUpOO0FBS0hDLFdBQU8sRUFBRSxNQUxOO0FBTUg4QixrQkFBYyxFQUFFLFFBTmI7QUFPSGtDLGFBQVMsRUFBRSxFQVBSO0FBUUhRLFNBQUssRUFBRSxPQVJKO0FBU0hDLFlBQVEsRUFBRTtBQVRQO0FBOUJrQixDQUFELENBQTVCOztBQTJDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQztBQUNiQyxXQURhO0FBRWJDLGFBRmE7QUFHYkMsaUJBSGE7QUFJYkM7QUFKYSxDQUFELEtBS1Y7QUFDRixRQUFNckUsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBRUEsUUFBTW1GLFdBQVcsR0FBRyxFQUFwQjs7QUFFQSxPQUFLLE1BQU1DLEtBQVgsSUFBb0JGLFdBQXBCLEVBQWlDO0FBQzdCQyxlQUFXLENBQUNFLElBQVosQ0FBaUJELEtBQWpCO0FBQ0g7O0FBRUQsUUFBTUUsa0JBQWtCLEdBQUcsTUFBTTtBQUM3QixRQUFJTixXQUFXLEdBQUcsS0FBZCxHQUFzQixDQUExQixFQUE2QjtBQUN6QixhQUFRLG1CQUFrQkEsV0FBVyxHQUFFLENBQUMsRUFBRUEsV0FBVyxHQUFHLEtBQWhCLENBQUQsRUFBeUJPLGNBQXpCLEVBQUYsR0FBOEMsQ0FBRSxFQUFyRjtBQUNILEtBRkQsTUFHSztBQUNELGFBQVEsa0JBQWlCUCxXQUFXLEdBQUUsQ0FBQ0EsV0FBVyxHQUFHLEtBQWYsRUFBc0JPLGNBQXRCLEVBQUYsR0FBMkMsQ0FBRSxFQUFqRjtBQUNIO0FBQ0osR0FQRDs7QUFTQSxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFVBQU1DLEtBQUssR0FBR1QsV0FBVyxHQUFHQyxlQUFkLEdBQWdDLEtBQTlDOztBQUVBLFFBQUlRLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxhQUFRLEtBQUksQ0FBQyxDQUFDQSxLQUFGLEVBQVNGLGNBQVQsRUFBMEIsRUFBdEM7QUFDSDs7QUFFRCxXQUFRLElBQUdFLEtBQUssQ0FBQ0YsY0FBTixFQUF1QixFQUFsQztBQUNILEdBUkQ7O0FBVUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUUxRSxPQUFPLENBQUNYLElBQXhCO0FBQUEsNEJBQ0kscUVBQUMsdURBQUQ7QUFDSSxlQUFTLEVBQUVXLE9BQU8sQ0FBQ3FELEtBRHZCO0FBRUksZUFBUyxFQUFFLENBRmY7QUFBQSw4QkFJSSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBLCtDQUM2QmEsU0FEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBWUk7QUFBSyxlQUFTLEVBQUVsRSxPQUFPLENBQUMyQixTQUF4QjtBQUFBLDhCQUNJLHFFQUFDLHVEQUFEO0FBQ0ksaUJBQVMsRUFBRTNCLE9BQU8sQ0FBQ3NELEtBRHZCO0FBRUksaUJBQVMsRUFBRSxDQUZmO0FBQUEsZ0NBSUkscUVBQUMsNkRBQUQ7QUFDSSxhQUFHLEVBQUVhLFdBQVcsR0FBRSxDQUFDLEVBQUgsR0FBUSxDQUFDLEVBRDdCO0FBRUksaUJBQU8sRUFBRyxrQkFBaUJBLFdBQVcsR0FBRUEsV0FBVyxDQUFDTyxjQUFaLEVBQUYsR0FBaUMsQ0FBRTtBQUY3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBUUkscUVBQUMsNkRBQUQ7QUFDSSxhQUFHLEVBQUVQLFdBQVcsR0FBRSxDQUFGLEdBQU0sQ0FBQyxFQUQzQjtBQUVJLGlCQUFPLEVBQUVNLGtCQUFrQjtBQUYvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQWNJO0FBQUssaUJBQVMsRUFBRXpFLE9BQU8sQ0FBQ3lELFNBQXhCO0FBQUEsZ0NBQ0kscUVBQUMsd0RBQUQ7QUFDSSxtQkFBUyxFQUFFekQsT0FBTyxDQUFDMkQsUUFEdkI7QUFFSSxpQkFBTyxFQUFDLGFBRlo7QUFHSSxtQkFBUyxlQUFFLHFFQUFDLDREQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUFBLDRCQUEyQixDQUFDUSxXQUFXLEdBQUdDLGVBQWYsRUFBZ0NNLGNBQWhDLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFNSSxxRUFBQyx3REFBRDtBQUNJLG1CQUFTLEVBQUUxRSxPQUFPLENBQUMyRCxRQUR2QjtBQUVJLGlCQUFPLEVBQUMsbUJBRlo7QUFHSSxtQkFBUyxlQUFFLHFFQUFDLDREQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUFBLDRCQUEyQmtCLFVBQVUsQ0FBRVQsZUFBRCxDQUFrQlUsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBRCxDQUFWLENBQXlDSixjQUF6QyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLGVBV0kscUVBQUMsd0RBQUQ7QUFDSSxtQkFBUyxFQUFFMUUsT0FBTyxDQUFDMkQsUUFEdkI7QUFFSSxpQkFBTyxFQUFDLGNBRlo7QUFHSSxtQkFBUyxlQUFFLHFFQUFDLDREQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUFBLDRCQUEyQm9CLElBQUksQ0FBQ0MsR0FBTCxDQUFTYixXQUFXLEdBQUdDLGVBQWQsR0FBZ0MsS0FBekMsRUFBZ0QsQ0FBaEQsRUFBbURNLGNBQW5ELEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEosZUFnQkkscUVBQUMsd0RBQUQ7QUFDSSxtQkFBUyxFQUFFMUUsT0FBTyxDQUFDMkQsUUFEdkI7QUFFSSxpQkFBTyxFQUFDLGtCQUZaO0FBR0ksbUJBQVMsZUFBRSxxRUFBQyw0REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBQSxzQkFBMEJnQixpQkFBaUI7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJKLGVBcUJJLHFFQUFDLHdEQUFEO0FBQ0ksbUJBQVMsRUFBRTNFLE9BQU8sQ0FBQzJELFFBRHZCO0FBRUksaUJBQU8sRUFBQyxrQkFGWjtBQUdJLG1CQUFTLGVBQUUscUVBQUMsNERBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQUEsc0JBQTBCZ0IsaUJBQWlCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCSixlQTBCSSxxRUFBQyx3REFBRDtBQUNJLG1CQUFTLEVBQUUzRSxPQUFPLENBQUMyRCxRQUR2QjtBQUVJLGlCQUFPLEVBQUMsd0JBRlo7QUFHSSxtQkFBUyxlQUFFLHFFQUFDLDREQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUFBLHNCQUEwQlcsV0FBVyxDQUFDdkIsTUFBWixDQUFtQjJCLGNBQW5CO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKLGVBMkRJO0FBQUssZUFBUyxFQUFFMUUsT0FBTyxDQUFDNkQsS0FBeEI7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUVILENBcEdEOztBQXNHQSxNQUFNb0IsTUFBTSxHQUFHLENBQUM7QUFDWmYsV0FEWTtBQUVaQyxhQUZZO0FBR1pDLGlCQUhZO0FBSVpDO0FBSlksQ0FBRCxNQUtSO0FBQ0hILFdBREc7QUFFSEMsYUFGRztBQUdIQyxpQkFIRztBQUlIQztBQUpHLENBTFEsQ0FBZjs7QUFZZWEsMEhBQU8sQ0FBQ0QsTUFBRCxDQUFQLENBQWdCaEIsT0FBaEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxNQUFNOUUsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRjhGLFFBQUksRUFBRSxDQURKO0FBRUY1RixXQUFPLEVBQUUsTUFGUDtBQUdGOEIsa0JBQWMsRUFBRSxjQUhkO0FBSUYrRCxZQUFRLEVBQUUsTUFKUjtBQUtGOUYsV0FBTyxFQUFFLFlBTFA7QUFNRlksWUFBUSxFQUFFLFVBTlI7QUFPRlIsWUFBUSxFQUFFO0FBUFI7QUFEbUIsQ0FBRCxDQUE1QjtBQVlBLE1BQU0yRixhQUFhLEdBQUcsQ0FDbEI7QUFDSWpDLE9BQUssRUFBRSxRQURYO0FBRUlQLE1BQUksRUFBRSxRQUZWO0FBR0lELE9BQUssRUFBRSxNQUhYO0FBSUlPLFFBQU0sRUFBRWIsQ0FBQyxJQUFJQTtBQUpqQixDQURrQixFQU9sQjtBQUNJYyxPQUFLLEVBQUUsUUFEWDtBQUVJUCxNQUFJLEVBQUUsUUFGVjtBQUdJRCxPQUFLLEVBQUUsUUFIWDtBQUlJTyxRQUFNLEVBQUViLENBQUMsSUFBSUEsQ0FBQyxDQUFDb0MsY0FBRjtBQUpqQixDQVBrQixDQUF0QjtBQWVBLE1BQU1ZLGdCQUFnQixHQUFHLENBQ3JCO0FBQ0lsQyxPQUFLLEVBQUUsUUFEWDtBQUVJUCxNQUFJLEVBQUUsUUFGVjtBQUdJRCxPQUFLLEVBQUUsTUFIWDtBQUlJTyxRQUFNLEVBQUViLENBQUMsSUFBSUE7QUFKakIsQ0FEcUIsRUFPckI7QUFDSWMsT0FBSyxFQUFFLFFBRFg7QUFFSVAsTUFBSSxFQUFFLE9BRlY7QUFHSUQsT0FBSyxFQUFFLFFBSFg7QUFJSU8sUUFBTSxFQUFFYixDQUFDLElBQUlBLENBQUMsR0FBRyxLQUFILEdBQVc7QUFKN0IsQ0FQcUIsQ0FBekI7O0FBZUEsTUFBTWlELElBQUksR0FBRyxDQUFDO0FBQ1ZDLGlCQURVO0FBRVZDLFdBRlU7QUFHVkMsdUJBSFU7QUFJVkM7QUFKVSxDQUFELEtBS1A7QUFDRixRQUFNM0YsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0EsUUFBTTRDLElBQUksR0FBRyxFQUFiO0FBRUE2RCx5REFBUyxDQUFDLE1BQU07QUFDWixVQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxTQUFLLE1BQU10QixLQUFYLElBQW9Ca0IsU0FBcEIsRUFBK0I7QUFDM0JJLFlBQU0sQ0FBQ3JCLElBQVAsQ0FBWUQsS0FBWjtBQUNIOztBQUVEdUIsdUVBQVksQ0FBQ0QsTUFBRCxDQUFaLENBQ0tFLElBREwsQ0FDVUMsR0FBRyxJQUFJO0FBQ1RMLHVCQUFpQixDQUFDSyxHQUFELENBQWpCO0FBRUEsVUFBSTVCLGVBQWUsR0FBRyxDQUF0Qjs7QUFFQSxXQUFLLE1BQU1HLEtBQVgsSUFBb0J5QixHQUFwQixFQUF5QjtBQUNyQjVCLHVCQUFlLElBQUlxQixTQUFTLENBQUNsQixLQUFELENBQVQsR0FBbUJ5QixHQUFHLENBQUN6QixLQUFELENBQXpDO0FBQ0g7O0FBRURtQiwyQkFBcUIsQ0FBQ3RCLGVBQUQsQ0FBckI7QUFDSCxLQVhMLEVBWUs2QixLQVpMLENBWVdDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FabEI7QUFjSCxHQXJCUSxFQXFCTixDQUFDVCxTQUFELENBckJNLENBQVQ7O0FBdUJBLE9BQUssTUFBTXpDLE1BQVgsSUFBcUJ5QyxTQUFyQixFQUFnQztBQUM1QjFELFFBQUksQ0FBQ3lDLElBQUwsQ0FBVTtBQUNOeEIsWUFETTtBQUVOcUQsWUFBTSxFQUFFWixTQUFTLENBQUN6QyxNQUFEO0FBRlgsS0FBVjtBQUlIOztBQUVELHNCQUNJO0FBQUssYUFBUyxFQUFFaEQsT0FBTyxDQUFDWCxJQUF4QjtBQUFBLDRCQUNJLHFFQUFDLHlEQUFEO0FBQ0ksZ0JBQVUsRUFBQyxRQURmO0FBRUksYUFBTyxFQUFFZ0csYUFGYjtBQUdJLFVBQUksRUFBRXRELElBSFY7QUFJSSxXQUFLLEVBQUUsR0FKWDtBQUtJLFlBQU0sRUFBRTtBQUNKN0IsZ0JBQVEsRUFBRSxRQUROO0FBRUowQixXQUFHLEVBQUUsQ0FGRDtBQUdKMEUsbUJBQVcsRUFBRTtBQUhUO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVlJLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkosZUFhSSxxRUFBQyx5REFBRDtBQUNJLGdCQUFVLEVBQUMsV0FEZjtBQUVJLGFBQU8sRUFBRWhCLGdCQUZiO0FBR0ksVUFBSSxFQUFFLEVBSFY7QUFJSSxXQUFLLEVBQUUsR0FKWDtBQUtJLFlBQU0sRUFBRTtBQUNKcEYsZ0JBQVEsRUFBRSxRQUROO0FBRUowQixXQUFHLEVBQUUsQ0FGRDtBQUdKMkUsa0JBQVUsRUFBRTtBQUhSO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTRCSCxDQW5FRDs7QUFxRUEsTUFBTXRCLE1BQU0sR0FBRyxDQUFDO0FBQ1pPLGlCQURZO0FBRVpDO0FBRlksQ0FBRCxNQUdSO0FBQ0hELGlCQURHO0FBRUhDO0FBRkcsQ0FIUSxDQUFmOztBQVFBLE1BQU1lLFFBQVEsR0FBRztBQUNiZCw2RkFEYTtBQUViQyxxRkFBaUJBO0FBRkosQ0FBakI7QUFLZVQsMEhBQU8sQ0FBQ0QsTUFBRCxFQUFTdUIsUUFBVCxDQUFQLENBQTBCakIsSUFBMUIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN2SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTWtCLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIsQzs7Ozs7Ozs7Ozs7O0FDYlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1DLGFBQWEsR0FBR0MsT0FBTyxLQUFLO0FBQ3JDQyxNQUFJLEVBQUVDLDREQUQrQjtBQUVyQ0Y7QUFGcUMsQ0FBTCxDQUE3QjtBQUtBLE1BQU1HLGtCQUFrQixHQUFHQyxLQUFLLEtBQUs7QUFDeENILE1BQUksRUFBRUMsa0VBRGtDO0FBRXhDRTtBQUZ3QyxDQUFMLENBQWhDO0FBS0EsTUFBTUMsb0JBQW9CLEdBQUdDLEdBQUcsS0FBSztBQUN4Q0wsTUFBSSxFQUFFQyxxRUFEa0M7QUFFeENJO0FBRndDLENBQUwsQ0FBaEM7QUFLQSxNQUFNQyxjQUFjLEdBQUdDLElBQUksS0FBSztBQUNuQ1AsTUFBSSxFQUFFQyw4REFENkI7QUFFbkNNO0FBRm1DLENBQUwsQ0FBM0I7QUFLQSxNQUFNQyxpQkFBaUIsR0FBR0MsTUFBTSxLQUFLO0FBQ3hDVCxNQUFJLEVBQUVDLGlFQURrQztBQUV4Q1E7QUFGd0MsQ0FBTCxDQUFoQztBQUtBLE1BQU1DLGVBQWUsR0FBR0MsTUFBTSxLQUFLO0FBQ3RDWCxNQUFJLEVBQUVDLCtEQURnQztBQUV0Q1U7QUFGc0MsQ0FBTCxDQUE5QjtBQUtBLE1BQU1DLGVBQWUsR0FBR0MsU0FBUyxLQUFLO0FBQ3pDYixNQUFJLEVBQUVDLCtEQURtQztBQUV6Q1k7QUFGeUMsQ0FBTCxDQUFqQztBQUtBLE1BQU1DLGVBQWUsR0FBR0MsU0FBUyxLQUFLO0FBQ3pDZixNQUFJLEVBQUVDLCtEQURtQztBQUV6Q2M7QUFGeUMsQ0FBTCxDQUFqQztBQUtBLE1BQU1DLGlCQUFpQixHQUFHdEUsV0FBVyxLQUFLO0FBQzdDc0QsTUFBSSxFQUFFQyxpRUFEdUM7QUFFN0N2RDtBQUY2QyxDQUFMLENBQXJDO0FBS0EsTUFBTXVFLFlBQVksR0FBRyxDQUFDMUYsTUFBRCxFQUFTcUQsTUFBVCxNQUFxQjtBQUM3Q29CLE1BQUksRUFBRUMsMkRBRHVDO0FBRTdDMUUsUUFGNkM7QUFHN0NxRDtBQUg2QyxDQUFyQixDQUFyQjtBQU1BLE1BQU1zQyxlQUFlLEdBQUdsRCxTQUFTLEtBQUs7QUFDekNnQyxNQUFJLEVBQUVDLDhEQURtQztBQUV6Q2pDO0FBRnlDLENBQUwsQ0FBakM7QUFLQSxNQUFNbUQsa0JBQWtCLEdBQUdDLFlBQVksS0FBSztBQUMvQ3BCLE1BQUksRUFBRUMsaUVBRHlDO0FBRS9DbUI7QUFGK0MsQ0FBTCxDQUF2QztBQUtBLE1BQU1uRCxxQkFBcUIsR0FBR3RCLGVBQWUsS0FBSztBQUNyRHFELE1BQUksRUFBRUMsc0VBRCtDO0FBRXJEdEQ7QUFGcUQsQ0FBTCxDQUE3QztBQUtBLE1BQU11QixpQkFBaUIsR0FBR3RCLFdBQVcsS0FBSztBQUM3Q29ELE1BQUksRUFBRUMsaUVBRHVDO0FBRTdDckQ7QUFGNkMsQ0FBTCxDQUFyQyxDOzs7Ozs7Ozs7Ozs7QUNwRVA7QUFBQSxNQUFNeUUsSUFBSSxHQUNOLCtCQURKLEMsQ0FFSTs7QUFHV0EsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQyxRQUFRLEdBQUdELDZDQUFJLEdBQUcsT0FBeEI7QUFFTyxNQUFNRSxXQUFXLEdBQUdsQixHQUFHLElBQzFCbUIsNENBQUssQ0FDQUMsSUFETCxDQUNXLEdBQUVILFFBQVMsRUFEdEIsRUFDeUI7QUFDakJqQjtBQURpQixDQUR6QixFQUlLL0IsSUFKTCxDQUlVb0QsT0FBTyxJQUFJQSxPQUFPLENBQUNDLElBSjdCLEVBS0tuRCxLQUxMLENBS1dDLEdBQUcsSUFBSTtBQUNWLFFBQU1BLEdBQU47QUFDSCxDQVBMLENBREc7QUFXQSxNQUFNbUQsZ0JBQWdCLEdBQUd2QixHQUFHLElBQy9CbUIsNENBQUssQ0FDQUMsSUFETCxDQUNVSCxRQUFRLEdBQUcsV0FEckIsRUFDa0M7QUFDMUJqQjtBQUQwQixDQURsQyxFQUlLL0IsSUFKTCxDQUlVb0QsT0FBTyxJQUFJQSxPQUFPLENBQUNDLElBSjdCLEVBS0tuRCxLQUxMLENBS1dDLEdBQUcsSUFBSTtBQUNWLFFBQU1BLEdBQU47QUFDSCxDQVBMLENBREc7QUFXQSxNQUFNb0QsbUJBQW1CLEdBQUd4QixHQUFHLElBQ2xDbUIsNENBQUssQ0FDQUMsSUFETCxDQUNVSCxRQUFRLEdBQUcsY0FEckIsRUFDcUM7QUFDN0JqQjtBQUQ2QixDQURyQyxFQUlLL0IsSUFKTCxDQUlVb0QsT0FBTyxJQUFJQSxPQUFPLENBQUNDLElBSjdCLEVBS0tuRCxLQUxMLENBS1dDLEdBQUcsSUFBSTtBQUNWLFFBQU1BLEdBQU47QUFDSCxDQVBMLENBREc7QUFXQSxNQUFNSixZQUFZLEdBQUdELE1BQU0sSUFDOUJvRCw0Q0FBSyxDQUNBQyxJQURMLENBQ1VILFFBQVEsR0FBRyxPQURyQixFQUM4QjtBQUN0QmxEO0FBRHNCLENBRDlCLEVBSUtFLElBSkwsQ0FJVW9ELE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxJQUo3QixFQUtLbkQsS0FMTCxDQUtXQyxHQUFHLElBQUk7QUFDVixRQUFNQSxHQUFOO0FBQ0gsQ0FQTCxDQURHLEM7Ozs7Ozs7Ozs7OztBQ3RDUDtBQUFBO0FBQUE7QUFFZVgsZ0lBQWYsRTs7Ozs7Ozs7Ozs7QUNGQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgICBQYXBlcixcclxuICAgIFR5cG9ncmFwaHksXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgcGFkZGluZzogMjAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIG1pbldpZHRoOiAyMjIsXHJcbiAgICB9LFxyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBDYXJkID0gKHtcclxuICAgIGhlYWRpbmcsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBjbGFzc05hbWUsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXBlciBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWU/IFtjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZV0uam9pbignICcpIDogY2xhc3Nlcy5yb290fVxyXG4gICAgICAgICAgICBlbGV2YXRpb249ezd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICB7aGVhZGluZ31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7Q29tcG9uZW50fVxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIH0sXHJcbiAgICBwaW46IHtcclxuICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICBoZWlnaHQ6IDAsIFxyXG4gICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgdHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuICAgICAgICBib3JkZXJCb3R0b206ICcxMDBweCBzb2xpZCAjMDA3YmZmJyxcclxuICAgICAgICB6SW5kZXg6IDksXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnYm90dG9tJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAyLjVzIGVhc2Utb3V0JyxcclxuICAgIH0sXHJcbiAgICBiYWxsOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgYm90dG9tOiAtNCxcclxuICAgICAgICBsZWZ0OiAtNCxcclxuICAgICAgICBoZWlnaHQ6IDEyLFxyXG4gICAgICAgIHdpZHRoOiAxMixcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDdiZmYnLFxyXG4gICAgICAgIHpJbmRleDogOSxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBQaW4gPSAoe1xyXG4gICAgZGVnLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICAvLyBjb25zdCBkZWcgPSBcclxuICAgIC8vIC8vICgoZGVmPyBkZWYgOiAwKSArIDEwMDAwKSAqIDAuMDAxNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYzNjM2MzYgLSA5MDtcclxuICAgIC8vIGRlZj8gLTM0IDogLTkwO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBpbn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke2RlZ31kZWcpYCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbGx9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaW47IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgUGluIGZyb20gJy4vUGluJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlIDUwJSA1MCUgNTAlIC8gMTAwJSAxMDAlIDAlIDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZWQgMCUsIHllbGxvdyAzMCUsIGdyZWVuIDEwMCUpJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB9LFxyXG4gICAgaW5uZXI6IHtcclxuICAgICAgICBoZWlnaHQ6IDcwLFxyXG4gICAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSA1MCUgNTAlIDUwJSAvIDEwMCUgMTAwJSAwJSAwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEdhdWdlID0gKHtcclxuICAgIGRlZyxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyfS8+XHJcbiAgICAgICAgICAgIDxQaW4gZGVnPXtkZWd9Lz4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYXVnZTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7XHJcbiAgICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEdhdWdlIGZyb20gJy4uL0dhdWdlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgIH0sXHJcbiAgICBvdXRlcjoge1xyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlIDUwJSA1MCUgNTAlIC8gMTAwJSAxMDAlIDAlIDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZWQgMCUsIHllbGxvdyAzMCUsIGdyZWVuIDEwMCUpJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB9LFxyXG4gICAgaW5uZXI6IHtcclxuICAgICAgICBoZWlnaHQ6IDcwLFxyXG4gICAgICAgIHdpZHRoOiAxNDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSA1MCUgNTAlIDUwJSAvIDEwMCUgMTAwJSAwJSAwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEdhdWdlQ2FyZCA9ICh7XHJcbiAgICBkZWcsXHJcbiAgICBoZWFkaW5nLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgIHtoZWFkaW5nfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxHYXVnZSBkZWc9e2RlZ30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhdWdlQ2FyZDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBNdWlUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIC8vIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgIG1heEhlaWdodDogJzcwJScsXHJcbiAgICAgICAgLy8gbWFyZ2luVG9wOiA1MCxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seSdcclxuICAgIH0sXHJcbiAgICB0b3A6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgVGFibGUgPSAoe1xyXG4gICAgdGFibGVUaXRsZSxcclxuICAgIHJvd3MsXHJcbiAgICBjb2x1bW5zLFxyXG4gICAgd2lkdGgsXHJcbiAgICBmaWx0ZXJhYmxlLFxyXG4gICAgc3R5bGVzLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgICAgICBlbGV2YXRpb249ezE1fVxyXG4gICAgICAgICAgICBzdHlsZT17e3dpZHRoLCAuLi5zdHlsZXN9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcH0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGFibGVUaXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIHtmaWx0ZXJhYmxlICYmIDxUZXh0RmllbGQgbGFiZWw9J0ZpbHRlciBUaWNrZXInIG9uQ2hhbmdlPXtlID0+IHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSl9IC8+fVxyXG4gICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxNdWlUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJlbD1cInN0aWNreSB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IGNvbHVtbi5taW5XaWR0aCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17Y29sdW1uLmFsaWdufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocm93ID0+IGZpbHRlci5sZW5ndGggPyByb3cuc3ltYm9sLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpIDogdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJvdywgaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNvbHVtbiwgaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uZm9ybWF0KHJvd1tjb2x1bW4ubGFiZWxdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L011aVRhYmxlPlxyXG4gICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICAgIFBhcGVyLCBcclxuICAgIFR5cG9ncmFwaHksXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZCc7XHJcbmltcG9ydCBHYXVnZUNhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9HYXVnZUNhcmQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDYwMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgaW50cm86IHtcclxuICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIH0sXHJcbiAgICBnYXVnZToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JywgICAgICAgIFxyXG4gICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiAyMDAsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogMzAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCAgICAgICAgXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGluZm9DYXJkczoge1xyXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIGluZm9DYXJkOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnMTBweCA1cHggMCA1cHgnLFxyXG4gICAgfSxcclxuICAgIGV4dHJhOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgcGFkZGluZzogJzEwMHB4IDAnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luVG9wOiA1MCxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogNDAsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgQ29udGVudCA9ICh7XHJcbiAgICBmaXJzdE5hbWUsXHJcbiAgICBidXlpbmdQb3dlcixcclxuICAgIHRvdGFsU3RvY2tXb3J0aCxcclxuICAgIHN0b2NrUHJpY2VzLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgdG90YWxTdG9ja3MgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0b2NrIGluIHN0b2NrUHJpY2VzKSB7XHJcbiAgICAgICAgdG90YWxTdG9ja3MucHVzaChzdG9jayk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0T3ZlcmFsbEdhaW5UZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChidXlpbmdQb3dlciAtIDEwMDAwIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYE92ZXJhbGwgZ2FpbjogLSQke2J1eWluZ1Bvd2VyPyAoLShidXlpbmdQb3dlciAtIDEwMDAwKSkudG9Mb2NhbGVTdHJpbmcoKSA6IDB9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgT3ZlcmFsbCBnYWluOiAkJHtidXlpbmdQb3dlcj8gKGJ1eWluZ1Bvd2VyIC0gMTAwMDApLnRvTG9jYWxlU3RyaW5nKCkgOiAwfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRUb2RheXNFYXJuaW5ncyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IGJ1eWluZ1Bvd2VyICsgdG90YWxTdG9ja1dvcnRoIC0gMTAwMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvdGFsIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYC0kJHsoLXRvdGFsKS50b0xvY2FsZVN0cmluZygpfWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYCQke3RvdGFsLnRvTG9jYWxlU3RyaW5nKCl9YDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm99XHJcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cclxuICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIFN0b2luayBTaW1zLCB7Zmlyc3ROYW1lfSFcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvaW5rIFNpbXMgaXMgYSBzaW11bGF0b3IgdGhhdCBtb2NrcyBob3cgdGhlIHJlYWwgbGlmZSBzdG9jayBleGNoYW5nZXMgd29yay4gWW91IGNhbiBidXkgb3Igc2VsbCBhbnkgc3RvY2tzIGF2YWlsYWJsZSBvbiB0aGUgc3RvY2sgZXhjaGFuZ2UuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ2F1Z2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxldmF0aW9uPXs3fSAgICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8R2F1Z2VDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZz17YnV5aW5nUG93ZXI/IC0zMCA6IC05MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17YEJ1eWluZyBQb3dlcjogJCR7YnV5aW5nUG93ZXI/IGJ1eWluZ1Bvd2VyLnRvTG9jYWxlU3RyaW5nKCkgOiAwfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8R2F1Z2VDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZz17YnV5aW5nUG93ZXI/IDAgOiAtOTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2dldE92ZXJhbGxHYWluVGV4dCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0NhcmRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0NhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9J1RvdGFsIFdvcnRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJz4keyhidXlpbmdQb3dlciArIHRvdGFsU3RvY2tXb3J0aCkudG9Mb2NhbGVTdHJpbmcoKX08L1R5cG9ncmFwaHk+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9DYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiVG90YWwgU3RvY2sgV29ydGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJz4ke3BhcnNlRmxvYXQoKHRvdGFsU3RvY2tXb3J0aCkudG9GaXhlZCgyKSkudG9Mb2NhbGVTdHJpbmcoKX08L1R5cG9ncmFwaHk+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9DYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPSdUb3AgRWFybmluZ3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudD17PFR5cG9ncmFwaHkgdmFyaWFudD0naDMnPiR7TWF0aC5tYXgoYnV5aW5nUG93ZXIgKyB0b3RhbFN0b2NrV29ydGggLSAxMDAwMCwgMCkudG9Mb2NhbGVTdHJpbmcoKX08L1R5cG9ncmFwaHk+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9DYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiVG9kYXkncyBFYXJuaW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudD17PFR5cG9ncmFwaHkgdmFyaWFudD0naDMnPntnZXRUb2RheXNFYXJuaW5ncygpfTwvVHlwb2dyYXBoeT59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0NhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJBdmVyYWdlIEVhcm5pbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50PXs8VHlwb2dyYXBoeSB2YXJpYW50PSdoMyc+e2dldFRvZGF5c0Vhcm5pbmdzKCl9PC9UeXBvZ3JhcGh5Pn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQ2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz0nTnVtYmVyIG9mIHN0b2NrcyBvd25lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50PXs8VHlwb2dyYXBoeSB2YXJpYW50PSdoMyc+e3RvdGFsU3RvY2tzLmxlbmd0aC50b0xvY2FsZVN0cmluZygpfTwvVHlwb2dyYXBoeT59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXh0cmF9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICBNT1JFIEFOQUxZVElDUyBDT01JTkcgU09PTiFcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBzdGF0ZXMgPSAoe1xyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgYnV5aW5nUG93ZXIsXHJcbiAgICB0b3RhbFN0b2NrV29ydGgsXHJcbiAgICBzdG9ja1ByaWNlcyxcclxufSkgPT4gKHtcclxuICAgIGZpcnN0TmFtZSxcclxuICAgIGJ1eWluZ1Bvd2VyLFxyXG4gICAgdG90YWxTdG9ja1dvcnRoLFxyXG4gICAgc3RvY2tQcmljZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZXMpKENvbnRlbnQpOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFVzZXJXb3J0aCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgeyBcclxuICAgIHVwZGF0ZVRvdGFsU3RvY2tXb3J0aCxcclxuICAgIHVwZGF0ZVN0b2NrUHJpY2VzLFxyXG59IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgcGFkZGluZzogJzEwMHB4IDIwcHgnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIG1pbldpZHRoOiAxMjAwLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzdG9ja3NDb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnc3ltYm9sJyxcclxuICAgICAgICBuYW1lOiAnU3ltYm9sJyxcclxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIGZvcm1hdDogZSA9PiBlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ3NoYXJlcycsXHJcbiAgICAgICAgbmFtZTogJ1NoYXJlcycsXHJcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGZvcm1hdDogZSA9PiBlLnRvTG9jYWxlU3RyaW5nKCksXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuY29uc3Qgd2F0Y2hMaXN0Q29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ3N5bWJvbCcsXHJcbiAgICAgICAgbmFtZTogJ1N5bWJvbCcsXHJcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBmb3JtYXQ6IGUgPT4gZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdzaGFyZXMnLFxyXG4gICAgICAgIG5hbWU6ICdPd25lZCcsXHJcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIGZvcm1hdDogZSA9PiBlID8gJ1llcycgOiAnTm8nLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoe1xyXG4gICAgc2lkZVBhbmVsT3BlbmVkLFxyXG4gICAgcG9ydGZvbGlvLFxyXG4gICAgdXBkYXRlVG90YWxTdG9ja1dvcnRoLFxyXG4gICAgdXBkYXRlU3RvY2tQcmljZXMsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b2NrcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHN0b2NrIGluIHBvcnRmb2xpbykge1xyXG4gICAgICAgICAgICBzdG9ja3MucHVzaChzdG9jayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRVc2VyV29ydGgoc3RvY2tzKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RvY2tQcmljZXMocmVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxTdG9ja1dvcnRoID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHN0b2NrIGluIHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU3RvY2tXb3J0aCArPSBwb3J0Zm9saW9bc3RvY2tdICogcmVzW3N0b2NrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUb3RhbFN0b2NrV29ydGgodG90YWxTdG9ja1dvcnRoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcbiAgICB9LCBbcG9ydGZvbGlvXSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBzeW1ib2wgaW4gcG9ydGZvbGlvKSB7XHJcbiAgICAgICAgcm93cy5wdXNoKHtcclxuICAgICAgICAgICAgc3ltYm9sLFxyXG4gICAgICAgICAgICBzaGFyZXM6IHBvcnRmb2xpb1tzeW1ib2xdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgdGFibGVUaXRsZT0nU3RvY2tzJ1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17c3RvY2tzQ29sdW1uc31cclxuICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgc3R5bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdzdGlja3knLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIHRhYmxlVGl0bGU9J1dhdGNobGlzdCdcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e3dhdGNoTGlzdENvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICByb3dzPXtbXX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3Qgc3RhdGVzID0gKHtcclxuICAgIHNpZGVQYW5lbE9wZW5lZCxcclxuICAgIHBvcnRmb2xpbyxcclxufSkgPT4gKHtcclxuICAgIHNpZGVQYW5lbE9wZW5lZCxcclxuICAgIHBvcnRmb2xpbyxcclxufSk7XHJcblxyXG5jb25zdCBkaXNwYXRjaCA9IHtcclxuICAgIHVwZGF0ZVRvdGFsU3RvY2tXb3J0aCxcclxuICAgIHVwZGF0ZVN0b2NrUHJpY2VzLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZXMsIGRpc3BhdGNoKShIb21lKTsiLCJleHBvcnQgY29uc3QgVVBEQVRFX0xPQURJTkcgPSAnVVBEQVRFX0xPQURJTkcnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0xBTkRJTkdfU1RBVEUgPSAnVVBEQVRFX0xBTkRJTkdfU1RBVEUnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfTE9HSU5fU1RBVEUgPSAnVVBEQVRFX1VTRVJfTE9HSU5fU1RBVEUnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVJfSU5GTyA9ICdVUERBVEVfVVNFUl9JTkZPJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9TRUFSQ0hfSU5QVVQgPSAnVVBEQVRFX1NFQVJDSF9JTlBVVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0lERV9QQU5FTCA9ICdVUERBVEVfU0lERV9QQU5FTCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU1RPQ0tfSU5GTyA9ICdVUERBVEVfU1RPQ0tfSU5GTyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0hBUlRfVFlQRSA9ICdVUERBVEVfQ0hBUlRfVFlQRSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQlVZSU5HX1BPV0VSID0gJ1VQREFURV9CVVlJTkdfUE9XRVInO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NIQVJFUyA9ICdVUERBVEVfU0hBUkVTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1JURk9MSU8gPSAnVVBEQVRFX1BPUlRGT0xJTyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVFJBTlNBQ1RJT05TID0gJ1VQREFURV9UUkFOU0FDVElPTlMnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1RPVEFMX1NUT0NLX1dPUlRIID0gJ1VQREFURV9UT1RBTF9TVE9DS19XT1JUSCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU1RPQ0tfUFJJQ0VTID0gJ1VQREFURV9TVE9DS19QUklDRVMnOyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uLXR5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMb2FkaW5nID0gbG9hZGluZyA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX0xPQURJTkcsXHJcbiAgICBsb2FkaW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVMYW5kaW5nU3RhdGUgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX0xBTkRJTkdfU1RBVEUsXHJcbiAgICBzdGF0ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckxvZ2luU3RhdGUgPSB1aWQgPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9VU0VSX0xPR0lOX1NUQVRFLFxyXG4gICAgdWlkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VySW5mbyA9IGluZm8gPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9VU0VSX0lORk8sXHJcbiAgICBpbmZvLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTZWFyY2hJbnB1dCA9IHRpY2tlciA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX1NFQVJDSF9JTlBVVCxcclxuICAgIHRpY2tlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2lkZVBhbmVsID0gb3BlbmVkID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfU0lERV9QQU5FTCxcclxuICAgIG9wZW5lZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU3RvY2tJbmZvID0gc3RvY2tJbmZvID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfU1RPQ0tfSU5GTyxcclxuICAgIHN0b2NrSW5mbyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2hhcnRUeXBlID0gY2hhcnRUeXBlID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfQ0hBUlRfVFlQRSxcclxuICAgIGNoYXJ0VHlwZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQnV5aW5nUG93ZXIgPSBidXlpbmdQb3dlciA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX0JVWUlOR19QT1dFUixcclxuICAgIGJ1eWluZ1Bvd2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTaGFyZXMgPSAoc3ltYm9sLCBzaGFyZXMpID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfU0hBUkVTLFxyXG4gICAgc3ltYm9sLFxyXG4gICAgc2hhcmVzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQb3J0Zm9saW8gPSBwb3J0Zm9saW8gPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9QT1JURk9MSU8sXHJcbiAgICBwb3J0Zm9saW8sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRyYW5zYWN0aW9ucyA9IHRyYW5zYWN0aW9ucyA9PiAoe1xyXG4gICAgdHlwZTogdHlwZXMuVVBEQVRFX1RSQU5TQUNUSU9OUyxcclxuICAgIHRyYW5zYWN0aW9ucyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVG90YWxTdG9ja1dvcnRoID0gdG90YWxTdG9ja1dvcnRoID0+ICh7XHJcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfVE9UQUxfU1RPQ0tfV09SVEgsXHJcbiAgICB0b3RhbFN0b2NrV29ydGgsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVN0b2NrUHJpY2VzID0gc3RvY2tQcmljZXMgPT4gKHtcclxuICAgIHR5cGU6IHR5cGVzLlVQREFURV9TVE9DS19QUklDRVMsXHJcbiAgICBzdG9ja1ByaWNlcyxcclxufSk7IiwiY29uc3QgcGF0aCA9IFxyXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvJ1xyXG4gICAgLy8gJy9hcGkvdjEvJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXRoOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJy4vcGF0aCc7XHJcblxyXG5jb25zdCB1c2VyUGF0aCA9IHBhdGggKyAndXNlci8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gdWlkID0+IChcclxuICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYCR7dXNlclBhdGh9YCwge1xyXG4gICAgICAgICAgICB1aWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy5kYXRhKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUG9ydGZvbGlvID0gdWlkID0+IChcclxuICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QodXNlclBhdGggKyAncG9ydGZvbGlvJywge1xyXG4gICAgICAgICAgICB1aWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy5kYXRhKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyVHJhbnNhY3Rpb25zID0gdWlkID0+IChcclxuICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QodXNlclBhdGggKyAndHJhbnNhY3Rpb25zJywge1xyXG4gICAgICAgICAgICB1aWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4gcmVzdWx0cy5kYXRhKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyV29ydGggPSBzdG9ja3MgPT4gKFxyXG4gICAgYXhpb3NcclxuICAgICAgICAucG9zdCh1c2VyUGF0aCArICd3b3J0aCcsIHtcclxuICAgICAgICAgICAgc3RvY2tzLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiByZXN1bHRzLmRhdGEpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9KVxyXG4pOyIsImltcG9ydCBIb21lIGZyb20gJy4uL2Zyb250ZW5kL2NvbnRhaW5lcnMvSG9tZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=