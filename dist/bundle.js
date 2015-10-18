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

	var normalize = __webpack_require__(10)
	var icons = __webpack_require__(14)
	var Vue = __webpack_require__(20)
	var appOptions = __webpack_require__(87)

	var components = [
	  'section-about',
	  'section-contact',
	  'section-header',
	  'section-hobbies',
	  'section-jobs',
	  'section-opensource',
	  'section-skills',
	  'section-studies'
	];

	components.forEach(function(c) {
	  Vue.component(c, __webpack_require__(93)("./"+c+'.vue'));
	});

	var app = new Vue(appOptions).$mount('#app')


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./styles.min.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./styles.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "@font-face{font-family:icons8-win10;src:url(" + __webpack_require__(16) + ");src:url(" + __webpack_require__(16) + "?#iefix) format(\"embedded-opentype\"),url(data:application/x-font-woff;charset=utf-8;base64,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),url(" + __webpack_require__(17) + ") format(\"woff\"),url(" + __webpack_require__(18) + ") format(\"truetype\"),url(" + __webpack_require__(19) + "#icons8-win10) format(\"svg\");font-weight:400;font-style:normal}@media screen and (-webkit-min-device-pixel-ratio:0){@font-face{font-family:icons8-win10;src:url(" + __webpack_require__(19) + "#icons8-win10) format(\"svg\")}}[data-icon]:before{content:attr(data-icon)}.icons8-add-shopping-cart:before,.icons8-add-user:before,.icons8-adventures:before,.icons8-advertising:before,.icons8-airport:before,.icons8-align-center:before,.icons8-align-justify:before,.icons8-align-left:before,.icons8-align-right:before,.icons8-alphabetical-sorting-2:before,.icons8-alphabetical-sorting:before,.icons8-amex:before,.icons8-angle-down:before,.icons8-angle-left:before,.icons8-angle-right:before,.icons8-angle-up:before,.icons8-archive:before,.icons8-area-chart:before,.icons8-arrows-long-down:before,.icons8-arrows-long-left:before,.icons8-arrows-long-right:before,.icons8-arrows-long-up:before,.icons8-asterisk:before,.icons8-audio-file:before,.icons8-babys-room:before,.icons8-bank-card:before,.icons8-banknotes:before,.icons8-bar-chart:before,.icons8-barcode:before,.icons8-bed:before,.icons8-binoculars:before,.icons8-bitcoin:before,.icons8-bold:before,.icons8-bookmark:before,.icons8-box:before,.icons8-briefcase:before,.icons8-british-pound:before,.icons8-brush:before,.icons8-buy:before,.icons8-calculator:before,.icons8-camera:before,.icons8-cancel-2:before,.icons8-cancel:before,.icons8-cat-footprint:before,.icons8-checked-2:before,.icons8-checked:before,.icons8-checkmark:before,.icons8-chevron-down-round:before,.icons8-chevron-down:before,.icons8-chevron-left-round:before,.icons8-chevron-left:before,.icons8-chevron-right-round:before,.icons8-chevron-right:before,.icons8-chevron-up-round:before,.icons8-chevron-up:before,.icons8-circle-notch:before,.icons8-circle-thin:before,.icons8-circle:before,.icons8-clipboard:before,.icons8-code-file:before,.icons8-color-dropper:before,.icons8-columns:before,.icons8-comments:before,.icons8-compress:before,.icons8-controller:before,.icons8-copy:before,.icons8-copyright:before,.icons8-create-new:before,.icons8-crop:before,.icons8-cut:before,.icons8-database:before,.icons8-dining-room:before,.icons8-diploma-1:before,.icons8-doctor:before,.icons8-document:before,.icons8-double-left:before,.icons8-double-right:before,.icons8-double-up:before,.icons8-down-arrow:before,.icons8-down-round:before,.icons8-down-squared:before,.icons8-download-2:before,.icons8-download:before,.icons8-electrical:before,.icons8-electricity:before,.icons8-eraser:before,.icons8-euro:before,.icons8-exclamation-mark:before,.icons8-export:before,.icons8-fantasy:before,.icons8-fax:before,.icons8-female:before,.icons8-file:before,.icons8-film:before,.icons8-filter:before,.icons8-finish-flag:before,.icons8-fire-extinguisher:before,.icons8-folder:before,.icons8-football2:before,.icons8-gender-neutral-user:before,.icons8-gender:before,.icons8-genderqueer:before,.icons8-generic-sorting-2:before,.icons8-generic-sorting:before,.icons8-generic-text:before,.icons8-gift:before,.icons8-google-wallet:before,.icons8-gps-device:before,.icons8-grid-2:before,.icons8-grid-3:before,.icons8-grid:before,.icons8-group:before,.icons8-hdd:before,.icons8-header:before,.icons8-home:before,.icons8-hospital-2:before,.icons8-idea:before,.icons8-image-file:before,.icons8-import:before,.icons8-indent:before,.icons8-info:before,.icons8-insert-table:before,.icons8-ipad:before,.icons8-iphone:before,.icons8-italic:before,.icons8-japanese-yen:before,.icons8-key:before,.icons8-keyboard:before,.icons8-last-quarter:before,.icons8-left-arrow:before,.icons8-left-round:before,.icons8-left-squared:before,.icons8-level-down:before,.icons8-level-up:before,.icons8-library:before,.icons8-list:before,.icons8-lock-2:before,.icons8-lock:before,.icons8-male:before,.icons8-mastercard:before,.icons8-minus:before,.icons8-monitor:before,.icons8-moon:before,.icons8-music:before,.icons8-news:before,.icons8-notebook:before,.icons8-numbered-list:before,.icons8-numerical-sorting-12:before,.icons8-numerical-sorting-21:before,.icons8-old-time-camera:before,.icons8-opened-folder:before,.icons8-organization:before,.icons8-outdent:before,.icons8-paragraph:before,.icons8-parallel-tasks:before,.icons8-paste:before,.icons8-paypal:before,.icons8-pdf:before,.icons8-pencil:before,.icons8-phone:before,.icons8-picture:before,.icons8-pie-chart:before,.icons8-pin-3:before,.icons8-plus:before,.icons8-powerpoint:before,.icons8-price-tag:before,.icons8-puzzle:before,.icons8-qr-code:before,.icons8-question-mark:before,.icons8-recycling:before,.icons8-refresh:before,.icons8-remove-user:before,.icons8-resize-diagonal:before,.icons8-resize-four-directions:before,.icons8-resize-horizontal:before,.icons8-resize-vertical:before,.icons8-right-arrow:before,.icons8-right-round:before,.icons8-right-squared:before,.icons8-rotate-left:before,.icons8-rotate-right:before,.icons8-rouble:before,.icons8-rounded-rectangle-filled:before,.icons8-rounded-rectangle:before,.icons8-rupee:before,.icons8-search:before,.icons8-sensor:before,.icons8-services:before,.icons8-settings:before,.icons8-share:before,.icons8-shekel:before,.icons8-shopping-cart:before,.icons8-shutdown:before,.icons8-sort-down:before,.icons8-sort-left:before,.icons8-sort-right:before,.icons8-sort-up:before,.icons8-sort:before,.icons8-spy:before,.icons8-strikethrough:before,.icons8-stripe:before,.icons8-student:before,.icons8-subscript:before,.icons8-superscript:before,.icons8-support:before,.icons8-tags:before,.icons8-tasks:before,.icons8-text-height:before,.icons8-text-width:before,.icons8-ticket:before,.icons8-timeline:before,.icons8-todo-list:before,.icons8-translation:before,.icons8-trash:before,.icons8-trophy:before,.icons8-turkish-lira:before,.icons8-umbrella:before,.icons8-underline:before,.icons8-undo:before,.icons8-unlock-2:before,.icons8-up-arrow:before,.icons8-up-round:before,.icons8-up-squared:before,.icons8-upload-2:before,.icons8-upload:before,.icons8-us-dollar:before,.icons8-user-female:before,.icons8-user-male:before,.icons8-video-call:before,.icons8-video-file:before,.icons8-visa:before,.icons8-won:before,.icons8-word:before,.icons8-xls:before,[data-icon]:before{display:inline-block;font-family:icons8-win10;font-style:normal;font-weight:400;font-variant:normal;line-height:1;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased}.icons8-add-shopping-cart:before{content:\"\\F100\"}.icons8-add-user:before{content:\"\\F101\"}.icons8-adventures:before{content:\"\\F102\"}.icons8-advertising:before{content:\"\\F103\"}.icons8-airport:before{content:\"\\F104\"}.icons8-align-center:before{content:\"\\F105\"}.icons8-align-justify:before{content:\"\\F106\"}.icons8-align-left:before{content:\"\\F107\"}.icons8-align-right:before{content:\"\\F108\"}.icons8-alphabetical-sorting:before{content:\"\\F109\"}.icons8-alphabetical-sorting-2:before{content:\"\\F10A\"}.icons8-amex:before{content:\"\\F10B\"}.icons8-angle-down:before{content:\"\\F10C\"}.icons8-angle-left:before{content:\"\\F10D\"}.icons8-angle-right:before{content:\"\\F10E\"}.icons8-angle-up:before{content:\"\\F10F\"}.icons8-archive:before{content:\"\\F110\"}.icons8-area-chart:before{content:\"\\F111\"}.icons8-arrows-long-down:before{content:\"\\F112\"}.icons8-arrows-long-left:before{content:\"\\F113\"}.icons8-arrows-long-right:before{content:\"\\F114\"}.icons8-arrows-long-up:before{content:\"\\F115\"}.icons8-asterisk:before{content:\"\\F116\"}.icons8-audio-file:before{content:\"\\F117\"}.icons8-babys-room:before{content:\"\\F118\"}.icons8-bank-card:before{content:\"\\F119\"}.icons8-banknotes:before{content:\"\\F11A\"}.icons8-bar-chart:before{content:\"\\F11B\"}.icons8-barcode:before{content:\"\\F11C\"}.icons8-bed:before{content:\"\\F11D\"}.icons8-binoculars:before{content:\"\\F11E\"}.icons8-bitcoin:before{content:\"\\F11F\"}.icons8-bold:before{content:\"\\F120\"}.icons8-bookmark:before{content:\"\\F121\"}.icons8-box:before{content:\"\\F122\"}.icons8-briefcase:before{content:\"\\F123\"}.icons8-british-pound:before{content:\"\\F124\"}.icons8-brush:before{content:\"\\F125\"}.icons8-buy:before{content:\"\\F126\"}.icons8-calculator:before{content:\"\\F127\"}.icons8-camera:before{content:\"\\F128\"}.icons8-cancel:before{content:\"\\F129\"}.icons8-cancel-2:before{content:\"\\F12A\"}.icons8-cat-footprint:before{content:\"\\F12B\"}.icons8-checked:before{content:\"\\F12C\"}.icons8-checked-2:before{content:\"\\F12D\"}.icons8-checkmark:before{content:\"\\F12E\"}.icons8-chevron-down:before{content:\"\\F12F\"}.icons8-chevron-down-round:before{content:\"\\F130\"}.icons8-chevron-left:before{content:\"\\F131\"}.icons8-chevron-left-round:before{content:\"\\F132\"}.icons8-chevron-right:before{content:\"\\F133\"}.icons8-chevron-right-round:before{content:\"\\F134\"}.icons8-chevron-up:before{content:\"\\F135\"}.icons8-chevron-up-round:before{content:\"\\F136\"}.icons8-circle:before{content:\"\\F137\"}.icons8-circle-notch:before{content:\"\\F138\"}.icons8-circle-thin:before{content:\"\\F139\"}.icons8-clipboard:before{content:\"\\F13A\"}.icons8-code-file:before{content:\"\\F13B\"}.icons8-color-dropper:before{content:\"\\F13C\"}.icons8-columns:before{content:\"\\F13D\"}.icons8-comments:before{content:\"\\F13E\"}.icons8-compress:before{content:\"\\F13F\"}.icons8-controller:before{content:\"\\F140\"}.icons8-copy:before{content:\"\\F141\"}.icons8-copyright:before{content:\"\\F142\"}.icons8-create-new:before{content:\"\\F143\"}.icons8-crop:before{content:\"\\F144\"}.icons8-cut:before{content:\"\\F145\"}.icons8-database:before{content:\"\\F146\"}.icons8-dining-room:before{content:\"\\F147\"}.icons8-diploma-1:before{content:\"\\F148\"}.icons8-doctor:before{content:\"\\F149\"}.icons8-document:before{content:\"\\F14A\"}.icons8-double-left:before{content:\"\\F14B\"}.icons8-double-right:before{content:\"\\F14C\"}.icons8-double-up:before{content:\"\\F14D\"}.icons8-down-arrow:before{content:\"\\F14E\"}.icons8-down-round:before{content:\"\\F14F\"}.icons8-down-squared:before{content:\"\\F150\"}.icons8-download:before{content:\"\\F151\"}.icons8-download-2:before{content:\"\\F152\"}.icons8-electrical:before{content:\"\\F153\"}.icons8-electricity:before{content:\"\\F154\"}.icons8-eraser:before{content:\"\\F155\"}.icons8-euro:before{content:\"\\F156\"}.icons8-exclamation-mark:before{content:\"\\F157\"}.icons8-export:before{content:\"\\F158\"}.icons8-fantasy:before{content:\"\\F159\"}.icons8-fax:before{content:\"\\F15A\"}.icons8-female:before{content:\"\\F15B\"}.icons8-file:before{content:\"\\F15C\"}.icons8-film:before{content:\"\\F15D\"}.icons8-filter:before{content:\"\\F15E\"}.icons8-finish-flag:before{content:\"\\F15F\"}.icons8-fire-extinguisher:before{content:\"\\F160\"}.icons8-folder:before{content:\"\\F161\"}.icons8-football2:before{content:\"\\F162\"}.icons8-gender:before{content:\"\\F163\"}.icons8-gender-neutral-user:before{content:\"\\F164\"}.icons8-genderqueer:before{content:\"\\F165\"}.icons8-generic-sorting:before{content:\"\\F166\"}.icons8-generic-sorting-2:before{content:\"\\F167\"}.icons8-generic-text:before{content:\"\\F168\"}.icons8-gift:before{content:\"\\F169\"}.icons8-google-wallet:before{content:\"\\F16A\"}.icons8-gps-device:before{content:\"\\F16B\"}.icons8-grid:before{content:\"\\F16C\"}.icons8-grid-2:before{content:\"\\F16D\"}.icons8-grid-3:before{content:\"\\F16E\"}.icons8-group:before{content:\"\\F16F\"}.icons8-hdd:before{content:\"\\F170\"}.icons8-header:before{content:\"\\F171\"}.icons8-home:before{content:\"\\F172\"}.icons8-hospital-2:before{content:\"\\F173\"}.icons8-idea:before{content:\"\\F174\"}.icons8-image-file:before{content:\"\\F175\"}.icons8-import:before{content:\"\\F176\"}.icons8-indent:before{content:\"\\F177\"}.icons8-info:before{content:\"\\F178\"}.icons8-insert-table:before{content:\"\\F179\"}.icons8-ipad:before{content:\"\\F17A\"}.icons8-iphone:before{content:\"\\F17B\"}.icons8-italic:before{content:\"\\F17C\"}.icons8-japanese-yen:before{content:\"\\F17D\"}.icons8-key:before{content:\"\\F17E\"}.icons8-keyboard:before{content:\"\\F17F\"}.icons8-last-quarter:before{content:\"\\F180\"}.icons8-left-arrow:before{content:\"\\F181\"}.icons8-left-round:before{content:\"\\F182\"}.icons8-left-squared:before{content:\"\\F183\"}.icons8-level-down:before{content:\"\\F184\"}.icons8-level-up:before{content:\"\\F185\"}.icons8-library:before{content:\"\\F186\"}.icons8-list:before{content:\"\\F187\"}.icons8-lock:before{content:\"\\F188\"}.icons8-lock-2:before{content:\"\\F189\"}.icons8-male:before{content:\"\\F18A\"}.icons8-mastercard:before{content:\"\\F18B\"}.icons8-minus:before{content:\"\\F18C\"}.icons8-monitor:before{content:\"\\F18D\"}.icons8-moon:before{content:\"\\F18E\"}.icons8-music:before{content:\"\\F18F\"}.icons8-news:before{content:\"\\F190\"}.icons8-notebook:before{content:\"\\F191\"}.icons8-numbered-list:before{content:\"\\F192\"}.icons8-numerical-sorting-12:before{content:\"\\F193\"}.icons8-numerical-sorting-21:before{content:\"\\F194\"}.icons8-old-time-camera:before{content:\"\\F195\"}.icons8-opened-folder:before{content:\"\\F196\"}.icons8-organization:before{content:\"\\F197\"}.icons8-outdent:before{content:\"\\F198\"}.icons8-paragraph:before{content:\"\\F199\"}.icons8-parallel-tasks:before{content:\"\\F19A\"}.icons8-paste:before{content:\"\\F19B\"}.icons8-paypal:before{content:\"\\F19C\"}.icons8-pdf:before{content:\"\\F19D\"}.icons8-pencil:before{content:\"\\F19E\"}.icons8-phone:before{content:\"\\F19F\"}.icons8-picture:before{content:\"\\F1A0\"}.icons8-pie-chart:before{content:\"\\F1A1\"}.icons8-pin-3:before{content:\"\\F1A2\"}.icons8-plus:before{content:\"\\F1A3\"}.icons8-powerpoint:before{content:\"\\F1A4\"}.icons8-price-tag:before{content:\"\\F1A5\"}.icons8-puzzle:before{content:\"\\F1A6\"}.icons8-qr-code:before{content:\"\\F1A7\"}.icons8-question-mark:before{content:\"\\F1A8\"}.icons8-recycling:before{content:\"\\F1A9\"}.icons8-refresh:before{content:\"\\F1AA\"}.icons8-remove-user:before{content:\"\\F1AB\"}.icons8-resize-diagonal:before{content:\"\\F1AC\"}.icons8-resize-four-directions:before{content:\"\\F1AD\"}.icons8-resize-horizontal:before{content:\"\\F1AE\"}.icons8-resize-vertical:before{content:\"\\F1AF\"}.icons8-right-arrow:before{content:\"\\F1B0\"}.icons8-right-round:before{content:\"\\F1B1\"}.icons8-right-squared:before{content:\"\\F1B2\"}.icons8-rotate-left:before{content:\"\\F1B3\"}.icons8-rotate-right:before{content:\"\\F1B4\"}.icons8-rouble:before{content:\"\\F1B5\"}.icons8-rounded-rectangle:before{content:\"\\F1B6\"}.icons8-rounded-rectangle-filled:before{content:\"\\F1B7\"}.icons8-rupee:before{content:\"\\F1B8\"}.icons8-search:before{content:\"\\F1B9\"}.icons8-sensor:before{content:\"\\F1BA\"}.icons8-services:before{content:\"\\F1BB\"}.icons8-settings:before{content:\"\\F1BC\"}.icons8-share:before{content:\"\\F1BD\"}.icons8-shekel:before{content:\"\\F1BE\"}.icons8-shopping-cart:before{content:\"\\F1BF\"}.icons8-shutdown:before{content:\"\\F1C0\"}.icons8-sort:before{content:\"\\F1C1\"}.icons8-sort-down:before{content:\"\\F1C2\"}.icons8-sort-left:before{content:\"\\F1C3\"}.icons8-sort-right:before{content:\"\\F1C4\"}.icons8-sort-up:before{content:\"\\F1C5\"}.icons8-spy:before{content:\"\\F1C6\"}.icons8-strikethrough:before{content:\"\\F1C7\"}.icons8-stripe:before{content:\"\\F1C8\"}.icons8-student:before{content:\"\\F1C9\"}.icons8-subscript:before{content:\"\\F1CA\"}.icons8-superscript:before{content:\"\\F1CB\"}.icons8-support:before{content:\"\\F1CC\"}.icons8-tags:before{content:\"\\F1CD\"}.icons8-tasks:before{content:\"\\F1CE\"}.icons8-text-height:before{content:\"\\F1CF\"}.icons8-text-width:before{content:\"\\F1D0\"}.icons8-ticket:before{content:\"\\F1D1\"}.icons8-timeline:before{content:\"\\F1D2\"}.icons8-todo-list:before{content:\"\\F1D3\"}.icons8-translation:before{content:\"\\F1D4\"}.icons8-trash:before{content:\"\\F1D5\"}.icons8-trophy:before{content:\"\\F1D6\"}.icons8-turkish-lira:before{content:\"\\F1D7\"}.icons8-umbrella:before{content:\"\\F1D8\"}.icons8-underline:before{content:\"\\F1D9\"}.icons8-undo:before{content:\"\\F1DA\"}.icons8-unlock-2:before{content:\"\\F1DB\"}.icons8-up-arrow:before{content:\"\\F1DC\"}.icons8-up-round:before{content:\"\\F1DD\"}.icons8-up-squared:before{content:\"\\F1DE\"}.icons8-upload:before{content:\"\\F1DF\"}.icons8-upload-2:before{content:\"\\F1E0\"}.icons8-us-dollar:before{content:\"\\F1E1\"}.icons8-user-female:before{content:\"\\F1E2\"}.icons8-user-male:before{content:\"\\F1E3\"}.icons8-video-call:before{content:\"\\F1E4\"}.icons8-video-file:before{content:\"\\F1E5\"}.icons8-visa:before{content:\"\\F1E6\"}.icons8-won:before{content:\"\\F1E7\"}.icons8-word:before{content:\"\\F1E8\"}.icons8-xls:before{content:\"\\F1E9\"}", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/assets/682f3e4a727e968749a1db64ad623667.eot"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/assets/b9e4d20f2520dbd91e4f894c43e9efd5.woff"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/assets/580902724a539c12f88bd09ab95d4aec.ttf"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/assets/8f9a0a97de12088dc01bd73d4734ed6f.svg"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var extend = _.extend

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue (options) {
	  this._init(options)
	}

	/**
	 * Mixin global API
	 */

	extend(Vue, __webpack_require__(30))

	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */

	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(46),
	  elementDirectives: __webpack_require__(68),
	  filters: __webpack_require__(71),
	  transitions: {},
	  components: {},
	  partials: {}
	}

	/**
	 * Build up the prototype
	 */

	var p = Vue.prototype

	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */

	Object.defineProperty(p, '$data', {
	  get: function () {
	    return this._data
	  },
	  set: function (newData) {
	    if (newData !== this._data) {
	      this._setData(newData)
	    }
	  }
	})

	/**
	 * Mixin internal instance methods
	 */

	extend(p, __webpack_require__(73))
	extend(p, __webpack_require__(74))
	extend(p, __webpack_require__(75))
	extend(p, __webpack_require__(79))
	extend(p, __webpack_require__(81))

	/**
	 * Mixin public API methods
	 */

	extend(p, __webpack_require__(82))
	extend(p, __webpack_require__(83))
	extend(p, __webpack_require__(84))
	extend(p, __webpack_require__(85))
	extend(p, __webpack_require__(86))

	module.exports = _.Vue = Vue


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(22)
	var extend = lang.extend

	extend(exports, lang)
	extend(exports, __webpack_require__(23))
	extend(exports, __webpack_require__(24))
	extend(exports, __webpack_require__(27))
	extend(exports, __webpack_require__(28))
	extend(exports, __webpack_require__(29))


/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	exports.toString = function (value) {
	  return value == null
	    ? ''
	    : value.toString()
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	exports.toNumber = function (value) {
	  if (typeof value !== 'string') {
	    return value
	  } else {
	    var parsed = Number(value)
	    return isNaN(parsed)
	      ? value
	      : parsed
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	exports.toBoolean = function (value) {
	  return value === 'true'
	    ? true
	    : value === 'false'
	      ? false
	      : value
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0)
	  var b = str.charCodeAt(str.length - 1)
	  return a === b && (a === 0x22 || a === 0x27)
	    ? str.slice(1, -1)
	    : false
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	exports.camelize = function (str) {
	  return str.replace(/-(\w)/g, toUpper)
	}

	function toUpper (_, c) {
	  return c ? c.toUpperCase() : ''
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	exports.hyphenate = function (str) {
	  return str
	    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
	    .toLowerCase()
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper)
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	exports.toArray = function (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	exports.extend = function (to, from) {
	  for (var key in from) {
	    to[key] = from[key]
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	exports.isObject = function (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString
	var OBJECT_STRING = '[object Object]'
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	exports.isArray = Array.isArray

	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result
	  var later = function () {
	    var last = Date.now() - timestamp
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last)
	    } else {
	      timeout = null
	      result = func.apply(context, args)
	      if (!timeout) context = args = null
	    }
	  }
	  return function () {
	    context = this
	    args = arguments
	    timestamp = Date.now()
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    return result
	  }
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	exports.indexOf = function (arr, obj) {
	  var i = arr.length
	  while (i--) {
	    if (arr[i] === obj) return i
	  }
	  return -1
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	exports.cancellable = function (fn) {
	  var cb = function () {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments)
	    }
	  }
	  cb.cancel = function () {
	    cb.cancelled = true
	  }
	  return cb
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	exports.looseEqual = function (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    exports.isObject(a) && exports.isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	// can we use __proto__?
	exports.hasProto = '__proto__' in {}

	// Browser environment sniffing
	var inBrowser = exports.inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'

	exports.isIE9 =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0

	exports.isAndroid =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('android') > 0

	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans =
	    window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  var isWebkitAnim =
	    window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  exports.transitionProp = isWebkitTrans
	    ? 'WebkitTransition'
	    : 'transition'
	  exports.transitionEndEvent = isWebkitTrans
	    ? 'webkitTransitionEnd'
	    : 'transitionend'
	  exports.animationProp = isWebkitAnim
	    ? 'WebkitAnimation'
	    : 'animation'
	  exports.animationEndEvent = isWebkitAnim
	    ? 'webkitAnimationEnd'
	    : 'animationend'
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	exports.nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc
	  function nextTickHandler () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1
	    var observer = new MutationObserver(nextTickHandler)
	    var textNode = document.createTextNode(counter)
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = counter
	    }
	  } else {
	    timerFunc = setTimeout
	  }
	  return function (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) return
	    pending = true
	    timerFunc(nextTickHandler, 0)
	  }
	})()


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var config = __webpack_require__(26)

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Cannot find element: ' + selector
	      )
	    }
	  }
	  return el
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed byy doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	exports.inDoc = function (node) {
	  var doc = document.documentElement
	  var parent = node && node.parentNode
	  return doc === node ||
	    doc === parent ||
	    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
	}

	/**
	 * Extract an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */

	exports.attr = function (node, attr) {
	  attr = config.prefix + attr
	  var val = node.getAttribute(attr)
	  if (val !== null) {
	    node.removeAttribute(attr)
	  }
	  return val
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target)
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling)
	  } else {
	    target.parentNode.appendChild(el)
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	exports.remove = function (el) {
	  el.parentNode.removeChild(el)
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild)
	  } else {
	    target.appendChild(el)
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	exports.replace = function (target, el) {
	  var parent = target.parentNode
	  if (parent) {
	    parent.replaceChild(el, target)
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb)
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb)
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */

	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */

	exports.extractContent = function (el, asFragment) {
	  var child
	  var rawContent
	  /* istanbul ignore if */
	  if (
	    exports.isTemplate(el) &&
	    el.content instanceof DocumentFragment
	  ) {
	    el = el.content
	  }
	  if (el.hasChildNodes()) {
	    exports.trimNode(el)
	    rawContent = asFragment
	      ? document.createDocumentFragment()
	      : document.createElement('div')
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	    /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child)
	    }
	  }
	  return rawContent
	}

	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */

	exports.trimNode = function (node) {
	  trim(node, node.firstChild)
	  trim(node, node.lastChild)
	}

	function trim (parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node)
	  }
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	exports.isTemplate = function (el) {
	  return el.tagName &&
	    el.tagName.toLowerCase() === 'template'
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - component
	 * - repeat
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	exports.createAnchor = function (content, persist) {
	  return config.debug
	    ? document.createComment(content)
	    : document.createTextNode(persist ? ' ' : '')
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {

	  /**
	   * The prefix to look for when parsing directives.
	   *
	   * @type {String}
	   */

	  prefix: 'v-',

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Strict mode.
	   * Disables asset lookup in the view parent chain.
	   */

	  strict: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether allow observer to alter data objects'
	   * __proto__.
	   *
	   * @type {Boolean}
	   */

	  proto: true,

	  /**
	   * Whether to parse mustache tags in templates.
	   *
	   * @type {Boolean}
	   */

	  interpolate: true,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: [
	    'component',
	    'directive',
	    'elementDirective',
	    'filter',
	    'transition',
	    'partial'
	  ],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}

	/**
	 * Interpolation delimiters.
	 * We need to mark the changed flag so that the text parser
	 * knows it needs to recompile the regex.
	 *
	 * @type {Array<String>}
	 */

	var delimiters = ['{{', '}}']
	Object.defineProperty(module.exports, 'delimiters', {
	  get: function () {
	    return delimiters
	  },
	  set: function (val) {
	    delimiters = val
	    this._delimitersChanged = true
	  }
	})


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var config = __webpack_require__(26)
	var extend = _.extend

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null)

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!to.hasOwnProperty(key)) {
	      to.$add(key, fromVal)
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.'
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'The "el" option should be a function ' +
	      'that returns a per-instance value in component ' +
	      'definitions.'
	    )
	    return
	  }
	  var ret = childVal || parentVal
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function'
	    ? ret.call(vm)
	    : ret
	}

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.created =
	strats.ready =
	strats.attached =
	strats.detached =
	strats.beforeCompile =
	strats.compiled =
	strats.beforeDestroy =
	strats.destroyed =
	strats.props = function (parentVal, childVal) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : _.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	/**
	 * 0.11 deprecation warning
	 */

	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && _.warn(
	    '"paramAttributes" option has been deprecated in 0.12. ' +
	    'Use "props" instead.'
	  )
	}

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal)
	  return childVal
	    ? extend(res, guardArrayAssets(childVal))
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets
	})

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch =
	strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !_.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}

	/**
	 * Other object hashes.
	 */

	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(parentVal)
	  extend(ret, childVal)
	  return ret
	}

	/**
	 * Default strategy.
	 */

	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents (options) {
	  if (options.components) {
	    var components = options.components =
	      guardArrayAssets(options.components)
	    var def
	    var ids = Object.keys(components)
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i]
	      if (_.commonTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Do not use built-in HTML elements as component ' +
	          'id: ' + key
	        )
	        continue
	      }
	      def = components[key]
	      if (_.isPlainObject(def)) {
	        def.id = def.id || key
	        components[key] = def._Ctor || (def._Ctor = _.Vue.extend(def))
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps (options) {
	  var props = options.props
	  if (_.isPlainObject(props)) {
	    options.props = Object.keys(props).map(function (key) {
	      var val = props[key]
	      if (!_.isPlainObject(val)) {
	        val = { type: val }
	      }
	      val.name = key
	      return val
	    })
	  } else if (_.isArray(props)) {
	    options.props = props.map(function (prop) {
	      return typeof prop === 'string'
	        ? { name: prop }
	        : prop
	    })
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets (assets) {
	  if (_.isArray(assets)) {
	    var res = {}
	    var i = assets.length
	    var asset
	    while (i--) {
	      asset = assets[i]
	      var id = asset.id || (asset.options && asset.options.id)
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Array-syntax assets must provide an id field.'
	        )
	      } else {
	        res[id] = asset
	      }
	    }
	    return res
	  }
	  return assets
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	exports.mergeOptions = function merge (parent, child, vm) {
	  guardComponents(child)
	  guardProps(child)
	  var options = {}
	  var key
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm)
	    }
	  }
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!(parent.hasOwnProperty(key))) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */

	exports.resolveAsset = function resolve (options, type, id) {
	  var camelizedId = _.camelize(id)
	  var pascalizedId = camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)
	  var assets = options[type]
	  var asset = assets[id] || assets[camelizedId] || assets[pascalizedId]
	  while (
	    !asset &&
	    options._parent &&
	    (!config.strict || options._repeat)
	  ) {
	    options = (options._context || options._parent).$options
	    assets = options[type]
	    asset = assets[id] || assets[camelizedId] || assets[pascalizedId]
	  }
	  return asset
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {String|undefined}
	 */

	exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (tag === 'component') {
	    // dynamic syntax
	    var exp = el.getAttribute('is')
	    el.removeAttribute('is')
	    return exp
	  } else if (
	    !exports.commonTagRE.test(tag) &&
	    _.resolveAsset(options, 'components', tag)
	  ) {
	    return tag
	  /* eslint-disable no-cond-assign */
	  } else if (tag = _.attr(el, 'component')) {
	  /* eslint-enable no-cond-assign */
	    return tag
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 * The vm may have inherit:true so we need to make sure
	 * we don't accidentally overwrite parent value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path
	    if (key in vm) {
	      _.define(vm, key, value, true)
	    } else {
	      vm[key] = value
	    }
	    vm._data[key] = value
	  }
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */

	exports.assertProp = function (prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true
	  }
	  var options = prop.options
	  var type = options.type
	  var valid = true
	  var expectedType
	  if (type) {
	    if (type === String) {
	      expectedType = 'string'
	      valid = typeof value === expectedType
	    } else if (type === Number) {
	      expectedType = 'number'
	      valid = typeof value === 'number'
	    } else if (type === Boolean) {
	      expectedType = 'boolean'
	      valid = typeof value === 'boolean'
	    } else if (type === Function) {
	      expectedType = 'function'
	      valid = typeof value === 'function'
	    } else if (type === Object) {
	      expectedType = 'object'
	      valid = _.isPlainObject(value)
	    } else if (type === Array) {
	      expectedType = 'array'
	      valid = _.isArray(value)
	    } else {
	      valid = value instanceof type
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid prop: type check failed for ' +
	      prop.path + '="' + prop.raw + '".' +
	      ' Expected ' + formatType(expectedType) +
	      ', got ' + formatValue(value) + '.'
	    )
	    return false
	  }
	  var validator = options.validator
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid prop: custom validator check failed for ' +
	        prop.path + '="' + prop.raw + '"'
	      )
	      return false
	    }
	  }
	  return true
	}

	function formatType (val) {
	  return val
	    ? val.charAt(0).toUpperCase() + val.slice(1)
	    : 'custom type'
	}

	function formatValue (val) {
	  return Object.prototype.toString.call(val).slice(8, -1)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Enable debug utilities.
	 */

	if (process.env.NODE_ENV !== 'production') {

	  var config = __webpack_require__(26)
	  var hasConsole = typeof console !== 'undefined'

	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */

	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg)
	    }
	  }

	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */

	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg)
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack)
	      }
	    }
	  }

	  /**
	   * Assert asset exists
	   */

	  exports.assertAsset = function (val, type, id) {
	    /* istanbul ignore if */
	    if (type === 'directive') {
	      if (id === 'with') {
	        exports.warn(
	          'v-with has been deprecated in ^0.12.0. ' +
	          'Use props instead.'
	        )
	        return
	      }
	      if (id === 'events') {
	        exports.warn(
	          'v-events has been deprecated in ^0.12.0. ' +
	          'Pass down methods as callback props instead.'
	        )
	        return
	      }
	    }
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id)
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var config = __webpack_require__(26)

	/**
	 * Expose useful internals
	 */

	exports.util = _
	exports.config = config
	exports.nextTick = _.nextTick
	exports.compiler = __webpack_require__(31)

	exports.parsers = {
	  path: __webpack_require__(41),
	  text: __webpack_require__(34),
	  template: __webpack_require__(43),
	  directive: __webpack_require__(36),
	  expression: __webpack_require__(40)
	}

	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */

	exports.cid = 0
	var cid = 1

	/**
	 * Class inheritance
	 *
	 * @param {Object} extendOptions
	 */

	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {}
	  var Super = this
	  var Sub = createClass(
	    extendOptions.name ||
	    Super.options.name ||
	    'VueComponent'
	  )
	  Sub.prototype = Object.create(Super.prototype)
	  Sub.prototype.constructor = Sub
	  Sub.cid = cid++
	  Sub.options = _.mergeOptions(
	    Super.options,
	    extendOptions
	  )
	  Sub['super'] = Super
	  // allow further extension
	  Sub.extend = Super.extend
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type]
	  })
	  return Sub
	}

	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */

	function createClass (name) {
	  return new Function(
	    'return function ' + _.classify(name) +
	    ' (options) { this._init(options) }'
	  )()
	}

	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */

	exports.use = function (plugin) {
	  // additional parameters
	  var args = _.toArray(arguments, 1)
	  args.unshift(this)
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args)
	  } else {
	    plugin.apply(null, args)
	  }
	  return this
	}

	/**
	 * Apply a global mixin by merging it into the default
	 * options.
	 */

	exports.mixin = function (mixin) {
	  var Vue = _.Vue
	  Vue.options = _.mergeOptions(Vue.options, mixin)
	}

	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */

	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id]
	    } else {
	      if (
	        type === 'component' &&
	        _.isPlainObject(definition)
	      ) {
	        definition.name = id
	        definition = _.Vue.extend(definition)
	      }
	      this.options[type + 's'][id] = definition
	    }
	  }
	})


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	_.extend(exports, __webpack_require__(32))
	_.extend(exports, __webpack_require__(45))


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var compileProps = __webpack_require__(33)
	var config = __webpack_require__(26)
	var textParser = __webpack_require__(34)
	var dirParser = __webpack_require__(36)
	var templateParser = __webpack_require__(43)
	var resolveAsset = _.resolveAsset
	var componentDef = __webpack_require__(44)

	// terminal directives
	var terminalDirectives = [
	  'repeat',
	  'if'
	]

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	exports.compile = function (el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent
	    ? compileNode(el, options)
	    : null
	  // link function for the childNodes
	  var childLinkFn =
	    !(nodeLinkFn && nodeLinkFn.terminal) &&
	    el.tagName !== 'SCRIPT' &&
	    el.hasChildNodes()
	      ? compileNodeList(el.childNodes, options)
	      : null

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn (vm, el, host) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes)
	    // link
	    var dirs = linkAndCapture(function () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host)
	      if (childLinkFn) childLinkFn(vm, childNodes, host)
	    }, vm)
	    return makeUnlinkFn(vm, dirs)
	  }
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture (linker, vm) {
	  var originalDirCount = vm._directives.length
	  linker()
	  return vm._directives.slice(originalDirCount)
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn (vm, dirs, context, contextDirs) {
	  return function unlink (destroying) {
	    teardownDirs(vm, dirs, destroying)
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs)
	    }
	  }
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs (vm, dirs, destroying) {
	  var i = dirs.length
	  while (i--) {
	    dirs[i]._teardown()
	    if (!destroying) {
	      vm._directives.$remove(dirs[i])
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */

	exports.compileAndLinkProps = function (vm, el, props) {
	  var propsLinkFn = compileProps(el, props)
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, null)
	  }, vm)
	  return makeUnlinkFn(vm, propDirs)
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */

	exports.compileRoot = function (el, options) {
	  var containerAttrs = options._containerAttrs
	  var replacerAttrs = options._replacerAttrs
	  var contextLinkFn, replacerLinkFn

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs) {
	        contextLinkFn = compileDirectives(containerAttrs, options)
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options)
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options)
	    }
	  }

	  return function rootLinkFn (vm, el) {
	    // link context scope dirs
	    var context = vm._context
	    var contextDirs
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el)
	      }, context)
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el)
	    }, vm)

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
	  }
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode (node, options) {
	  var type = node.nodeType
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options)
	  } else if (type === 3 && config.interpolate && node.data.trim()) {
	    return compileTextNode(node, options)
	  } else {
	    return null
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement (el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as a v-attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    if (textParser.parse(el.value)) {
	      el.setAttribute('value', el.value)
	    }
	  }
	  var linkFn
	  var hasAttrs = el.hasAttributes()
	  // check terminal directives (repeat & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options)
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options)
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options)
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options)
	  }
	  return linkFn
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode (node, options) {
	  var tokens = textParser.parse(node.data)
	  if (!tokens) {
	    return null
	  }
	  var frag = document.createDocumentFragment()
	  var el, token
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i]
	    el = token.tag
	      ? processTextToken(token, options)
	      : document.createTextNode(token.value)
	    frag.appendChild(el)
	  }
	  return makeTextNodeLinkFn(tokens, frag, options)
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken (token, options) {
	  var el
	  if (token.oneTime) {
	    el = document.createTextNode(token.value)
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html')
	      setTokenType('html')
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ')
	      setTokenType('text')
	    }
	  }
	  function setTokenType (type) {
	    token.type = type
	    token.def = resolveAsset(options, 'directives', type)
	    token.descriptor = dirParser.parse(token.value)[0]
	  }
	  return el
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn (tokens, frag) {
	  return function textNodeLinkFn (vm, el) {
	    var fragClone = frag.cloneNode(true)
	    var childNodes = _.toArray(fragClone.childNodes)
	    var token, value, node
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i]
	      value = token.value
	      if (token.tag) {
	        node = childNodes[i]
	        if (token.oneTime) {
	          value = vm.$eval(value)
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true))
	          } else {
	            node.data = value
	          }
	        } else {
	          vm._bindDir(token.type, node,
	                      token.descriptor, token.def)
	        }
	      }
	    }
	    _.replace(el, fragClone)
	  }
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList (nodeList, options) {
	  var linkFns = []
	  var nodeLinkFn, childLinkFn, node
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i]
	    nodeLinkFn = compileNode(node, options)
	    childLinkFn =
	      !(nodeLinkFn && nodeLinkFn.terminal) &&
	      node.tagName !== 'SCRIPT' &&
	      node.hasChildNodes()
	        ? compileNodeList(node.childNodes, options)
	        : null
	    linkFns.push(nodeLinkFn, childLinkFn)
	  }
	  return linkFns.length
	    ? makeChildLinkFn(linkFns)
	    : null
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn (linkFns) {
	  return function childLinkFn (vm, nodes, host) {
	    var node, nodeLinkFn, childrenLinkFn
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n]
	      nodeLinkFn = linkFns[i++]
	      childrenLinkFn = linkFns[i++]
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes)
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host)
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host)
	      }
	    }
	  }
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (_.commonTagRE.test(tag)) return
	  var def = resolveAsset(options, 'elementDirectives', tag)
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def)
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Boolean} hasAttrs
	 * @return {Function|undefined}
	 */

	function checkComponent (el, options, hasAttrs) {
	  var componentId = _.checkComponent(el, options, hasAttrs)
	  if (componentId) {
	    var componentLinkFn = function (vm, el, host) {
	      vm._bindDir('component', el, {
	        expression: componentId
	      }, componentDef, host)
	    }
	    componentLinkFn.terminal = true
	    return componentLinkFn
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives (el, options) {
	  if (_.attr(el, 'pre') !== null) {
	    return skip
	  }
	  var value, dirName
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i]
	    if ((value = _.attr(el, dirName)) !== null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options)
	    }
	  }
	}

	function skip () {}
	skip.terminal = true

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
	  var descriptor = dirParser.parse(value)[0]
	  // no need to call resolveAsset since terminal directives
	  // are always internal
	  def = def || options.directives[dirName]
	  var fn = function terminalNodeLinkFn (vm, el, host) {
	    vm._bindDir(dirName, el, descriptor, def, host)
	  }
	  fn.terminal = true
	  return fn
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives (attrs, options) {
	  var i = attrs.length
	  var dirs = []
	  var attr, name, value, dir, dirName, dirDef
	  while (i--) {
	    attr = attrs[i]
	    name = attr.name
	    value = attr.value
	    if (name.indexOf(config.prefix) === 0) {
	      dirName = name.slice(config.prefix.length)
	      dirDef = resolveAsset(options, 'directives', dirName)
	      if (process.env.NODE_ENV !== 'production') {
	        _.assertAsset(dirDef, 'directive', dirName)
	      }
	      if (dirDef) {
	        dirs.push({
	          name: dirName,
	          descriptors: dirParser.parse(value),
	          def: dirDef
	        })
	      }
	    } else if (config.interpolate) {
	      dir = collectAttrDirective(name, value, options)
	      if (dir) {
	        dirs.push(dir)
	      }
	    }
	  }
	  // sort by priority, LOW to HIGH
	  if (dirs.length) {
	    dirs.sort(directiveComparator)
	    return makeNodeLinkFn(dirs)
	  }
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn (directives) {
	  return function nodeLinkFn (vm, el, host) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length
	    var dir, j, k
	    while (i--) {
	      dir = directives[i]
	      if (dir._link) {
	        // custom link fn
	        dir._link(vm, el)
	      } else {
	        k = dir.descriptors.length
	        for (j = 0; j < k; j++) {
	          vm._bindDir(dir.name, el,
	            dir.descriptors[j], dir.def, host)
	        }
	      }
	    }
	  }
	}

	/**
	 * Check an attribute for potential dynamic bindings,
	 * and return a directive object.
	 *
	 * Special case: class interpolations are translated into
	 * v-class instead v-attr, so that it can work with user
	 * provided v-class bindings.
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Object}
	 */

	function collectAttrDirective (name, value, options) {
	  var tokens = textParser.parse(value)
	  var isClass = name === 'class'
	  if (tokens) {
	    var dirName = isClass ? 'class' : 'attr'
	    var def = options.directives[dirName]
	    var i = tokens.length
	    var allOneTime = true
	    while (i--) {
	      var token = tokens[i]
	      if (token.tag && !token.oneTime) {
	        allOneTime = false
	      }
	    }
	    var linker
	    if (allOneTime) {
	      linker = function (vm, el) {
	        el.setAttribute(name, vm.$interpolate(value))
	      }
	    } else {
	      linker = function (vm, el) {
	        var exp = textParser.tokensToExp(tokens, vm)
	        var desc = isClass
	          ? dirParser.parse(exp)[0]
	          : dirParser.parse(name + ':' + exp)[0]
	        if (isClass) {
	          desc._rawClass = value
	        }
	        vm._bindDir(dirName, el, desc, def)
	      }
	    }
	    return {
	      def: def,
	      _link: linker
	    }
	  }
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator (a, b) {
	  a = a.def.priority || 0
	  b = b.def.priority || 0
	  return a > b ? 1 : -1
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var textParser = __webpack_require__(34)
	var propDef = __webpack_require__(37)
	var propBindingModes = __webpack_require__(26)._propBindingModes

	// regexes
	var identRE = __webpack_require__(41).identRE
	var dataAttrRE = /^data-/
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
	var literalValueRE = /^(true|false)$|^\d.*/

	/**
	 * Compile param attributes on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */

	module.exports = function compileProps (el, propOptions) {
	  var props = []
	  var i = propOptions.length
	  var options, name, attr, value, path, prop, literal, single
	  while (i--) {
	    options = propOptions[i]
	    name = options.name
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name.replace(dataAttrRE, ''))
	    if (!identRE.test(path)) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid prop key: "' + name + '". Prop keys ' +
	        'must be valid identifiers.'
	      )
	      continue
	    }
	    attr = _.hyphenate(name)
	    value = el.getAttribute(attr)
	    if (value === null) {
	      attr = 'data-' + attr
	      value = el.getAttribute(attr)
	    }
	    // create a prop descriptor
	    prop = {
	      name: name,
	      raw: value,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY
	    }
	    if (value !== null) {
	      // important so that this doesn't get compiled
	      // again as a normal attribute binding
	      el.removeAttribute(attr)
	      var tokens = textParser.parse(value)
	      if (tokens) {
	        prop.dynamic = true
	        prop.parentPath = textParser.tokensToExp(tokens)
	        // check prop binding type.
	        single = tokens.length === 1
	        literal = literalValueRE.test(prop.parentPath)
	        // one time: {{* prop}}
	        if (literal || (single && tokens[0].oneTime)) {
	          prop.mode = propBindingModes.ONE_TIME
	        } else if (
	          !literal &&
	          (single && tokens[0].twoWay)
	        ) {
	          if (settablePathRE.test(prop.parentPath)) {
	            prop.mode = propBindingModes.TWO_WAY
	          } else {
	            process.env.NODE_ENV !== 'production' && _.warn(
	              'Cannot bind two-way prop with non-settable ' +
	              'parent path: ' + prop.parentPath
	            )
	          }
	        }
	        if (
	          process.env.NODE_ENV !== 'production' &&
	          options.twoWay &&
	          prop.mode !== propBindingModes.TWO_WAY
	        ) {
	          _.warn(
	            'Prop "' + name + '" expects a two-way binding type.'
	          )
	        }
	      }
	    } else if (options && options.required) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Missing required prop: ' + name
	      )
	    }
	    props.push(prop)
	  }
	  return makePropsLinkFn(props)
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn (props) {
	  return function propsLinkFn (vm, el) {
	    // store resolved props info
	    vm._props = {}
	    var i = props.length
	    var prop, path, options, value
	    while (i--) {
	      prop = props[i]
	      path = prop.path
	      vm._props[path] = prop
	      options = prop.options
	      if (prop.raw === null) {
	        // initialize absent prop
	        _.initProp(vm, prop, getDefault(options))
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = vm._context.$get(prop.parentPath)
	            _.initProp(vm, prop, value)
	          } else {
	            // dynamic binding
	            vm._bindDir('prop', el, prop, propDef)
	          }
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'Cannot bind dynamic prop on a root instance' +
	            ' with no parent: ' + prop.name + '="' +
	            prop.raw + '"'
	          )
	        }
	      } else {
	        // literal, cast it and just set once
	        var raw = prop.raw
	        value = options.type === Boolean && raw === ''
	          ? true
	          // do not cast emptry string.
	          // _.toNumber casts empty string to 0.
	          : raw.trim()
	            ? _.toBoolean(_.toNumber(raw))
	            : raw
	        _.initProp(vm, prop, value)
	      }
	    }
	  }
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Object} options
	 * @return {*}
	 */

	function getDefault (options) {
	  // no default, return undefined
	  if (!options.hasOwnProperty('default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean
	      ? false
	      : undefined
	  }
	  var def = options.default
	  // warn against non-factory defaults for Object & Array
	  if (_.isObject(def)) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Object/Array as default prop values will be shared ' +
	      'across multiple instances. Use a factory function ' +
	      'to return the default value instead.'
	    )
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function
	    ? def()
	    : def
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(35)
	var config = __webpack_require__(26)
	var dirParser = __webpack_require__(36)
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
	var cache, tagRE, htmlRE, firstChar, lastChar

	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex (str) {
	  return str.replace(regexEscapeRE, '\\$&')
	}

	/**
	 * Compile the interpolation tag regex.
	 *
	 * @return {RegExp}
	 */

	function compileRegex () {
	  config._delimitersChanged = false
	  var open = config.delimiters[0]
	  var close = config.delimiters[1]
	  firstChar = open.charAt(0)
	  lastChar = close.charAt(close.length - 1)
	  var firstCharRE = escapeRegex(firstChar)
	  var lastCharRE = escapeRegex(lastChar)
	  var openRE = escapeRegex(open)
	  var closeRE = escapeRegex(close)
	  tagRE = new RegExp(
	    firstCharRE + '?' + openRE +
	    '(.+?)' +
	    closeRE + lastCharRE + '?',
	    'g'
	  )
	  htmlRE = new RegExp(
	    '^' + firstCharRE + openRE +
	    '.*' +
	    closeRE + lastCharRE + '$'
	  )
	  // reset cache
	  cache = new Cache(1000)
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	exports.parse = function (text) {
	  if (config._delimitersChanged) {
	    compileRegex()
	  }
	  var hit = cache.get(text)
	  if (hit) {
	    return hit
	  }
	  text = text.replace(/\n/g, '')
	  if (!tagRE.test(text)) {
	    return null
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index, value, first, oneTime, twoWay
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	  /* eslint-enable no-cond-assign */
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      })
	    }
	    // tag token
	    first = match[1].charCodeAt(0)
	    oneTime = first === 42 // *
	    twoWay = first === 64  // @
	    value = oneTime || twoWay
	      ? match[1].slice(1)
	      : match[1]
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: htmlRE.test(match[0]),
	      oneTime: oneTime,
	      twoWay: twoWay
	    })
	    lastIndex = index + match[0].length
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    })
	  }
	  cache.put(text, tokens)
	  return tokens
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	exports.tokensToExp = function (tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm)
	    }).join('+')
	  } else {
	    return formatToken(tokens[0], vm, true)
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} single
	 * @return {String}
	 */

	function formatToken (token, vm, single) {
	  return token.tag
	    ? vm && token.oneTime
	      ? '"' + vm.$eval(token.value) + '"'
	      : inlineFilters(token.value, single)
	    : '"' + token.value + '"'
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/
	function inlineFilters (exp, single) {
	  if (!filterRE.test(exp)) {
	    return single
	      ? exp
	      : '(' + exp + ')'
	  } else {
	    var dir = dirParser.parse(exp)[0]
	    if (!dir.filters) {
	      return '(' + exp + ')'
	    } else {
	      return 'this._applyFilters(' +
	        dir.expression + // value
	        ',null,' +       // oldValue (null for read)
	        JSON.stringify(dir.filters) + // filter descriptors
	        ',false)'        // write?
	    }
	  }
	}


/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */

	function Cache (limit) {
	  this.size = 0
	  this.limit = limit
	  this.head = this.tail = undefined
	  this._keymap = Object.create(null)
	}

	var p = Cache.prototype

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  }
	  this._keymap[key] = entry
	  if (this.tail) {
	    this.tail.newer = entry
	    entry.older = this.tail
	  } else {
	    this.head = entry
	  }
	  this.tail = entry
	  if (this.size === this.limit) {
	    return this.shift()
	  } else {
	    this.size++
	  }
	}

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head
	  if (entry) {
	    this.head = this.head.newer
	    this.head.older = undefined
	    entry.newer = entry.older = undefined
	    this._keymap[entry.key] = undefined
	  }
	  return entry
	}

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key]
	  if (entry === undefined) return
	  if (entry === this.tail) {
	    return returnEntry
	      ? entry
	      : entry.value
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer
	    }
	    entry.newer.older = entry.older // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer // C. --> E
	  }
	  entry.newer = undefined // D --x
	  entry.older = this.tail // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry // E. <-- D
	  }
	  this.tail = entry
	  return returnEntry
	    ? entry
	    : entry.value
	}

	module.exports = Cache


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var Cache = __webpack_require__(35)
	var cache = new Cache(1000)
	var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g
	var reservedArgRE = /^in$|^-?\d+/

	/**
	 * Parser state
	 */

	var str
	var c, i, l
	var inSingle
	var inDouble
	var curly
	var square
	var paren
	var begin
	var argIndex
	var dirs
	var dir
	var lastFilterIndex
	var arg

	/**
	 * Push a directive object into the result Array
	 */

	function pushDir () {
	  dir.raw = str.slice(begin, i).trim()
	  if (dir.expression === undefined) {
	    dir.expression = str.slice(argIndex, i).trim()
	  } else if (lastFilterIndex !== begin) {
	    pushFilter()
	  }
	  if (i === 0 || dir.expression) {
	    dirs.push(dir)
	  }
	}

	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter () {
	  var exp = str.slice(lastFilterIndex, i).trim()
	  var filter
	  if (exp) {
	    filter = {}
	    var tokens = exp.match(filterTokenRE)
	    filter.name = tokens[0]
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg)
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter)
	  }
	  lastFilterIndex = i + 1
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg (arg) {
	  var stripped = reservedArgRE.test(arg)
	    ? arg
	    : _.stripQuotes(arg)
	  var dynamic = stripped === false
	  return {
	    value: dynamic ? arg : stripped,
	    dynamic: dynamic
	  }
	}

	/**
	 * Parse a directive string into an Array of AST-like
	 * objects representing directives.
	 *
	 * Example:
	 *
	 * "click: a = a + 1 | uppercase" will yield:
	 * {
	 *   arg: 'click',
	 *   expression: 'a = a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Array<Object>}
	 */

	exports.parse = function (s) {

	  var hit = cache.get(s)
	  if (hit) {
	    return hit
	  }

	  // reset parser state
	  str = s
	  inSingle = inDouble = false
	  curly = square = paren = begin = argIndex = 0
	  lastFilterIndex = 0
	  dirs = []
	  dir = {}
	  arg = null

	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i)
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble
	    } else if (
	      c === 0x2C && // comma
	      !paren && !curly && !square
	    ) {
	      // reached the end of a directive
	      pushDir()
	      // reset & skip the comma
	      dir = {}
	      begin = argIndex = lastFilterIndex = i + 1
	    } else if (
	      c === 0x3A && // colon
	      !dir.expression &&
	      !dir.arg
	    ) {
	      // argument
	      arg = str.slice(begin, i).trim()
	      // test for valid argument here
	      // since we may have caught stuff like first half of
	      // an object literal or a ternary expression.
	      if (argRE.test(arg)) {
	        argIndex = i + 1
	        dir.arg = _.stripQuotes(arg) || arg
	      }
	    } else if (
	      c === 0x7C && // pipe
	      str.charCodeAt(i + 1) !== 0x7C &&
	      str.charCodeAt(i - 1) !== 0x7C
	    ) {
	      if (dir.expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1
	        dir.expression = str.slice(argIndex, i).trim()
	      } else {
	        // already has filter
	        pushFilter()
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }

	  if (i === 0 || begin !== i) {
	    pushDir()
	  }

	  cache.put(s, dirs)
	  return dirs
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.

	var _ = __webpack_require__(21)
	var Watcher = __webpack_require__(38)
	var bindingModes = __webpack_require__(26)._propBindingModes

	module.exports = {

	  bind: function () {

	    var child = this.vm
	    var parent = child._context
	    // passed in from compiler directly
	    var prop = this._descriptor
	    var childKey = prop.path
	    var parentKey = prop.parentPath

	    this.parentWatcher = new Watcher(
	      parent,
	      parentKey,
	      function (val) {
	        if (_.assertProp(prop, val)) {
	          child[childKey] = val
	        }
	      }, { sync: true }
	    )

	    // set the child initial value.
	    var value = this.parentWatcher.value
	    if (childKey === '$data') {
	      child._data = value
	    } else {
	      _.initProp(child, prop, value)
	    }

	    // setup two-way binding
	    if (prop.mode === bindingModes.TWO_WAY) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(
	          child,
	          childKey,
	          function (val) {
	            parent.$set(parentKey, val)
	          }, { sync: true }
	        )
	      })
	    }
	  },

	  unbind: function () {
	    this.parentWatcher.teardown()
	    if (this.childWatcher) {
	      this.childWatcher.teardown()
	    }
	  }
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var config = __webpack_require__(26)
	var Dep = __webpack_require__(39)
	var expParser = __webpack_require__(40)
	var batcher = __webpack_require__(42)
	var uid = 0

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 * @constructor
	 */

	function Watcher (vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    _.extend(this, options)
	  }
	  var isFn = typeof expOrFn === 'function'
	  this.vm = vm
	  vm._watchers.push(this)
	  this.expression = isFn ? expOrFn.toString() : expOrFn
	  this.cb = cb
	  this.id = ++uid // uid for batching
	  this.active = true
	  this.dirty = this.lazy // for lazy watchers
	  this.deps = Object.create(null)
	  this.newDeps = null
	  this.prevError = null // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn
	    this.setter = undefined
	  } else {
	    var res = expParser.parse(expOrFn, this.twoWay)
	    this.getter = res.get
	    this.setter = res.set
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get()
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false
	}

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep
	    if (!this.deps[id]) {
	      this.deps[id] = dep
	      dep.addSub(this)
	    }
	  }
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet()
	  var vm = this.vm
	  var value
	  try {
	    value = this.getter.call(vm, vm)
	  } catch (e) {
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating expression "' +
	        this.expression + '". ' +
	        (config.debug
	          ? ''
	          : 'Turn on debug mode to see stack trace.'
	        ), e
	      )
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value)
	  }
	  if (this.filters) {
	    value = vm._applyFilters(value, null, this.filters, false)
	  }
	  this.afterGet()
	  return value
	}

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var vm = this.vm
	  if (this.filters) {
	    value = vm._applyFilters(
	      value, this.value, this.filters, true)
	  }
	  try {
	    this.setter.call(vm, vm, value)
	  } catch (e) {
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      config.warnExpressionErrors
	    ) {
	      _.warn(
	        'Error when evaluating setter "' +
	        this.expression + '"', e
	      )
	    }
	  }
	}

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this
	  this.newDeps = Object.create(null)
	}

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null
	  var ids = Object.keys(this.deps)
	  var i = ids.length
	  while (i--) {
	    var id = ids[i]
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this)
	    }
	  }
	  this.deps = this.newDeps
	}

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true
	  } else if (this.sync || !config.async) {
	    this.run()
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued
	      ? shallow
	        ? this.shallow
	        : false
	      : !!shallow
	    this.queued = true
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace')
	    }
	    batcher.push(this)
	  }
	}

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get()
	    if (
	      value !== this.value ||
	      // Deep watchers and Array watchers should fire even
	      // when the value is the same, because the value may
	      // have mutated; but only do so if this is a
	      // non-shallow update (caused by a vm digest).
	      ((_.isArray(value) || this.deep) && !this.shallow)
	    ) {
	      // set new value
	      var oldValue = this.value
	      this.value = value
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' &&
	          config.debug && prevError) {
	        this.prevError = null
	        try {
	          this.cb.call(this.vm, value, oldValue)
	        } catch (e) {
	          _.nextTick(function () {
	            throw prevError
	          }, 0)
	          throw e
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue)
	      }
	    }
	    this.queued = this.shallow = false
	  }
	}

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target
	  this.value = this.get()
	  this.dirty = false
	  Dep.target = current
	}

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps)
	  var i = depIds.length
	  while (i--) {
	    this.deps[depIds[i]].depend()
	  }
	}

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this)
	    }
	    var depIds = Object.keys(this.deps)
	    var i = depIds.length
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this)
	    }
	    this.active = false
	    this.vm = this.cb = this.value = null
	  }
	}

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {Object} obj
	 */

	function traverse (obj) {
	  var key, val, i
	  for (key in obj) {
	    val = obj[key]
	    if (_.isArray(val)) {
	      i = val.length
	      while (i--) traverse(val[i])
	    } else if (_.isObject(val)) {
	      traverse(val)
	    }
	  }
	}

	module.exports = Watcher

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var uid = 0

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */

	function Dep () {
	  this.id = uid++
	  this.subs = []
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub)
	}

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub)
	}

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this)
	}

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs)
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	}

	module.exports = Dep


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var Path = __webpack_require__(41)
	var Cache = __webpack_require__(35)
	var expressionCache = new Cache(1000)

	var allowedKeywords =
	  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
	  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
	  'encodeURIComponent,parseInt,parseFloat'
	var allowedKeywordsRE =
	  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')

	// keywords that don't make sense inside expressions
	var improperKeywords =
	  'break,case,class,catch,const,continue,debugger,default,' +
	  'delete,do,else,export,extends,finally,for,function,if,' +
	  'import,in,instanceof,let,return,super,switch,throw,try,' +
	  'var,while,with,yield,enum,await,implements,package,' +
	  'proctected,static,interface,private,public'
	var improperKeywordsRE =
	  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')

	var wsRE = /\s/g
	var newlineRE = /\n/g
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
	var restoreRE = /"(\d+)"/g
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
	var booleanLiteralRE = /^(true|false)$/

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = []

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save (str, isString) {
	  var i = saved.length
	  saved[i] = isString
	    ? str.replace(newlineRE, '\\n')
	    : str
	  return '"' + i + '"'
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite (raw) {
	  var c = raw.charAt(0)
	  var path = raw.slice(1)
	  if (allowedKeywordsRE.test(path)) {
	    return raw
	  } else {
	    path = path.indexOf('"') > -1
	      ? path.replace(restoreRE, restore)
	      : path
	    return c + 'scope.' + path
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore (str, i) {
	  return saved[i]
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function compileExpFns (exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Avoid using reserved keywords in expression: ' + exp
	    )
	  }
	  // reset state
	  saved.length = 0
	  // save strings and object literal keys
	  var body = exp
	    .replace(saveRE, save)
	    .replace(wsRE, '')
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body)
	    .replace(pathReplaceRE, rewrite)
	    .replace(restoreRE, restore)
	  var getter = makeGetter(body)
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet
	        ? makeSetter(body)
	        : null
	    }
	  }
	}

	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compilePathFns (exp) {
	  var getter, path
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.')
	    path.raw = exp
	    getter = Path.compileGetter(path)
	  } else {
	    // do the real parsing
	    path = Path.parse(exp)
	    getter = path.get
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function (obj, val) {
	      Path.set(obj, path, val)
	    }
	  }
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetter (body) {
	  try {
	    return new Function('scope', 'return ' + body + ';')
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid expression. ' +
	      'Generated function body: ' + body
	    )
	  }
	}

	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeSetter (body) {
	  try {
	    return new Function('scope', 'value', body + '=value;')
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid setter function body: ' + body
	    )
	  }
	}

	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */

	function checkSetter (hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body)
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	exports.parse = function (exp, needSet) {
	  exp = exp.trim()
	  // try cache
	  var hit = expressionCache.get(exp)
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit)
	    }
	    return hit
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp)
	    ? compilePathFns(exp)
	    : compileExpFns(exp, needSet)
	  expressionCache.put(exp, res)
	  return res
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	    // don't treat true/false as paths
	    !booleanLiteralRE.test(exp) &&
	    // Math constants e.g. Math.PI, Math.E etc.
	    exp.slice(0, 5) !== 'Math.'
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var Cache = __webpack_require__(35)
	var pathCache = new Cache(1000)
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/

	// actions
	var APPEND = 0
	var PUSH = 1

	// states
	var BEFORE_PATH = 0
	var IN_PATH = 1
	var BEFORE_IDENT = 2
	var IN_IDENT = 3
	var BEFORE_ELEMENT = 4
	var AFTER_ZERO = 5
	var IN_INDEX = 6
	var IN_SINGLE_QUOTE = 7
	var IN_DOUBLE_QUOTE = 8
	var IN_SUB_PATH = 9
	var AFTER_ELEMENT = 10
	var AFTER_PATH = 11
	var ERROR = 12

	var pathStateMachine = []

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [BEFORE_ELEMENT],
	  'eof': [AFTER_PATH]
	}

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	}

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [BEFORE_ELEMENT, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	}

	pathStateMachine[BEFORE_ELEMENT] = {
	  'ws': [BEFORE_ELEMENT],
	  '0': [AFTER_ZERO, APPEND],
	  'number': [IN_INDEX, APPEND],
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
	  'ident': [IN_SUB_PATH, APPEND, '*']
	}

	pathStateMachine[AFTER_ZERO] = {
	  'ws': [AFTER_ELEMENT, PUSH],
	  ']': [IN_PATH, PUSH]
	}

	pathStateMachine[IN_INDEX] = {
	  '0': [IN_INDEX, APPEND],
	  'number': [IN_INDEX, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	}

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [AFTER_ELEMENT],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	}

	pathStateMachine[IN_SUB_PATH] = {
	  'ident': [IN_SUB_PATH, APPEND],
	  '0': [IN_SUB_PATH, APPEND],
	  'number': [IN_SUB_PATH, APPEND],
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}

	pathStateMachine[AFTER_ELEMENT] = {
	  'ws': [AFTER_ELEMENT],
	  ']': [IN_PATH, PUSH]
	}

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType (ch) {
	  if (ch === undefined) {
	    return 'eof'
	  }

	  var code = ch.charCodeAt(0)

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30: // 0
	      return ch

	    case 0x5F: // _
	    case 0x24: // $
	      return 'ident'

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0:  // No-break space
	    case 0xFEFF:  // Byte Order Mark
	    case 0x2028:  // Line Separator
	    case 0x2029:  // Paragraph Separator
	      return 'ws'
	  }

	  // a-z, A-Z
	  if (
	    (code >= 0x61 && code <= 0x7A) ||
	    (code >= 0x41 && code <= 0x5A)
	  ) {
	    return 'ident'
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number'
	  }

	  return 'else'
	}

	/**
	 * Parse a string path into an array of segments
	 * Todo implement cache
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath (path) {
	  var keys = []
	  var index = -1
	  var mode = BEFORE_PATH
	  var c, newChar, key, type, transition, action, typeMap

	  var actions = []
	  actions[PUSH] = function () {
	    if (key === undefined) {
	      return
	    }
	    keys.push(key)
	    key = undefined
	  }
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar
	    } else {
	      key += newChar
	    }
	  }

	  function maybeUnescapeQuote () {
	    var nextChar = path[index + 1]
	    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
	        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
	      index++
	      newChar = nextChar
	      actions[APPEND]()
	      return true
	    }
	  }

	  while (mode != null) {
	    index++
	    c = path[index]

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue
	    }

	    type = getPathCharType(c)
	    typeMap = pathStateMachine[mode]
	    transition = typeMap[type] || typeMap['else'] || ERROR

	    if (transition === ERROR) {
	      return // parse error
	    }

	    mode = transition[0]
	    action = actions[transition[1]]
	    if (action) {
	      newChar = transition[2]
	      newChar = newChar === undefined
	        ? c
	        : newChar === '*'
	          ? newChar + c
	          : newChar
	      action()
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path
	      return keys
	    }
	  }
	}

	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */

	function formatAccessor (key) {
	  if (identRE.test(key)) { // identifier
	    return '.' + key
	  } else if (+key === key >>> 0) { // bracket index
	    return '[' + key + ']'
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']'
	  } else { // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]'
	  }
	}

	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */

	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('')
	  return new Function('o', body)
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	exports.parse = function (path) {
	  var hit = pathCache.get(path)
	  if (!hit) {
	    hit = parsePath(path)
	    if (hit) {
	      hit.get = exports.compileGetter(hit)
	      pathCache.put(path, hit)
	    }
	  }
	  return hit
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	exports.get = function (obj, path) {
	  path = exports.parse(path)
	  if (path) {
	    return path.get(obj)
	  }
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	exports.set = function (obj, path, val) {
	  var original = obj
	  if (typeof path === 'string') {
	    path = exports.parse(path)
	  }
	  if (!path || !_.isObject(obj)) {
	    return false
	  }
	  var last, key
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj
	    key = path[i]
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)]
	    }
	    if (i < l - 1) {
	      obj = obj[key]
	      if (!_.isObject(obj)) {
	        warnNonExistent(path)
	        obj = {}
	        last.$add(key, obj)
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val)
	      } else if (key in obj) {
	        obj[key] = val
	      } else {
	        warnNonExistent(path)
	        obj.$add(key, val)
	      }
	    }
	  }
	  return true
	}

	function warnNonExistent (path) {
	  process.env.NODE_ENV !== 'production' && _.warn(
	    'You are setting a non-existent path "' + path.raw + '" ' +
	    'on a vm instance. Consider pre-initializing the property ' +
	    'with the "data" option for more reliable reactivity ' +
	    'and better performance.'
	  )
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var config = __webpack_require__(26)

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = []
	var userQueue = []
	var has = {}
	var circular = {}
	var waiting = false
	var internalQueueDepleted = false

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState () {
	  queue = []
	  userQueue = []
	  has = {}
	  circular = {}
	  waiting = internalQueueDepleted = false
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue () {
	  runBatcherQueue(queue)
	  internalQueueDepleted = true
	  runBatcherQueue(userQueue)
	  resetBatcherState()
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue (queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i]
	    var id = watcher.id
	    has[id] = null
	    watcher.run()
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1)
	        _.warn(
	          'You may have an infinite update loop for watcher ' +
	          'with expression: ' + watcher.expression
	        )
	      }
	    }
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	exports.push = function (watcher) {
	  var id = watcher.id
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run()
	      return
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue
	    has[id] = q.length
	    q.push(watcher)
	    // queue the flush
	    if (!waiting) {
	      waiting = true
	      _.nextTick(flushBatcherQueue)
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var Cache = __webpack_require__(35)
	var templateCache = new Cache(1000)
	var idSelectorCache = new Cache(1000)

	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [
	    2,
	    '<table><tbody></tbody><colgroup>',
	    '</colgroup></table>'
	  ]
	}

	map.td =
	map.th = [
	  3,
	  '<table><tbody><tr>',
	  '</tr></tbody></table>'
	]

	map.option =
	map.optgroup = [
	  1,
	  '<select multiple="multiple">',
	  '</select>'
	]

	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>']

	map.g =
	map.defs =
	map.symbol =
	map.use =
	map.image =
	map.text =
	map.circle =
	map.ellipse =
	map.line =
	map.path =
	map.polygon =
	map.polyline =
	map.rect = [
	  1,
	  '<svg ' +
	    'xmlns="http://www.w3.org/2000/svg" ' +
	    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
	    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
	    'version="1.1">',
	  '</svg>'
	]

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate (node) {
	  return _.isTemplate(node) &&
	    node.content instanceof DocumentFragment
	}

	var tagRE = /<([\w:]+)/
	var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */

	function stringToFragment (templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString)
	  if (hit) {
	    return hit
	  }

	  var frag = document.createDocumentFragment()
	  var tagMatch = templateString.match(tagRE)
	  var entityMatch = entityRE.test(templateString)

	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(
	      document.createTextNode(templateString)
	    )
	  } else {

	    var tag = tagMatch && tagMatch[1]
	    var wrap = map[tag] || map._default
	    var depth = wrap[0]
	    var prefix = wrap[1]
	    var suffix = wrap[2]
	    var node = document.createElement('div')

	    node.innerHTML = prefix + templateString.trim() + suffix
	    while (depth--) {
	      node = node.lastChild
	    }

	    var child
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	    /* eslint-enable no-cond-assign */
	      frag.appendChild(child)
	    }
	  }

	  templateCache.put(templateString, frag)
	  return frag
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment (node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    _.trimNode(node.content)
	    return node.content
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent)
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node)
	  var frag = document.createDocumentFragment()
	  var child
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	  /* eslint-enable no-cond-assign */
	    frag.appendChild(child)
	  }
	  _.trimNode(frag)
	  return frag
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var a = document.createElement('div')
	    a.innerHTML = '<template>1</template>'
	    return !a.cloneNode(true).firstChild.innerHTML
	  } else {
	    return false
	  }
	})()

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (_.inBrowser) {
	    var t = document.createElement('textarea')
	    t.placeholder = 't'
	    return t.cloneNode(true).value === 't'
	  } else {
	    return false
	  }
	})()

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	exports.clone = function (node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode()
	  }
	  var res = node.cloneNode(true)
	  var i, original, cloned
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var clone = res
	    if (isRealTemplate(node)) {
	      node = node.content
	      clone = res.content
	    }
	    original = node.querySelectorAll('template')
	    if (original.length) {
	      cloned = clone.querySelectorAll('template')
	      i = cloned.length
	      while (i--) {
	        cloned[i].parentNode.replaceChild(
	          exports.clone(original[i]),
	          cloned[i]
	        )
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value
	    } else {
	      original = node.querySelectorAll('textarea')
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea')
	        i = cloned.length
	        while (i--) {
	          cloned[i].value = original[i].value
	        }
	      }
	    }
	  }
	  return res
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */

	exports.parse = function (template, clone, noSelector) {
	  var node, frag

	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    _.trimNode(template)
	    return clone
	      ? exports.clone(template)
	      : template
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template)
	      if (!frag) {
	        node = document.getElementById(template.slice(1))
	        if (node) {
	          frag = nodeToFragment(node)
	          // save selector to cache
	          idSelectorCache.put(template, frag)
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template)
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template)
	  }

	  return frag && clone
	    ? exports.clone(frag)
	    : frag
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var config = __webpack_require__(26)
	var templateParser = __webpack_require__(43)

	module.exports = {

	  isLiteral: true,

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   v-component="comp"
	   *
	   * - dynamic:
	   *   v-component="{{currentView}}"
	   */

	  bind: function () {
	    if (!this.el.__vue__) {
	      // create a ref anchor
	      this.anchor = _.createAnchor('v-component')
	      _.replace(this.el, this.anchor)
	      // check keep-alive options.
	      // If yes, instead of destroying the active vm when
	      // hiding (v-if) or switching (dynamic literal) it,
	      // we simply remove it from the DOM and save it in a
	      // cache object, with its constructor id as the key.
	      this.keepAlive = this._checkParam('keep-alive') != null
	      // wait for event before insertion
	      this.waitForEvent = this._checkParam('wait-for')
	      // check ref
	      this.refID = this._checkParam(config.prefix + 'ref')
	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.template = _.extractContent(this.el, true)
	      }
	      // component resolution related state
	      this.pendingComponentCb =
	      this.Component = null
	      // transition related state
	      this.pendingRemovals = 0
	      this.pendingRemovalCb = null
	      // if static, build right now.
	      if (!this._isDynamicLiteral) {
	        this.resolveComponent(this.expression, _.bind(this.initStatic, this))
	      } else {
	        // check dynamic component params
	        this.transMode = this._checkParam('transition-mode')
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'cannot mount component "' + this.expression + '" ' +
	        'on already mounted element: ' + this.el
	      )
	    }
	  },

	  /**
	   * Initialize a static component.
	   */

	  initStatic: function () {
	    // wait-for
	    var anchor = this.anchor
	    var options
	    var waitFor = this.waitForEvent
	    if (waitFor) {
	      options = {
	        created: function () {
	          this.$once(waitFor, function () {
	            this.$before(anchor)
	          })
	        }
	      }
	    }
	    var child = this.build(options)
	    this.setCurrent(child)
	    if (!this.waitForEvent) {
	      child.$before(anchor)
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. v-component="{{view}}"
	   */

	  update: function (value) {
	    this.setComponent(value)
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function (value, cb) {
	    this.invalidatePending()
	    if (!value) {
	      // just remove current
	      this.unbuild(true)
	      this.remove(this.childVM, cb)
	      this.unsetCurrent()
	    } else {
	      this.resolveComponent(value, _.bind(function () {
	        this.unbuild(true)
	        var options
	        var self = this
	        var waitFor = this.waitForEvent
	        if (waitFor) {
	          options = {
	            created: function () {
	              this.$once(waitFor, function () {
	                self.waitingFor = null
	                self.transition(this, cb)
	              })
	            }
	          }
	        }
	        var cached = this.getCached()
	        var newComponent = this.build(options)
	        if (!waitFor || cached) {
	          this.transition(newComponent, cb)
	        } else {
	          this.waitingFor = newComponent
	        }
	      }, this))
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */

	  resolveComponent: function (id, cb) {
	    var self = this
	    this.pendingComponentCb = _.cancellable(function (Component) {
	      self.Component = Component
	      cb()
	    })
	    this.vm._resolveComponent(id, this.pendingComponentCb)
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function () {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel()
	      this.pendingComponentCb = null
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function (extraOptions) {
	    var cached = this.getCached()
	    if (cached) {
	      return cached
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        el: templateParser.clone(this.el),
	        template: this.template,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.template,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        _context: this.vm
	      }
	      // extra options
	      if (extraOptions) {
	        _.extend(options, extraOptions)
	      }
	      var parent = this._host || this.vm
	      var child = parent.$addChild(options, this.Component)
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child
	      }
	      return child
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function () {
	    return this.keepAlive && this.cache[this.Component.cid]
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function (defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy()
	      this.waitingFor = null
	    }
	    var child = this.childVM
	    if (!child || this.keepAlive) {
	      return
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer)
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function (child, cb) {
	    var keepAlive = this.keepAlive
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++
	      this.pendingRemovalCb = cb
	      var self = this
	      child.$remove(function () {
	        self.pendingRemovals--
	        if (!keepAlive) child._cleanup()
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb()
	          self.pendingRemovalCb = null
	        }
	      })
	    } else if (cb) {
	      cb()
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function (target, cb) {
	    var self = this
	    var current = this.childVM
	    this.setCurrent(target)
	    switch (self.transMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb)
	        })
	        break
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb)
	        })
	        break
	      default:
	        self.remove(current)
	        target.$before(self.anchor, cb)
	    }
	  },

	  /**
	   * Set childVM and parent ref
	   */

	  setCurrent: function (child) {
	    this.unsetCurrent()
	    this.childVM = child
	    var refID = child._refID || this.refID
	    if (refID) {
	      this.vm.$[refID] = child
	    }
	  },

	  /**
	   * Unset childVM and parent ref
	   */

	  unsetCurrent: function () {
	    var child = this.childVM
	    this.childVM = null
	    var refID = (child && child._refID) || this.refID
	    if (refID) {
	      this.vm.$[refID] = null
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function () {
	    this.invalidatePending()
	    // Do not defer cleanup when unbinding
	    this.unbuild()
	    this.unsetCurrent()
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy()
	      }
	      this.cache = null
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var config = __webpack_require__(26)
	var templateParser = __webpack_require__(43)

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-repeat.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el)
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el)
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<content></content>'
	    }
	    if (options.template) {
	      options._content = _.extractContent(el)
	      el = transcludeTemplate(el, options)
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el)
	    el.appendChild(_.createAnchor('v-end', true))
	  }
	  return el
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate (el, options) {
	  var template = options.template
	  var frag = templateParser.parse(template, true)
	  if (frag) {
	    var replacer = frag.firstChild
	    var tag = replacer.tagName && replacer.tagName.toLowerCase()
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'You are mounting an instance with a template to ' +
	          '<body>. This will replace <body> entirely. You ' +
	          'should probably use `replace: false` here.'
	        )
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	        // multi-children template
	        frag.childNodes.length > 1 ||
	        // non-element template
	        replacer.nodeType !== 1 ||
	        // single nested component
	        tag === 'component' ||
	        _.resolveAsset(options, 'components', tag) ||
	        replacer.hasAttribute(config.prefix + 'component') ||
	        // element directive
	        _.resolveAsset(options, 'elementDirectives', tag) ||
	        // repeat block
	        replacer.hasAttribute(config.prefix + 'repeat')
	      ) {
	        return frag
	      } else {
	        options._replacerAttrs = extractAttrs(replacer)
	        mergeAttrs(el, replacer)
	        return replacer
	      }
	    } else {
	      el.appendChild(frag)
	      return el
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Invalid template option: ' + template
	    )
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs (el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return _.toArray(el.attributes)
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs (from, to) {
	  var attrs = from.attributes
	  var i = attrs.length
	  var name, value
	  while (i--) {
	    name = attrs[i].name
	    value = attrs[i].value
	    if (!to.hasAttribute(name)) {
	      to.setAttribute(name, value)
	    } else if (name === 'class') {
	      value = to.getAttribute(name) + ' ' + value
	      to.setAttribute(name, value)
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// manipulation directives
	exports.text = __webpack_require__(47)
	exports.html = __webpack_require__(48)
	exports.attr = __webpack_require__(49)
	exports.show = __webpack_require__(50)
	exports['class'] = __webpack_require__(52)
	exports.el = __webpack_require__(53)
	exports.ref = __webpack_require__(54)
	exports.cloak = __webpack_require__(55)
	exports.style = __webpack_require__(56)
	exports.transition = __webpack_require__(57)

	// event listener directives
	exports.on = __webpack_require__(60)
	exports.model = __webpack_require__(61)

	// logic control directives
	exports.repeat = __webpack_require__(66)
	exports['if'] = __webpack_require__(67)

	// internal directives that should not be used directly
	// but we still want to expose them for advanced usage.
	exports._component = __webpack_require__(44)
	exports._prop = __webpack_require__(37)


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	module.exports = {

	  bind: function () {
	    this.attr = this.el.nodeType === 3
	      ? 'data'
	      : 'textContent'
	  },

	  update: function (value) {
	    this.el[this.attr] = _.toString(value)
	  }
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var templateParser = __webpack_require__(43)

	module.exports = {

	  bind: function () {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = []
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html')
	      _.replace(this.el, this.anchor)
	    }
	  },

	  update: function (value) {
	    value = _.toString(value)
	    if (this.nodes) {
	      this.swap(value)
	    } else {
	      this.el.innerHTML = value
	    }
	  },

	  swap: function (value) {
	    // remove old nodes
	    var i = this.nodes.length
	    while (i--) {
	      _.remove(this.nodes[i])
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true)
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes)
	    _.before(frag, this.anchor)
	  }
	}


/***/ },
/* 49 */
/***/ function(module, exports) {

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	var xlinkRE = /^xlink:/
	var inputProps = {
	  value: 1,
	  checked: 1,
	  selected: 1
	}

	module.exports = {

	  priority: 850,

	  update: function (value) {
	    if (this.arg) {
	      this.setAttr(this.arg, value)
	    } else if (typeof value === 'object') {
	      this.objectHandler(value)
	    }
	  },

	  objectHandler: function (value) {
	    // cache object attrs so that only changed attrs
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var attr, val
	    for (attr in cache) {
	      if (!(attr in value)) {
	        this.setAttr(attr, null)
	        delete cache[attr]
	      }
	    }
	    for (attr in value) {
	      val = value[attr]
	      if (val !== cache[attr]) {
	        cache[attr] = val
	        this.setAttr(attr, val)
	      }
	    }
	  },

	  setAttr: function (attr, value) {
	    if (inputProps[attr] && attr in this.el) {
	      if (!this.valueRemoved) {
	        this.el.removeAttribute(attr)
	        this.valueRemoved = true
	      }
	      this.el[attr] = value
	    } else if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value)
	      } else {
	        this.el.setAttribute(attr, value)
	      }
	    } else {
	      this.el.removeAttribute(attr)
	    }
	  }
	}


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var transition = __webpack_require__(51)

	module.exports = function (value) {
	  var el = this.el
	  transition.apply(el, value ? 1 : -1, function () {
	    el.style.display = value ? '' : 'none'
	  }, this.vm)
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target)
	  }, vm, cb)
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el)
	  }, vm, cb)
	}

	/**
	 * Remove by appending to another parent with transition.
	 * This is only used in block operations.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	exports.removeThenAppend = function (el, target, vm, cb) {
	  apply(el, -1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}

	/**
	 * Append the childNodes of a fragment to target.
	 *
	 * @param {DocumentFragment} block
	 * @param {Node} target
	 * @param {Vue} vm
	 */

	exports.blockAppend = function (block, target, vm) {
	  var nodes = _.toArray(block.childNodes)
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    exports.before(nodes[i], target, vm)
	  }
	}

	/**
	 * Remove a block of nodes between two edge nodes.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 */

	exports.blockRemove = function (start, end, vm) {
	  var node = start.nextSibling
	  var next
	  while (node !== end) {
	    next = node.nextSibling
	    exports.remove(node, vm)
	    node = next
	  }
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans
	  if (
	    !transition ||
	    // skip if there are no js hooks and CSS transition is
	    // not supported
	    (!transition.hooks && !_.transitionEndEvent) ||
	    // skip transitions for initial compile
	    !vm._isCompiled ||
	    // if the vm is being manipulated by a parent directive
	    // during the parent's compilation phase, skip the
	    // animation.
	    (vm.$parent && !vm.$parent._isCompiled)
	  ) {
	    op()
	    if (cb) cb()
	    return
	  }
	  var action = direction > 0 ? 'enter' : 'leave'
	  transition[action](op, cb)
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var addClass = _.addClass
	var removeClass = _.removeClass

	module.exports = {

	  bind: function () {
	    // interpolations like class="{{abc}}" are converted
	    // to v-class, and we need to remove the raw,
	    // uninterpolated className at binding time.
	    var raw = this._descriptor._rawClass
	    if (raw) {
	      this.prevKeys = raw.trim().split(/\s+/)
	    }
	  },

	  update: function (value) {
	    if (this.arg) {
	      // single toggle
	      if (value) {
	        addClass(this.el, this.arg)
	      } else {
	        removeClass(this.el, this.arg)
	      }
	    } else {
	      if (value && typeof value === 'string') {
	        this.handleObject(stringToObject(value))
	      } else if (_.isPlainObject(value)) {
	        this.handleObject(value)
	      } else {
	        this.cleanup()
	      }
	    }
	  },

	  handleObject: function (value) {
	    this.cleanup(value)
	    var keys = this.prevKeys = Object.keys(value)
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i]
	      if (value[key]) {
	        addClass(this.el, key)
	      } else {
	        removeClass(this.el, key)
	      }
	    }
	  },

	  cleanup: function (value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length
	      while (i--) {
	        var key = this.prevKeys[i]
	        if (!value || !value.hasOwnProperty(key)) {
	          removeClass(this.el, key)
	        }
	      }
	    }
	  }
	}

	function stringToObject (value) {
	  var res = {}
	  var keys = value.trim().split(/\s+/)
	  var i = keys.length
	  while (i--) {
	    res[keys[i]] = true
	  }
	  return res
	}


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = {

	  isLiteral: true,

	  bind: function () {
	    this.vm.$$[this.expression] = this.el
	  },

	  unbind: function () {
	    delete this.vm.$$[this.expression]
	  }
	}


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)

	module.exports = {

	  isLiteral: true,

	  bind: function () {
	    var vm = this.el.__vue__
	    if (!vm) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-ref should only be used on a component root element.'
	      )
	      return
	    }
	    // If we get here, it means this is a `v-ref` on a
	    // child, because parent scope `v-ref` is stripped in
	    // `v-component` already. So we just record our own ref
	    // here - it will overwrite parent ref in `v-component`,
	    // if any.
	    vm._refID = this.expression
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(26)

	module.exports = {
	  bind: function () {
	    var el = this.el
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute(config.prefix + 'cloak')
	    })
	  }
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var prefixes = ['-webkit-', '-moz-', '-ms-']
	var camelPrefixes = ['Webkit', 'Moz', 'ms']
	var importantRE = /!important;?$/
	var camelRE = /([a-z])([A-Z])/g
	var testEl = null
	var propCache = {}

	module.exports = {

	  deep: true,

	  update: function (value) {
	    if (this.arg) {
	      this.setProp(this.arg, value)
	    } else {
	      if (typeof value === 'object') {
	        this.objectHandler(value)
	      } else {
	        this.el.style.cssText = value
	      }
	    }
	  },

	  objectHandler: function (value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var prop, val
	    for (prop in cache) {
	      if (!(prop in value)) {
	        this.setProp(prop, null)
	        delete cache[prop]
	      }
	    }
	    for (prop in value) {
	      val = value[prop]
	      if (val !== cache[prop]) {
	        cache[prop] = val
	        this.setProp(prop, val)
	      }
	    }
	  },

	  setProp: function (prop, value) {
	    prop = normalize(prop)
	    if (!prop) return // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += ''
	    if (value) {
	      var isImportant = importantRE.test(value)
	        ? 'important'
	        : ''
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim()
	      }
	      this.el.style.setProperty(prop, value, isImportant)
	    } else {
	      this.el.style.removeProperty(prop)
	    }
	  }

	}

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize (prop) {
	  if (propCache[prop]) {
	    return propCache[prop]
	  }
	  var res = prefix(prop)
	  propCache[prop] = propCache[res] = res
	  return res
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix (prop) {
	  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
	  var camel = _.camelize(prop)
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
	  if (!testEl) {
	    testEl = document.createElement('div')
	  }
	  if (camel in testEl.style) {
	    return prop
	  }
	  var i = prefixes.length
	  var prefixed
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop
	    }
	  }
	}


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var Transition = __webpack_require__(58)

	module.exports = {

	  priority: 1000,
	  isLiteral: true,

	  bind: function () {
	    if (!this._isDynamicLiteral) {
	      this.update(this.expression)
	    }
	  },

	  update: function (id, oldId) {
	    var el = this.el
	    var vm = this.el.__vue__ || this.vm
	    var hooks = _.resolveAsset(vm.$options, 'transitions', id)
	    id = id || 'v'
	    el.__v_trans = new Transition(el, id, hooks, vm)
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition')
	    }
	    _.addClass(el, id + '-transition')
	  }
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var queue = __webpack_require__(59)
	var addClass = _.addClass
	var removeClass = _.removeClass
	var transitionEndEvent = _.transitionEndEvent
	var animationEndEvent = _.animationEndEvent
	var transDurationProp = _.transitionProp + 'Duration'
	var animDurationProp = _.animationProp + 'Duration'

	var TYPE_TRANSITION = 1
	var TYPE_ANIMATION = 2

	var uid = 0

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */

	function Transition (el, id, hooks, vm) {
	  this.id = uid++
	  this.el = el
	  this.enterClass = id + '-enter'
	  this.leaveClass = id + '-leave'
	  this.hooks = hooks
	  this.vm = vm
	  // async state
	  this.pendingCssEvent =
	  this.pendingCssCb =
	  this.cancel =
	  this.pendingJsCb =
	  this.op =
	  this.cb = null
	  this.justEntered = false
	  this.entered = this.left = false
	  this.typeCache = {}
	  // bind
	  var self = this
	  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
	    .forEach(function (m) {
	      self[m] = _.bind(self[m], self)
	    })
	}

	var p = Transition.prototype

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p.enter = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeEnter')
	  this.cb = cb
	  addClass(this.el, this.enterClass)
	  op()
	  this.entered = false
	  this.callHookWithCb('enter')
	  if (this.entered) {
	    return // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled
	  queue.push(this.enterNextTick)
	}

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p.enterNextTick = function () {
	  this.justEntered = true
	  _.nextTick(function () {
	    this.justEntered = false
	  }, this)
	  var enterDone = this.enterDone
	  var type = this.getCssTransitionType(this.enterClass)
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass)
	      this.setupCssCb(transitionEndEvent, enterDone)
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone)
	    } else {
	      enterDone()
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass)
	  }
	}

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p.enterDone = function () {
	  this.entered = true
	  this.cancel = this.pendingJsCb = null
	  removeClass(this.el, this.enterClass)
	  this.callHook('afterEnter')
	  if (this.cb) this.cb()
	}

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p.leave = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeLeave')
	  this.op = op
	  this.cb = cb
	  addClass(this.el, this.leaveClass)
	  this.left = false
	  this.callHookWithCb('leave')
	  if (this.left) {
	    return // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone()
	    } else {
	      queue.push(this.leaveNextTick)
	    }
	  }
	}

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass)
	  if (type) {
	    var event = type === TYPE_TRANSITION
	      ? transitionEndEvent
	      : animationEndEvent
	    this.setupCssCb(event, this.leaveDone)
	  } else {
	    this.leaveDone()
	  }
	}

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p.leaveDone = function () {
	  this.left = true
	  this.cancel = this.pendingJsCb = null
	  this.op()
	  removeClass(this.el, this.leaveClass)
	  this.callHook('afterLeave')
	  if (this.cb) this.cb()
	  this.op = null
	}

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p.cancelPending = function () {
	  this.op = this.cb = null
	  var hasPending = false
	  if (this.pendingCssCb) {
	    hasPending = true
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
	    this.pendingCssEvent = this.pendingCssCb = null
	  }
	  if (this.pendingJsCb) {
	    hasPending = true
	    this.pendingJsCb.cancel()
	    this.pendingJsCb = null
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass)
	    removeClass(this.el, this.leaveClass)
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el)
	    this.cancel = null
	  }
	}

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el)
	  }
	}

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type]
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done'])
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb)
	  }
	}

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (
	    !transitionEndEvent ||
	    // skip CSS transitions if page is not visible -
	    // this solves the issue of transitionend events not
	    // firing until the page is visible again.
	    // pageVisibility API is supported in IE10+, same as
	    // CSS transitions.
	    document.hidden ||
	    // explicit js-only transition
	    (this.hooks && this.hooks.css === false) ||
	    // element is hidden
	    isHidden(this.el)
	  ) {
	    return
	  }
	  var type = this.typeCache[className]
	  if (type) return type
	  var inlineStyles = this.el.style
	  var computedStyles = window.getComputedStyle(this.el)
	  var transDuration =
	    inlineStyles[transDurationProp] ||
	    computedStyles[transDurationProp]
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION
	  } else {
	    var animDuration =
	      inlineStyles[animDurationProp] ||
	      computedStyles[animDurationProp]
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type
	  }
	  return type
	}

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event
	  var self = this
	  var el = this.el
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd)
	      self.pendingCssEvent = self.pendingCssCb = null
	      if (!self.pendingJsCb && cb) {
	        cb()
	      }
	    }
	  }
	  _.on(el, event, onEnd)
	}

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden (el) {
	  return el.style.display === 'none' ||
	    el.style.visibility === 'hidden' ||
	    el.hidden
	}

	module.exports = Transition


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var queue = []
	var queued = false

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	exports.push = function (job) {
	  queue.push(job)
	  if (!queued) {
	    queued = true
	    _.nextTick(flush)
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush () {
	  // Force layout
	  var f = document.documentElement.offsetHeight
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]()
	  }
	  queue = []
	  queued = false
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f
	}


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)

	module.exports = {

	  acceptStatement: true,
	  priority: 700,

	  bind: function () {
	    // deal with iframes
	    if (
	      this.el.tagName === 'IFRAME' &&
	      this.arg !== 'load'
	    ) {
	      var self = this
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler)
	      }
	      this.on('load', this.iframeBind)
	    }
	  },

	  update: function (handler) {
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Directive v-on="' + this.arg + ': ' +
	        this.expression + '" expects a function value, ' +
	        'got ' + handler
	      )
	      return
	    }
	    this.reset()
	    var vm = this.vm
	    this.handler = function (e) {
	      e.targetVM = vm
	      vm.$event = e
	      var res = handler(e)
	      vm.$event = null
	      return res
	    }
	    if (this.iframeBind) {
	      this.iframeBind()
	    } else {
	      _.on(this.el, this.arg, this.handler)
	    }
	  },

	  reset: function () {
	    var el = this.iframeBind
	      ? this.el.contentWindow
	      : this.el
	    if (this.handler) {
	      _.off(el, this.arg, this.handler)
	    }
	  },

	  unbind: function () {
	    this.reset()
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)

	var handlers = {
	  text: __webpack_require__(62),
	  radio: __webpack_require__(63),
	  select: __webpack_require__(64),
	  checkbox: __webpack_require__(65)
	}

	module.exports = {

	  priority: 800,
	  twoWay: true,
	  handlers: handlers,

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   *     - TODO: more types may be supplied as a plugin
	   */

	  bind: function () {
	    // friendly warning...
	    this.checkFilters()
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'It seems you are using a read-only filter with ' +
	        'v-model. You might want to use a two-way filter ' +
	        'to ensure correct behavior.'
	      )
	    }
	    var el = this.el
	    var tag = el.tagName
	    var handler
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text
	    } else if (tag === 'SELECT') {
	      handler = handlers.select
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-model does not support element type: ' + tag
	      )
	      return
	    }
	    el.__v_model = this
	    handler.bind.call(this)
	    this.update = handler.update
	    this._unbind = handler.unbind
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function () {
	    var filters = this.filters
	    if (!filters) return
	    var i = filters.length
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true
	      }
	      if (filter.write) {
	        this.hasWrite = true
	      }
	    }
	  },

	  unbind: function () {
	    this.el.__v_model = null
	    this._unbind && this._unbind()
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el
	    var isRange = el.type === 'range'

	    // check params
	    // - lazy: update model on "change" instead of "input"
	    var lazy = this._checkParam('lazy') != null
	    // - number: cast value into number when updating model.
	    var number = this._checkParam('number') != null
	    // - debounce: debounce the input listener
	    var debounce = parseInt(this._checkParam('debounce'), 10)

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false
	    if (!_.isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true
	      })
	      this.on('compositionend', function () {
	        composing = false
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener()
	        }
	      })
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false
	    if (!isRange) {
	      this.on('focus', function () {
	        self.focused = true
	      })
	      this.on('blur', function () {
	        self.focused = false
	        self.listener()
	      })
	    }

	    // Now attach the main listener
	    this.listener = function () {
	      if (composing) return
	      var val = number || isRange
	        ? _.toNumber(el.value)
	        : el.value
	      self.set(val)
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      _.nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value)
	        }
	      })
	    }
	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce)
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function'
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener)
	      if (!lazy) {
	        jQuery(el).on('input', this.listener)
	      }
	    } else {
	      this.on('change', this.listener)
	      if (!lazy) {
	        this.on('input', this.listener)
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.on('cut', function () {
	        _.nextTick(self.listener)
	      })
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener()
	        }
	      })
	    }

	    // set initial value if present
	    if (
	      el.hasAttribute('value') ||
	      (el.tagName === 'TEXTAREA' && el.value.trim())
	    ) {
	      this._initValue = number
	        ? _.toNumber(el.value)
	        : el.value
	    }
	  },

	  update: function (value) {
	    this.el.value = _.toString(value)
	  },

	  unbind: function () {
	    var el = this.el
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener)
	      jQuery(el).off('input', this.listener)
	    }
	  }
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el
	    var number = this._checkParam('number') != null
	    var expression = this._checkParam('exp')

	    this.getValue = function () {
	      var val = el.value
	      if (number) {
	        val = _.toNumber(val)
	      } else if (expression !== null) {
	        val = self.vm.$eval(expression)
	      }
	      return val
	    }

	    this.on('change', function () {
	      self.set(self.getValue())
	    })

	    if (el.checked) {
	      this._initValue = this.getValue()
	    }
	  },

	  update: function (value) {
	    this.el.checked = _.looseEqual(value, this.getValue())
	  }
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var Watcher = __webpack_require__(38)
	var dirParser = __webpack_require__(36)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get())
	      }
	    }

	    // check options param
	    var optionsParam = this._checkParam('options')
	    if (optionsParam) {
	      initOptions.call(this, optionsParam)
	    }
	    this.number = this._checkParam('number') != null
	    this.multiple = el.hasAttribute('multiple')

	    // attach listener
	    this.on('change', function () {
	      var value = getValue(el, self.multiple)
	      value = self.number
	        ? _.isArray(value)
	          ? value.map(_.toNumber)
	          : _.toNumber(value)
	        : value
	      self.set(value)
	    })

	    // check initial value (inline selected attribute)
	    checkInitialValue.call(this)

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate)
	  },

	  update: function (value) {
	    var el = this.el
	    el.selectedIndex = -1
	    if (value == null) {
	      if (this.defaultOption) {
	        this.defaultOption.selected = true
	      }
	      return
	    }
	    var multi = this.multiple && _.isArray(value)
	    var options = el.options
	    var i = options.length
	    var op, val
	    while (i--) {
	      op = options[i]
	      val = op.hasOwnProperty('_value')
	        ? op._value
	        : op.value
	      /* eslint-disable eqeqeq */
	      op.selected = multi
	        ? indexOf(value, val) > -1
	        : _.looseEqual(value, val)
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function () {
	    this.vm.$off('hook:attached', this.forceUpdate)
	    if (this.optionWatcher) {
	      this.optionWatcher.teardown()
	    }
	  }
	}

	/**
	 * Initialize the option list from the param.
	 *
	 * @param {String} expression
	 */

	function initOptions (expression) {
	  var self = this
	  var el = self.el
	  var defaultOption = self.defaultOption = self.el.options[0]
	  var descriptor = dirParser.parse(expression)[0]
	  function optionUpdateWatcher (value) {
	    if (_.isArray(value)) {
	      // clear old options.
	      // cannot reset innerHTML here because IE family get
	      // confused during compilation.
	      var i = el.options.length
	      while (i--) {
	        var option = el.options[i]
	        if (option !== defaultOption) {
	          var parentNode = option.parentNode
	          if (parentNode === el) {
	            parentNode.removeChild(option)
	          } else {
	            el.removeChild(parentNode)
	            i = el.options.length
	          }
	        }
	      }
	      buildOptions(el, value)
	      self.forceUpdate()
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Invalid options value for v-model: ' + value
	      )
	    }
	  }
	  this.optionWatcher = new Watcher(
	    this.vm,
	    descriptor.expression,
	    optionUpdateWatcher,
	    {
	      deep: true,
	      filters: descriptor.filters
	    }
	  )
	  // update with initial value
	  optionUpdateWatcher(this.optionWatcher.value)
	}

	/**
	 * Build up option elements. IE9 doesn't create options
	 * when setting innerHTML on <select> elements, so we have
	 * to use DOM API here.
	 *
	 * @param {Element} parent - a <select> or an <optgroup>
	 * @param {Array} options
	 */

	function buildOptions (parent, options) {
	  var op, el
	  for (var i = 0, l = options.length; i < l; i++) {
	    op = options[i]
	    if (!op.options) {
	      el = document.createElement('option')
	      if (typeof op === 'string' || typeof op === 'number') {
	        el.text = el.value = op
	      } else {
	        if (op.value != null && !_.isObject(op.value)) {
	          el.value = op.value
	        }
	        // object values gets serialized when set as value,
	        // so we store the raw value as a different property
	        el._value = op.value
	        el.text = op.text || ''
	        if (op.disabled) {
	          el.disabled = true
	        }
	      }
	    } else {
	      el = document.createElement('optgroup')
	      el.label = op.label
	      buildOptions(el, op.options)
	    }
	    parent.appendChild(el)
	  }
	}

	/**
	 * Check the initial value for selected options.
	 */

	function checkInitialValue () {
	  var initValue
	  var options = this.el.options
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (options[i].hasAttribute('selected')) {
	      if (this.multiple) {
	        (initValue || (initValue = []))
	          .push(options[i].value)
	      } else {
	        initValue = options[i].value
	      }
	    }
	  }
	  if (typeof initValue !== 'undefined') {
	    this._initValue = this.number
	      ? _.toNumber(initValue)
	      : initValue
	  }
	}

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @return {Array|*}
	 */

	function getValue (el, multi) {
	  var res = multi ? [] : null
	  var op, val
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i]
	    if (op.selected) {
	      val = op.hasOwnProperty('_value')
	        ? op._value
	        : op.value
	      if (multi) {
	        res.push(val)
	      } else {
	        return val
	      }
	    }
	  }
	  return res
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf (arr, val) {
	  var i = arr.length
	  while (i--) {
	    if (_.looseEqual(arr[i], val)) {
	      return i
	    }
	  }
	  return -1
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	module.exports = {

	  bind: function () {
	    var self = this
	    var el = this.el
	    var trueExp = this._checkParam('true-exp')
	    var falseExp = this._checkParam('false-exp')

	    this._matchValue = function (value) {
	      if (trueExp !== null) {
	        return _.looseEqual(value, self.vm.$eval(trueExp))
	      } else {
	        return !!value
	      }
	    }

	    function getValue () {
	      var val = el.checked
	      if (val && trueExp !== null) {
	        val = self.vm.$eval(trueExp)
	      }
	      if (!val && falseExp !== null) {
	        val = self.vm.$eval(falseExp)
	      }
	      return val
	    }

	    this.on('change', function () {
	      self.set(getValue())
	    })

	    if (el.checked) {
	      this._initValue = getValue()
	    }
	  },

	  update: function (value) {
	    this.el.checked = this._matchValue(value)
	  }
	}


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var config = __webpack_require__(26)
	var isObject = _.isObject
	var isPlainObject = _.isPlainObject
	var textParser = __webpack_require__(34)
	var expParser = __webpack_require__(40)
	var templateParser = __webpack_require__(43)
	var compiler = __webpack_require__(31)
	var uid = 0

	// async component resolution states
	var UNRESOLVED = 0
	var PENDING = 1
	var RESOLVED = 2
	var ABORTED = 3

	module.exports = {

	  /**
	   * Setup.
	   */

	  bind: function () {

	    // some helpful tips...
	    /* istanbul ignore if */
	    if (
	      process.env.NODE_ENV !== 'production' &&
	      this.el.tagName === 'OPTION' &&
	      this.el.parentNode && this.el.parentNode.__v_model
	    ) {
	      _.warn(
	        'Don\'t use v-repeat for v-model options; ' +
	        'use the `options` param instead: ' +
	        'http://vuejs.org/guide/forms.html#Dynamic_Select_Options'
	      )
	    }

	    // support for item in array syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/)
	    if (inMatch) {
	      this.arg = inMatch[1]
	      this._watcherExp = inMatch[2]
	    }
	    // uid as a cache identifier
	    this.id = '__v_repeat_' + (++uid)

	    // setup anchor nodes
	    this.start = _.createAnchor('v-repeat-start')
	    this.end = _.createAnchor('v-repeat-end')
	    _.replace(this.el, this.end)
	    _.before(this.start, this.end)

	    // check if this is a block repeat
	    this.template = _.isTemplate(this.el)
	      ? templateParser.parse(this.el, true)
	      : this.el

	    // check for trackby param
	    this.idKey = this._checkParam('track-by')
	    // check for transition stagger
	    var stagger = +this._checkParam('stagger')
	    this.enterStagger = +this._checkParam('enter-stagger') || stagger
	    this.leaveStagger = +this._checkParam('leave-stagger') || stagger

	    // check for v-ref/v-el
	    this.refID = this._checkParam(config.prefix + 'ref')
	    this.elID = this._checkParam(config.prefix + 'el')

	    // check other directives that need to be handled
	    // at v-repeat level
	    this.checkIf()
	    this.checkComponent()

	    // create cache object
	    this.cache = Object.create(null)
	  },

	  /**
	   * Warn against v-if usage.
	   */

	  checkIf: function () {
	    if (_.attr(this.el, 'if') !== null) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Don\'t use v-if with v-repeat. ' +
	        'Use v-show or the "filterBy" filter instead.'
	      )
	    }
	  },

	  /**
	   * Check the component constructor to use for repeated
	   * instances. If static we resolve it now, otherwise it
	   * needs to be resolved at build time with actual data.
	   */

	  checkComponent: function () {
	    this.componentState = UNRESOLVED
	    var options = this.vm.$options
	    var id = _.checkComponent(this.el, options)
	    if (!id) {
	      // default constructor
	      this.Component = _.Vue
	      // inline repeats should inherit
	      this.inline = true
	      // important: transclude with no options, just
	      // to ensure block start and block end
	      this.template = compiler.transclude(this.template)
	      var copy = _.extend({}, options)
	      copy._asComponent = false
	      this._linkFn = compiler.compile(this.template, copy)
	    } else {
	      this.Component = null
	      this.asComponent = true
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true)
	      }
	      var tokens = textParser.parse(id)
	      if (tokens) {
	        // dynamic component to be resolved later
	        var componentExp = textParser.tokensToExp(tokens)
	        this.componentGetter = expParser.parse(componentExp).get
	      } else {
	        // static
	        this.componentId = id
	        this.pendingData = null
	      }
	    }
	  },

	  resolveComponent: function () {
	    this.componentState = PENDING
	    this.vm._resolveComponent(this.componentId, _.bind(function (Component) {
	      if (this.componentState === ABORTED) {
	        return
	      }
	      this.Component = Component
	      this.componentState = RESOLVED
	      this.realUpdate(this.pendingData)
	      this.pendingData = null
	    }, this))
	  },

	  /**
	   * Resolve a dynamic component to use for an instance.
	   * The tricky part here is that there could be dynamic
	   * components depending on instance data.
	   *
	   * @param {Object} data
	   * @param {Object} meta
	   * @return {Function}
	   */

	  resolveDynamicComponent: function (data, meta) {
	    // create a temporary context object and copy data
	    // and meta properties onto it.
	    // use _.define to avoid accidentally overwriting scope
	    // properties.
	    var context = Object.create(this.vm)
	    var key
	    for (key in data) {
	      _.define(context, key, data[key])
	    }
	    for (key in meta) {
	      _.define(context, key, meta[key])
	    }
	    var id = this.componentGetter.call(context, context)
	    var Component = _.resolveAsset(this.vm.$options, 'components', id)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(Component, 'component', id)
	    }
	    if (!Component.options) {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Async resolution is not supported for v-repeat ' +
	        '+ dynamic component. (component: ' + id + ')'
	      )
	      return _.Vue
	    }
	    return Component
	  },

	  /**
	   * Update.
	   * This is called whenever the Array mutates. If we have
	   * a component, we might need to wait for it to resolve
	   * asynchronously.
	   *
	   * @param {Array|Number|String} data
	   */

	  update: function (data) {
	    if (process.env.NODE_ENV !== 'production' && !_.isArray(data)) {
	      _.warn(
	        'v-repeat pre-converts Objects into Arrays, and ' +
	        'v-repeat filters should always return Arrays.'
	      )
	    }
	    if (this.componentId) {
	      var state = this.componentState
	      if (state === UNRESOLVED) {
	        this.pendingData = data
	        // once resolved, it will call realUpdate
	        this.resolveComponent()
	      } else if (state === PENDING) {
	        this.pendingData = data
	      } else if (state === RESOLVED) {
	        this.realUpdate(data)
	      }
	    } else {
	      this.realUpdate(data)
	    }
	  },

	  /**
	   * The real update that actually modifies the DOM.
	   *
	   * @param {Array|Number|String} data
	   */

	  realUpdate: function (data) {
	    this.vms = this.diff(data, this.vms)
	    // update v-ref
	    if (this.refID) {
	      this.vm.$[this.refID] = this.converted
	        ? toRefObject(this.vms)
	        : this.vms
	    }
	    if (this.elID) {
	      this.vm.$$[this.elID] = this.vms.map(function (vm) {
	        return vm.$el
	      })
	    }
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   * @param {Array} oldVms
	   * @return {Array}
	   */

	  diff: function (data, oldVms) {
	    var idKey = this.idKey
	    var converted = this.converted
	    var start = this.start
	    var end = this.end
	    var inDoc = _.inDoc(start)
	    var alias = this.arg
	    var init = !oldVms
	    var vms = new Array(data.length)
	    var obj, raw, vm, i, l, primitive
	    // First pass, go through the new Array and fill up
	    // the new vms array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      obj = data[i]
	      raw = converted ? obj.$value : obj
	      primitive = !isObject(raw)
	      vm = !init && this.getVm(raw, i, converted ? obj.$key : null)
	      if (vm) { // reusable instance

	        if (process.env.NODE_ENV !== 'production' && vm._reused) {
	          _.warn(
	            'Duplicate objects found in v-repeat="' + this.expression + '": ' +
	            JSON.stringify(raw)
	          )
	        }

	        vm._reused = true
	        vm.$index = i // update $index
	        // update data for track-by or object repeat,
	        // since in these two cases the data is replaced
	        // rather than mutated.
	        if (idKey || converted || primitive) {
	          if (alias) {
	            vm[alias] = raw
	          } else if (_.isPlainObject(raw)) {
	            vm.$data = raw
	          } else {
	            vm.$value = raw
	          }
	        }
	      } else { // new instance
	        vm = this.build(obj, i, true)
	        vm._reused = false
	      }
	      vms[i] = vm
	      // insert if this is first run
	      if (init) {
	        vm.$before(end)
	      }
	    }
	    // if this is the first run, we're done.
	    if (init) {
	      return vms
	    }
	    // Second pass, go through the old vm instances and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0
	    var totalRemoved = oldVms.length - vms.length
	    for (i = 0, l = oldVms.length; i < l; i++) {
	      vm = oldVms[i]
	      if (!vm._reused) {
	        this.uncacheVm(vm)
	        vm.$destroy(false, true) // defer cleanup until removal
	        this.remove(vm, removalIndex++, totalRemoved, inDoc)
	      }
	    }
	    // final pass, move/insert new instances into the
	    // right place.
	    var targetPrev, prevEl, currentPrev
	    var insertionIndex = 0
	    for (i = 0, l = vms.length; i < l; i++) {
	      vm = vms[i]
	      // this is the vm that we should be after
	      targetPrev = vms[i - 1]
	      prevEl = targetPrev
	        ? targetPrev._staggerCb
	          ? targetPrev._staggerAnchor
	          : targetPrev._fragmentEnd || targetPrev.$el
	        : start
	      if (vm._reused && !vm._staggerCb) {
	        currentPrev = findPrevVm(vm, start, this.id)
	        if (currentPrev !== targetPrev) {
	          this.move(vm, prevEl)
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(vm, insertionIndex++, prevEl, inDoc)
	      }
	      vm._reused = false
	    }
	    return vms
	  },

	  /**
	   * Build a new instance and cache it.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {Boolean} needCache
	   */

	  build: function (data, index, needCache) {
	    var meta = { $index: index }
	    if (this.converted) {
	      meta.$key = data.$key
	    }
	    var raw = this.converted ? data.$value : data
	    var alias = this.arg
	    if (alias) {
	      data = {}
	      data[alias] = raw
	    } else if (!isPlainObject(raw)) {
	      // non-object values
	      data = {}
	      meta.$value = raw
	    } else {
	      // default
	      data = raw
	    }
	    // resolve constructor
	    var Component = this.Component || this.resolveDynamicComponent(data, meta)
	    var parent = this._host || this.vm
	    var vm = parent.$addChild({
	      el: templateParser.clone(this.template),
	      data: data,
	      inherit: this.inline,
	      template: this.inlineTemplate,
	      // repeater meta, e.g. $index, $key
	      _meta: meta,
	      // mark this as an inline-repeat instance
	      _repeat: this.inline,
	      // is this a component?
	      _asComponent: this.asComponent,
	      // linker cachable if no inline-template
	      _linkerCachable: !this.inlineTemplate && Component !== _.Vue,
	      // pre-compiled linker for simple repeats
	      _linkFn: this._linkFn,
	      // identifier, shows that this vm belongs to this collection
	      _repeatId: this.id,
	      // transclusion content owner
	      _context: this.vm
	    }, Component)
	    // cache instance
	    if (needCache) {
	      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null)
	    }
	    // sync back changes for two-way bindings of primitive values
	    var dir = this
	    if (this.rawType === 'object' && isPrimitive(raw)) {
	      vm.$watch(alias || '$value', function (val) {
	        if (dir.filters) {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'You seem to be mutating the $value reference of ' +
	            'a v-repeat instance (likely through v-model) ' +
	            'and filtering the v-repeat at the same time. ' +
	            'This will not work properly with an Array of ' +
	            'primitive values. Please use an Array of ' +
	            'Objects instead.'
	          )
	        }
	        dir._withLock(function () {
	          if (dir.converted) {
	            dir.rawValue[vm.$key] = val
	          } else {
	            dir.rawValue.$set(vm.$index, val)
	          }
	        })
	      })
	    }
	    return vm
	  },

	  /**
	   * Unbind, teardown everything
	   */

	  unbind: function () {
	    this.componentState = ABORTED
	    if (this.refID) {
	      this.vm.$[this.refID] = null
	    }
	    if (this.vms) {
	      var i = this.vms.length
	      var vm
	      while (i--) {
	        vm = this.vms[i]
	        this.uncacheVm(vm)
	        vm.$destroy()
	      }
	    }
	  },

	  /**
	   * Cache a vm instance based on its data.
	   *
	   * If the data is an object, we save the vm's reference on
	   * the data object as a hidden property. Otherwise we
	   * cache them in an object and for each primitive value
	   * there is an array in case there are duplicates.
	   *
	   * @param {Object} data
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheVm: function (data, vm, index, key) {
	    var idKey = this.idKey
	    var cache = this.cache
	    var primitive = !isObject(data)
	    var id
	    if (key || idKey || primitive) {
	      id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      if (!cache[id]) {
	        cache[id] = vm
	      } else if (!primitive && idKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Duplicate objects with the same track-by key in v-repeat: ' + id
	        )
	      }
	    } else {
	      id = this.id
	      if (data.hasOwnProperty(id)) {
	        if (data[id] === null) {
	          data[id] = vm
	        } else {
	          process.env.NODE_ENV !== 'production' && _.warn(
	            'Duplicate objects found in v-repeat="' + this.expression + '": ' +
	            JSON.stringify(data)
	          )
	        }
	      } else {
	        _.define(data, id, vm)
	      }
	    }
	    vm._raw = data
	  },

	  /**
	   * Try to get a cached instance from a piece of data.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Vue|undefined}
	   */

	  getVm: function (data, index, key) {
	    var idKey = this.idKey
	    var primitive = !isObject(data)
	    if (key || idKey || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      return this.cache[id]
	    } else {
	      return data[this.id]
	    }
	  },

	  /**
	   * Delete a cached vm instance.
	   *
	   * @param {Vue} vm
	   */

	  uncacheVm: function (vm) {
	    var data = vm._raw
	    var idKey = this.idKey
	    var index = vm.$index
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = vm.hasOwnProperty('$key') && vm.$key
	    var primitive = !isObject(data)
	    if (idKey || key || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      this.cache[id] = null
	    } else {
	      data[this.id] = null
	      vm._raw = null
	    }
	  },

	  /**
	   * Insert an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */

	  insert: function (vm, index, prevEl, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel()
	      vm._staggerCb = null
	    }
	    var staggerAmount = this.getStagger(vm, index, null, 'enter')
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = vm._staggerAnchor
	      if (!anchor) {
	        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor')
	        anchor.__vue__ = vm
	      }
	      _.after(anchor, prevEl)
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null
	        vm.$before(anchor)
	        _.remove(anchor)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      vm.$after(prevEl)
	    }
	  },

	  /**
	   * Move an already inserted instance.
	   *
	   * @param {Vue} vm
	   * @param {Node} prevEl
	   */

	  move: function (vm, prevEl) {
	    vm.$after(prevEl, null, false)
	  },

	  /**
	   * Remove an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Boolean} inDoc
	   */

	  remove: function (vm, index, total, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel()
	      vm._staggerCb = null
	      // it's not possible for the same vm to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this vm is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return
	    }
	    var staggerAmount = this.getStagger(vm, index, total, 'leave')
	    if (inDoc && staggerAmount) {
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null
	        remove()
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      remove()
	    }
	    function remove () {
	      vm.$remove(function () {
	        vm._cleanup()
	      })
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} type
	   * @param {Number} total
	   */

	  getStagger: function (vm, index, total, type) {
	    type = type + 'Stagger'
	    var transition = vm.$el.__v_trans
	    var hooks = transition && transition.hooks
	    var hook = hooks && (hooks[type] || hooks.stagger)
	    return hook
	      ? hook.call(vm, index, total)
	      : index * this[type]
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters, and convert non-Array objects to arrays.
	   *
	   * This function will be bound to this directive instance
	   * and passed into the watcher.
	   *
	   * @param {*} value
	   * @return {Array}
	   * @private
	   */

	  _preProcess: function (value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value
	    var type = this.rawType = typeof value
	    if (!isPlainObject(value)) {
	      this.converted = false
	      if (type === 'number') {
	        value = range(value)
	      } else if (type === 'string') {
	        value = _.toArray(value)
	      }
	      return value || []
	    } else {
	      // convert plain object to array.
	      var keys = Object.keys(value)
	      var i = keys.length
	      var res = new Array(i)
	      var key
	      while (i--) {
	        key = keys[i]
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        }
	      }
	      this.converted = true
	      return res
	    }
	  }
	}

	/**
	 * Helper to find the previous element that is an instance
	 * root node. This is necessary because a destroyed vm's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its __vue__ reference
	 * should have been removed so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return vm that is bound to this v-repeat. (see #929)
	 *
	 * @param {Vue} vm
	 * @param {Comment|Text} anchor
	 * @return {Vue}
	 */

	function findPrevVm (vm, anchor, id) {
	  var el = vm.$el.previousSibling
	  /* istanbul ignore if */
	  if (!el) return
	  while (
	    (!el.__vue__ || el.__vue__.$options._repeatId !== id) &&
	    el !== anchor
	  ) {
	    el = el.previousSibling
	  }
	  return el.__vue__
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range (n) {
	  var i = -1
	  var ret = new Array(n)
	  while (++i < n) {
	    ret[i] = i
	  }
	  return ret
	}

	/**
	 * Convert a vms array to an object ref for v-ref on an
	 * Object value.
	 *
	 * @param {Array} vms
	 * @return {Object}
	 */

	function toRefObject (vms) {
	  var ref = {}
	  for (var i = 0, l = vms.length; i < l; i++) {
	    ref[vms[i].$key] = vms[i]
	  }
	  return ref
	}

	/**
	 * Check if a value is a primitive one:
	 * String, Number, Boolean, null or undefined.
	 *
	 * @param {*} value
	 * @return {Boolean}
	 */

	function isPrimitive (value) {
	  var type = typeof value
	  return value == null ||
	    type === 'string' ||
	    type === 'number' ||
	    type === 'boolean'
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var compiler = __webpack_require__(31)
	var templateParser = __webpack_require__(43)
	var transition = __webpack_require__(51)
	var Cache = __webpack_require__(35)
	var cache = new Cache(1000)

	module.exports = {

	  bind: function () {
	    var el = this.el
	    if (!el.__vue__) {
	      this.start = _.createAnchor('v-if-start')
	      this.end = _.createAnchor('v-if-end')
	      _.replace(el, this.end)
	      _.before(this.start, this.end)
	      if (_.isTemplate(el)) {
	        this.template = templateParser.parse(el, true)
	      } else {
	        this.template = document.createDocumentFragment()
	        this.template.appendChild(templateParser.clone(el))
	      }
	      // compile the nested partial
	      var cacheId = (this.vm.constructor.cid || '') + el.outerHTML
	      this.linker = cache.get(cacheId)
	      if (!this.linker) {
	        this.linker = compiler.compile(
	          this.template,
	          this.vm.$options,
	          true // partial
	        )
	        cache.put(cacheId, this.linker)
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'v-if="' + this.expression + '" cannot be ' +
	        'used on an instance root element.'
	      )
	      this.invalid = true
	    }
	  },

	  update: function (value) {
	    if (this.invalid) return
	    if (value) {
	      // avoid duplicate compiles, since update() can be
	      // called with different truthy values
	      if (!this.unlink) {
	        this.link(
	          templateParser.clone(this.template),
	          this.linker
	        )
	      }
	    } else {
	      this.teardown()
	    }
	  },

	  link: function (frag, linker) {
	    var vm = this.vm
	    this.unlink = linker(vm, frag, this._host /* important */)
	    transition.blockAppend(frag, this.end, vm)
	    // call attached for all the child components created
	    // during the compilation
	    if (_.inDoc(vm.$el)) {
	      var children = this.getContainedComponents()
	      if (children) children.forEach(callAttach)
	    }
	  },

	  teardown: function () {
	    if (!this.unlink) return
	    // collect children beforehand
	    var children
	    if (_.inDoc(this.vm.$el)) {
	      children = this.getContainedComponents()
	    }
	    transition.blockRemove(this.start, this.end, this.vm)
	    if (children) children.forEach(callDetach)
	    this.unlink()
	    this.unlink = null
	  },

	  getContainedComponents: function () {
	    var vm = this._host || this.vm
	    var start = this.start.nextSibling
	    var end = this.end

	    function contains (c) {
	      var cur = start
	      var next
	      while (next !== end) {
	        next = cur.nextSibling
	        if (
	          cur === c.$el ||
	          cur.contains && cur.contains(c.$el)
	        ) {
	          return true
	        }
	        cur = next
	      }
	      return false
	    }

	    return vm.$children.length &&
	      vm.$children.filter(contains)
	  },

	  unbind: function () {
	    if (this.unlink) this.unlink()
	  }

	}

	function callAttach (child) {
	  if (!child._isAttached) {
	    child._callHook('attached')
	  }
	}

	function callDetach (child) {
	  if (child._isAttached) {
	    child._callHook('detached')
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports.content = __webpack_require__(69)
	exports.partial = __webpack_require__(70)


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var clone = __webpack_require__(43).clone

	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.

	module.exports = {

	  bind: function () {
	    var vm = this.vm
	    var host = vm
	    // we need find the content context, which is the
	    // closest non-inline-repeater instance.
	    while (host.$options._repeat) {
	      host = host.$parent
	    }
	    var raw = host.$options._content
	    var content
	    if (!raw) {
	      this.fallback()
	      return
	    }
	    var context = host._context
	    var selector = this._checkParam('select')
	    if (!selector) {
	      // Default content
	      var self = this
	      var compileDefaultContent = function () {
	        self.compile(
	          extractFragment(raw.childNodes, raw, true),
	          context,
	          vm
	        )
	      }
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent)
	      } else {
	        compileDefaultContent()
	      }
	    } else {
	      // select content
	      var nodes = raw.querySelectorAll(selector)
	      if (nodes.length) {
	        content = extractFragment(nodes, raw)
	        if (content.hasChildNodes()) {
	          this.compile(content, context, vm)
	        } else {
	          this.fallback()
	        }
	      } else {
	        this.fallback()
	      }
	    }
	  },

	  fallback: function () {
	    this.compile(_.extractContent(this.el, true), this.vm)
	  },

	  compile: function (content, context, host) {
	    if (content && context) {
	      this.unlink = context.$compile(content, host)
	    }
	    if (content) {
	      _.replace(this.el, content)
	    } else {
	      _.remove(this.el)
	    }
	  },

	  unbind: function () {
	    if (this.unlink) {
	      this.unlink()
	    }
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */

	function extractFragment (nodes, parent, main) {
	  var frag = document.createDocumentFragment()
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i]
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      frag.appendChild(clone(node))
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true
	      frag.appendChild(clone(node))
	    }
	  }
	  return frag
	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var templateParser = __webpack_require__(43)
	var textParser = __webpack_require__(34)
	var compiler = __webpack_require__(31)
	var Cache = __webpack_require__(35)
	var cache = new Cache(1000)

	// v-partial reuses logic from v-if
	var vIf = __webpack_require__(67)

	module.exports = {

	  link: vIf.link,
	  teardown: vIf.teardown,
	  getContainedComponents: vIf.getContainedComponents,

	  bind: function () {
	    var el = this.el
	    this.start = _.createAnchor('v-partial-start')
	    this.end = _.createAnchor('v-partial-end')
	    _.replace(el, this.end)
	    _.before(this.start, this.end)
	    var id = el.getAttribute('name')
	    var tokens = textParser.parse(id)
	    if (tokens) {
	      // dynamic partial
	      this.setupDynamic(tokens)
	    } else {
	      // static partial
	      this.insert(id)
	    }
	  },

	  setupDynamic: function (tokens) {
	    var self = this
	    var exp = textParser.tokensToExp(tokens)
	    this.unwatch = this.vm.$watch(exp, function (value) {
	      self.teardown()
	      self.insert(value)
	    }, {
	      immediate: true,
	      user: false
	    })
	  },

	  insert: function (id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(partial, 'partial', id)
	    }
	    if (partial) {
	      var frag = templateParser.parse(partial, true)
	      // cache partials based on constructor id.
	      var cacheId = (this.vm.constructor.cid || '') + partial
	      var linker = this.compile(frag, cacheId)
	      // this is provided by v-if
	      this.link(frag, linker)
	    }
	  },

	  compile: function (frag, cacheId) {
	    var hit = cache.get(cacheId)
	    if (hit) return hit
	    var linker = compiler.compile(frag, this.vm.$options, true)
	    cache.put(cacheId, linker)
	    return linker
	  },

	  unbind: function () {
	    if (this.unlink) this.unlink()
	    if (this.unwatch) this.unwatch()
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */

	exports.json = {
	  read: function (value, indent) {
	    return typeof value === 'string'
	      ? value
	      : JSON.stringify(value, null, Number(indent) || 2)
	  },
	  write: function (value) {
	    try {
	      return JSON.parse(value)
	    } catch (e) {
	      return value
	    }
	  }
	}

	/**
	 * 'abc' => 'Abc'
	 */

	exports.capitalize = function (value) {
	  if (!value && value !== 0) return ''
	  value = value.toString()
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}

	/**
	 * 'abc' => 'ABC'
	 */

	exports.uppercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toUpperCase()
	    : ''
	}

	/**
	 * 'AbC' => 'abc'
	 */

	exports.lowercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toLowerCase()
	    : ''
	}

	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */

	var digitsRE = /(\d{3})(?=\d)/g
	exports.currency = function (value, currency) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  currency = currency != null ? currency : '$'
	  var stringified = Math.abs(value).toFixed(2)
	  var _int = stringified.slice(0, -3)
	  var i = _int.length % 3
	  var head = i > 0
	    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
	    : ''
	  var _float = stringified.slice(-3)
	  var sign = value < 0 ? '-' : ''
	  return currency + sign + head +
	    _int.slice(i).replace(digitsRE, '$1,') +
	    _float
	}

	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */

	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1)
	  return args.length > 1
	    ? (args[value % 10 - 1] || args[args.length - 1])
	    : (args[0] + (value === 1 ? '' : 's'))
	}

	/**
	 * A special filter that takes a handler function,
	 * wraps it so it only gets triggered on specific
	 * keypresses. v-on only.
	 *
	 * @param {String} key
	 */

	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	}

	exports.key = function (handler, key) {
	  if (!handler) return
	  var code = keyCodes[key]
	  if (!code) {
	    code = parseInt(key, 10)
	  }
	  return function (e) {
	    if (e.keyCode === code) {
	      return handler.call(this, e)
	    }
	  }
	}

	// expose keycode hash
	exports.key.keyCodes = keyCodes

	exports.debounce = function (handler, delay) {
	  if (!handler) return
	  if (!delay) {
	    delay = 300
	  }
	  return _.debounce(handler, delay)
	}

	/**
	 * Install special array filters
	 */

	_.extend(exports, __webpack_require__(72))


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var Path = __webpack_require__(41)

	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */

	exports.filterBy = function (arr, search, delimiter /* ...dataKeys */) {
	  if (search == null) {
	    return arr
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search)
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase()
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2
	  // extract and flatten keys
	  var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur)
	  }, [])
	  return arr.filter(function (item) {
	    if (keys.length) {
	      return keys.some(function (key) {
	        return contains(Path.get(item, key), search)
	      })
	    } else {
	      return contains(item, search)
	    }
	  })
	}

	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */

	exports.orderBy = function (arr, sortKey, reverse) {
	  if (!sortKey) {
	    return arr
	  }
	  var order = 1
	  if (arguments.length > 2) {
	    if (reverse === '-1') {
	      order = -1
	    } else {
	      order = reverse ? -1 : 1
	    }
	  }
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key' && sortKey !== '$value') {
	      if (a && '$value' in a) a = a.$value
	      if (b && '$value' in b) b = b.$value
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a
	    b = _.isObject(b) ? Path.get(b, sortKey) : b
	    return a === b ? 0 : a > b ? order : -order
	  })
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains (val, search) {
	  var i
	  if (_.isPlainObject(val)) {
	    var keys = Object.keys(val)
	    i = keys.length
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true
	      }
	    }
	  } else if (_.isArray(val)) {
	    i = val.length
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1
	  }
	}


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var mergeOptions = __webpack_require__(21).mergeOptions

	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */

	exports._init = function (options) {

	  options = options || {}

	  this.$el = null
	  this.$parent = options._parent
	  this.$root = options._root || this
	  this.$children = []
	  this.$ = {}           // child vm references
	  this.$$ = {}          // element references
	  this._watchers = []   // all watchers as an array
	  this._directives = [] // all directives
	  this._childCtors = {} // inherit:true constructors

	  // a flag to avoid this being observed
	  this._isVue = true

	  // events bookkeeping
	  this._events = {}            // registered callbacks
	  this._eventsCount = {}       // for $broadcast optimization
	  this._eventCancelled = false // for event cancellation

	  // fragment instance properties
	  this._isFragment = false
	  this._fragmentStart =    // @type {CommentNode}
	  this._fragmentEnd = null // @type {CommentNode}

	  // lifecycle state
	  this._isCompiled =
	  this._isDestroyed =
	  this._isReady =
	  this._isAttached =
	  this._isBeingDestroyed = false
	  this._unlinkFn = null

	  // context: the scope in which the component was used,
	  // and the scope in which props and contents of this
	  // instance should be compiled in.
	  this._context =
	    options._context ||
	    options._parent

	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this)
	  }

	  // props used in v-repeat diffing
	  this._reused = false
	  this._staggerOp = null

	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )

	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {}

	  // initialize data observation and scope inheritance.
	  this._initScope()

	  // setup event system and option events.
	  this._initEvents()

	  // call created hook
	  this._callHook('created')

	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el)
	  }
	}


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var inDoc = _.inDoc

	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */

	exports._initEvents = function () {
	  var options = this.$options
	  registerCallbacks(this, '$on', options.events)
	  registerCallbacks(this, '$watch', options.watch)
	}

	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */

	function registerCallbacks (vm, action, hash) {
	  if (!hash) return
	  var handlers, key, i, j
	  for (key in hash) {
	    handlers = hash[key]
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i])
	      }
	    } else {
	      register(vm, action, key, handlers)
	    }
	  }
	}

	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */

	function register (vm, action, key, handler, options) {
	  var type = typeof handler
	  if (type === 'function') {
	    vm[action](key, handler, options)
	  } else if (type === 'string') {
	    var methods = vm.$options.methods
	    var method = methods && methods[handler]
	    if (method) {
	      vm[action](key, method, options)
	    } else {
	      process.env.NODE_ENV !== 'production' && _.warn(
	        'Unknown method: "' + handler + '" when ' +
	        'registering callback for ' + action +
	        ': "' + key + '".'
	      )
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler)
	  }
	}

	/**
	 * Setup recursive attached/detached calls
	 */

	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached)
	  this.$on('hook:detached', onDetached)
	}

	/**
	 * Callback to recursively call attached hook on children
	 */

	function onAttached () {
	  if (!this._isAttached) {
	    this._isAttached = true
	    this.$children.forEach(callAttach)
	  }
	}

	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */

	function callAttach (child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached')
	  }
	}

	/**
	 * Callback to recursively call detached hook on children
	 */

	function onDetached () {
	  if (this._isAttached) {
	    this._isAttached = false
	    this.$children.forEach(callDetach)
	  }
	}

	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */

	function callDetach (child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached')
	  }
	}

	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */

	exports._callHook = function (hook) {
	  var handlers = this.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this)
	    }
	  }
	  this.$emit('hook:' + hook)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var compiler = __webpack_require__(31)
	var Observer = __webpack_require__(76)
	var Dep = __webpack_require__(39)
	var Watcher = __webpack_require__(38)

	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */

	exports._initScope = function () {
	  this._initProps()
	  this._initMeta()
	  this._initMethods()
	  this._initData()
	  this._initComputed()
	}

	/**
	 * Initialize props.
	 */

	exports._initProps = function () {
	  var options = this.$options
	  var el = options.el
	  var props = options.props
	  if (props && !el) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      'Props will not be compiled if no `el` option is ' +
	      'provided at instantiation.'
	    )
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el)
	  this._propsUnlinkFn = el && el.nodeType === 1 && props
	    ? compiler.compileAndLinkProps(
	        this, el, props
	      )
	    : null
	}

	/**
	 * Initialize the data.
	 */

	exports._initData = function () {
	  var propsData = this._data
	  var optionsDataFn = this.$options.data
	  var optionsData = optionsDataFn && optionsDataFn()
	  if (optionsData) {
	    this._data = optionsData
	    for (var prop in propsData) {
	      if (
	        this._props[prop].raw !== null ||
	        !optionsData.hasOwnProperty(prop)
	      ) {
	        optionsData.$set(prop, propsData[prop])
	      }
	    }
	  }
	  var data = this._data
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var i, key
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key)) {
	      this._proxy(key)
	    }
	  }
	  // observe data
	  Observer.create(data, this)
	}

	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */

	exports._setData = function (newData) {
	  newData = newData || {}
	  var oldData = this._data
	  this._data = newData
	  var keys, key, i
	  // copy props.
	  // this should only happen during a v-repeat of component
	  // that also happens to have compiled props.
	  var props = this.$options.props
	  if (props) {
	    i = props.length
	    while (i--) {
	      key = props[i].name
	      if (key !== '$data' && !newData.hasOwnProperty(key)) {
	        newData.$set(key, oldData[key])
	      }
	    }
	  }
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key) && !(key in newData)) {
	      this._unproxy(key)
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
	      // new property
	      this._proxy(key)
	    }
	  }
	  oldData.__ob__.removeVm(this)
	  Observer.create(newData, this)
	  this._digest()
	}

	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */

	exports._proxy = function (key) {
	  // need to store ref to self here
	  // because these getter/setters might
	  // be called by child instances!
	  var self = this
	  Object.defineProperty(self, key, {
	    configurable: true,
	    enumerable: true,
	    get: function proxyGetter () {
	      return self._data[key]
	    },
	    set: function proxySetter (val) {
	      self._data[key] = val
	    }
	  })
	}

	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */

	exports._unproxy = function (key) {
	  delete this[key]
	}

	/**
	 * Force update on every watcher in scope.
	 */

	exports._digest = function () {
	  var i = this._watchers.length
	  while (i--) {
	    this._watchers[i].update(true) // shallow updates
	  }
	  var children = this.$children
	  i = children.length
	  while (i--) {
	    var child = children[i]
	    if (child.$options.inherit) {
	      child._digest()
	    }
	  }
	}

	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */

	function noop () {}
	exports._initComputed = function () {
	  var computed = this.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      var def = {
	        enumerable: true,
	        configurable: true
	      }
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, this)
	        def.set = noop
	      } else {
	        def.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, this)
	            : _.bind(userDef.get, this)
	          : noop
	        def.set = userDef.set
	          ? _.bind(userDef.set, this)
	          : noop
	      }
	      Object.defineProperty(this, key, def)
	    }
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, null, {
	    lazy: true
	  })
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate()
	    }
	    if (Dep.target) {
	      watcher.depend()
	    }
	    return watcher.value
	  }
	}

	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be called by children
	 * inheriting them.
	 */

	exports._initMethods = function () {
	  var methods = this.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this)
	    }
	  }
	}

	/**
	 * Initialize meta information like $index, $key & $value.
	 */

	exports._initMeta = function () {
	  var metas = this.$options._meta
	  if (metas) {
	    for (var key in metas) {
	      this._defineMeta(key, metas[key])
	    }
	  }
	}

	/**
	 * Define a meta property, e.g $index, $key, $value
	 * which only exists on the vm instance but not in $data.
	 *
	 * @param {String} key
	 * @param {*} value
	 */

	exports._defineMeta = function (key, value) {
	  var dep = new Dep()
	  Object.defineProperty(this, key, {
	    get: function metaGetter () {
	      if (Dep.target) {
	        dep.depend()
	      }
	      return value
	    },
	    set: function metaSetter (val) {
	      if (val !== value) {
	        value = val
	        dep.notify()
	      }
	    }
	  })
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var config = __webpack_require__(26)
	var Dep = __webpack_require__(39)
	var arrayMethods = __webpack_require__(77)
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
	__webpack_require__(78)

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer (value) {
	  this.value = value
	  this.dep = new Dep()
	  _.define(value, '__ob__', this)
	  if (_.isArray(value)) {
	    var augment = config.proto && _.hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	}

	// Static methods

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	Observer.create = function (value, vm) {
	  var ob
	  if (
	    value &&
	    value.hasOwnProperty('__ob__') &&
	    value.__ob__ instanceof Observer
	  ) {
	    ob = value.__ob__
	  } else if (
	    (_.isArray(value) || _.isPlainObject(value)) &&
	    !Object.isFrozen(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  if (ob && vm) {
	    ob.addVm(vm)
	  }
	  return ob
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object. Properties prefixed with `$` or `_`
	 * and accessor properties are ignored.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj)
	  var i = keys.length
	  while (i--) {
	    this.convert(keys[i], obj[keys[i]])
	  }
	}

	/**
	 * Try to carete an observer for a child value,
	 * and if value is array, link dep to the array.
	 *
	 * @param {*} val
	 * @return {Dep|undefined}
	 */

	Observer.prototype.observe = function (val) {
	  return Observer.create(val)
	}

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  var i = items.length
	  while (i--) {
	    var ob = this.observe(items[i])
	    if (ob) {
	      (ob.parents || (ob.parents = [])).push(this)
	    }
	  }
	}

	/**
	 * Remove self from the parent list of removed objects.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.unobserveArray = function (items) {
	  var i = items.length
	  while (i--) {
	    var ob = items[i] && items[i].__ob__
	    if (ob) {
	      ob.parents.$remove(this)
	    }
	  }
	}

	/**
	 * Notify self dependency, and also parent Array dependency
	 * if any.
	 */

	Observer.prototype.notify = function () {
	  this.dep.notify()
	  var parents = this.parents
	  if (parents) {
	    var i = parents.length
	    while (i--) {
	      parents[i].notify()
	    }
	  }
	}

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  var ob = this
	  var childOb = ob.observe(val)
	  var dep = new Dep()
	  Object.defineProperty(ob.value, key, {
	    enumerable: true,
	    configurable: true,
	    get: function () {
	      if (Dep.target) {
	        dep.depend()
	        if (childOb) {
	          childOb.dep.depend()
	        }
	      }
	      return val
	    },
	    set: function (newVal) {
	      if (newVal === val) return
	      val = newVal
	      childOb = ob.observe(newVal)
	      dep.notify()
	    }
	  })
	}

	/**
	 * Add an owner vm, so that when $add/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm)
	}

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm)
	}

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function protoAugment (target, src) {
	  target.__proto__ = src
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment (target, src, keys) {
	  var i = keys.length
	  var key
	  while (i--) {
	    key = keys[i]
	    _.define(target, key, src[key])
	  }
	}

	module.exports = Observer


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  _.define(arrayMethods, method, function mutator () {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted, removed
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        removed = result
	        break
	      case 'pop':
	      case 'shift':
	        removed = [result]
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    if (removed) ob.unobserveArray(removed)
	    // notify change
	    ob.notify()
	    return result
	  })
	})

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	_.define(
	  arrayProto,
	  '$set',
	  function $set (index, val) {
	    if (index >= this.length) {
	      this.length = index + 1
	    }
	    return this.splice(index, 1, val)[0]
	  }
	)

	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */

	_.define(
	  arrayProto,
	  '$remove',
	  function $remove (index) {
	    /* istanbul ignore if */
	    if (!this.length) return
	    if (typeof index !== 'number') {
	      index = _.indexOf(this, index)
	    }
	    if (index > -1) {
	      return this.splice(index, 1)
	    }
	  }
	)

	module.exports = arrayMethods


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var objProto = Object.prototype

	/**
	 * Add a new property to an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */

	_.define(
	  objProto,
	  '$add',
	  function $add (key, val) {
	    if (this.hasOwnProperty(key)) return
	    var ob = this.__ob__
	    if (!ob || _.isReserved(key)) {
	      this[key] = val
	      return
	    }
	    ob.convert(key, val)
	    ob.notify()
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._proxy(key)
	        vm._digest()
	      }
	    }
	  }
	)

	/**
	 * Set a property on an observed object, calling add to
	 * ensure the property is observed.
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */

	_.define(
	  objProto,
	  '$set',
	  function $set (key, val) {
	    this.$add(key, val)
	    this[key] = val
	  }
	)

	/**
	 * Deletes a property from an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @public
	 */

	_.define(
	  objProto,
	  '$delete',
	  function $delete (key) {
	    if (!this.hasOwnProperty(key)) return
	    delete this[key]
	    var ob = this.__ob__
	    if (!ob || _.isReserved(key)) {
	      return
	    }
	    ob.notify()
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._unproxy(key)
	        vm._digest()
	      }
	    }
	  }
	)


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var Directive = __webpack_require__(80)
	var compiler = __webpack_require__(31)

	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */

	exports._compile = function (el) {
	  var options = this.$options
	  var host = this._host
	  if (options._linkFn) {
	    // pre-transcluded with linker, just use it
	    this._initElement(el)
	    this._unlinkFn = options._linkFn(this, el, host)
	  } else {
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el
	    el = compiler.transclude(el, options)
	    this._initElement(el)

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var rootLinker = compiler.compileRoot(el, options)

	    // compile and link the rest
	    var contentLinkFn
	    var ctor = this.constructor
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compiler.compile(el, options)
	      }
	    }

	    // link phase
	    var rootUnlinkFn = rootLinker(this, el)
	    var contentUnlinkFn = contentLinkFn
	      ? contentLinkFn(this, el)
	      : compiler.compile(el, options)(this, el, host)

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn()
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true)
	    }

	    // finally replace original
	    if (options.replace) {
	      _.replace(original, el)
	    }
	  }
	  return el
	}

	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */

	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isFragment = true
	    this.$el = this._fragmentStart = el.firstChild
	    this._fragmentEnd = el.lastChild
	    // set persisted text anchors to empty
	    if (this._fragmentStart.nodeType === 3) {
	      this._fragmentStart.data = this._fragmentEnd.data = ''
	    }
	    this._blockFragment = el
	  } else {
	    this.$el = el
	  }
	  this.$el.__vue__ = this
	  this._callHook('beforeCompile')
	}

	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue|undefined} host - transclusion host component
	 */

	exports._bindDir = function (name, node, desc, def, host) {
	  this._directives.push(
	    new Directive(name, node, this, desc, def, host)
	  )
	}

	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */

	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    return
	  }
	  this._callHook('beforeDestroy')
	  this._isBeingDestroyed = true
	  var i
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this)
	  }
	  // destroy all children.
	  i = this.$children.length
	  while (i--) {
	    this.$children[i].$destroy()
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn()
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn()
	  }
	  i = this._watchers.length
	  while (i--) {
	    this._watchers[i].teardown()
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null
	  }
	  // remove DOM element
	  var self = this
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup()
	    })
	  } else if (!deferCleanup) {
	    this._cleanup()
	  }
	}

	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */

	exports._cleanup = function () {
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this)
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el =
	  this.$parent =
	  this.$root =
	  this.$children =
	  this._watchers =
	  this._directives = null
	  // call the last hook...
	  this._isDestroyed = true
	  this._callHook('destroyed')
	  // turn off all instance listeners.
	  this.$off()
	}


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var config = __webpack_require__(26)
	var Watcher = __webpack_require__(38)
	var textParser = __webpack_require__(34)
	var expParser = __webpack_require__(40)
	function noop () {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} expression
	 *                 - {String} [arg]
	 *                 - {Array<Object>} [filters]
	 * @param {Object} def - directive definition object
	 * @param {Vue|undefined} host - transclusion host target
	 * @constructor
	 */

	function Directive (name, el, vm, descriptor, def, host) {
	  // public
	  this.name = name
	  this.el = el
	  this.vm = vm
	  // copy descriptor props
	  this.raw = descriptor.raw
	  this.expression = descriptor.expression
	  this.arg = descriptor.arg
	  this.filters = descriptor.filters
	  // private
	  this._descriptor = descriptor
	  this._host = host
	  this._locked = false
	  this._bound = false
	  this._listeners = null
	  // init
	  this._bind(def)
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */

	Directive.prototype._bind = function (def) {
	  if (
	    (this.name !== 'cloak' || this.vm._isCompiled) &&
	    this.el && this.el.removeAttribute
	  ) {
	    this.el.removeAttribute(config.prefix + this.name)
	  }
	  if (typeof def === 'function') {
	    this.update = def
	  } else {
	    _.extend(this, def)
	  }
	  this._watcherExp = this.expression
	  this._checkDynamicLiteral()
	  if (this.bind) {
	    this.bind()
	  }
	  if (this._watcherExp &&
	      (this.update || this.twoWay) &&
	      (!this.isLiteral || this._isDynamicLiteral) &&
	      !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal)
	        }
	      }
	    } else {
	      this._update = noop
	    }
	    // pre-process hook called before the value is piped
	    // through the filters. used in v-repeat.
	    var preProcess = this._preProcess
	      ? _.bind(this._preProcess, this)
	      : null
	    var watcher = this._watcher = new Watcher(
	      this.vm,
	      this._watcherExp,
	      this._update, // callback
	      {
	        filters: this.filters,
	        twoWay: this.twoWay,
	        deep: this.deep,
	        preProcess: preProcess
	      }
	    )
	    if (this._initValue != null) {
	      watcher.set(this._initValue)
	    } else if (this.update) {
	      this.update(watcher.value)
	    }
	  }
	  this._bound = true
	}

	/**
	 * check if this is a dynamic literal binding.
	 *
	 * e.g. v-component="{{currentView}}"
	 */

	Directive.prototype._checkDynamicLiteral = function () {
	  var expression = this.expression
	  if (expression && this.isLiteral) {
	    var tokens = textParser.parse(expression)
	    if (tokens) {
	      var exp = textParser.tokensToExp(tokens)
	      this.expression = this.vm.$get(exp)
	      this._watcherExp = exp
	      this._isDynamicLiteral = true
	    }
	  }
	}

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. v-on="click: a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression
	  if (
	    expression && this.acceptStatement &&
	    !expParser.isSimplePath(expression)
	  ) {
	    var fn = expParser.parse(expression).get
	    var vm = this.vm
	    var handler = function () {
	      fn.call(vm, vm)
	    }
	    if (this.filters) {
	      handler = vm._applyFilters(handler, null, this.filters)
	    }
	    this.update(handler)
	    return true
	  }
	}

	/**
	 * Check for an attribute directive param, e.g. lazy
	 *
	 * @param {String} name
	 * @return {String}
	 */

	Directive.prototype._checkParam = function (name) {
	  var param = this.el.getAttribute(name)
	  if (param !== null) {
	    this.el.removeAttribute(name)
	    param = this.vm.$interpolate(param)
	  }
	  return param
	}

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value)
	    })
	  } else if (process.env.NODE_ENV !== 'production') {
	    _.warn(
	      'Directive.set() can only be used inside twoWay' +
	      'directives.'
	    )
	  }
	}

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this
	  self._locked = true
	  fn.call(self)
	  _.nextTick(function () {
	    self._locked = false
	  })
	}

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */

	Directive.prototype.on = function (event, handler) {
	  _.on(this.el, event, handler)
	  ;(this._listeners || (this._listeners = []))
	    .push([event, handler])
	}

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false
	    if (this.unbind) {
	      this.unbind()
	    }
	    if (this._watcher) {
	      this._watcher.teardown()
	    }
	    var listeners = this._listeners
	    if (listeners) {
	      for (var i = 0; i < listeners.length; i++) {
	        _.off(this.el, listeners[i][0], listeners[i][1])
	      }
	    }
	    this.vm = this.el =
	    this._watcher = this._listeners = null
	  }
	}

	module.exports = Directive

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)

	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */

	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i]
	    fn = _.resolveAsset(this.$options, 'filters', filter.name)
	    if (process.env.NODE_ENV !== 'production') {
	      _.assertAsset(fn, 'filter', filter.name)
	    }
	    if (!fn) continue
	    fn = write ? fn.write : (fn.read || fn)
	    if (typeof fn !== 'function') continue
	    args = write ? [value, oldValue] : [value]
	    offset = write ? 2 : 1
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j]
	        args[j + offset] = arg.dynamic
	          ? this.$get(arg.value)
	          : arg.value
	      }
	    }
	    value = fn.apply(this, args)
	  }
	  return value
	}

	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */

	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id)
	  if (process.env.NODE_ENV !== 'production') {
	    _.assertAsset(factory, 'component', id)
	  }
	  if (!factory) {
	    return
	  }
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved)
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb)
	    } else {
	      factory.requested = true
	      var cbs = factory.pendingCallbacks = [cb]
	      factory(function resolve (res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res)
	        }
	        // cache resolved
	        factory.resolved = res
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }, function reject (reason) {
	        process.env.NODE_ENV !== 'production' && _.warn(
	          'Failed to resolve async component: ' + id + '. ' +
	          (reason ? '\nReason: ' + reason : '')
	        )
	      })
	    }
	  } else {
	    // normal component
	    cb(factory)
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var Watcher = __webpack_require__(38)
	var Path = __webpack_require__(41)
	var textParser = __webpack_require__(34)
	var dirParser = __webpack_require__(36)
	var expParser = __webpack_require__(40)
	var filterRE = /[^|]\|[^|]/

	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @return {*}
	 */

	exports.$get = function (exp) {
	  var res = expParser.parse(exp)
	  if (res) {
	    try {
	      return res.get.call(this, this)
	    } catch (e) {}
	  }
	}

	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */

	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true)
	  if (res && res.set) {
	    res.set.call(this, this, val)
	  }
	}

	/**
	 * Add a property on the VM
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	exports.$add = function (key, val) {
	  this._data.$add(key, val)
	}

	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */

	exports.$delete = function (key) {
	  this._data.$delete(key)
	}

	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 *                 - {Boolean} user
	 * @return {Function} - unwatchFn
	 */

	exports.$watch = function (expOrFn, cb, options) {
	  var vm = this
	  var parsed
	  if (typeof expOrFn === 'string') {
	    parsed = dirParser.parse(expOrFn)[0]
	    expOrFn = parsed.expression
	  }
	  var watcher = new Watcher(vm, expOrFn, cb, {
	    deep: options && options.deep,
	    user: !options || options.user !== false,
	    filters: parsed && parsed.filters
	  })
	  if (options && options.immediate) {
	    cb.call(vm, watcher.value)
	  }
	  return function unwatchFn () {
	    watcher.teardown()
	  }
	}

	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @return {String}
	 */

	exports.$eval = function (text) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)[0]
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression)
	    return dir.filters
	      ? this._applyFilters(val, null, dir.filters)
	      : val
	  } else {
	    // no filter
	    return this.$get(text)
	  }
	}

	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */

	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text)
	  var vm = this
	  if (tokens) {
	    if (tokens.length === 1) {
	      return vm.$eval(tokens[0].value) + ''
	    } else {
	      return tokens.map(function (token) {
	        return token.tag
	          ? vm.$eval(token.value)
	          : token.value
	      }).join('')
	    }
	  } else {
	    return text
	  }
	}

	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */

	exports.$log = function (path) {
	  var data = path
	    ? Path.get(this._data, path)
	    : this._data
	  if (data) {
	    data = JSON.parse(JSON.stringify(data))
	  }
	  console.log(data)
	}


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)
	var transition = __webpack_require__(51)

	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */

	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this)
	}

	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    append, transition.append
	  )
	}

	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition)
	  } else {
	    this.$appendTo(target, cb, withTransition)
	  }
	  return this
	}

	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$before = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    before, transition.before
	  )
	}

	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$after = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition)
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition)
	  }
	  return this
	}

	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */

	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb()
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el)
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false
	  var op
	  var self = this
	  var realCb = function () {
	    if (inDoc) self._callHook('detached')
	    if (cb) cb()
	  }
	  if (
	    this._isFragment &&
	    !this._blockFragment.hasChildNodes()
	  ) {
	    op = withTransition === false
	      ? append
	      : transition.removeThenAppend
	    blockOp(this, this._blockFragment, op, realCb)
	  } else {
	    op = withTransition === false
	      ? remove
	      : transition.remove
	    op(this.$el, this, realCb)
	  }
	  return this
	}

	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */

	function insert (vm, target, cb, withTransition, op1, op2) {
	  target = query(target)
	  var targetIsDetached = !_.inDoc(target)
	  var op = withTransition === false || targetIsDetached
	    ? op1
	    : op2
	  var shouldCallHook =
	    !targetIsDetached &&
	    !vm._isAttached &&
	    !_.inDoc(vm.$el)
	  if (vm._isFragment) {
	    blockOp(vm, target, op, cb)
	  } else {
	    op(vm.$el, target, vm, cb)
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached')
	  }
	  return vm
	}

	/**
	 * Execute a transition operation on a fragment instance,
	 * iterating through all its block nodes.
	 *
	 * @param {Vue} vm
	 * @param {Node} target
	 * @param {Function} op
	 * @param {Function} cb
	 */

	function blockOp (vm, target, op, cb) {
	  var current = vm._fragmentStart
	  var end = vm._fragmentEnd
	  var next
	  while (next !== end) {
	    next = current.nextSibling
	    op(current, target, vm)
	    current = next
	  }
	  op(end, target, vm, cb)
	}

	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */

	function query (el) {
	  return typeof el === 'string'
	    ? document.querySelector(el)
	    : el
	}

	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function append (el, target, vm, cb) {
	  target.appendChild(el)
	  if (cb) cb()
	}

	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function before (el, target, vm, cb) {
	  _.before(el, target)
	  if (cb) cb()
	}

	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */

	function remove (el, vm, cb) {
	  _.remove(el)
	  if (cb) cb()
	}


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = []))
	    .push(fn)
	  modifyListenerCount(this, event, 1)
	  return this
	}

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$once = function (event, fn) {
	  var self = this
	  function on () {
	    self.$off(event, on)
	    fn.apply(this, arguments)
	  }
	  on.fn = fn
	  this.$on(event, on)
	  return this
	}

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */

	exports.$off = function (event, fn) {
	  var cbs
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event]
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length)
	        }
	      }
	    }
	    this._events = {}
	    return this
	  }
	  // specific event
	  cbs = this._events[event]
	  if (!cbs) {
	    return this
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length)
	    this._events[event] = null
	    return this
	  }
	  // specific handler
	  var cb
	  var i = cbs.length
	  while (i--) {
	    cb = cbs[i]
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1)
	      cbs.splice(i, 1)
	      break
	    }
	  }
	  return this
	}

	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */

	exports.$emit = function (event) {
	  this._eventCancelled = false
	  var cbs = this._events[event]
	  if (cbs) {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length - 1
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i + 1]
	    }
	    i = 0
	    cbs = cbs.length > 1
	      ? _.toArray(cbs)
	      : cbs
	    for (var l = cbs.length; i < l; i++) {
	      if (cbs[i].apply(this, args) === false) {
	        this._eventCancelled = true
	      }
	    }
	  }
	  return this
	}

	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */

	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return
	  var children = this.$children
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i]
	    child.$emit.apply(child, arguments)
	    if (!child._eventCancelled) {
	      child.$broadcast.apply(child, arguments)
	    }
	  }
	  return this
	}

	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */

	exports.$dispatch = function () {
	  var parent = this.$parent
	  while (parent) {
	    parent.$emit.apply(parent, arguments)
	    parent = parent._eventCancelled
	      ? null
	      : parent.$parent
	  }
	  return this
	}

	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */

	var hookRE = /^hook:/
	function modifyListenerCount (vm, event, count) {
	  var parent = vm.$parent
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return
	  while (parent) {
	    parent._eventsCount[event] =
	      (parent._eventsCount[event] || 0) + count
	    parent = parent.$parent
	  }
	}


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(21)

	/**
	 * Create a child instance that prototypally inherits
	 * data on parent. To achieve that we create an intermediate
	 * constructor with its prototype pointing to parent.
	 *
	 * @param {Object} opts
	 * @param {Function} [BaseCtor]
	 * @return {Vue}
	 * @public
	 */

	exports.$addChild = function (opts, BaseCtor) {
	  BaseCtor = BaseCtor || _.Vue
	  opts = opts || {}
	  var ChildVue
	  var parent = this
	  // transclusion context
	  var context = opts._context || parent
	  var inherit = opts.inherit !== undefined
	    ? opts.inherit
	    : BaseCtor.options.inherit
	  if (inherit) {
	    var ctors = context._childCtors
	    ChildVue = ctors[BaseCtor.cid]
	    if (!ChildVue) {
	      var optionName = BaseCtor.options.name
	      var className = optionName
	        ? _.classify(optionName)
	        : 'VueComponent'
	      ChildVue = new Function(
	        'return function ' + className + ' (options) {' +
	        'this.constructor = ' + className + ';' +
	        'this._init(options) }'
	      )()
	      ChildVue.options = BaseCtor.options
	      ChildVue.linker = BaseCtor.linker
	      ChildVue.prototype = context
	      ctors[BaseCtor.cid] = ChildVue
	    }
	  } else {
	    ChildVue = BaseCtor
	  }
	  opts._parent = parent
	  opts._root = parent.$root
	  var child = new ChildVue(opts)
	  return child
	}


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var _ = __webpack_require__(21)
	var compiler = __webpack_require__(31)

	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */

	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    process.env.NODE_ENV !== 'production' && _.warn(
	      '$mount() should be called only once.'
	    )
	    return
	  }
	  el = _.query(el)
	  if (!el) {
	    el = document.createElement('div')
	  }
	  this._compile(el)
	  this._isCompiled = true
	  this._callHook('compiled')
	  this._initDOMHooks()
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached')
	    ready.call(this)
	  } else {
	    this.$once('hook:attached', ready)
	  }
	  return this
	}

	/**
	 * Mark an instance as ready.
	 */

	function ready () {
	  this._isAttached = true
	  this._isReady = true
	  this._callHook('ready')
	}

	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */

	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup)
	}

	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */

	exports.$compile = function (el, host) {
	  return compiler.compile(el, this.$options, true)(this, el, host)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88)
	module.exports = __webpack_require__(91)
	module.exports.template = __webpack_require__(92)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./main.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./main.vue","-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./main.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./main.vue"))
	Ctor.options.template = require("-!vue-html!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./main.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(89);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "body {\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n  background: #f3f3f3;\n  color: #26262c;\n}\n\n.section, .section-accent, .section-dark, .section-light {\n  width: 100%;\n  min-height: 100px;\n  padding: 20px;\n}\n\n.section .icon, .section-accent .icon, .section-dark .icon, .section-light .icon {\n  display: block;\n  font-size: 1.6em;\n}\n\n.section h1, .section-accent h1, .section-dark h1, .section-light h1 {\n  margin-top: 0px;\n  font-size: 0.75em;\n  font-weight: 400;\n}\n\n.section p, .section-accent p, .section-dark p, .section-light p {\n  margin: 0px;\n  font-size: 0.65em;\n}\n\n.section a, .section-accent a, .section-dark a, .section-light a {\n  margin: 0px;\n  font-size: 0.65em;\n  color: #c0c5cb;\n  display: block;\n  text-decoration: none;\n}\n\n.section a:hover, .section-accent a:hover, .section-dark a:hover, .section-light a:hover {\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n.section-accent {\n  background-color: #2075f5;\n  color: #ffffff;\n}\n\n.section-dark {\n  background-color: #26262c;\n  color: #ffffff;\n}\n\n.section-dark\np {\n  color: #c0c5cb;\n}\n\n.section-light {\n  background-color: #c0c5cb;\n}\n\n.header\n.portrait {\n  -webkit-box-shadow: 0 0 15px #fff, inset 0 0 2px #fff;\n  -moz-box-shadow: 0 0 15px #fff, inset 0 0 2px #fff;\n  box-shadow: 0 0 15px #fff, inset 0 0 2px #fff;\n  width: 150px;\n  height: 150px;\n  background-image: url(" + __webpack_require__(90) + ");\n  margin: auto;\n  margin-top: 50px;\n  border-radius: 75px;\n}\n\n.header\n.icon {\n  color: #c0c5cb;\n  margin-bottom: 50px;\n}\n\n.header\nh1 {\n  font-weight: 700;\n  text-align: center;\n  font-size: 1.3em;\n  margin-top: 50px;\n  margin-bottom: 0px;\n  padding: 0px;\n}\n\n.header\nh2 {\n  font-family: \"Fira Mono\", sans-serif;\n  font-weight: 400;\n  color: #2075f5;\n  text-align: center;\n  font-size: 0.8em;\n  margin-top: 3px;\n  margin-bottom: 50px;\n  padding: 0px;\n}\n", ""]);

	// exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/assets/58b76c5a4e616dee52e713fcf6927d8f.png"

/***/ },
/* 91 */
/***/ function(module, exports) {

	function getAge(dateString) {
	    var today = new Date();
	    var birthDate = new Date(dateString);
	    var age = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();
	    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	        age--;
	    }
	    return age;
	}

	module.exports = {
	  data: {
	    contact: [
	      { link: 'mailto:alois.deniel@outlook.com', title: 'email'},
	      { link: 'https://twitter.com/aloisdeniel', title: 'twitter'},
	      { link: 'https://github.com/aloisdeniel', title: 'github'}


	    ],
	    about: [
	        getAge("1988/06/02") + ' year old',
	        'live in Rennes, France',
	        'work for Orange Business Services'
	      ]
	  }
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<div class=\"header section\">\r\n      <div class=\"portrait\"></div>\r\n      <h1>ALOIS DENIEL</h1>\r\n      <h2>Developer</h2>\r\n      <i class=\"icon icons8-angle-down\"></i>\r\n  </div>\r\n\r\n  <section-about info=\"{{about}}\"></section-about>\r\n\r\n  <section-skills></section-skills>\r\n\r\n  <section-jobs></section-jobs>\r\n\r\n  <section-studies></section-studies>\r\n\r\n  <section-opensource></section-opensource>\r\n\r\n  <section-hobbies></section-hobbies>\r\n\r\n  <section-contact items=\"{{contact}}\"></section-contact>";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./section-about.vue": 94,
		"./section-contact.vue": 99,
		"./section-header.vue": 104,
		"./section-hobbies.vue": 109,
		"./section-jobs.vue": 114,
		"./section-opensource.vue": 119,
		"./section-skills.vue": 124,
		"./section-studies.vue": 129
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 93;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95)
	module.exports = __webpack_require__(97)
	module.exports.template = __webpack_require__(98)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-about.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-about.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-about.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-about.vue"))
	Ctor.options.template = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-about.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-about.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-about.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = {
	  props: ['info']
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div class=\"section-dark\">\r\n  <section-header icon=\"user-male\" title=\"ABOUT ME\"></section-header>\r\n  <p v-repeat=\"info\">{{$value}}</p>\r\n</div>";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(100)
	module.exports = __webpack_require__(102)
	module.exports.template = __webpack_require__(103)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-contact.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-contact.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-contact.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-contact.vue"))
	Ctor.options.template = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-contact.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(101);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-contact.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-contact.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
	  props: {
	    items: {
	      type: Array,
	      default: () => []
	    }
	  }

	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact section-dark\">\r\n  <section-header icon=\"comments\" title=\"CONTACT\"></section-header>\r\n\r\n  <a v-repeat=\"item in items\" href=\"{{item.link}}\">{{item.title}}</a>\r\n</div>";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(105)
	module.exports = __webpack_require__(107)
	module.exports.template = __webpack_require__(108)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-header.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-header.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-header.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-header.vue"))
	Ctor.options.template = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-header.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-header.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = {
	  props: ['icon', 'title']
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "<i class=\"icon icons8-{{icon}}\"></i>\r\n  <h1>{{title}}</h1>";

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(110)
	module.exports = __webpack_require__(112)
	module.exports.template = __webpack_require__(113)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-hobbies.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-hobbies.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-hobbies.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-hobbies.vue"))
	Ctor.options.template = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-hobbies.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(111);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-hobbies.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-hobbies.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = {
	  props: []
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<div class=\"section\">\r\n  <section-header icon=\"airport\" title=\"HOBBIES\"></section-header>\r\n  <p>soon</p>\r\n</div>";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115)
	module.exports = __webpack_require__(117)
	module.exports.template = __webpack_require__(118)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-jobs.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-jobs.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-jobs.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-jobs.vue"))
	Ctor.options.template = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-jobs.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-jobs.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-jobs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = {
	  props: []
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<div class=\"section\">\r\n  <section-header icon=\"briefcase\" title=\"JOBS\"></section-header>\r\n  <p>soon</p>\r\n</div>";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(120)
	module.exports = __webpack_require__(122)
	module.exports.template = __webpack_require__(123)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-opensource.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-opensource.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-opensource.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-opensource.vue"))
	Ctor.options.template = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-opensource.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-opensource.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-opensource.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = {
	  props: [ 'projects']
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "<div class=\"section-accent\">\r\n  <section-header icon=\"idea\" title=\"OPEN-SOURCE\"></section-header>\r\n  <p>soon</p>\r\n</template>";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(125)
	module.exports = __webpack_require__(127)
	module.exports.template = __webpack_require__(128)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-skills.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-skills.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-skills.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-skills.vue"))
	Ctor.options.template = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-skills.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-skills.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-skills.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = {
	  props: [ 'major', 'minor']
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<div class=\"section-accent\">\r\n  <section-header icon=\"trophy\" title=\"SKILLS\"></section-header>\r\n  <p>soon</p>\r\n  <!--<div class=\"skills major\">\r\n    <div class=\"skill\">\r\n      <div class=\"icon\"></div>\r\n      <h3>C#</h3>\r\n    </div>\r\n    <div class=\"skill\">\r\n      <div class=\"icon\"></div>\r\n      <h3>Xamarin</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"skills minor\">\r\n    <div class=\"skill\"></div>\r\n    <div class=\"skill\"></div>\r\n  </div>-->\r\n</div>";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(130)
	module.exports = __webpack_require__(132)
	module.exports.template = __webpack_require__(133)
	if (false) {
	(function () {
	var Vue = require("vue")
	var hotAPI = require("C:\\Users\\alois\\Desktop\\one-page-me\\node_modules\\vue-loader\\lib\\hot-reload-api.js")
	hotAPI.install(Vue)
	if (!hotAPI.compatible) return
	var map = Vue.config._hotComponents
	var id = module.exports.hotID = "-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-studies.vue"
	if (typeof module.exports.el !== "string" && typeof module.exports.data !== "object") {
	map[id] = { Ctor: Vue.extend(module.exports), instances: [] }
	}
	module.hot.accept(["-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-studies.vue","-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-studies.vue"], function () {
	if (!map[id]) {
	throw new Error("Root or manually-mounted instance modified. Full reload is required.")
	}
	var Ctor = map[id].Ctor
	Ctor.options = Vue.util.mergeOptions(Vue.options, require("-!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./section-studies.vue"))
	Ctor.options.template = require("-!vue-html!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./section-studies.vue")
	if (Ctor.options.name) Ctor.options.components[Ctor.options.name] = Ctor
	Ctor.linker = null
	map[id].instances.forEach(hotAPI.update)
	})
	})()
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-studies.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./section-studies.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = {
	  props: []
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "<div class=\"section-light\">\r\n  <section-header icon=\"diploma-1\" title=\"STUDIES\"></section-header>\r\n  <p>soon</p>\r\n</div>";

/***/ }
/******/ ]);
