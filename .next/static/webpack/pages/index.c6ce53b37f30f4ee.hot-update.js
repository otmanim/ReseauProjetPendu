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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/_app */ \"./pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction GameScreen(param) {\n    let { client  } = param;\n    _s();\n    //ATTENTION MON POTE FAIT GAFFE : SI LE CLAVIER EST PAS RESET AVANT CHAQUE DEBUT DE PARTIE\n    const { gameManagement , setGameManagement  } = (0,_pages_app__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();\n    const handleClick = (event, letter, clavier, index)=>{\n        const play = {\n            index: index,\n            letter: letter\n        };\n        client.send(JSON.stringify(play));\n    };\n    const clavier = [\n        {\n            letter: \"a\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"b\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"c\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"d\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"e\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"f\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"g\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"h\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"i\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"j\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"k\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"l\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"m\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"n\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"o\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"p\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"q\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"r\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"s\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"t\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"u\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"v\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"w\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"x\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"y\",\n            inWord: \"?\"\n        },\n        {\n            letter: \"z\",\n            inWord: \"?\"\n        }\n    ];\n    gameManagement.gameStatut.push({\n        id: 1,\n        clavier: clavier\n    });\n    console.log(gameManagement.gameStatut);\n    const socle = {\n        width: \"150px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"150px\",\n        top: \"350px\"\n    };\n    const poutreVerticale = {\n        width: \"10px\",\n        height: \"300px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"160px\",\n        top: \"50px\"\n    };\n    const poutreHorizontale = {\n        width: \"350px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"160px\",\n        top: \"50px\"\n    };\n    const corde = {\n        width: \"10px\",\n        height: \"20px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"450px\",\n        top: \"60px\"\n    };\n    const tete = {\n        width: \"60px\",\n        height: \"60px\",\n        borderColor: \"white\",\n        borderWidth: \"10px\",\n        borderRadius: \"30px\",\n        position: \"absolute\",\n        left: \"425px\",\n        top: \"75px\"\n    };\n    const corps = {\n        width: \"10px\",\n        height: \"120px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"450px\",\n        top: \"130px\"\n    };\n    const brasGauche = {\n        width: \"80px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"450px\",\n        top: \"150px\"\n    };\n    const brasDroit = {\n        width: \"80px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"370px\",\n        top: \"150px\"\n    };\n    const jambeGauche = {\n        width: \"80px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"450px\",\n        top: \"250px\"\n    };\n    const jambeDroite = {\n        width: \"80px\",\n        height: \"10px\",\n        backgroundColor: \"white\",\n        position: \"absolute\",\n        left: \"370px\",\n        top: \"250px\"\n    };\n    const pendu = [\n        socle,\n        poutreVerticale,\n        poutreHorizontale,\n        corde,\n        tete,\n        corps,\n        brasDroit,\n        brasGauche,\n        jambeDroite,\n        jambeGauche\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-r from-button-home-1 to-button-home-2 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-1/2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2\",\n                        children: pendu.slice(0, gameManagement.nbError).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: item\n                            }, void 0, false, {\n                                fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                lineNumber: 140,\n                                columnNumber: 39\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold text-white text-7xl mt-36 ml-32\",\n                            children: gameManagement.hiddenWord\n                        }, void 0, false, {\n                            fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                            lineNumber: 144,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap ml-10 mt-16\",\n                    children: [\n                        gameManagement.gameStatut[0].clavier.map((letter, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    letter.inWord === \"?\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n                                        onClick: (event)=>handleClick(event, letter.letter, gameManagement.gameStatut[0].clavier, i),\n                                        whileHover: {\n                                            scale: 1.1\n                                        },\n                                        whileTap: {\n                                            scale: 0.95\n                                        },\n                                        className: \"bg-white text-5xl w-24 h-24 rounded-xl ml-2 mb-5\",\n                                        children: [\n                                            \" \",\n                                            letter.letter,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                        lineNumber: 151,\n                                        columnNumber: 55\n                                    }, this),\n                                    letter.inWord === \"y\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n                                        whileHover: {\n                                            scale: 1.1\n                                        },\n                                        whileTap: {\n                                            scale: 0.95\n                                        },\n                                        disabled: true,\n                                        className: \"bg-green-200 text-green-600 text-5xl w-24 h-24 rounded-xl ml-2 mb-5\",\n                                        children: [\n                                            \" \",\n                                            letter.letter,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                        lineNumber: 152,\n                                        columnNumber: 55\n                                    }, this),\n                                    letter.inWord === \"n\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n                                        whileHover: {\n                                            scale: 1.1\n                                        },\n                                        whileTap: {\n                                            scale: 0.95\n                                        },\n                                        disabled: true,\n                                        className: \"bg-red-200 text-red-600 text-5xl w-24 h-24 rounded-xl ml-2 mb-5\",\n                                        children: [\n                                            \" \",\n                                            letter.letter,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 55\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                lineNumber: 150,\n                                columnNumber: 25\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"w-80 h-10 text-3xl\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                    lineNumber: 157,\n                                    columnNumber: 23\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 23\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                            lineNumber: 156,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                    lineNumber: 148,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n                lineNumber: 147,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mamar/Documents/Projects/ReseauProjetPendu/components/game.js\",\n        lineNumber: 136,\n        columnNumber: 9\n    }, this);\n}\n_s(GameScreen, \"cq6JnqV6tsggq4l2+XrDsV8tiQ4=\", false, function() {\n    return [\n        _pages_app__WEBPACK_IMPORTED_MODULE_1__.useAppContext\n    ];\n});\n_c = GameScreen;\nvar _c;\n$RefreshReg$(_c, \"GameScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNyQyxRQUFPMEMsa0JBQzlDLDhEQUFDVDtnQ0FBSUMsV0FBVTs7b0NBQ1ZsQyxPQUFPTyxNQUFNLEtBQUsscUJBQU8sOERBQUNmLHdEQUFhO3dDQUFDb0QsU0FBUzdDLENBQUFBLFFBQVNELFlBQVlDLE9BQU9DLE9BQU9BLE1BQU0sRUFBRUosZUFBZVksVUFBVSxDQUFDLEVBQUUsQ0FBQ1AsT0FBTyxFQUFFeUM7d0NBQUlHLFlBQVk7NENBQUVDLE9BQU87d0NBQUk7d0NBQUdDLFVBQVU7NENBQUVELE9BQU87d0NBQUs7d0NBQUdaLFdBQVU7OzRDQUFtRDs0Q0FBRWxDLE9BQU9BLE1BQU07NENBQUM7Ozs7Ozs7b0NBQzFRQSxPQUFPTyxNQUFNLEtBQUsscUJBQU8sOERBQUNmLHdEQUFhO3dDQUFDcUQsWUFBWTs0Q0FBRUMsT0FBTzt3Q0FBSTt3Q0FBR0MsVUFBVTs0Q0FBRUQsT0FBTzt3Q0FBSzt3Q0FBR0UsUUFBUTt3Q0FBQ2QsV0FBVTs7NENBQXNFOzRDQUFFbEMsT0FBT0EsTUFBTTs0Q0FBQzs7Ozs7OztvQ0FDeE1BLE9BQU9PLE1BQU0sS0FBSyxxQkFBTyw4REFBQ2Ysd0RBQWE7d0NBQUNxRCxZQUFZOzRDQUFFQyxPQUFPO3dDQUFJO3dDQUFHQyxVQUFVOzRDQUFFRCxPQUFPO3dDQUFLO3dDQUFHRSxRQUFRO3dDQUFDZCxXQUFVOzs0Q0FBa0U7NENBQUVsQyxPQUFPQSxNQUFNOzRDQUFDOzs7Ozs7Ozs7Ozs7O3NDQUc3TSw4REFBQ2lDOzs4Q0FDQyw4REFBQ2dCO29DQUFNZixXQUFVO29DQUFxQmdCLE1BQU07Ozs7Ozs4Q0FDNUMsOERBQUNQOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QixDQUFDO0dBL0p1QmpEOztRQUV3QkQscURBQWFBOzs7S0FGckNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS5qcz9iY2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tICcuLi9wYWdlcy9fYXBwJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lU2NyZWVuKHtjbGllbnR9KSB7XG4vL0FUVEVOVElPTiBNT04gUE9URSBGQUlUIEdBRkZFIDogU0kgTEUgQ0xBVklFUiBFU1QgUEFTIFJFU0VUIEFWQU5UIENIQVFVRSBERUJVVCBERSBQQVJUSUVcbiAgICBjb25zdCB7Z2FtZU1hbmFnZW1lbnQsIHNldEdhbWVNYW5hZ2VtZW50fSA9IHVzZUFwcENvbnRleHQoKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBsZXR0ZXIsIGNsYXZpZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXkgPSB7XG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBsZXR0ZXI6IGxldHRlcixcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHBsYXkpKTtcbiAgICAgIH07XG5cbiAgICBjb25zdCBjbGF2aWVyID0gW1xuICAgICAgICB7bGV0dGVyIDogJ2EnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2InLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2MnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2QnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2UnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2YnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2cnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2gnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2knLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2onLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2snLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ2wnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ20nLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ24nLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ28nLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3AnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3EnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3InLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3MnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3QnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3UnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3YnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3cnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3gnLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3knLCBpbldvcmQgOiAnPyd9LFxuICAgICAgICB7bGV0dGVyIDogJ3onLCBpbldvcmQgOiAnPyd9LFxuICAgIF1cblxuICAgIGdhbWVNYW5hZ2VtZW50LmdhbWVTdGF0dXQucHVzaCh7aWQgOjEgLGNsYXZpZXIgOiBjbGF2aWVyfSlcblxuICAgIGNvbnNvbGUubG9nKGdhbWVNYW5hZ2VtZW50LmdhbWVTdGF0dXQpXG5cbiAgICBjb25zdCBzb2NsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnMTUwcHgnLFxuICAgICAgICB0b3A6ICczNTBweCdcbiAgICAgIH07XG4gICAgICBjb25zdCBwb3V0cmVWZXJ0aWNhbGUgPSB7XG4gICAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJzE2MHB4JyxcbiAgICAgICAgdG9wOiAnNTBweCdcbiAgICAgIH07XG4gICAgICBjb25zdCBwb3V0cmVIb3Jpem9udGFsZSA9IHtcbiAgICAgICAgd2lkdGg6ICczNTBweCcsXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnMTYwcHgnLFxuICAgICAgICB0b3A6ICc1MHB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNvcmRlID0ge1xuICAgICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJzQ1MHB4JyxcbiAgICAgICAgdG9wOiAnNjBweCdcbiAgICAgIH07XG4gICAgICBjb25zdCB0ZXRlID0ge1xuICAgICAgICB3aWR0aDogJzYwcHgnLFxuICAgICAgICBoZWlnaHQ6ICc2MHB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3IgOiAnd2hpdGUnLFxuICAgICAgICBib3JkZXJXaWR0aCA6ICcxMHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMzBweCcsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnNDI1cHgnLFxuICAgICAgICB0b3A6ICc3NXB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNvcnBzID0ge1xuICAgICAgICB3aWR0aDogJzEwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxMjBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICc0NTBweCcsXG4gICAgICAgIHRvcDogJzEzMHB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGJyYXNHYXVjaGUgPSB7XG4gICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnNDUwcHgnLFxuICAgICAgICB0b3A6ICcxNTBweCdcbiAgICAgIH07XG4gICAgICBjb25zdCBicmFzRHJvaXQgPSB7XG4gICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgIGhlaWdodDogJzEwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiAnMzcwcHgnLFxuICAgICAgICB0b3A6ICcxNTBweCdcbiAgICAgIH07XG4gICAgICBjb25zdCBqYW1iZUdhdWNoZSA9IHtcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6ICc0NTBweCcsXG4gICAgICAgIHRvcDogJzI1MHB4J1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGphbWJlRHJvaXRlID0ge1xuICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJzM3MHB4JyxcbiAgICAgICAgdG9wOiAnMjUwcHgnXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwZW5kdSA9IFtzb2NsZSwgcG91dHJlVmVydGljYWxlLCBwb3V0cmVIb3Jpem9udGFsZSwgY29yZGUsIHRldGUsIGNvcnBzLCBicmFzRHJvaXQsIGJyYXNHYXVjaGUsIGphbWJlRHJvaXRlLCBqYW1iZUdhdWNoZV1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJ1dHRvbi1ob21lLTEgdG8tYnV0dG9uLWhvbWUtMiBoLWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTEvMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAge3BlbmR1LnNsaWNlKDAsIGdhbWVNYW5hZ2VtZW50Lm5iRXJyb3IpLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gPGRpdiBzdHlsZT17aXRlbX0gPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgdGV4dC03eGwgbXQtMzYgbWwtMzJcIj57Z2FtZU1hbmFnZW1lbnQuaGlkZGVuV29yZH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtbC0xMCBtdC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICB7Z2FtZU1hbmFnZW1lbnQuZ2FtZVN0YXR1dFswXS5jbGF2aWVyLm1hcCgobGV0dGVyLGkpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGV0dGVyLmluV29yZCA9PT0gJz8nICYmIDxtb3Rpb24uYnV0dG9uIG9uQ2xpY2s9e2V2ZW50ID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBsZXR0ZXIubGV0dGVyLCBnYW1lTWFuYWdlbWVudC5nYW1lU3RhdHV0WzBdLmNsYXZpZXIsIGkpfSB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX0gd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC01eGwgdy0yNCBoLTI0IHJvdW5kZWQteGwgbWwtMiBtYi01XCI+IHtsZXR0ZXIubGV0dGVyfSA8L21vdGlvbi5idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZXR0ZXIuaW5Xb3JkID09PSAneScgJiYgPG1vdGlvbi5idXR0b24gd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19IHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19IGRpc2FibGVkIGNsYXNzTmFtZT1cImJnLWdyZWVuLTIwMCB0ZXh0LWdyZWVuLTYwMCB0ZXh0LTV4bCB3LTI0IGgtMjQgcm91bmRlZC14bCBtbC0yIG1iLTVcIj4ge2xldHRlci5sZXR0ZXJ9IDwvbW90aW9uLmJ1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xldHRlci5pbldvcmQgPT09ICduJyAmJiA8bW90aW9uLmJ1dHRvbiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX0gd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX0gZGlzYWJsZWQgY2xhc3NOYW1lPVwiYmctcmVkLTIwMCB0ZXh0LXJlZC02MDAgdGV4dC01eGwgdy0yNCBoLTI0IHJvdW5kZWQteGwgbWwtMiBtYi01XCI+IHtsZXR0ZXIubGV0dGVyfSA8L21vdGlvbi5idXR0b24+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctODAgaC0xMCB0ZXh0LTN4bFwiIHR5cGU9eyd0ZXh0J30vPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZUFwcENvbnRleHQiLCJHYW1lU2NyZWVuIiwiY2xpZW50IiwiZ2FtZU1hbmFnZW1lbnQiLCJzZXRHYW1lTWFuYWdlbWVudCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJsZXR0ZXIiLCJjbGF2aWVyIiwiaW5kZXgiLCJwbGF5Iiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbldvcmQiLCJnYW1lU3RhdHV0IiwicHVzaCIsImlkIiwiY29uc29sZSIsImxvZyIsInNvY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJwb3V0cmVWZXJ0aWNhbGUiLCJwb3V0cmVIb3Jpem9udGFsZSIsImNvcmRlIiwidGV0ZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJjb3JwcyIsImJyYXNHYXVjaGUiLCJicmFzRHJvaXQiLCJqYW1iZUdhdWNoZSIsImphbWJlRHJvaXRlIiwicGVuZHUiLCJkaXYiLCJjbGFzc05hbWUiLCJzbGljZSIsIm5iRXJyb3IiLCJtYXAiLCJpdGVtIiwic3R5bGUiLCJwIiwiaGlkZGVuV29yZCIsImkiLCJidXR0b24iLCJvbkNsaWNrIiwid2hpbGVIb3ZlciIsInNjYWxlIiwid2hpbGVUYXAiLCJkaXNhYmxlZCIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game.js\n"));

/***/ })

});