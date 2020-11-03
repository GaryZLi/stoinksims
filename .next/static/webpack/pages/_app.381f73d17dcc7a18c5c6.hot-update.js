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
  var classes = useStyles();
  console.log('landing'); // useEffect(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvY29udGFpbmVycy9MYW5kaW5nL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImxvZ2luQ29udGFpbmVyIiwibGFuZGluZ1N0YXRlcyIsIkxvZ2luIiwibGFuZGluZ1N0YXRlIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msc0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFVBQU0sRUFBRSxNQUROO0FBRUZDLFNBQUssRUFBRSxNQUZMO0FBR0ZDLFdBQU8sRUFBRSxNQUhQO0FBSUZDLGNBQVUsRUFBRSxRQUpWO0FBS0ZDLGtCQUFjLEVBQUUsUUFMZDtBQU1GQyxjQUFVLEVBQUUsZ0RBTlY7QUFPRkMsbUJBQWUsRUFBRTtBQVBmLEdBRG1CO0FBVXpCQyxnQkFBYyxFQUFFO0FBQ1pOLFNBQUssRUFBRTtBQURLO0FBVlMsQ0FBRCxDQUE1QjtBQWVBLElBQU1PLGFBQWEsR0FBRztBQUNsQiwwQkFBVyxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE87QUFFbEIsMEJBQVcscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZPO0FBR2xCLGtDQUFtQixxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEQsQ0FBdEI7O0FBTUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FHUjtBQUFBOztBQUFBLE1BRkZDLFlBRUUsUUFGRkEsWUFFRTtBQUFBLE1BREZDLG9CQUNFLFFBREZBLG9CQUNFO0FBQ0YsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBQ0pnQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBRk0sQ0FHRjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDYixJQUF4QjtBQUFBLDJCQUNJLHFFQUFDLCtEQUFEO0FBQ0ksZUFBUyxFQUFFYSxPQUFPLENBQUNMLGNBRHZCLENBRUk7QUFGSjtBQUFBLDhCQUlJLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixFQUtLQyxhQUFhLENBQUNFLFlBQUQsQ0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBV0gsQ0E5QkQ7O0dBQU1ELEs7VUFJY1osUzs7O0tBSmRZLEs7O0FBZ0NOLElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFFTCxZQUFGLFNBQUVBLFlBQUY7QUFBQSxTQUFxQjtBQUFDQSxnQkFBWSxFQUFaQTtBQUFELEdBQXJCO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTU0sa0JBQWtCLEdBQUc7QUFDdkJMLHNCQUFvQixFQUFwQkEsb0VBQW9CQTtBQURHLENBQTNCO0FBSWVNLDBIQUFPLENBQUNGLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDUCxLQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzgxZjczZDE3ZGNjN2ExOGM1YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJztcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuL1NpZ25Jbic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9TaWduVXAnO1xyXG5pbXBvcnQgRm9yZ290UGFzc3dvcmQgZnJvbSAnLi9Gb3Jnb3RQYXNzd29yZCc7XHJcbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoJztcclxuaW1wb3J0IHsgdXBkYXRlVXNlckxvZ2luU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHJnYmEoMjUwLDAsMCwwLjUpLHRyYW5zcGFyZW50KScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzExNWJmMCcsXHJcbiAgICB9LFxyXG4gICAgbG9naW5Db250YWluZXI6IHtcclxuICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGxhbmRpbmdTdGF0ZXMgPSB7XHJcbiAgICAnU2lnbiBJbic6IDxTaWduSW4vPixcclxuICAgICdTaWduIFVwJzogPFNpZ25VcC8+LFxyXG4gICAgJ0ZvcmdvdCBQYXNzd29yZCc6IDxGb3Jnb3RQYXNzd29yZC8+LFxyXG59O1xyXG5cclxuY29uc3QgTG9naW4gPSAoe1xyXG4gICAgbGFuZGluZ1N0YXRlLFxyXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuY29uc29sZS5sb2coJ2xhbmRpbmcnKVxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpc0xvZ2dlZEluKClcclxuICAgIC8vICAgICAudGhlbihyZXN1bHRzID0+IHtcclxuICAgIC8vICAgICAgICAgdXBkYXRlVXNlckxvZ2luU3RhdGUocmVzdWx0cyk7XHJcblxyXG4gICAgLy8gICAgICAgICBpZiAocmVzdWx0cykge1xyXG4gICAgLy8gICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5cclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIC8vIGVsZXZhdGlvbj17MjR9ICAgIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TG9nby8+XHJcbiAgICAgICAgICAgICAgICB7bGFuZGluZ1N0YXRlc1tsYW5kaW5nU3RhdGVdfVxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7bGFuZGluZ1N0YXRlfSkgPT4gKHtsYW5kaW5nU3RhdGV9KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcclxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW4pOyJdLCJzb3VyY2VSb290IjoiIn0=