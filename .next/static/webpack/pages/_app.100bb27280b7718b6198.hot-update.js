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
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./frontend/containers/Landing/Logo.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignIn */ "./frontend/containers/Landing/SignIn.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUp */ "./frontend/containers/Landing/SignUp.js");
/* harmony import */ var _ForgotPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ForgotPassword */ "./frontend/containers/Landing/ForgotPassword.js");


var _jsxFileName = "C:\\Users\\gxlizy\\Desktop\\javascript\\stoinksims\\frontend\\containers\\Landing\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







 // import { isLoggedIn } from '../../services/auth';

var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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
  'Sign In': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignIn__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 16
  }, undefined),
  'Sign Up': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SignUp__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 16
  }, undefined),
  'Forgot Password': /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ForgotPassword__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 24
  }, undefined)
};

var Login = function Login(_ref) {
  _s();

  var landingState = _ref.landingState;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.loginContainer // elevation={24}    
      ,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), landingStates[landingState]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Login));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY29udGFpbmVycy9MYW5kaW5nL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImxvZ2luQ29udGFpbmVyIiwibGFuZGluZ1N0YXRlcyIsIkxvZ2luIiwibGFuZGluZ1N0YXRlIiwiY2xhc3NlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFFLE1BRE47QUFFRkMsU0FBSyxFQUFFLE1BRkw7QUFHRkMsV0FBTyxFQUFFLE1BSFA7QUFJRkMsY0FBVSxFQUFFLFFBSlY7QUFLRkMsa0JBQWMsRUFBRSxRQUxkO0FBTUZDLGNBQVUsRUFBRSxnREFOVjtBQU9GQyxtQkFBZSxFQUFFO0FBUGYsR0FEbUI7QUFVekJDLGdCQUFjLEVBQUU7QUFDWk4sU0FBSyxFQUFFO0FBREs7QUFWUyxDQUFELENBQTVCO0FBZUEsSUFBTU8sYUFBYSxHQUFHO0FBQ2xCLDBCQUFXLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUVsQiwwQkFBVyxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRk87QUFHbEIsa0NBQW1CLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRCxDQUF0Qjs7QUFNQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUVSO0FBQUE7O0FBQUEsTUFERkMsWUFDRSxRQURGQSxZQUNFO0FBQ0YsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVjLE9BQU8sQ0FBQ1osSUFBeEI7QUFBQSwyQkFDSSxxRUFBQywrREFBRDtBQUNJLGVBQVMsRUFBRVksT0FBTyxDQUFDSixjQUR2QixDQUVJO0FBRko7QUFBQSw4QkFJSSxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosRUFLS0MsYUFBYSxDQUFDRSxZQUFELENBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVdILENBaEJEOztHQUFNRCxLO1VBR2NaLFM7OztLQUhkWSxLOztBQWtCTixJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBRUYsWUFBRixTQUFFQSxZQUFGO0FBQUEsU0FBcUI7QUFBQ0EsZ0JBQVksRUFBWkE7QUFBRCxHQUFyQjtBQUFBLENBQXhCOztBQUVlRywwSEFBTyxDQUFDRCxlQUFELENBQVAsQ0FBeUJILEtBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMDBiYjI3MjgwYjc3MThiNjE5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gJy4vU2lnbkluJztcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuL1NpZ25VcCc7XHJcbmltcG9ydCBGb3Jnb3RQYXNzd29yZCBmcm9tICcuL0ZvcmdvdFBhc3N3b3JkJztcclxuLy8gaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQocmdiYSgyNTAsMCwwLDAuNSksdHJhbnNwYXJlbnQpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTE1YmYwJyxcclxuICAgIH0sXHJcbiAgICBsb2dpbkNvbnRhaW5lcjoge1xyXG4gICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbGFuZGluZ1N0YXRlcyA9IHtcclxuICAgICdTaWduIEluJzogPFNpZ25Jbi8+LFxyXG4gICAgJ1NpZ24gVXAnOiA8U2lnblVwLz4sXHJcbiAgICAnRm9yZ290IFBhc3N3b3JkJzogPEZvcmdvdFBhc3N3b3JkLz4sXHJcbn07XHJcblxyXG5jb25zdCBMb2dpbiA9ICh7XHJcbiAgICBsYW5kaW5nU3RhdGUsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIC8vIGVsZXZhdGlvbj17MjR9ICAgIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgICAgICAgICB7bGFuZGluZ1N0YXRlc1tsYW5kaW5nU3RhdGVdfVxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7bGFuZGluZ1N0YXRlfSkgPT4gKHtsYW5kaW5nU3RhdGV9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMb2dpbik7Il0sInNvdXJjZVJvb3QiOiIifQ==