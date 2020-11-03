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
    width: '100%',
    backgroundColor: 'red'
  }
});

var Home = function Home(_ref) {
  _s();

  var uid = _ref.uid,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      updateLoading = _ref.updateLoading,
      updateUserInfo = _ref.updateUserInfo;
  var classes = useStyles(); // useEffect(() => {
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
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY29udGFpbmVycy9Ib21lL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIb21lIiwidWlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1cGRhdGVMb2FkaW5nIiwidXBkYXRlVXNlckluZm8iLCJjbGFzc2VzIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLHNFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxVQUFNLEVBQUUsTUFETjtBQUVGQyxTQUFLLEVBQUUsTUFGTDtBQUdGQyxtQkFBZSxFQUFFO0FBSGY7QUFEbUIsQ0FBRCxDQUE1Qjs7QUFRQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQU1QO0FBQUE7O0FBQUEsTUFMRkMsR0FLRSxRQUxGQSxHQUtFO0FBQUEsTUFKRkMsU0FJRSxRQUpGQSxTQUlFO0FBQUEsTUFIRkMsUUFHRSxRQUhGQSxRQUdFO0FBQUEsTUFGRkMsYUFFRSxRQUZGQSxhQUVFO0FBQUEsTUFERkMsY0FDRSxRQURGQSxjQUNFO0FBQ0YsTUFBTUMsT0FBTyxHQUFHWixTQUFTLEVBQXpCLENBREUsQ0FHRjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVZLE9BQU8sQ0FBQ1YsSUFBeEI7QUFBQSxjQUNLSztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBNUJEOztHQUFNRCxJO1VBT2NOLFM7OztLQVBkTSxJOztBQStCTixJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFDcEJOLEdBRG9CLFNBQ3BCQSxHQURvQjtBQUFBLE1BRXBCQyxTQUZvQixTQUVwQkEsU0FGb0I7QUFBQSxNQUdwQkMsUUFIb0IsU0FHcEJBLFFBSG9CO0FBQUEsU0FJakI7QUFDSEYsT0FBRyxFQUFIQSxHQURHO0FBRUhDLGFBQVMsRUFBVEEsU0FGRztBQUdIQyxZQUFRLEVBQVJBO0FBSEcsR0FKaUI7QUFBQSxDQUF4Qjs7QUFVQSxJQUFNSyxrQkFBa0IsR0FBRztBQUN2QkosZUFBYSxFQUFiQSw0REFEdUI7QUFFdkJDLGdCQUFjLEVBQWRBLDZEQUFjQTtBQUZTLENBQTNCO0FBS2VJLDBIQUFPLENBQUNGLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDUixJQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlYjZjZmRkOGQ3NWE3ODg3YTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgZ2V0VXNlckluZm8gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyJztcclxuaW1wb3J0IHsgXHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlVXNlckluZm8sXHJcbn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoe1xyXG4gICAgdWlkLFxyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgICB1cGRhdGVMb2FkaW5nLFxyXG4gICAgdXBkYXRlVXNlckluZm8sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHVwZGF0ZUxvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgLy8gICAgIGdldFVzZXJJbmZvKHVpZClcclxuICAgIC8vICAgICAudGhlbihyZXN1bHRzID0+IHtcclxuICAgIC8vICAgICAgICAgdXBkYXRlVXNlckluZm8ocmVzdWx0cyk7XHJcbiAgICAvLyAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyAgICAgICAgIHVwZGF0ZUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIHt1aWR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7XHJcbiAgICB1aWQsXHJcbiAgICBmaXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZSxcclxufSkgPT4gKHtcclxuICAgIHVpZCxcclxuICAgIGZpcnN0TmFtZSxcclxuICAgIGxhc3ROYW1lLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIHVwZGF0ZUxvYWRpbmcsXHJcbiAgICB1cGRhdGVVc2VySW5mbyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpOyJdLCJzb3VyY2VSb290IjoiIn0=