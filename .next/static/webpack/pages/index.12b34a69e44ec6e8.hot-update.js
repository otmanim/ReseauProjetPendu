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

/***/ "./components/game.js":
/*!****************************!*\
  !*** ./components/game.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction GameScreen(param) {\n    let { client  } = param;\n    _s();\n    //ATTENTION MON POTE FAIT GAFFE : SI LE CLAVIER EST PAS RESET AVANT CHAQUE DEBUT DE PARTIE\n    const { gameManagement , setGameManagement  } = (0,_pages_app__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();\n    const handleClick = (event, letter, clavier, index)=>{\n        const play = {\n            index: index,\n            letter: letter\n        };\n        client.send(JSON.stringify(play));\n    };\n    const clavier = [\n        {\n            letter: \"a\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"b\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"c\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"d\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"e\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"f\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"g\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"h\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"i\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"j\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"k\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"l\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"m\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"n\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"o\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"p\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"q\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"r\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"s\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"t\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"u\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"v\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"w\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"x\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"y\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"z\",\n            inWord: \"?\"\n        }\n    ];\n    gameManagement.gameStatut.push({\n        id: 1,\n        clavier: clavier\n    });\n    console.log(gameManagement.gameStatut);\n    const socle = {\n        width: \"150px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"150px\",\n        top: \"350px\"\n    };\n    const poutreVerticale = {\n        width: \"10px\",\n        height: \"300px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"160px\",\n        top: \"50px\"\n    };\n    const poutreHorizontale = {\n        width: \"350px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"160px\",\n        top: \"50px\"\n    };\n    const corde = {\n        width: \"10px\",\n        height: \"20px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"450px\",\n        top: \"60px\"\n    };\n    const tete = {\n        width: \"60px\",\n        height: \"60px\",\n        borderColor: \"white\",\n        borderWidth: \"10px\",\n        borderRadius: \"30px\",\n        position: \"absolute\",\n        left: \"425px\",\n        top: \"75px\"\n    };\n    const corps = {\n        width: \"10px\",\n        height: \"120px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"450px\",\n        top: \"130px\"\n    };\n    const brasGauche = {\n        width: \"80px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"450px\",\n        top: \"150px\"\n    };\n    const brasDroit = {\n        width: \"80px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"370px\",\n        top: \"150px\"\n    };\n    const jambeGauche = {\n        width: \"80px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"450px\",\n        top: \"250px\"\n    };\n    const jambeDroite = {\n        width: \"80px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"370px\",\n        top: \"250px\"\n    };\n    const pendu = [\n        socle,\n        poutreVerticale,\n        poutreHorizontale,\n        corde,\n        tete,\n        corps,\n        brasDroit,\n        brasGauche,\n        jambeDroite,\n        jambeGauche\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-r from-button-home-1 to-button-home-2 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2\",\n                        children: pendu.slice(0, gameManagement.nbError).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: item\n                            }, void 0, false, {\n                                fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                lineNumber: 140,\n                                columnNumber: 39\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-white text-7xl mt-36 ml-32\",\n                            children: gameManagement.hiddenWord\n                        }, void 0, false, {\n                            fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                            lineNumber: 144,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap ml-10 mt-16\",\n                    children: [\n                        gameManagement.gameStatut[0].clavier.map((letter, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    letter.inWord === \"?\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n                                        onClick: (event)=>handleClick(event, letter.letter, gameManagement.gameStatut[0].clavier, i),\n                                        whileHover: {\n                                            scale: 1.1\n                                        },\n                                        whileTap: {\n                                            scale: 0.95\n                                        },\n                                        className: \"bg-white text-5xl w-24 h-24 rounded-xl ml-2 mb-5\",\n                                        children: [\n                                            \" \",\n                                            letter.letter,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                        lineNumber: 151,\n                                        columnNumber: 55\n                                    }, this),\n                                    letter.inWord === \"y\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n                                        whileHover: {\n                                            scale: 1.1\n                                        },\n                                        whileTap: {\n                                            scale: 0.95\n                                        },\n                                        disabled: true,\n                                        className: \"bg-green-200 text-green-600 text-5xl w-24 h-24 rounded-xl ml-2 mb-5\",\n                                        children: [\n                                            \" \",\n                                            letter.letter,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                        lineNumber: 152,\n                                        columnNumber: 55\n                                    }, this),\n                                    letter.inWord === \"n\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n                                        whileHover: {\n                                            scale: 1.1\n                                        },\n                                        whileTap: {\n                                            scale: 0.95\n                                        },\n                                        disabled: true,\n                                        className: \"bg-red-200 text-red-600 text-5xl w-24 h-24 rounded-xl ml-2 mb-5\",\n                                        children: [\n                                            \" \",\n                                            letter.letter,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 55\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                lineNumber: 150,\n                                columnNumber: 25\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"w-1/3\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                    lineNumber: 157,\n                                    columnNumber: 23\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                            lineNumber: 156,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                    lineNumber: 148,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                lineNumber: 147,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n        lineNumber: 136,\n        columnNumber: 9\n    }, this);\n}\n_s(GameScreen, \"cq6JnqV6tsggq4l2+XrDsV8tiQ4=\", false, function() {\n    return [\n        _pages_app__WEBPACK_IMPORTED_MODULE_1__.useAppContext\n    ];\n});\n_c = GameScreen;\nvar _c;\n$RefreshReg$(_c, \"GameScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNyQyxRQUFPMEMsa0JBQzlDLDhEQUFDVDtnQ0FBSUMsV0FBVTs7b0NBQ1ZsQyxPQUFPTyxNQUFNLEtBQUsscUJBQU8sOERBQUNmLHdEQUFhO3dDQUFDb0QsU0FBUzdDLENBQUFBLFFBQVNELFlBQVlDLE9BQU9DLE9BQU9BLE1BQU0sRUFBRUosZUFBZVksVUFBVSxDQUFDLEVBQUUsQ0FBQ1AsT0FBTyxFQUFFeUM7d0NBQUlHLFlBQVk7NENBQUVDLE9BQU87d0NBQUk7d0NBQUdDLFVBQVU7NENBQUVELE9BQU87d0NBQUs7d0NBQUdaLFdBQVU7OzRDQUFtRDs0Q0FBRWxDLE9BQU9BLE1BQU07NENBQUM7Ozs7Ozs7b0NBQzFRQSxPQUFPTyxNQUFNLEtBQUsscUJBQU8sOERBQUNmLHdEQUFhO3dDQUFDcUQsWUFBWTs0Q0FBRUMsT0FBTzt3Q0FBSTt3Q0FBR0MsVUFBVTs0Q0FBRUQsT0FBTzt3Q0FBSzt3Q0FBR0UsUUFBUTt3Q0FBQ2QsV0FBVTs7NENBQXNFOzRDQUFFbEMsT0FBT0EsTUFBTTs0Q0FBQzs7Ozs7OztvQ0FDeE1BLE9BQU9PLE1BQU0sS0FBSyxxQkFBTyw4REFBQ2Ysd0RBQWE7d0NBQUNxRCxZQUFZOzRDQUFFQyxPQUFPO3dDQUFJO3dDQUFHQyxVQUFVOzRDQUFFRCxPQUFPO3dDQUFLO3dDQUFHRSxRQUFRO3dDQUFDZCxXQUFVOzs0Q0FBa0U7NENBQUVsQyxPQUFPQSxNQUFNOzRDQUFDOzs7Ozs7Ozs7Ozs7O3NDQUc3TSw4REFBQ2lDOzs4Q0FDQyw4REFBQ2dCO29DQUFNZixXQUFVO29DQUFRZ0IsTUFBTTs7Ozs7OzhDQUMvQiw4REFBQ1A7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCLENBQUM7R0EvSnVCakQ7O1FBRXdCRCxxREFBYUE7OztLQUZyQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLmpzP2JjYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJy4uL3BhZ2VzL19hcHAnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVTY3JlZW4oe2NsaWVudH0pIHtcbi8vQVRURU5USU9OIE1PTiBQT1RFIEZBSVQgR0FGRkUgOiBTSSBMRSBDTEFWSUVSIEVTVCBQQVMgUkVTRVQgQVZBTlQgQ0hBUVVFIERFQlVUIERFIFBBUlRJRVxuICAgIGNvbnN0IHtnYW1lTWFuYWdlbWVudCwgc2V0R2FtZU1hbmFnZW1lbnR9ID0gdXNlQXBwQ29udGV4dCgpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQsIGxldHRlciwgY2xhdmllciwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheSA9IHtcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGxldHRlcjogbGV0dGVyLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkocGxheSkpO1xuICAgICAgfTtcblxuICAgIGNvbnN0IGNsYXZpZXIgPSBbXG4gICAgICAgIHtsZXR0ZXIgOiAnYScsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnYicsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnYycsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnZCcsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnZScsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnZicsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnZycsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnaCcsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnaScsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnaicsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnaycsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnbCcsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnbScsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnbicsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAnbycsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAncCcsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAncScsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAncicsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAncycsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAndCcsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAndScsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAndicsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAndycsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAneCcsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAneScsIGluV29yZCA6ICc/J30sXG4gICAgICAgIHtsZXR0ZXIgOiAneicsIGluV29yZCA6ICc/J30sXG4gICAgXVxuXG4gICAgZ2FtZU1hbmFnZW1lbnQuZ2FtZVN0YXR1dC5wdXNoKHtpZCA6MSAsY2xhdmllciA6IGNsYXZpZXJ9KVxuXG4gICAgY29uc29sZS5sb2coZ2FtZU1hbmFnZW1lbnQuZ2FtZVN0YXR1dClcblxuICAgIGNvbnN0IHNvY2xlID0ge1xuICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICcxNTBweCcsXG4gICAgICAgIHRvcDogJzM1MHB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBvdXRyZVZlcnRpY2FsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMzAwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnMTYwcHgnLFxuICAgICAgICB0b3A6ICc1MHB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHBvdXRyZUhvcml6b250YWxlID0ge1xuICAgICAgICB3aWR0aDogJzM1MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICcxNjBweCcsXG4gICAgICAgIHRvcDogJzUwcHgnXG4gICAgICB9O1xuICAgICAgY29uc3QgY29yZGUgPSB7XG4gICAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnNDUwcHgnLFxuICAgICAgICB0b3A6ICc2MHB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHRldGUgPSB7XG4gICAgICAgIHdpZHRoOiAnNjBweCcsXG4gICAgICAgIGhlaWdodDogJzYwcHgnLFxuICAgICAgICBib3JkZXJDb2xvciA6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlcldpZHRoIDogJzEwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICczMHB4JyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICc0MjVweCcsXG4gICAgICAgIHRvcDogJzc1cHgnXG4gICAgICB9O1xuICAgICAgY29uc3QgY29ycHMgPSB7XG4gICAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogJzEyMHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJzQ1MHB4JyxcbiAgICAgICAgdG9wOiAnMTMwcHgnXG4gICAgICB9O1xuICAgICAgY29uc3QgYnJhc0dhdWNoZSA9IHtcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICc0NTBweCcsXG4gICAgICAgIHRvcDogJzE1MHB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGJyYXNEcm9pdCA9IHtcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICczNzBweCcsXG4gICAgICAgIHRvcDogJzE1MHB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGphbWJlR2F1Y2hlID0ge1xuICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJzQ1MHB4JyxcbiAgICAgICAgdG9wOiAnMjUwcHgnXG4gICAgICB9O1xuICAgICAgY29uc3QgamFtYmVEcm9pdGUgPSB7XG4gICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnMzcwcHgnLFxuICAgICAgICB0b3A6ICcyNTBweCdcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHBlbmR1ID0gW3NvY2xlLCBwb3V0cmVWZXJ0aWNhbGUsIHBvdXRyZUhvcml6b250YWxlLCBjb3JkZSwgdGV0ZSwgY29ycHMsIGJyYXNEcm9pdCwgYnJhc0dhdWNoZSwgamFtYmVEcm9pdGUsIGphbWJlR2F1Y2hlXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tYnV0dG9uLWhvbWUtMSB0by1idXR0b24taG9tZS0yIGgtZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMS8yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICB7cGVuZHUuc2xpY2UoMCwgZ2FtZU1hbmFnZW1lbnQubmJFcnJvcikubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiA8ZGl2IHN0eWxlPXtpdGVtfSA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LTd4bCBtdC0zNiBtbC0zMlwiPntnYW1lTWFuYWdlbWVudC5oaWRkZW5Xb3JkfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG1sLTEwIG10LTE2XCI+XG4gICAgICAgICAgICAgICAgICAgIHtnYW1lTWFuYWdlbWVudC5nYW1lU3RhdHV0WzBdLmNsYXZpZXIubWFwKChsZXR0ZXIsaSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZXR0ZXIuaW5Xb3JkID09PSAnPycgJiYgPG1vdGlvbi5idXR0b24gb25DbGljaz17ZXZlbnQgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIGxldHRlci5sZXR0ZXIsIGdhbWVNYW5hZ2VtZW50LmdhbWVTdGF0dXRbMF0uY2xhdmllciwgaSl9IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fSB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fSBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LTV4bCB3LTI0IGgtMjQgcm91bmRlZC14bCBtbC0yIG1iLTVcIj4ge2xldHRlci5sZXR0ZXJ9IDwvbW90aW9uLmJ1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xldHRlci5pbldvcmQgPT09ICd5JyAmJiA8bW90aW9uLmJ1dHRvbiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX0gd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gZGlzYWJsZWQgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMjAwIHRleHQtZ3JlZW4tNjAwIHRleHQtNXhsIHctMjQgaC0yNCByb3VuZGVkLXhsIG1sLTIgbWItNVwiPiB7bGV0dGVyLmxldHRlcn0gPC9tb3Rpb24uYnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGV0dGVyLmluV29yZCA9PT0gJ24nICYmIDxtb3Rpb24uYnV0dG9uIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fSB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fSBkaXNhYmxlZCBjbGFzc05hbWU9XCJiZy1yZWQtMjAwIHRleHQtcmVkLTYwMCB0ZXh0LTV4bCB3LTI0IGgtMjQgcm91bmRlZC14bCBtbC0yIG1iLTVcIj4ge2xldHRlci5sZXR0ZXJ9IDwvbW90aW9uLmJ1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0xLzNcIiB0eXBlPXsndGV4dCd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VBcHBDb250ZXh0IiwiR2FtZVNjcmVlbiIsImNsaWVudCIsImdhbWVNYW5hZ2VtZW50Iiwic2V0R2FtZU1hbmFnZW1lbnQiLCJoYW5kbGVDbGljayIsImV2ZW50IiwibGV0dGVyIiwiY2xhdmllciIsImluZGV4IiwicGxheSIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5Xb3JkIiwiZ2FtZVN0YXR1dCIsInB1c2giLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzb2NsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwicG91dHJlVmVydGljYWxlIiwicG91dHJlSG9yaXpvbnRhbGUiLCJjb3JkZSIsInRldGUiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYm9yZGVyUmFkaXVzIiwiY29ycHMiLCJicmFzR2F1Y2hlIiwiYnJhc0Ryb2l0IiwiamFtYmVHYXVjaGUiLCJqYW1iZURyb2l0ZSIsInBlbmR1IiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpY2UiLCJuYkVycm9yIiwibWFwIiwiaXRlbSIsInN0eWxlIiwicCIsImhpZGRlbldvcmQiLCJpIiwiYnV0dG9uIiwib25DbGljayIsIndoaWxlSG92ZXIiLCJzY2FsZSIsIndoaWxlVGFwIiwiZGlzYWJsZWQiLCJpbnB1dCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game.js\n"));

/***/ })

});