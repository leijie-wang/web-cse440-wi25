"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/layoutSidebar.tsx":
/*!***********************************!*\
  !*** ./src/app/layoutSidebar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LayoutSidebar: function() { return /* binding */ LayoutSidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_sitelinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/sitelinks */ \"(app-pages-browser)/./src/app/sitelinks.ts\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Sidebar */ \"(app-pages-browser)/./src/components/Sidebar/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ LayoutSidebar auto */ \nvar _s = $RefreshSig$();\n\n// import { ProjectLinks } from \"@/app/projects/projectlinks\";\n\n\n\nfunction LayoutSidebar(param) {\n    let {} = param;\n    _s();\n    const routeSegments = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSelectedLayoutSegments)();\n    const pageLinks = (()=>{\n        if (routeSegments.length >= 1) {\n            if (routeSegments[0] === \"assignments\") {\n                if (routeSegments.length >= 2) {\n                    if (routeSegments[1] === \"milestone-1\") {\n                        return _app_sitelinks__WEBPACK_IMPORTED_MODULE_2__.PAGE_LINKS_MILESTONE_1;\n                    } else if (routeSegments[1] === \"milestone-2\") {\n                        return _app_sitelinks__WEBPACK_IMPORTED_MODULE_2__.PAGE_LINKS_MILESTONE_2;\n                    } else if (routeSegments[1] === \"milestone-3\") {\n                        return _app_sitelinks__WEBPACK_IMPORTED_MODULE_2__.PAGE_LINKS_MILESTONE_3;\n                    } else if (routeSegments[1] === \"milestone-4\") {\n                        return _app_sitelinks__WEBPACK_IMPORTED_MODULE_2__.PAGE_LINKS_MILESTONE_4;\n                    } else if (routeSegments[1] === \"milestone-5\") {\n                        return _app_sitelinks__WEBPACK_IMPORTED_MODULE_2__.PAGE_LINKS_MILESTONE_5;\n                    }\n                }\n            } else if (routeSegments[0] === \"projects\") {\n            // if (ProjectLinks.length > 0) {\n            //   return PAGE_LINKS_PROJECTS;\n            // }\n            }\n        }\n        return [];\n    })();\n    const sidebar = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {\n        siteLinks: _app_sitelinks__WEBPACK_IMPORTED_MODULE_2__.SITE_LINKS,\n        pageLinks: pageLinks\n    }, void 0, false, {\n        fileName: \"/Users/katelynmei/Documents/Github/web-cse440-24au/src/app/layoutSidebar.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n    return sidebar;\n}\n_s(LayoutSidebar, \"95FR/U0wSBFFQNnP/bmJiJq8teY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useSelectedLayoutSegments\n    ];\n});\n_c = LayoutSidebar;\nvar _c;\n$RefreshReg$(_c, \"LayoutSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0U2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRStCO0FBRS9CLDhEQUE4RDtBQVNyQztBQUNzQjtBQUNhO0FBSXJELFNBQVNTLGNBQWMsS0FBc0I7UUFBdEIsRUFBc0IsR0FBdEI7O0lBQzVCLE1BQU1DLGdCQUFnQkYsMEVBQXlCQTtJQUUvQyxNQUFNRyxZQUFZLENBQUM7UUFDakIsSUFBSUQsY0FBY0UsTUFBTSxJQUFJLEdBQUc7WUFDN0IsSUFBSUYsYUFBYSxDQUFDLEVBQUUsS0FBSyxlQUFlO2dCQUN0QyxJQUFJQSxjQUFjRSxNQUFNLElBQUksR0FBRztvQkFDN0IsSUFBSUYsYUFBYSxDQUFDLEVBQUUsS0FBSyxlQUFlO3dCQUN0QyxPQUFPVCxrRUFBc0JBO29CQUMvQixPQUFPLElBQUlTLGFBQWEsQ0FBQyxFQUFFLEtBQUssZUFBZTt3QkFDN0MsT0FBT1Isa0VBQXNCQTtvQkFDL0IsT0FBTyxJQUFJUSxhQUFhLENBQUMsRUFBRSxLQUFLLGVBQWU7d0JBQzdDLE9BQU9QLGtFQUFzQkE7b0JBQy9CLE9BQU8sSUFBSU8sYUFBYSxDQUFDLEVBQUUsS0FBSyxlQUFlO3dCQUM3QyxPQUFPTixrRUFBc0JBO29CQUMvQixPQUFPLElBQUlNLGFBQWEsQ0FBQyxFQUFFLEtBQUssZUFBZTt3QkFDN0MsT0FBT0wsa0VBQXNCQTtvQkFDL0I7Z0JBQ0Y7WUFDRixPQUFPLElBQUlLLGFBQWEsQ0FBQyxFQUFFLEtBQUssWUFBWTtZQUMxQyxpQ0FBaUM7WUFDakMsZ0NBQWdDO1lBQ2hDLElBQUk7WUFDTjtRQUNGO1FBRUEsT0FBTyxFQUFFO0lBQ1g7SUFFQSxNQUFNRyx3QkFDSiw4REFBQ04sd0RBQU9BO1FBQUNPLFdBQVdSLHNEQUFVQTtRQUFFSyxXQUFXQTs7Ozs7O0lBRzdDLE9BQU9FO0FBQ1Q7R0FsQ2dCSjs7UUFDUUQsc0VBQXlCQTs7O0tBRGpDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xheW91dFNpZGViYXIudHN4PzNlNjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBpbXBvcnQgeyBQcm9qZWN0TGlua3MgfSBmcm9tIFwiQC9hcHAvcHJvamVjdHMvcHJvamVjdGxpbmtzXCI7XG5pbXBvcnQge1xuICBQQUdFX0xJTktTX01JTEVTVE9ORV8xLFxuICBQQUdFX0xJTktTX01JTEVTVE9ORV8yLFxuICBQQUdFX0xJTktTX01JTEVTVE9ORV8zLFxuICBQQUdFX0xJTktTX01JTEVTVE9ORV80LFxuICBQQUdFX0xJTktTX01JTEVTVE9ORV81LFxuICAvLyBQQUdFX0xJTktTX1BST0pFQ1RTLFxuICBTSVRFX0xJTktTLFxufSBmcm9tIFwiQC9hcHAvc2l0ZWxpbmtzXCI7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RlZExheW91dFNlZ21lbnRzIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5pbnRlcmZhY2UgTGF5b3V0U2lkZWJhclByb3BzIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXlvdXRTaWRlYmFyKHt9OiBMYXlvdXRTaWRlYmFyUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVTZWdtZW50cyA9IHVzZVNlbGVjdGVkTGF5b3V0U2VnbWVudHMoKTtcblxuICBjb25zdCBwYWdlTGlua3MgPSAoKCkgPT4ge1xuICAgIGlmIChyb3V0ZVNlZ21lbnRzLmxlbmd0aCA+PSAxKSB7XG4gICAgICBpZiAocm91dGVTZWdtZW50c1swXSA9PT0gXCJhc3NpZ25tZW50c1wiKSB7XG4gICAgICAgIGlmIChyb3V0ZVNlZ21lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgaWYgKHJvdXRlU2VnbWVudHNbMV0gPT09IFwibWlsZXN0b25lLTFcIikge1xuICAgICAgICAgICAgcmV0dXJuIFBBR0VfTElOS1NfTUlMRVNUT05FXzE7XG4gICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZVNlZ21lbnRzWzFdID09PSBcIm1pbGVzdG9uZS0yXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBQQUdFX0xJTktTX01JTEVTVE9ORV8yO1xuICAgICAgICAgIH0gZWxzZSBpZiAocm91dGVTZWdtZW50c1sxXSA9PT0gXCJtaWxlc3RvbmUtM1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gUEFHRV9MSU5LU19NSUxFU1RPTkVfMztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlU2VnbWVudHNbMV0gPT09IFwibWlsZXN0b25lLTRcIikge1xuICAgICAgICAgICAgcmV0dXJuIFBBR0VfTElOS1NfTUlMRVNUT05FXzQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZVNlZ21lbnRzWzFdID09PSBcIm1pbGVzdG9uZS01XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBQQUdFX0xJTktTX01JTEVTVE9ORV81O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyb3V0ZVNlZ21lbnRzWzBdID09PSBcInByb2plY3RzXCIpIHtcbiAgICAgICAgLy8gaWYgKFByb2plY3RMaW5rcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIFBBR0VfTElOS1NfUFJPSkVDVFM7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH0pKCk7XG5cbiAgY29uc3Qgc2lkZWJhciA9IChcbiAgICA8U2lkZWJhciBzaXRlTGlua3M9e1NJVEVfTElOS1N9IHBhZ2VMaW5rcz17cGFnZUxpbmtzfT48L1NpZGViYXI+XG4gICk7XG5cbiAgcmV0dXJuIHNpZGViYXI7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQQUdFX0xJTktTX01JTEVTVE9ORV8xIiwiUEFHRV9MSU5LU19NSUxFU1RPTkVfMiIsIlBBR0VfTElOS1NfTUlMRVNUT05FXzMiLCJQQUdFX0xJTktTX01JTEVTVE9ORV80IiwiUEFHRV9MSU5LU19NSUxFU1RPTkVfNSIsIlNJVEVfTElOS1MiLCJTaWRlYmFyIiwidXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50cyIsIkxheW91dFNpZGViYXIiLCJyb3V0ZVNlZ21lbnRzIiwicGFnZUxpbmtzIiwibGVuZ3RoIiwic2lkZWJhciIsInNpdGVMaW5rcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layoutSidebar.tsx\n"));

/***/ })

});