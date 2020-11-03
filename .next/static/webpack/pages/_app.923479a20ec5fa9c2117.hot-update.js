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
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_7__["isLoggedIn"])().then(function (results) {
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

/***/ }),

/***/ "./frontend/containers/Home/index.js":
false,

/***/ "./frontend/services/user.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvQXBwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidWlkIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJpbml0aWFsUmVuZGVyIiwidXNlUmVmIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwicmVzdWx0cyIsImN1cnJlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiV3JhcHBlZENvbXBvbmVudCIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFLENBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkU7QUFEbUIsQ0FBRCxDQUE1Qjs7QUFXQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUtOO0FBQUE7O0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsU0FHRSxRQUhGQSxTQUdFO0FBQUEsTUFGRkMsR0FFRSxRQUZGQSxHQUVFO0FBQUEsTUFERkMsb0JBQ0UsUUFERkEsb0JBQ0U7QUFDRixNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUE1QjtBQUNBLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUVBVyx5REFBUyxDQUFDLFlBQU07QUFDWkMscUVBQVUsR0FDVEMsSUFERCxDQUNNLFVBQUFDLE9BQU8sRUFBSTtBQUNiUCwwQkFBb0IsQ0FBQ08sT0FBRCxDQUFwQixDQURhLENBRWI7O0FBQ0FOLG1CQUFhLENBQUNPLE9BQWQsR0FBd0IsS0FBeEI7QUFDSCxLQUxELFdBTU8sVUFBQUMsR0FBRyxFQUFJLENBQ1Y7QUFDQTtBQUVILEtBVkQ7QUFZSCxHQWJRLEVBYU4sRUFiTSxDQUFULENBSkUsQ0FvQkY7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JkLFNBQVMsQ0FBQ2UsZ0JBQVYsQ0FBMkJDLElBQS9DLEVBQXFEZCxHQUFyRCxFQUEwREUsYUFBYSxDQUFDTyxPQUF4RTs7QUFHQSxNQUFJVCxHQUFKLEVBQVM7QUFDTCx3QkFDSTtBQUFLLGVBQVMsRUFBRUksT0FBTyxDQUFDUixJQUF4QjtBQUFBLDhCQUNJLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJLHFFQUFDLFNBQUQsb0JBQWVHLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBTUgsR0FQRCxNQVFLO0FBQ0Q7QUFDQSx3QkFBTyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSDtBQUNKLENBekNEOztHQUFNRixHO1VBT2NILFM7OztLQVBkRyxHOztBQTJDTixJQUFNa0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQ3BCQyxPQURvQixTQUNwQkEsT0FEb0I7QUFBQSxNQUVwQmhCLEdBRm9CLFNBRXBCQSxHQUZvQjtBQUFBLFNBR2pCO0FBQ0hnQixXQUFPLEVBQVBBLE9BREc7QUFFSGhCLE9BQUcsRUFBSEE7QUFGRyxHQUhpQjtBQUFBLENBQXhCOztBQVFBLElBQU1pQixrQkFBa0IsR0FBRztBQUN2QmhCLHNCQUFvQixFQUFwQkEsbUVBQW9CQTtBQURHLENBQTNCO0FBSWVpQiwwSEFBTyxDQUFDSCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q3BCLEdBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MjM0NzlhMjBlYzVmYTljMjExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICB1c2VFZmZlY3QsIFxuICAgIHVzZVJlZixcbn0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9jb250YWluZXJzL0xvYWRpbmcnO1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9jb250YWluZXJzL0xhbmRpbmcnO1xuLy8gaW1wb3J0IEhvbWUgZnJvbSAnLi9jb250YWluZXJzL0hvbWUnO1xuaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XG5pbXBvcnQgeyB1cGRhdGVVc2VyTG9naW5TdGF0ZSB9IGZyb20gJy4vcmVkdXgvYWN0aW9ucyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC8vIG1pbldpZHRoOiA4MDAsXG4gICAgICAgIC8vIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAvLyBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxGaXJhIFNhbnMsVWJ1bnR1LE94eWdlbixPeHlnZW4gU2FucyxDYW50YXJlbGwsRHJvaWQgU2FucyxBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2wsTHVjaWRhIEdyYW5kZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZicsXG4gICAgfVxufSk7XG5cbmNvbnN0IEFwcCA9ICh7XG4gICAgQ29tcG9uZW50LFxuICAgIHBhZ2VQcm9wcyxcbiAgICB1aWQsXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXG59KSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbFJlbmRlciA9IHVzZVJlZih0cnVlKTsgICAgXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNMb2dnZWRJbigpXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgdXBkYXRlVXNlckxvZ2luU3RhdGUocmVzdWx0cyk7XG4gICAgICAgICAgICAvLyBzZXRJbml0aWFsUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgICAgIGluaXRpYWxSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xuICAgICAgICAgICAgLy8gaW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBcbiAgICAvLyBpZiAoaW5pdGlhbFJlbmRlci5jdXJyZW50KSByZXR1cm4gPD48Lz47XG4gICAgY29uc29sZS5sb2coJ2hlcmUnLCBDb21wb25lbnQuV3JhcHBlZENvbXBvbmVudC5uYW1lLCB1aWQsIGluaXRpYWxSZW5kZXIuY3VycmVudClcbiAgICBcblxuICAgIGlmICh1aWQpIHtcbiAgICAgICAgcmV0dXJuICggICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgcmV0dXJuIDxMYW5kaW5nLz5cbiAgICB9XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xuICAgIGxvYWRpbmcsXG4gICAgdWlkLFxufSkgPT4gKHtcbiAgICBsb2FkaW5nLFxuICAgIHVpZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=