webpackHotUpdate_N_E("pages/index",{

/***/ "./frontend/containers/Home/index.js":
/*!*******************************************!*\
  !*** ./frontend/containers/Home/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user */ "./frontend/services/user.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./frontend/redux/actions.js");


var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Home\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    height: '100%',
    width: '100%'
  }
});

var Home = function Home(_ref) {
  _s();

  var uid = _ref.uid,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      updateLoading = _ref.updateLoading,
      updateUserInfo = _ref.updateUserInfo;
  var classes = useStyles();
  console.log('home'); // useEffect(() => {
  //     updateLoading(true);
  //     getUserInfo(uid)
  //     .then(results => {
  //         updateUserInfo(results);
  //         updateLoading(false);
  //     })
  //     .catch(err => {
  //         console.log(err);
  //         updateLoading(false);
  //     });
  // }, []);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: uid
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, _this);
};

_s(Home, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Home;

var mapStateToProps = function mapStateToProps(_ref2) {
  var uid = _ref2.uid,
      firstName = _ref2.firstName,
      lastName = _ref2.lastName;
  return {
    uid: uid,
    firstName: firstName,
    lastName: lastName
  };
};

var mapDispatchToProps = {
  updateLoading: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["updateLoading"],
  updateUserInfo: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["updateUserInfo"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY29udGFpbmVycy9Ib21lL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiaGVpZ2h0Iiwid2lkdGgiLCJIb21lIiwidWlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1cGRhdGVMb2FkaW5nIiwidXBkYXRlVXNlckluZm8iLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFFLE1BRE47QUFFRkMsU0FBSyxFQUFFO0FBRkw7QUFEbUIsQ0FBRCxDQUE1Qjs7QUFPQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQU1QO0FBQUE7O0FBQUEsTUFMRkMsR0FLRSxRQUxGQSxHQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsUUFHRSxRQUhGQSxRQUdFO0FBQUEsTUFGRkMsYUFFRSxRQUZGQSxhQUVFO0FBQUEsTUFERkMsY0FDRSxRQURGQSxjQUNFO0FBQ0YsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBQ0pZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFGTSxDQUdGO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDVCxJQUF4QjtBQUFBLGNBQ0tJO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0E1QkQ7O0dBQU1ELEk7VUFPY0wsUzs7O0tBUGRLLEk7O0FBK0JOLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUNwQlIsR0FEb0IsU0FDcEJBLEdBRG9CO0FBQUEsTUFFcEJDLFNBRm9CLFNBRXBCQSxTQUZvQjtBQUFBLE1BR3BCQyxRQUhvQixTQUdwQkEsUUFIb0I7QUFBQSxTQUlqQjtBQUNIRixPQUFHLEVBQUhBLEdBREc7QUFFSEMsYUFBUyxFQUFUQSxTQUZHO0FBR0hDLFlBQVEsRUFBUkE7QUFIRyxHQUppQjtBQUFBLENBQXhCOztBQVVBLElBQU1PLGtCQUFrQixHQUFHO0FBQ3ZCTixlQUFhLEVBQWJBLDREQUR1QjtBQUV2QkMsZ0JBQWMsRUFBZEEsNkRBQWNBO0FBRlMsQ0FBM0I7QUFLZU0sMEhBQU8sQ0FBQ0YsZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNWLElBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzQxYTI0NTFlYTg4ZGNiNTcxMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXInO1xyXG5pbXBvcnQgeyBcclxuICAgIHVwZGF0ZUxvYWRpbmcsXHJcbiAgICB1cGRhdGVVc2VySW5mbyxcclxufSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoe1xyXG4gICAgdWlkLFxyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlVXNlckluZm8sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuY29uc29sZS5sb2coJ2hvbWUnKVxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICB1cGRhdGVMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIC8vICAgICBnZXRVc2VySW5mbyh1aWQpXHJcbiAgICAvLyAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAvLyAgICAgICAgIHVwZGF0ZVVzZXJJbmZvKHJlc3VsdHMpO1xyXG4gICAgLy8gICAgICAgICB1cGRhdGVMb2FkaW5nKGZhbHNlKTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICAgICAgICB1cGRhdGVMb2FkaW5nKGZhbHNlKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICB7dWlkfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xyXG4gICAgdWlkLFxyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbn0pID0+ICh7XHJcbiAgICB1aWQsXHJcbiAgICBmaXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZSxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlVXNlckluZm8sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTsiXSwic291cmNlUm9vdCI6IiJ9