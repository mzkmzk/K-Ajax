/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _singleKAjax = __webpack_require__(1);

	var _singleKAjax2 = _interopRequireDefault(_singleKAjax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (typeof module != 'undefined' && module.exports) {
	    module.exports = _singleKAjax2.default;
	} else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return _singleKAjax2.default;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	    window.k_ajax = _singleKAjax2.default;
	}
	window.k_ajax = _singleKAjax2.default;
	//window.K_Logging = K_Logging

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Options = __webpack_require__(2);

	var _Options2 = _interopRequireDefault(_Options);

	var _Utils = __webpack_require__(3);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var K_Aajax = function () {
	    function K_Aajax() {
	        _classCallCheck(this, K_Aajax);
	    }

	    _createClass(K_Aajax, [{
	        key: 'getJSON',
	        value: function getJSON(url) {
	            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var callback = arguments[2];
	            var errorCallback = arguments[3];
	            var async = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

	            var request = this._setRequest(url, callback, errorCallback);

	            request.open('GET', _Utils2.default.urlAppendData(url, data), async);
	            //request.setRequestHeader('Content-Type','application/json') CORS不允许设置头
	            request.send(null);
	        }
	    }, {
	        key: 'getJSONP',
	        value: function getJSONP(url) {
	            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var callback = arguments[2];
	            var async = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

	            var callbackName = 'K_Ajax' + new Date().getTime(),
	                _self = this;
	            data['callback'] = callbackName; //这样添加回调方法应该会有问题,当原本的data就有callback这个key的时候
	            url = _Utils2.default.urlAppendData(url, data);

	            var script = document.createElement('script');
	            //这里回调时的执行函数作用域应该有问题


	            window[callbackName] = function (response) {
	                try {
	                    console.log();
	                    //let response = JSON.parse(JSON.stringify(response))
	                    callback(response);
	                } finally {
	                    delete window[callbackName];
	                    script.parentNode.removeChild(script);
	                }
	            };
	            script.src = url;
	            document.body.appendChild(script);
	        }
	    }, {
	        key: 'post',
	        value: function post(url, data, callback, errorCallback) {
	            var async = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

	            var request = this._setRequest(url, callback, errorCallback);

	            request.open('POST', url, async);
	            //request.setRequestHeader('Content-Type','application/json') CORS不允许设置头
	            request.send(_Utils2.default.encodeFormData(data));
	        }
	    }, {
	        key: 'useImg',
	        value: function useImg(url, data, callback, errorCallback) {
	            var async = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

	            var img = new Image();
	            img.onload = img.onerror = function () {
	                callback && callback();
	            };
	            img.src = _Utils2.default.urlAppendData(url, data);
	        }
	    }, {
	        key: '_setRequest',
	        value: function _setRequest(url, callback, errorCallback) {
	            var request = new this._createXHR(url);

	            request.onreadystatechange = function () {

	                if (request.readyState === 4) {
	                    if (request.status === 200) {
	                        callback && callback(JSON.parse(JSON.stringify(request.responseText)));
	                    } else {
	                        errorCallback && errorCallback();
	                    }
	                }
	            };
	            return request;
	        }
	    }, {
	        key: '_createXHR',
	        value: function _createXHR(url) {
	            var xhr = new XMLHttpRequest();
	            if (_Utils2.default.isCORS(url) && !('withCredentials' in xhr) && typeof XDomainRequest != 'undefined') {
	                //IE8的跨域
	                xhr = new XDomainRequest();
	            }
	            return xhr;
	        }
	    }]);

	    return K_Aajax;
	}();

	exports.default = new K_Aajax();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Options = function () {
	    function Options() {
	        _classCallCheck(this, Options);
	    }

	    _createClass(Options, null, [{
	        key: "repleaceOptions",
	        value: function repleaceOptions(options) {

	            if (options == undefined) return Options.getDefaultOptions();

	            var defaultOptions = Options.getDefaultOptions(),
	                //前者为layer时只替换部分属性
	            keys = Object.keys(defaultOptions);

	            for (var i = keys.length - 1; i >= 0; i--) {
	                if (options[keys[i]] === undefined) {
	                    options[keys[i]] = defaultOptions[keys[i]];
	                }
	            }

	            return options;
	        }
	    }, {
	        key: "getDefaultOptions",
	        value: function getDefaultOptions() {
	            return {};
	        }
	    }]);

	    return Options;
	}();

	exports.default = Options;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utils = function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }

	    _createClass(Utils, null, [{
	        key: 'urlAppendData',
	        value: function urlAppendData(url, data) {
	            if (url.indexOf('?') === -1) {
	                url += '?';
	            } else {
	                url += '&';
	            }
	            return url + Utils.encodeFormData(data);
	        }
	    }, {
	        key: 'encodeFormData',
	        value: function encodeFormData(data) {
	            if (!data) return '';
	            var pairs = [];
	            for (var name in data) {
	                if (!data.hasOwnProperty(name)) continue;
	                if (typeof data[name] === 'function') continue;
	                var value = data[name].toString();
	                name = encodeURIComponent(name.replace('%20', '+'));
	                value = encodeURIComponent(value.replace('%20', '+'));
	                pairs.push(name + '=' + value);
	            }
	            return pairs.join('&');
	        }
	    }, {
	        key: 'isCORS',
	        value: function isCORS(url) {
	            var urlAnchor = document.createElement('a'),
	                originAnchor = document.createElement('a');
	            urlAnchor.href = url;
	            originAnchor.href = window.location.href;
	            // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
	            urlAnchor.href = urlAnchor.href;
	            return !(originAnchor.protocol + '//' + originAnchor.host) !== urlAnchor.protocol + '//' + urlAnchor.host;
	        }
	    }]);

	    return Utils;
	}();

	exports.default = Utils;

/***/ }
/******/ ]);