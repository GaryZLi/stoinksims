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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _containers_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/Loading */ "./frontend/containers/Loading/index.js");
/* harmony import */ var _containers_Landing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/Landing */ "./frontend/containers/Landing/index.js");
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/Home */ "./frontend/containers/Home/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth */ "./frontend/services/auth.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redux/actions */ "./frontend/redux/actions.js");




var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\App.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      initialRender = _useState[0],
      setInitialRender = _useState[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_9__["isLoggedIn"])().then(function (results) {
      updateUserLoginState(results); // setInitialRender(false);
    })["catch"](function (err) {// setInitialRender(false);
    });
  }, []);
  console.log('here', Component.WrappedComponent.name, uid, initialRender);
  if (initialRender) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false);

  if (uid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_containers_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, _this);
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false);
  }
};

_s(App, "mEuDpCYNW/2X6f1JwtZdY1Y/lHs=", false, function () {
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
  updateUserLoginState: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["updateUserLoginState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(App));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvQXBwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidWlkIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJ1c2VTdGF0ZSIsImluaXRpYWxSZW5kZXIiLCJzZXRJbml0aWFsUmVuZGVyIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwicmVzdWx0cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJXcmFwcGVkQ29tcG9uZW50IiwibmFtZSIsIlJvdXRlciIsInB1c2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFLENBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkU7QUFEbUIsQ0FBRCxDQUE1Qjs7QUFXQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUtOO0FBQUE7O0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsU0FHRSxRQUhGQSxTQUdFO0FBQUEsTUFGRkMsR0FFRSxRQUZGQSxHQUVFO0FBQUEsTUFERkMsb0JBQ0UsUUFERkEsb0JBQ0U7O0FBQUEsa0JBQ3dDQyxzREFBUSxDQUFDLElBQUQsQ0FEaEQ7QUFBQSxNQUNLQyxhQURMO0FBQUEsTUFDb0JDLGdCQURwQjs7QUFFRixNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFFQVkseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLHFFQUFVLEdBQ1RDLElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDYlIsMEJBQW9CLENBQUNRLE9BQUQsQ0FBcEIsQ0FEYSxDQUViO0FBQ0gsS0FKRCxXQUtPLFVBQUFDLEdBQUcsRUFBSSxDQUNWO0FBQ0gsS0FQRDtBQVNILEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQmQsU0FBUyxDQUFDZSxnQkFBVixDQUEyQkMsSUFBL0MsRUFBcURkLEdBQXJELEVBQTBERyxhQUExRDtBQUVBLE1BQUlBLGFBQUosRUFBbUIsb0JBQU8sdUpBQVA7O0FBR25CLE1BQUlILEdBQUosRUFBUztBQUNMLHdCQUNJO0FBQUssZUFBUyxFQUFFSyxPQUFPLENBQUNULElBQXhCO0FBQUEsOEJBQ0kscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsU0FBRCxvQkFBZUcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFNSCxHQVBELE1BUUs7QUFDRGdCLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBQ0Esd0JBQU8sdUpBQVA7QUFDSDtBQUNKLENBdENEOztHQUFNbkIsRztVQU9jSCxTOzs7S0FQZEcsRzs7QUF3Q04sSUFBTW9CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUNwQkMsT0FEb0IsU0FDcEJBLE9BRG9CO0FBQUEsTUFFcEJsQixHQUZvQixTQUVwQkEsR0FGb0I7QUFBQSxTQUdqQjtBQUNIa0IsV0FBTyxFQUFQQSxPQURHO0FBRUhsQixPQUFHLEVBQUhBO0FBRkcsR0FIaUI7QUFBQSxDQUF4Qjs7QUFRQSxJQUFNbUIsa0JBQWtCLEdBQUc7QUFDdkJsQixzQkFBb0IsRUFBcEJBLG9FQUFvQkE7QUFERyxDQUEzQjtBQUllbUIsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkN0QixHQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzIwZjY3OTc4OGI1MWUxYmZhNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdXNlRWZmZWN0LCBcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9jb250YWluZXJzL0xvYWRpbmcnO1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9jb250YWluZXJzL0xhbmRpbmcnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb250YWluZXJzL0hvbWUnO1xuaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XG5pbXBvcnQgeyB1cGRhdGVVc2VyTG9naW5TdGF0ZSB9IGZyb20gJy4vcmVkdXgvYWN0aW9ucyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC8vIG1pbldpZHRoOiA4MDAsXG4gICAgICAgIC8vIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAvLyBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxGaXJhIFNhbnMsVWJ1bnR1LE94eWdlbixPeHlnZW4gU2FucyxDYW50YXJlbGwsRHJvaWQgU2FucyxBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2wsTHVjaWRhIEdyYW5kZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZicsXG4gICAgfVxufSk7XG5cbmNvbnN0IEFwcCA9ICh7XG4gICAgQ29tcG9uZW50LFxuICAgIHBhZ2VQcm9wcyxcbiAgICB1aWQsXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXG59KSA9PiB7XG4gICAgY29uc3QgW2luaXRpYWxSZW5kZXIsIHNldEluaXRpYWxSZW5kZXJdID0gdXNlU3RhdGUodHJ1ZSk7ICAgIFxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTG9nZ2VkSW4oKVxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlKHJlc3VsdHMpO1xuICAgICAgICAgICAgLy8gc2V0SW5pdGlhbFJlbmRlcihmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gc2V0SW5pdGlhbFJlbmRlcihmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2coJ2hlcmUnLCBDb21wb25lbnQuV3JhcHBlZENvbXBvbmVudC5uYW1lLCB1aWQsIGluaXRpYWxSZW5kZXIpXG5cbiAgICBpZiAoaW5pdGlhbFJlbmRlcikgcmV0dXJuIDw+PC8+O1xuICAgIFxuXG4gICAgaWYgKHVpZCkge1xuICAgICAgICByZXR1cm4gKCAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICByZXR1cm4gPD48Lz5cbiAgICB9XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xuICAgIGxvYWRpbmcsXG4gICAgdWlkLFxufSkgPT4gKHtcbiAgICBsb2FkaW5nLFxuICAgIHVpZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=