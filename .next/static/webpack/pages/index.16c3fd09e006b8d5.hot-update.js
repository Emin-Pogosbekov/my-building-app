"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layouts/Quiz.js":
/*!************************************!*\
  !*** ./components/layouts/Quiz.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ \"./components/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), apart = ref[0], setApart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), house = ref1[0], setHouse = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), commerce = ref2[0], setCommerce = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), other = ref3[0], setOther = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), newBuilding = ref4[0], setNewBuilding = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), oldBuilding = ref5[0], setOldBuilding = ref5[1];\n    var handleCheckbox = function(e) {\n        switch(e.target.name){\n            case \"apart\":\n                setApart(!apart);\n                break;\n            case \"house\":\n                setHouse(!house);\n                break;\n            case \"commerce\":\n                setCommerce(!commerce);\n                break;\n            case \"other\":\n                setOther(!other);\n                break;\n            case \"newBuilding\":\n                setNewBuilding(!newBuilding);\n                break;\n            case \"oldBuilding\":\n                setOldBuilding(!oldBuilding);\n                break;\n            default:\n                console.log(\"Default here...\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col justify-between bg-appDark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 md:px-20 lg:px-48 xl:px-96 w-full py-24 flex flex-col items-center gap-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.BigSubtitle, {\n                        text: \"Unlock your biggest quizes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.Paragraph, {\n                        text: \"Pipe makes recurring revenue streams tradable for their annual value, meaning more cash flow for scaling companies. No customer discounts, no restrictive debt.\",\n                        align: \"center\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full px-4 pb-24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto max-w-5xl rounded-3xl px-4 pt-4 md:px-14 md:pt-14 bg-gradient-to-r from-purple-500 to-pink-500\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full px-4 py-24 bg-appHighlight rounded-t-2xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl text-zinc-50 font-bold py-12\",\n                                children: \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u0442\\u0438\\u043F \\u043E\\u0431\\u044A\\u0435\\u043A\\u0442\\u0430, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0439 \\u043F\\u043B\\u0430\\u043D\\u0438\\u0440\\u0443\\u0435\\u0442\\u0441\\u044F \\u043E\\u0442\\u0440\\u0435\\u043C\\u043E\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        checked: apart,\n                                        name: \"apart\",\n                                        onChange: handleCheckbox\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-appLightText font-medium px-2\",\n                                        children: \"\\u041A\\u0432\\u0430\\u0440\\u0442\\u0438\\u0440\\u0430\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-appLightText font-medium px-2\",\n                                        children: \"\\u0417\\u0430\\u0433\\u043E\\u0440\\u043E\\u0434\\u043D\\u0430\\u044F \\u043D\\u0435\\u0434\\u0432\\u0438\\u0436\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-appLightText font-medium px-2\",\n                                        children: \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u0440\\u0447\\u0435\\u0441\\u043A\\u043E\\u0435 \\u043F\\u043E\\u043C\\u0435\\u0449\\u0435\\u043D\\u0438\\u0435\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-appLightText font-medium px-2\",\n                                        children: \"\\u0414\\u0440\\u0443\\u0433\\u043E\\u0435\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl text-zinc-50 font-bold py-12\",\n                                children: \"\\u0412 \\u043A\\u0430\\u043A\\u043E\\u043C \\u0441\\u0442\\u0440\\u043E\\u0435\\u043D\\u0438\\u0438 \\u043D\\u0430\\u0445\\u043E\\u0434\\u0438\\u0442\\u0441\\u044F \\u0432\\u0430\\u0448 \\u043E\\u0431\\u044A\\u0435\\u043A\\u0442?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-appLightText font-medium px-2\",\n                                        children: \"\\u041D\\u043E\\u0432\\u043E\\u0435 \\u0441\\u0442\\u0440\\u043E\\u0435\\u043D\\u0438\\u0435\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-appLightText font-medium px-2\",\n                                        children: \"\\u0412\\u0442\\u043E\\u0440\\u0438\\u0447\\u043D\\u0430\\u044F \\u043D\\u0435\\u0434\\u0432\\u0438\\u0436\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"p\",\n                                children: \"\\u0414\\u0430\\u043B\\u0435\\u0435\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eminp\\\\Desktop\\\\projects\\\\my-app\\\\components\\\\layouts\\\\Quiz.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n};\n_s(Quiz, \"J+7oknVQ+mV60GyU8Es6DYqu+Yg=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNXLFFBQU07Z0NBQUNYLFNBQVMsRUFBQyxHQUFHOzBDQUFDLGdDQUFLOzs7OztvQ0FBUzs7Ozs7OzRCQUNoQzs7Ozs7d0JBQ0Y7Ozs7O29CQUNGOzs7Ozs7WUFDRSxDQUNYO0NBQ0Y7R0EzRXVCcEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9RdWl6LmpzPzhjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0JpZ1N1YnRpdGxlLCBQYXJhZ3JhcGh9IGZyb20gJy4uLydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgY29uc3QgW2FwYXJ0LCBzZXRBcGFydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaG91c2UsIHNldEhvdXNlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb21tZXJjZSwgc2V0Q29tbWVyY2VdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW290aGVyLCBzZXRPdGhlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW25ld0J1aWxkaW5nLCBzZXROZXdCdWlsZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb2xkQnVpbGRpbmcsIHNldE9sZEJ1aWxkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja2JveCA9IChlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgY2FzZSAnYXBhcnQnOlxyXG4gICAgICAgIHNldEFwYXJ0KCFhcGFydClcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdob3VzZSc6XHJcbiAgICAgICAgc2V0SG91c2UoIWhvdXNlKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ2NvbW1lcmNlJzpcclxuICAgICAgICBzZXRDb21tZXJjZSghY29tbWVyY2UpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnb3RoZXInOlxyXG4gICAgICAgIHNldE90aGVyKCFvdGhlcilcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICduZXdCdWlsZGluZyc6XHJcbiAgICAgICAgc2V0TmV3QnVpbGRpbmcoIW5ld0J1aWxkaW5nKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ29sZEJ1aWxkaW5nJzpcclxuICAgICAgICBzZXRPbGRCdWlsZGluZyghb2xkQnVpbGRpbmcpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmxvZygnRGVmYXVsdCBoZXJlLi4uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy1hcHBEYXJrJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtMjAgbGc6cHgtNDggeGw6cHgtOTYgdy1mdWxsIHB5LTI0IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC15LTYnPlxyXG4gICAgICAgIDxCaWdTdWJ0aXRsZSB0ZXh0PSdVbmxvY2sgeW91ciBiaWdnZXN0IHF1aXplcycgLz5cclxuICAgICAgICA8UGFyYWdyYXBoIHRleHQ9J1BpcGUgbWFrZXMgcmVjdXJyaW5nIHJldmVudWUgc3RyZWFtcyB0cmFkYWJsZSBmb3IgdGhlaXIgYW5udWFsIHZhbHVlLCBtZWFuaW5nIG1vcmUgY2FzaCBmbG93IGZvciBzY2FsaW5nIGNvbXBhbmllcy4gTm8gY3VzdG9tZXIgZGlzY291bnRzLCBubyByZXN0cmljdGl2ZSBkZWJ0LicgYWxpZ249J2NlbnRlcicgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtNCBwYi0yNCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIG1heC13LTV4bCByb3VuZGVkLTN4bCBweC00IHB0LTQgbWQ6cHgtMTQgbWQ6cHQtMTQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXB1cnBsZS01MDAgdG8tcGluay01MDAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1mdWxsIHB4LTQgcHktMjQgYmctYXBwSGlnaGxpZ2h0IHJvdW5kZWQtdC0yeGwnPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIHRleHQtemluYy01MCBmb250LWJvbGQgcHktMTInPtCS0YvQsdC10YDQuNGC0LUg0YLQuNC/INC+0LHRitC10LrRgtCwLCDQutC+0YLQvtGA0YvQuSDQv9C70LDQvdC40YDRg9C10YLRgdGPINC+0YLRgNC10LzQvtC90YLQuNGA0L7QstCw0YLRjDwvaDI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2FwYXJ0fSBuYW1lPSdhcGFydCcgb25DaGFuZ2U9e2hhbmRsZUNoZWNrYm94fSAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1hcHBMaWdodFRleHQgZm9udC1tZWRpdW0gcHgtMic+0JrQstCw0YDRgtC40YDQsDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYXBwTGlnaHRUZXh0IGZvbnQtbWVkaXVtIHB4LTInPtCX0LDQs9C+0YDQvtC00L3QsNGPINC90LXQtNCy0LjQttC40LzQvtGB0YLRjDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtYXBwTGlnaHRUZXh0IGZvbnQtbWVkaXVtIHB4LTInPtCa0L7QvNC80LXRgNGH0LXRgdC60L7QtSDQv9C+0LzQtdGJ0LXQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWFwcExpZ2h0VGV4dCBmb250LW1lZGl1bSBweC0yJz7QlNGA0YPQs9C+0LU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteGwgdGV4dC16aW5jLTUwIGZvbnQtYm9sZCBweS0xMic+0JIg0LrQsNC60L7QvCDRgdGC0YDQvtC10L3QuNC4INC90LDRhdC+0LTQuNGC0YHRjyDQstCw0Ygg0L7QsdGK0LXQutGCPzwvaDI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWFwcExpZ2h0VGV4dCBmb250LW1lZGl1bSBweC0yJz7QndC+0LLQvtC1INGB0YLRgNC+0LXQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWFwcExpZ2h0VGV4dCBmb250LW1lZGl1bSBweC0yJz7QktGC0L7RgNC40YfQvdCw0Y8g0L3QtdC00LLQuNC20LjQvNC+0YHRgtGMPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncCc+0JTQsNC70LXQtTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJpZ1N1YnRpdGxlIiwiUGFyYWdyYXBoIiwiUXVpeiIsImFwYXJ0Iiwic2V0QXBhcnQiLCJob3VzZSIsInNldEhvdXNlIiwiY29tbWVyY2UiLCJzZXRDb21tZXJjZSIsIm90aGVyIiwic2V0T3RoZXIiLCJuZXdCdWlsZGluZyIsInNldE5ld0J1aWxkaW5nIiwib2xkQnVpbGRpbmciLCJzZXRPbGRCdWlsZGluZyIsImhhbmRsZUNoZWNrYm94IiwiZSIsInRhcmdldCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInRleHQiLCJhbGlnbiIsImgyIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/Quiz.js\n"));

/***/ })

});