(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-usequery"] = factory(require("vue"));
	else
		root["vue-usequery"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
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

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./src/fetching/useQuery.ts

const useQuery = (queryFn, deps) => {
  const isLoading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  const data = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
  const error = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)('');
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
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
    fetchData();
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => deps, () => {
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
  const isLoading = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  const data = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
  const error = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)('');
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



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-usequery.umd.js.map