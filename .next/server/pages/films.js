"use strict";
(() => {
var exports = {};
exports.id = "pages/films";
exports.ids = ["pages/films"];
exports.modules = {

/***/ "./pages/films.js":
/*!************************!*\
  !*** ./pages/films.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Films)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\html\\nextdemo\\pages\\films.js";



class Films extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4515946', {
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }); // console.log(res.data.data.films);

    return {
      films: res.data.data.films
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "\u6D4B\u8BD5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
        children: this.props.films.map(item => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
            children: [item.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              src: item.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 34
            }, this)]
          }, item.filmId, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 36
          }, this);
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

}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/films.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZmlsbXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHZSxNQUFNRyxLQUFOLFNBQW9CRCw0Q0FBcEIsQ0FBOEI7QUFFYixlQUFmRSxlQUFlLEdBQUc7QUFDM0IsVUFBTUMsR0FBRyxHQUFHLE1BQU1MLGdEQUFBLENBQ2QsbUZBRGMsRUFFZDtBQUNJTyxNQUFBQSxPQUFPLEVBQUU7QUFDTCxrQkFBVTtBQURMO0FBRGIsS0FGYyxDQUFsQixDQUQyQixDQVMzQjs7QUFDQSxXQUFPO0FBQUVDLE1BQUFBLEtBQUssRUFBRUgsR0FBRyxDQUFDSSxJQUFKLENBQVNBLElBQVQsQ0FBY0Q7QUFBdkIsS0FBUDtBQUNIOztBQUVERSxFQUFBQSxNQUFNLEdBQUU7QUFDSix3QkFDSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUVRLEtBQUtDLEtBQUwsQ0FBV0gsS0FBWCxDQUFpQkksR0FBakIsQ0FBcUJDLElBQUksSUFBRTtBQUN2Qiw4QkFBTztBQUFBLHVCQUNOQSxJQUFJLENBQUNDLElBREMsZUFFUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZPLGVBRUY7QUFBSyxpQkFBRyxFQUFFRCxJQUFJLENBQUNDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRTtBQUFBLGFBQVNELElBQUksQ0FBQ0UsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBSUgsU0FMRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQWVIOztBQS9Cd0M7Ozs7Ozs7Ozs7QUNKN0M7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGRlbW8vLi9wYWdlcy9maWxtcy5qcyIsIndlYnBhY2s6Ly9uZXh0ZGVtby9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbmV4dGRlbW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRkZW1vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsbXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9tLm1haXp1by5jb20vZ2F0ZXdheT9jaXR5SWQ9NDQwMzAwJnBhZ2VOdW09MSZwYWdlU2l6ZT0xMCZ0eXBlPTEmaz00NTE1OTQ2JyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdYLUhvc3QnOiAnbWFsbC5maWxtLXRpY2tldC5maWxtLmxpc3QnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhLmZpbG1zKTtcclxuICAgICAgICByZXR1cm4geyBmaWxtczogcmVzLmRhdGEuZGF0YS5maWxtcyB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7mtYvor5U8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWxtcy5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2l0ZW0uZmlsbUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPjxpbWcgc3JjPXtpdGVtLm5hbWV9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJDb21wb25lbnQiLCJGaWxtcyIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImdldCIsImhlYWRlcnMiLCJmaWxtcyIsImRhdGEiLCJyZW5kZXIiLCJwcm9wcyIsIm1hcCIsIml0ZW0iLCJuYW1lIiwiZmlsbUlkIl0sInNvdXJjZVJvb3QiOiIifQ==