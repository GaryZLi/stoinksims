webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _frontend_containers_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontend/containers/Loading */ "./frontend/containers/Loading/index.js");
/* harmony import */ var _frontend_containers_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../frontend/containers/Home */ "./frontend/containers/Home/index.js");
/* harmony import */ var _frontend_services_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../frontend/services/auth */ "./frontend/services/auth.js");
/* harmony import */ var _frontend_redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../frontend/redux/actions */ "./frontend/redux/actions.js");



var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {// height: '100%',
    // width: '100%',
    // minWidth: 800,
    // overflow: 'auto',
    // position: 'relative',
    // fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
  }
});

var Main = function Main(_ref) {
  _s();

  var uid = _ref.uid,
      updateUserLoginState = _ref.updateUserLoginState;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      initialRender = _useState[0],
      setInitialRender = _useState[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_frontend_services_auth__WEBPACK_IMPORTED_MODULE_7__["isLoggedIn"])().then(function (results) {
      updateUserLoginState(results);
      setInitialRender(false);
    })["catch"](function (err) {
      console.log(err);
      setInitialRender(false);
    });
  }, []);
  if (initialRender) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);

  if (uid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_frontend_containers_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_frontend_containers_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this);
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }
};

_s(Main, "mEuDpCYNW/2X6f1JwtZdY1Y/lHs=", false, function () {
  return [useStyles];
});

_c = Main;

var mapStateToProps = function mapStateToProps(_ref2) {
  var uid = _ref2.uid;
  return {
    uid: uid
  };
};

var mapDispatchToProps = {
  updateUserLoginState: _frontend_redux_actions__WEBPACK_IMPORTED_MODULE_8__["updateUserLoginState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Main));

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJNYWluIiwidWlkIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJ1c2VTdGF0ZSIsImluaXRpYWxSZW5kZXIiLCJzZXRJbml0aWFsUmVuZGVyIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwicmVzdWx0cyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFLENBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkU7QUFEbUIsQ0FBRCxDQUE1Qjs7QUFXQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUdQO0FBQUE7O0FBQUEsTUFGRkMsR0FFRSxRQUZGQSxHQUVFO0FBQUEsTUFERkMsb0JBQ0UsUUFERkEsb0JBQ0U7O0FBQUEsa0JBQ3dDQyxzREFBUSxDQUFDLElBQUQsQ0FEaEQ7QUFBQSxNQUNLQyxhQURMO0FBQUEsTUFDb0JDLGdCQURwQjs7QUFFRixNQUFNQyxPQUFPLEdBQUdULFNBQVMsRUFBekI7QUFFQVUseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLDhFQUFVLEdBQ1RDLElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDYlIsMEJBQW9CLENBQUNRLE9BQUQsQ0FBcEI7QUFDQUwsc0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNILEtBSkQsV0FLTyxVQUFBTSxHQUFHLEVBQUk7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQU4sc0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNILEtBUkQ7QUFVSCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsTUFBSUQsYUFBSixFQUFtQixvQkFBTyx1SkFBUDs7QUFFbkIsTUFBSUgsR0FBSixFQUFTO0FBQ0wsd0JBQ0k7QUFBSyxlQUFTLEVBQUVLLE9BQU8sQ0FBQ1AsSUFBeEI7QUFBQSw4QkFDSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFNSCxHQVBELE1BUUs7QUFDRGUsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDQSx3QkFBTyx1SkFBUDtBQUNIO0FBQ0osQ0FsQ0Q7O0dBQU1mLEk7VUFLY0gsUzs7O0tBTGRHLEk7O0FBb0NOLElBQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFDcEJmLEdBRG9CLFNBQ3BCQSxHQURvQjtBQUFBLFNBRWpCO0FBQ0hBLE9BQUcsRUFBSEE7QUFERyxHQUZpQjtBQUFBLENBQXhCOztBQU1BLElBQU1nQixrQkFBa0IsR0FBRztBQUN2QmYsc0JBQW9CLEVBQXBCQSw0RUFBb0JBO0FBREcsQ0FBM0I7QUFJZWdCLDBIQUFPLENBQUNGLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDakIsSUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NGNhMGQ3NjVjMjJmMTU4YjU5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIHVzZUVmZmVjdCwgXHJcbiAgICB1c2VTdGF0ZSxcclxufSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2Zyb250ZW5kL2NvbnRhaW5lcnMvTG9hZGluZyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2Zyb250ZW5kL2NvbnRhaW5lcnMvSG9tZSc7XHJcbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICcuLi9mcm9udGVuZC9zZXJ2aWNlcy9hdXRoJztcclxuaW1wb3J0IHsgdXBkYXRlVXNlckxvZ2luU3RhdGUgfSBmcm9tICcuLi9mcm9udGVuZC9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIC8vIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIC8vIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgLy8gbWluV2lkdGg6IDgwMCxcclxuICAgICAgICAvLyBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIC8vIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLEhlbHZldGljYSBOZXVlLEZpcmEgU2FucyxVYnVudHUsT3h5Z2VuLE94eWdlbiBTYW5zLENhbnRhcmVsbCxEcm9pZCBTYW5zLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbCxMdWNpZGEgR3JhbmRlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJyxcclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBNYWluID0gKHtcclxuICAgIHVpZCxcclxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbaW5pdGlhbFJlbmRlciwgc2V0SW5pdGlhbFJlbmRlcl0gPSB1c2VTdGF0ZSh0cnVlKTsgICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpc0xvZ2dlZEluKClcclxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcclxuICAgICAgICAgICAgdXBkYXRlVXNlckxvZ2luU3RhdGUocmVzdWx0cyk7XHJcbiAgICAgICAgICAgIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoaW5pdGlhbFJlbmRlcikgcmV0dXJuIDw+PC8+O1xyXG5cclxuICAgIGlmICh1aWQpIHtcclxuICAgICAgICByZXR1cm4gKCAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgIDxIb21lLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICByZXR1cm4gPD48Lz5cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7XHJcbiAgICB1aWQsXHJcbn0pID0+ICh7XHJcbiAgICB1aWQsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xyXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==