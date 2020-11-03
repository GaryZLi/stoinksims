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
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth */ "./frontend/services/auth.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux/actions */ "./frontend/redux/actions.js");




var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\App.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // import Router from 'next/router';




 // import Home from './containers/Home';



var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    height: '100%',
    width: '100%'
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
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_7__["isLoggedIn"])().then(function (results) {
      updateUserLoginState(results);
      setInitialRender(false);
    })["catch"](function (err) {
      console.log(err);
      setInitialRender(false);
    });
  }, []);
  if (initialRender) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false);

  if (uid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_containers_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: "sidebar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_containers_Landing__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 16
    }, _this);
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
  updateUserLoginState: _redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateUserLoginState"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvQXBwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiaGVpZ2h0Iiwid2lkdGgiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1aWQiLCJ1cGRhdGVVc2VyTG9naW5TdGF0ZSIsInVzZVN0YXRlIiwiaW5pdGlhbFJlbmRlciIsInNldEluaXRpYWxSZW5kZXIiLCJjbGFzc2VzIiwidXNlRWZmZWN0IiwiaXNMb2dnZWRJbiIsInRoZW4iLCJyZXN1bHRzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsImxvYWRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFVBQU0sRUFBRSxNQUROO0FBRUZDLFNBQUssRUFBRTtBQUZMO0FBRG1CLENBQUQsQ0FBNUI7O0FBT0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FLTjtBQUFBOztBQUFBLE1BSkZDLFNBSUUsUUFKRkEsU0FJRTtBQUFBLE1BSEZDLFNBR0UsUUFIRkEsU0FHRTtBQUFBLE1BRkZDLEdBRUUsUUFGRkEsR0FFRTtBQUFBLE1BREZDLG9CQUNFLFFBREZBLG9CQUNFOztBQUFBLGtCQUN3Q0Msc0RBQVEsQ0FBQyxJQUFELENBRGhEO0FBQUEsTUFDS0MsYUFETDtBQUFBLE1BQ29CQyxnQkFEcEI7O0FBRUYsTUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBRUFjLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxxRUFBVSxHQUNUQyxJQURELENBQ00sVUFBQUMsT0FBTyxFQUFJO0FBQ2JSLDBCQUFvQixDQUFDUSxPQUFELENBQXBCO0FBQ0FMLHNCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxLQUpELFdBS08sVUFBQU0sR0FBRyxFQUFJO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FOLHNCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxLQVJEO0FBVUgsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLE1BQUlELGFBQUosRUFBbUIsb0JBQU8sdUpBQVA7O0FBRW5CLE1BQUlILEdBQUosRUFBUztBQUNMLHdCQUNJO0FBQUssZUFBUyxFQUFFSyxPQUFPLENBQUNYLElBQXhCO0FBQUEsOEJBQ0kscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUtJLHFFQUFDLFNBQUQsb0JBQWVLLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBU0gsR0FWRCxNQVdLO0FBQ0Qsd0JBQU8scUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0g7QUFDSixDQXRDRDs7R0FBTUYsRztVQU9jTCxTOzs7S0FQZEssRzs7QUF3Q04sSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUNwQkMsT0FEb0IsU0FDcEJBLE9BRG9CO0FBQUEsTUFFcEJkLEdBRm9CLFNBRXBCQSxHQUZvQjtBQUFBLFNBR2pCO0FBQ0hjLFdBQU8sRUFBUEEsT0FERztBQUVIZCxPQUFHLEVBQUhBO0FBRkcsR0FIaUI7QUFBQSxDQUF4Qjs7QUFRQSxJQUFNZSxrQkFBa0IsR0FBRztBQUN2QmQsc0JBQW9CLEVBQXBCQSxtRUFBb0JBO0FBREcsQ0FBM0I7QUFJZWUsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNsQixHQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzY5MjZlZGIzODAzMGIzYWQ5ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdXNlRWZmZWN0LCBcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9jb250YWluZXJzL0xvYWRpbmcnO1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9jb250YWluZXJzL0xhbmRpbmcnO1xuLy8gaW1wb3J0IEhvbWUgZnJvbSAnLi9jb250YWluZXJzL0hvbWUnO1xuaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XG5pbXBvcnQgeyB1cGRhdGVVc2VyTG9naW5TdGF0ZSB9IGZyb20gJy4vcmVkdXgvYWN0aW9ucyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfVxufSk7XG5cbmNvbnN0IEFwcCA9ICh7XG4gICAgQ29tcG9uZW50LFxuICAgIHBhZ2VQcm9wcyxcbiAgICB1aWQsXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXG59KSA9PiB7XG4gICAgY29uc3QgW2luaXRpYWxSZW5kZXIsIHNldEluaXRpYWxSZW5kZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNMb2dnZWRJbigpXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgdXBkYXRlVXNlckxvZ2luU3RhdGUocmVzdWx0cyk7XG4gICAgICAgICAgICBzZXRJbml0aWFsUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgc2V0SW5pdGlhbFJlbmRlcihmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gICAgaWYgKGluaXRpYWxSZW5kZXIpIHJldHVybiA8PjwvPjtcbiAgICBcbiAgICBpZiAodWlkKSB7XG4gICAgICAgIHJldHVybiAoICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhclxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxMYW5kaW5nLz5cbiAgICB9XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xuICAgIGxvYWRpbmcsXG4gICAgdWlkLFxufSkgPT4gKHtcbiAgICBsb2FkaW5nLFxuICAgIHVpZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=