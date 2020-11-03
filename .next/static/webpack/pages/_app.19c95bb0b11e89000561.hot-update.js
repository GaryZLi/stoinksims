webpackHotUpdate_N_E("pages/_app",{

/***/ "./frontend/App.js":
/*!*************************!*\
  !*** ./frontend/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _containers_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/Loading */ "./frontend/containers/Loading/index.js");
/* harmony import */ var _containers_Landing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/Landing */ "./frontend/containers/Landing/index.js");
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/Home */ "./frontend/containers/Home/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth */ "./frontend/services/auth.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/actions */ "./frontend/redux/actions.js");



var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\App.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import Router from 'next/router';








var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {// height: '100%',
    // width: '100%',
    // minWidth: 800,
    // overflow: 'auto',
    // position: 'relative',
    // fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
  }
});

var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      uid = _ref.uid,
      updateUserLoginState = _ref.updateUserLoginState;
  var initialRender = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_8__["isLoggedIn"])().then(function (results) {
      updateUserLoginState(results); // setInitialRender(false);

      initialRender.current = false;
    })["catch"](function (err) {// setInitialRender(false);
      // initialRender.current = false;
    });
  }, []); // if (initialRender.current) return <></>;

  console.log('here', Component.WrappedComponent.name, uid, initialRender.current);

  if (uid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_containers_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this);
  } else {
    // Router.push('/login');
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_containers_Landing__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 16
    }, _this);
  }
};

_s(App, "HApQaGXhjh8tl41RFYk+TtLc/DM=", false, function () {
  return [useStyles];
});

_c = App;

var mapStateToProps = function mapStateToProps(_ref2) {
  var loading = _ref2.loading,
      uid = _ref2.uid;
  return {
    loading: loading,
    uid: uid
  };
};

var mapDispatchToProps = {
  updateUserLoginState: _redux_actions__WEBPACK_IMPORTED_MODULE_9__["updateUserLoginState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(App));

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvQXBwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidWlkIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJpbml0aWFsUmVuZGVyIiwidXNlUmVmIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwicmVzdWx0cyIsImN1cnJlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiV3JhcHBlZENvbXBvbmVudCIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUUsQ0FDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFORTtBQURtQixDQUFELENBQTVCOztBQVdBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BS047QUFBQTs7QUFBQSxNQUpGQyxTQUlFLFFBSkZBLFNBSUU7QUFBQSxNQUhGQyxTQUdFLFFBSEZBLFNBR0U7QUFBQSxNQUZGQyxHQUVFLFFBRkZBLEdBRUU7QUFBQSxNQURGQyxvQkFDRSxRQURGQSxvQkFDRTtBQUNGLE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCO0FBRUFXLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxxRUFBVSxHQUNUQyxJQURELENBQ00sVUFBQUMsT0FBTyxFQUFJO0FBQ2JQLDBCQUFvQixDQUFDTyxPQUFELENBQXBCLENBRGEsQ0FFYjs7QUFDQU4sbUJBQWEsQ0FBQ08sT0FBZCxHQUF3QixLQUF4QjtBQUNILEtBTEQsV0FNTyxVQUFBQyxHQUFHLEVBQUksQ0FDVjtBQUNBO0FBRUgsS0FWRDtBQVlILEdBYlEsRUFhTixFQWJNLENBQVQsQ0FKRSxDQW9CRjs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQmQsU0FBUyxDQUFDZSxnQkFBVixDQUEyQkMsSUFBL0MsRUFBcURkLEdBQXJELEVBQTBERSxhQUFhLENBQUNPLE9BQXhFOztBQUdBLE1BQUlULEdBQUosRUFBUztBQUNMLHdCQUNJO0FBQUssZUFBUyxFQUFFSSxPQUFPLENBQUNSLElBQXhCO0FBQUEsOEJBQ0kscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsU0FBRCxvQkFBZUcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFNSCxHQVBELE1BUUs7QUFDRDtBQUNBLHdCQUFPLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNIO0FBQ0osQ0F6Q0Q7O0dBQU1GLEc7VUFPY0gsUzs7O0tBUGRHLEc7O0FBMkNOLElBQU1rQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFDcEJDLE9BRG9CLFNBQ3BCQSxPQURvQjtBQUFBLE1BRXBCaEIsR0FGb0IsU0FFcEJBLEdBRm9CO0FBQUEsU0FHakI7QUFDSGdCLFdBQU8sRUFBUEEsT0FERztBQUVIaEIsT0FBRyxFQUFIQTtBQUZHLEdBSGlCO0FBQUEsQ0FBeEI7O0FBUUEsSUFBTWlCLGtCQUFrQixHQUFHO0FBQ3ZCaEIsc0JBQW9CLEVBQXBCQSxtRUFBb0JBO0FBREcsQ0FBM0I7QUFJZWlCLDBIQUFPLENBQUNILGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDcEIsR0FBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE5Yzk1YmIwYjExZTg5MDAwNTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIHVzZUVmZmVjdCwgXG4gICAgdXNlUmVmLFxufSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2NvbnRhaW5lcnMvTG9hZGluZyc7XG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL2NvbnRhaW5lcnMvTGFuZGluZyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbnRhaW5lcnMvSG9tZSc7XG5pbXBvcnQgeyBpc0xvZ2dlZEluIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoJztcbmltcG9ydCB7IHVwZGF0ZVVzZXJMb2dpblN0YXRlIH0gZnJvbSAnLi9yZWR1eC9hY3Rpb25zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgICAvLyBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgLy8gbWluV2lkdGg6IDgwMCxcbiAgICAgICAgLy8gb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgLy8gcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIC8vIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLEhlbHZldGljYSBOZXVlLEZpcmEgU2FucyxVYnVudHUsT3h5Z2VuLE94eWdlbiBTYW5zLENhbnRhcmVsbCxEcm9pZCBTYW5zLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbCxMdWNpZGEgR3JhbmRlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJyxcbiAgICB9XG59KTtcblxuY29uc3QgQXBwID0gKHtcbiAgICBDb21wb25lbnQsXG4gICAgcGFnZVByb3BzLFxuICAgIHVpZCxcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcbn0pID0+IHtcbiAgICBjb25zdCBpbml0aWFsUmVuZGVyID0gdXNlUmVmKHRydWUpOyAgICBcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc0xvZ2dlZEluKClcbiAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZShyZXN1bHRzKTtcbiAgICAgICAgICAgIC8vIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xuICAgICAgICAgICAgaW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gc2V0SW5pdGlhbFJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAvLyBpbml0aWFsUmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcblxuICAgICAgICB9KTtcblxuICAgIH0sIFtdKTtcblxuICAgIFxuICAgIC8vIGlmIChpbml0aWFsUmVuZGVyLmN1cnJlbnQpIHJldHVybiA8PjwvPjtcbiAgICBjb25zb2xlLmxvZygnaGVyZScsIENvbXBvbmVudC5XcmFwcGVkQ29tcG9uZW50Lm5hbWUsIHVpZCwgaW5pdGlhbFJlbmRlci5jdXJyZW50KVxuICAgIFxuXG4gICAgaWYgKHVpZCkge1xuICAgICAgICByZXR1cm4gKCAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICByZXR1cm4gPExhbmRpbmcvPlxuICAgIH1cbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7XG4gICAgbG9hZGluZyxcbiAgICB1aWQsXG59KSA9PiAoe1xuICAgIGxvYWRpbmcsXG4gICAgdWlkLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==