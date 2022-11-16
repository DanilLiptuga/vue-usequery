/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "useMutation": function() { return /* reexport */ useMutation; },
  "useQuery": function() { return /* reexport */ useQuery; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./src/fetching/useQuery.ts

const useQuery = (queryFn, deps) => {
  const isLoading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
  const data = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
  const error = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('');
  const fetchData = async () => {
    try {
      isLoading.value = true;
      data.value = await queryFn();
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  };
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
    fetchData();
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(() => deps, () => {
    console.log(queryFn);
    fetchData();
  }, {
    deep: true
  });
  return {
    isLoading,
    data,
    error,
    fetchData
  };
};
;// CONCATENATED MODULE: ./src/fetching/useMutation.ts

const useMutation = (mutateFn, options) => {
  const isLoading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
  const data = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
  const error = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('');
  const mutate = async (...props) => {
    try {
      isLoading.value = true;
      if (options?.onSettled) options.onSettled();
      const response = await mutateFn(...props);
      data.value = response;
      if (options?.onSuccess) options.onSuccess(response);
    } catch (e) {
      error.value = e;
      if (options?.onError) options.onError(e);
    } finally {
      isLoading.value = false;
    }
  };
  return {
    isLoading,
    error,
    data,
    mutate
  };
};
;// CONCATENATED MODULE: ./src/main.ts



;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-usequery.common.js.map