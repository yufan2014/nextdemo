"use strict";
self["webpackHotUpdate_N_E"]("pages/films",{

/***/ "./pages/films.js":
/*!************************!*\
  !*** ./pages/films.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Films; }
/* harmony export */ });
/* harmony import */ var D_html_nextdemo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_html_nextdemo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_html_nextdemo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_html_nextdemo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_html_nextdemo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_html_nextdemo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_html_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_html_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(D_html_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\html\\nextdemo\\pages\\films.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_html_nextdemo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_html_nextdemo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_html_nextdemo_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Films = /*#__PURE__*/function (_Component) {
  (0,D_html_nextdemo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Films, _Component);

  var _super = _createSuper(Films);

  function Films() {
    (0,D_html_nextdemo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Films);

    return _super.apply(this, arguments);
  }

  (0,D_html_nextdemo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Films, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("title", {
          children: "\u6D4B\u8BD5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ul", {
          children: this.props.films.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
              children: [item.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
                src: item.poster
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 29
              }, _this)]
            }, item.filmId, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 36
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,D_html_nextdemo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_html_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        var res;
        return D_html_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_7___default().get('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4515946', {
                  headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                  }
                });

              case 2:
                res = _context.sent;
                console.log(res.data.data.films);
                return _context.abrupt("return", {
                  films: res.data.data.films
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Films;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);



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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmlsbXMuNzY5YTg1ODk3ZDJjZWI1YTZhMjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztJQUdxQkc7Ozs7Ozs7Ozs7Ozs7V0FlakIsa0JBQVE7QUFBQTs7QUFDSiwwQkFDSTtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxvQkFFUSxLQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUFDLElBQUksRUFBRTtBQUN2QixnQ0FBTztBQUFBLHlCQUNOQSxJQUFJLENBQUNDLElBREMsZUFFUDtBQUFLLG1CQUFHLEVBQUVELElBQUksQ0FBQ0U7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZPO0FBQUEsZUFBU0YsSUFBSSxDQUFDRyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFJSCxXQUxEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWVIOzs7OytQQTdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNzQlYsZ0RBQUEsQ0FDZCxtRkFEYyxFQUVkO0FBQ0lZLGtCQUFBQSxPQUFPLEVBQUU7QUFDTCw4QkFBVTtBQURMO0FBRGIsaUJBRmMsQ0FEdEI7O0FBQUE7QUFDVUMsZ0JBQUFBLEdBRFY7QUFTSUMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQUosQ0FBU0EsSUFBVCxDQUFjWCxLQUExQjtBQVRKLGlEQVVXO0FBQUVBLGtCQUFBQSxLQUFLLEVBQUVRLEdBQUcsQ0FBQ0csSUFBSixDQUFTQSxJQUFULENBQWNYO0FBQXZCLGlCQVZYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztFQUYrQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsbXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsbXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9tLm1haXp1by5jb20vZ2F0ZXdheT9jaXR5SWQ9NDQwMzAwJnBhZ2VOdW09MSZwYWdlU2l6ZT0xMCZ0eXBlPTEmaz00NTE1OTQ2JyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdYLUhvc3QnOiAnbWFsbC5maWxtLXRpY2tldC5maWxtLmxpc3QnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhLmZpbG1zKTtcclxuICAgICAgICByZXR1cm4geyBmaWxtczogcmVzLmRhdGEuZGF0YS5maWxtcyB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7mtYvor5U8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWxtcy5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l0ZW0uZmlsbUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5wb3N0ZXJ9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZpbG1zIiwicHJvcHMiLCJmaWxtcyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwicG9zdGVyIiwiZmlsbUlkIiwiZ2V0IiwiaGVhZGVycyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==