webpackHotUpdate_N_E("pages/_app",{

/***/ "./frontend/containers/Landing/index.js":
/*!**********************************************!*\
  !*** ./frontend/containers/Landing/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./frontend/containers/Landing/Logo.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SignIn */ "./frontend/containers/Landing/SignIn.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignUp */ "./frontend/containers/Landing/SignUp.js");
/* harmony import */ var _ForgotPassword__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ForgotPassword */ "./frontend/containers/Landing/ForgotPassword.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth */ "./frontend/services/auth.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions */ "./frontend/redux/actions.js");


var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Landing\\index.js",
    _this = undefined,
    _s = $RefreshSig$();












var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
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
var landingStates = {
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

var Login = function Login(_ref) {
  _s();

  var landingState = _ref.landingState,
      updateUserLoginState = _ref.updateUserLoginState;
  var classes = useStyles(); // useEffect(() => {
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.loginContainer // elevation={24}    
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), landingStates[landingState]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, _this);
};

_s(Login, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Login;

var mapStateToProps = function mapStateToProps(_ref2) {
  var landingState = _ref2.landingState;
  return {
    landingState: landingState
  };
};

var mapDispatchToProps = {
  updateUserLoginState: _redux_actions__WEBPACK_IMPORTED_MODULE_11__["updateUserLoginState"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Login));

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY29udGFpbmVycy9MYW5kaW5nL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImxvZ2luQ29udGFpbmVyIiwibGFuZGluZ1N0YXRlcyIsIkxvZ2luIiwibGFuZGluZ1N0YXRlIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJjbGFzc2VzIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFFLE1BRE47QUFFRkMsU0FBSyxFQUFFLE1BRkw7QUFHRkMsV0FBTyxFQUFFLE1BSFA7QUFJRkMsY0FBVSxFQUFFLFFBSlY7QUFLRkMsa0JBQWMsRUFBRSxRQUxkO0FBTUZDLGNBQVUsRUFBRSxnREFOVjtBQU9GQyxtQkFBZSxFQUFFO0FBUGYsR0FEbUI7QUFVekJDLGdCQUFjLEVBQUU7QUFDWk4sU0FBSyxFQUFFO0FBREs7QUFWUyxDQUFELENBQTVCO0FBZUEsSUFBTU8sYUFBYSxHQUFHO0FBQ2xCLDBCQUFXLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUVsQiwwQkFBVyxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRk87QUFHbEIsa0NBQW1CLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRCxDQUF0Qjs7QUFNQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUdSO0FBQUE7O0FBQUEsTUFGRkMsWUFFRSxRQUZGQSxZQUVFO0FBQUEsTUFERkMsb0JBQ0UsUUFERkEsb0JBQ0U7QUFDRixNQUFNQyxPQUFPLEdBQUdmLFNBQVMsRUFBekIsQ0FERSxDQUdGO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFZSxPQUFPLENBQUNiLElBQXhCO0FBQUEsMkJBQ0kscUVBQUMsK0RBQUQ7QUFDSSxlQUFTLEVBQUVhLE9BQU8sQ0FBQ0wsY0FEdkIsQ0FFSTtBQUZKO0FBQUEsOEJBSUkscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLEVBS0tDLGFBQWEsQ0FBQ0UsWUFBRCxDQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQTlCRDs7R0FBTUQsSztVQUljWixTOzs7S0FKZFksSzs7QUFnQ04sSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUVILFlBQUYsU0FBRUEsWUFBRjtBQUFBLFNBQXFCO0FBQUNBLGdCQUFZLEVBQVpBO0FBQUQsR0FBckI7QUFBQSxDQUF4Qjs7QUFFQSxJQUFNSSxrQkFBa0IsR0FBRztBQUN2Qkgsc0JBQW9CLEVBQXBCQSxvRUFBb0JBO0FBREcsQ0FBM0I7QUFJZUksMEhBQU8sQ0FBQ0YsZUFBRCxFQUFrQkMsa0JBQWxCLENBQVAsQ0FBNkNMLEtBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MzEyZTViN2JmMTBiZjE0ZjQ1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4vU2lnbkluJztcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL1NpZ25VcCc7XHJcbmltcG9ydCBGb3Jnb3RQYXNzd29yZCBmcm9tICcuL0ZvcmdvdFBhc3N3b3JkJztcclxuaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgnO1xyXG5pbXBvcnQgeyB1cGRhdGVVc2VyTG9naW5TdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQocmdiYSgyNTAsMCwwLDAuNSksdHJhbnNwYXJlbnQpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTE1YmYwJyxcclxuICAgIH0sXHJcbiAgICBsb2dpbkNvbnRhaW5lcjoge1xyXG4gICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbGFuZGluZ1N0YXRlcyA9IHtcclxuICAgICdTaWduIEluJzogPFNpZ25Jbi8+LFxyXG4gICAgJ1NpZ24gVXAnOiA8U2lnblVwLz4sXHJcbiAgICAnRm9yZ290IFBhc3N3b3JkJzogPEZvcmdvdFBhc3N3b3JkLz4sXHJcbn07XHJcblxyXG5jb25zdCBMb2dpbiA9ICh7XHJcbiAgICBsYW5kaW5nU3RhdGUsXHJcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaXNMb2dnZWRJbigpXHJcbiAgICAvLyAgICAgLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAvLyAgICAgICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlKHJlc3VsdHMpO1xyXG5cclxuICAgIC8vICAgICAgICAgaWYgKHJlc3VsdHMpIHtcclxuICAgIC8vICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuXHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9naW5Db250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAvLyBlbGV2YXRpb249ezI0fSAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExvZ28vPlxyXG4gICAgICAgICAgICAgICAge2xhbmRpbmdTdGF0ZXNbbGFuZGluZ1N0YXRlXX1cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe2xhbmRpbmdTdGF0ZX0pID0+ICh7bGFuZGluZ1N0YXRlfSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XHJcbiAgICB1cGRhdGVVc2VyTG9naW5TdGF0ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTsiXSwic291cmNlUm9vdCI6IiJ9