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
  var initialRender = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_services_auth__WEBPACK_IMPORTED_MODULE_9__["isLoggedIn"])().then(function (results) {
      updateUserLoginState(results); // setInitialRender(false);

      initialRender.current = false;
    })["catch"](function (err) {
      // setInitialRender(false);
      initialRender.current = false;
    });
  }, []);
  if (initialRender.current) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false);
  console.log('here', Component.WrappedComponent.name, uid, initialRender.current);

  if (uid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_containers_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
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
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvQXBwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidWlkIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJpbml0aWFsUmVuZGVyIiwidXNlUmVmIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwicmVzdWx0cyIsImN1cnJlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiV3JhcHBlZENvbXBvbmVudCIsIm5hbWUiLCJSb3V0ZXIiLCJwdXNoIiwibWFwU3RhdGVUb1Byb3BzIiwibG9hZGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHNFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRSxDQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5FO0FBRG1CLENBQUQsQ0FBNUI7O0FBV0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FLTjtBQUFBOztBQUFBLE1BSkZDLFNBSUUsUUFKRkEsU0FJRTtBQUFBLE1BSEZDLFNBR0UsUUFIRkEsU0FHRTtBQUFBLE1BRkZDLEdBRUUsUUFGRkEsR0FFRTtBQUFBLE1BREZDLG9CQUNFLFFBREZBLG9CQUNFO0FBQ0YsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFFQVcseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLHFFQUFVLEdBQ1RDLElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDYlAsMEJBQW9CLENBQUNPLE9BQUQsQ0FBcEIsQ0FEYSxDQUViOztBQUNBTixtQkFBYSxDQUFDTyxPQUFkLEdBQXdCLEtBQXhCO0FBQ0gsS0FMRCxXQU1PLFVBQUFDLEdBQUcsRUFBSTtBQUNWO0FBQ0FSLG1CQUFhLENBQUNPLE9BQWQsR0FBd0IsS0FBeEI7QUFFSCxLQVZEO0FBWUgsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWdCQSxNQUFJUCxhQUFhLENBQUNPLE9BQWxCLEVBQTJCLG9CQUFPLHVKQUFQO0FBQzNCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CZCxTQUFTLENBQUNlLGdCQUFWLENBQTJCQyxJQUEvQyxFQUFxRGQsR0FBckQsRUFBMERFLGFBQWEsQ0FBQ08sT0FBeEU7O0FBR0EsTUFBSVQsR0FBSixFQUFTO0FBQ0wsd0JBQ0k7QUFBSyxlQUFTLEVBQUVJLE9BQU8sQ0FBQ1IsSUFBeEI7QUFBQSw4QkFDSSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSxxRUFBQyxTQUFELG9CQUFlRyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQU1ILEdBUEQsTUFRSztBQUNEZ0Isc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDQSx3QkFBTyx1SkFBUDtBQUNIO0FBQ0osQ0F6Q0Q7O0dBQU1uQixHO1VBT2NILFM7OztLQVBkRyxHOztBQTJDTixJQUFNb0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQ3BCQyxPQURvQixTQUNwQkEsT0FEb0I7QUFBQSxNQUVwQmxCLEdBRm9CLFNBRXBCQSxHQUZvQjtBQUFBLFNBR2pCO0FBQ0hrQixXQUFPLEVBQVBBLE9BREc7QUFFSGxCLE9BQUcsRUFBSEE7QUFGRyxHQUhpQjtBQUFBLENBQXhCOztBQVFBLElBQU1tQixrQkFBa0IsR0FBRztBQUN2QmxCLHNCQUFvQixFQUFwQkEsb0VBQW9CQTtBQURHLENBQTNCO0FBSWVtQiwwSEFBTyxDQUFDSCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q3RCLEdBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xM2VlOTAwZWU0OTZhNjAwZDhlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICB1c2VFZmZlY3QsIFxuICAgIHVzZVJlZixcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9jb250YWluZXJzL0xvYWRpbmcnO1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi9jb250YWluZXJzL0xhbmRpbmcnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb250YWluZXJzL0hvbWUnO1xuaW1wb3J0IHsgaXNMb2dnZWRJbiB9IGZyb20gJy4vc2VydmljZXMvYXV0aCc7XG5pbXBvcnQgeyB1cGRhdGVVc2VyTG9naW5TdGF0ZSB9IGZyb20gJy4vcmVkdXgvYWN0aW9ucyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIC8vIG1pbldpZHRoOiA4MDAsXG4gICAgICAgIC8vIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAvLyBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxGaXJhIFNhbnMsVWJ1bnR1LE94eWdlbixPeHlnZW4gU2FucyxDYW50YXJlbGwsRHJvaWQgU2FucyxBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2wsTHVjaWRhIEdyYW5kZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZicsXG4gICAgfVxufSk7XG5cbmNvbnN0IEFwcCA9ICh7XG4gICAgQ29tcG9uZW50LFxuICAgIHBhZ2VQcm9wcyxcbiAgICB1aWQsXG4gICAgdXBkYXRlVXNlckxvZ2luU3RhdGUsXG59KSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbFJlbmRlciA9IHVzZVJlZih0cnVlKTsgICAgXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNMb2dnZWRJbigpXG4gICAgICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgdXBkYXRlVXNlckxvZ2luU3RhdGUocmVzdWx0cyk7XG4gICAgICAgICAgICAvLyBzZXRJbml0aWFsUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgICAgIGluaXRpYWxSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xuICAgICAgICAgICAgaW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBcbiAgICBpZiAoaW5pdGlhbFJlbmRlci5jdXJyZW50KSByZXR1cm4gPD48Lz47XG4gICAgY29uc29sZS5sb2coJ2hlcmUnLCBDb21wb25lbnQuV3JhcHBlZENvbXBvbmVudC5uYW1lLCB1aWQsIGluaXRpYWxSZW5kZXIuY3VycmVudClcbiAgICBcblxuICAgIGlmICh1aWQpIHtcbiAgICAgICAgcmV0dXJuICggICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgcmV0dXJuIDw+PC8+XG4gICAgfVxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcbiAgICBsb2FkaW5nLFxuICAgIHVpZCxcbn0pID0+ICh7XG4gICAgbG9hZGluZyxcbiAgICB1aWQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9