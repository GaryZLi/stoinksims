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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      initialRender = _useState[0],
      setInitialRender = _useState[1];

  var classes = useStyles();
  console.log(Component);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_8__["isLoggedIn"])().then(function (results) {
      updateUserLoginState(results);
      setInitialRender(false);
    })["catch"](function (err) {
      setInitialRender(false);
    });
  }, []); // if (initialRender) return <></>;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, _this) // <div className={classes.root}>
  //     <Loading />
  //     <Home/>
  //     {/* {uid
  //         ? (
  //             <Home/>
  //         )
  //         : (
  //             <Landing />
  //         )
  //     } */}
  // </div>
  ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvQXBwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidWlkIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJ1c2VTdGF0ZSIsImluaXRpYWxSZW5kZXIiLCJzZXRJbml0aWFsUmVuZGVyIiwiY2xhc3NlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwidGhlbiIsInJlc3VsdHMiLCJlcnIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHNFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRSxDQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5FO0FBRG1CLENBQUQsQ0FBNUI7O0FBV0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FLTjtBQUFBOztBQUFBLE1BSkZDLFNBSUUsUUFKRkEsU0FJRTtBQUFBLE1BSEZDLFNBR0UsUUFIRkEsU0FHRTtBQUFBLE1BRkZDLEdBRUUsUUFGRkEsR0FFRTtBQUFBLE1BREZDLG9CQUNFLFFBREZBLG9CQUNFOztBQUFBLGtCQUN3Q0Msc0RBQVEsQ0FBQyxJQUFELENBRGhEO0FBQUEsTUFDS0MsYUFETDtBQUFBLE1BQ29CQyxnQkFEcEI7O0FBRUYsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBRUpZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVCxTQUFaO0FBR0lVLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxxRUFBVSxHQUNUQyxJQURELENBQ00sVUFBQUMsT0FBTyxFQUFJO0FBQ2JWLDBCQUFvQixDQUFDVSxPQUFELENBQXBCO0FBQ0FQLHNCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxLQUpELFdBS08sVUFBQVEsR0FBRyxFQUFJO0FBQ1ZSLHNCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxLQVBEO0FBU0gsR0FWUSxFQVVOLEVBVk0sQ0FBVCxDQVBFLENBb0JGOztBQUVBLHNCQUNJLHFFQUFDLFNBQUQsb0JBQWVMLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLENBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYko7QUFlSCxDQTFDRDs7R0FBTUYsRztVQU9jSCxTOzs7S0FQZEcsRzs7QUE0Q04sSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUNwQkMsT0FEb0IsU0FDcEJBLE9BRG9CO0FBQUEsTUFFcEJkLEdBRm9CLFNBRXBCQSxHQUZvQjtBQUFBLFNBR2pCO0FBQ0hjLFdBQU8sRUFBUEEsT0FERztBQUVIZCxPQUFHLEVBQUhBO0FBRkcsR0FIaUI7QUFBQSxDQUF4Qjs7QUFRQSxJQUFNZSxrQkFBa0IsR0FBRztBQUN2QmQsc0JBQW9CLEVBQXBCQSxtRUFBb0JBO0FBREcsQ0FBM0I7QUFJZWUsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNsQixHQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGJiMzBiMWI2N2QxMTMzN2RhZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdXNlRWZmZWN0LCBcbiAgICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vY29udGFpbmVycy9Mb2FkaW5nJztcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vY29udGFpbmVycy9MYW5kaW5nJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29udGFpbmVycy9Ib21lJztcbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgnO1xuaW1wb3J0IHsgdXBkYXRlVXNlckxvZ2luU3RhdGUgfSBmcm9tICcuL3JlZHV4L2FjdGlvbnMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICAgIC8vIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAvLyB3aWR0aDogJzEwMCUnLFxuICAgICAgICAvLyBtaW5XaWR0aDogODAwLFxuICAgICAgICAvLyBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAvLyBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgLy8gZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsRmlyYSBTYW5zLFVidW50dSxPeHlnZW4sT3h5Z2VuIFNhbnMsQ2FudGFyZWxsLERyb2lkIFNhbnMsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sLEx1Y2lkYSBHcmFuZGUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnLFxuICAgIH1cbn0pO1xuXG5jb25zdCBBcHAgPSAoe1xuICAgIENvbXBvbmVudCxcbiAgICBwYWdlUHJvcHMsXG4gICAgdWlkLFxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxufSkgPT4ge1xuICAgIGNvbnN0IFtpbml0aWFsUmVuZGVyLCBzZXRJbml0aWFsUmVuZGVyXSA9IHVzZVN0YXRlKHRydWUpOyAgICBcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbmNvbnNvbGUubG9nKENvbXBvbmVudClcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNMb2dnZWRJbigpXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgdXBkYXRlVXNlckxvZ2luU3RhdGUocmVzdWx0cyk7XG4gICAgICAgICAgICBzZXRJbml0aWFsUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBzZXRJbml0aWFsUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9LCBbXSk7XG5cblxuICAgIC8vIGlmIChpbml0aWFsUmVuZGVyKSByZXR1cm4gPD48Lz47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAvLyAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgLy8gICAgIDxIb21lLz5cbiAgICAgICAgLy8gICAgIHsvKiB7dWlkXG4gICAgICAgIC8vICAgICAgICAgPyAoXG4gICAgICAgIC8vICAgICAgICAgICAgIDxIb21lLz5cbiAgICAgICAgLy8gICAgICAgICApXG4gICAgICAgIC8vICAgICAgICAgOiAoXG4gICAgICAgIC8vICAgICAgICAgICAgIDxMYW5kaW5nIC8+XG4gICAgICAgIC8vICAgICAgICAgKVxuICAgICAgICAvLyAgICAgfSAqL31cbiAgICAgICAgLy8gPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7XG4gICAgbG9hZGluZyxcbiAgICB1aWQsXG59KSA9PiAoe1xuICAgIGxvYWRpbmcsXG4gICAgdWlkLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7Il0sInNvdXJjZVJvb3QiOiIifQ==