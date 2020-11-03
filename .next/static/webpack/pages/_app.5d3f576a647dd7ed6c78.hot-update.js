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
  }, []);
  if (initialRender.current) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZnJvbnRlbmQvQXBwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidWlkIiwidXBkYXRlVXNlckxvZ2luU3RhdGUiLCJpbml0aWFsUmVuZGVyIiwidXNlUmVmIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwicmVzdWx0cyIsImN1cnJlbnQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiV3JhcHBlZENvbXBvbmVudCIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUlBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHNFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRSxDQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5FO0FBRG1CLENBQUQsQ0FBNUI7O0FBV0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FLTjtBQUFBOztBQUFBLE1BSkZDLFNBSUUsUUFKRkEsU0FJRTtBQUFBLE1BSEZDLFNBR0UsUUFIRkEsU0FHRTtBQUFBLE1BRkZDLEdBRUUsUUFGRkEsR0FFRTtBQUFBLE1BREZDLG9CQUNFLFFBREZBLG9CQUNFO0FBQ0YsTUFBTUMsYUFBYSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBNUI7QUFDQSxNQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFFQVcseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLHFFQUFVLEdBQ1RDLElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDYlAsMEJBQW9CLENBQUNPLE9BQUQsQ0FBcEIsQ0FEYSxDQUViOztBQUNBTixtQkFBYSxDQUFDTyxPQUFkLEdBQXdCLEtBQXhCO0FBQ0gsS0FMRCxXQU1PLFVBQUFDLEdBQUcsRUFBSSxDQUNWO0FBQ0E7QUFFSCxLQVZEO0FBWUgsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWdCQSxNQUFJUixhQUFhLENBQUNPLE9BQWxCLEVBQTJCLG9CQUFPLHVKQUFQO0FBQzNCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CZCxTQUFTLENBQUNlLGdCQUFWLENBQTJCQyxJQUEvQyxFQUFxRGQsR0FBckQsRUFBMERFLGFBQWEsQ0FBQ08sT0FBeEU7O0FBR0EsTUFBSVQsR0FBSixFQUFTO0FBQ0wsd0JBQ0k7QUFBSyxlQUFTLEVBQUVJLE9BQU8sQ0FBQ1IsSUFBeEI7QUFBQSw4QkFDSSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSxxRUFBQyxTQUFELG9CQUFlRyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQU1ILEdBUEQsTUFRSztBQUNEO0FBQ0Esd0JBQU8scUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0g7QUFDSixDQXpDRDs7R0FBTUYsRztVQU9jSCxTOzs7S0FQZEcsRzs7QUEyQ04sSUFBTWtCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUNwQkMsT0FEb0IsU0FDcEJBLE9BRG9CO0FBQUEsTUFFcEJoQixHQUZvQixTQUVwQkEsR0FGb0I7QUFBQSxTQUdqQjtBQUNIZ0IsV0FBTyxFQUFQQSxPQURHO0FBRUhoQixPQUFHLEVBQUhBO0FBRkcsR0FIaUI7QUFBQSxDQUF4Qjs7QUFRQSxJQUFNaUIsa0JBQWtCLEdBQUc7QUFDdkJoQixzQkFBb0IsRUFBcEJBLG1FQUFvQkE7QUFERyxDQUEzQjtBQUllaUIsMEhBQU8sQ0FBQ0gsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNwQixHQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWQzZjU3NmE2NDdkZDdlZDZjNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdXNlRWZmZWN0LCBcbiAgICB1c2VSZWYsXG59IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vY29udGFpbmVycy9Mb2FkaW5nJztcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vY29udGFpbmVycy9MYW5kaW5nJztcbi8vIGltcG9ydCBIb21lIGZyb20gJy4vY29udGFpbmVycy9Ib21lJztcbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgnO1xuaW1wb3J0IHsgdXBkYXRlVXNlckxvZ2luU3RhdGUgfSBmcm9tICcuL3JlZHV4L2FjdGlvbnMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICAgIC8vIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAvLyB3aWR0aDogJzEwMCUnLFxuICAgICAgICAvLyBtaW5XaWR0aDogODAwLFxuICAgICAgICAvLyBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAvLyBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgLy8gZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsRmlyYSBTYW5zLFVidW50dSxPeHlnZW4sT3h5Z2VuIFNhbnMsQ2FudGFyZWxsLERyb2lkIFNhbnMsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sLEx1Y2lkYSBHcmFuZGUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnLFxuICAgIH1cbn0pO1xuXG5jb25zdCBBcHAgPSAoe1xuICAgIENvbXBvbmVudCxcbiAgICBwYWdlUHJvcHMsXG4gICAgdWlkLFxuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxufSkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7ICAgIFxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzTG9nZ2VkSW4oKVxuICAgICAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlKHJlc3VsdHMpO1xuICAgICAgICAgICAgLy8gc2V0SW5pdGlhbFJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICBpbml0aWFsUmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBzZXRJbml0aWFsUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGluaXRpYWxSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSwgW10pO1xuXG4gICAgXG4gICAgaWYgKGluaXRpYWxSZW5kZXIuY3VycmVudCkgcmV0dXJuIDw+PC8+O1xuICAgIGNvbnNvbGUubG9nKCdoZXJlJywgQ29tcG9uZW50LldyYXBwZWRDb21wb25lbnQubmFtZSwgdWlkLCBpbml0aWFsUmVuZGVyLmN1cnJlbnQpXG4gICAgXG5cbiAgICBpZiAodWlkKSB7XG4gICAgICAgIHJldHVybiAoICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgIHJldHVybiA8TGFuZGluZy8+XG4gICAgfVxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcbiAgICBsb2FkaW5nLFxuICAgIHVpZCxcbn0pID0+ICh7XG4gICAgbG9hZGluZyxcbiAgICB1aWQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICAgIHVwZGF0ZVVzZXJMb2dpblN0YXRlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9