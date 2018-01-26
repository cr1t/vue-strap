/*!
 * vue-strap 2.0.2
 * http://wffranco.github.io/vue-strap/
 * Compiled using Vue 2.2.6
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueStrap"] = factory();
	else
		root["VueStrap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _utils = __webpack_require__(65);
	
	var _ClickOutside = __webpack_require__(66);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	var _Scroll = __webpack_require__(68);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	var _Accordion = __webpack_require__(69);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Affix = __webpack_require__(72);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Alert = __webpack_require__(75);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Aside = __webpack_require__(82);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	var _buttonGroup = __webpack_require__(87);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Carousel = __webpack_require__(90);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Checkbox = __webpack_require__(95);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Datepicker = __webpack_require__(100);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Dropdown = __webpack_require__(105);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _FormGroup = __webpack_require__(108);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormValidator = __webpack_require__(111);
	
	var _FormValidator2 = _interopRequireDefault(_FormValidator);
	
	var _Input = __webpack_require__(114);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Modal = __webpack_require__(119);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Navbar = __webpack_require__(126);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Option = __webpack_require__(129);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _Panel = __webpack_require__(132);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Popover = __webpack_require__(137);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Progressbar = __webpack_require__(143);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	var _Radio = __webpack_require__(146);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _Select = __webpack_require__(151);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Slider = __webpack_require__(156);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Spinner = __webpack_require__(159);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	var _Tab = __webpack_require__(164);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _TabGroup = __webpack_require__(167);
	
	var _TabGroup2 = _interopRequireDefault(_TabGroup);
	
	var _Tabs = __webpack_require__(172);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _ToggleButton = __webpack_require__(177);
	
	var _ToggleButton2 = _interopRequireDefault(_ToggleButton);
	
	var _Tooltip = __webpack_require__(180);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Typeahead = __webpack_require__(185);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _VueEditor = __webpack_require__(204);
	
	var _VueEditor2 = _interopRequireDefault(_VueEditor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueStrap = {
	  directives: {
	    ClickOutside: _ClickOutside2.default,
	    Scroll: _Scroll2.default
	  },
	  utils: {
	    $: _NodeList2.default,
	    coerce: _utils.coerce
	  },
	  //components
	  accordion: _Accordion2.default,
	  affix: _Affix2.default,
	  alert: _Alert2.default,
	  aside: _Aside2.default,
	  buttonGroup: _buttonGroup2.default,
	  carousel: _Carousel2.default,
	  checkbox: _Checkbox2.default,
	  datepicker: _Datepicker2.default,
	  dropdown: _Dropdown2.default,
	  formGroup: _FormGroup2.default,
	  formValidator: _FormValidator2.default,
	  input: _Input2.default,
	  modal: _Modal2.default,
	  navbar: _Navbar2.default,
	  option: _Option2.default,
	  panel: _Panel2.default,
	  popover: _Popover2.default,
	  progressbar: _Progressbar2.default,
	  radio: _Radio2.default,
	  select: _Select2.default,
	  slider: _Slider2.default,
	  spinner: _Spinner2.default,
	  tab: _Tab2.default,
	  tabGroup: _TabGroup2.default,
	  tabs: _Tabs2.default,
	  toggleButton: _ToggleButton2.default,
	  tooltip: _Tooltip2.default,
	  typeahead: _Typeahead2.default,
	  editor: _VueEditor2.default
	};
	// Components
	
	// Directives
	// Utils
	
	
	module.exports = VueStrap;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator = __webpack_require__(20);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _getOwnPropertyNames = __webpack_require__(56);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _classCallCheck2 = __webpack_require__(62);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(63);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(64);
	
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent;
	var blurList = [];
	var Events = [];
	
	function isNode(val) {
	  return val instanceof window.Node;
	}
	function isNodeList(val) {
	  return val instanceof window.NodeList || val instanceof NodeList || val instanceof window.HTMLCollection || val instanceof Array;
	}
	
	var NodeList = function () {
	  function NodeList(args) {
	    (0, _classCallCheck3.default)(this, NodeList);
	
	    var nodes = args;
	    if (args[0] === window) {
	      nodes = [window];
	    } else if (typeof args[0] === 'string') {
	      nodes = (args[1] || document).querySelectorAll(args[0]);
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    } else if (0 in args && !isNode(args[0]) && args[0] && 'length' in args[0]) {
	      nodes = args[0];
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    }
	    if (nodes) {
	      for (var i in nodes) {
	        this[i] = nodes[i];
	      }
	      this.length = nodes.length;
	    } else {
	      this.length = 0;
	    }
	    window.prueba = this;
	  }
	
	  (0, _createClass3.default)(NodeList, [{
	    key: 'concat',
	    value: function concat() {
	      var nodes = ArrayProto.slice.call(this);
	      function flatten(arr) {
	        ArrayProto.forEach.call(arr, function (el) {
	          if (isNode(el)) {
	            if (!~nodes.indexOf(el)) nodes.push(el);
	          } else if (isNodeList(el)) {
	            flatten(el);
	          }
	        });
	      }
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (isNode(arg)) {
	          if (!~nodes.indexOf(arg)) nodes.push(arg);
	        } else if (isNodeList(arg)) {
	          flatten(arg);
	        } else {
	          throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	        }
	      });
	      return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var notRemoved = flatten(this).filter(function (el) {
	        if (el.remove) {
	          el.remove();
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	        }
	        return document.body.contains(el);
	      });
	      if (notRemoved.length) console.warn('NodeList: Some nodes could not be deleted.');
	      return notRemoved;
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      ArrayProto.forEach.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return NodeListJS(ArrayProto.filter.apply(this, args), this);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      if (typeof element === 'string') flatten(this).forEach(function (node) {
	        nodes.push(node.querySelectorAll(element));
	      });
	      if (isNode(element)) flatten(this).forEach(function (node) {
	        if (node !== element && node.contains(element)) nodes.push(element);
	      });
	      if (isNodeList(element)) {
	        var els = flatten(element);
	        flatten(this).forEach(function (node) {
	          els.forEach(function (el) {
	            if (node !== el && node.contains(el)) nodes.push(el);
	          });
	        });
	      }
	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      ArrayProto.forEach.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'includes',
	    value: function includes(element, index) {
	      return ~this.indexOf(element, index);
	    }
	  }, {
	    key: 'map',
	    value: function map() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      var mapped = ArrayProto.map.apply(this, args);
	      return mapped.some(function (el) {
	        return isNode(el) || isNodeList(el);
	      }) ? flatten(mapped, this) : mapped;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return flatten(this.map(function (el) {
	        return el.parentNode;
	      }), this);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var pop = ArrayProto.pop.bind(this);
	      while (amount--) {
	        nodes.push(pop());
	      }return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var _this = this;
	
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this.indexOf(arg)) ArrayProto.push.call(_this, arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      while (amount--) {
	        nodes.push(ArrayProto.shift.call(this));
	      }return nodes.length == 1 ? nodes[0] : NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      return NodeListJS(ArrayProto.slice.apply(this, args), this);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	
	      for (var i = 2, l = args.length; i < l; i++) {
	        if (!isNode(args[i])) throw nodeError;
	      }
	      ArrayProto.splice.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var _this2 = this;
	
	      var unshift = ArrayProto.unshift.bind(this);
	
	      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	        args[_key9] = arguments[_key9];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this2.indexOf(arg)) unshift(arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(classes) {
	      return this.toggleClass(classes, true);
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(classes) {
	      return this.toggleClass(classes, false);
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(classes) {
	      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      return this.each(function (el) {
	        return classes.forEach(function (c) {
	          return el.classList[method](c);
	        });
	      });
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      this.each(function (el) {
	        if (el !== null) {
	          el = el[prop];
	        }
	        arr.push(el);
	      });
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      if (prop.constructor === Object) {
	        this.each(function (el) {
	          if (el) {
	            for (var key in prop) {
	              if (key in el) {
	                el[key] = prop[key];
	              }
	            }
	          }
	        });
	      } else {
	        this.each(function (el) {
	          if (prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	        args[_key10] = arguments[_key10];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      this.each(function (el) {
	        if (el && el[method] instanceof Function) {
	          el = el[method].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      });
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return NodeListJS([this[index]], this);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      if (typeof events === 'string') {
	        events = events.trim().replace(/\s+/, ' ').split(' ');
	      }
	      if (!this || !this.length) return this;
	      if (callback === undefined) {
	        callback = selector;
	        selector = null;
	      }
	      if (!callback) return this;
	      var fn = callback;
	      callback = selector ? function (e) {
	        var els = NodeListJS(selector, this);
	        if (!els.length) {
	          return;
	        }
	        els.some(function (el) {
	          var target = el.contains(e.target);
	          if (target) fn.call(el, e, el);
	          return target;
	        });
	      } : function (e) {
	        fn.apply(this, [e, this]);
	      };
	      this.each(function (el) {
	        events.forEach(function (event) {
	          if (el === window || isNode(el)) {
	            el.addEventListener(event, callback, false);
	            Events.push({
	              el: el,
	              event: event,
	              callback: callback
	            });
	          }
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      events = events instanceof Array ? events : typeof events === 'string' ? events.trim().replace(/\s+/, ' ').split(' ') : null;
	      this.each(function (el) {
	        Events = Events.filter(function (e) {
	          if (e && e.el === el && (!callback || callback === e.callback) && (!events || ~events.indexOf(e.event))) {
	            e.el.removeEventListener(e.event, e.callback);
	            return false;
	          }
	          return true;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(callback) {
	      if (!this || !this.length) return this;
	      if (!callback) return this;
	      this.each(function (el) {
	        blurList.push({ el: el, callback: callback });
	      });
	      if (!blurEvent) {
	        blurEvent = function blurEvent(e) {
	          blurList.forEach(function (item) {
	            var target = item.el.contains(e.target) || item.el === e.target;
	            if (!target) item.callback.call(item.el, e, item.el);
	          });
	        };
	        document.addEventListener('click', blurEvent, false);
	        document.addEventListener('touchstart', blurEvent, false);
	      }
	      return this;
	    }
	  }, {
	    key: 'offBlur',
	    value: function offBlur(callback) {
	      this.each(function (el) {
	        blurList = blurList.filter(function (blur) {
	          if (blur && blur.el === el && (!callback || blur.callback === callback)) {
	            return false;
	          }
	          return el;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'asArray',
	    get: function get() {
	      return ArrayProto.slice.call(this);
	    }
	  }]);
	  return NodeList;
	}();
	
	var NL = NodeList.prototype;
	
	function flatten(arr, owner) {
	  var list = [];
	  ArrayProto.forEach.call(arr, function (el) {
	    if (isNode(el)) {
	      if (!~list.indexOf(el)) list.push(el);
	    } else if (isNodeList(el)) {
	      for (var id in el) {
	        if (!~list.indexOf(el[id])) list.push(el[id]);
	      }
	    } else if (el !== null) {
	      arr.get = NL.get;
	      arr.set = NL.set;
	      arr.call = NL.call;
	      arr.owner = owner;
	      return arr;
	    }
	  });
	  return NodeListJS(list, owner);
	}
	
	var exceptions = ['join', 'copyWithin', 'fill', 'find', 'forEach'];
	(0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
	  if (!~exceptions.indexOf(key) && NL[key] === undefined) {
	    NL[key] = ArrayProto[key];
	  }
	});
	if (window.Symbol && _iterator2.default) {
	  NL[_iterator2.default] = NL.values = ArrayProto[_iterator2.default];
	}
	var div = document.createElement('div');
	function setterGetter(prop) {
	  var _this3 = this;
	
	  if (NL[prop]) return;
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
	        args[_key11] = arguments[_key11];
	      }
	
	      var arr = [];
	      var returnThis = true;
	      for (var i in NL) {
	        var el = NL[i];
	        if (el && el[prop] instanceof Function) {
	          el = el[prop].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      }
	      return returnThis ? _this3 : flatten(arr, _this3);
	    };
	  } else {
	    (0, _defineProperty2.default)(NL, prop, {
	      get: function get() {
	        var arr = [];
	        this.each(function (el) {
	          if (el !== null) {
	            el = el[prop];
	          }
	          arr.push(el);
	        });
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        this.each(function (el) {
	          if (el && prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
	    args[_key12] = arguments[_key12];
	  }
	
	  return new NodeList(args);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(7);
	var ctx = __webpack_require__(8);
	var hide = __webpack_require__(10);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(15) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(18);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function () {
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(6).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	__webpack_require__(51);
	module.exports = __webpack_require__(55).f('iterator');


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(23)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(26)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24);
	var defined = __webpack_require__(25);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(27);
	var $export = __webpack_require__(5);
	var redefine = __webpack_require__(28);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(29);
	var Iterators = __webpack_require__(30);
	var $iterCreate = __webpack_require__(31);
	var setToStringTag = __webpack_require__(47);
	var getPrototypeOf = __webpack_require__(49);
	var ITERATOR = __webpack_require__(48)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(32);
	var descriptor = __webpack_require__(19);
	var setToStringTag = __webpack_require__(47);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(48)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(33);
	var enumBugKeys = __webpack_require__(45);
	var IE_PROTO = __webpack_require__(42)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(17)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(34);
	
	module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(35);
	var enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(29);
	var toIObject = __webpack_require__(36);
	var arrayIndexOf = __webpack_require__(39)(false);
	var IE_PROTO = __webpack_require__(42)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37);
	var defined = __webpack_require__(25);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36);
	var toLength = __webpack_require__(40);
	var toAbsoluteIndex = __webpack_require__(41);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(24);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys');
	var uid = __webpack_require__(44);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(6).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(29);
	var TAG = __webpack_require__(48)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(43)('wks');
	var uid = __webpack_require__(44);
	var Symbol = __webpack_require__(6).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(29);
	var toObject = __webpack_require__(50);
	var IE_PROTO = __webpack_require__(42)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(25);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var global = __webpack_require__(6);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(30);
	var TO_STRING_TAG = __webpack_require__(48)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(53);
	var step = __webpack_require__(54);
	var Iterators = __webpack_require__(30);
	var toIObject = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(26)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	var $Object = __webpack_require__(7).Object;
	module.exports = function getOwnPropertyNames(it) {
	  return $Object.getOwnPropertyNames(it);
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(59)('getOwnPropertyNames', function () {
	  return __webpack_require__(60).f;
	});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5);
	var core = __webpack_require__(7);
	var fails = __webpack_require__(16);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36);
	var gOPN = __webpack_require__(61).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(35);
	var hiddenKeys = __webpack_require__(45).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Array.find
	 */
	if (!Array.prototype.find) {
	  Array.prototype.find = function (predicate) {
	    'use strict';
	
	    if (this == null) {
	      throw new TypeError('Array.prototype.find called on null or undefined');
	    }
	    if (typeof predicate !== 'function') {
	      throw new TypeError('predicate must be a function');
	    }
	    var list = Object(this);
	    var length = list.length >>> 0;
	    var thisArg = arguments[1];
	    var value;
	
	    for (var i = 0; i < length; i++) {
	      value = list[i];
	      if (predicate.call(thisArg, value, i, list)) {
	        return value;
	      }
	    }
	    return undefined;
	  };
	}
	
	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20150312
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */
	/*global self, document, DOMException */
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	if ("document" in self) {
	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
	
	    (function (view) {
	
	      "use strict";
	
	      if (!('Element' in view)) return;
	
	      var classListProp = "classList",
	          protoProp = "prototype",
	          elemCtrProto = view.Element[protoProp],
	          objCtr = Object,
	          strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      },
	          arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var i = 0,
	            len = this.length;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      ,
	          DOMEx = function DOMEx(type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      },
	          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
	        if (token === "") {
	          throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
	        }
	        return arrIndexOf.call(classList, token);
	      },
	          ClassList = function ClassList(elem) {
	        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
	            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
	            i = 0,
	            len = classes.length;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      },
	          classListProto = ClassList[protoProp] = [],
	          classListGetter = function classListGetter() {
	        return new ClassList(this);
	      };
	      // Most DOMException implementations don't allow calling DOMException's toString()
	      // on non-DOMExceptions. Error's toString() is sufficient here.
	      DOMEx[protoProp] = Error[protoProp];
	      classListProto.item = function (i) {
	        return this[i] || null;
	      };
	      classListProto.contains = function (token) {
	        token += "";
	        return checkTokenAndGetIndex(this, token) !== -1;
	      };
	      classListProto.add = function () {
	        var tokens = arguments,
	            i = 0,
	            l = tokens.length,
	            token,
	            updated = false;
	        do {
	          token = tokens[i] + "";
	          if (checkTokenAndGetIndex(this, token) === -1) {
	            this.push(token);
	            updated = true;
	          }
	        } while (++i < l);
	
	        if (updated) {
	          this._updateClassName();
	        }
	      };
	      classListProto.remove = function () {
	        var tokens = arguments,
	            i = 0,
	            l = tokens.length,
	            token,
	            updated = false,
	            index;
	        do {
	          token = tokens[i] + "";
	          index = checkTokenAndGetIndex(this, token);
	          while (index !== -1) {
	            this.splice(index, 1);
	            updated = true;
	            index = checkTokenAndGetIndex(this, token);
	          }
	        } while (++i < l);
	
	        if (updated) {
	          this._updateClassName();
	        }
	      };
	      classListProto.toggle = function (token, force) {
	        token += "";
	
	        var result = this.contains(token),
	            method = result ? force !== true && "remove" : force !== false && "add";
	
	        if (method) {
	          this[method](token);
	        }
	
	        if (force === true || force === false) {
	          return force;
	        } else {
	          return !result;
	        }
	      };
	      classListProto.toString = function () {
	        return this.join(" ");
	      };
	
	      if (objCtr.defineProperty) {
	        var classListPropDesc = {
	          get: classListGetter,
	          enumerable: true,
	          configurable: true
	        };
	        try {
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        } catch (ex) {
	          // IE 8 doesn't support enumerable:true
	          if (ex.number === -0x7FF5EC54) {
	            classListPropDesc.enumerable = false;
	            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	          }
	        }
	      } else if (objCtr[protoProp].__defineGetter__) {
	        elemCtrProto.__defineGetter__(classListProp, classListGetter);
	      }
	    })(self);
	  } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.
	
	    (function () {
	      "use strict";
	
	      var testElement = document.createElement("_");
	
	      testElement.classList.add("c1", "c2");
	
	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function createMethod(method) {
	          var original = DOMTokenList.prototype[method];
	
	          DOMTokenList.prototype[method] = function (token) {
	            var i,
	                len = arguments.length;
	
	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }
	
	      testElement.classList.toggle("c3", false);
	
	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;
	
	        DOMTokenList.prototype.toggle = function (token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };
	      }
	
	      testElement = null;
	    })();
	  }
	}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getJSON = getJSON;
	exports.getScrollBarWidth = getScrollBarWidth;
	exports.translations = translations;
	exports.delayer = delayer;
	exports.VueFixer = VueFixer;
	// coerce convert som types of data into another type
	var coerce = exports.coerce = {
	  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
	  boolean: function boolean(val) {
	    return typeof val === 'string' ? val === '' || val === 'true' ? true : val === 'false' || val === 'null' || val === 'undefined' ? false : val : val;
	  },
	  // Attempt to convert a string value to a Number. Otherwise, return 0.
	  number: function number(val) {
	    var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    return typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val);
	  },
	  // Attempt to convert to string any value, except for null or undefined.
	  string: function string(val) {
	    return val === undefined || val === null ? '' : val + '';
	  },
	  // Pattern accept RegExp, function, or string (converted to RegExp). Otherwise return null.
	  pattern: function pattern(val) {
	    return val instanceof Function || val instanceof RegExp ? val : typeof val === 'string' ? new RegExp(val) : null;
	  }
	};
	
	function getJSON(url) {
	  var request = new window.XMLHttpRequest();
	  var data = {};
	  // p (-simulated- promise)
	  var p = {
	    then: function then(fn1, fn2) {
	      return p.done(fn1).fail(fn2);
	    },
	    catch: function _catch(fn) {
	      return p.fail(fn);
	    },
	    always: function always(fn) {
	      return p.done(fn).fail(fn);
	    }
	  };
	  ['done', 'fail'].forEach(function (name) {
	    data[name] = [];
	    p[name] = function (fn) {
	      if (fn instanceof Function) data[name].push(fn);
	      return p;
	    };
	  });
	  p.done(JSON.parse);
	  request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	      var e = { status: request.status };
	      if (request.status === 200) {
	        try {
	          var response = request.responseText;
	          for (var i in data.done) {
	            var value = data.done[i](response);
	            if (value !== undefined) {
	              response = value;
	            }
	          }
	        } catch (err) {
	          data.fail.forEach(function (fail) {
	            return fail(err);
	          });
	        }
	      } else {
	        data.fail.forEach(function (fail) {
	          return fail(e);
	        });
	      }
	    }
	  };
	  request.open('GET', url);
	  request.setRequestHeader('Accept', 'application/json');
	  request.send();
	  return p;
	}
	
	function getScrollBarWidth() {
	  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	    return 0;
	  }
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	}
	
	// return all the translations or the default language (english)
	function translations() {
	  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
	
	  var text = {
	    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    limit: 'Limit reached ({{limit}} items max).',
	    loading: 'Loading...',
	    minLength: 'Min. Length',
	    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    notSelected: 'Nothing Selected',
	    required: 'Required',
	    search: 'Search',
	    selected: '{{count}} selected'
	  };
	  return window.VueStrapLang ? window.VueStrapLang(lang) : text;
	}
	
	// delayer: set a function that execute after a delay
	// @params (function, delay_prop or value, default_value)
	function delayer(fn, varTimer) {
	  var ifNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	
	  function toInt(el) {
	    return (/^[0-9]+$/.test(el) ? Number(el) || 1 : null
	    );
	  }
	  var timerId;
	  return function () {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (timerId) clearTimeout(timerId);
	    timerId = setTimeout(function () {
	      fn.apply(_this, args);
	    }, toInt(varTimer) || toInt(this[varTimer]) || ifNaN);
	  };
	}
	
	// Fix a vue instance Lifecycle to vue 1/2 (just the basic elements, is not a real parser, so this work only if your code is compatible with both)
	// (Waiting for testing)
	function VueFixer(vue) {
	  var vue2 = !window.Vue || !window.Vue.partial;
	  var mixin = {
	    computed: {
	      vue2: function vue2() {
	        return !this.$dispatch;
	      }
	    }
	  };
	  if (!vue2) {
	    //translate vue2 attributes to vue1
	    if (vue.beforeCreate) {
	      mixin.create = vue.beforeCreate;
	      delete vue.beforeCreate;
	    }
	    if (vue.beforeMount) {
	      vue.beforeCompile = vue.beforeMount;
	      delete vue.beforeMount;
	    }
	    if (vue.mounted) {
	      vue.ready = vue.mounted;
	      delete vue.mounted;
	    }
	  } else {
	    //translate vue1 attributes to vue2
	    if (vue.beforeCompile) {
	      vue.beforeMount = vue.beforeCompile;
	      delete vue.beforeCompile;
	    }
	    if (vue.compiled) {
	      mixin.compiled = vue.compiled;
	      delete vue.compiled;
	    }
	    if (vue.ready) {
	      vue.mounted = vue.ready;
	      delete vue.ready;
	    }
	  }
	  if (!vue.mixins) {
	    vue.mixins = [];
	  }
	  vue.mixins.unshift(mixin);
	  return vue;
	}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Click outside directive
	 */
	var binded = [];
	
	function handler(e) {
	  binded.forEach(function (el) {
	    if (!el.node.contains(e.target)) el.callback(e);
	  });
	}
	
	function addListener(node, callback) {
	  if (!binded.length) document.addEventListener('click', handler, false);
	  binded.push({ node: node, callback: callback });
	}
	
	function removeListener(node, callback) {
	  binded = binded.filter(function (el) {
	    return el.node !== node ? true : !callback ? false : el.callback !== callback;
	  });
	  if (!binded.length) document.removeEventListener('click', handler, false);
	}
	
	exports.default = {
	  bind: function bind(el, binding) {
	    removeListener(el, binding.value);
	    if (typeof binding.value !== 'function') {
	      if (process.env.NODE_ENV !== 'production') {
	        Vue.util.warn('ClickOutside only work with a function, received: v-' + binding.name + '="' + binding.expression + '"');
	      }
	    } else {
	      addListener(el, binding.value);
	    }
	  },
	  update: function update(el, binding) {
	    if (binding.value !== binding.oldValue) {
	      removeListener(el, binding.oldValue);
	      addListener(el, binding.value);
	    }
	  },
	  unbind: function unbind(el, binding) {
	    removeListener(el, binding.value);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
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
	    var timeout = runTimeout(cleanUpNextTick);
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
	    runClearTimeout(timeout);
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
	        runTimeout(drainQueue);
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
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Click outside directive
	 */
	var HANDLER = '_vue_scroll_handler';
	var events = ['resize', 'scroll'];
	
	function bind(el, binding) {
	  unbind(el);
	
	  var callback = binding.value;
	  if (typeof callback !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      Vue.util.warn('ClickOutside only work with a function value, received: v-' + binding.name + '="' + binding.expression + '"');
	    }
	  } else {
	    el[HANDLER] = function (e) {
	      callback(e);
	    };
	    events.forEach(function (e) {
	      window.addEventListener(e, el[HANDLER], false);
	    });
	    document.addEventListener('load', el[HANDLER], false);
	    setTimeout(function () {
	      el[HANDLER]();
	    }, 0);
	  }
	}
	
	function unbind(el) {
	  events.forEach(function (e) {
	    window.removeEventListener(e, el[HANDLER], false);
	  });
	  document.removeEventListener('load', el[HANDLER], false);
	  delete el[HANDLER];
	}
	
	exports.default = {
	  bind: bind,
	  unbind: unbind,
	  update: function update(el, binding) {
	    if (binding.value !== binding.oldValue) bind(el, binding);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(70)
	
	/* template */
	var __vue_template__ = __webpack_require__(71)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Accordion.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6fec6132", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6fec6132", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Accordion.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: null
	    },
	    oneAtAtime: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    openChild: function openChild(child) {
	      if (this.oneAtAtime) {
	        this.$children.forEach(function (item) {
	          if (child !== item) {
	            item.open = false;
	          }
	        });
	      }
	    }
	  },
	  created: function created() {
	    this._isAccordion = true;
	  }
	};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "panel-group"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6fec6132", module.exports)
	  }
	}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(73)
	
	/* template */
	var __vue_template__ = __webpack_require__(74)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Affix.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a5a33a8c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a5a33a8c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Affix.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Scroll = __webpack_require__(68);
	
	var _Scroll2 = _interopRequireDefault(_Scroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  directives: {
	    Scroll: _Scroll2.default
	  },
	  props: {
	    offset: {
	      type: Number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false
	    };
	  },
	
	  computed: {
	    top: function top() {
	      return this.offset > 0 ? this.offset + 'px' : null;
	    }
	  },
	  methods: {
	    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
	    checkScroll: function checkScroll() {
	      // if is hidden don't calculate anything
	      if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
	        return;
	      }
	      // get window scroll and element position to detect if have to be normal or affixed
	      var scroll = {};
	      var element = {};
	      var rect = this.$el.getBoundingClientRect();
	      var body = document.body;
	      var _arr = ['Top', 'Left'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var type = _arr[_i];
	        var t = type.toLowerCase();
	        var ret = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset'];
	        var method = 'scroll' + type;
	        if (typeof ret !== 'number') {
	          // ie6,7,8 standard mode
	          ret = document.documentElement[method];
	          if (typeof ret !== 'number') {
	            // quirks mode
	            ret = document.body[method];
	          }
	        }
	        scroll[t] = ret;
	        element[t] = scroll[t] + rect[t] - (this.$el['client' + type] || body['client' + type] || 0);
	      }
	      var fix = scroll.top > element.top - this.offset;
	      if (this.affixed !== fix) {
	        this.affixed = fix;
	      }
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "hidden-print hidden-xs hidden-sm"
	  }, [_c('nav', {
	    directives: [{
	      name: "scroll",
	      rawName: "v-scroll",
	      value: (_vm.checkScroll),
	      expression: "checkScroll"
	    }],
	    staticClass: "bs-docs-sidebar",
	    class: {
	      affix: _vm.affixed
	    },
	    style: ({
	      marginTop: _vm.top
	    })
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a5a33a8c", module.exports)
	  }
	}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(76)
	
	/* script */
	__vue_exports__ = __webpack_require__(80)
	
	/* template */
	var __vue_template__ = __webpack_require__(81)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Alert.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-129b1774", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-129b1774", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Alert.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-129b1774!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-129b1774!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.fade-enter-active,\r\n.fade-leave-active {\r\n  transition: opacity .3s ease;\n}\n.fade-enter,\r\n.fade-leave-active {\r\n  height: 0;\r\n  opacity: 0;\n}\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\n}\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\n}\r\n", "", {"version":3,"sources":["/./src/Alert.vue?71a91c1a"],"names":[],"mappings":";AAoDA;;EAEA,6BAAA;CACA;AACA;;EAEA,UAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,cAAA;CACA;AACA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,cAAA;CACA","file":"Alert.vue","sourcesContent":["<template>\r\n  <transition name=\"fade\">\r\n    <div v-show=\"val\" :class=\"['alert', 'alert-'+type, placement]\" :style=\"{width:width}\" role=\"alert\">\r\n      <button v-show=\"dismissable\" type=\"button\" class=\"close\" @click=\"val = false\">\r\n        <span>&times;</span>\r\n      </button>\r\n      <slot></slot>\r\n    </div>\r\n  </transition>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, delayer} from './utils/utils.js'\r\n\r\nvar DURATION = 0\r\nexport default {\r\n  props: {\r\n    dismissable: {type: Boolean, default: false},\r\n    duration: {default: DURATION},\r\n    placement: {type: String},\r\n    type: {type: String},\r\n    value: {type: Boolean, default: true },\r\n    width: {type: String}\r\n  },\r\n  data () {\r\n    return {\r\n      val: this.value\r\n    }\r\n  },\r\n  computed: {\r\n    durationNum () { return coerce.number(this.duration, DURATION) }\r\n  },\r\n  watch: {\r\n    val (val) {\r\n      if (val && this.durationNum > 0) { this._delayClose() }\r\n      this.$emit('input', val)\r\n    },\r\n    value (val) {\r\n      if (this.val !== val) {\r\n        this.val = val\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    this._delayClose = delayer(function () {\r\n      this.val = false\r\n    }, 'durationNum')\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.fade-enter-active,\r\n.fade-leave-active {\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave-active {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 78 */
/***/ (function(module, exports) {

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


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
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
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var DURATION = 0; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    dismissable: { type: Boolean, default: false },
	    duration: { default: DURATION },
	    placement: { type: String },
	    type: { type: String },
	    value: { type: Boolean, default: true },
	    width: { type: String }
	  },
	  data: function data() {
	    return {
	      val: this.value
	    };
	  },
	
	  computed: {
	    durationNum: function durationNum() {
	      return _utils.coerce.number(this.duration, DURATION);
	    }
	  },
	  watch: {
	    val: function val(_val) {
	      if (_val && this.durationNum > 0) {
	        this._delayClose();
	      }
	      this.$emit('input', _val);
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  created: function created() {
	    this._delayClose = (0, _utils.delayer)(function () {
	      this.val = false;
	    }, 'durationNum');
	  }
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    class: ['alert', 'alert-' + _vm.type, _vm.placement],
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "role": "alert"
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.dismissable),
	      expression: "dismissable"
	    }],
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.val = false
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _vm._t("default")], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-129b1774", module.exports)
	  }
	}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(83)
	
	/* script */
	__vue_exports__ = __webpack_require__(85)
	
	/* template */
	var __vue_template__ = __webpack_require__(86)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Aside.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ee873bbc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ee873bbc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Aside.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ee873bbc!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ee873bbc!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.aside-open {\r\n  transition: transform 0.3s;\n}\n.aside-open.has-push-right {\r\n  transform: translateX(-300px);\n}\n.aside {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1049;\r\n  overflow: auto;\r\n  background: #fff;\n}\n.aside.left {\r\n  left: 0;\r\n  right: auto;\n}\n.aside.right {\r\n  left: auto;\r\n  right: 0;\n}\n.slideleft-enter {\r\n  transform:translateX(-100%);\n}\n.slideleft-enter-active {\r\n  animation:slideleft-in .3s;\n}\n.slideleft-leave-active {\r\n  animation:slideleft-out .3s;\n}\n@keyframes slideleft-in {\n0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\n}\n100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\n}\n}\n@keyframes slideleft-out {\n0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\n}\n100% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\n}\n}\n.slideright-enter-active {\r\n  animation:slideright-in .3s;\n}\n.slideright-leave-active {\r\n  animation:slideright-out .3s;\n}\n@keyframes slideright-in {\n0% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\n}\n100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\n}\n}\n@keyframes slideright-out {\n0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\n}\n100% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\n}\n}\n.aside:focus {\r\n    outline: 0;\n}\n@media (max-width: 991px) {\n.aside {\r\n    min-width: 240px;\n}\n}\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff;\n}\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8;\n}\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px;\n}\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5;\n}\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\n}\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px;\n}\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0;\n}\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  transition: opacity .3s ease;\r\n  background-color: #000;\n}\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50);\n}\r\n", "", {"version":3,"sources":["/./src/Aside.vue?5739621f"],"names":[],"mappings":";AAkFA;EACA,2BAAA;CACA;AACA;EACA,8BAAA;CACA;AACA;EACA,gBAAA;EACA,OAAA;EACA,UAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;CACA;AACA;EACA,QAAA;EACA,YAAA;CACA;AACA;EACA,WAAA;EACA,SAAA;CACA;AACA;EACA,4BAAA;CACA;AACA;EACA,2BAAA;CACA;AACA;EACA,4BAAA;CACA;AACA;AACA;IACA,6BAAA;IACA,WAAA;CACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;AACA;IACA,6BAAA;IACA,WAAA;CACA;CACA;AACA;EACA,4BAAA;CACA;AACA;EACA,6BAAA;CACA;AACA;AACA;IACA,4BAAA;IACA,WAAA;CACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,yBAAA;IACA,WAAA;CACA;AACA;IACA,4BAAA;IACA,WAAA;CACA;CACA;AACA;IACA,WAAA;CACA;AACA;AACA;IACA,iBAAA;CACA;CACA;AACA;EACA,iCAAA;EACA,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,cAAA;CACA;AACA;EACA,cAAA;EACA,kBAAA;EACA,8BAAA;CACA;AACA;EACA,iBAAA;EACA,iBAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,eAAA;CACA;AACA;EACA,gBAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,cAAA;EACA,WAAA;EACA,6BAAA;EACA,uBAAA;CACA;AACA;EACA,YAAA;EACA,0BAAA;CACA","file":"Aside.vue","sourcesContent":["<template>\r\n  <transition :name=\"'slide' + placement\">\r\n    <div class=\"aside\" v-if=\"show\" :style=\"{width:width+'px'}\" :class=\"placement\">\r\n      <div class=\"aside-dialog\">\r\n        <div class=\"aside-content\">\r\n          <div class=\"aside-header\">\r\n            <button type=\"button\" class=\"close\" @click='trigger_close'><span>&times;</span></button>\r\n            <h4 class=\"aside-title\"><slot name=\"header\">{{ header }}</slot></h4>\r\n          </div>\r\n          <div class=\"aside-body\"><slot></slot></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </transition>\r\n</template>\r\n\r\n<script>\r\nimport {getScrollBarWidth} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    header: {type: String},\r\n    placement: {type: String, default: 'right'},\r\n    show: {type: Boolean, required: true},\r\n    width: {type: Number, default: 320}\r\n  },\r\n  watch: {\r\n    show (val, old) {\r\n      this.$emit('input', val)\r\n      this.$emit(this.show ? 'open' : 'close')\r\n      const body = document.body\r\n      const scrollBarWidth = getScrollBarWidth()\r\n      if (val) {\r\n        if (!this._backdrop) {\r\n          this._backdrop = document.createElement('div')\r\n        }\r\n        this._backdrop.className = 'aside-backdrop'\r\n        body.appendChild(this._backdrop)\r\n        body.classList.add('modal-open')\r\n        if (scrollBarWidth !== 0) {\r\n          body.style.paddingRight = scrollBarWidth + 'px'\r\n        }\r\n        // request property that requires layout to force a layout\r\n        var x = this._backdrop.clientHeight\r\n        this._backdrop.classList.add('in')\r\n        $(this._backdrop).on('click', () => this.trigger_close())\r\n      } else {\r\n        $(this._backdrop).on('transitionend', () => {\r\n          $(this._backdrop).off()\r\n          try {\r\n            body.classList.remove('modal-open')\r\n            body.style.paddingRight = '0'\r\n            body.removeChild(this._backdrop)\r\n            this._backdrop = null\r\n          } catch (e) {}\r\n        })\r\n        this._backdrop.className = 'aside-backdrop'\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    trigger () {\r\n      return {\r\n        close: () => this.trigger_close(),\r\n        open: () => this.trigger_open()\r\n      }\r\n    },\r\n    trigger_close () {\r\n      this.$emit( 'close' )\r\n    },\r\n    trigger_open() {\r\n      this.$emit( 'open' )\r\n    }\r\n  },\r\n  mounted () {\r\n    this.$emit('trigger', () => this.trigger)\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.aside-open {\r\n  transition: transform 0.3s;\r\n}\r\n.aside-open.has-push-right {\r\n  transform: translateX(-300px);\r\n}\r\n.aside {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1049;\r\n  overflow: auto;\r\n  background: #fff;\r\n}\r\n.aside.left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.aside.right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.slideleft-enter {\r\n  transform:translateX(-100%);\r\n}\r\n.slideleft-enter-active {\r\n  animation:slideleft-in .3s;\r\n}\r\n.slideleft-leave-active {\r\n  animation:slideleft-out .3s;\r\n}\r\n@keyframes slideleft-in {\r\n  0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideleft-out {\r\n  0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.slideright-enter-active {\r\n  animation:slideright-in .3s;\r\n}\r\n.slideright-leave-active {\r\n  animation:slideright-out .3s;\r\n}\r\n@keyframes slideright-in {\r\n  0% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideright-out {\r\n  0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.aside:focus {\r\n    outline: 0;\r\n}\r\n@media (max-width: 991px) {\r\n  .aside {\r\n    min-width: 240px;\r\n  }\r\n}\r\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff;\r\n}\r\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8;\r\n}\r\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px;\r\n}\r\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5;\r\n}\r\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0;\r\n}\r\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px;\r\n}\r\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0;\r\n}\r\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  transition: opacity .3s ease;\r\n  background-color: #000;\r\n}\r\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50);\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    header: { type: String },
	    placement: { type: String, default: 'right' },
	    show: { type: Boolean, required: true },
	    width: { type: Number, default: 320 }
	  },
	  watch: {
	    show: function show(val, old) {
	      var _this = this;
	
	      this.$emit('input', val);
	      this.$emit(this.show ? 'open' : 'close');
	      var body = document.body;
	      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
	      if (val) {
	        if (!this._backdrop) {
	          this._backdrop = document.createElement('div');
	        }
	        this._backdrop.className = 'aside-backdrop';
	        body.appendChild(this._backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = this._backdrop.clientHeight;
	        this._backdrop.classList.add('in');
	        (0, _NodeList2.default)(this._backdrop).on('click', function () {
	          return _this.trigger_close();
	        });
	      } else {
	        (0, _NodeList2.default)(this._backdrop).on('transitionend', function () {
	          (0, _NodeList2.default)(_this._backdrop).off();
	          try {
	            body.classList.remove('modal-open');
	            body.style.paddingRight = '0';
	            body.removeChild(_this._backdrop);
	            _this._backdrop = null;
	          } catch (e) {}
	        });
	        this._backdrop.className = 'aside-backdrop';
	      }
	    }
	  },
	  methods: {
	    trigger: function trigger() {
	      var _this2 = this;
	
	      return {
	        close: function close() {
	          return _this2.trigger_close();
	        },
	        open: function open() {
	          return _this2.trigger_open();
	        }
	      };
	    },
	    trigger_close: function trigger_close() {
	      this.$emit('close');
	    },
	    trigger_open: function trigger_open() {
	      this.$emit('open');
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;
	
	    this.$emit('trigger', function () {
	      return _this3.trigger;
	    });
	  }
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": 'slide' + _vm.placement
	    }
	  }, [(_vm.show) ? _c('div', {
	    staticClass: "aside",
	    class: _vm.placement,
	    style: ({
	      width: _vm.width + 'px'
	    })
	  }, [_c('div', {
	    staticClass: "aside-dialog"
	  }, [_c('div', {
	    staticClass: "aside-content"
	  }, [_c('div', {
	    staticClass: "aside-header"
	  }, [_c('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.trigger_close
	    }
	  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _c('h4', {
	    staticClass: "aside-title"
	  }, [_vm._t("header", [_vm._v(_vm._s(_vm.header))])], 2)]), _vm._v(" "), _c('div', {
	    staticClass: "aside-body"
	  }, [_vm._t("default")], 2)])])]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ee873bbc", module.exports)
	  }
	}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(88)
	
	/* template */
	var __vue_template__ = __webpack_require__(89)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\buttonGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ca876912", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ca876912", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] buttonGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    buttons: { type: Boolean, default: true },
	    disabled: { type: Boolean, default: false },
	    justified: { type: Boolean, default: false },
	    type: { type: String, default: 'default' },
	    value: { default: null },
	    vertical: { type: Boolean, default: false }
	  },
	  computed: {
	    btnGroup: function btnGroup() {
	      return !this.disabled;
	    }
	  },
	  data: function data() {
	    return {
	      val: this.value
	    };
	  },
	
	  watch: {
	    // this will update EXTERNAL v-model when our val changes
	    val: function val(_val) {
	      this.$emit('input', _val);
	    },
	
	    // this will update our INTERNAL val, when something external changes our v-model
	    value: function value(val) {
	      this.val = val;
	    }
	  }
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: {
	      'btn-group': _vm.buttons, 'btn-group-justified': _vm.justified, 'btn-group-vertical': _vm.vertical
	    },
	    attrs: {
	      "data-toggle": _vm.buttons && 'buttons'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ca876912", module.exports)
	  }
	}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(91)
	
	/* script */
	__vue_exports__ = __webpack_require__(93)
	
	/* template */
	var __vue_template__ = __webpack_require__(94)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Carousel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-49bca466"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-49bca466", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-49bca466", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Carousel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-49bca466&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-49bca466&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.carousel-control[data-v-49bca466] {\r\n  cursor: pointer;\n}\r\n", "", {"version":3,"sources":["/./src/Carousel.vue?2f446342"],"names":[],"mappings":";AA4GA;EACA,gBAAA;CACA","file":"Carousel.vue","sourcesContent":["<template>\r\n<div class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\" v-show=\"indicators\">\r\n    <li v-for=\"(indicator,i) in indicator_list\" @click=\"indicatorClick(i)\" :class=\"{active:i === index}\"><span></span></li>\r\n  </ol>\r\n  <!-- Wrapper for slides -->\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <slot></slot>\r\n  </div>\r\n  <!-- Controls -->\r\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\">\r\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n    </a>\r\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n</div>\r\n</template>\r\n\r\n<script>\r\nimport $ from './utils/NodeList.js'\r\n// let coerce = {\r\n//   interval: 'number'\r\n// }\r\n\r\nexport default {\r\n  props: {\r\n    indicators: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    controls: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    interval: {\r\n      type: Number,\r\n      default: 5000\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      indicator_list: [],\r\n      index: 0,\r\n      isAnimating: false\r\n    }\r\n  },\r\n  watch: {\r\n    index (newVal, oldVal) {\r\n      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal)\r\n    }\r\n  },\r\n  methods: {\r\n    indicatorClick (index) {\r\n      if (this.isAnimating || this.index === index) return false\r\n      this.isAnimating = true\r\n      this.index = index\r\n    },\r\n    slide (direction, next, prev) {\r\n      if (!this.$el) { return }\r\n      const $slider = $('.item', this.$el)\r\n      if (!$slider.length) { return }\r\n      const selected = $slider[next] || $slider[0]\r\n      $(selected).addClass(direction === 'left' ? 'next' : 'prev')\r\n      // request property that requires layout to force a layout\r\n      var x = selected.clientHeight\r\n      $([$slider[prev], selected]).addClass(direction).on('transitionend', () => {\r\n        $slider.off('transitionend').className = 'item'\r\n        $(selected).addClass('active')\r\n        this.isAnimating = false\r\n      })\r\n    },\r\n    next () {\r\n      if (!this.$el || this.isAnimating) { return false }\r\n      this.isAnimating = true\r\n      this.index + 1 < $('.item', this.$el).length ? this.index += 1 : this.index = 0\r\n    },\r\n    prev () {\r\n      if (!this.$el || this.isAnimating) { return false }\r\n      this.isAnimating = true\r\n      this.index === 0 ? this.index = $('.item', this.$el).length - 1 : this.index -= 1\r\n    },\r\n    toggleInterval (val) {\r\n      if (val === undefined) { val = this._intervalID }\r\n      if(this._intervalID) {\r\n        clearInterval(this._intervalID)\r\n        delete this._intervalID\r\n      }\r\n      if(val && this.interval > 0) {\r\n        this._intervalID = setInterval(this.next, this.interval)\r\n      }\r\n    }\r\n  },\r\n  mounted () {\r\n    this.toggleInterval(true)\r\n    $(this.$el).on('mouseenter', () => this.toggleInterval(false)).on('mouseleave', () => this.toggleInterval(true))\r\n  },\r\n  beforeDestroy () {\r\n    this.toggleInterval(false)\r\n    $(this.$el).off('mouseenter mouseleave')\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.carousel-control {\r\n  cursor: pointer;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// let coerce = {
	//   interval: 'number'
	// }
	
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      default: 5000
	    }
	  },
	  data: function data() {
	    return {
	      indicator_list: [],
	      index: 0,
	      isAnimating: false
	    };
	  },
	
	  watch: {
	    index: function index(newVal, oldVal) {
	      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
	    }
	  },
	  methods: {
	    indicatorClick: function indicatorClick(index) {
	      if (this.isAnimating || this.index === index) return false;
	      this.isAnimating = true;
	      this.index = index;
	    },
	    slide: function slide(direction, next, prev) {
	      var _this = this;
	
	      if (!this.$el) {
	        return;
	      }
	      var $slider = (0, _NodeList2.default)('.item', this.$el);
	      if (!$slider.length) {
	        return;
	      }
	      var selected = $slider[next] || $slider[0];
	      (0, _NodeList2.default)(selected).addClass(direction === 'left' ? 'next' : 'prev');
	      // request property that requires layout to force a layout
	      var x = selected.clientHeight;
	      (0, _NodeList2.default)([$slider[prev], selected]).addClass(direction).on('transitionend', function () {
	        $slider.off('transitionend').className = 'item';
	        (0, _NodeList2.default)(selected).addClass('active');
	        _this.isAnimating = false;
	      });
	    },
	    next: function next() {
	      if (!this.$el || this.isAnimating) {
	        return false;
	      }
	      this.isAnimating = true;
	      this.index + 1 < (0, _NodeList2.default)('.item', this.$el).length ? this.index += 1 : this.index = 0;
	    },
	    prev: function prev() {
	      if (!this.$el || this.isAnimating) {
	        return false;
	      }
	      this.isAnimating = true;
	      this.index === 0 ? this.index = (0, _NodeList2.default)('.item', this.$el).length - 1 : this.index -= 1;
	    },
	    toggleInterval: function toggleInterval(val) {
	      if (val === undefined) {
	        val = this._intervalID;
	      }
	      if (this._intervalID) {
	        clearInterval(this._intervalID);
	        delete this._intervalID;
	      }
	      if (val && this.interval > 0) {
	        this._intervalID = setInterval(this.next, this.interval);
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;
	
	    this.toggleInterval(true);
	    (0, _NodeList2.default)(this.$el).on('mouseenter', function () {
	      return _this2.toggleInterval(false);
	    }).on('mouseleave', function () {
	      return _this2.toggleInterval(true);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.toggleInterval(false);
	    (0, _NodeList2.default)(this.$el).off('mouseenter mouseleave');
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "carousel slide",
	    attrs: {
	      "data-ride": "carousel"
	    }
	  }, [_c('ol', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.indicators),
	      expression: "indicators"
	    }],
	    staticClass: "carousel-indicators"
	  }, _vm._l((_vm.indicator_list), function(indicator, i) {
	    return _c('li', {
	      class: {
	        active: i === _vm.index
	      },
	      on: {
	        "click": function($event) {
	          _vm.indicatorClick(i)
	        }
	      }
	    }, [_c('span')])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "carousel-inner",
	    attrs: {
	      "role": "listbox"
	    }
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.controls),
	      expression: "controls"
	    }],
	    staticClass: "carousel-controls hidden-xs"
	  }, [_c('a', {
	    staticClass: "left carousel-control",
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "click": _vm.prev
	    }
	  }, [_c('span', {
	    staticClass: "glyphicon glyphicon-chevron-left",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })]), _vm._v(" "), _c('a', {
	    staticClass: "right carousel-control",
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "click": _vm.next
	    }
	  }, [_c('span', {
	    staticClass: "glyphicon glyphicon-chevron-right",
	    attrs: {
	      "aria-hidden": "true"
	    }
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-49bca466", module.exports)
	  }
	}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(96)
	
	/* script */
	__vue_exports__ = __webpack_require__(98)
	
	/* template */
	var __vue_template__ = __webpack_require__(99)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-fe9d156e"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-fe9d156e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-fe9d156e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Checkbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(97);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fe9d156e&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fe9d156e&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\nlabel.checkbox[data-v-fe9d156e] {\r\n  position: relative;\r\n  padding-left: 18px;\n}\nlabel.checkbox > input[data-v-fe9d156e] {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\n}\nlabel.checkbox > .icon[data-v-fe9d156e] {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\n}\nlabel.checkbox:not(.active) > .icon[data-v-fe9d156e] {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\n}\nlabel.checkbox > input:focus ~ .icon[data-v-fe9d156e] {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\nlabel.checkbox.active > .icon[data-v-fe9d156e] {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\n}\nlabel.checkbox.active .btn-default[data-v-fe9d156e] { filter: brightness(75%);\n}\nlabel.checkbox.disabled[data-v-fe9d156e],\r\nlabel.checkbox.readonly[data-v-fe9d156e],\r\n.btn.readonly[data-v-fe9d156e] {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\n}\nlabel.btn > input[type=checkbox][data-v-fe9d156e] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\n}\r\n", "", {"version":3,"sources":["/./src/Checkbox.vue?58a1e5c4"],"names":[],"mappings":";AAuFA;EACA,mBAAA;EACA,mBAAA;CACA;AACA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,WAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,kZAAA;CACA;AACA,sDAAA,wBAAA;CAAA;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Checkbox.vue","sourcesContent":["<template>\r\n  <a :is=\"isButton?'a':'label'\" @click=\"toggle\" :class=\"[isButton?'btn btn-'+typeColor:'open checkbox '+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\">\r\n    <input v-if=\"name\" type=\"hidden\" :name=\"name\" :value=\"checked?trueValue:falseValue\" />\r\n    <span v-if=\"!isButton\" class=\"icon dropdown-toggle\" :class=\"[checked?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n    <span v-if=\"!isButton&&checked&&typeColor==='default'\" class=\"icon\"></span>\r\n    <slot></slot>\r\n  </a>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    button: {type: Boolean, default: false},\r\n    disabled: {type: Boolean, default: false},\r\n    falseValue: {default: false},\r\n    name: {type: String, default: null},\r\n    readonly: {type: Boolean, default: false},\r\n    trueValue: {default: true},\r\n    type: {type: String, default: null},\r\n    value: {default: false}\r\n  },\r\n  data () {\r\n    return {\r\n      checked: (this.value === this.trueValue)\r\n    }\r\n  },\r\n  computed: {\r\n    inGroup () { return this.$parent && this.$parent.btnGroup && !this.$parent._radioGroup },\r\n    isButton () { return this.button || (this.$parent && this.$parent.btnGroup && this.$parent.buttons) },\r\n    isFalse () { return this.value === this.falseValue },\r\n    isTrue () { return this.value === this.trueValue },\r\n    parentValue () { return this.$parent.val },\r\n    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }\r\n  },\r\n  watch: {\r\n    checked (val, old) {\r\n      var value = val ? this.trueValue : this.falseValue\r\n      this.$emit('checked', val)\r\n      this.$emit('input', value);\r\n      this.updateParent()\r\n    },\r\n    parentValue (val) {\r\n      this.updateFromParent();\r\n    },\r\n    value (val, old) {\r\n      var checked = val === this.trueValue\r\n      if (this.checked !== checked) {\r\n        this.checked = checked\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    if (this.inGroup) {\r\n      const parent = this.$parent\r\n      parent._checkboxGroup = true\r\n      if (!(parent.val instanceof Array)) { parent.val = [] }\r\n    }\r\n  },\r\n  mounted () {\r\n    this.updateFromParent();\r\n  },\r\n  methods: {\r\n    // called @ mounted(), or whenever $parent.val changes\r\n    // sync our state with the $parent.val\r\n    updateFromParent() {\r\n      if (this.inGroup) {\r\n        var index = this.$parent.val.indexOf(this.trueValue)\r\n        this.checked = ~index\r\n      }\r\n    },\r\n    // called when our checked state changes\r\n    updateParent() {\r\n      if (this.inGroup) {\r\n        var index = this.$parent.val.indexOf(this.trueValue)\r\n        if (this.checked && !~index) this.$parent.val.push(this.trueValue)\r\n        if (!this.checked && ~index) this.$parent.val.splice(index, 1)\r\n      }\r\n    },\r\n    toggle () {\r\n      if (this.disabled || this.readonly) { return }\r\n      this.checked = !this.checked\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\nlabel.checkbox {\r\n  position: relative;\r\n  padding-left: 18px;\r\n}\r\nlabel.checkbox > input {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\nlabel.checkbox > .icon {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\nlabel.checkbox:not(.active) > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\nlabel.checkbox > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\nlabel.checkbox.active > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\r\n}\r\nlabel.checkbox.active .btn-default { filter: brightness(75%); }\r\n\r\nlabel.checkbox.disabled,\r\nlabel.checkbox.readonly,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=checkbox] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    button: { type: Boolean, default: false },
	    disabled: { type: Boolean, default: false },
	    falseValue: { default: false },
	    name: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    trueValue: { default: true },
	    type: { type: String, default: null },
	    value: { default: false }
	  },
	  data: function data() {
	    return {
	      checked: this.value === this.trueValue
	    };
	  },
	
	  computed: {
	    inGroup: function inGroup() {
	      return this.$parent && this.$parent.btnGroup && !this.$parent._radioGroup;
	    },
	    isButton: function isButton() {
	      return this.button || this.$parent && this.$parent.btnGroup && this.$parent.buttons;
	    },
	    isFalse: function isFalse() {
	      return this.value === this.falseValue;
	    },
	    isTrue: function isTrue() {
	      return this.value === this.trueValue;
	    },
	    parentValue: function parentValue() {
	      return this.$parent.val;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    checked: function checked(val, old) {
	      var value = val ? this.trueValue : this.falseValue;
	      this.$emit('checked', val);
	      this.$emit('input', value);
	      this.updateParent();
	    },
	    parentValue: function parentValue(val) {
	      this.updateFromParent();
	    },
	    value: function value(val, old) {
	      var checked = val === this.trueValue;
	      if (this.checked !== checked) {
	        this.checked = checked;
	      }
	    }
	  },
	  created: function created() {
	    if (this.inGroup) {
	      var parent = this.$parent;
	      parent._checkboxGroup = true;
	      if (!(parent.val instanceof Array)) {
	        parent.val = [];
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.updateFromParent();
	  },
	
	  methods: {
	    // called @ mounted(), or whenever $parent.val changes
	    // sync our state with the $parent.val
	    updateFromParent: function updateFromParent() {
	      if (this.inGroup) {
	        var index = this.$parent.val.indexOf(this.trueValue);
	        this.checked = ~index;
	      }
	    },
	
	    // called when our checked state changes
	    updateParent: function updateParent() {
	      if (this.inGroup) {
	        var index = this.$parent.val.indexOf(this.trueValue);
	        if (this.checked && !~index) this.$parent.val.push(this.trueValue);
	        if (!this.checked && ~index) this.$parent.val.splice(index, 1);
	      }
	    },
	    toggle: function toggle() {
	      if (this.disabled || this.readonly) {
	        return;
	      }
	      this.checked = !this.checked;
	    }
	  }
	};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c(_vm.isButton ? 'a' : 'label', {
	    tag: "a",
	    class: [_vm.isButton ? 'btn btn-' + _vm.typeColor : 'open checkbox ' + _vm.typeColor, {
	      active: _vm.checked,
	      disabled: _vm.disabled,
	      readonly: _vm.readonly
	    }],
	    on: {
	      "click": _vm.toggle
	    }
	  }, [(_vm.name) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.checked ? _vm.trueValue : _vm.falseValue
	    }
	  }) : _vm._e(), _vm._v(" "), (!_vm.isButton) ? _c('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [_vm.checked ? 'btn-' + _vm.typeColor : '', {
	      bg: _vm.typeColor === 'default'
	    }]
	  }) : _vm._e(), _vm._v(" "), (!_vm.isButton && _vm.checked && _vm.typeColor === 'default') ? _c('span', {
	    staticClass: "icon"
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-fe9d156e", module.exports)
	  }
	}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(101)
	
	/* script */
	__vue_exports__ = __webpack_require__(103)
	
	/* template */
	var __vue_template__ = __webpack_require__(104)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Datepicker.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9395617c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9395617c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Datepicker.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9395617c!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9395617c!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.datepicker {\r\n  position: relative;\r\n  display: inline-block;\n}\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\n}\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\n}\n.datepicker > button.close:focus {\r\n  opacity: .2;\n}\n.datepicker-popup {\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\n}\n.datepicker-inner {\r\n  width: 218px;\n}\n.datepicker-body {\r\n  padding: 10px 10px;\n}\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span {\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n  color: rgb(125, 125, 125);\n}\n.datepicker-ctrl p {\r\n  width: 65%;\n}\n.datepicker-ctrl span {\r\n  position: absolute;\n}\n.datepicker-body span {\r\n  text-align: center;\n}\n.datepicker-monthRange span {\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\n}\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\n}\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray {\r\n  color: #999;\n}\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white !important;\n}\n.datepicker-monthRange {\r\n  margin-top: 10px\n}\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\n}\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\n}\n.datepicker-weekRange span {\r\n  font-weight: bold;\n}\n.datepicker-label {\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\n}\n.datepicker-ctrl {\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\n}\n.month-btn {\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\n}\n.datepicker-preBtn {\r\n  left: 2px;\n}\n.datepicker-nextBtn {\r\n  right: 2px;\n}\r\n", "", {"version":3,"sources":["/./src/Datepicker.vue?025a5c65"],"names":[],"mappings":";AAgXA;EACA,mBAAA;EACA,sBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,yCAAA;CACA;AACA;EACA,aAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;;;EAGA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,0BAAA;CACA;AACA;EACA,WAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;CACA;AACA;EACA,kCAAA;EACA,8BAAA;CACA;AACA;;;;EAIA,YAAA;CACA;AAEA;;EAEA,wCAAA;EACA,wBAAA;CACA;AAEA;EACA,gBAAA;CACA;AACA;;;;EAIA,gBAAA;CACA;AACA;;;;;EAKA,2BAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,WAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\r\n  <div class=\"datepicker btn-group btn-group-justified\">\r\n    <input class=\"form-control datepicker-input\" type=\"text\"\r\n      v-model=\"val\"\r\n      :class=\"{'with-reset-button': clearButton}\"\r\n      :name=\"name\"\r\n      :placeholder=\"placeholder\"\r\n      :style=\"{width:width}\"\r\n      @click=\"inputClick\"\r\n    />\r\n    <button v-if=\"clearButton&&val\" type=\"button\" class=\"close\" @click=\"val = ''\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span :class=\"preBtnClasses\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\r\n            <span :class=\"nextBtnClasses\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\r\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-weekRange\">\r\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\r\n          </div>\r\n          <div class=\"datepicker-dateRange\">\r\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d)\">{{d.text}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span :class=\"preBtnClasses\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\r\n            <span :class=\"nextBtnClasses\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\r\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange\">\r\n            <template v-for=\"(m, index) in text.months\">\r\n              <span v-text=\"m.substr(0,3)\"\r\n                :class=\"{'datepicker-dateRange-item-active':\r\n                  (text.months[parse(val).getMonth()] === m) &&\r\n                  currDate.getFullYear() === parse(val).getFullYear()}\"\r\n                @click=\"monthSelect(index)\"></span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span :class=\"preBtnClasses\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\r\n            <span :class=\"nextBtnClasses\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\r\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange decadeRange\">\r\n            <template v-for=\"decade in decadeRange\">\r\n              <span :class=\"{'datepicker-dateRange-item-active':parse(val).getFullYear() === decade.text}\"\r\n                v-text=\"decade.text\"\r\n                @click.stop=\"yearSelect(decade.text)\"></span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {translations} from './utils/utils.js'\r\n// import $ from './utils/NodeList.js'\r\n\r\nexport default {\r\n  props: {\r\n    value: {type: String},\r\n    format: {default: 'yyyy.MM.dd'},\r\n    disabledDaysOfWeek: {type: Array, default () { return [] }},\r\n    width: {type: String},\r\n    clearButton: {type: Boolean, default: false},\r\n    lang: {type: String, default: navigator.language},\r\n    name: {type: String},\r\n    placeholder: {type: String},\r\n    iconsFont: {type: String, default: 'glyphicon'},\r\n    required: {type: Boolean, default: null},\r\n  },\r\n  data () {\r\n    return {\r\n      currDate: new Date(),\r\n      dateRange: [],\r\n      decadeRange: [],\r\n      displayDayView: false,\r\n      displayMonthView: false,\r\n      displayYearView: false,\r\n      val: this.value,\r\n      valid: null\r\n    }\r\n  },\r\n  watch: {\r\n    currDate () {\r\n      this.getDateRange()\r\n    },\r\n    format () {\r\n      this.val = this.stringify(this.currDate)\r\n    },\r\n    val (val, old) {\r\n      this.$emit('input', val);\r\n      this.valid = this.validate();     \r\n    },\r\n    value (val) {\r\n      if (this.val !== val) { this.val = val }    \r\n    },\r\n    valid (val, old) {\r\n      this.$emit('isvalid', val)\r\n      this.$emit(!val ? 'invalid' : 'valid')\r\n      if (this._parent) this._parent.validate();\r\n    },\r\n  },\r\n  computed: {\r\n    text () {\r\n      return translations(this.lang)\r\n    },\r\n    preBtnClasses () {\r\n      return `datepicker-preBtn ${this.iconsFont} ${this.iconsFont}-chevron-left`\r\n    },\r\n    nextBtnClasses () {\r\n      return `datepicker-nextBtn ${this.iconsFont} ${this.iconsFont}-chevron-right`\r\n    },\r\n    disabledDaysArray () {\r\n      return this.disabledDaysOfWeek.map(d => parseInt(d, 10))\r\n    }\r\n  },\r\n  methods: {\r\n    validate () {\r\n      if(this.required){\r\n        if(this.val === \"\") return false;\r\n        return moment(this.val, this.format.toUpperCase()).isValid()\r\n      }\r\n      return true;\r\n    },\r\n    close () {\r\n      this.displayDayView = this.displayMonthView = this.displayYearView = false\r\n    },\r\n    inputClick () {\r\n      this.currDate = this.parse(this.val) || this.parse(new Date())\r\n      if (this.displayMonthView || this.displayYearView) {\r\n        this.displayDayView = false\r\n      } else {\r\n        this.displayDayView = !this.displayDayView\r\n      }\r\n    },\r\n    preNextDecadeClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const months = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        this.currDate = new Date(year - 10, months, date)\r\n      } else {\r\n        this.currDate = new Date(year + 10, months, date)\r\n      }\r\n    },\r\n    preNextMonthClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const month = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        const preMonth = this.getYearMonth(year, month - 1)\r\n        this.currDate = new Date(preMonth.year, preMonth.month, date)\r\n      } else {\r\n        const nextMonth = this.getYearMonth(year, month + 1)\r\n        this.currDate = new Date(nextMonth.year, nextMonth.month, date)\r\n      }\r\n    },\r\n    preNextYearClick (flag) {\r\n      const year = this.currDate.getFullYear()\r\n      const months = this.currDate.getMonth()\r\n      const date = this.currDate.getDate()\r\n\r\n      if (flag === 0) {\r\n        this.currDate = new Date(year - 1, months, date)\r\n      } else {\r\n        this.currDate = new Date(year + 1, months, date)\r\n      }\r\n    },\r\n    yearSelect (year) {\r\n      this.displayYearView = false\r\n      this.displayMonthView = true\r\n      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())\r\n    },\r\n    daySelect (day) {\r\n      if (day.sclass === 'datepicker-item-disable') {\r\n        return false\r\n      } else {\r\n        this.currDate = day.date\r\n        this.val = this.stringify(this.currDate)\r\n        this.displayDayView = false\r\n      }\r\n    },\r\n    switchMonthView () {\r\n      this.displayDayView = false\r\n      this.displayMonthView = true\r\n    },\r\n    switchDecadeView () {\r\n      this.displayMonthView = false\r\n      this.displayYearView = true\r\n    },\r\n    monthSelect (index) {\r\n      this.displayMonthView = false\r\n      this.displayDayView = true\r\n      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())\r\n    },\r\n    getYearMonth (year, month) {\r\n      if (month > 11) {\r\n        year++\r\n        month = 0\r\n      } else if (month < 0) {\r\n        year--\r\n        month = 11\r\n      }\r\n      return {year: year, month: month}\r\n    },\r\n    stringifyDecadeHeader (date) {\r\n      const yearStr = date.getFullYear().toString()\r\n      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0\r\n      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10\r\n      return firstYearOfDecade + '-' + lastYearOfDecade\r\n    },\r\n    stringifyDayHeader (date) {\r\n      return this.text.months[date.getMonth()] + ' ' + date.getFullYear()\r\n    },\r\n    parseMonth (date) {\r\n      return this.text.months[date.getMonth()]\r\n    },\r\n    stringifyYearHeader (date) {\r\n      return date.getFullYear()\r\n    },\r\n    stringify (date, format = this.format) {\r\n      if (!date) date = this.parse()\r\n      if (!date) return ''\r\n      const year = date.getFullYear()\r\n      const month = date.getMonth() + 1\r\n      const day = date.getDate()\r\n      const monthName = this.parseMonth(date)\r\n      return format\r\n        .replace(/yyyy/g, year)\r\n        .replace(/yy/g, year)\r\n        .replace(/MMMM/g, monthName)\r\n        .replace(/MMM/g, monthName.substring(0, 3))\r\n        .replace(/MM/g, ('0' + month).slice(-2))\r\n        .replace(/M(?!a)/g, month)\r\n        .replace(/dd/g, ('0' + day).slice(-2))\r\n        .replace(/d/g, day)\r\n    },\r\n    parse (str) {\r\n      if (str === undefined || str === null) { str = this.val }\r\n\t    /*if(str !=== undefined)\r\n      {\r\n        let date = str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy' || this.format === 'dd.MM.yyyy') ?\r\n        new Date(str.substring(6, 10), str.substring(3, 5)-1, str.substring(0, 2)) :\r\n        new Date(str)\r\n        return isNaN(date.getFullYear()) ? new Date() : date\r\n      }*/\r\n      if(str !== undefined && str !== \"\")\r\n        return new Date(str);\r\n      else\r\n        return new Date();\r\n    },\r\n    getDayCount (year, month) {\r\n      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\r\n      if (month === 1) {\r\n        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {\r\n          return 29\r\n        }\r\n      }\r\n      return dict[month]\r\n    },\r\n    getDateRange () {\r\n      this.dateRange = []\r\n      this.decadeRange = []\r\n      const time = {\r\n        year: this.currDate.getFullYear(),\r\n        month: this.currDate.getMonth(),\r\n        day: this.currDate.getDate()\r\n      }\r\n      const yearStr = time.year.toString()\r\n      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1\r\n      for (let i = 0; i < 12; i++) {\r\n        this.decadeRange.push({\r\n          text: firstYearOfDecade + i\r\n        })\r\n      }\r\n\r\n      const currMonthFirstDay = new Date(time.year, time.month, 1)\r\n      let firstDayWeek = currMonthFirstDay.getDay() + 1\r\n      if (firstDayWeek === 0) {\r\n        firstDayWeek = 7\r\n      }\r\n      const dayCount = this.getDayCount(time.year, time.month)\r\n      if (firstDayWeek > 1) {\r\n        const preMonth = this.getYearMonth(time.year, time.month - 1)\r\n        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)\r\n        for (let i = 1; i < firstDayWeek; i++) {\r\n          const dayText = prevMonthDayCount - firstDayWeek + i + 1\r\n          const date = new Date(preMonth.year, preMonth.month, dayText)\r\n          let sclass = 'datepicker-item-gray'\r\n          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {\r\n            sclass = 'datepicker-item-disable'\r\n          }\r\n          this.dateRange.push({text: dayText, date, sclass })\r\n        }\r\n      }\r\n\r\n      for (let i = 1; i <= dayCount; i++) {\r\n        const date = new Date(time.year, time.month, i)\r\n        let sclass = ''\r\n        if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {\r\n          sclass = 'datepicker-item-disable'\r\n        }\r\n        if (i == time.day && date.getFullYear() == time.year && date.getMonth() == time.month){\r\n          sclass = 'datepicker-dateRange-item-active'\r\n        }\r\n        this.dateRange.push({text: i, date, sclass})\r\n      }\r\n\r\n      if (this.dateRange.length < 42) {\r\n        const nextMonthNeed = 42 - this.dateRange.length\r\n        const nextMonth = this.getYearMonth(time.year, time.month + 1)\r\n\r\n        for (let i = 1; i <= nextMonthNeed; i++) {\r\n          const date = new Date(nextMonth.year, nextMonth.month, i)\r\n          let sclass = 'datepicker-item-gray'\r\n          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {\r\n            sclass = 'datepicker-item-disable'\r\n          }\r\n          this.dateRange.push({text: i, date, sclass})\r\n        }\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    let parent = this.$parent\r\n    while (parent && !parent._formValidator) { parent = parent.$parent }\r\n    if (parent && parent._formValidator) {\r\n      parent.children.push(this)\r\n      this._parent = parent\r\n    }\r\n  },\r\n  mounted () {\r\n    this.$emit('child-created', this)\r\n    this.currDate = this.parse(this.val) || this.parse(new Date());\r\n    this.validate();\r\n    this._blur = e => {\r\n      if (!this.$el.contains(e.target))\r\n        this.close()\r\n    }\r\n    window.addEventListener('click', this._blur);\r\n  },\r\n  beforeDestroy () {\r\n    window.removeEventListener('click', this._blur)\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.datepicker {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup {\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner {\r\n  width: 218px;\r\n}\r\n.datepicker-body {\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span {\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n  color: rgb(125, 125, 125);\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span {\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray {\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white !important;\r\n}\r\n\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span {\r\n  font-weight: bold;\r\n}\r\n.datepicker-label {\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl {\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn {\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn {\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn {\r\n  right: 2px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	// import $ from './utils/NodeList.js'
	
	exports.default = {
	  props: {
	    value: { type: String },
	    format: { default: 'yyyy.MM.dd' },
	    disabledDaysOfWeek: { type: Array, default: function _default() {
	        return [];
	      }
	    },
	    width: { type: String },
	    clearButton: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    name: { type: String },
	    placeholder: { type: String },
	    iconsFont: { type: String, default: 'glyphicon' },
	    required: { type: Boolean, default: null }
	  },
	  data: function data() {
	    return {
	      currDate: new Date(),
	      dateRange: [],
	      decadeRange: [],
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false,
	      val: this.value,
	      valid: null
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    },
	    format: function format() {
	      this.val = this.stringify(this.currDate);
	    },
	    val: function val(_val, old) {
	      this.$emit('input', _val);
	      this.valid = this.validate();
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    },
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (this._parent) this._parent.validate();
	    }
	  },
	  computed: {
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    preBtnClasses: function preBtnClasses() {
	      return 'datepicker-preBtn ' + this.iconsFont + ' ' + this.iconsFont + '-chevron-left';
	    },
	    nextBtnClasses: function nextBtnClasses() {
	      return 'datepicker-nextBtn ' + this.iconsFont + ' ' + this.iconsFont + '-chevron-right';
	    },
	    disabledDaysArray: function disabledDaysArray() {
	      return this.disabledDaysOfWeek.map(function (d) {
	        return parseInt(d, 10);
	      });
	    }
	  },
	  methods: {
	    validate: function validate() {
	      if (this.required) {
	        if (this.val === "") return false;
	        return moment(this.val, this.format.toUpperCase()).isValid();
	      }
	      return true;
	    },
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayYearView = false;
	    },
	    inputClick: function inputClick() {
	      this.currDate = this.parse(this.val) || this.parse(new Date());
	      if (this.displayMonthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(day) {
	      if (day.sclass === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.currDate = day.date;
	        this.val = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	    },
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.text.months[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMonth: function parseMonth(date) {
	      return this.text.months[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;
	
	      if (!date) date = this.parse();
	      if (!date) return '';
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	      return format.replace(/yyyy/g, year).replace(/yy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/M(?!a)/g, month).replace(/dd/g, ('0' + day).slice(-2)).replace(/d/g, day);
	    },
	    parse: function parse(str) {
	      if (str === undefined || str === null) {
	        str = this.val;
	      }
	      /*if(str !=== undefined)
	       {
	         let date = str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy' || this.format === 'dd.MM.yyyy') ?
	         new Date(str.substring(6, 10), str.substring(3, 5)-1, str.substring(0, 2)) :
	         new Date(str)
	         return isNaN(date.getFullYear()) ? new Date() : date
	       }*/
	      if (str !== undefined && str !== "") return new Date(str);else return new Date();
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	      }
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          var date = new Date(preMonth.year, preMonth.month, dayText);
	          var sclass = 'datepicker-item-gray';
	          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
	            sclass = 'datepicker-item-disable';
	          }
	          this.dateRange.push({ text: dayText, date: date, sclass: sclass });
	        }
	      }
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        var _date = new Date(time.year, time.month, _i2);
	        var _sclass = '';
	        if (this.disabledDaysArray.indexOf(_date.getDay()) > -1) {
	          _sclass = 'datepicker-item-disable';
	        }
	        if (_i2 == time.day && _date.getFullYear() == time.year && _date.getMonth() == time.month) {
	          _sclass = 'datepicker-dateRange-item-active';
	        }
	        this.dateRange.push({ text: _i2, date: _date, sclass: _sclass });
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          var _date2 = new Date(nextMonth.year, nextMonth.month, _i3);
	          var _sclass2 = 'datepicker-item-gray';
	          if (this.disabledDaysArray.indexOf(_date2.getDay()) > -1) {
	            _sclass2 = 'datepicker-item-disable';
	          }
	          this.dateRange.push({ text: _i3, date: _date2, sclass: _sclass2 });
	        }
	      }
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$emit('child-created', this);
	    this.currDate = this.parse(this.val) || this.parse(new Date());
	    this.validate();
	    this._blur = function (e) {
	      if (!_this.$el.contains(e.target)) _this.close();
	    };
	    window.addEventListener('click', this._blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('click', this._blur);
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "datepicker btn-group btn-group-justified"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    staticClass: "form-control datepicker-input",
	    class: {
	      'with-reset-button': _vm.clearButton
	    },
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "type": "text",
	      "name": _vm.name,
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "click": _vm.inputClick,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.val) ? _c('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.val = ''
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]) : _vm._e(), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayDayView),
	      expression: "displayDayView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    on: {
	      "click": _vm.switchMonthView
	    }
	  }, [_vm._v(_vm._s(_vm.stringifyDayHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-weekRange"
	  }, _vm._l((_vm.text.daysOfWeek), function(w) {
	    return _c('span', [_vm._v(_vm._s(w))])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-dateRange"
	  }, _vm._l((_vm.dateRange), function(d) {
	    return _c('span', {
	      class: d.sclass,
	      on: {
	        "click": function($event) {
	          _vm.daySelect(d)
	        }
	      }
	    }, [_vm._v(_vm._s(d.text))])
	  }))])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayMonthView),
	      expression: "displayMonthView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    on: {
	      "click": _vm.switchDecadeView
	    }
	  }, [_vm._v(_vm._s(_vm.stringifyYearHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-monthRange"
	  }, [_vm._l((_vm.text.months), function(m, index) {
	    return [_c('span', {
	      class: {
	        'datepicker-dateRange-item-active':
	        (_vm.text.months[_vm.parse(_vm.val).getMonth()] === m) &&
	        _vm.currDate.getFullYear() === _vm.parse(_vm.val).getFullYear()
	      },
	      domProps: {
	        "textContent": _vm._s(m.substr(0, 3))
	      },
	      on: {
	        "click": function($event) {
	          _vm.monthSelect(index)
	        }
	      }
	    })]
	  })], 2)])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayYearView),
	      expression: "displayYearView"
	    }],
	    staticClass: "datepicker-popup"
	  }, [_c('div', {
	    staticClass: "datepicker-inner"
	  }, [_c('div', {
	    staticClass: "datepicker-body"
	  }, [_c('div', {
	    staticClass: "datepicker-ctrl"
	  }, [_c('span', {
	    class: _vm.preBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(0)
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    class: _vm.nextBtnClasses,
	    attrs: {
	      "aria-hidden": "true"
	    },
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(1)
	      }
	    }
	  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.stringifyDecadeHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    staticClass: "datepicker-monthRange decadeRange"
	  }, [_vm._l((_vm.decadeRange), function(decade) {
	    return [_c('span', {
	      class: {
	        'datepicker-dateRange-item-active': _vm.parse(_vm.val).getFullYear() === decade.text
	      },
	      domProps: {
	        "textContent": _vm._s(decade.text)
	      },
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.yearSelect(decade.text)
	        }
	      }
	    })]
	  })], 2)])])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9395617c", module.exports)
	  }
	}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(106)
	
	/* template */
	var __vue_template__ = __webpack_require__(107)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-514cc697", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-514cc697", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _ClickOutside = __webpack_require__(66);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  directives: {
	    ClickOutside: _ClickOutside2.default
	  },
	  props: {
	    disabled: { type: Boolean, default: false },
	    size: { type: String, default: null },
	    text: { type: String, default: null },
	    type: { type: String, default: 'default' },
	    value: { type: Boolean, default: false }
	  },
	  data: function data() {
	    var show = this.value;
	    return { show: show };
	  },
	
	  watch: {
	    show: function show(val) {
	      this.$emit('input', val);
	    },
	    value: function value(val) {
	      this.show = val;
	    }
	  },
	  computed: {
	    buttonSize: function buttonSize() {
	      return ~['lg', 'sm', 'xs'].indexOf(this.size) ? 'btn-' + this.size : '';
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._isTabs || this.$parent._navbar || this.$parent.menu;
	    },
	    menu: function menu() {
	      return !this.$parent || this.$parent.navbar;
	    },
	    slots: function slots() {
	      return this._slotContents;
	    },
	    submenu: function submenu() {
	      return this.$parent && (this.$parent.menu || this.$parent.submenu);
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      if (!this.disabled) {
	        this.show = !this.show;
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    (0, _NodeList2.default)('ul', this.$el).on('click', 'li>a', function (e) {
	      _this.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)('ul', this.$el).off();
	  }
	};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c(_vm.isLi ? 'li' : 'div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (_vm.blur),
	      expression: "blur"
	    }],
	    tag: "div",
	    class: [{
	      open: _vm.show,
	      disabled: _vm.disabled,
	      dropdown: _vm.isLi,
	      'input-group-btn': _vm.inInput,
	      'btn-group': !_vm.isLi && !_vm.inInput
	    }]
	  }, [_vm._t("before"), _vm._v(" "), (_vm.isLi) ? _c('a', {
	    class: ['dropdown-toggle', _vm.buttonSize, {
	      disabled: _vm.disabled
	    }],
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        _vm.show = false
	      },
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [_vm._t("button", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
	    staticClass: "caret"
	  })], 2) : _c('button', {
	    class: ['btn btn-' + _vm.type, _vm.buttonSize, 'dropdown-toggle'],
	    attrs: {
	      "type": "button",
	      "disabled": _vm.disabled
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        _vm.show = false
	      },
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [_vm._t("button", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
	    staticClass: "caret"
	  })], 2), _vm._v(" "), _vm._t("dropdown-menu", [_c('ul', {
	    staticClass: "dropdown-menu"
	  }, [_vm._t("default")], 2)])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-514cc697", module.exports)
	  }
	}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(109)
	
	/* template */
	var __vue_template__ = __webpack_require__(110)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\FormGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-54334e85", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-54334e85", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FormGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// let coerce = {
	//     enterSubmit: 'boolean',
	//     icon: 'boolean'
	// }
	
	exports.default = {
	  props: {
	    enterSubmit: {
	      type: Boolean,
	      default: false
	    },
	    icon: {
	      type: Boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    }
	  },
	  data: function data() {
	    return {
	      children: [],
	      valid: null,
	      timeout: null
	    };
	  },
	
	  watch: {
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (val !== old && this._parent) this._parent.validate();
	    }
	  },
	  methods: {
	    validate: function validate() {
	      var valid = true;
	      this.children.some(function (el) {
	        var v = el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value);
	        if (!v) valid = false;
	        return !valid;
	      });
	      this.valid = valid;
	      return valid === true;
	    }
	  },
	  created: function created() {
	    this._formGroup = true;
	    var parent = this.$parent;
	    while (parent && !parent._formGroup) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formGroup) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    this.validate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	}; //
	//

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-54334e85", module.exports)
	  }
	}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(112)
	
	/* template */
	var __vue_template__ = __webpack_require__(113)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\FormValidator.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3548ca50", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3548ca50", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] FormValidator.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    enterSubmit: { type: Boolean, default: false },
	    icon: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    value: null
	  },
	  data: function data() {
	    return {
	      children: [],
	      valid: null,
	      timeout: null
	    };
	  },
	
	  watch: {
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit('input', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (val !== old && this._parent) this._parent.validate();
	    }
	  },
	  methods: {
	    validate: function validate() {
	      var invalid = !this.children.every(function (el) {
	        return el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value);
	      });
	      this.valid = !invalid;
	      return !invalid;
	    }
	  },
	  created: function created() {
	    this._formValidator = true;
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    this.validate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	}; //
	//

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3548ca50", module.exports)
	  }
	}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(115)
	
	/* script */
	__vue_exports__ = __webpack_require__(117)
	
	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Input.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-98c94898"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-98c94898", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-98c94898", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Input.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-98c94898&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-98c94898&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form-group[data-v-98c94898] {\r\n  position: relative;\n}\nlabel~.close[data-v-98c94898] {\r\n  top: 25px;\n}\n.input-group>.icon[data-v-98c94898] {\r\n  position: relative;\r\n  display: table-cell;\r\n  width:0;\r\n  z-index: 3;\n}\n.close[data-v-98c94898] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\n}\n.has-feedback .close[data-v-98c94898] {\r\n  right: 20px;\n}\r\n", "", {"version":3,"sources":["/./src/Input.vue?7733b757"],"names":[],"mappings":";AAqRA;EACA,mBAAA;CACA;AACA;EACA,UAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,QAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,YAAA;CACA","file":"Input.vue","sourcesContent":["<template>\r\n  <div class=\"form-group\" :class=\"{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}\">\r\n    <slot name=\"label\"><label v-if=\"label\" class=\"control-label\" @click=\"focus\">{{label}}</label></slot>\r\n    <div v-if=\"$slots.before||$slots.after\" class=\"input-group\">\r\n      <slot name=\"before\"></slot>\r\n      <textarea :is=\"type=='textarea'?type:'input'\" class=\"form-control\" ref=\"input\"\r\n        :cols=\"cols\"\r\n        :disabled=\"disabled\"\r\n        :list=\"id_datalist\"\r\n        :max=\"attr(max)\"\r\n        :maxlength=\"maxlength\"\r\n        :min=\"attr(min)\"\r\n        :name=\"name\"\r\n        :placeholder=\"placeholder\"\r\n        :readonly=\"readonly\"\r\n        :required=\"required\"\r\n        :rows=\"rows\"\r\n        :step=\"step\"\r\n        :title=\"attr(title)\"\r\n        :type=\"type=='textarea'?null:type\"\r\n        v-model=\"val\"\r\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\r\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\r\n      ></textarea>\r\n      <div v-if=\"clearButton && value\" :class=\"{icon:icon}\">\r\n        <span class=\"close\" @click=\"value = ''\">&times;</span>\r\n      </div>\r\n      <div v-if=\"icon\" class=\"icon\">\r\n        <span v-if=\"icon&&valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\"></span>\r\n      </div>\r\n      <slot name=\"after\"></slot>\r\n    </div>\r\n    <template v-else>\r\n      <textarea :is=\"type=='textarea'?type:'input'\" class=\"form-control\" ref=\"input\"\r\n        :cols=\"cols\"\r\n        :disabled=\"disabled\"\r\n        :list=\"id_datalist\"\r\n        :max=\"attr(max)\"\r\n        :maxlength=\"maxlength\"\r\n        :min=\"attr(min)\"\r\n        :name=\"name\"\r\n        :placeholder=\"placeholder\"\r\n        :readonly=\"readonly\"\r\n        :required=\"required\"\r\n        :rows=\"rows\"\r\n        :step=\"step\"\r\n        :title=\"attr(title)\"\r\n        :type=\"type=='textarea'?null:type\"\r\n        v-model=\"val\"\r\n        @blur=\"emit\" @focus=\"emit\" @input=\"emit\"\r\n        @keyup.enter=\"type!='textarea'&&enterSubmit&&submit()\"\r\n      ></textarea>\r\n      <span v-if=\"clearButton && val\" class=\"close\" @click=\"val = ''\">&times;</span>\r\n      <span v-if=\"icon&&valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\"></span>\r\n    </template>\r\n    <datalist v-if=\"id_datalist\" :id=\"id_datalist\">\r\n      <option v-for=\"opc in options\" :value=\"opc\"></option>\r\n    </datalist>\r\n    <div v-if=\"showHelp\" class=\"help-block\" @click=\"focus\">{{help}}</div>\r\n    <div v-if=\"showError\" class=\"help-block with-errors\" @click=\"focus\">{{errorText}}</div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, delayer, translations} from './utils/utils.js'\r\nimport $ from './utils/NodeList.js'\r\n\r\nvar DELAY = 300\r\n\r\nexport default {\r\n  props: {\r\n    clearButton: {type: Boolean, default: false},\r\n    cols: {type: Number, default: null},\r\n    datalist: {type: Array, default: null},\r\n    disabled: {type: Boolean, default: false},\r\n    enterSubmit: {type: Boolean, default: false},\r\n    error: {type: String, default: null},\r\n    help: {type: String, default: null},\r\n    hideHelp: {type: Boolean, default: true},\r\n    icon: {type: Boolean, default: false},\r\n    label: {type: String, default: null},\r\n    lang: {type: String, default: navigator.language},\r\n    mask: null,\r\n    maskDelay: {type: Number, default: 100},\r\n    match: {type: String, default: null},\r\n    max: {type: Number, default: null},\r\n    maxlength: {type: Number, default: null},\r\n    min: {type: Number, default: null},\r\n    minlength: {type: Number, default: 0},\r\n    name: {type: String, default: null},\r\n    pattern: {default: null},\r\n    placeholder: {type: String, default: null},\r\n    readonly: {type: Boolean, default: false},\r\n    required: {type: Boolean, default: false},\r\n    rows: {type: Number, default: 3},\r\n    step: {type: Number, default: null},\r\n    type: {type: String, default: 'text'},\r\n    url: {type: String, default: null},\r\n    urlMap: {type: Function, default: null},\r\n    validationDelay: {type: Number, default: 250},\r\n    value: {default: null}\r\n  },\r\n  data () {\r\n    var val = this.value\r\n    return {\r\n      options: this.datalist,\r\n      val,\r\n      valid: null,\r\n      timeout: null\r\n    }\r\n  },\r\n  computed: {\r\n    canValidate () { \r\n      return !this.disabled && !this.readonly && this.required; \r\n      //return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null) \r\n      },\r\n    errorText () {\r\n      let value = this.value\r\n      let error = [this.error]\r\n      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')')\r\n      if (value && (value.length < this.minlength)) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')')\r\n      return error.join(' ')\r\n    },\r\n    id_datalist () {\r\n      if (this.type !== 'textarea' && this.datalist instanceof Array) {\r\n        if (!this._id_datalist) {\r\n          if (!this.$root.id_datalist) { this.$root.id_datalist = 0 }\r\n          this._id_datalist = 'input-datalist' + this.$root.id_datalist++\r\n        }\r\n        return this._id_datalist\r\n      }\r\n      return null\r\n    },\r\n    input () { return this.$refs.input },\r\n    nativeValidate () { return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max) },\r\n    regex () { return coerce.pattern(this.pattern) },\r\n    showError () { return this.error && this.valid === false },\r\n    showHelp () { return this.help && (!this.showError || !this.hideHelp) },\r\n    text () { return translations(this.lang) },\r\n    title () { return this.errorText || this.help || '' }\r\n  },\r\n  watch: {\r\n    datalist (val, old) {\r\n      if (val !== old && val instanceof Array) { this.options = val }\r\n    },\r\n    match (val) { this.eval() },\r\n    options (val, old) {\r\n      if (val !== old) this.$emit('options', val)\r\n    },\r\n    url (val) {\r\n      this._url()\r\n    },\r\n    val (val, old) {\r\n      this.$emit('input', val)\r\n      if (val !== old) {\r\n        if (this.mask instanceof Function) {\r\n          val = this.mask(val || '')\r\n          if (this.val !== val) {\r\n            if (this._timeout.mask) clearTimeout(this._timeout.mask)\r\n            this._timeout.mask = setTimeout(() => {\r\n              this.val = val\r\n            }, isNaN(this.maskDelay) ? 0 : this.maskDelay)\r\n          }\r\n        }\r\n        this.eval()\r\n      }\r\n    },\r\n    valid (val, old) {\r\n      this.$emit('isvalid', val)\r\n      this.$emit(val == \"\" ? 'invalid' : 'valid')\r\n      if (this._parent) this._parent.validate()\r\n    },\r\n    value (val) {\r\n      if (this.val !== val) { this.val = val }\r\n    }\r\n  },\r\n  methods: {\r\n    attr (value) {\r\n      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value\r\n    },\r\n    emit (e) {\r\n      this.$emit(e.type, e.type == 'input' ? e.target.value : e)\r\n      if (e.type === 'blur' && this.canValidate) { this.valid = this.validate() }\r\n    },\r\n    eval () {\r\n      if (this._timeout.eval) clearTimeout(this._timeout.eval)\r\n      if (!this.canValidate) {\r\n        this.valid = true\r\n      } else {\r\n        this._timeout.eval = setTimeout(() => {\r\n          this.valid = this.validate();\r\n          this._timeout.eval = null\r\n        }, this.validationDelay)\r\n      }\r\n    },\r\n    focus () { this.input.focus() },\r\n    submit () {\r\n      if (this.$parent._formValidator) {\r\n        return this.$parent.validate()\r\n      }\r\n      if (this.input.form) {\r\n        const invalids = $('.form-group.validate:not(.has-success)', this.input.form)\r\n        if (invalids.length) {\r\n          invalids.find('input,textarea,select')[0].focus()\r\n        } else {\r\n          this.input.form.submit()\r\n        }\r\n      }\r\n    },\r\n    validate () {\r\n      \r\n      if (!this.canValidate) { return true }\r\n      var value = (this.val || '').trim();\r\n      if (value == \"\") { return !this.required }\r\n      if(!isNaN(this.val))\r\n      {\r\n        if(this.min !== null && this.val < this.min) return false;\r\n        if(this.max !== null && this.val > this.max) return false;\r\n        return true;\r\n      }\r\n\r\n      if (this.match !== null) { return this.match === value }\r\n      if (value.length < this.minlength) { return false }\r\n      if (this.nativeValidate && !this.input.checkValidity()) { return false }\r\n      if (this.regex) {\r\n        if (!(this.regex instanceof Function ? this.regex(this.val) : this.regex.test(this.val))) { return false }\r\n      }\r\n      return true;\r\n    },\r\n    reset() {\r\n      this.value = ''\r\n      this.valid = false;\r\n      if (this._timeout.mask) clearTimeout(this._timeout.mask)\r\n      if (this._timeout.eval) clearTimeout(this._timeout.eval)\r\n    }\r\n  },\r\n  created () {\r\n    this._input = true\r\n    this._timeout = {}\r\n    let parent = this.$parent\r\n    while (parent && !parent._formValidator) { parent = parent.$parent }\r\n    if (parent && parent._formValidator) {\r\n      parent.children.push(this)\r\n      this._parent = parent\r\n    }\r\n    this._url = delayer(function () {\r\n      if (!this.url || !this.$http || this._loading) { return }\r\n      this._loading = true\r\n      this.$http.get(this.url).then(response => {\r\n        var data = response.data instanceof Array ? response.data : []\r\n        try { data = JSON.parse(data) } catch (e) {}\r\n        if (this.urlMap) { data = data.map(this.urlMap) }\r\n        this.options = data\r\n        this.loading = false\r\n      }, response => {\r\n        this.loading = false\r\n      })\r\n    }, DELAY)\r\n    if (this.url) this._url()\r\n  },\r\n  mounted () {\r\n    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {\r\n    //   if (this.canValidate) { this.valid = this.validate() }\r\n    //   this.$emit('blur', e)\r\n    // })\r\n  },\r\n  beforeDestroy () {\r\n    // $(this.input).off()\r\n    if (this._parent) {\r\n      var index = this._parent.children.indexOf(this)\r\n      this._parent.children.splice(index, 1)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.form-group {\r\n  position: relative;\r\n}\r\nlabel~.close {\r\n  top: 25px;\r\n}\r\n.input-group>.icon {\r\n  position: relative;\r\n  display: table-cell;\r\n  width:0;\r\n  z-index: 3;\r\n}\r\n.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-feedback .close {\r\n  right: 20px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var DELAY = 300;
	
	exports.default = {
	  props: {
	    clearButton: { type: Boolean, default: false },
	    cols: { type: Number, default: null },
	    datalist: { type: Array, default: null },
	    disabled: { type: Boolean, default: false },
	    enterSubmit: { type: Boolean, default: false },
	    error: { type: String, default: null },
	    help: { type: String, default: null },
	    hideHelp: { type: Boolean, default: true },
	    icon: { type: Boolean, default: false },
	    label: { type: String, default: null },
	    lang: { type: String, default: navigator.language },
	    mask: null,
	    maskDelay: { type: Number, default: 100 },
	    match: { type: String, default: null },
	    max: { type: Number, default: null },
	    maxlength: { type: Number, default: null },
	    min: { type: Number, default: null },
	    minlength: { type: Number, default: 0 },
	    name: { type: String, default: null },
	    pattern: { default: null },
	    placeholder: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    required: { type: Boolean, default: false },
	    rows: { type: Number, default: 3 },
	    step: { type: Number, default: null },
	    type: { type: String, default: 'text' },
	    url: { type: String, default: null },
	    urlMap: { type: Function, default: null },
	    validationDelay: { type: Number, default: 250 },
	    value: { default: null }
	  },
	  data: function data() {
	    var val = this.value;
	    return {
	      options: this.datalist,
	      val: val,
	      valid: null,
	      timeout: null
	    };
	  },
	
	  computed: {
	    canValidate: function canValidate() {
	      return !this.disabled && !this.readonly && this.required;
	      //return !this.disabled && !this.readonly && (this.required || this.regex || this.nativeValidate || this.match !== null) 
	    },
	    errorText: function errorText() {
	      var value = this.value;
	      var error = [this.error];
	      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')');
	      if (value && value.length < this.minlength) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')');
	      return error.join(' ');
	    },
	    id_datalist: function id_datalist() {
	      if (this.type !== 'textarea' && this.datalist instanceof Array) {
	        if (!this._id_datalist) {
	          if (!this.$root.id_datalist) {
	            this.$root.id_datalist = 0;
	          }
	          this._id_datalist = 'input-datalist' + this.$root.id_datalist++;
	        }
	        return this._id_datalist;
	      }
	      return null;
	    },
	    input: function input() {
	      return this.$refs.input;
	    },
	    nativeValidate: function nativeValidate() {
	      return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max);
	    },
	    regex: function regex() {
	      return _utils.coerce.pattern(this.pattern);
	    },
	    showError: function showError() {
	      return this.error && this.valid === false;
	    },
	    showHelp: function showHelp() {
	      return this.help && (!this.showError || !this.hideHelp);
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    title: function title() {
	      return this.errorText || this.help || '';
	    }
	  },
	  watch: {
	    datalist: function datalist(val, old) {
	      if (val !== old && val instanceof Array) {
	        this.options = val;
	      }
	    },
	    match: function match(val) {
	      this.eval();
	    },
	    options: function options(val, old) {
	      if (val !== old) this.$emit('options', val);
	    },
	    url: function url(val) {
	      this._url();
	    },
	    val: function val(_val, old) {
	      var _this = this;
	
	      this.$emit('input', _val);
	      if (_val !== old) {
	        if (this.mask instanceof Function) {
	          _val = this.mask(_val || '');
	          if (this.val !== _val) {
	            if (this._timeout.mask) clearTimeout(this._timeout.mask);
	            this._timeout.mask = setTimeout(function () {
	              _this.val = _val;
	            }, isNaN(this.maskDelay) ? 0 : this.maskDelay);
	          }
	        }
	        this.eval();
	      }
	    },
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit(val == "" ? 'invalid' : 'valid');
	      if (this._parent) this._parent.validate();
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  methods: {
	    attr: function attr(value) {
	      return ~['', null, undefined].indexOf(value) || value instanceof Function ? null : value;
	    },
	    emit: function emit(e) {
	      this.$emit(e.type, e.type == 'input' ? e.target.value : e);
	      if (e.type === 'blur' && this.canValidate) {
	        this.valid = this.validate();
	      }
	    },
	    eval: function _eval() {
	      var _this2 = this;
	
	      if (this._timeout.eval) clearTimeout(this._timeout.eval);
	      if (!this.canValidate) {
	        this.valid = true;
	      } else {
	        this._timeout.eval = setTimeout(function () {
	          _this2.valid = _this2.validate();
	          _this2._timeout.eval = null;
	        }, this.validationDelay);
	      }
	    },
	    focus: function focus() {
	      this.input.focus();
	    },
	    submit: function submit() {
	      if (this.$parent._formValidator) {
	        return this.$parent.validate();
	      }
	      if (this.input.form) {
	        var invalids = (0, _NodeList2.default)('.form-group.validate:not(.has-success)', this.input.form);
	        if (invalids.length) {
	          invalids.find('input,textarea,select')[0].focus();
	        } else {
	          this.input.form.submit();
	        }
	      }
	    },
	    validate: function validate() {
	
	      if (!this.canValidate) {
	        return true;
	      }
	      var value = (this.val || '').trim();
	      if (value == "") {
	        return !this.required;
	      }
	      if (!isNaN(this.val)) {
	        if (this.min !== null && this.val < this.min) return false;
	        if (this.max !== null && this.val > this.max) return false;
	        return true;
	      }
	
	      if (this.match !== null) {
	        return this.match === value;
	      }
	      if (value.length < this.minlength) {
	        return false;
	      }
	      if (this.nativeValidate && !this.input.checkValidity()) {
	        return false;
	      }
	      if (this.regex) {
	        if (!(this.regex instanceof Function ? this.regex(this.val) : this.regex.test(this.val))) {
	          return false;
	        }
	      }
	      return true;
	    },
	    reset: function reset() {
	      this.value = '';
	      this.valid = false;
	      if (this._timeout.mask) clearTimeout(this._timeout.mask);
	      if (this._timeout.eval) clearTimeout(this._timeout.eval);
	    }
	  },
	  created: function created() {
	    this._input = true;
	    this._timeout = {};
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	    this._url = (0, _utils.delayer)(function () {
	      var _this3 = this;
	
	      if (!this.url || !this.$http || this._loading) {
	        return;
	      }
	      this._loading = true;
	      this.$http.get(this.url).then(function (response) {
	        var data = response.data instanceof Array ? response.data : [];
	        try {
	          data = JSON.parse(data);
	        } catch (e) {}
	        if (_this3.urlMap) {
	          data = data.map(_this3.urlMap);
	        }
	        _this3.options = data;
	        _this3.loading = false;
	      }, function (response) {
	        _this3.loading = false;
	      });
	    }, DELAY);
	    if (this.url) this._url();
	  },
	  mounted: function mounted() {
	    // $(this.input).on('focus', e => { this.$emit('focus', e) }).on('blur', e => {
	    //   if (this.canValidate) { this.valid = this.validate() }
	    //   this.$emit('blur', e)
	    // })
	  },
	  beforeDestroy: function beforeDestroy() {
	    // $(this.input).off()
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "form-group",
	    class: {
	      validate: _vm.canValidate, 'has-feedback': _vm.icon, 'has-error': _vm.canValidate && _vm.valid === false, 'has-success': _vm.canValidate && _vm.valid
	    }
	  }, [_vm._t("label", [(_vm.label) ? _c('label', {
	    staticClass: "control-label",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e()]), _vm._v(" "), (_vm.$slots.before || _vm.$slots.after) ? _c('div', {
	    staticClass: "input-group"
	  }, [_vm._t("before"), _vm._v(" "), _c(_vm.type == 'textarea' ? _vm.type : 'input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "input",
	    tag: "textarea",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": _vm.type == 'textarea' ? null : _vm.type
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }, _vm.emit],
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.value) ? _c('div', {
	    class: {
	      icon: _vm.icon
	    }
	  }, [_c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.value = ''
	      }
	    }
	  }, [_vm._v("×")])]) : _vm._e(), _vm._v(" "), (_vm.icon) ? _c('div', {
	    staticClass: "icon"
	  }, [(_vm.icon && _vm.valid !== null) ? _c('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (_vm.valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._t("after")], 2) : [_c(_vm.type == 'textarea' ? _vm.type : 'input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "input",
	    tag: "textarea",
	    staticClass: "form-control",
	    attrs: {
	      "cols": _vm.cols,
	      "disabled": _vm.disabled,
	      "list": _vm.id_datalist,
	      "max": _vm.attr(_vm.max),
	      "maxlength": _vm.maxlength,
	      "min": _vm.attr(_vm.min),
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "readonly": _vm.readonly,
	      "required": _vm.required,
	      "rows": _vm.rows,
	      "step": _vm.step,
	      "title": _vm.attr(_vm.title),
	      "type": _vm.type == 'textarea' ? null : _vm.type
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "blur": _vm.emit,
	      "focus": _vm.emit,
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }, _vm.emit],
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.type != 'textarea' && _vm.enterSubmit && _vm.submit()
	      }
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.val) ? _c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.val = ''
	      }
	    }
	  }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.valid !== null) ? _c('span', {
	    class: ['form-control-feedback glyphicon', 'glyphicon-' + (_vm.valid ? 'ok' : 'remove')],
	    attrs: {
	      "aria-hidden": "true"
	    }
	  }) : _vm._e()], _vm._v(" "), (_vm.id_datalist) ? _c('datalist', {
	    attrs: {
	      "id": _vm.id_datalist
	    }
	  }, _vm._l((_vm.options), function(opc) {
	    return _c('option', {
	      domProps: {
	        "value": opc
	      }
	    })
	  })) : _vm._e(), _vm._v(" "), (_vm.showHelp) ? _c('div', {
	    staticClass: "help-block",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.help))]) : _vm._e(), _vm._v(" "), (_vm.showError) ? _c('div', {
	    staticClass: "help-block with-errors",
	    on: {
	      "click": _vm.focus
	    }
	  }, [_vm._v(_vm._s(_vm.errorText))]) : _vm._e()], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-98c94898", module.exports)
	  }
	}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(120)
	
	/* template */
	var __vue_template__ = __webpack_require__(125)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-619c55d2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-619c55d2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(121);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _utils = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    backdrop: { type: Boolean, default: false },
	    callback: { type: Function, default: null },
	    cancelText: { type: String, default: 'Close' },
	    effect: { type: String, default: null },
	    large: { type: Boolean, default: false },
	    okText: { type: String, default: 'Save changes' },
	    small: { type: Boolean, default: false },
	    title: { type: String, default: '' },
	    value: { type: Boolean, required: true },
	    width: { default: null }
	  },
	  data: function data() {
	    return {
	      transition: false,
	      val: null
	    };
	  },
	
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + 'px';
	      }
	      return this.width;
	    }
	  },
	  watch: {
	    transition: function transition(val, old) {
	      if (val === old) {
	        return;
	      }
	      var el = this.$el;
	      var body = $("body"); //document.body
	      if (val) {
	        //starting
	        if (this.val) {
	          el.querySelector('.modal-content').focus();
	          el.style.display = 'block';
	          setTimeout(function () {
	            return el.classList.add('in');
	          }, 0);
	          body.addClass('modal-open');
	          body.append("<div class='modal-backdrop fade in'></div>");
	          if ((0, _utils.getScrollBarWidth)() !== 0) {
	            body.css("paddingRight", (0, _utils.getScrollBarWidth)() + 'px');
	          }
	        } else {
	          el.classList.remove('in');
	        }
	      } else {
	        //ending
	        this.$emit(this.val ? 'opened' : 'closed');
	        if (!this.val) {
	          el.style.display = 'none';
	          body.css('paddingRight', '0px');
	          body.removeClass('modal-open');
	          $(".modal-backdrop").remove();
	        }
	      }
	    },
	    val: function val(_val, old) {
	      this.$emit('input', _val);
	      if (old === null ? _val === true : _val !== old) this.transition = true;
	    },
	    value: function value(val, old) {
	      if (val !== old) this.val = val;
	    }
	  },
	  methods: {
	    action: function action(val, p) {
	      if (val === null) {
	        return;
	      }
	      if (val && this.callback instanceof Function) this.callback();
	      this.$emit(val ? 'ok' : 'cancel', p);
	      this.val = val || false;
	    }
	  },
	  mounted: function mounted() {
	    this.val = this.value;
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(123);
	module.exports = __webpack_require__(7).Number.isInteger;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(124) });


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['modal', _vm.effect],
	    attrs: {
	      "role": "dialog"
	    },
	    on: {
	      "click": function($event) {
	        _vm.backdrop && _vm.action(false, 1)
	      },
	      "transitionend": function($event) {
	        _vm.transition = false
	      }
	    }
	  }, [_c('div', {
	    class: ['modal-dialog', {
	      'modal-lg': _vm.large,
	      'modal-sm': _vm.small
	    }],
	    style: ({
	      width: _vm.optionalWidth
	    }),
	    attrs: {
	      "role": "document"
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.action(null)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "modal-content"
	  }, [_vm._t("modal-header", [_c('div', {
	    staticClass: "modal-header"
	  }, [_c('button', {
	    staticClass: "close",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(false, 2)
	      }
	    }
	  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _c('h4', {
	    staticClass: "modal-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2)])]), _vm._v(" "), _vm._t("modal-body", [_c('div', {
	    staticClass: "modal-body"
	  }, [_vm._t("default")], 2)]), _vm._v(" "), _vm._t("modal-footer", [_c('div', {
	    staticClass: "modal-footer"
	  }, [_c('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(false, 3)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        _vm.action(true, 4)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.okText))])])])], 2)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-619c55d2", module.exports)
	  }
	}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(127)
	
	/* template */
	var __vue_template__ = __webpack_require__(128)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6327ca96", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6327ca96", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: { type: String, default: 'default' },
	    placement: { type: String, default: '' },
	    container: { type: String, default: '' }
	  },
	  data: function data() {
	    return {
	      id: 'bs-example-navbar-collapse-1',
	      collapsed: true,
	      styles: {}
	    };
	  },
	
	  computed: {
	    slots: function slots() {
	      return this._slotContents;
	    }
	  },
	  methods: {
	    toggleCollapse: function toggleCollapse(e) {
	      e && e.preventDefault();
	      this.collapsed = !this.collapsed;
	    }
	  },
	  created: function created() {
	    this._navbar = true;
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    try {
	      var $dropdown = (0, _NodeList2.default)('.dropdown>[data-toggle="dropdown"]', this.$el).parent();
	      if ($dropdown) {
	        $dropdown.on('click', '.dropdown-toggle', function (e) {
	          e.preventDefault();
	          $dropdown.each(function (content) {
	            if (content.contains(e.target)) content.classList.toggle('open');
	          });
	        }).on('click', '.dropdown-menu>li>a', function (e) {
	          $dropdown.each(function (content) {
	            if (content.contains(e.target)) content.classList.remove('open');
	          });
	        }).onBlur(function (e) {
	          $dropdown.each(function (content) {
	            if (!content.contains(e.target)) content.classList.remove('open');
	          });
	        });
	      }
	    } catch (ex) {
	      console.log('error finding dropdown');
	    }
	
	    (0, _NodeList2.default)(this.$el).on('click touchstart', 'li:not(.dropdown)>a', function (e) {
	      setTimeout(function () {
	        _this.collapsed = true;
	      }, 200);
	    }).onBlur(function (e) {
	      if (!_this.$el.contains(e.target)) {
	        _this.collapsed = true;
	      }
	    });
	    var height = this.$el.offsetHeight;
	    if (this.placement === 'top') {
	      document.body.style.paddingTop = height + 'px';
	    }
	    if (this.placement === 'bottom') {
	      document.body.style.paddingBottom = height + 'px';
	    }
	    if (this.$slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).on('click', function (e) {
	      return _this.toggleCollapse(e);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)('.dropdown', this.$el).off('click').offBlur();
	    if (this.$slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).off('click');
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('nav', {
	    class: ['navbar', 'navbar-' + _vm.type, _vm.placement === 'static' ? 'navbar-static-top' : 'navbar-fixed-' + _vm.placement]
	  }, [_c('div', {
	    class: _vm.container === 'fluid' ? 'container-fluid' : 'container'
	  }, [_c('div', {
	    staticClass: "navbar-header"
	  }, [(!_vm.$slots.collapse) ? _c('button', {
	    staticClass: "navbar-toggle collapsed",
	    attrs: {
	      "type": "button",
	      "aria-expanded": "false"
	    },
	    on: {
	      "click": _vm.toggleCollapse
	    }
	  }, [_c('span', {
	    staticClass: "sr-only"
	  }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c('span', {
	    staticClass: "icon-bar"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "icon-bar"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "icon-bar"
	  })]) : _vm._e(), _vm._v(" "), _vm._t("collapse"), _vm._v(" "), _vm._t("brand")], 2), _vm._v(" "), _c('div', {
	    class: ['navbar-collapse', {
	      collapse: _vm.collapsed
	    }]
	  }, [_c('ul', {
	    staticClass: "nav navbar-nav"
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.$slots.left) ? _c('ul', {
	    staticClass: "nav navbar-nav navbar-left"
	  }, [_vm._t("left")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.right) ? _c('ul', {
	    staticClass: "nav navbar-nav navbar-right"
	  }, [_vm._t("right")], 2) : _vm._e()])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6327ca96", module.exports)
	  }
	}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(130)
	
	/* template */
	var __vue_template__ = __webpack_require__(131)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Option.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7caf070a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7caf070a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Option.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 130 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	
	exports.default = {
	  props: { value: null },
	  data: function data() {
	    return { loading: true };
	  },
	  mounted: function mounted() {
	    if (this.$parent._select) {
	      if (!this.$parent.options) {
	        this.$parent.options = [];
	      }
	      var el = {};
	      el[this.$parent.optionsLabel] = this.$el.innerHTML;
	      el[this.$parent.optionsValue] = this.value;
	      this.$parent.options.push(el);
	      this.loading = false;
	    } else {
	      console.warn('options only work inside a select component');
	    }
	  }
	};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.loading) ? _c('li', [_vm._t("default")], 2) : _vm._e()
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7caf070a", module.exports)
	  }
	}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(133)
	
	/* script */
	__vue_exports__ = __webpack_require__(135)
	
	/* template */
	var __vue_template__ = __webpack_require__(136)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Panel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-14ff3e24", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-14ff3e24", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Panel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-14ff3e24!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panel.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-14ff3e24!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.accordion-toggle {\r\n  cursor: pointer;\n}\n.collapse-enter-active,\r\n.collapse-leave-active {\r\n  transition: all .5s ease;\r\n  overflow: hidden;\n}\n.collapse-enter,\r\n.collapse-leave-active {\n}\r\n\r\n", "", {"version":3,"sources":["/./src/Panel.vue?60e798e2"],"names":[],"mappings":";AAyEA;EACA,gBAAA;CACA;AACA;;EAEA,yBAAA;EACA,iBAAA;CACA;AACA;;CAGA","file":"Panel.vue","sourcesContent":["<template>\r\n  <div :class=\"['panel',panelType]\">\r\n    <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\r\n      <slot name=\"header\"><h4 class=\"panel-title\">{{ header }}</h4></slot>\r\n    </div>\r\n    <transition\r\n      name=\"collapse\"\r\n      @enter=\"enter\"\r\n      @after-enter=\"afterEnter\"\r\n      @before-leave=\"beforeLeave\"\r\n    >\r\n      <div class=\"panel-collapse\" v-if=\"open\">\r\n        <div class=\"panel-body\">\r\n          <slot></slot>\r\n        </div>\r\n      </div>\r\n    </transition>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    header: {type: String},\r\n    isOpen: {type: Boolean, default: null},\r\n    type: {type: String, default : null}\r\n  },\r\n  data() {\r\n    return {\r\n      open: this.isOpen\r\n    }\r\n  },\r\n  watch: {\r\n    isOpen( val ) {\r\n      this.open = val\r\n    }\r\n  },\r\n  computed: {\r\n    inAccordion () { return this.$parent && this.$parent._isAccordion },\r\n    panelType () { return 'panel-' + (this.type || (this.$parent && this.$parent.type) || 'default') }\r\n  },\r\n  methods: {\r\n    toggle () {\r\n      this.open = !this.open\r\n      if (this.inAccordion) {\r\n        this.$parent.openChild(this)\r\n      }\r\n    },\r\n    enter (el) {\r\n      el.style.height = 'auto'\r\n      var endWidth = getComputedStyle(el).height\r\n      el.style.height = '0px'\r\n      el.offsetHeight // force repaint\r\n      el.style.height = endWidth;\r\n    },\r\n    afterEnter (el) {\r\n      el.style.height = 'auto'\r\n    },\r\n    beforeLeave (el) {\r\n      el.style.height = getComputedStyle(el).height\r\n      el.offsetHeight // force repaint\r\n      el.style.height = '0px'\r\n    },\r\n  },\r\n  created () {\r\n    if (this.isOpen === null) {\r\n      this.open = !this.inAccordion\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.accordion-toggle {\r\n  cursor: pointer;\r\n}\r\n.collapse-enter-active,\r\n.collapse-leave-active {\r\n  transition: all .5s ease;\r\n  overflow: hidden;\r\n}\r\n.collapse-enter,\r\n.collapse-leave-active {\r\n\r\n}\r\n\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 135 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    header: { type: String },
	    isOpen: { type: Boolean, default: null },
	    type: { type: String, default: null }
	  },
	  data: function data() {
	    return {
	      open: this.isOpen
	    };
	  },
	
	  watch: {
	    isOpen: function isOpen(val) {
	      this.open = val;
	    }
	  },
	  computed: {
	    inAccordion: function inAccordion() {
	      return this.$parent && this.$parent._isAccordion;
	    },
	    panelType: function panelType() {
	      return 'panel-' + (this.type || this.$parent && this.$parent.type || 'default');
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.open = !this.open;
	      if (this.inAccordion) {
	        this.$parent.openChild(this);
	      }
	    },
	    enter: function enter(el) {
	      el.style.height = 'auto';
	      var endWidth = getComputedStyle(el).height;
	      el.style.height = '0px';
	      el.offsetHeight; // force repaint
	      el.style.height = endWidth;
	    },
	    afterEnter: function afterEnter(el) {
	      el.style.height = 'auto';
	    },
	    beforeLeave: function beforeLeave(el) {
	      el.style.height = getComputedStyle(el).height;
	      el.offsetHeight; // force repaint
	      el.style.height = '0px';
	    }
	  },
	  created: function created() {
	    if (this.isOpen === null) {
	      this.open = !this.inAccordion;
	    }
	  }
	};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['panel', _vm.panelType]
	  }, [_c('div', {
	    class: ['panel-heading', {
	      'accordion-toggle': _vm.inAccordion
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.inAccordion && _vm.toggle()
	      }
	    }
	  }, [_vm._t("header", [_c('h4', {
	    staticClass: "panel-title"
	  }, [_vm._v(_vm._s(_vm.header))])])], 2), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "collapse"
	    },
	    on: {
	      "enter": _vm.enter,
	      "after-enter": _vm.afterEnter,
	      "before-leave": _vm.beforeLeave
	    }
	  }, [(_vm.open) ? _c('div', {
	    staticClass: "panel-collapse"
	  }, [_c('div', {
	    staticClass: "panel-body"
	  }, [_vm._t("default")], 2)]) : _vm._e()])], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-14ff3e24", module.exports)
	  }
	}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(138)
	
	/* script */
	__vue_exports__ = __webpack_require__(140)
	
	/* template */
	var __vue_template__ = __webpack_require__(142)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Popover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ce759ee2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ce759ee2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Popover.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(139);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ce759ee2!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ce759ee2!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.popover.top,\r\n.popover.left,\r\n.popover.right,\r\n.popover.bottom {\r\n  display: block;\n}\n.scale-enter {\r\n  animation:scale-in 0.15s ease-in;\n}\n.scale-leave-active {\r\n  animation:scale-out 0.15s ease-out;\n}\n@keyframes scale-in {\n0% {\r\n    transform: scale(0);\r\n    opacity: 0;\n}\n100% {\r\n    transform: scale(1);\r\n    opacity: 1;\n}\n}\n@keyframes scale-out {\n0% {\r\n    transform: scale(1);\r\n    opacity: 1;\n}\n100% {\r\n    transform: scale(0);\r\n    opacity: 0;\n}\n}\r\n", "", {"version":3,"sources":["/./src/Popover.vue?e616963a"],"names":[],"mappings":";AAyBA;;;;EAIA,eAAA;CACA;AACA;EACA,iCAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;CACA;AACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;AACA;IACA,oBAAA;IACA,WAAA;CACA;CACA","file":"Popover.vue","sourcesContent":["<template>\r\n  <span ref=\"trigger\">\r\n    <slot></slot>\r\n    <transition :name=\"effect\">\r\n      <div ref=\"popover\" v-if=\"show\" :class=\"['popover',placement]\">\r\n        <div class=\"arrow\"></div>\r\n        <h3 class=\"popover-title\" v-if=\"title\"><slot name=\"title\">{{title}}</slot></h3>\r\n        <div class=\"popover-content\"><slot name=\"content\"><span v-html=\"content\"></span></slot></div>\r\n      </div>\r\n    </transition>\r\n  </span>\r\n</template>\r\n\r\n<script>\r\nimport PopoverMixin from './utils/popoverMixins.js'\r\n\r\nexport default {\r\n  mixins: [PopoverMixin],\r\n  props: {\r\n    trigger: {type: String, default: 'click'}\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.popover.top,\r\n.popover.left,\r\n.popover.right,\r\n.popover.bottom {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave-active {\r\n  animation:scale-out 0.15s ease-out;\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(141);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: { type: String, default: 'click' }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(1);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    content: { type: String },
	    effect: { type: String, default: 'fade' },
	    header: { type: Boolean, default: true },
	    placement: { type: String, default: 'top' },
	    title: { type: String },
	    trigger: { type: String }
	  },
	  data: function data() {
	    return {
	      top: 0,
	      left: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    events: function events() {
	      return { contextmenu: ['contextmenu'], hover: ['mouseleave', 'mouseenter'], focus: ['blur', 'focus'] }[this.trigger] || ['click'];
	    }
	  },
	  methods: {
	    beforeEnter: function beforeEnter() {
	      var _this = this;
	
	      this.position();
	      setTimeout(function () {
	        return _this.position();
	      }, 30);
	    },
	    position: function position() {
	      var _this2 = this;
	
	      this.$nextTick(function () {
	        var popover = _this2.$refs.popover;
	        var trigger = _this2.$refs.trigger.children[0];
	        switch (_this2.placement) {
	          case 'top':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this2.top = trigger.offsetTop - popover.offsetHeight;
	            break;
	          case 'left':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'right':
	            _this2.left = trigger.offsetLeft + trigger.offsetWidth;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'bottom':
	            _this2.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this2.top = trigger.offsetTop + trigger.offsetHeight;
	            break;
	          default:
	            console.warn('Wrong placement prop');
	        }
	        popover.style.top = _this2.top + 'px';
	        popover.style.left = _this2.left + 'px';
	      });
	    },
	    toggle: function toggle(e) {
	      if (e && this.trigger === 'contextmenu') e.preventDefault();
	      this.show = !this.show;
	      if (this.show) this.beforeEnter();
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;
	
	    var trigger = this.$refs.trigger.children[0];
	    if (!trigger) return console.error('Could not find trigger v-el in your component that uses popoverMixin.');
	
	    if (this.trigger === 'focus' && !~trigger.tabIndex) {
	      trigger = (0, _NodeList2.default)('a,input,select,textarea,button', trigger);
	      if (!trigger.length) {
	        return;
	      }
	    }
	    this.events.forEach(function (event) {
	      (0, _NodeList2.default)(trigger).on(event, _this3.toggle);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._trigger) (0, _NodeList2.default)(this._trigger).off();
	  }
	};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    ref: "trigger"
	  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.effect
	    }
	  }, [(_vm.show) ? _c('div', {
	    ref: "popover",
	    class: ['popover', _vm.placement]
	  }, [_c('div', {
	    staticClass: "arrow"
	  }), _vm._v(" "), (_vm.title) ? _c('h3', {
	    staticClass: "popover-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "popover-content"
	  }, [_vm._t("content", [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)]) : _vm._e()])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ce759ee2", module.exports)
	  }
	}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(144)
	
	/* template */
	var __vue_template__ = __webpack_require__(145)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Progressbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5daee1a0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5daee1a0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Progressbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	exports.default = {
	  props: {
	    animated: { type: Boolean, default: false },
	    label: { default: false },
	    now: { required: true },
	    striped: { type: Boolean, default: false },
	    type: { type: String }
	  },
	  computed: {
	    labelBool: function labelBool() {
	      return _utils.coerce.boolean(this.label);
	    },
	    nowNum: function nowNum() {
	      return _utils.coerce.number(this.now);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: ['progress-bar', 'progress-bar-' + _vm.type, {
	      active: _vm.animated,
	      'progress-bar-striped': _vm.striped
	    }],
	    style: ({
	      width: _vm.nowNum + '%'
	    }),
	    domProps: {
	      "textContent": _vm._s(_vm.labelBool ? _vm.nowNum + '%' : null)
	    }
	  })
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5daee1a0", module.exports)
	  }
	}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(147)
	
	/* script */
	__vue_exports__ = __webpack_require__(149)
	
	/* template */
	var __vue_template__ = __webpack_require__(150)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-14089765", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-14089765", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(148);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-14089765!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-14089765!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.radio { position: relative;\n}\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\n}\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\n}\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\n}\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\n}\n.radio.active .btn-default { filter: brightness(75%);\n}\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\n}\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\n}\r\n", "", {"version":3,"sources":["/./src/Radio.vue?11624c48"],"names":[],"mappings":";AA8GA,SAAA,mBAAA;CAAA;AACA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,8OAAA;CACA;AACA,6BAAA,wBAAA;CAAA;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Radio.vue","sourcesContent":["<template>\r\n  <div :is=\"buttonStyle?'label':'div'\" @click.prevent=\"toggle\"\r\n    :class=\"[(buttonStyle?'btn btn-'+typeColor:'radio '+typeColor),{active:active,disabled:disabled,readonly:readonly}]\"\r\n  >\r\n    <template v-if=\"buttonStyle\">\r\n      <input type=\"radio\" autocomplete=\"off\" ref=\"input\"\r\n        v-show=\"!readonly\"\r\n        v-model=\"check\"\r\n        :value=\"selectedValue\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <slot></slot>\r\n    </template>\r\n    <label v-else class=\"open\">\r\n      <input type=\"radio\" autocomplete=\"off\" ref=\"input\"\r\n        v-model=\"check\"\r\n        :value=\"selectedValue\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\r\n      <slot></slot>\r\n    </label>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    button: {type: Boolean, default: false},\r\n    disabled: {type: Boolean, default: false},\r\n    name: {type: String, default: null},\r\n    readonly: {type: Boolean, default: false},\r\n    selectedValue: {default: true},\r\n    type: {type: String, default: null},\r\n    value: {default: false}\r\n  },\r\n  data () {\r\n    return {\r\n      check: this.value\r\n    }\r\n  },\r\n  computed: {\r\n    active () { return this.check === this.selectedValue },\r\n    inGroup () { return this.$parent && this.$parent.btnGroup && !this.$parent._checkboxGroup },\r\n    parentValue () { return this.$parent.val },\r\n    buttonStyle () { return this.button || (this.$parent && this.$parent.btnGroup && this.$parent.buttons) },\r\n    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }\r\n  },\r\n  watch: {\r\n    check (val) {\r\n      if (this.selectedValue === val) {\r\n        this.$emit('input', val)\r\n        this.$emit('checked', true)\r\n        this.updateParent()\r\n      }\r\n    },\r\n    parentValue (val) {\r\n      this.updateFromParent()\r\n    },\r\n    value (val) {\r\n      if (this.selectedValue == val) {\r\n        this.check = val\r\n      } else {\r\n        this.check = false\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    if (this.inGroup) {\r\n      var parent = this.$parent\r\n      parent._radioGroup = true\r\n      this.updateFromParent()\r\n    }\r\n  },\r\n  methods: {\r\n    updateFromParent() {\r\n      if (this.inGroup) {\r\n        if (this.selectedValue == this.$parent.val) {\r\n          this.check = this.selectedValue\r\n        } else {\r\n          this.check = false\r\n        }\r\n      }\r\n    },\r\n    updateParent() {\r\n      if (this.inGroup) {\r\n        if (this.selectedValue === this.check) {\r\n          this.$parent.val = this.selectedValue\r\n        }\r\n      }\r\n    },\r\n    focus () {\r\n      this.$refs.input.focus()\r\n    },\r\n    toggle () {\r\n      if (this.disabled) { return }\r\n      this.focus()\r\n      if (this.readonly) { return }\r\n      this.check = this.selectedValue\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scope>\r\n.radio { position: relative; }\r\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\r\n}\r\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\r\n}\r\n.radio.active .btn-default { filter: brightness(75%); }\r\n\r\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 149 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    button: { type: Boolean, default: false },
	    disabled: { type: Boolean, default: false },
	    name: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    selectedValue: { default: true },
	    type: { type: String, default: null },
	    value: { default: false }
	  },
	  data: function data() {
	    return {
	      check: this.value
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return this.check === this.selectedValue;
	    },
	    inGroup: function inGroup() {
	      return this.$parent && this.$parent.btnGroup && !this.$parent._checkboxGroup;
	    },
	    parentValue: function parentValue() {
	      return this.$parent.val;
	    },
	    buttonStyle: function buttonStyle() {
	      return this.button || this.$parent && this.$parent.btnGroup && this.$parent.buttons;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    check: function check(val) {
	      if (this.selectedValue === val) {
	        this.$emit('input', val);
	        this.$emit('checked', true);
	        this.updateParent();
	      }
	    },
	    parentValue: function parentValue(val) {
	      this.updateFromParent();
	    },
	    value: function value(val) {
	      if (this.selectedValue == val) {
	        this.check = val;
	      } else {
	        this.check = false;
	      }
	    }
	  },
	  created: function created() {
	    if (this.inGroup) {
	      var parent = this.$parent;
	      parent._radioGroup = true;
	      this.updateFromParent();
	    }
	  },
	
	  methods: {
	    updateFromParent: function updateFromParent() {
	      if (this.inGroup) {
	        if (this.selectedValue == this.$parent.val) {
	          this.check = this.selectedValue;
	        } else {
	          this.check = false;
	        }
	      }
	    },
	    updateParent: function updateParent() {
	      if (this.inGroup) {
	        if (this.selectedValue === this.check) {
	          this.$parent.val = this.selectedValue;
	        }
	      }
	    },
	    focus: function focus() {
	      this.$refs.input.focus();
	    },
	    toggle: function toggle() {
	      if (this.disabled) {
	        return;
	      }
	      this.focus();
	      if (this.readonly) {
	        return;
	      }
	      this.check = this.selectedValue;
	    }
	  }
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c(_vm.buttonStyle ? 'label' : 'div', {
	    tag: "div",
	    class: [(_vm.buttonStyle ? 'btn btn-' + _vm.typeColor : 'radio ' + _vm.typeColor), {
	      active: _vm.active,
	      disabled: _vm.disabled,
	      readonly: _vm.readonly
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [(_vm.buttonStyle) ? [_c('input', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.readonly),
	      expression: "!readonly"
	    }, {
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check),
	      expression: "check"
	    }],
	    ref: "input",
	    attrs: {
	      "type": "radio",
	      "autocomplete": "off",
	      "name": _vm.name,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.selectedValue,
	      "checked": _vm._q(_vm.check, _vm.selectedValue)
	    },
	    on: {
	      "__c": function($event) {
	        _vm.check = _vm.selectedValue
	      }
	    }
	  }), _vm._v(" "), _vm._t("default")] : _c('label', {
	    staticClass: "open"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check),
	      expression: "check"
	    }],
	    ref: "input",
	    attrs: {
	      "type": "radio",
	      "autocomplete": "off",
	      "name": _vm.name,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.selectedValue,
	      "checked": _vm._q(_vm.check, _vm.selectedValue)
	    },
	    on: {
	      "__c": function($event) {
	        _vm.check = _vm.selectedValue
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [_vm.active ? 'btn-' + _vm.typeColor : '', {
	      bg: _vm.typeColor === 'default'
	    }]
	  }), _vm._v(" "), (_vm.active && _vm.typeColor === 'default') ? _c('span', {
	    staticClass: "icon"
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-14089765", module.exports)
	  }
	}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(152)
	
	/* script */
	__vue_exports__ = __webpack_require__(154)
	
	/* template */
	var __vue_template__ = __webpack_require__(155)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Select.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0d158d82"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0d158d82", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0d158d82", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Select.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0d158d82&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0d158d82&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form-control.dropdown-toggle[data-v-0d158d82]{\r\n  height: auto;\r\n  padding-right: 24px;\n}\n.form-control.dropdown-toggle[data-v-0d158d82]:after{\r\n  content: ' ';\r\n  position: absolute;\r\n  right: 13px;\r\n  top: 50%;\r\n  margin: -1px 0 0;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid \\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\n}\n.bs-searchbox[data-v-0d158d82] {\r\n  position: relative;\r\n  margin: 4px 8px;\n}\n.bs-searchbox .close[data-v-0d158d82] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\n}\n.bs-searchbox input[data-v-0d158d82]  {\r\n    color: #6b6b6b;\r\n    background-color: transparent;\r\n    border: 1px solid #e7e7e7;\n}\n.bs-searchbox input[data-v-0d158d82]::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n    color: #999;\n}\n.bs-searchbox input[data-v-0d158d82]::-moz-placeholder { /* Firefox 19+ */\r\n    color: #999;\n}\n.bs-searchbox input[data-v-0d158d82]::-ms-input-placeholder { /* IE 10+ */\r\n    color: #999;\n}\n.bs-searchbox input[data-v-0d158d82]::-moz-placeholder { /* Firefox 18- */\r\n    color: #999;\n}\n.bs-searchbox input[data-v-0d158d82]:focus,\r\n.form-control.dropdown-toggle[data-v-0d158d82]:focus {\r\n  outline: 0;\r\n  /*border-color: #66afe9 !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);*/\n}\n.secret[data-v-0d158d82] {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\n}\n.form-control.dropdown-toggle>.close[data-v-0d158d82] { margin-left: 5px;\n}\n.notify.out[data-v-0d158d82] { position: relative;\n}\n.notify.in[data-v-0d158d82],\r\n.notify>div[data-v-0d158d82] {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\n}\n.notify>div[data-v-0d158d82] {\r\n  top: 5px;\r\n  z-index: 1;\n}\n.notify.in[data-v-0d158d82] {\r\n  opacity: .9;\r\n  bottom: 5px;\n}\n.btn-group-justified .dropdown-toggle>span[data-v-0d158d82]:not(.close) {\r\n  width: calc(100% - 25px);\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  margin-bottom: -4px;\n}\n.btn-group-justified .dropdown-menu[data-v-0d158d82] { width: 100%;\n}\r\n", "", {"version":3,"sources":["/./src/Select.vue?4cd98c09"],"names":[],"mappings":";AAyQA;EACA,aAAA;EACA,oBAAA;CACA;AACA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,SAAA;EACA,iBAAA;EACA,uBAAA;EACA,yBAAA;EACA,oCAAA;EACA,mCAAA;CACA;AACA;EACA,mBAAA;EACA,gBAAA;CACA;AACA;EACA,mBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;CACA;AAEA;IACA,eAAA;IACA,8BAAA;IACA,0BAAA;CACA;AACA,kEAAA,yBAAA;IACA,YAAA;CACA;AACA,yDAAA,iBAAA;IACA,YAAA;CACA;AACA,8DAAA,YAAA;IACA,YAAA;CACA;AACA,yDAAA,iBAAA;IACA,YAAA;CACA;AAEA;;EAEA,WAAA;EACA;8EACA;CACA;AACA;EACA,UAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,WAAA;EACA,mBAAA;EACA,WAAA;CACA;AACA,wDAAA,iBAAA;CAAA;AACA,+BAAA,mBAAA;CAAA;AACA;;EAEA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,0BAAA;EACA,4CAAA;EACA,qBAAA;CACA;AACA;EACA,SAAA;EACA,WAAA;CACA;AACA;EACA,YAAA;EACA,YAAA;CACA;AACA;EACA,yBAAA;EACA,sBAAA;EACA,iBAAA;EACA,oBAAA;EACA,wBAAA;EACA,oBAAA;CACA;AACA,uDAAA,YAAA;CAAA","file":"Select.vue","sourcesContent":["<template>\r\n  <div ref=\"select\" :class=\"classes\" v-click-outside=\"close\">\r\n    <div ref=\"btn\" class=\"form-control dropdown-toggle\" tabindex=\"1\" :disabled=\"disabled || !hasParent\" :readonly=\"readonly\"\r\n      @blur=\"canSearch ? null : close()\"\r\n      @click=\"toggle()\"\r\n      @keydown.esc.stop.prevent=\"close\"\r\n      @keydown.space.stop.prevent=\"toggle\"\r\n      @keydown.enter.stop.prevent=\"toggle\"\r\n    >\r\n      <span class=\"btn-content\" v-html=\"loading ? text.loading : showPlaceholder || (multiple && showCount ? selectedText : selected)\"></span>\r\n      <span v-if=\"clearButton&&values.length\" class=\"close\" @click=\"clear()\">&times;</span>\r\n    </div>\r\n    <select ref=\"sel\" v-model=\"val\" :name=\"name\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\">\r\n      <option v-if=\"required\" value=\"\"></option>\r\n      <option v-for=\"option in list\" :value=\"option[optionsValue]\">{{ option[optionsLabel] }}</option>\r\n    </select>\r\n    <ul class=\"dropdown-menu\">\r\n      <template v-if=\"list.length\">\r\n        <li v-if=\"canSearch\" class=\"bs-searchbox\">\r\n          <input type=\"text\" :placeholder=\"searchText||text.search\" class=\"form-control\" autocomplete=\"off\" ref=\"search\"\r\n            v-model=\"searchValue\"\r\n            @keyup.esc=\"close\"\r\n          />\r\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\">&times;</span>\r\n        </li>\r\n        <li v-if=\"required&&!clearButton\"><a @mousedown.prevent=\"clear() && close()\">{{ placeholder || text.notSelected }}</a></li>\r\n        <li v-for=\"option in filteredOptions\" :id=\"option[optionsValue]\" v-if=\"option.Hide == null || option.Hide == false\" >\r\n          <a @mousedown.prevent=\"select(option[optionsValue])\">\r\n            <span v-html=\"option[optionsLabel]\"></span>\r\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option[optionsValue])\"></span>\r\n          </a>\r\n        </li>\r\n      </template>\r\n      <slot></slot>\r\n      <transition v-if=\"notify && !closeOnSelect\" name=\"fadein\"><div class=\"notify in\">{{limitText}}</div></transition>\r\n    </ul>\r\n    <transition v-if=\"notify && closeOnSelect\" name=\"fadein\"><div class=\"notify out\"><div>{{limitText}}</div></div></transition>\r\n    <!-- <pre>Options: {{list}}</pre> -->\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {translations} from './utils/utils.js'\r\nimport ClickOutside from './directives/ClickOutside.js'\r\n\r\nvar timeout = {}\r\nexport default {\r\n  directives: {\r\n    ClickOutside\r\n  },\r\n  props: {\r\n    clearButton: {type: Boolean, default: false},\r\n    closeOnSelect: {type: Boolean, default: false},\r\n    disabled: {type: Boolean, default: false},\r\n    lang: {type: String, default: navigator.language},\r\n    limit: {type: Number, default: 1024},\r\n    minSearch: {type: Number, default: 0},\r\n    multiple: {type: Boolean, default: false},\r\n    name: {type: String, default: null},\r\n    options: {type: Array, default () { return [] }},\r\n    optionsLabel: {type: String, default: 'label'},\r\n    optionsValue: {type: String, default: 'value'},\r\n    parent: {default: true},\r\n    placeholder: {type: String, default: null},\r\n    readonly: {type: Boolean, default: null},\r\n    required: {type: Boolean, default: null},\r\n    search: {type: Boolean, default: false},\r\n    searchText: {type: String, default: null},\r\n    countText: {type: String, default: null},\r\n    showCount: {type: Boolean, default: false},\r\n    url: {type: String, default: null},\r\n    value: null\r\n  },\r\n  data () {\r\n    return {\r\n      list: [],\r\n      loading: null,\r\n      searchValue: null,\r\n      show: false,\r\n      notify: false,\r\n      val: null,\r\n      valid: null\r\n    }\r\n  },\r\n  computed: {\r\n    canSearch () { return this.minSearch ? this.list.length >= this.minSearch : this.search },\r\n    classes () { return [{open: this.show, disabled: this.disabled}, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'] },\r\n    filteredOptions () {\r\n      var search = (this.searchValue || '').toLowerCase()\r\n      return !search ? this.list : this.list.filter(el => {\r\n        return ~el[this.optionsLabel].toLowerCase().search(search)\r\n      })\r\n    },\r\n    hasParent () { return this.parent instanceof Array ? this.parent.length : this.parent },\r\n    inInput () { return this.$parent._input },\r\n    isLi () { return this.$parent._navbar || this.$parent.menu || this.$parent._tabset },\r\n    limitText () { return this.text.limit.replace('{{limit}}', this.limit) },\r\n    selected () {\r\n      if (this.list.length === 0) { return '' }\r\n      var sel = this.values.map(val => (this.list.find(o => o[this.optionsValue] == val) || {})[this.optionsLabel]).filter(val => val !== undefined)\r\n      this.$emit('selected', sel)\r\n      return sel.join(', ')\r\n    },\r\n    selectedText () { return this.countText || this.text.selected.replace('{{count}}', this.values.length) },\r\n    showPlaceholder () { return (this.values.length === 0 || !this.hasParent) ? (this.placeholder || this.text.notSelected) : null },\r\n    text () { return translations(this.lang) },\r\n    values () { return this.val instanceof Array ? this.val : ~[null, undefined].indexOf(this.val) ? [] : [this.val] },\r\n    valOptions () { return this.list.map(el => el[this.optionsValue]) }\r\n  },\r\n  watch: {\r\n    options (options) {\r\n      if (options instanceof Array) this.setOptions(options)\r\n    },\r\n    show (val) {\r\n      if (val) {\r\n        this.$refs.search ? this.$refs.search.focus() : this.$refs.btn.focus()\r\n        // onBlur(this.$refs.select, e => { this.show = false })\r\n      } else {\r\n        // offBlur(this.$refs.select)\r\n      }\r\n    },\r\n    url () {\r\n      this.urlChanged()\r\n    },\r\n    valid (val, old) {\r\n      this.$emit('isvalid', val)\r\n      this.$emit(!val ? 'invalid' : 'valid')\r\n      if (val !== old && this._parent) this._parent.validate()\r\n    },\r\n    value (val, old) {\r\n      if (val !== old) { this.val = val }\r\n    },\r\n    val (val, old) {\r\n      if (val === undefined) { this.val = val = null }\r\n      if (val !== old) {\r\n        this.$emit('change', val)\r\n        this.$emit('input', val)\r\n      }\r\n      if (val instanceof Array && val.length > this.limit) {\r\n        this.val = val.slice(0, this.limit)\r\n        this.notify = true\r\n        if (timeout.limit) clearTimeout(timeout.limit)\r\n        timeout.limit = setTimeout(() => {\r\n          timeout.limit = false\r\n          this.notify = false\r\n        }, 1500)\r\n      }\r\n      this.valid = this.validate()\r\n    }\r\n  },\r\n  methods: {\r\n    close () {\r\n      this.show = false\r\n    },\r\n    checkData () {\r\n      if (this.multiple) {\r\n        if (this.limit < 1) { this.limit = 1 }\r\n        if (!(this.val instanceof Array)) {\r\n          this.val = (this.val === null || this.val === undefined) ? [] : [this.val]\r\n        }\r\n        var values = this.valOptions\r\n        this.val = this.val.filter(el => ~values.indexOf(el))\r\n        if (this.values.length > this.limit) {\r\n          this.val = this.val.slice(0, this.limit)\r\n        }\r\n      } else {\r\n        if (!~this.valOptions.indexOf(this.val)) { this.val = null }\r\n      }\r\n    },\r\n    clear () {\r\n      if (this.disabled || this.readonly) { return }\r\n      this.val = this.val instanceof Array ? [] : null\r\n      this.toggle()\r\n    },\r\n    clearSearch () {\r\n      this.searchValue = ''\r\n      this.$refs.search.focus()\r\n    },\r\n    isSelected (v) {\r\n      return this.values.indexOf(v) > -1\r\n    },\r\n    select (v) {\r\n      if (this.val instanceof Array) {\r\n        var newVal = this.val.slice(0)\r\n        if (~newVal.indexOf(v)) {\r\n          newVal.splice(newVal.indexOf(v), 1)\r\n        } else {\r\n          newVal.push(v)\r\n        }\r\n        this.val = newVal\r\n        if (this.closeOnSelect) {\r\n          this.toggle()\r\n        }\r\n      } else {\r\n        this.val = v\r\n        this.toggle()\r\n      }\r\n    },\r\n    setOptions (options) {\r\n      if(options != null) {\r\n        this.list = options.map(el => {\r\n          if (el instanceof Object) { return el }\r\n          let obj = {}\r\n          obj[this.optionsLabel] = el\r\n          obj[this.optionsValue] = el\r\n          return obj\r\n        });\r\n        this.$emit('options', this.list);\r\n      }\r\n    },\r\n    toggle () {\r\n      if (this.disabled && !this.show) return;\r\n      this.show = !this.show\r\n      if (!this.show) this.$refs.btn.focus()\r\n    },\r\n    urlChanged () {\r\n      if (!this.url || !this.$http) { return }\r\n      this.loading = true\r\n      this.$http.get(this.url).then(response => {\r\n        var data = response.data instanceof Array ? response.data : []\r\n        try { data = JSON.parse(data) } catch (e) {}\r\n        this.setOptions(data)\r\n        this.loading = false\r\n        this.checkData()\r\n      }, response => {\r\n        this.loading = false\r\n      })\r\n    },\r\n    validate () {\r\n      return !this.required ? true : this.val instanceof Array ? this.val.length > 0 : this.val !== null\r\n    }\r\n  },\r\n  created () {\r\n    this.setOptions(this.options)\r\n    this.val = this.value;\r\n    this._select = true\r\n    if (this.val === undefined || !this.parent) { this.val = null }\r\n    if (!this.multiple && this.val instanceof Array) {\r\n      this.val = this.val[0]\r\n    }\r\n    this.checkData()\r\n    if (this.url) this.urlChanged()\r\n    let parent = this.$parent\r\n    while (parent && !parent._formValidator) { parent = parent.$parent }\r\n    if (parent && parent._formValidator) {\r\n      parent.children.push(this)\r\n      this._parent = parent\r\n    }\r\n  },\r\n  mounted () {\r\n    if (this._parent) this._parent.children.push(this)\r\n    this.setOptions(this.options)\r\n    this.val = this.value\r\n    this.checkData()\r\n  },\r\n  beforeDestroy () {\r\n    if (this._parent) {\r\n      var index = this._parent.children.indexOf(this)\r\n      this._parent.children.splice(index, 1)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.form-control.dropdown-toggle{\r\n  height: auto;\r\n  padding-right: 24px;\r\n}\r\n.form-control.dropdown-toggle:after{\r\n  content: ' ';\r\n  position: absolute;\r\n  right: 13px;\r\n  top: 50%;\r\n  margin: -1px 0 0;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid \\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n.bs-searchbox {\r\n  position: relative;\r\n  margin: 4px 8px;\r\n}\r\n.bs-searchbox .close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n\r\n.bs-searchbox input  {\r\n    color: #6b6b6b;\r\n    background-color: transparent;\r\n    border: 1px solid #e7e7e7;\r\n}\r\n.bs-searchbox input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n    color: #999; \r\n}\r\n.bs-searchbox input::-moz-placeholder { /* Firefox 19+ */\r\n    color: #999; \r\n}\r\n.bs-searchbox input::-ms-input-placeholder { /* IE 10+ */\r\n    color: #999; \r\n}\r\n.bs-searchbox input::-moz-placeholder { /* Firefox 18- */\r\n    color: #999; \r\n}\r\n\r\n.bs-searchbox input:focus,\r\n.form-control.dropdown-toggle:focus {\r\n  outline: 0;\r\n  /*border-color: #66afe9 !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);*/\r\n}\r\n.secret {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n.form-control.dropdown-toggle>.close { margin-left: 5px;}\r\n.notify.out { position: relative; }\r\n.notify.in,\r\n.notify>div {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\r\n}\r\n.notify>div {\r\n  top: 5px;\r\n  z-index: 1;\r\n}\r\n.notify.in {\r\n  opacity: .9;\r\n  bottom: 5px;\r\n}\r\n.btn-group-justified .dropdown-toggle>span:not(.close) {\r\n  width: calc(100% - 25px);\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  margin-bottom: -4px;\r\n}\r\n.btn-group-justified .dropdown-menu { width: 100%; }\r\n</style>\r\n\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _ClickOutside = __webpack_require__(66);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var timeout = {};
	exports.default = {
	  directives: {
	    ClickOutside: _ClickOutside2.default
	  },
	  props: {
	    clearButton: { type: Boolean, default: false },
	    closeOnSelect: { type: Boolean, default: false },
	    disabled: { type: Boolean, default: false },
	    lang: { type: String, default: navigator.language },
	    limit: { type: Number, default: 1024 },
	    minSearch: { type: Number, default: 0 },
	    multiple: { type: Boolean, default: false },
	    name: { type: String, default: null },
	    options: { type: Array, default: function _default() {
	        return [];
	      }
	    },
	    optionsLabel: { type: String, default: 'label' },
	    optionsValue: { type: String, default: 'value' },
	    parent: { default: true },
	    placeholder: { type: String, default: null },
	    readonly: { type: Boolean, default: null },
	    required: { type: Boolean, default: null },
	    search: { type: Boolean, default: false },
	    searchText: { type: String, default: null },
	    countText: { type: String, default: null },
	    showCount: { type: Boolean, default: false },
	    url: { type: String, default: null },
	    value: null
	  },
	  data: function data() {
	    return {
	      list: [],
	      loading: null,
	      searchValue: null,
	      show: false,
	      notify: false,
	      val: null,
	      valid: null
	    };
	  },
	
	  computed: {
	    canSearch: function canSearch() {
	      return this.minSearch ? this.list.length >= this.minSearch : this.search;
	    },
	    classes: function classes() {
	      return [{ open: this.show, disabled: this.disabled }, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'];
	    },
	    filteredOptions: function filteredOptions() {
	      var _this = this;
	
	      var search = (this.searchValue || '').toLowerCase();
	      return !search ? this.list : this.list.filter(function (el) {
	        return ~el[_this.optionsLabel].toLowerCase().search(search);
	      });
	    },
	    hasParent: function hasParent() {
	      return this.parent instanceof Array ? this.parent.length : this.parent;
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._navbar || this.$parent.menu || this.$parent._tabset;
	    },
	    limitText: function limitText() {
	      return this.text.limit.replace('{{limit}}', this.limit);
	    },
	    selected: function selected() {
	      var _this2 = this;
	
	      if (this.list.length === 0) {
	        return '';
	      }
	      var sel = this.values.map(function (val) {
	        return (_this2.list.find(function (o) {
	          return o[_this2.optionsValue] == val;
	        }) || {})[_this2.optionsLabel];
	      }).filter(function (val) {
	        return val !== undefined;
	      });
	      this.$emit('selected', sel);
	      return sel.join(', ');
	    },
	    selectedText: function selectedText() {
	      return this.countText || this.text.selected.replace('{{count}}', this.values.length);
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.values.length === 0 || !this.hasParent ? this.placeholder || this.text.notSelected : null;
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    values: function values() {
	      return this.val instanceof Array ? this.val : ~[null, undefined].indexOf(this.val) ? [] : [this.val];
	    },
	    valOptions: function valOptions() {
	      var _this3 = this;
	
	      return this.list.map(function (el) {
	        return el[_this3.optionsValue];
	      });
	    }
	  },
	  watch: {
	    options: function options(_options) {
	      if (_options instanceof Array) this.setOptions(_options);
	    },
	    show: function show(val) {
	      if (val) {
	        this.$refs.search ? this.$refs.search.focus() : this.$refs.btn.focus();
	        // onBlur(this.$refs.select, e => { this.show = false })
	      } else {
	          // offBlur(this.$refs.select)
	        }
	    },
	    url: function url() {
	      this.urlChanged();
	    },
	    valid: function valid(val, old) {
	      this.$emit('isvalid', val);
	      this.$emit(!val ? 'invalid' : 'valid');
	      if (val !== old && this._parent) this._parent.validate();
	    },
	    value: function value(val, old) {
	      if (val !== old) {
	        this.val = val;
	      }
	    },
	    val: function val(_val, old) {
	      var _this4 = this;
	
	      if (_val === undefined) {
	        this.val = _val = null;
	      }
	      if (_val !== old) {
	        this.$emit('change', _val);
	        this.$emit('input', _val);
	      }
	      if (_val instanceof Array && _val.length > this.limit) {
	        this.val = _val.slice(0, this.limit);
	        this.notify = true;
	        if (timeout.limit) clearTimeout(timeout.limit);
	        timeout.limit = setTimeout(function () {
	          timeout.limit = false;
	          _this4.notify = false;
	        }, 1500);
	      }
	      this.valid = this.validate();
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    },
	    checkData: function checkData() {
	      if (this.multiple) {
	        if (this.limit < 1) {
	          this.limit = 1;
	        }
	        if (!(this.val instanceof Array)) {
	          this.val = this.val === null || this.val === undefined ? [] : [this.val];
	        }
	        var values = this.valOptions;
	        this.val = this.val.filter(function (el) {
	          return ~values.indexOf(el);
	        });
	        if (this.values.length > this.limit) {
	          this.val = this.val.slice(0, this.limit);
	        }
	      } else {
	        if (!~this.valOptions.indexOf(this.val)) {
	          this.val = null;
	        }
	      }
	    },
	    clear: function clear() {
	      if (this.disabled || this.readonly) {
	        return;
	      }
	      this.val = this.val instanceof Array ? [] : null;
	      this.toggle();
	    },
	    clearSearch: function clearSearch() {
	      this.searchValue = '';
	      this.$refs.search.focus();
	    },
	    isSelected: function isSelected(v) {
	      return this.values.indexOf(v) > -1;
	    },
	    select: function select(v) {
	      if (this.val instanceof Array) {
	        var newVal = this.val.slice(0);
	        if (~newVal.indexOf(v)) {
	          newVal.splice(newVal.indexOf(v), 1);
	        } else {
	          newVal.push(v);
	        }
	        this.val = newVal;
	        if (this.closeOnSelect) {
	          this.toggle();
	        }
	      } else {
	        this.val = v;
	        this.toggle();
	      }
	    },
	    setOptions: function setOptions(options) {
	      var _this5 = this;
	
	      if (options != null) {
	        this.list = options.map(function (el) {
	          if (el instanceof Object) {
	            return el;
	          }
	          var obj = {};
	          obj[_this5.optionsLabel] = el;
	          obj[_this5.optionsValue] = el;
	          return obj;
	        });
	        this.$emit('options', this.list);
	      }
	    },
	    toggle: function toggle() {
	      if (this.disabled && !this.show) return;
	      this.show = !this.show;
	      if (!this.show) this.$refs.btn.focus();
	    },
	    urlChanged: function urlChanged() {
	      var _this6 = this;
	
	      if (!this.url || !this.$http) {
	        return;
	      }
	      this.loading = true;
	      this.$http.get(this.url).then(function (response) {
	        var data = response.data instanceof Array ? response.data : [];
	        try {
	          data = JSON.parse(data);
	        } catch (e) {}
	        _this6.setOptions(data);
	        _this6.loading = false;
	        _this6.checkData();
	      }, function (response) {
	        _this6.loading = false;
	      });
	    },
	    validate: function validate() {
	      return !this.required ? true : this.val instanceof Array ? this.val.length > 0 : this.val !== null;
	    }
	  },
	  created: function created() {
	    this.setOptions(this.options);
	    this.val = this.value;
	    this._select = true;
	    if (this.val === undefined || !this.parent) {
	      this.val = null;
	    }
	    if (!this.multiple && this.val instanceof Array) {
	      this.val = this.val[0];
	    }
	    this.checkData();
	    if (this.url) this.urlChanged();
	    var parent = this.$parent;
	    while (parent && !parent._formValidator) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formValidator) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  mounted: function mounted() {
	    if (this._parent) this._parent.children.push(this);
	    this.setOptions(this.options);
	    this.val = this.value;
	    this.checkData();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) {
	      var index = this._parent.children.indexOf(this);
	      this._parent.children.splice(index, 1);
	    }
	  }
	};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (_vm.close),
	      expression: "close"
	    }],
	    ref: "select",
	    class: _vm.classes
	  }, [_c('div', {
	    ref: "btn",
	    staticClass: "form-control dropdown-toggle",
	    attrs: {
	      "tabindex": "1",
	      "disabled": _vm.disabled || !_vm.hasParent,
	      "readonly": _vm.readonly
	    },
	    on: {
	      "blur": function($event) {
	        _vm.canSearch ? null : _vm.close()
	      },
	      "click": function($event) {
	        _vm.toggle()
	      },
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.close($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.toggle($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.toggle($event)
	      }]
	    }
	  }, [_c('span', {
	    staticClass: "btn-content",
	    domProps: {
	      "innerHTML": _vm._s(_vm.loading ? _vm.text.loading : _vm.showPlaceholder || (_vm.multiple && _vm.showCount ? _vm.selectedText : _vm.selected))
	    }
	  }), _vm._v(" "), (_vm.clearButton && _vm.values.length) ? _c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        _vm.clear()
	      }
	    }
	  }, [_vm._v("×")]) : _vm._e()]), _vm._v(" "), _c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    ref: "sel",
	    staticClass: "secret",
	    attrs: {
	      "name": _vm.name,
	      "multiple": _vm.multiple,
	      "required": _vm.required,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    on: {
	      "change": function($event) {
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.val = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
	      }
	    }
	  }, [(_vm.required) ? _c('option', {
	    attrs: {
	      "value": ""
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._l((_vm.list), function(option) {
	    return _c('option', {
	      domProps: {
	        "value": option[_vm.optionsValue]
	      }
	    }, [_vm._v(_vm._s(option[_vm.optionsLabel]))])
	  })], 2), _vm._v(" "), _c('ul', {
	    staticClass: "dropdown-menu"
	  }, [(_vm.list.length) ? [(_vm.canSearch) ? _c('li', {
	    staticClass: "bs-searchbox"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchValue),
	      expression: "searchValue"
	    }],
	    ref: "search",
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.searchText || _vm.text.search,
	      "autocomplete": "off"
	    },
	    domProps: {
	      "value": (_vm.searchValue)
	    },
	    on: {
	      "keyup": function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        _vm.close($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchValue = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.searchValue),
	      expression: "searchValue"
	    }],
	    staticClass: "close",
	    on: {
	      "click": _vm.clearSearch
	    }
	  }, [_vm._v("×")])]) : _vm._e(), _vm._v(" "), (_vm.required && !_vm.clearButton) ? _c('li', [_c('a', {
	    on: {
	      "mousedown": function($event) {
	        $event.preventDefault();
	        _vm.clear() && _vm.close()
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.placeholder || _vm.text.notSelected))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.filteredOptions), function(option) {
	    return (option.Hide == null || option.Hide == false) ? _c('li', {
	      attrs: {
	        "id": option[_vm.optionsValue]
	      }
	    }, [_c('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          _vm.select(option[_vm.optionsValue])
	        }
	      }
	    }, [_c('span', {
	      domProps: {
	        "innerHTML": _vm._s(option[_vm.optionsLabel])
	      }
	    }), _vm._v(" "), _c('span', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (_vm.isSelected(option[_vm.optionsValue])),
	        expression: "isSelected(option[optionsValue])"
	      }],
	      staticClass: "glyphicon glyphicon-ok check-mark"
	    })])]) : _vm._e()
	  })] : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.notify && !_vm.closeOnSelect) ? _c('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_c('div', {
	    staticClass: "notify in"
	  }, [_vm._v(_vm._s(_vm.limitText))])]) : _vm._e()], 2), _vm._v(" "), (_vm.notify && _vm.closeOnSelect) ? _c('transition', {
	    attrs: {
	      "name": "fadein"
	    }
	  }, [_c('div', {
	    staticClass: "notify out"
	  }, [_c('div', [_vm._v(_vm._s(_vm.limitText))])])]) : _vm._e()], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0d158d82", module.exports)
	  }
	}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(157)
	
	/* template */
	var __vue_template__ = __webpack_require__(158)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9c8f5232", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9c8f5232", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 157 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	
	exports.default = {
	  computed: {
	    index: function index() {
	      return this.$parent.$children.indexOf(this);
	    },
	    show: function show() {
	      return this.$parent.index === this.index;
	    }
	  },
	  mounted: function mounted() {
	    if (this.$parent.indicator_list) {
	      this.$parent.indicator_list.push(this.index);
	    }
	
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "item"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9c8f5232", module.exports)
	  }
	}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(160)
	
	/* script */
	__vue_exports__ = __webpack_require__(162)
	
	/* template */
	var __vue_template__ = __webpack_require__(163)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Spinner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2ecaaa03", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2ecaaa03", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Spinner.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(161);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2ecaaa03!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spinner.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2ecaaa03!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spinner.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n@keyframes spin {\n100% {\r\n    transform: rotate(360deg);\n}\n}\n.spinner-gritcode {\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 9998;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  background: rgba(255, 255, 255, 0.9);\n}\n.spinner-gritcode.spinner-fixed {\r\n  position: fixed;\n}\n.spinner-gritcode .spinner-wrapper {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\n}\n.spinner-gritcode .spinner-circle {\r\n  position: relative;\r\n  border: 4px solid #ccc;\r\n  border-right-color: #337ab7;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  animation: spin 0.6s linear;\r\n  animation-iteration-count: infinite;\r\n  width: 3em;\r\n  height: 3em;\r\n  z-index: 2;\n}\n.spinner-gritcode .spinner-text {\r\n  position: relative;\r\n  text-align: center;\r\n  margin-top: 0.5em;\r\n  z-index: 2;\r\n  width: 100%;\r\n  font-size: 95%;\r\n  color: #337ab7;\n}\n.spinner-gritcode.spinner-sm .spinner-circle {\r\n  width: 1.5em;\r\n  height: 1.5em;\n}\n.spinner-gritcode.spinner-md .spinner-circle {\r\n  width: 2em;\r\n  height: 2em;\n}\n.spinner-gritcode.spinner-lg .spinner-circle {\r\n  width: 2.5em;\r\n  height: 2.5em;\n}\n.spinner-gritcode.spinner-xl .spinner-circle {\r\n  width: 3.5em;\r\n  height: 3.5em;\n}\n.lt-ie10 .spinner-gritcode .spinner-circle,\r\n.ie9 .spinner-gritcode .spinner-circle,\r\n.oldie .spinner-gritcode .spinner-circle,\r\n.no-csstransitions .spinner-gritcode .spinner-circle,\r\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\r\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\r\n  animation: none;\r\n  margin-left: 0;\r\n  margin-top: 5px;\r\n  border: none;\r\n  width: 32px;\r\n  height: 32px;\n}\r\n", "", {"version":3,"sources":["/./src/Spinner.vue?65fc5a8f"],"names":[],"mappings":";AA2FA;AACA;IACA,0BAAA;CACA;CACA;AACA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;EACA,cAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,qCAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,qCAAA;CACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,4BAAA;EACA,mBAAA;EACA,sBAAA;EACA,4BAAA;EACA,oCAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;CACA;AACA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,WAAA;EACA,YAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;EACA,aAAA;EACA,cAAA;CACA;AACA;;;;;EAKA,6IAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;CACA","file":"Spinner.vue","sourcesContent":["<template>\r\n  <div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=\"active||locked\">\r\n    <div class=\"spinner-wrapper\">\r\n      <div class=\"spinner-circle\"></div>\r\n      <div class=\"spinner-text\">{{text}}</div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce, delayer} from './utils/utils.js'\r\nconst MIN_WAIT = 500 // in ms\r\n\r\nexport default {\r\n  props: {\r\n    fixed: {type: Boolean, default: false},\r\n    global: {type: Boolean, default: false},\r\n    size: {type: String, default: 'md'},\r\n    text: {type: String, default: ''},\r\n    value: {default: false}\r\n  },\r\n  data () {\r\n    return {\r\n      active: this.value,\r\n      locked: false\r\n    }\r\n  },\r\n  computed: {\r\n    spinnerSize () { return 'spinner-' + (this.size ? this.size : 'sm') }\r\n  },\r\n  watch: {\r\n    active (val, old) {\r\n      if (val !== old) this.$emit('input', val)\r\n    },\r\n    value (val, old) {\r\n      if (val !== old) { this[val ? 'show' : 'hide']() }\r\n    }\r\n  },\r\n  methods: {\r\n    hide () {\r\n      var delay = 0\r\n      this.active = false\r\n    },\r\n    show (options) {\r\n      if (options) {\r\n        if (options.text) { this.text = options.text }\r\n        if (options.size) { this.size = options.size }\r\n        if (options.fixed) { this.fixed = options.fixed }\r\n      }\r\n      // block scrolling when spinner is on\r\n      this._body.style.overflowY = 'hidden'\r\n      // activate spinner\r\n      this._started = new Date()\r\n      this.active = true\r\n      this.locked = true\r\n      this._unlock()\r\n    }\r\n  },\r\n  created () {\r\n    this._body = document.body\r\n    this._bodyOverflow = document.body.style.overflowY\r\n    this._unlock = delayer(function () {\r\n      this.locked = false\r\n      this._body.style.overflowY = this._bodyOverflow\r\n    }, MIN_WAIT)\r\n    if (this.global) {\r\n      if (!this.$root._globalSpinner) {\r\n        this.$root._globalSpinner = true\r\n        var self = this\r\n        this._global = {\r\n          hide () { self.hide() },\r\n          show () { self.show() }\r\n        }\r\n        this.$root.$on('spinner::show', this._global.show)\r\n        this.$root.$on('spinner::hide', this._global.hide)\r\n      }\r\n    }\r\n  },\r\n  beforeDestroy () {\r\n    if (this._global) {\r\n      this.$root.$off('spinner::show', this._global.show)\r\n      this.$root.$off('spinner::hide', this._global.hide)\r\n      delete this.$root._globalSpinner\r\n    }\r\n    clearTimeout(this._spinnerAnimation)\r\n    this._body.style.overflowY = this._bodyOverflow\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n@keyframes spin {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.spinner-gritcode {\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 9998;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.spinner-gritcode.spinner-fixed {\r\n  position: fixed;\r\n}\r\n.spinner-gritcode .spinner-wrapper {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n.spinner-gritcode .spinner-circle {\r\n  position: relative;\r\n  border: 4px solid #ccc;\r\n  border-right-color: #337ab7;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  animation: spin 0.6s linear;\r\n  animation-iteration-count: infinite;\r\n  width: 3em;\r\n  height: 3em;\r\n  z-index: 2;\r\n}\r\n.spinner-gritcode .spinner-text {\r\n  position: relative;\r\n  text-align: center;\r\n  margin-top: 0.5em;\r\n  z-index: 2;\r\n  width: 100%;\r\n  font-size: 95%;\r\n  color: #337ab7;\r\n}\r\n.spinner-gritcode.spinner-sm .spinner-circle {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n}\r\n.spinner-gritcode.spinner-md .spinner-circle {\r\n  width: 2em;\r\n  height: 2em;\r\n}\r\n.spinner-gritcode.spinner-lg .spinner-circle {\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n}\r\n.spinner-gritcode.spinner-xl .spinner-circle {\r\n  width: 3.5em;\r\n  height: 3.5em;\r\n}\r\n.lt-ie10 .spinner-gritcode .spinner-circle,\r\n.ie9 .spinner-gritcode .spinner-circle,\r\n.oldie .spinner-gritcode .spinner-circle,\r\n.no-csstransitions .spinner-gritcode .spinner-circle,\r\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\r\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\r\n  animation: none;\r\n  margin-left: 0;\r\n  margin-top: 5px;\r\n  border: none;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var MIN_WAIT = 500; // in ms
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    fixed: { type: Boolean, default: false },
	    global: { type: Boolean, default: false },
	    size: { type: String, default: 'md' },
	    text: { type: String, default: '' },
	    value: { default: false }
	  },
	  data: function data() {
	    return {
	      active: this.value,
	      locked: false
	    };
	  },
	
	  computed: {
	    spinnerSize: function spinnerSize() {
	      return 'spinner-' + (this.size ? this.size : 'sm');
	    }
	  },
	  watch: {
	    active: function active(val, old) {
	      if (val !== old) this.$emit('input', val);
	    },
	    value: function value(val, old) {
	      if (val !== old) {
	        this[val ? 'show' : 'hide']();
	      }
	    }
	  },
	  methods: {
	    hide: function hide() {
	      var delay = 0;
	      this.active = false;
	    },
	    show: function show(options) {
	      if (options) {
	        if (options.text) {
	          this.text = options.text;
	        }
	        if (options.size) {
	          this.size = options.size;
	        }
	        if (options.fixed) {
	          this.fixed = options.fixed;
	        }
	      }
	      // block scrolling when spinner is on
	      this._body.style.overflowY = 'hidden';
	      // activate spinner
	      this._started = new Date();
	      this.active = true;
	      this.locked = true;
	      this._unlock();
	    }
	  },
	  created: function created() {
	    this._body = document.body;
	    this._bodyOverflow = document.body.style.overflowY;
	    this._unlock = (0, _utils.delayer)(function () {
	      this.locked = false;
	      this._body.style.overflowY = this._bodyOverflow;
	    }, MIN_WAIT);
	    if (this.global) {
	      if (!this.$root._globalSpinner) {
	        this.$root._globalSpinner = true;
	        var self = this;
	        this._global = {
	          hide: function hide() {
	            self.hide();
	          },
	          show: function show() {
	            self.show();
	          }
	        };
	        this.$root.$on('spinner::show', this._global.show);
	        this.$root.$on('spinner::hide', this._global.hide);
	      }
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._global) {
	      this.$root.$off('spinner::show', this._global.show);
	      this.$root.$off('spinner::hide', this._global.hide);
	      delete this.$root._globalSpinner;
	    }
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  }
	};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.active || _vm.locked),
	      expression: "active||locked"
	    }],
	    class: ['spinner spinner-gritcode', _vm.spinnerSize, {
	      'spinner-fixed': _vm.fixed
	    }]
	  }, [_c('div', {
	    staticClass: "spinner-wrapper"
	  }, [_c('div', {
	    staticClass: "spinner-circle"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "spinner-text"
	  }, [_vm._v(_vm._s(_vm.text))])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2ecaaa03", module.exports)
	  }
	}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(165)
	
	/* template */
	var __vue_template__ = __webpack_require__(166)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7664527f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7664527f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tab.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 165 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    disabled: { type: Boolean, default: false },
	    header: { type: String }
	  },
	  data: function data() {
	    return {
	      fadein: false
	    };
	  },
	
	  computed: {
	    active: function active() {
	      var _this = this;
	
	      var active = !this._tabs || this._tabs.show === this;
	      this.fadein = false;
	      if (active) {
	        setTimeout(function () {
	          _this.fadein = true;
	        }, 0);
	      }
	      return active;
	    },
	    index: function index() {
	      return this._tabs.tabs.indexOf(this);
	    },
	    transition: function transition() {
	      return this._tabs ? this._tabs.effect : null;
	    }
	  },
	  created: function created() {
	    this._isTab = true;
	    var tabs = this;
	    while (!this._tabs && tabs.$parent) {
	      if (tabs._isTabGroup) {
	        tabs.tabs.push(this);
	        this._tabGroup = tabs;
	      }
	      if (tabs._isTabs) {
	        tabs.tabs.push(this);
	        this._tabs = tabs;
	        if (!this._tabGroup) tabs.headers.push(this);
	      }
	      tabs = tabs.$parent;
	    }
	    if (!this._tabs) throw Error('tab depend on tabs.');
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this2 = this;
	
	    if (this._tabGroup) {
	      this._tabGroup.tabs = this._tabGroup.tabs.filter(function (el) {
	        return el !== _this2;
	      });
	    }
	    if (this._tabs) {
	      this._tabs.tabs = this._tabs.tabs.filter(function (el) {
	        return el !== _this2;
	      });
	    }
	    if (this._tabs) {
	      if (this._tabs.active === this.index) {
	        this._tabs.index = 0;
	      }
	      if (this._ingroup) {
	        var id = this.$parent.tabs.indexOf(this);
	        if (~id) this.$parent.tabs.splice(id, 1);
	      }
	    }
	    if (this._tabs) {
	      var _id = this._tabs.tabs.indexOf(this);
	      if (~_id) this._tabs.tabs.splice(_id, 1);
	    }
	  }
	};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "panel",
	    class: ['tab-pane', {
	      'active fade': _vm.active,
	      'in': _vm.fadein
	    }],
	    attrs: {
	      "role": "tabpanel"
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7664527f", module.exports)
	  }
	}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(168)
	
	/* script */
	__vue_exports__ = __webpack_require__(170)
	
	/* template */
	var __vue_template__ = __webpack_require__(171)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\TabGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6d89a9f0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6d89a9f0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] TabGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6d89a9f0!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabGroup.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6d89a9f0!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TabGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tab-content .tab-pane { display: none;\n}\n.tab-content .tab-pane.active { display: block;\n}\r\n", "", {"version":3,"sources":["/./src/TabGroup.vue?22ae1c08"],"names":[],"mappings":";AAkCA,yBAAA,cAAA;CAAA;AACA,gCAAA,eAAA;CAAA","file":"TabGroup.vue","sourcesContent":["<template><span><slot></slot></span></template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    disabled: {type: Boolean, default: false},\r\n    header: {type: String}\r\n  },\r\n  data () {\r\n    return {\r\n      show: false,\r\n      tabs: []\r\n    }\r\n  },\r\n  computed: {\r\n    active () { return ~this.tabs.indexOf(this._tabs.show) }\r\n  },\r\n  methods: {\r\n    blur () { this.show = false },\r\n    toggle () { this.show = !this.show }\r\n  },\r\n  created () {\r\n    this._isTabGroup = true\r\n    if (this.$parent) {\r\n      if (this.$parent._isTabGroup) throw Error('Can\\'t nest tab-groups.')\r\n      if (!this.$parent._isTabs) throw Error('tab-group depend on tabs.')\r\n    }\r\n    this._tabs = this.$parent\r\n    this._tabs.headers.push(this)\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.tab-content .tab-pane { display: none; }\r\n.tab-content .tab-pane.active { display: block; }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 170 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	
	exports.default = {
	  props: {
	    disabled: { type: Boolean, default: false },
	    header: { type: String }
	  },
	  data: function data() {
	    return {
	      show: false,
	      tabs: []
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return ~this.tabs.indexOf(this._tabs.show);
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  },
	  created: function created() {
	    this._isTabGroup = true;
	    if (this.$parent) {
	      if (this.$parent._isTabGroup) throw Error('Can\'t nest tab-groups.');
	      if (!this.$parent._isTabs) throw Error('tab-group depend on tabs.');
	    }
	    this._tabs = this.$parent;
	    this._tabs.headers.push(this);
	  }
	};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6d89a9f0", module.exports)
	  }
	}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(173)
	
	/* script */
	__vue_exports__ = __webpack_require__(175)
	
	/* template */
	var __vue_template__ = __webpack_require__(176)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Tabs.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-59d19e84", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-59d19e84", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-59d19e84!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-59d19e84!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n[tabs] > .tab-content {\r\n  margin: 15px 0;\n}\r\n", "", {"version":3,"sources":["/./src/Tabs.vue?4317b9af"],"names":[],"mappings":";AA0EA;EACA,eAAA;CACA","file":"Tabs.vue","sourcesContent":["<template>\r\n  <div tabs>\r\n    <ul :class=\"navStyleClass\" role=\"tablist\">\r\n      <template v-for=\"header in headers\">\r\n        <li v-if=\"header._isTab\" :class=\"{active:header.active, disabled:header.disabled}\" @click.prevent=\"select(header)\">\r\n          <slot name=\"header\"><a href=\"#\" v-html=\"header.header\"></a></slot>\r\n        </li>\r\n        <dropdown v-if=\"header._isTabGroup\" :text=\"header.header\" :class=\"{active:header.active}\" :disabled=\"header.disabled\">\r\n          <li v-for=\"tab in header.tabs\" :class=\"{disabled:tab.disabled}\"><a href=\"#\" @click.prevent=\"select(tab)\">{{tab.header}}</a></li>\r\n        </dropdown>\r\n      </template>\r\n    </ul>\r\n    <div class=\"tab-content\"><slot></slot></div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {coerce} from './utils/utils.js'\r\nimport dropdown from './Dropdown.vue'\r\n\r\nexport default {\r\n  components: {\r\n    dropdown\r\n  },\r\n  props: {\r\n    // effect: {type: String, default: 'fadein'},\r\n    justified: false,\r\n    navStyle: {type: String, default: null},\r\n    value: {type: Number, default: 0}\r\n  },\r\n  data () {\r\n    var index = this.value || 0\r\n    return {\r\n      index,\r\n      headers: [],\r\n      tabs: []\r\n    }\r\n  },\r\n  watch: {\r\n    index (val) {\r\n      this.$emit('active', val)\r\n      this.$emit('input', val)\r\n    },\r\n    value (val) {\r\n      this.index = val\r\n    }\r\n  },\r\n  computed: {\r\n    navStyleClass () {\r\n      return [\r\n        'nav',\r\n        ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs',\r\n        {\r\n          'nav-justified': coerce.boolean(this.justified),\r\n          'nav-pills': this.navStyle === 'stacked'\r\n        }\r\n      ]\r\n    },\r\n    show () { return this.tabs[this.index] || this.tabs[0] }\r\n  },\r\n  methods: {\r\n    select (tab) {\r\n      if (!tab.disabled) {\r\n        this.index = this.tabs.indexOf(tab)\r\n      }\r\n    }\r\n  },\r\n  created () {\r\n    this._isTabs = true\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n[tabs] > .tab-content {\r\n  margin: 15px 0;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	var _Dropdown = __webpack_require__(105);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  },
	  props: {
	    // effect: {type: String, default: 'fadein'},
	    justified: false,
	    navStyle: { type: String, default: null },
	    value: { type: Number, default: 0 }
	  },
	  data: function data() {
	    var index = this.value || 0;
	    return {
	      index: index,
	      headers: [],
	      tabs: []
	    };
	  },
	
	  watch: {
	    index: function index(val) {
	      this.$emit('active', val);
	      this.$emit('input', val);
	    },
	    value: function value(val) {
	      this.index = val;
	    }
	  },
	  computed: {
	    navStyleClass: function navStyleClass() {
	      return ['nav', ~['pills', 'stacked'].indexOf(this.navStyle) ? 'nav-' + this.navStyle : 'nav-tabs', {
	        'nav-justified': _utils.coerce.boolean(this.justified),
	        'nav-pills': this.navStyle === 'stacked'
	      }];
	    },
	    show: function show() {
	      return this.tabs[this.index] || this.tabs[0];
	    }
	  },
	  methods: {
	    select: function select(tab) {
	      if (!tab.disabled) {
	        this.index = this.tabs.indexOf(tab);
	      }
	    }
	  },
	  created: function created() {
	    this._isTabs = true;
	  }
	};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "tabs": ""
	    }
	  }, [_c('ul', {
	    class: _vm.navStyleClass,
	    attrs: {
	      "role": "tablist"
	    }
	  }, [_vm._l((_vm.headers), function(header) {
	    return [(header._isTab) ? _c('li', {
	      class: {
	        active: header.active, disabled: header.disabled
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.select(header)
	        }
	      }
	    }, [_vm._t("header", [_c('a', {
	      attrs: {
	        "href": "#"
	      },
	      domProps: {
	        "innerHTML": _vm._s(header.header)
	      }
	    })])], 2) : _vm._e(), _vm._v(" "), (header._isTabGroup) ? _c('dropdown', {
	      class: {
	        active: header.active
	      },
	      attrs: {
	        "text": header.header,
	        "disabled": header.disabled
	      }
	    }, _vm._l((header.tabs), function(tab) {
	      return _c('li', {
	        class: {
	          disabled: tab.disabled
	        }
	      }, [_c('a', {
	        attrs: {
	          "href": "#"
	        },
	        on: {
	          "click": function($event) {
	            $event.preventDefault();
	            _vm.select(tab)
	          }
	        }
	      }, [_vm._v(_vm._s(tab.header))])])
	    })) : _vm._e()]
	  })], 2), _vm._v(" "), _c('div', {
	    staticClass: "tab-content"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-59d19e84", module.exports)
	  }
	}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(178)
	
	/* template */
	var __vue_template__ = __webpack_require__(179)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\ToggleButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f32c8ac", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2f32c8ac", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] ToggleButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(65);
	
	exports.default = {
	  props: {
	    disabled: { default: null },
	    falseType: { default: null },
	    name: null,
	    readonly: { default: null },
	    trueType: { default: 'primary' },
	    value: false
	  },
	  data: function data() {
	    return {
	      active: _utils.coerce.boolean(this.value),
	      types: {
	        danger: 'btn-danger',
	        info: 'btn-info',
	        primary: 'btn-primary',
	        success: 'btn-success',
	        warning: 'btn-warning'
	      }
	    };
	  },
	
	  watch: {
	    active: function active(val, old) {
	      if (val !== old) {
	        this.$emit('changed', val);
	        this.$emit(val ? 'enabled' : 'disabled');
	        this.$emit('input', val);
	      }
	    },
	    value: function value(val, old) {
	      if (val !== old) {
	        this.active = _utils.coerce.boolean(this.value);
	      }
	    }
	  },
	  computed: {
	    boolDisabled: function boolDisabled() {
	      return _utils.coerce.boolean(this.disabled);
	    },
	    boolReadonly: function boolReadonly() {
	      return _utils.coerce.boolean(this.readonly);
	    },
	    type: function type() {
	      return this.types[this.value ? this.trueType : this.falseType] || 'btn-default';
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (this.boolDisabled || this.boolReadonly) {
	        return;
	      }
	      this.active = !this.active;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    class: ['btn', _vm.type, {
	      readonly: _vm.boolReadonly
	    }],
	    attrs: {
	      "href": "javascript:void(0)",
	      "disabled": _vm.boolDisabled
	    },
	    on: {
	      "click": _vm.toggle
	    }
	  }, [_c('span', {
	    class: ['glyphicon', 'glyphicon-' + (_vm.value ? 'ok' : 'remove')]
	  }), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.name) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": _vm.name
	    },
	    domProps: {
	      "value": _vm.active ? 1 : 0
	    }
	  }) : _vm._e()], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2f32c8ac", module.exports)
	  }
	}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(181)
	
	/* script */
	__vue_exports__ = __webpack_require__(183)
	
	/* template */
	var __vue_template__ = __webpack_require__(184)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-854a7a26", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-854a7a26", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-854a7a26!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-854a7a26!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tooltip.top,\r\n.tooltip.left,\r\n.tooltip.right,\r\n.tooltip.bottom {\r\n  opacity: .9;\n}\n.fadein-enter {\r\n  animation:fadein-in 0.3s ease-in;\n}\n.fadein-leave-active {\r\n  animation:fadein-out 0.3s ease-out;\n}\n@keyframes fadein-in {\n0% {\r\n    opacity: 0;\n}\n100% {\r\n    opacity: .9;\n}\n}\n@keyframes fadein-out {\n0% {\r\n    opacity: .9;\n}\n100% {\r\n    opacity: 0;\n}\n}\r\n", "", {"version":3,"sources":["/./src/Tooltip.vue?37d183ec"],"names":[],"mappings":";AA2BA;;;;EAIA,YAAA;CACA;AACA;EACA,iCAAA;CACA;AACA;EACA,mCAAA;CACA;AACA;AACA;IACA,WAAA;CACA;AACA;IACA,YAAA;CACA;CACA;AACA;AACA;IACA,YAAA;CACA;AACA;IACA,WAAA;CACA;CACA","file":"Tooltip.vue","sourcesContent":["<template>\r\n  <span ref=\"trigger\">\r\n    <slot></slot>\r\n    <transition :name=\"effect\">\r\n      <div ref=\"popover\" v-if=\"show\" :class=\"['tooltip',placement]\">\r\n        <div class=\"tooltip-arrow\"></div>\r\n        <div class=\"tooltip-inner\">\r\n          <slot name=\"content\"><div v-html=\"content\"></div></slot>\r\n        </div>\r\n      </div>\r\n    </transition>\r\n  </span>\r\n</template>\r\n\r\n<script>\r\nimport PopoverMixin from './utils/popoverMixins.js'\r\n\r\nexport default {\r\n  mixins: [PopoverMixin],\r\n  props: {\r\n    effect: {type: String, default: 'scale'},\r\n    trigger: {type: String, default: 'hover'}\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.tooltip.top,\r\n.tooltip.left,\r\n.tooltip.right,\r\n.tooltip.bottom {\r\n  opacity: .9;\r\n}\r\n.fadein-enter {\r\n  animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave-active {\r\n  animation:fadein-out 0.3s ease-out;\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(141);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    effect: { type: String, default: 'scale' },
	    trigger: { type: String, default: 'hover' }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    ref: "trigger"
	  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.effect
	    }
	  }, [(_vm.show) ? _c('div', {
	    ref: "popover",
	    class: ['tooltip', _vm.placement]
	  }, [_c('div', {
	    staticClass: "tooltip-arrow"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "tooltip-inner"
	  }, [_vm._t("content", [_c('div', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)]) : _vm._e()])], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-854a7a26", module.exports)
	  }
	}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(186)
	
	/* script */
	__vue_exports__ = __webpack_require__(188)
	
	/* template */
	var __vue_template__ = __webpack_require__(203)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\Typeahead.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a6cf419e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a6cf419e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Typeahead.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(79)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a6cf419e!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a6cf419e!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(78)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.dropdown-menu > li > a {\r\n  cursor: pointer;\n}\r\n", "", {"version":3,"sources":["/./src/Typeahead.vue?73fcd4be"],"names":[],"mappings":";AAkIA;EACA,gBAAA;CACA","file":"Typeahead.vue","sourcesContent":["<template>\r\n  <div style=\"position: relative\" :class=\"{open:showDropdown}\">\r\n    <input class=\"form-control\" autocomplete=\"off\"\r\n      v-model=\"val\"\r\n      :placeholder=\"placeholder\"\r\n      :type.once=\"type\"\r\n      @blur=\"showDropdown = false\"\r\n      @keydown.down.prevent=\"down\"\r\n      @keydown.enter=\"hit\"\r\n      @keydown.esc=\"reset\"\r\n      @keydown.up.prevent=\"up\"\r\n    />\r\n    <ul class=\"dropdown-menu\" ref=\"dropdown\">\r\n      <li v-for=\"(item, i) in items\" :class=\"{active: isActive(i)}\">\r\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive(i)\">\r\n          <component :is=\"templateComp\" :item=\"item\"></component>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport {delayer, getJSON} from './utils/utils.js'\r\nvar DELAY = 300\r\n\r\nexport default {\r\n  props: {\r\n    async: {type: String},\r\n    data: {type: Array},\r\n    delay: {type: Number, default: DELAY},\r\n    asyncKey: {type: String, default: null},\r\n    limit: {type: Number, default: 8},\r\n    matchCase: {type: Boolean, default: false},\r\n    matchStart: {type: Boolean, default: false},\r\n    onHit: {\r\n      type: Function,\r\n      default (item) { return item }\r\n    },\r\n    placeholder: {type: String},\r\n    template: {type: String},\r\n    type: {type: String, default: 'text'},\r\n    value: {type: String, default: ''}\r\n  },\r\n  data () {\r\n    return {\r\n      asign: '',\r\n      showDropdown: false,\r\n      noResults: true,\r\n      current: 0,\r\n      items: [],\r\n      val: this.value\r\n    }\r\n  },\r\n  computed: {\r\n    templateComp () {\r\n      return {\r\n        template: typeof this.template === 'string' ? '<span>' + this.template + '</span>' : '<strong v-html=\"item\"></strong>',\r\n        props: { item: {default: null} }\r\n      }\r\n    }\r\n  },\r\n  watch: {\r\n    val (val, old) {\r\n      this.$emit('input', val)\r\n      if (val !== old && val !== this.asign) this.__update()\r\n    },\r\n    value (val) {\r\n      if (this.val !== val) { this.val = val }\r\n    }\r\n  },\r\n  methods: {\r\n    setItems (data) {\r\n      if (this.async) {\r\n        this.items = this.asyncKey ? data[this.asyncKey] : data\r\n        this.items = this.items.slice(0, this.limit)\r\n      } else {\r\n        this.items = (data || []).filter(value => {\r\n          if (typeof value === 'object') { return true }\r\n          value = this.matchCase ? value : value.toLowerCase()\r\n          var query = this.matchCase ? this.val : this.val.toLowerCase()\r\n          return this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1\r\n        }).slice(0, this.limit)\r\n      }\r\n      this.showDropdown = this.items.length > 0\r\n    },\r\n    setValue (value) {\r\n      this.asign = value\r\n      this.val = value\r\n      this.items = []\r\n      this.loading = false\r\n      this.showDropdown = false\r\n    },\r\n    reset () { this.setValue(null) },\r\n    setActive (index) { this.current = index },\r\n    isActive (index) { return this.current === index },\r\n    hit (e) {\r\n      e.preventDefault()\r\n      this.setValue(this.onHit(this.items[this.current], this))\r\n    },\r\n    up () {\r\n      if (this.current > 0) { this.current-- }\r\n      else { this.current = this.items.length - 1 }\r\n    },\r\n    down () {\r\n      if (this.current < this.items.length - 1) { this.current++ }\r\n      else { this.current = 0 }\r\n    }\r\n  },\r\n  created () {\r\n    this.__update = delayer(function () {\r\n      if (!this.val) {\r\n        this.reset()\r\n        return\r\n      }\r\n      this.asign = ''\r\n      if (this.async) {\r\n        getJSON(this.async + this.val).then(data => {\r\n          this.setItems(data)\r\n        })\r\n      } else if (this.data) {\r\n        this.setItems(this.data)\r\n      }\r\n    }, 'delay', DELAY)\r\n    this.__update()\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(189);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _utils = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DELAY = 300; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    async: { type: String },
	    data: { type: Array },
	    delay: { type: Number, default: DELAY },
	    asyncKey: { type: String, default: null },
	    limit: { type: Number, default: 8 },
	    matchCase: { type: Boolean, default: false },
	    matchStart: { type: Boolean, default: false },
	    onHit: {
	      type: Function,
	      default: function _default(item) {
	        return item;
	      }
	    },
	    placeholder: { type: String },
	    template: { type: String },
	    type: { type: String, default: 'text' },
	    value: { type: String, default: '' }
	  },
	  data: function data() {
	    return {
	      asign: '',
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: [],
	      val: this.value
	    };
	  },
	
	  computed: {
	    templateComp: function templateComp() {
	      return {
	        template: typeof this.template === 'string' ? '<span>' + this.template + '</span>' : '<strong v-html="item"></strong>',
	        props: { item: { default: null } }
	      };
	    }
	  },
	  watch: {
	    val: function val(_val, old) {
	      this.$emit('input', _val);
	      if (_val !== old && _val !== this.asign) this.__update();
	    },
	    value: function value(val) {
	      if (this.val !== val) {
	        this.val = val;
	      }
	    }
	  },
	  methods: {
	    setItems: function setItems(data) {
	      var _this = this;
	
	      if (this.async) {
	        this.items = this.asyncKey ? data[this.asyncKey] : data;
	        this.items = this.items.slice(0, this.limit);
	      } else {
	        this.items = (data || []).filter(function (value) {
	          if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
	            return true;
	          }
	          value = _this.matchCase ? value : value.toLowerCase();
	          var query = _this.matchCase ? _this.val : _this.val.toLowerCase();
	          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	      this.showDropdown = this.items.length > 0;
	    },
	    setValue: function setValue(value) {
	      this.asign = value;
	      this.val = value;
	      this.items = [];
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    reset: function reset() {
	      this.setValue(null);
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.setValue(this.onHit(this.items[this.current], this));
	    },
	    up: function up() {
	      if (this.current > 0) {
	        this.current--;
	      } else {
	        this.current = this.items.length - 1;
	      }
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) {
	        this.current++;
	      } else {
	        this.current = 0;
	      }
	    }
	  },
	  created: function created() {
	    this.__update = (0, _utils.delayer)(function () {
	      var _this2 = this;
	
	      if (!this.val) {
	        this.reset();
	        return;
	      }
	      this.asign = '';
	      if (this.async) {
	        (0, _utils.getJSON)(this.async + this.val).then(function (data) {
	          _this2.setItems(data);
	        });
	      } else if (this.data) {
	        this.setItems(this.data);
	      }
	    }, 'delay', DELAY);
	    this.__update();
	  }
	};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(20);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(190);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(191), __esModule: true };

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(192);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(202);
	module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(6);
	var has = __webpack_require__(29);
	var DESCRIPTORS = __webpack_require__(15);
	var $export = __webpack_require__(5);
	var redefine = __webpack_require__(28);
	var META = __webpack_require__(193).KEY;
	var $fails = __webpack_require__(16);
	var shared = __webpack_require__(43);
	var setToStringTag = __webpack_require__(47);
	var uid = __webpack_require__(44);
	var wks = __webpack_require__(48);
	var wksExt = __webpack_require__(55);
	var wksDefine = __webpack_require__(194);
	var enumKeys = __webpack_require__(195);
	var isArray = __webpack_require__(198);
	var anObject = __webpack_require__(12);
	var toIObject = __webpack_require__(36);
	var toPrimitive = __webpack_require__(18);
	var createDesc = __webpack_require__(19);
	var _create = __webpack_require__(32);
	var gOPNExt = __webpack_require__(60);
	var $GOPD = __webpack_require__(199);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(34);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(197).f = $propertyIsEnumerable;
	  __webpack_require__(196).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(27)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(44)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(29);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(16)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(7);
	var LIBRARY = __webpack_require__(27);
	var wksExt = __webpack_require__(55);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34);
	var gOPS = __webpack_require__(196);
	var pIE = __webpack_require__(197);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 196 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(197);
	var createDesc = __webpack_require__(19);
	var toIObject = __webpack_require__(36);
	var toPrimitive = __webpack_require__(18);
	var has = __webpack_require__(29);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 200 */
/***/ (function(module, exports) {



/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(194)('asyncIterator');


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(194)('observable');


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: {
	      open: _vm.showDropdown
	    },
	    staticStyle: {
	      "position": "relative"
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.val),
	      expression: "val"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "autocomplete": "off",
	      "placeholder": _vm.placeholder,
	      "type": _vm.type
	    },
	    domProps: {
	      "value": (_vm.val)
	    },
	    on: {
	      "blur": function($event) {
	        _vm.showDropdown = false
	      },
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
	        $event.preventDefault();
	        _vm.down($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        _vm.hit($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
	        _vm.reset($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
	        $event.preventDefault();
	        _vm.up($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.val = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('ul', {
	    ref: "dropdown",
	    staticClass: "dropdown-menu"
	  }, _vm._l((_vm.items), function(item, i) {
	    return _c('li', {
	      class: {
	        active: _vm.isActive(i)
	      }
	    }, [_c('a', {
	      on: {
	        "mousedown": function($event) {
	          $event.preventDefault();
	          _vm.hit($event)
	        },
	        "mousemove": function($event) {
	          _vm.setActive(i)
	        }
	      }
	    }, [_c(_vm.templateComp, {
	      tag: "component",
	      attrs: {
	        "item": item
	      }
	    })], 1)])
	  }))])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a6cf419e", module.exports)
	  }
	}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(205)
	
	/* template */
	var __vue_template__ = __webpack_require__(207)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Projects\\vue-strap\\src\\VueEditor.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5aa9ce06", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5aa9ce06", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] VueEditor.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vue2Editor = __webpack_require__(206);
	
	exports.default = {
	
	    components: {
	        VueEditor: _vue2Editor.VueEditor
	    },
	    data: function data() {
	        var val = this.value;
	        return {
	            val: val,
	            valid: null
	        };
	    },
	
	    props: {
	        id: '',
	        value: { type: String, default: '' },
	        required: { type: Boolean, default: null }
	    },
	    methods: {
	        validate: function validate() {
	            if (this.required) {
	                if (this.val.replace(/<.+?>/g, '') === "") return false;
	            }
	            return true;
	        }
	    },
	    watch: {
	        value: function value(val) {
	            if (this.val !== val) {
	                this.val = val;
	            }
	        },
	        val: function val(_val, old) {
	            this.$emit('input', _val);
	            this.valid = this.validate();
	        },
	        valid: function valid(val, old) {
	            this.$emit('isvalid', val);
	            this.$emit(!val ? 'invalid' : 'valid');
	            if (this._parent) this._parent.validate();
	        }
	    }
	}; //
	//
	//
	//
	//

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	(function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Vue2Editor=e():t.Vue2Editor=e()})(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=20)}([function(t,e,n){(function(e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e){var i=r(o),l=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(l).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new e(JSON.stringify(t)).toString("base64")+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var l=t[o];"number"==typeof l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}}).call(e,n(2).Buffer)},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var l=[],o=0;o<n.parts.length;o++)l.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:l}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return y;r.parentNode.removeChild(r)}if(b){var i=p++;r=d||(d=o()),e=l.bind(null,r,i,!1),n=l.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(i,l[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if(false)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(18),c={},f=s&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,y=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=u(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var l=o[i],a=c[l.id];a.refs--,n.push(a)}e?(o=u(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete c[a.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";(function(t){function r(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(r()<e)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=i.prototype):(null===t&&(t=new i(e)),t.length=e),t}function i(t,e,n){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return u(this,t)}return l(this,t,e,n)}function l(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?d(t,e,n,r):"string"==typeof e?c(t,e,n):p(t,e)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function s(t,e,n,r){return a(e),e<=0?o(t,e):void 0!==n?"string"==typeof r?o(t,e).fill(n,r):o(t,e).fill(n):o(t,e)}function u(t,e){if(a(e),t=o(t,e<0?0:0|h(e)),!i.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function c(t,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!i.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|b(e,n);t=o(t,r);var l=t.write(e,n);return l!==r&&(t=t.slice(0,l)),t}function f(t,e){var n=e.length<0?0:0|h(e.length);t=o(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function d(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),i.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=i.prototype):t=f(t,e),t}function p(t,e){if(i.isBuffer(e)){var n=0|h(e.length);return t=o(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||G(e.length)?o(t,0):f(t,e);if("Buffer"===e.type&&Q(e.data))return f(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function h(t){if(t>=r())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),i.alloc(+t)}function b(t,e){if(i.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return K(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return W(t).length;default:if(r)return K(t).length;e=(""+e).toLowerCase(),r=!0}}function v(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,e,n);case"utf8":case"utf-8":return N(this,e,n);case"ascii":return T(this,e,n);case"latin1":case"binary":return P(this,e,n);case"base64":return A(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function g(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function m(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=i.from(e,r)),i.isBuffer(e))return 0===e.length?-1:q(t,e,n,r,o);if("number"==typeof e)return e&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):q(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function q(t,e,n,r,o){function i(t,e){return 1===l?t[e]:t.readUInt16BE(e*l)}var l=1,a=t.length,s=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;l=2,a/=2,s/=2,n/=2}var u;if(o){var c=-1;for(u=n;u<a;u++)if(i(t,u)===i(e,-1===c?0:u-c)){if(-1===c&&(c=u),u-c+1===s)return c*l}else-1!==c&&(u-=u-c),c=-1}else for(n+s>a&&(n=a-s),u=n;u>=0;u--){for(var f=!0,d=0;d<s;d++)if(i(t,u+d)!==i(e,d)){f=!1;break}if(f)return u}return-1}function w(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var l=0;l<r;++l){var a=parseInt(e.substr(2*l,2),16);if(isNaN(a))return l;t[n+l]=a}return l}function _(t,e,n,r){return Z(K(e,t.length-n),t,n,r)}function k(t,e,n,r){return Z(Y(e),t,n,r)}function O(t,e,n,r){return k(t,e,n,r)}function x(t,e,n,r){return Z(W(e),t,n,r)}function E(t,e,n,r){return Z(V(e,t.length-n),t,n,r)}function A(t,e,n){return 0===e&&n===t.length?$.fromByteArray(t):$.fromByteArray(t.slice(e,n))}function N(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i=t[o],l=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=n){var s,u,c,f;switch(a){case 1:i<128&&(l=i);break;case 2:s=t[o+1],128==(192&s)&&(f=(31&i)<<6|63&s)>127&&(l=f);break;case 3:s=t[o+1],u=t[o+2],128==(192&s)&&128==(192&u)&&(f=(15&i)<<12|(63&s)<<6|63&u)>2047&&(f<55296||f>57343)&&(l=f);break;case 4:s=t[o+1],u=t[o+2],c=t[o+3],128==(192&s)&&128==(192&u)&&128==(192&c)&&(f=(15&i)<<18|(63&s)<<12|(63&u)<<6|63&c)>65535&&f<1114112&&(l=f)}}null===l?(l=65533,a=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),o+=a}return j(r)}function j(t){var e=t.length;if(e<=J)return String.fromCharCode.apply(String,t);for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=J));return n}function T(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function P(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function S(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=H(t[i]);return o}function C(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function L(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,n,r,o,l){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<l)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function M(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function I(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function B(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function D(t,e,n,r,o){return o||B(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(t,e,n,r,23,4),n+4}function U(t,e,n,r,o){return o||B(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(t,e,n,r,52,8),n+8}function z(t){if(t=F(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function F(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function H(t){return t<16?"0"+t.toString(16):t.toString(16)}function K(t,e){e=e||1/0;for(var n,r=t.length,o=null,i=[],l=0;l<r;++l){if((n=t.charCodeAt(l))>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(l+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function Y(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function V(t,e){for(var n,r,o,i=[],l=0;l<t.length&&!((e-=2)<0);++l)n=t.charCodeAt(l),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function W(t){return $.toByteArray(z(t))}function Z(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}function G(t){return t!==t}var $=n(5),X=n(9),Q=n(10);e.Buffer=i,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=r(),i.poolSize=8192,i._augment=function(t){return t.__proto__=i.prototype,t},i.from=function(t,e,n){return l(null,t,e,n)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(t,e,n){return s(null,t,e,n)},i.allocUnsafe=function(t){return u(null,t)},i.allocUnsafeSlow=function(t){return u(null,t)},i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,e){if(!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,l=Math.min(n,r);o<l;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=i.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var l=t[n];if(!i.isBuffer(l))throw new TypeError('"list" argument must be an Array of Buffers');l.copy(r,o),o+=l.length}return r},i.byteLength=b,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?N(this,0,t):v.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t,e,n,r,o){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,o>>>=0,this===t)return 0;for(var l=o-r,a=n-e,s=Math.min(l,a),u=this.slice(r,o),c=t.slice(e,n),f=0;f<s;++f)if(u[f]!==c[f]){l=u[f],a=c[f];break}return l<a?-1:a<l?1:0},i.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},i.prototype.indexOf=function(t,e,n){return m(this,t,e,n,!0)},i.prototype.lastIndexOf=function(t,e,n){return m(this,t,e,n,!1)},i.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return w(this,t,e,n);case"utf8":case"utf-8":return _(this,t,e,n);case"ascii":return k(this,t,e,n);case"latin1":case"binary":return O(this,t,e,n);case"base64":return x(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var J=4096;i.prototype.slice=function(t,e){var n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);var r;if(i.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=i.prototype;else{var o=e-t;r=new i(o,void 0);for(var l=0;l<o;++l)r[l]=this[l+t]}return r},i.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||L(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},i.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||L(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},i.prototype.readUInt8=function(t,e){return e||L(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,e){return e||L(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,e){return e||L(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,e){return e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,e){return e||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||L(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r},i.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||L(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},i.prototype.readInt8=function(t,e){return e||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){e||L(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt16BE=function(t,e){e||L(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt32LE=function(t,e){return e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,e){return e||L(t,4,this.length),X.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return e||L(t,4,this.length),X.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return e||L(t,8,this.length),X.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return e||L(t,8,this.length),X.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){R(this,t,e,n,Math.pow(2,8*n)-1,0)}var o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},i.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){R(this,t,e,n,Math.pow(2,8*n)-1,0)}var o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},i.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},i.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},i.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},i.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):I(this,t,e,!0),e+4},i.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):I(this,t,e,!1),e+4},i.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);R(this,t,e,n,o-1,-o)}var i=0,l=1,a=0;for(this[e]=255&t;++i<n&&(l*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/l>>0)-a&255;return e+n},i.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);R(this,t,e,n,o-1,-o)}var i=n-1,l=1,a=0;for(this[e+i]=255&t;--i>=0&&(l*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/l>>0)-a&255;return e+n},i.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},i.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},i.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},i.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):I(this,t,e,!0),e+4},i.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):I(this,t,e,!1),e+4},i.prototype.writeFloatLE=function(t,e,n){return D(this,t,e,!0,n)},i.prototype.writeFloatBE=function(t,e,n){return D(this,t,e,!1,n)},i.prototype.writeDoubleLE=function(t,e,n){return U(this,t,e,!0,n)},i.prototype.writeDoubleBE=function(t,e,n){return U(this,t,e,!1,n)},i.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,l=r-n;if(this===t&&n<e&&e<r)for(o=l-1;o>=0;--o)t[o+e]=this[o+n];else if(l<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<l;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+l),e);return l},i.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0);var l;if("number"==typeof t)for(l=e;l<n;++l)this[l]=t;else{var a=i.isBuffer(t)?t:K(new i(t,r).toString()),s=a.length;for(l=0;l<n-e;++l)this[l+e]=a[l%s]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,n(19))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=n.n(r);n.d(e,"VueEditor",function(){return o.a});var i={VueEditor:o.a,install:function(t){t.component(o.a.name,o.a)}};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=n.n(r),i=n(15),l=(n.n(i),n(16)),a=(n.n(l),[["bold","italic","underline","strike"],["blockquote","code-block","image"],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{indent:"-1"},{indent:"+1"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]);e.default={name:"vue-editor",props:{value:String,id:{type:String,default:"quill-container"},placeholder:String,disabled:Boolean,editorToolbar:Array,useCustomImageHandler:{type:Boolean,default:!1}},data:function(){return{quill:null,editor:null,toolbar:this.editorToolbar?this.editorToolbar:a}},mounted:function(){this.initializeVue2Editor(),this.handleUpdatedEditor()},watch:{value:function(t){t==this.editor.innerHTML||this.quill.hasFocus()||(this.editor.innerHTML=t)},disabled:function(t){this.quill.enable(!t)}},methods:{initializeVue2Editor:function(){this.setQuillElement(),this.setEditorElement(),this.checkForInitialContent()},setQuillElement:function(){this.quill=new o.a(this.$refs.quillContainer,{modules:{toolbar:this.toolbar},placeholder:this.placeholder?this.placeholder:"",theme:"snow",readOnly:!!this.disabled&&this.disabled}),this.checkForCustomImageHandler()},setEditorElement:function(){this.editor=document.querySelector("#"+this.id+" .ql-editor")},checkForInitialContent:function(){this.editor.innerHTML=this.value||""},checkForCustomImageHandler:function(){!0===this.useCustomImageHandler&&this.setupCustomImageHandler()},setupCustomImageHandler:function(){this.quill.getModule("toolbar").addHandler("image",this.customImageHandler)},handleUpdatedEditor:function(){var t=this;this.quill.on("text-change",function(){t.$emit("input",t.editor.innerHTML)})},customImageHandler:function(t,e){this.$refs.fileInput.click()},emitImageInfo:function(t){var e=t.target.files[0],n=this.quill,r=n.getSelection(),o=r.index;this.$emit("imageAdded",e,n,o)}}}},function(t,e,n){"use strict";function r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function o(t){return 3*t.length/4-r(t)}function i(t){var e,n,o,i,l,a,s=t.length;l=r(t),a=new f(3*s/4-l),o=l>0?s-4:s;var u=0;for(e=0,n=0;e<o;e+=4,n+=3)i=c[t.charCodeAt(e)]<<18|c[t.charCodeAt(e+1)]<<12|c[t.charCodeAt(e+2)]<<6|c[t.charCodeAt(e+3)],a[u++]=i>>16&255,a[u++]=i>>8&255,a[u++]=255&i;return 2===l?(i=c[t.charCodeAt(e)]<<2|c[t.charCodeAt(e+1)]>>4,a[u++]=255&i):1===l&&(i=c[t.charCodeAt(e)]<<10|c[t.charCodeAt(e+1)]<<4|c[t.charCodeAt(e+2)]>>2,a[u++]=i>>8&255,a[u++]=255&i),a}function l(t){return u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}function a(t,e,n){for(var r,o=[],i=e;i<n;i+=3)r=(t[i]<<16)+(t[i+1]<<8)+t[i+2],o.push(l(r));return o.join("")}function s(t){for(var e,n=t.length,r=n%3,o="",i=[],l=0,s=n-r;l<s;l+=16383)i.push(a(t,l,l+16383>s?s:l+16383));return 1===r?(e=t[n-1],o+=u[e>>2],o+=u[e<<4&63],o+="=="):2===r&&(e=(t[n-2]<<8)+t[n-1],o+=u[e>>10],o+=u[e>>4&63],o+=u[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=o,e.toByteArray=i,e.fromByteArray=s;for(var u=[],c=[],f="undefined"!=typeof Uint8Array?Uint8Array:Array,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,h=d.length;p<h;++p)u[p]=d[p],c[d.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,'/*!\n * Quill Editor v1.3.4\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}',""])},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,'/*!\n * Quill Editor v1.3.4\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:"";display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:left;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:"";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before{content:"Heading 1"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before{content:"Heading 2"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before{content:"Heading 3"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before{content:"Heading 4"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before{content:"Heading 5"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before{content:"Heading 6"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:"Sans Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:"Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:"Monospace"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"Small"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"Large"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"Huge"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:"Visit URL:";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #ccc;content:"Edit";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:"Remove";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:"Save";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:"Enter link:"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:"Enter formula:"}.ql-snow .ql-tooltip[data-mode=video]:before{content:"Enter video:"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}',""])},function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".ql-editor{min-height:200px;font-size:16px}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1px!important}.quillWrapper .ql-snow.ql-toolbar{padding-top:8px;padding-bottom:4px}.quillWrapper .ql-snow.ql-toolbar button{margin:1px}.quillWrapper .ql-snow.ql-toolbar .ql-formats{margin-bottom:10px}.ql-snow .ql-toolbar button svg,.quillWrapper .ql-snow.ql-toolbar button svg{width:22px;height:22px}.quillWrapper .ql-editor ul[data-checked=false]>li:before,.quillWrapper .ql-editor ul[data-checked=true]>li:before{font-size:1.35em;vertical-align:baseline;bottom:-.065em;font-weight:900;color:#222}.quillWrapper .ql-snow .ql-stroke{stroke:rgba(63,63,63,.95);stroke-linecap:square;stroke-linejoin:initial;stroke-width:1.7px}.quillWrapper .ql-picker-label{font-size:15px}.quillWrapper .ql-snow .ql-active .ql-stroke{stroke-width:2.25px}.quillWrapper .ql-toolbar.ql-snow .ql-formats{vertical-align:top}",""])},function(t,e){e.read=function(t,e,n,r,o){var i,l,a=8*o-r-1,s=(1<<a)-1,u=s>>1,c=-7,f=n?o-1:0,d=n?-1:1,p=t[e+f];for(f+=d,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+t[e+f],f+=d,c-=8);for(l=i&(1<<-c)-1,i>>=-c,c+=r;c>0;l=256*l+t[e+f],f+=d,c-=8);if(0===i)i=1-u;else{if(i===s)return l?NaN:1/0*(p?-1:1);l+=Math.pow(2,r),i-=u}return(p?-1:1)*l*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var l,a,s,u=8*i-o-1,c=(1<<u)-1,f=c>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:i-1,h=r?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,l=c):(l=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-l))<1&&(l--,s*=2),e+=l+f>=1?d/s:d*Math.pow(2,1-f),e*s>=2&&(l++,s/=2),l+f>=c?(a=0,l=c):l+f>=1?(a=(e*s-1)*Math.pow(2,o),l+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),l=0));o>=8;t[n+p]=255&a,p+=h,a/=256,o-=8);for(l=l<<o|a,u+=o;u>0;t[n+p]=255&l,p+=h,l/=256,u-=8);t[n+p-h]|=128*y}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){(function(e){(function(e,n){t.exports=n()})(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=109)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),o=n(18),i=n(19),l=n(45),a=n(46),s=n(47),u=n(48),c=n(49),f=n(12),d=n(32),p=n(33),h=n(31),y=n(1),b={Scope:y.Scope,create:y.create,find:y.find,query:y.query,register:y.register,Container:r.default,Format:o.default,Leaf:i.default,Embed:u.default,Scroll:l.default,Block:s.default,Inline:a.default,Text:c.default,Attributor:{Attribute:f.default,Class:d.default,Style:p.default,Store:h.default}};e.default=b},function(t,e,n){"use strict";function r(t,e){var n=i(t);if(null==n)throw new s("Unable to create "+t+" blot");var r=n;return new r(t instanceof Node||t.nodeType===Node.TEXT_NODE?t:r.create(e),e)}function o(t,n){return void 0===n&&(n=!1),null==t?null:null!=t[e.DATA_KEY]?t[e.DATA_KEY].blot:n?o(t.parentNode,n):null}function i(t,e){void 0===e&&(e=p.ANY);var n;if("string"==typeof t)n=d[t]||u[t];else if(t instanceof Text||t.nodeType===Node.TEXT_NODE)n=d.text;else if("number"==typeof t)t&p.LEVEL&p.BLOCK?n=d.block:t&p.LEVEL&p.INLINE&&(n=d.inline);else if(t instanceof HTMLElement){var r=(t.getAttribute("class")||"").split(/\s+/);for(var o in r)if(n=c[r[o]])break;n=n||f[t.tagName]}return null==n?null:e&p.LEVEL&n.scope&&e&p.TYPE&n.scope?n:null}function l(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t.length>1)return t.map(function(t){return l(t)});var n=t[0];if("string"!=typeof n.blotName&&"string"!=typeof n.attrName)throw new s("Invalid definition");if("abstract"===n.blotName)throw new s("Cannot register abstract class");if(d[n.blotName||n.attrName]=n,"string"==typeof n.keyName)u[n.keyName]=n;else if(null!=n.className&&(c[n.className]=n),null!=n.tagName){Array.isArray(n.tagName)?n.tagName=n.tagName.map(function(t){return t.toUpperCase()}):n.tagName=n.tagName.toUpperCase();var r=Array.isArray(n.tagName)?n.tagName:[n.tagName];r.forEach(function(t){null!=f[t]&&null!=n.className||(f[t]=n)})}return n}var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e){var n=this;return e="[Parchment] "+e,n=t.call(this,e)||this,n.message=e,n.name=n.constructor.name,n}return a(e,t),e}(Error);e.ParchmentError=s;var u={},c={},f={},d={};e.DATA_KEY="__blot";var p;(function(t){t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY"})(p=e.Scope||(e.Scope={})),e.create=r,e.find=o,e.query=i,e.register=l},function(t,e,n){var r=n(51),o=n(11),i=n(3),l=n(20),a=String.fromCharCode(0),s=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};s.prototype.insert=function(t,e){var n={};return 0===t.length?this:(n.insert=t,null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))},s.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},s.prototype.retain=function(t,e){if(t<=0)return this;var n={retain:t};return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)},s.prototype.push=function(t){var e=this.ops.length,n=this.ops[e-1];if(t=i(!0,{},t),"object"==typeof n){if("number"==typeof t.delete&&"number"==typeof n.delete)return this.ops[e-1]={delete:n.delete+t.delete},this;if("number"==typeof n.delete&&null!=t.insert&&(e-=1,"object"!=typeof(n=this.ops[e-1])))return this.ops.unshift(t),this;if(o(t.attributes,n.attributes)){if("string"==typeof t.insert&&"string"==typeof n.insert)return this.ops[e-1]={insert:n.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof n.retain)return this.ops[e-1]={retain:n.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},s.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},s.prototype.filter=function(t){return this.ops.filter(t)},s.prototype.forEach=function(t){this.ops.forEach(t)},s.prototype.map=function(t){return this.ops.map(t)},s.prototype.partition=function(t){var e=[],n=[];return this.forEach(function(r){(t(r)?e:n).push(r)}),[e,n]},s.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},s.prototype.changeLength=function(){return this.reduce(function(t,e){return e.insert?t+l.length(e):e.delete?t-e.delete:t},0)},s.prototype.length=function(){return this.reduce(function(t,e){return t+l.length(e)},0)},s.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var n=[],r=l.iterator(this.ops),o=0;o<e&&r.hasNext();){var i;o<t?i=r.next(t-o):(i=r.next(e-o),n.push(i)),o+=l.length(i)}return new s(n)},s.prototype.compose=function(t){for(var e=l.iterator(this.ops),n=l.iterator(t.ops),r=new s;e.hasNext()||n.hasNext();)if("insert"===n.peekType())r.push(n.next());else if("delete"===e.peekType())r.push(e.next());else{var o=Math.min(e.peekLength(),n.peekLength()),i=e.next(o),a=n.next(o);if("number"==typeof a.retain){var u={};"number"==typeof i.retain?u.retain=o:u.insert=i.insert;var c=l.attributes.compose(i.attributes,a.attributes,"number"==typeof i.retain);c&&(u.attributes=c),r.push(u)}else"number"==typeof a.delete&&"number"==typeof i.retain&&r.push(a)}return r.chop()},s.prototype.concat=function(t){var e=new s(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},s.prototype.diff=function(t,e){if(this.ops===t.ops)return new s;var n=[this,t].map(function(e){return e.map(function(n){if(null!=n.insert)return"string"==typeof n.insert?n.insert:a;var r=e===t?"on":"with";throw new Error("diff() called "+r+" non-document")}).join("")}),i=new s,u=r(n[0],n[1],e),c=l.iterator(this.ops),f=l.iterator(t.ops);return u.forEach(function(t){for(var e=t[1].length;e>0;){var n=0;switch(t[0]){case r.INSERT:n=Math.min(f.peekLength(),e),i.push(f.next(n));break;case r.DELETE:n=Math.min(e,c.peekLength()),c.next(n),i.delete(n);break;case r.EQUAL:n=Math.min(c.peekLength(),f.peekLength(),e);var a=c.next(n),s=f.next(n);o(a.insert,s.insert)?i.retain(n,l.attributes.diff(a.attributes,s.attributes)):i.push(s).delete(n)}e-=n}}),i.chop()},s.prototype.eachLine=function(t,e){e=e||"\n";for(var n=l.iterator(this.ops),r=new s,o=0;n.hasNext();){if("insert"!==n.peekType())return;var i=n.peek(),a=l.length(i)-n.peekLength(),u="string"==typeof i.insert?i.insert.indexOf(e,a)-a:-1;if(u<0)r.push(n.next());else if(u>0)r.push(n.next(u));else{if(!1===t(r,n.next(1).attributes||{},o))return;o+=1,r=new s}}r.length()>0&&t(r,{},o)},s.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var n=l.iterator(this.ops),r=l.iterator(t.ops),o=new s;n.hasNext()||r.hasNext();)if("insert"!==n.peekType()||!e&&"insert"===r.peekType())if("insert"===r.peekType())o.push(r.next());else{var i=Math.min(n.peekLength(),r.peekLength()),a=n.next(i),u=r.next(i);if(a.delete)continue;u.delete?o.push(u):o.retain(i,l.attributes.transform(a.attributes,u.attributes,e))}else o.retain(l.length(n.next()));return o.chop()},s.prototype.transformPosition=function(t,e){e=!!e;for(var n=l.iterator(this.ops),r=0;n.hasNext()&&r<=t;){var o=n.peekLength(),i=n.peekType();n.next(),"delete"!==i?("insert"===i&&(r<t||!e)&&(t+=o),r+=o):t-=Math.min(o,t-r)}return t},t.exports=s},function(t,e){"use strict";var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)},i=function(t){if(!t||"[object Object]"!==r.call(t))return!1;var e=n.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!o)return!1;var i;for(i in t);return void 0===i||n.call(t,i)};t.exports=function t(){var e,n,r,l,a,s,u=arguments[0],c=1,f=arguments.length,d=!1;for("boolean"==typeof u&&(d=u,u=arguments[1]||{},c=2),(null==u||"object"!=typeof u&&"function"!=typeof u)&&(u={});c<f;++c)if(null!=(e=arguments[c]))for(n in e)r=u[n],l=e[n],u!==l&&(d&&l&&(i(l)||(a=o(l)))?(a?(a=!1,s=r&&o(r)?r:[]):s=r&&i(r)?r:{},u[n]=t(d,s,l)):void 0!==l&&(u[n]=l));return u}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return null==t?e:("function"==typeof t.formats&&(e=(0,f.default)(e,t.formats())),null==t.parent||"scroll"==t.parent.blotName||t.parent.statics.scope!==t.statics.scope?e:a(t.parent,e))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(3),f=r(c),d=n(2),p=r(d),h=n(0),y=r(h),b=n(16),v=r(b),g=n(6),m=r(g),q=n(7),w=r(q),_=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"attach",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attach",this).call(this),this.attributes=new y.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return(new p.default).insert(this.value(),(0,f.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(t,e){var n=y.default.query(t,y.default.Scope.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,e)}},{key:"formatAt",value:function(t,e,n,r){this.format(n,r)}},{key:"insertAt",value:function(t,n,r){if("string"==typeof n&&n.endsWith("\n")){var o=y.default.create(k.blotName);this.parent.insertBefore(o,0===t?this:this.next),o.insertAt(0,n.slice(0,-1))}else u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r)}}]),e}(y.default.Embed);_.scope=y.default.Scope.BLOCK_BLOT;var k=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.cache={},n}return l(e,t),s(e,[{key:"delta",value:function(){return null==this.cache.delta&&(this.cache.delta=this.descendants(y.default.Leaf).reduce(function(t,e){return 0===e.length()?t:t.insert(e.value(),a(e))},new p.default).insert("\n",a(this))),this.cache.delta}},{key:"deleteAt",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),this.cache={}}},{key:"formatAt",value:function(t,n,r,o){n<=0||(y.default.query(r,y.default.Scope.BLOCK)?t+n===this.length()&&this.format(r,o):u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,Math.min(n,this.length()-t-1),r,o),this.cache={})}},{key:"insertAt",value:function(t,n,r){if(null!=r)return u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);if(0!==n.length){var o=n.split("\n"),i=o.shift();i.length>0&&(t<this.length()-1||null==this.children.tail?u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),this.cache={});var l=this;o.reduce(function(t,e){return l=l.split(t,!0),l.insertAt(0,e),e.length},t+i.length)}}},{key:"insertBefore",value:function(t,n){var r=this.children.head;u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n),r instanceof v.default&&r.remove(),this.cache={}}},{key:"length",value:function(){return null==this.cache.length&&(this.cache.length=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveChildren",this).call(this,t,n),this.cache={}}},{key:"optimize",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.cache={}}},{key:"path",value:function(t){return u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t,!0)}},{key:"removeChild",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeChild",this).call(this,t),this.cache={}}},{key:"split",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n&&(0===t||t>=this.length()-1)){var r=this.clone();return 0===t?(this.parent.insertBefore(r,this),this):(this.parent.insertBefore(r,this.next),r)}var o=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"split",this).call(this,t,n);return this.cache={},o}}]),e}(y.default.Block);k.blotName="block",k.tagName="P",k.defaultChild="break",k.allowedChildren=[m.default,y.default.Embed,w.default],e.bubbleFormats=a,e.BlockEmbed=_,e.default=k},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(e=(0,E.default)(!0,{container:t,modules:{clipboard:!0,keyboard:!0,history:!0}},e),e.theme&&e.theme!==S.DEFAULTS.theme){if(e.theme=S.import("themes/"+e.theme),null==e.theme)throw new Error("Invalid theme "+e.theme+". Did you register it?")}else e.theme=T.default;var n=(0,E.default)(!0,{},e.theme.DEFAULTS);[n,e].forEach(function(t){t.modules=t.modules||{},Object.keys(t.modules).forEach(function(e){!0===t.modules[e]&&(t.modules[e]={})})});var r=Object.keys(n.modules).concat(Object.keys(e.modules)),o=r.reduce(function(t,e){var n=S.import("modules/"+e);return null==n?P.error("Cannot load "+e+" module. Are you sure you registered it?"):t[e]=n.DEFAULTS||{},t},{});return null!=e.modules&&e.modules.toolbar&&e.modules.toolbar.constructor!==Object&&(e.modules.toolbar={container:e.modules.toolbar}),e=(0,E.default)(!0,{},S.DEFAULTS,{modules:o},n,e),["bounds","container","scrollingContainer"].forEach(function(t){"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),e.modules=Object.keys(e.modules).reduce(function(t,n){return e.modules[n]&&(t[n]=e.modules[n]),t},{}),e}function a(t,e,n,r){if(this.options.strict&&!this.isEnabled()&&e===g.default.sources.USER)return new h.default;var o=null==n?null:this.getSelection(),i=this.editor.delta,l=t();if(null!=o&&(!0===n&&(n=o.index),null==r?o=u(o,l,e):0!==r&&(o=u(o,n,r,e)),this.setSelection(o,g.default.sources.SILENT)),l.length()>0){var a,s=[g.default.events.TEXT_CHANGE,l,i,e];if((a=this.emitter).emit.apply(a,[g.default.events.EDITOR_CHANGE].concat(s)),e!==g.default.sources.SILENT){var c;(c=this.emitter).emit.apply(c,s)}}return l}function s(t,e,n,r,o){var i={};return"number"==typeof t.index&&"number"==typeof t.length?"number"!=typeof e?(o=r,r=n,n=e,e=t.length,t=t.index):(e=t.length,t=t.index):"number"!=typeof e&&(o=r,r=n,n=e,e=0),"object"===(void 0===n?"undefined":c(n))?(i=n,o=r):"string"==typeof n&&(null!=r?i[n]=r:o=n),o=o||g.default.sources.API,[t,e,i,o]}function u(t,e,n,r){if(null==t)return null;var o=void 0,i=void 0;if(e instanceof h.default){var l=[t.index,t.index+t.length].map(function(t){return e.transformPosition(t,r!==g.default.sources.USER)}),a=f(l,2);o=a[0],i=a[1]}else{var s=[t.index,t.index+t.length].map(function(t){return t<e||t===e&&r===g.default.sources.USER?t:n>=0?t+n:Math.max(e,t+n)}),u=f(s,2);o=u[0],i=u[1]}return new k.Range(o,i-o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(50);var p=n(2),h=r(p),y=n(14),b=r(y),v=n(8),g=r(v),m=n(9),q=r(m),w=n(0),_=r(w),k=n(15),O=r(k),x=n(3),E=r(x),A=n(10),N=r(A),j=n(34),T=r(j),P=(0,N.default)("quill"),S=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),this.options=l(e,r),this.container=this.options.container,null==this.container)return P.error("Invalid Quill container",e);this.options.debug&&t.debug(this.options.debug);var o=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new g.default,this.scroll=_.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new b.default(this.scroll),this.selection=new O.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(g.default.events.EDITOR_CHANGE,function(t){t===g.default.events.TEXT_CHANGE&&n.root.classList.toggle("ql-blank",n.editor.isBlank())}),this.emitter.on(g.default.events.SCROLL_UPDATE,function(t,e){var r=n.selection.lastRange,o=r&&0===r.length?r.index:void 0;a.call(n,function(){return n.editor.update(null,e,o)},t)});var s=this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">"+o+"<p><br></p></div>");this.setContents(s),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return d(t,null,[{key:"debug",value:function(t){!0===t&&(t="log"),N.default.level(t)}},{key:"find",value:function(t){return t.__quill||_.default.find(t)}},{key:"import",value:function(t){return null==this.imports[t]&&P.error("Cannot import "+t+". Are you sure it was registered?"),this.imports[t]}},{key:"register",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof t){var o=t.attrName||t.blotName;"string"==typeof o?this.register("formats/"+o,t,e):Object.keys(t).forEach(function(r){n.register(r,t[r],e)})}else null==this.imports[t]||r||P.warn("Overwriting "+t+" with",e),this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&"abstract"!==e.blotName?_.default.register(e):t.startsWith("modules")&&"function"==typeof e.register&&e.register()}}]),d(t,[{key:"addContainer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof t){var n=t;t=document.createElement("div"),t.classList.add(n)}return this.container.insertBefore(t,e),t}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(t,e,n){var r=this,o=s(t,e,n),i=f(o,4);return t=i[0],e=i[1],n=i[3],a.call(this,function(){return r.editor.deleteText(t,e)},n,t,-1*e)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}},{key:"focus",value:function(){var t=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=t,this.scrollIntoView()}},{key:"format",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.default.sources.API;return a.call(this,function(){var r=n.getSelection(!0),i=new h.default;if(null==r)return i;if(_.default.query(t,_.default.Scope.BLOCK))i=n.editor.formatLine(r.index,r.length,o({},t,e));else{if(0===r.length)return n.selection.format(t,e),i;i=n.editor.formatText(r.index,r.length,o({},t,e))}return n.setSelection(r,g.default.sources.SILENT),i},r)}},{key:"formatLine",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,e,n,r,o),c=f(u,4);return t=c[0],e=c[1],l=c[2],o=c[3],a.call(this,function(){return i.editor.formatLine(t,e,l)},o,t,0)}},{key:"formatText",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,e,n,r,o),c=f(u,4);return t=c[0],e=c[1],l=c[2],o=c[3],a.call(this,function(){return i.editor.formatText(t,e,l)},o,t,0)}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=void 0;n="number"==typeof t?this.selection.getBounds(t,e):this.selection.getBounds(t.index,t.length);var r=this.container.getBoundingClientRect();return{bottom:n.bottom-r.top,height:n.height,left:n.left-r.left,right:n.right-r.left,top:n.top-r.top,width:n.width}}},{key:"getContents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=s(t,e),r=f(n,2);return t=r[0],e=r[1],this.editor.getContents(t,e)}},{key:"getFormat",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSelection(!0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof t?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}},{key:"getIndex",value:function(t){return t.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(t){return this.scroll.leaf(t)}},{key:"getLine",value:function(t){return this.scroll.line(t)}},{key:"getLines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return"number"!=typeof t?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}},{key:"getModule",value:function(t){return this.theme.modules[t]}},{key:"getSelection",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=s(t,e),r=f(n,2);return t=r[0],e=r[1],this.editor.getText(t,e)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(e,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.sources.API;return a.call(this,function(){return o.editor.insertEmbed(e,n,r)},i,e)}},{key:"insertText",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,0,n,r,o),c=f(u,4);return t=c[0],l=c[2],o=c[3],a.call(this,function(){return i.editor.insertText(t,e,l)},o,t,e.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(t,e,n){this.clipboard.dangerouslyPasteHTML(t,e,n)}},{key:"removeFormat",value:function(t,e,n){var r=this,o=s(t,e,n),i=f(o,4);return t=i[0],e=i[1],n=i[3],a.call(this,function(){return r.editor.removeFormat(t,e)},n,t)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API;return a.call(this,function(){t=new h.default(t);var n=e.getLength(),r=e.editor.deleteText(0,n),o=e.editor.applyDelta(t),i=o.ops[o.ops.length-1];return null!=i&&"string"==typeof i.insert&&"\n"===i.insert[i.insert.length-1]&&(e.editor.deleteText(e.getLength()-1,1),o.delete(1)),r.compose(o)},n)}},{key:"setSelection",value:function(e,n,r){if(null==e)this.selection.setRange(null,n||t.sources.API);else{var o=s(e,n,r),i=f(o,4);e=i[0],n=i[1],r=i[3],this.selection.setRange(new k.Range(e,n),r),r!==g.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API,n=(new h.default).insert(t);return this.setContents(n,e)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.default.sources.USER,e=this.scroll.update(t);return this.selection.update(t),e}},{key:"updateContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.default.sources.API;return a.call(this,function(){return t=new h.default(t),e.editor.applyDelta(t,n)},n,!0)}}]),t}();S.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},S.events=g.default.events,S.sources=g.default.sources,S.version="1.3.4",S.imports={delta:h.default,parchment:_.default,"core/module":q.default,"core/theme":T.default},e.expandConfig=l,e.overload=s,e.default=S},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(7),c=r(u),f=n(0),d=r(f),p=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"formatAt",value:function(t,n,r,o){if(e.compare(this.statics.blotName,r)<0&&d.default.query(r,d.default.Scope.BLOT)){var i=this.isolate(t,n);o&&i.wrap(r,o)}else s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o)}},{key:"optimize",value:function(t){if(s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.parent instanceof e&&e.compare(this.statics.blotName,this.parent.statics.blotName)>0){var n=this.parent.isolate(this.offset(),this.length());this.moveChildren(n),n.wrap(this)}}}],[{key:"compare",value:function(t,n){var r=e.order.indexOf(t),o=e.order.indexOf(n);return r>=0||o>=0?r-o:t===n?0:t<n?-1:1}}]),e}(d.default.Inline);p.allowedChildren=[p,d.default.Embed,c.default],p.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=p},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default.Text);e.default=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(54),c=r(u),f=n(10),d=r(f),p=(0,d.default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach(function(t){document.addEventListener(t,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t){if(t.__quill&&t.__quill.emitter){var n;(n=t.__quill.emitter).handleDOM.apply(n,e)}})})});var h=function(t){function e(){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.listeners={},t.on("error",p.error),t}return l(e,t),a(e,[{key:"emit",value:function(){p.log.apply(p,arguments),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(this.listeners[t.type]||[]).forEach(function(e){var r=e.node,o=e.handler;(t.target===r||r.contains(t.target))&&o.apply(void 0,[t].concat(n))})}},{key:"listenDOM",value:function(t,e,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({node:e,handler:n})}}]),e}(c.default);h.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},h.sources={API:"api",SILENT:"silent",USER:"user"},e.default=h},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t),this.quill=e,this.options=n};o.DEFAULTS={},e.default=o},function(t,e,n){"use strict";function r(t){if(i.indexOf(t)<=i.indexOf(l)){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=console)[t].apply(e,r)}}function o(t){return i.reduce(function(e,n){return e[n]=r.bind(console,n,t),e},{})}Object.defineProperty(e,"__esModule",{value:!0});var i=["error","warn","log","info"],l="warn";r.level=o.level=function(t){l=t},e.default=o},function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,c;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(s(t))return!!s(e)&&(t=l.call(t),e=l.call(e),u(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var f=a(t),d=a(e)}catch(t){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!u(t[c],e[c],n))return!1;return typeof t==typeof e}var l=Array.prototype.slice,a=n(52),s=n(53),u=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t,e,n){void 0===n&&(n={}),this.attrName=t,this.keyName=e;var o=r.Scope.TYPE&r.Scope.ATTRIBUTE;null!=n.scope?this.scope=n.scope&r.Scope.LEVEL|o:this.scope=r.Scope.ATTRIBUTE,null!=n.whitelist&&(this.whitelist=n.whitelist)}return t.keys=function(t){return[].map.call(t.attributes,function(t){return t.name})},t.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)},t.prototype.canAdd=function(t,e){return null!=r.query(t,r.Scope.BLOT&(this.scope|r.Scope.TYPE))&&(null==this.whitelist||this.whitelist.indexOf(e)>-1)},t.prototype.remove=function(t){t.removeAttribute(this.keyName)},t.prototype.value=function(t){var e=t.getAttribute(this.keyName);return this.canAdd(t,e)?e:""},t}();e.default=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(2),f=r(c),d=n(0),p=r(d),h=n(4),y=r(h),b=n(6),v=r(b),g=n(7),m=r(g),q=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(v.default);q.blotName="code",q.tagName="CODE";var w=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"delta",value:function(){var t=this,e=this.domNode.textContent;return e.endsWith("\n")&&(e=e.slice(0,-1)),e.split("\n").reduce(function(e,n){return e.insert(n).insert("\n",t.formats())},new f.default)}},{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n){var r=this.descendant(m.default,this.length()-1),o=a(r,1),i=o[0];null!=i&&i.deleteAt(i.length()-1,1),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}},{key:"formatAt",value:function(t,n,r,o){if(0!==n&&null!=p.default.query(r,p.default.Scope.BLOCK)&&(r!==this.statics.blotName||o!==this.statics.formats(this.domNode))){var i=this.newlineIndex(t);if(!(i<0||i>=t+n)){var l=this.newlineIndex(t,!0)+1,a=i-l+1,s=this.isolate(l,a),u=s.next;s.format(r,o),u instanceof e&&u.formatAt(0,t-l+n-a,r,o)}}}},{key:"insertAt",value:function(t,e,n){if(null==n){var r=this.descendant(m.default,t),o=a(r,2),i=o[0],l=o[1];i.insertAt(l,e)}}},{key:"length",value:function(){var t=this.domNode.textContent.length;return this.domNode.textContent.endsWith("\n")?t:t+1}},{key:"newlineIndex",value:function(t){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return this.domNode.textContent.slice(0,t).lastIndexOf("\n");var e=this.domNode.textContent.slice(t).indexOf("\n");return e>-1?t+e:-1}},{key:"optimize",value:function(t){this.domNode.textContent.endsWith("\n")||this.appendChild(p.default.create("text","\n")),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t);var n=this.next;null!=n&&n.prev===this&&n.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===n.statics.formats(n.domNode)&&(n.optimize(t),n.moveChildren(this),n.remove())}},{key:"replace",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t){var e=p.default.find(t);null==e?t.parentNode.removeChild(t):e instanceof p.default.Embed?e.remove():e.unwrap()})}}],[{key:"create",value:function(t){var n=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("spellcheck",!1),n}},{key:"formats",value:function(){return!0}}]),e}(y.default);w.blotName="code-block",w.tagName="PRE",w.TAB="  ",e.Code=q,e.default=w},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){return Object.keys(e).reduce(function(n,r){return null==t[r]?n:(e[r]===t[r]?n[r]=e[r]:Array.isArray(e[r])?e[r].indexOf(t[r])<0&&(n[r]=e[r].concat([t[r]])):n[r]=[e[r],t[r]],n)},{})}function a(t){return t.reduce(function(t,e){if(1===e.insert){var n=(0,E.default)(e.attributes);return delete n.image,t.insert({image:e.attributes.image},n)}if(null==e.attributes||!0!==e.attributes.list&&!0!==e.attributes.bullet||(e=(0,E.default)(e),e.attributes.list?e.attributes.list="ordered":(e.attributes.list="bullet",delete e.attributes.bullet)),"string"==typeof e.insert){var r=e.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return t.insert(r,e.attributes)}return t.push(e)},new d.default)}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(2),d=r(f),p=n(20),h=r(p),y=n(0),b=r(y),v=n(13),g=r(v),m=n(23),q=r(m),w=n(4),_=r(w),k=n(16),O=r(k),x=n(21),E=r(x),A=n(11),N=r(A),j=n(3),T=r(j),P=function(){function t(e){i(this,t),this.scroll=e,this.delta=this.getDelta()}return c(t,[{key:"applyDelta",value:function(t){var e=this,n=!1;this.scroll.update();var r=this.scroll.length();return this.scroll.batchStart(),t=a(t),t.reduce(function(t,o){var i=o.retain||o.delete||o.insert.length||1,l=o.attributes||{};if(null!=o.insert){if("string"==typeof o.insert){var a=o.insert;a.endsWith("\n")&&n&&(n=!1,a=a.slice(0,-1)),t>=r&&!a.endsWith("\n")&&(n=!0),e.scroll.insertAt(t,a);var c=e.scroll.line(t),f=u(c,2),d=f[0],p=f[1],y=(0,T.default)({},(0,w.bubbleFormats)(d));if(d instanceof _.default){var v=d.descendant(b.default.Leaf,p),g=u(v,1),m=g[0];y=(0,T.default)(y,(0,w.bubbleFormats)(m))}l=h.default.attributes.diff(y,l)||{}}else if("object"===s(o.insert)){var q=Object.keys(o.insert)[0];if(null==q)return t;e.scroll.insertAt(t,q,o.insert[q])}r+=i}return Object.keys(l).forEach(function(n){e.scroll.formatAt(t,i,n,l[n])}),t+i},0),t.reduce(function(t,n){return"number"==typeof n.delete?(e.scroll.deleteAt(t,n.delete),t):t+(n.retain||n.insert.length||1)},0),this.scroll.batchEnd(),this.update(t)}},{key:"deleteText",value:function(t,e){return this.scroll.deleteAt(t,e),this.update((new d.default).retain(t).delete(e))}},{key:"formatLine",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.scroll.update(),Object.keys(r).forEach(function(o){if(null==n.scroll.whitelist||n.scroll.whitelist[o]){var i=n.scroll.lines(t,Math.max(e,1)),l=e;i.forEach(function(e){var i=e.length();if(e instanceof g.default){var a=t-e.offset(n.scroll),s=e.newlineIndex(a+l)-a+1;e.formatAt(a,s,o,r[o])}else e.format(o,r[o]);l-=i})}}),this.scroll.optimize(),this.update((new d.default).retain(t).retain(e,(0,E.default)(r)))}},{key:"formatText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.keys(r).forEach(function(o){n.scroll.formatAt(t,e,o,r[o])}),this.update((new d.default).retain(t).retain(e,(0,E.default)(r)))}},{key:"getContents",value:function(t,e){return this.delta.slice(t,t+e)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(t,e){return t.concat(e.delta())},new d.default)}},{key:"getFormat",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=[];0===e?this.scroll.path(t).forEach(function(t){var e=u(t,1),o=e[0];o instanceof _.default?n.push(o):o instanceof b.default.Leaf&&r.push(o)}):(n=this.scroll.lines(t,e),r=this.scroll.descendants(b.default.Leaf,t,e));var o=[n,r].map(function(t){if(0===t.length)return{};for(var e=(0,w.bubbleFormats)(t.shift());Object.keys(e).length>0;){var n=t.shift();if(null==n)return e;e=l((0,w.bubbleFormats)(n),e)}return e});return T.default.apply(T.default,o)}},{key:"getText",value:function(t,e){return this.getContents(t,e).filter(function(t){return"string"==typeof t.insert}).map(function(t){return t.insert}).join("")}},{key:"insertEmbed",value:function(t,e,n){return this.scroll.insertAt(t,e,n),this.update((new d.default).retain(t).insert(o({},e,n)))}},{key:"insertText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(t,e),Object.keys(r).forEach(function(o){n.scroll.formatAt(t,e.length,o,r[o])}),this.update((new d.default).retain(t).insert(e,(0,E.default)(r)))}},{key:"isBlank",value:function(){if(0==this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1;var t=this.scroll.children.head;return t.statics.blotName===_.default.blotName&&(!(t.children.length>1)&&t.children.head instanceof O.default)}},{key:"removeFormat",value:function(t,e){var n=this.getText(t,e),r=this.scroll.line(t+e),o=u(r,2),i=o[0],l=o[1],a=0,s=new d.default;null!=i&&(a=i instanceof g.default?i.newlineIndex(l)-l+1:i.length()-l,s=i.delta().slice(l,l+a-1).insert("\n"));var c=this.getContents(t,e+a),f=c.diff((new d.default).insert(n).concat(s)),p=(new d.default).retain(t).concat(f);return this.applyDelta(p)}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=this.delta;if(1===e.length&&"characterData"===e[0].type&&e[0].target.data.match(/^[ -~]*$/)&&b.default.find(e[0].target)){var o=b.default.find(e[0].target),i=(0,w.bubbleFormats)(o),l=o.offset(this.scroll),a=e[0].oldValue.replace(q.default.CONTENTS,""),s=(new d.default).insert(a),u=(new d.default).insert(o.value());t=(new d.default).retain(l).concat(s.diff(u,n)).reduce(function(t,e){return e.insert?t.insert(e.insert,i):t.push(e)},new d.default),this.delta=r.compose(t)}else this.delta=this.getDelta(),t&&(0,N.default)(r.compose(t),this.delta)||(t=r.diff(this.delta,n));return t}}]),t}();e.default=P},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){try{e.parentNode}catch(t){return!1}return e instanceof Text&&(e=e.parentNode),t.contains(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(0),c=r(u),f=n(21),d=r(f),p=n(11),h=r(p),y=n(8),b=r(y),v=n(10),g=r(v),m=(0,g.default)("quill:selection"),q=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(this,t),this.index=e,this.length=n},w=function(){function t(e,n){var r=this;i(this,t),this.emitter=n,this.scroll=e,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=c.default.create("cursor",this),this.lastRange=this.savedRange=new q(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){r.mouseDown||setTimeout(r.update.bind(r,b.default.sources.USER),1)}),this.emitter.on(b.default.events.EDITOR_CHANGE,function(t,e){t===b.default.events.TEXT_CHANGE&&e.length()>0&&r.update(b.default.sources.SILENT)}),this.emitter.on(b.default.events.SCROLL_BEFORE_UPDATE,function(){if(r.hasFocus()){var t=r.getNativeRange();null!=t&&t.start.node!==r.cursor.textNode&&r.emitter.once(b.default.events.SCROLL_UPDATE,function(){try{r.setNativeRange(t.start.node,t.start.offset,t.end.node,t.end.offset)}catch(t){}})}}),this.emitter.on(b.default.events.SCROLL_OPTIMIZE,function(t,e){if(e.range){var n=e.range,o=n.startNode,i=n.startOffset,l=n.endNode,a=n.endOffset;r.setNativeRange(o,i,l,a)}}),this.update(b.default.sources.SILENT)}return s(t,[{key:"handleComposition",value:function(){var t=this;this.root.addEventListener("compositionstart",function(){t.composing=!0}),this.root.addEventListener("compositionend",function(){if(t.composing=!1,t.cursor.parent){var e=t.cursor.restore();if(!e)return;setTimeout(function(){t.setNativeRange(e.startNode,e.startOffset,e.endNode,e.endOffset)},1)}})}},{key:"handleDragging",value:function(){var t=this;this.emitter.listenDOM("mousedown",document.body,function(){t.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){t.mouseDown=!1,t.update(b.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(t,e){if(null==this.scroll.whitelist||this.scroll.whitelist[t]){this.scroll.update();var n=this.getNativeRange();if(null!=n&&n.native.collapsed&&!c.default.query(t,c.default.Scope.BLOCK)){if(n.start.node!==this.cursor.textNode){var r=c.default.find(n.start.node,!1);if(null==r)return;if(r instanceof c.default.Leaf){var o=r.split(n.start.offset);r.parent.insertBefore(this.cursor,o)}else r.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;var r=void 0,o=this.scroll.leaf(t),i=a(o,2),l=i[0],s=i[1];if(null==l)return null;var u=l.position(s,!0),c=a(u,2);r=c[0],s=c[1];var f=document.createRange();if(e>0){f.setStart(r,s);var d=this.scroll.leaf(t+e),p=a(d,2);if(l=p[0],s=p[1],null==l)return null;var h=l.position(s,!0),y=a(h,2);return r=y[0],s=y[1],f.setEnd(r,s),f.getBoundingClientRect()}var b="left",v=void 0;return r instanceof Text?(s<r.data.length?(f.setStart(r,s),f.setEnd(r,s+1)):(f.setStart(r,s-1),f.setEnd(r,s),b="right"),v=f.getBoundingClientRect()):(v=l.domNode.getBoundingClientRect(),s>0&&(b="right")),{bottom:v.top+v.height,height:v.height,left:v[b],right:v[b],top:v.top,width:0}}},{key:"getNativeRange",value:function(){var t=document.getSelection();if(null==t||t.rangeCount<=0)return null;var e=t.getRangeAt(0);if(null==e)return null;var n=this.normalizeNative(e);return m.info("getNativeRange",n),n}},{key:"getRange",value:function(){var t=this.getNativeRange();return null==t?[null,null]:[this.normalizedToRange(t),t]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(t){var e=this,n=[[t.start.node,t.start.offset]];t.native.collapsed||n.push([t.end.node,t.end.offset]);var r=n.map(function(t){var n=a(t,2),r=n[0],o=n[1],i=c.default.find(r,!0),l=i.offset(e.scroll);return 0===o?l:i instanceof c.default.Container?l+i.length():l+i.index(r,o)}),i=Math.min(Math.max.apply(Math,o(r)),this.scroll.length()-1),l=Math.min.apply(Math,[i].concat(o(r)));return new q(l,i-l)}},{key:"normalizeNative",value:function(t){if(!l(this.root,t.startContainer)||!t.collapsed&&!l(this.root,t.endContainer))return null;var e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,offset:t.endOffset},native:t};return[e.start,e.end].forEach(function(t){for(var e=t.node,n=t.offset;!(e instanceof Text)&&e.childNodes.length>0;)if(e.childNodes.length>n)e=e.childNodes[n],n=0;else{if(e.childNodes.length!==n)break;e=e.lastChild,n=e instanceof Text?e.data.length:e.childNodes.length+1}t.node=e,t.offset=n}),e}},{key:"rangeToNative",value:function(t){var e=this,n=t.collapsed?[t.index]:[t.index,t.index+t.length],r=[],o=this.scroll.length();return n.forEach(function(t,n){t=Math.min(o-1,t);var i=void 0,l=e.scroll.leaf(t),s=a(l,2),u=s[0],c=s[1],f=u.position(c,0!==n),d=a(f,2);i=d[0],c=d[1],r.push(i,c)}),r.length<2&&(r=r.concat(r)),r}},{key:"scrollIntoView",value:function(t){var e=this.lastRange;if(null!=e){var n=this.getBounds(e.index,e.length);if(null!=n){var r=this.scroll.length()-1,o=this.scroll.line(Math.min(e.index,r)),i=a(o,1),l=i[0],s=l;if(e.length>0){var u=this.scroll.line(Math.min(e.index+e.length,r));s=a(u,1)[0]}if(null!=l&&null!=s){var c=t.getBoundingClientRect();n.top<c.top?t.scrollTop-=c.top-n.top:n.bottom>c.bottom&&(t.scrollTop+=n.bottom-c.bottom)}}}}},{key:"setNativeRange",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m.info("setNativeRange",t,e,n,r),null==t||null!=this.root.parentNode&&null!=t.parentNode&&null!=n.parentNode){var i=document.getSelection();if(null!=i)if(null!=t){this.hasFocus()||this.root.focus();var l=(this.getNativeRange()||{}).native;if(null==l||o||t!==l.startContainer||e!==l.startOffset||n!==l.endContainer||r!==l.endOffset){"BR"==t.tagName&&(e=[].indexOf.call(t.parentNode.childNodes,t),t=t.parentNode),"BR"==n.tagName&&(r=[].indexOf.call(n.parentNode.childNodes,n),n=n.parentNode);var a=document.createRange();a.setStart(t,e),a.setEnd(n,r),i.removeAllRanges(),i.addRange(a)}}else i.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b.default.sources.API;if("string"==typeof e&&(n=e,e=!1),m.info("setRange",t),null!=t){var r=this.rangeToNative(t);this.setNativeRange.apply(this,o(r).concat([e]))}else this.setNativeRange(null);this.update(n)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.default.sources.USER,e=this.lastRange,n=this.getRange(),r=a(n,2),o=r[0],i=r[1];if(this.lastRange=o,null!=this.lastRange&&(this.savedRange=this.lastRange),!(0,h.default)(e,this.lastRange)){var l;!this.composing&&null!=i&&i.native.collapsed&&i.start.node!==this.cursor.textNode&&this.cursor.restore();var s=[b.default.events.SELECTION_CHANGE,(0,d.default)(this.lastRange),(0,d.default)(e),t];if((l=this.emitter).emit.apply(l,[b.default.events.EDITOR_CHANGE].concat(s)),t!==b.default.sources.SILENT){var u;(u=this.emitter).emit.apply(u,s)}}}}]),t}();e.Range=q,e.default=w},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"insertInto",value:function(t,n){0===t.children.length?a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertInto",this).call(this,t,n):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),e}(u.default.Embed);c.blotName="break",c.tagName="BR",e.default=c},function(t,e,n){"use strict";function r(t){var e=a.find(t);if(null==e)try{e=a.create(t)}catch(n){e=a.create(a.Scope.INLINE),[].slice.call(t.childNodes).forEach(function(t){e.domNode.appendChild(t)}),t.parentNode.replaceChild(e.domNode,t),e.attach()}return e}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(44),l=n(30),a=n(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.appendChild=function(t){this.insertBefore(t)},e.prototype.attach=function(){var e=this;t.prototype.attach.call(this),this.children=new i.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(t){try{var n=r(t);e.insertBefore(n,e.children.head)}catch(t){if(t instanceof a.ParchmentError)return;throw t}})},e.prototype.deleteAt=function(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,function(t,e,n){t.deleteAt(e,n)})},e.prototype.descendant=function(t,n){var r=this.children.find(n),o=r[0],i=r[1];return null==t.blotName&&t(o)||null!=t.blotName&&o instanceof t?[o,i]:o instanceof e?o.descendant(t,i):[null,-1]},e.prototype.descendants=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=Number.MAX_VALUE);var o=[],i=r;return this.children.forEachAt(n,r,function(n,r,l){(null==t.blotName&&t(n)||null!=t.blotName&&n instanceof t)&&o.push(n),n instanceof e&&(o=o.concat(n.descendants(t,r,i))),i-=l}),o},e.prototype.detach=function(){this.children.forEach(function(t){t.detach()}),t.prototype.detach.call(this)},e.prototype.formatAt=function(t,e,n,r){this.children.forEachAt(t,e,function(t,e,o){t.formatAt(e,o,n,r)})},e.prototype.insertAt=function(t,e,n){var r=this.children.find(t),o=r[0],i=r[1];if(o)o.insertAt(i,e,n);else{var l=null==n?a.create("text",e):a.create(e,n);this.appendChild(l)}},e.prototype.insertBefore=function(t,e){if(null!=this.statics.allowedChildren&&!this.statics.allowedChildren.some(function(e){return t instanceof e}))throw new a.ParchmentError("Cannot insert "+t.statics.blotName+" into "+this.statics.blotName);t.insertInto(this,e)},e.prototype.length=function(){return this.children.reduce(function(t,e){return t+e.length()},0)},e.prototype.moveChildren=function(t,e){this.children.forEach(function(n){t.insertBefore(n,e)})},e.prototype.optimize=function(e){if(t.prototype.optimize.call(this,e),0===this.children.length)if(null!=this.statics.defaultChild){var n=a.create(this.statics.defaultChild);this.appendChild(n),n.optimize(e)}else this.remove()},e.prototype.path=function(t,n){void 0===n&&(n=!1);var r=this.children.find(t,n),o=r[0],i=r[1],l=[[this,t]];return o instanceof e?l.concat(o.path(i,n)):(null!=o&&l.push([o,i]),l)},e.prototype.removeChild=function(t){this.children.remove(t)},e.prototype.replace=function(n){n instanceof e&&n.moveChildren(this),t.prototype.replace.call(this,n)},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=this.clone();return this.parent.insertBefore(n,this.next),this.children.forEachAt(t,this.length(),function(t,r,o){t=t.split(r,e),n.appendChild(t)}),n},e.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},e.prototype.update=function(t,e){var n=this,o=[],i=[];t.forEach(function(t){t.target===n.domNode&&"childList"===t.type&&(o.push.apply(o,t.addedNodes),i.push.apply(i,t.removedNodes))}),i.forEach(function(t){if(!(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var e=a.find(t);null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==n.domNode||e.detach())}}),o.filter(function(t){return t.parentNode==n.domNode}).sort(function(t,e){return t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(t){var e=null;null!=t.nextSibling&&(e=a.find(t.nextSibling));var o=r(t);o.next==e&&null!=o.next||(null!=o.parent&&o.parent.removeChild(n),n.insertBefore(o,e))})},e}(l.default);e.default=s},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),i=n(31),l=n(17),a=n(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(t){return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)},e.prototype.attach=function(){t.prototype.attach.call(this),this.attributes=new i.default(this.domNode)},e.prototype.format=function(t,e){var n=a.query(t);n instanceof o.default?this.attributes.attribute(n,e):e&&(null==n||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e))},e.prototype.formats=function(){var t=this.attributes.values(),e=this.statics.formats(this.domNode);return null!=e&&(t[this.statics.blotName]=e),t},e.prototype.replaceWith=function(e,n){var r=t.prototype.replaceWith.call(this,e,n);return this.attributes.copy(r),r},e.prototype.update=function(e,n){var r=this;t.prototype.update.call(this,e,n),e.some(function(t){return t.target===r.domNode&&"attributes"===t.type})&&this.attributes.build()},e.prototype.wrap=function(n,r){var o=t.prototype.wrap.call(this,n,r);return o instanceof e&&o.statics.scope===this.statics.scope&&this.attributes.move(o),o},e}(l.default);e.default=s},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(30),i=n(1),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.value=function(t){return!0},e.prototype.index=function(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1},e.prototype.position=function(t,e){var n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return t>0&&(n+=1),[this.parent.domNode,n]},e.prototype.value=function(){return t={},t[this.statics.blotName]=this.statics.value(this.domNode)||!0,t;var t},e.scope=i.Scope.INLINE_BLOT,e}(o.default);e.default=l},function(t,e,n){function r(t){this.ops=t,this.index=0,this.offset=0}var o=n(11),i=n(3),l={attributes:{compose:function(t,e,n){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=i(!0,{},e);n||(r=Object.keys(r).reduce(function(t,e){return null!=r[e]&&(t[e]=r[e]),t},{}));for(var o in t)void 0!==t[o]&&void 0===e[o]&&(r[o]=t[o]);return Object.keys(r).length>0?r:void 0},diff:function(t,e){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var n=Object.keys(t).concat(Object.keys(e)).reduce(function(n,r){return o(t[r],e[r])||(n[r]=void 0===e[r]?null:e[r]),n},{});return Object.keys(n).length>0?n:void 0},transform:function(t,e,n){if("object"!=typeof t)return e;if("object"==typeof e){if(!n)return e;var r=Object.keys(e).reduce(function(n,r){return void 0===t[r]&&(n[r]=e[r]),n},{});return Object.keys(r).length>0?r:void 0}}},iterator:function(t){return new r(t)},length:function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};r.prototype.hasNext=function(){return this.peekLength()<1/0},r.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var n=this.offset,r=l.length(e);if(t>=r-n?(t=r-n,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(n,t):o.insert=e.insert,o}return{retain:1/0}},r.prototype.peek=function(){return this.ops[this.index]},r.prototype.peekLength=function(){return this.ops[this.index]?l.length(this.ops[this.index])-this.offset:1/0},r.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},t.exports=l},function(t,n){var r=function(){"use strict";function t(t,e){return null!=e&&t instanceof e}function n(r,o,i,l,f){function d(r,i){if(null===r)return null;if(0===i)return r;var b,v;if("object"!=typeof r)return r;if(t(r,s))b=new s;else if(t(r,u))b=new u;else if(t(r,c))b=new c(function(t,e){r.then(function(e){t(d(e,i-1))},function(t){e(d(t,i-1))})});else if(n.__isArray(r))b=[];else if(n.__isRegExp(r))b=new RegExp(r.source,a(r)),r.lastIndex&&(b.lastIndex=r.lastIndex);else if(n.__isDate(r))b=new Date(r.getTime());else{if(y&&e.isBuffer(r))return b=new e(r.length),r.copy(b),b;t(r,Error)?b=Object.create(r):void 0===l?(v=Object.getPrototypeOf(r),b=Object.create(v)):(b=Object.create(l),v=l)}if(o){var g=p.indexOf(r);if(-1!=g)return h[g];p.push(r),h.push(b)}t(r,s)&&r.forEach(function(t,e){var n=d(e,i-1),r=d(t,i-1);b.set(n,r)}),t(r,u)&&r.forEach(function(t){var e=d(t,i-1);b.add(e)});for(var m in r){var q;v&&(q=Object.getOwnPropertyDescriptor(v,m)),q&&null==q.set||(b[m]=d(r[m],i-1))}if(Object.getOwnPropertySymbols)for(var w=Object.getOwnPropertySymbols(r),m=0;m<w.length;m++){var _=w[m],k=Object.getOwnPropertyDescriptor(r,_);(!k||k.enumerable||f)&&(b[_]=d(r[_],i-1),k.enumerable||Object.defineProperty(b,_,{enumerable:!1}))}if(f)for(var O=Object.getOwnPropertyNames(r),m=0;m<O.length;m++){var x=O[m],k=Object.getOwnPropertyDescriptor(r,x);k&&k.enumerable||(b[x]=d(r[x],i-1),Object.defineProperty(b,x,{enumerable:!1}))}return b}"object"==typeof o&&(i=o.depth,l=o.prototype,f=o.includeNonEnumerable,o=o.circular);var p=[],h=[],y=void 0!==e;return void 0===o&&(o=!0),void 0===i&&(i=1/0),d(r,i)}function r(t){return Object.prototype.toString.call(t)}function o(t){return"object"==typeof t&&"[object Date]"===r(t)}function i(t){return"object"==typeof t&&"[object Array]"===r(t)}function l(t){return"object"==typeof t&&"[object RegExp]"===r(t)}function a(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}var s;try{s=Map}catch(t){s=function(){}}var u;try{u=Set}catch(t){u=function(){}}var c;try{c=Promise}catch(t){c=function(){}}return n.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},n.__objToStr=r,n.__isDate=o,n.__isArray=i,n.__isRegExp=l,n.__getRegExpFlags=a,n}();"object"==typeof t&&t.exports&&(t.exports=r)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return t instanceof b.default||t instanceof y.BlockEmbed}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},f=n(0),d=r(f),p=n(8),h=r(p),y=n(4),b=r(y),v=n(16),g=r(v),m=n(13),q=r(m),w=n(24),_=r(w),k=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.emitter=n.emitter,Array.isArray(n.whitelist)&&(r.whitelist=n.whitelist.reduce(function(t,e){return t[e]=!0,t},{})),r.domNode.addEventListener("DOMNodeInserted",function(){}),r.optimize(),r.enable(),r}return l(e,t),u(e,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(t,n){var r=this.line(t),o=s(r,2),i=o[0],l=o[1],a=this.line(t+n),u=s(a,1),f=u[0];if(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),null!=f&&i!==f&&l>0){if(i instanceof y.BlockEmbed||f instanceof y.BlockEmbed)return void this.optimize();if(i instanceof q.default){var d=i.newlineIndex(i.length(),!0);if(d>-1&&(i=i.split(d+1))===f)return void this.optimize()}else if(f instanceof q.default){var p=f.newlineIndex(0);p>-1&&f.split(p+1)}var h=f.children.head instanceof g.default?null:f.children.head;i.moveChildren(f,h),i.remove()}this.optimize()}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.domNode.setAttribute("contenteditable",t)}},{key:"formatAt",value:function(t,n,r,o){(null==this.whitelist||this.whitelist[r])&&(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o),this.optimize())}},{key:"insertAt",value:function(t,n,r){if(null==r||null==this.whitelist||this.whitelist[n]){if(t>=this.length())if(null==r||null==d.default.query(n,d.default.Scope.BLOCK)){var o=d.default.create(this.statics.defaultChild);this.appendChild(o),null==r&&n.endsWith("\n")&&(n=n.slice(0,-1)),o.insertAt(0,n,r)}else{var i=d.default.create(n,r);this.appendChild(i)}else c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);this.optimize()}}},{key:"insertBefore",value:function(t,n){if(t.statics.scope===d.default.Scope.INLINE_BLOT){var r=d.default.create(this.statics.defaultChild);r.appendChild(t),t=r}c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n)}},{key:"leaf",value:function(t){return this.path(t).pop()||[null,-1]}},{key:"line",value:function(t){return t===this.length()?this.line(t-1):this.descendant(a,t)}},{key:"lines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return function t(e,n,r){var o=[],i=r;return e.children.forEachAt(n,r,function(e,n,r){a(e)?o.push(e):e instanceof d.default.Container&&(o=o.concat(t(e,n,i))),i-=r}),o}(this,t,e)}},{key:"optimize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!0!==this.batch&&(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t,n),t.length>0&&this.emitter.emit(h.default.events.SCROLL_OPTIMIZE,t,n))}},{key:"path",value:function(t){return c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t).slice(1)}},{key:"update",value:function(t){if(!0!==this.batch){var n=h.default.sources.USER;"string"==typeof t&&(n=t),Array.isArray(t)||(t=this.observer.takeRecords()),t.length>0&&this.emitter.emit(h.default.events.SCROLL_BEFORE_UPDATE,n,t),c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this,t.concat([])),t.length>0&&this.emitter.emit(h.default.events.SCROLL_UPDATE,n,t)}}}]),e}(d.default.Scroll);k.blotName="scroll",k.className="ql-editor",k.tagName="DIV",k.defaultChild="block",k.allowedChildren=[b.default,y.BlockEmbed,_.default],e.default=k},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(0),f=r(c),d=n(7),p=r(d),h=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.selection=n,r.textNode=document.createTextNode(e.CONTENTS),r.domNode.appendChild(r.textNode),r._length=0,r}return l(e,t),u(e,null,[{key:"value",value:function(){}}]),u(e,[{key:"detach",value:function(){null!=this.parent&&this.parent.removeChild(this)}},{key:"format",value:function(t,n){if(0!==this._length)return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);for(var r=this,o=0;null!=r&&r.statics.scope!==f.default.Scope.BLOCK_BLOT;)o+=r.offset(r.parent),r=r.parent;null!=r&&(this._length=e.CONTENTS.length,r.optimize(),r.formatAt(o,e.CONTENTS.length,t,n),this._length=0)}},{key:"index",value:function(t,n){return t===this.textNode?0:s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&null!=this.parent){var t=this.textNode,n=this.selection.getNativeRange(),r=void 0,o=void 0,i=void 0;if(null!=n&&n.start.node===t&&n.end.node===t){var l=[t,n.start.offset,n.end.offset];r=l[0],o=l[1],i=l[2]}for(;null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==e.CONTENTS){var s=this.textNode.data.split(e.CONTENTS).join("");this.next instanceof p.default?(r=this.next.domNode,this.next.insertAt(0,s),this.textNode.data=e.CONTENTS):(this.textNode.data=s,this.parent.insertBefore(f.default.create(this.textNode),this),this.textNode=document.createTextNode(e.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),null!=o){var u=[o,i].map(function(t){return Math.max(0,Math.min(r.data.length,t-1))}),c=a(u,2);return o=c[0],i=c[1],{startNode:r,startOffset:o,endNode:r,endOffset:i}}}}},{key:"update",value:function(t,e){var n=this;if(t.some(function(t){return"characterData"===t.type&&t.target===n.textNode})){var r=this.restore();r&&(e.range=r)}}},{key:"value",value:function(){return""}}]),e}(f.default.Embed);h.blotName="cursor",h.className="ql-cursor",h.tagName="span",h.CONTENTS="\ufeff",e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=r(a),u=n(4),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s.default.Container);f.allowedChildren=[c.default,u.BlockEmbed,f],e.default=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(0),c=r(u),f=n(7),d=r(f),p="\ufeff",h=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.contentNode=document.createElement("span"),n.contentNode.setAttribute("contenteditable",!1),[].slice.call(n.domNode.childNodes).forEach(function(t){n.contentNode.appendChild(t)}),n.leftGuard=document.createTextNode(p),n.rightGuard=document.createTextNode(p),n.domNode.appendChild(n.leftGuard),n.domNode.appendChild(n.contentNode),n.domNode.appendChild(n.rightGuard),n}return l(e,t),a(e,[{key:"index",value:function(t,n){return t===this.leftGuard?0:t===this.rightGuard?1:s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"restore",value:function(t){var e=void 0,n=void 0,r=t.data.split(p).join("");if(t===this.leftGuard)if(this.prev instanceof d.default){var o=this.prev.length();this.prev.insertAt(o,r),e={startNode:this.prev.domNode,startOffset:o+r.length}}else n=document.createTextNode(r),this.parent.insertBefore(c.default.create(n),this),e={startNode:n,startOffset:r.length};else t===this.rightGuard&&(this.next instanceof d.default?(this.next.insertAt(0,r),e={startNode:this.next.domNode,startOffset:r.length}):(n=document.createTextNode(r),this.parent.insertBefore(c.default.create(n),this.next),e={startNode:n,startOffset:r.length}));return t.data=p,e}},{key:"update",value:function(t,e){var n=this;t.forEach(function(t){if("characterData"===t.type&&(t.target===n.leftGuard||t.target===n.rightGuard)){var r=n.restore(t.target);r&&(e.range=r)}})}}]),e}(c.default.Embed);e.default=h},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"value",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t);return n.startsWith("rgb(")?(n=n.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+n.split(",").map(function(t){return("00"+parseInt(t).toString(16)).slice(-2)}).join("")):n}}]),e}(u.default.Attributor.Style),f=new u.default.Attributor.Class("color","ql-color",{scope:u.default.Scope.INLINE}),d=new c("color","color",{scope:u.default.Scope.INLINE});e.ColorAttributor=c,e.ColorClass=f,e.ColorStyle=d},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n=document.createElement("a");n.href=t;var r=n.href.slice(0,n.href.indexOf(":"));return e.indexOf(r)>-1}Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(6),c=function(t){return t&&t.__esModule?t:{default:t}}(u),f=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),a(e,[{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n)return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);n=this.constructor.sanitize(n),this.domNode.setAttribute("href",n)}}],[{key:"create",value:function(t){var n=s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return t=this.sanitize(t),n.setAttribute("href",t),n.setAttribute("target","_blank"),n}},{key:"formats",value:function(t){return t.getAttribute("href")}},{key:"sanitize",value:function(t){return l(t,this.PROTOCOL_WHITELIST)?t:this.SANITIZED_URL}}]),e}(c.default);f.blotName="link",f.tagName="A",f.SANITIZED_URL="about:blank",f.PROTOCOL_WHITELIST=["http","https","mailto","tel"],e.default=f,e.sanitize=l},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=n(107),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(){function t(e){var n=this;r(this,t),this.select=e,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){n.container.classList.toggle("ql-expanded")}),this.select.addEventListener("change",this.update.bind(this))}return i(t,[{key:"buildItem",value:function(t){var e=this,n=document.createElement("span");return n.classList.add("ql-picker-item"),t.hasAttribute("value")&&n.setAttribute("data-value",t.getAttribute("value")),t.textContent&&n.setAttribute("data-label",t.textContent),n.addEventListener("click",function(){e.selectItem(n,!0)}),n}},{key:"buildLabel",value:function(){var t=document.createElement("span");return t.classList.add("ql-picker-label"),t.innerHTML=a.default,this.container.appendChild(t),t}},{key:"buildOptions",value:function(){var t=this,e=document.createElement("span");e.classList.add("ql-picker-options"),[].slice.call(this.select.options).forEach(function(n){var r=t.buildItem(n);e.appendChild(r),!0===n.selected&&t.selectItem(r)}),this.container.appendChild(e)}},{key:"buildPicker",value:function(){var t=this;[].slice.call(this.select.attributes).forEach(function(e){t.container.setAttribute(e.name,e.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"close",value:function(){this.container.classList.remove("ql-expanded")}},{key:"selectItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.container.querySelector(".ql-selected");if(t!==n&&(null!=n&&n.classList.remove("ql-selected"),null!=t&&(t.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(t.parentNode.children,t),t.hasAttribute("data-value")?this.label.setAttribute("data-value",t.getAttribute("data-value")):this.label.removeAttribute("data-value"),t.hasAttribute("data-label")?this.label.setAttribute("data-label",t.getAttribute("data-label")):this.label.removeAttribute("data-label"),e))){if("function"==typeof Event)this.select.dispatchEvent(new Event("change"));else if("object"===("undefined"==typeof Event?"undefined":o(Event))){var r=document.createEvent("Event");r.initEvent("change",!0,!0),this.select.dispatchEvent(r)}this.close()}}},{key:"update",value:function(){var t=void 0;if(this.select.selectedIndex>-1){var e=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];t=this.select.options[this.select.selectedIndex],this.selectItem(e)}else this.selectItem(null);var n=null!=t&&t!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",n)}}]),t}();e.default=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=r(o),l=n(5),a=r(l),s=n(4),u=r(s),c=n(16),f=r(c),d=n(24),p=r(d),h=n(23),y=r(h),b=n(25),v=r(b),g=n(6),m=r(g),q=n(22),w=r(q),_=n(7),k=r(_),O=n(55),x=r(O),E=n(42),A=r(E),N=n(35),j=r(N);a.default.register({"blots/block":u.default,"blots/block/embed":s.BlockEmbed,"blots/break":f.default,"blots/container":p.default,"blots/cursor":y.default,"blots/embed":v.default,"blots/inline":m.default,"blots/scroll":w.default,"blots/text":k.default,"modules/clipboard":x.default,"modules/history":A.default,"modules/keyboard":j.default}),i.default.register(u.default,f.default,y.default,m.default,w.default,k.default),e.default=a.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t){this.domNode=t,this.attach()}return Object.defineProperty(t.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),t.create=function(t){if(null==this.tagName)throw new r.ParchmentError("Blot definition missing tagName");var e;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),parseInt(t).toString()===t&&(t=parseInt(t))),e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e},t.prototype.attach=function(){this.domNode[r.DATA_KEY]={blot:this}},t.prototype.clone=function(){var t=this.domNode.cloneNode(!1);return r.create(t)},t.prototype.detach=function(){null!=this.parent&&this.parent.removeChild(this),delete this.domNode[r.DATA_KEY]},t.prototype.deleteAt=function(t,e){this.isolate(t,e).remove()},t.prototype.formatAt=function(t,e,n,o){var i=this.isolate(t,e);if(null!=r.query(n,r.Scope.BLOT)&&o)i.wrap(n,o);else if(null!=r.query(n,r.Scope.ATTRIBUTE)){var l=r.create(this.statics.scope);i.wrap(l),l.format(n,o)}},t.prototype.insertAt=function(t,e,n){var o=null==n?r.create("text",e):r.create(e,n),i=this.split(t);this.parent.insertBefore(o,i)},t.prototype.insertInto=function(t,e){if(null!=this.parent&&this.parent.children.remove(this),t.children.insertBefore(this,e),null!=e)var n=e.domNode;null!=this.next&&this.domNode.nextSibling==n||t.domNode.insertBefore(this.domNode,void 0!==n?n:null),this.parent=t,this.scroll=t.scroll},t.prototype.isolate=function(t,e){var n=this.split(t);return n.split(e),n},t.prototype.length=function(){return 1},t.prototype.offset=function(t){return void 0===t&&(t=this.parent),null==this.parent||this==t?0:this.parent.children.offset(this)+this.parent.offset(t)},t.prototype.optimize=function(t){null!=this.domNode[r.DATA_KEY]&&delete this.domNode[r.DATA_KEY].mutations},t.prototype.remove=function(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},t.prototype.replace=function(t){null!=t.parent&&(t.parent.insertBefore(this,t.next),t.remove())},t.prototype.replaceWith=function(t,e){var n="string"==typeof t?r.create(t,e):t;return n.replace(this),n},t.prototype.split=function(t,e){return 0===t?this:this.next},t.prototype.update=function(t,e){},t.prototype.wrap=function(t,e){var n="string"==typeof t?r.create(t,e):t;return null!=this.parent&&this.parent.insertBefore(n,this.next),n.appendChild(this),n},t.blotName="abstract",t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=n(32),i=n(33),l=n(1),a=function(){function t(t){this.attributes={},this.domNode=t,this.build()}return t.prototype.attribute=function(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])},t.prototype.build=function(){var t=this;this.attributes={};var e=r.default.keys(this.domNode),n=o.default.keys(this.domNode),a=i.default.keys(this.domNode);e.concat(n).concat(a).forEach(function(e){var n=l.query(e,l.Scope.ATTRIBUTE);n instanceof r.default&&(t.attributes[n.attrName]=n)})},t.prototype.copy=function(t){var e=this;Object.keys(this.attributes).forEach(function(n){var r=e.attributes[n].value(e.domNode);t.format(n,r)})},t.prototype.move=function(t){var e=this;this.copy(t),Object.keys(this.attributes).forEach(function(t){e.attributes[t].remove(e.domNode)}),this.attributes={}},t.prototype.values=function(){var t=this;return Object.keys(this.attributes).reduce(function(e,n){return e[n]=t.attributes[n].value(t.domNode),e},{})},t}();e.default=a},function(t,e,n){"use strict";function r(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter(function(t){return 0===t.indexOf(e+"-")})}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("class")||"").split(/\s+/).map(function(t){return t.split("-").slice(0,-1).join("-")})},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(this.keyName+"-"+e),!0)},e.prototype.remove=function(t){r(t,this.keyName).forEach(function(e){t.classList.remove(e)}),0===t.classList.length&&t.removeAttribute("class")},e.prototype.value=function(t){var e=r(t,this.keyName)[0]||"",n=e.slice(this.keyName.length+1);return this.canAdd(t,n)?n:""},e}(i.default);e.default=l},function(t,e,n){"use strict";function r(t){var e=t.split("-"),n=e.slice(1).map(function(t){return t[0].toUpperCase()+t.slice(1)}).join("");return e[0]+n}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("style")||"").split(";").map(function(t){return t.split(":")[0].trim()})},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.style[r(this.keyName)]=e,!0)},e.prototype.remove=function(t){t.style[r(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")},e.prototype.value=function(t){var e=t.style[r(this.keyName)];return this.canAdd(t,e)?e:""},e}(i.default);e.default=l},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,n){r(this,t),this.quill=e,this.options=n,this.modules={}}return o(t,[{key:"init",value:function(){var t=this;Object.keys(this.options.modules).forEach(function(e){null==t.modules[e]&&t.addModule(e)})}},{key:"addModule",value:function(t){var e=this.quill.constructor.import("modules/"+t);return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}]),t}();i.DEFAULTS={modules:{}},i.themes={default:i},e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n,r=t===z.keys.LEFT?"prefix":"suffix";return n={key:t,shiftKey:e},o(n,r,/^$/),o(n,"handler",function(n){var r=n.index;t===z.keys.RIGHT&&(r+=n.length+1);var o=this.quill.getLeaf(r);return!(v(o,1)[0]instanceof S.default)||(t===z.keys.LEFT?e?this.quill.setSelection(n.index-1,n.length+1,L.default.sources.USER):this.quill.setSelection(n.index-1,L.default.sources.USER):e?this.quill.setSelection(n.index,n.length+1,L.default.sources.USER):this.quill.setSelection(n.index+n.length+1,L.default.sources.USER),!1)}),n}function u(t,e){if(!(0===t.index||this.quill.getLength()<=1)){var n=this.quill.getLine(t.index),r=v(n,1),o=r[0],i={};if(0===e.offset){var l=this.quill.getLine(t.index-1),a=v(l,1),s=a[0];if(null!=s&&s.length()>1){var u=o.formats(),c=this.quill.getFormat(t.index-1,1);i=N.default.attributes.diff(u,c)||{}}}var f=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)?2:1;this.quill.deleteText(t.index-f,f,L.default.sources.USER),Object.keys(i).length>0&&this.quill.formatLine(t.index-f,f,i,L.default.sources.USER),this.quill.focus()}}function c(t,e){var n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)?2:1;if(!(t.index>=this.quill.getLength()-n)){var r={},o=0,i=this.quill.getLine(t.index),l=v(i,1),a=l[0];if(e.offset>=a.length()-1){var s=this.quill.getLine(t.index+1),u=v(s,1),c=u[0];if(c){var f=a.formats(),d=this.quill.getFormat(t.index,1);r=N.default.attributes.diff(f,d)||{},o=c.length()}}this.quill.deleteText(t.index,n,L.default.sources.USER),Object.keys(r).length>0&&this.quill.formatLine(t.index+o-1,n,r,L.default.sources.USER)}}function f(t){var e=this.quill.getLines(t),n={};if(e.length>1){var r=e[0].formats(),o=e[e.length-1].formats();n=N.default.attributes.diff(o,r)||{}}this.quill.deleteText(t,L.default.sources.USER),Object.keys(n).length>0&&this.quill.formatLine(t.index,1,n,L.default.sources.USER),this.quill.setSelection(t.index,L.default.sources.SILENT),this.quill.focus()}function d(t,e){var n=this;t.length>0&&this.quill.scroll.deleteAt(t.index,t.length);var r=Object.keys(e.format).reduce(function(t,n){return T.default.query(n,T.default.Scope.BLOCK)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t},{});this.quill.insertText(t.index,"\n",r,L.default.sources.USER),this.quill.setSelection(t.index+1,L.default.sources.SILENT),this.quill.focus(),Object.keys(e.format).forEach(function(t){null==r[t]&&(Array.isArray(e.format[t])||"link"!==t&&n.quill.format(t,e.format[t],L.default.sources.USER))})}function p(t){return{key:z.keys.TAB,shiftKey:!t,format:{"code-block":!0},handler:function(e){var n=T.default.query("code-block"),r=e.index,o=e.length,i=this.quill.scroll.descendant(n,r),l=v(i,2),a=l[0],s=l[1];if(null!=a){var u=this.quill.getIndex(a),c=a.newlineIndex(s,!0)+1,f=a.newlineIndex(u+s+o),d=a.domNode.textContent.slice(c,f).split("\n");s=0,d.forEach(function(e,i){t?(a.insertAt(c+s,n.TAB),s+=n.TAB.length,0===i?r+=n.TAB.length:o+=n.TAB.length):e.startsWith(n.TAB)&&(a.deleteAt(c+s,n.TAB.length),s-=n.TAB.length,0===i?r-=n.TAB.length:o-=n.TAB.length),s+=e.length+1}),this.quill.update(L.default.sources.USER),this.quill.setSelection(r,o,L.default.sources.SILENT)}}}}function h(t){return{key:t[0].toUpperCase(),shortKey:!0,handler:function(e,n){this.quill.format(t,!n.format[t],L.default.sources.USER)}}}function y(t){if("string"==typeof t||"number"==typeof t)return y({key:t});if("object"===(void 0===t?"undefined":b(t))&&(t=(0,q.default)(t,!1)),"string"==typeof t.key)if(null!=z.keys[t.key.toUpperCase()])t.key=z.keys[t.key.toUpperCase()];else{if(1!==t.key.length)return null;t.key=t.key.toUpperCase().charCodeAt(0)}return t.shortKey&&(t[U]=t.shortKey,delete t.shortKey),t}Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),m=n(21),q=r(m),w=n(11),_=r(w),k=n(3),O=r(k),x=n(2),E=r(x),A=n(20),N=r(A),j=n(0),T=r(j),P=n(25),S=r(P),C=n(5),L=r(C),R=n(10),M=r(R),I=n(9),B=r(I),D=(0,M.default)("quill:keyboard"),U=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",z=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.bindings={},Object.keys(r.options.bindings).forEach(function(e){("list autofill"!==e||null==t.scroll.whitelist||t.scroll.whitelist.list)&&r.options.bindings[e]&&r.addBinding(r.options.bindings[e])}),r.addBinding({key:e.keys.ENTER,shiftKey:null},d),r.addBinding({key:e.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0},u),r.addBinding({key:e.keys.DELETE},{collapsed:!0},c)):(r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},u),r.addBinding({key:e.keys.DELETE},{collapsed:!0,suffix:/^.?$/},c)),r.addBinding({key:e.keys.BACKSPACE},{collapsed:!1},f),r.addBinding({key:e.keys.DELETE},{collapsed:!1},f),r.addBinding({key:e.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},u),r.listen(),r}return a(e,t),g(e,null,[{key:"match",value:function(t,e){return e=y(e),!["altKey","ctrlKey","metaKey","shiftKey"].some(function(n){return!!e[n]!==t[n]&&null!==e[n]})&&e.key===(t.which||t.keyCode)}}]),g(e,[{key:"addBinding",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=y(t);if(null==r||null==r.key)return D.warn("Attempted to add invalid keyboard binding",r);"function"==typeof e&&(e={handler:e}),"function"==typeof n&&(n={handler:n}),r=(0,O.default)(r,e,n),this.bindings[r.key]=this.bindings[r.key]||[],this.bindings[r.key].push(r)}},{key:"listen",value:function(){var t=this;this.quill.root.addEventListener("keydown",function(n){if(!n.defaultPrevented){var r=n.which||n.keyCode,o=(t.bindings[r]||[]).filter(function(t){return e.match(n,t)});if(0!==o.length){var i=t.quill.getSelection();if(null!=i&&t.quill.hasFocus()){var l=t.quill.getLine(i.index),a=v(l,2),s=a[0],u=a[1],c=t.quill.getLeaf(i.index),f=v(c,2),d=f[0],p=f[1],h=0===i.length?[d,p]:t.quill.getLeaf(i.index+i.length),y=v(h,2),g=y[0],m=y[1],q=d instanceof T.default.Text?d.value().slice(0,p):"",w=g instanceof T.default.Text?g.value().slice(m):"",k={collapsed:0===i.length,empty:0===i.length&&s.length()<=1,format:t.quill.getFormat(i),offset:u,prefix:q,suffix:w};o.some(function(e){if(null!=e.collapsed&&e.collapsed!==k.collapsed)return!1;if(null!=e.empty&&e.empty!==k.empty)return!1;if(null!=e.offset&&e.offset!==k.offset)return!1;if(Array.isArray(e.format)){if(e.format.every(function(t){return null==k.format[t]}))return!1}else if("object"===b(e.format)&&!Object.keys(e.format).every(function(t){return!0===e.format[t]?null!=k.format[t]:!1===e.format[t]?null==k.format[t]:(0,_.default)(e.format[t],k.format[t])}))return!1;return!(null!=e.prefix&&!e.prefix.test(k.prefix))&&(!(null!=e.suffix&&!e.suffix.test(k.suffix))&&!0!==e.handler.call(t,i,k))})&&n.preventDefault()}}}})}}]),e}(B.default);z.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},z.DEFAULTS={bindings:{bold:h("bold"),italic:h("italic"),underline:h("underline"),indent:{key:z.keys.TAB,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","+1",L.default.sources.USER)}},outdent:{key:z.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","-1",L.default.sources.USER)}},"outdent backspace":{key:z.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(t,e){null!=e.format.indent?this.quill.format("indent","-1",L.default.sources.USER):null!=e.format.list&&this.quill.format("list",!1,L.default.sources.USER)}},"indent code-block":p(!0),"outdent code-block":p(!1),"remove tab":{key:z.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(t){this.quill.deleteText(t.index-1,1,L.default.sources.USER)}},tab:{key:z.keys.TAB,handler:function(t){this.quill.history.cutoff();var e=(new E.default).retain(t.index).delete(t.length).insert("\t");this.quill.updateContents(e,L.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index+1,L.default.sources.SILENT)}},"list empty enter":{key:z.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(t,e){this.quill.format("list",!1,L.default.sources.USER),e.format.indent&&this.quill.format("indent",!1,L.default.sources.USER)}},"checklist enter":{key:z.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(t){var e=this.quill.getLine(t.index),n=v(e,2),r=n[0],o=n[1],i=(new E.default).retain(t.index).insert("\n",{list:"checked"}).retain(r.length()-o-1).retain(1,{list:"unchecked"});this.quill.updateContents(i,L.default.sources.USER),this.quill.setSelection(t.index+1,L.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:z.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(t,e){var n=this.quill.getLine(t.index),r=v(n,2),o=r[0],i=r[1],l=(new E.default).retain(t.index).insert("\n",e.format).retain(o.length()-i-1).retain(1,{header:null});this.quill.updateContents(l,L.default.sources.USER),this.quill.setSelection(t.index+1,L.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\[ ?\]|\[x\])$/,handler:function(t,e){var n=e.prefix.length,r=this.quill.getLine(t.index),o=v(r,2),i=o[0],l=o[1];if(l>n)return!0;var a=void 0;switch(e.prefix.trim()){case"[]":case"[ ]":a="unchecked";break;case"[x]":a="checked";break;case"-":a="bullet";break;default:a="ordered"}this.quill.insertText(t.index," ",L.default.sources.USER),this.quill.history.cutoff();var s=(new E.default).retain(t.index-l).delete(n+1).retain(i.length()-2-l).retain(1,{list:a});this.quill.updateContents(s,L.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index-n,L.default.sources.SILENT)}},"code exit":{key:z.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(t){var e=this.quill.getLine(t.index),n=v(e,2),r=n[0],o=n[1],i=(new E.default).retain(t.index+r.length()-o-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(i,L.default.sources.USER)}},"embed left":s(z.keys.LEFT,!1),"embed left shift":s(z.keys.LEFT,!0),"embed right":s(z.keys.RIGHT,!1),"embed right shift":s(z.keys.RIGHT,!0)}},e.default=z,e.SHORTKEY=U},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i={scope:o.default.Scope.BLOCK,whitelist:["right","center","justify"]},l=new o.default.Attributor.Attribute("align","align",i),a=new o.default.Attributor.Class("align","ql-align",i),s=new o.default.Attributor.Style("align","text-align",i);e.AlignAttribute=l,e.AlignClass=a,e.AlignStyle=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(26),l=new o.default.Attributor.Class("background","ql-bg",{scope:o.default.Scope.INLINE}),a=new i.ColorAttributor("background","background-color",{scope:o.default.Scope.INLINE});e.BackgroundClass=l,e.BackgroundStyle=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i={scope:o.default.Scope.BLOCK,whitelist:["rtl"]},l=new o.default.Attributor.Attribute("direction","dir",i),a=new o.default.Attributor.Class("direction","ql-direction",i),s=new o.default.Attributor.Style("direction","direction",i);e.DirectionAttribute=l,e.DirectionClass=a,e.DirectionStyle=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c={scope:u.default.Scope.INLINE,whitelist:["serif","monospace"]},f=new u.default.Attributor.Class("font","ql-font",c),d=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"value",value:function(t){return a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t).replace(/["']/g,"")}}]),e}(u.default.Attributor.Style),p=new d("font","font-family",c);e.FontStyle=p,e.FontClass=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=new o.default.Attributor.Class("size","ql-size",{scope:o.default.Scope.INLINE,whitelist:["small","large","huge"]}),l=new o.default.Attributor.Style("size","font-size",{scope:o.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=i,e.SizeStyle=l},function(t,e,n){"use strict";t.exports={align:{"":n(76),center:n(77),right:n(78),justify:n(79)},background:n(80),blockquote:n(81),bold:n(82),clean:n(83),code:n(58),"code-block":n(58),color:n(84),direction:{"":n(85),rtl:n(86)},float:{center:n(87),full:n(88),left:n(89),right:n(90)},formula:n(91),header:{1:n(92),2:n(93)},italic:n(94),image:n(95),indent:{"+1":n(96),"-1":n(97)},link:n(98),list:{ordered:n(99),bullet:n(100),check:n(101)},script:{sub:n(102),super:n(103)},strike:n(104),underline:n(105),video:n(106)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.ops[t.ops.length-1];return null!=e&&(null!=e.insert?"string"==typeof e.insert&&e.insert.endsWith("\n"):null!=e.attributes&&Object.keys(e.attributes).some(function(t){return null!=f.default.query(t,f.default.Scope.BLOCK)}))}function s(t){var e=t.reduce(function(t,e){return t+=e.delete||0},0),n=t.length()-e;return a(t)&&(n-=1),n}Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(0),f=r(c),d=n(5),p=r(d),h=n(9),y=r(h),b=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.lastRecorded=0,r.ignoreChange=!1,r.clear(),r.quill.on(p.default.events.EDITOR_CHANGE,function(t,e,n,o){t!==p.default.events.TEXT_CHANGE||r.ignoreChange||(r.options.userOnly&&o!==p.default.sources.USER?r.transform(e):r.record(e,n))}),r.quill.keyboard.addBinding({key:"Z",shortKey:!0},r.undo.bind(r)),r.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},r.redo.bind(r)),/Win/i.test(navigator.platform)&&r.quill.keyboard.addBinding({key:"Y",shortKey:!0},r.redo.bind(r)),r}return l(e,t),u(e,[{key:"change",value:function(t,e){if(0!==this.stack[t].length){var n=this.stack[t].pop();this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(n[t],p.default.sources.USER),this.ignoreChange=!1;var r=s(n[t]);this.quill.setSelection(r),this.stack[e].push(n)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(t,e){if(0!==t.ops.length){this.stack.redo=[];var n=this.quill.getContents().diff(e),r=Date.now();if(this.lastRecorded+this.options.delay>r&&this.stack.undo.length>0){var o=this.stack.undo.pop();n=n.compose(o.undo),t=o.redo.compose(t)}else this.lastRecorded=r;this.stack.undo.push({redo:t,undo:n}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(t){this.stack.undo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)}),this.stack.redo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),e}(y.default);b.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e.default=b,e.getLastChangeIndex=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return e?(e[1]||"https")+"://www.youtube.com/embed/"+e[2]+"?showinfo=0":(e=t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(e[1]||"https")+"://player.vimeo.com/video/"+e[2]+"/":t}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.forEach(function(e){var r=document.createElement("option");e===n?r.setAttribute("selected","selected"):r.setAttribute("value",e),t.appendChild(r)})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},f=n(3),d=r(f),p=n(2),h=r(p),y=n(8),b=r(y),v=n(35),g=r(v),m=n(34),q=r(m),w=n(59),_=r(w),k=n(60),O=r(k),x=n(28),E=r(x),A=n(61),N=r(A),j=[!1,"center","right","justify"],T=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],P=[!1,"serif","monospace"],S=["1","2","3",!1],C=["small",!1,"large","huge"],L=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=function e(n){if(!document.body.contains(t.root))return document.body.removeEventListener("click",e);null==r.tooltip||r.tooltip.root.contains(n.target)||document.activeElement===r.tooltip.textbox||r.quill.hasFocus()||r.tooltip.hide(),null!=r.pickers&&r.pickers.forEach(function(t){t.container.contains(n.target)||t.close()})};return t.emitter.listenDOM("click",document.body,l),r}return l(e,t),u(e,[{key:"addModule",value:function(t){var n=c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addModule",this).call(this,t);return"toolbar"===t&&this.extendToolbar(n),n}},{key:"buildButtons",value:function(t,e){t.forEach(function(t){(t.getAttribute("class")||"").split(/\s+/).forEach(function(n){if(n.startsWith("ql-")&&(n=n.slice("ql-".length),null!=e[n]))if("direction"===n)t.innerHTML=e[n][""]+e[n].rtl;else if("string"==typeof e[n])t.innerHTML=e[n];else{var r=t.value||"";null!=r&&e[n][r]&&(t.innerHTML=e[n][r])}})})}},{key:"buildPickers",value:function(t,e){var n=this;this.pickers=t.map(function(t){if(t.classList.contains("ql-align"))return null==t.querySelector("option")&&s(t,j),new O.default(t,e.align);if(t.classList.contains("ql-background")||t.classList.contains("ql-color")){var n=t.classList.contains("ql-background")?"background":"color";return null==t.querySelector("option")&&s(t,T,"background"===n?"#ffffff":"#000000"),new _.default(t,e[n])}return null==t.querySelector("option")&&(t.classList.contains("ql-font")?s(t,P):t.classList.contains("ql-header")?s(t,S):t.classList.contains("ql-size")&&s(t,C)),new E.default(t)});var r=function(){n.pickers.forEach(function(t){t.update()})};this.quill.on(b.default.events.EDITOR_CHANGE,r)}}]),e}(q.default);L.DEFAULTS=(0,d.default)(!0,{},q.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var t=this,e=this.container.querySelector("input.ql-image[type=file]");null==e&&(e=document.createElement("input"),e.setAttribute("type","file"),e.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),e.classList.add("ql-image"),e.addEventListener("change",function(){if(null!=e.files&&null!=e.files[0]){var n=new FileReader;n.onload=function(n){var r=t.quill.getSelection(!0);t.quill.updateContents((new h.default).retain(r.index).delete(r.length).insert({image:n.target.result}),b.default.sources.USER),t.quill.setSelection(r.index+1,b.default.sources.SILENT),e.value=""},n.readAsDataURL(e.files[0])}}),this.container.appendChild(e)),e.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var R=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.textbox=r.root.querySelector('input[type="text"]'),r.listen(),r}return l(e,t),u(e,[{key:"listen",value:function(){var t=this;this.textbox.addEventListener("keydown",function(e){g.default.match(e,"enter")?(t.save(),e.preventDefault()):g.default.match(e,"escape")&&(t.cancel(),e.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"link",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),null!=e?this.textbox.value=e:t!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+t)||""),this.root.setAttribute("data-mode",t)}},{key:"restoreFocus",value:function(){var t=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=t}},{key:"save",value:function(){var t=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var e=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",t,b.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",t,b.default.sources.USER)),this.quill.root.scrollTop=e;break;case"video":t=a(t);case"formula":if(!t)break;var n=this.quill.getSelection(!0);if(null!=n){var r=n.index+n.length;this.quill.insertEmbed(r,this.root.getAttribute("data-mode"),t,b.default.sources.USER),"formula"===this.root.getAttribute("data-mode")&&this.quill.insertText(r+1," ",b.default.sources.USER),this.quill.setSelection(r+2,b.default.sources.USER)}}this.textbox.value="",this.hide()}}]),e}(N.default);e.BaseTooltip=R,e.default=L},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.head=this.tail=void 0,this.length=0}return t.prototype.append=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.insertBefore(t[0],void 0),t.length>1&&this.append.apply(this,t.slice(1))},t.prototype.contains=function(t){for(var e,n=this.iterator();e=n();)if(e===t)return!0;return!1},t.prototype.insertBefore=function(t,e){t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=void 0,this.head=this.tail=t),this.length+=1},t.prototype.offset=function(t){for(var e=0,n=this.head;null!=n;){if(n===t)return e;e+=n.length(),n=n.next}return-1},t.prototype.remove=function(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)},t.prototype.iterator=function(t){return void 0===t&&(t=this.head),function(){var e=t;return null!=t&&(t=t.next),e}},t.prototype.find=function(t,e){void 0===e&&(e=!1);for(var n,r=this.iterator();n=r();){var o=n.length();if(t<o||e&&t===o&&(null==n.next||0!==n.next.length()))return[n,t];t-=o}return[null,0]},t.prototype.forEach=function(t){for(var e,n=this.iterator();e=n();)t(e)},t.prototype.forEachAt=function(t,e,n){if(!(e<=0))for(var r,o=this.find(t),i=o[0],l=o[1],a=t-l,s=this.iterator(i);(r=s())&&a<t+e;){var u=r.length();t>a?n(r,t-a,Math.min(e,a+u-t)):n(r,0,Math.min(u,t+e-a)),a+=u}},t.prototype.map=function(t){return this.reduce(function(e,n){return e.push(t(n)),e},[])},t.prototype.reduce=function(t,e){for(var n,r=this.iterator();n=r();)e=t(e,n);return e},t}();e.default=r},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n(1),l={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},a=function(t){function e(e){var n=t.call(this,e)||this;return n.parent=null,n.observer=new MutationObserver(function(t){n.update(t)}),n.observer.observe(n.domNode,l),n.scroll=n,n}return r(e,t),e.prototype.detach=function(){t.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(e,n){this.update(),0===e&&n===this.length()?this.children.forEach(function(t){t.remove()}):t.prototype.deleteAt.call(this,e,n)},e.prototype.formatAt=function(e,n,r,o){this.update(),t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){this.update(),t.prototype.insertAt.call(this,e,n,r)},e.prototype.optimize=function(e,n){var r=this;void 0===e&&(e=[]),void 0===n&&(n={}),t.prototype.optimize.call(this,n);for(var l=[].slice.call(this.observer.takeRecords());l.length>0;)e.push(l.pop());for(var a=function(t,e){void 0===e&&(e=!0),null!=t&&t!==r&&null!=t.domNode.parentNode&&(null==t.domNode[i.DATA_KEY].mutations&&(t.domNode[i.DATA_KEY].mutations=[]),e&&a(t.parent))},s=function(t){null!=t.domNode[i.DATA_KEY]&&null!=t.domNode[i.DATA_KEY].mutations&&(t instanceof o.default&&t.children.forEach(s),t.optimize(n))},u=e,c=0;u.length>0;c+=1){if(c>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(u.forEach(function(t){var e=i.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(a(i.find(t.previousSibling,!1)),[].forEach.call(t.addedNodes,function(t){var e=i.find(t,!1);a(e,!1),e instanceof o.default&&e.children.forEach(function(t){a(t,!1)})})):"attributes"===t.type&&a(e.prev)),a(e))}),this.children.forEach(s),u=[].slice.call(this.observer.takeRecords()),l=u.slice();l.length>0;)e.push(l.pop())}},e.prototype.update=function(e,n){var r=this;void 0===n&&(n={}),e=e||this.observer.takeRecords(),e.map(function(t){var e=i.find(t.target,!0);if(null!=e)return null==e.domNode[i.DATA_KEY].mutations?(e.domNode[i.DATA_KEY].mutations=[t],e):(e.domNode[i.DATA_KEY].mutations.push(t),null)}).forEach(function(t){null!=t&&t!==r&&null!=t.domNode[i.DATA_KEY]&&t.update(t.domNode[i.DATA_KEY].mutations||[],n)}),null!=this.domNode[i.DATA_KEY].mutations&&t.prototype.update.call(this,this.domNode[i.DATA_KEY].mutations,n),this.optimize(e,n)},e.blotName="scroll",e.defaultChild="block",e.scope=i.Scope.BLOCK_BLOT,e.tagName="DIV",e}(o.default);e.default=a},function(t,e,n){"use strict";function r(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=n(18),l=n(1),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(n){if(n.tagName!==e.tagName)return t.formats.call(this,n)},e.prototype.format=function(n,r){var o=this;n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):(this.children.forEach(function(t){t instanceof i.default||(t=t.wrap(e.blotName,!0)),o.attributes.copy(t)}),this.unwrap())},e.prototype.formatAt=function(e,n,r,o){if(null!=this.formats()[r]||l.query(r,l.Scope.ATTRIBUTE)){this.isolate(e,n).format(r,o)}else t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n);var o=this.formats();if(0===Object.keys(o).length)return this.unwrap();var i=this.next;i instanceof e&&i.prev===this&&r(o,i.formats())&&(i.moveChildren(this),i.remove())},e.blotName="inline",e.scope=l.Scope.INLINE_BLOT,e.tagName="SPAN",e}(i.default);e.default=a},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=n(1),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(n){var r=i.query(e.blotName).tagName;if(n.tagName!==r)return t.formats.call(this,n)},e.prototype.format=function(n,r){null!=i.query(n,i.Scope.BLOCK)&&(n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):this.replaceWith(e.blotName))},e.prototype.formatAt=function(e,n,r,o){null!=i.query(r,i.Scope.BLOCK)?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){if(null==r||null!=i.query(n,i.Scope.INLINE))t.prototype.insertAt.call(this,e,n,r);else{var o=this.split(e),l=i.create(n,r);o.parent.insertBefore(l,o)}},e.prototype.update=function(e,n){navigator.userAgent.match(/Trident/)?this.attach():t.prototype.update.call(this,e,n)},e.blotName="block",e.scope=i.Scope.BLOCK_BLOT,e.tagName="P",e}(o.default);e.default=l},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.formats=function(t){},e.prototype.format=function(e,n){t.prototype.formatAt.call(this,0,this.length(),e,n)},e.prototype.formatAt=function(e,n,r,o){0===e&&n===this.length()?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.formats=function(){return this.statics.formats(this.domNode)},e}(o.default);e.default=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=n(1),l=function(t){function e(e){var n=t.call(this,e)||this;return n.text=n.statics.value(n.domNode),n}return r(e,t),e.create=function(t){return document.createTextNode(t)},e.value=function(t){var e=t.data;return e.normalize&&(e=e.normalize()),e},e.prototype.deleteAt=function(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)},e.prototype.index=function(t,e){return this.domNode===t?e:-1},e.prototype.insertAt=function(e,n,r){null==r?(this.text=this.text.slice(0,e)+n+this.text.slice(e),this.domNode.data=this.text):t.prototype.insertAt.call(this,e,n,r)},e.prototype.length=function(){return this.text.length},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof e&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},e.prototype.position=function(t,e){return void 0===e&&(e=!1),[this.domNode,t]},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=i.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n},e.prototype.update=function(t,e){var n=this;t.some(function(t){return"characterData"===t.type&&t.target===n.domNode})&&(this.text=this.statics.value(this.domNode))},e.prototype.value=function(){return this.text},e.blotName="text",e.scope=i.Scope.INLINE_BLOT,e}(o.default);e.default=l},function(t,e,n){"use strict";var r=document.createElement("div");if(r.classList.toggle("test-class",!1),r.classList.contains("test-class")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return arguments.length>1&&!this.contains(t)==!e?e:o.call(this,t)}}String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var n=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>n.length)&&(e=n.length),e-=t.length;var r=n.indexOf(t,e);return-1!==r&&r===e}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,n=Object(this),r=n.length>>>0,o=arguments[1],i=0;i<r;i++)if(e=n[i],t.call(o,e,i,n))return e}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(t,e){function n(t,e,n){if(t==e)return t?[[b,t]]:[];(n<0||t.length<n)&&(n=null);var o=l(t,e),i=t.substring(0,o);t=t.substring(o),e=e.substring(o),o=a(t,e);var s=t.substring(t.length-o);t=t.substring(0,t.length-o),e=e.substring(0,e.length-o);var c=r(t,e);return i&&c.unshift([b,i]),s&&c.push([b,s]),u(c),null!=n&&(c=f(c,n)),c=d(c)}function r(t,e){var r;if(!t)return[[y,e]];if(!e)return[[h,t]];var i=t.length>e.length?t:e,l=t.length>e.length?e:t,a=i.indexOf(l);if(-1!=a)return r=[[y,i.substring(0,a)],[b,l],[y,i.substring(a+l.length)]],t.length>e.length&&(r[0][0]=r[2][0]=h),r;if(1==l.length)return[[h,t],[y,e]];var u=s(t,e);if(u){var c=u[0],f=u[1],d=u[2],p=u[3],v=u[4],g=n(c,d),m=n(f,p);return g.concat([[b,v]],m)}return o(t,e)}function o(t,e){for(var n=t.length,r=e.length,o=Math.ceil((n+r)/2),l=o,a=2*o,s=new Array(a),u=new Array(a),c=0;c<a;c++)s[c]=-1,u[c]=-1;s[l+1]=0,u[l+1]=0;for(var f=n-r,d=f%2!=0,p=0,b=0,v=0,g=0,m=0;m<o;m++){for(var q=-m+p;q<=m-b;q+=2){var w,_=l+q;w=q==-m||q!=m&&s[_-1]<s[_+1]?s[_+1]:s[_-1]+1;for(var k=w-q;w<n&&k<r&&t.charAt(w)==e.charAt(k);)w++,k++;if(s[_]=w,w>n)b+=2;else if(k>r)p+=2;else if(d){var O=l+f-q;if(O>=0&&O<a&&-1!=u[O]){var x=n-u[O];if(w>=x)return i(t,e,w,k)}}}for(var E=-m+v;E<=m-g;E+=2){var x,O=l+E;x=E==-m||E!=m&&u[O-1]<u[O+1]?u[O+1]:u[O-1]+1;for(var A=x-E;x<n&&A<r&&t.charAt(n-x-1)==e.charAt(r-A-1);)x++,A++;if(u[O]=x,x>n)g+=2;else if(A>r)v+=2;else if(!d){var _=l+f-E;if(_>=0&&_<a&&-1!=s[_]){var w=s[_],k=l+w-_;if(x=n-x,w>=x)return i(t,e,w,k)}}}}return[[h,t],[y,e]]}function i(t,e,r,o){var i=t.substring(0,r),l=e.substring(0,o),a=t.substring(r),s=e.substring(o),u=n(i,l),c=n(a,s);return u.concat(c)}function l(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(i,o)==e.substring(i,o)?(n=o,i=n):r=o,o=Math.floor((r-n)/2+n);return o}function a(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(t.length-o,t.length-i)==e.substring(e.length-o,e.length-i)?(n=o,i=n):r=o,o=Math.floor((r-n)/2+n);return o}function s(t,e){function n(t,e,n){for(var r,o,i,s,u=t.substring(n,n+Math.floor(t.length/4)),c=-1,f="";-1!=(c=e.indexOf(u,c+1));){var d=l(t.substring(n),e.substring(c)),p=a(t.substring(0,n),e.substring(0,c));f.length<p+d&&(f=e.substring(c-p,c)+e.substring(c,c+d),r=t.substring(0,n-p),o=t.substring(n+d),i=e.substring(0,c-p),s=e.substring(c+d))}return 2*f.length>=t.length?[r,o,i,s,f]:null}var r=t.length>e.length?t:e,o=t.length>e.length?e:t;if(r.length<4||2*o.length<r.length)return null;var i,s=n(r,o,Math.ceil(r.length/4)),u=n(r,o,Math.ceil(r.length/2));if(!s&&!u)return null;i=u?s&&s[4].length>u[4].length?s:u:s;var c,f,d,p;return t.length>e.length?(c=i[0],f=i[1],d=i[2],p=i[3]):(d=i[0],p=i[1],c=i[2],f=i[3]),[c,f,d,p,i[4]]}function u(t){t.push([b,""]);for(var e,n=0,r=0,o=0,i="",s="";n<t.length;)switch(t[n][0]){case y:o++,s+=t[n][1],n++;break;case h:r++,i+=t[n][1],n++;break;case b:r+o>1?(0!==r&&0!==o&&(e=l(s,i),0!==e&&(n-r-o>0&&t[n-r-o-1][0]==b?t[n-r-o-1][1]+=s.substring(0,e):(t.splice(0,0,[b,s.substring(0,e)]),n++),s=s.substring(e),i=i.substring(e)),0!==(e=a(s,i))&&(t[n][1]=s.substring(s.length-e)+t[n][1],s=s.substring(0,s.length-e),i=i.substring(0,i.length-e))),0===r?t.splice(n-o,r+o,[y,s]):0===o?t.splice(n-r,r+o,[h,i]):t.splice(n-r-o,r+o,[h,i],[y,s]),n=n-r-o+(r?1:0)+(o?1:0)+1):0!==n&&t[n-1][0]==b?(t[n-1][1]+=t[n][1],t.splice(n,1)):n++,o=0,r=0,i="",s=""}""===t[t.length-1][1]&&t.pop();var c=!1;for(n=1;n<t.length-1;)t[n-1][0]==b&&t[n+1][0]==b&&(t[n][1].substring(t[n][1].length-t[n-1][1].length)==t[n-1][1]?(t[n][1]=t[n-1][1]+t[n][1].substring(0,t[n][1].length-t[n-1][1].length),t[n+1][1]=t[n-1][1]+t[n+1][1],t.splice(n-1,1),c=!0):t[n][1].substring(0,t[n+1][1].length)==t[n+1][1]&&(t[n-1][1]+=t[n+1][1],t[n][1]=t[n][1].substring(t[n+1][1].length)+t[n+1][1],t.splice(n+1,1),c=!0)),n++;c&&u(t)}function c(t,e){if(0===e)return[b,t];for(var n=0,r=0;r<t.length;r++){var o=t[r];if(o[0]===h||o[0]===b){var i=n+o[1].length;if(e===i)return[r+1,t];if(e<i){t=t.slice();var l=e-n,a=[o[0],o[1].slice(0,l)],s=[o[0],o[1].slice(l)];return t.splice(r,1,a,s),[r+1,t]}n=i}}throw new Error("cursor_pos is out of bounds!")}function f(t,e){var n=c(t,e),r=n[1],o=n[0],i=r[o],l=r[o+1];if(null==i)return t;if(i[0]!==b)return t;if(null!=l&&i[1]+l[1]===l[1]+i[1])return r.splice(o,2,l,i),p(r,o,2);if(null!=l&&0===l[1].indexOf(i[1])){r.splice(o,2,[l[0],i[1]],[0,i[1]]);var a=l[1].slice(i[1].length);return a.length>0&&r.splice(o+2,0,[l[0],a]),p(r,o,3)}return t}function d(t){for(var e=!1,n=function(t){return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343},r=2;r<t.length;r+=1)t[r-2][0]===b&&function(t){return t.charCodeAt(t.length-1)>=55296&&t.charCodeAt(t.length-1)<=56319}(t[r-2][1])&&t[r-1][0]===h&&n(t[r-1][1])&&t[r][0]===y&&n(t[r][1])&&(e=!0,t[r-1][1]=t[r-2][1].slice(-1)+t[r-1][1],t[r][1]=t[r-2][1].slice(-1)+t[r][1],t[r-2][1]=t[r-2][1].slice(0,-1));if(!e)return t;for(var o=[],r=0;r<t.length;r+=1)t[r][1].length>0&&o.push(t[r]);return o}function p(t,e,n){for(var r=e+n-1;r>=0&&r>=e-1;r--)if(r+1<t.length){var o=t[r],i=t[r+1];o[0]===i[1]&&t.splice(r,2,[o[0],o[1]+i[1]])}return t}var h=-1,y=1,b=0,v=n;v.INSERT=y,v.DELETE=h,v.EQUAL=b,t.exports=v},function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},function(t,e){"use strict";function n(){}function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function o(){this._events=new n,this._eventsCount=0}var i=Object.prototype.hasOwnProperty,l="~";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(l=!1)),o.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)i.call(t,e)&&n.push(l?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},o.prototype.listeners=function(t,e){var n=l?l+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},o.prototype.emit=function(t,e,n,r,o,i){var a=l?l+t:t;if(!this._events[a])return!1;var s,u,c=this._events[a],f=arguments.length;if(c.fn){switch(c.once&&this.removeListener(t,c.fn,void 0,!0),f){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:return c.fn.call(c.context,e,n,r),!0;case 5:return c.fn.call(c.context,e,n,r,o),!0;case 6:return c.fn.call(c.context,e,n,r,o,i),!0}for(u=1,s=new Array(f-1);u<f;u++)s[u-1]=arguments[u];c.fn.apply(c.context,s)}else{var d,p=c.length;for(u=0;u<p;u++)switch(c[u].once&&this.removeListener(t,c[u].fn,void 0,!0),f){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,e);break;case 3:c[u].fn.call(c[u].context,e,n);break;case 4:c[u].fn.call(c[u].context,e,n,r);break;default:if(!s)for(d=1,s=new Array(f-1);d<f;d++)s[d-1]=arguments[d];c[u].fn.apply(c[u].context,s)}}return!0},o.prototype.on=function(t,e,n){var o=new r(e,n||this),i=l?l+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],o]:this._events[i].push(o):(this._events[i]=o,this._eventsCount++),this},o.prototype.once=function(t,e,n){var o=new r(e,n||this,!0),i=l?l+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],o]:this._events[i].push(o):(this._events[i]=o,this._eventsCount++),this},o.prototype.removeListener=function(t,e,r,o){var i=l?l+t:t;if(!this._events[i])return this;if(!e)return 0==--this._eventsCount?this._events=new n:delete this._events[i],this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||(0==--this._eventsCount?this._events=new n:delete this._events[i]);else{for(var s=0,u=[],c=a.length;s<c;s++)(a[s].fn!==e||o&&!a[s].once||r&&a[s].context!==r)&&u.push(a[s]);u.length?this._events[i]=1===u.length?u[0]:u:0==--this._eventsCount?this._events=new n:delete this._events[i]}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=l?l+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new n:delete this._events[e])):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=l,o.EventEmitter=o,void 0!==t&&(t.exports=o)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,n){return"object"===(void 0===e?"undefined":k(e))?Object.keys(e).reduce(function(t,n){return s(t,n,e[n])},t):t.reduce(function(t,r){return r.attributes&&r.attributes[e]?t.push(r):t.insert(r.insert,(0,A.default)({},o({},e,n),r.attributes))},new j.default)}function u(t){if(t.nodeType!==Node.ELEMENT_NODE)return{};return t["__ql-computed-style"]||(t["__ql-computed-style"]=window.getComputedStyle(t))}function c(t,e){for(var n="",r=t.ops.length-1;r>=0&&n.length<e.length;--r){var o=t.ops[r];if("string"!=typeof o.insert)break;n=o.insert+n}return n.slice(-1*e.length)===e}function f(t){if(0===t.childNodes.length)return!1;var e=u(t);return["block","list-item"].indexOf(e.display)>-1}function d(t,e,n){return t.nodeType===t.TEXT_NODE?n.reduce(function(e,n){return n(t,e)},new j.default):t.nodeType===t.ELEMENT_NODE?[].reduce.call(t.childNodes||[],function(r,o){var i=d(o,e,n);return o.nodeType===t.ELEMENT_NODE&&(i=e.reduce(function(t,e){return e(o,t)},i),i=(o[W]||[]).reduce(function(t,e){return e(o,t)},i)),r.concat(i)},new j.default):new j.default}function p(t,e,n){return s(n,t,!0)}function h(t,e){var n=P.default.Attributor.Attribute.keys(t),r=P.default.Attributor.Class.keys(t),o=P.default.Attributor.Style.keys(t),i={};return n.concat(r).concat(o).forEach(function(e){var n=P.default.query(e,P.default.Scope.ATTRIBUTE);null!=n&&(i[n.attrName]=n.value(t),i[n.attrName])||(n=G[e],null!=n&&n.attrName===e&&(i[n.attrName]=n.value(t)||void 0),null!=(n=$[e])&&n.attrName===e&&(n=$[e],i[n.attrName]=n.value(t)||void 0))}),Object.keys(i).length>0&&(e=s(e,i)),e}function y(t,e){var n=P.default.query(t);if(null==n)return e;if(n.prototype instanceof P.default.Embed){var r={},o=n.value(t);null!=o&&(r[n.blotName]=o,e=(new j.default).insert(r,n.formats(t)))}else"function"==typeof n.formats&&(e=s(e,n.blotName,n.formats(t)));return e}function b(t,e){return c(e,"\n")||e.insert("\n"),e}function v(){return new j.default}function g(t,e){var n=P.default.query(t);if(null==n||"list-item"!==n.blotName||!c(e,"\n"))return e;for(var r=-1,o=t.parentNode;!o.classList.contains("ql-clipboard");)"list"===(P.default.query(o)||{}).blotName&&(r+=1),o=o.parentNode;return r<=0?e:e.compose((new j.default).retain(e.length()-1).retain(1,{indent:r}))}function m(t,e){return c(e,"\n")||(f(t)||e.length()>0&&t.nextSibling&&f(t.nextSibling))&&e.insert("\n"),e}function q(t,e){if(f(t)&&null!=t.nextElementSibling&&!c(e,"\n\n")){var n=t.offsetHeight+parseFloat(u(t).marginTop)+parseFloat(u(t).marginBottom);t.nextElementSibling.offsetTop>t.offsetTop+1.5*n&&e.insert("\n")}return e}function w(t,e){var n={},r=t.style||{};return r.fontStyle&&"italic"===u(t).fontStyle&&(n.italic=!0),r.fontWeight&&(u(t).fontWeight.startsWith("bold")||parseInt(u(t).fontWeight)>=700)&&(n.bold=!0),Object.keys(n).length>0&&(e=s(e,n)),parseFloat(r.textIndent||0)>0&&(e=(new j.default).insert("\t").concat(e)),e}function _(t,e){var n=t.data;if("O:P"===t.parentNode.tagName)return e.insert(n.trim());if(0===n.trim().length&&t.parentNode.classList.contains("ql-clipboard"))return e;if(!u(t.parentNode).whiteSpace.startsWith("pre")){var r=function(t,e){return e=e.replace(/[^\u00a0]/g,""),e.length<1&&t?" ":e};n=n.replace(/\r\n/g," ").replace(/\n/g," "),n=n.replace(/\s\s+/g,r.bind(r,!0)),(null==t.previousSibling&&f(t.parentNode)||null!=t.previousSibling&&f(t.previousSibling))&&(n=n.replace(/^\s+/,r.bind(r,!1))),(null==t.nextSibling&&f(t.parentNode)||null!=t.nextSibling&&f(t.nextSibling))&&(n=n.replace(/\s+$/,r.bind(r,!1)))}return e.insert(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),x=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),E=n(3),A=r(E),N=n(2),j=r(N),T=n(0),P=r(T),S=n(5),C=r(S),L=n(10),R=r(L),M=n(9),I=r(M),B=n(36),D=n(37),U=n(13),z=r(U),F=n(26),H=n(38),K=n(39),Y=n(40),V=(0,R.default)("quill:clipboard"),W="__ql-matcher",Z=[[Node.TEXT_NODE,_],[Node.TEXT_NODE,m],["br",b],[Node.ELEMENT_NODE,m],[Node.ELEMENT_NODE,y],[Node.ELEMENT_NODE,q],[Node.ELEMENT_NODE,h],[Node.ELEMENT_NODE,w],["li",g],["b",p.bind(p,"bold")],["i",p.bind(p,"italic")],["style",v]],G=[B.AlignAttribute,H.DirectionAttribute].reduce(function(t,e){return t[e.keyName]=e,t},{}),$=[B.AlignStyle,D.BackgroundStyle,F.ColorStyle,H.DirectionStyle,K.FontStyle,Y.SizeStyle].reduce(function(t,e){return t[e.keyName]=e,t},{}),X=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.root.addEventListener("paste",r.onPaste.bind(r)),r.container=r.quill.addContainer("ql-clipboard"),r.container.setAttribute("contenteditable",!0),r.container.setAttribute("tabindex",-1),r.matchers=[],Z.concat(r.options.matchers).forEach(function(t){var e=O(t,2),o=e[0],i=e[1];(n.matchVisual||i!==q)&&r.addMatcher(o,i)}),r}return a(e,t),x(e,[{key:"addMatcher",value:function(t,e){this.matchers.push([t,e])}},{key:"convert",value:function(t){if("string"==typeof t)return this.container.innerHTML=t.replace(/\>\r?\n +\</g,"><"),this.convert();var e=this.quill.getFormat(this.quill.selection.savedRange.index);if(e[z.default.blotName]){var n=this.container.innerText;return this.container.innerHTML="",(new j.default).insert(n,o({},z.default.blotName,e[z.default.blotName]))}var r=this.prepareMatching(),i=O(r,2),l=i[0],a=i[1],s=d(this.container,l,a);return c(s,"\n")&&null==s.ops[s.ops.length-1].attributes&&(s=s.compose((new j.default).retain(s.length()-1).delete(1))),V.log("convert",this.container.innerHTML,s),this.container.innerHTML="",s}},{key:"dangerouslyPasteHTML",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C.default.sources.API;if("string"==typeof t)return this.quill.setContents(this.convert(t),e);var r=this.convert(e);return this.quill.updateContents((new j.default).retain(t).concat(r),n)}},{key:"onPaste",value:function(t){var e=this;if(!t.defaultPrevented&&this.quill.isEnabled()){var n=this.quill.getSelection(),r=(new j.default).retain(n.index),o=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(C.default.sources.SILENT),setTimeout(function(){r=r.concat(e.convert()).delete(n.length),e.quill.updateContents(r,C.default.sources.USER),e.quill.setSelection(r.length()-n.length,C.default.sources.SILENT),e.quill.scrollingContainer.scrollTop=o,e.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var t=this,e=[],n=[];return this.matchers.forEach(function(r){var o=O(r,2),i=o[0],l=o[1];switch(i){case Node.TEXT_NODE:n.push(l);break;case Node.ELEMENT_NODE:e.push(l);break;default:[].forEach.call(t.container.querySelectorAll(i),function(t){t[W]=t[W]||[],t[W].push(l)})}}),[e,n]}}]),e}(I.default);X.DEFAULTS={matchers:[],matchVisual:!0},e.default=X,e.matchAttributor=h,e.matchBlot=y,e.matchNewline=m,e.matchSpacing=q,e.matchText=_},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(6),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"optimize",value:function(t){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),e}(u.default);c.blotName="bold",c.tagName=["STRONG","B"],e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,n){var r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("ql-"+e),null!=n&&(r.value=n),t.appendChild(r)}function u(t,e){Array.isArray(e[0])||(e=[e]),e.forEach(function(e){var n=document.createElement("span");n.classList.add("ql-formats"),e.forEach(function(t){if("string"==typeof t)s(n,t);else{var e=Object.keys(t)[0],r=t[e];Array.isArray(r)?c(n,e,r):s(n,e,r)}}),t.appendChild(n)})}function c(t,e,n){var r=document.createElement("select");r.classList.add("ql-"+e),n.forEach(function(t){var e=document.createElement("option");!1!==t?e.setAttribute("value",t):e.setAttribute("selected","selected"),r.appendChild(e)}),t.appendChild(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var f=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=n(2),h=r(p),y=n(0),b=r(y),v=n(5),g=r(v),m=n(10),q=r(m),w=n(9),_=r(w),k=(0,q.default)("quill:toolbar"),O=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if(Array.isArray(r.options.container)){var o=document.createElement("div");u(o,r.options.container),t.container.parentNode.insertBefore(o,t.container),r.container=o}else"string"==typeof r.options.container?r.container=document.querySelector(r.options.container):r.container=r.options.container;if(!(r.container instanceof HTMLElement)){var a;return a=k.error("Container required for toolbar",r.options),l(r,a)}return r.container.classList.add("ql-toolbar"),r.controls=[],r.handlers={},Object.keys(r.options.handlers).forEach(function(t){r.addHandler(t,r.options.handlers[t])}),[].forEach.call(r.container.querySelectorAll("button, select"),function(t){r.attach(t)}),r.quill.on(g.default.events.EDITOR_CHANGE,function(t,e){t===g.default.events.SELECTION_CHANGE&&r.update(e)}),r.quill.on(g.default.events.SCROLL_OPTIMIZE,function(){var t=r.quill.selection.getRange(),e=f(t,1),n=e[0];r.update(n)}),r}return a(e,t),d(e,[{key:"addHandler",value:function(t,e){this.handlers[t]=e}},{key:"attach",value:function(t){var e=this,n=[].find.call(t.classList,function(t){return 0===t.indexOf("ql-")});if(n){if(n=n.slice("ql-".length),"BUTTON"===t.tagName&&t.setAttribute("type","button"),null==this.handlers[n]){if(null!=this.quill.scroll.whitelist&&null==this.quill.scroll.whitelist[n])return void k.warn("ignoring attaching to disabled format",n,t);if(null==b.default.query(n))return void k.warn("ignoring attaching to nonexistent format",n,t)}var r="SELECT"===t.tagName?"change":"click";t.addEventListener(r,function(r){var i=void 0;if("SELECT"===t.tagName){if(t.selectedIndex<0)return;var l=t.options[t.selectedIndex];i=!l.hasAttribute("selected")&&(l.value||!1)}else i=!t.classList.contains("ql-active")&&(t.value||!t.hasAttribute("value")),r.preventDefault();e.quill.focus();var a=e.quill.selection.getRange(),s=f(a,1),u=s[0];if(null!=e.handlers[n])e.handlers[n].call(e,i);else if(b.default.query(n).prototype instanceof b.default.Embed){if(!(i=prompt("Enter "+n)))return;e.quill.updateContents((new h.default).retain(u.index).delete(u.length).insert(o({},n,i)),g.default.sources.USER)}else e.quill.format(n,i,g.default.sources.USER);e.update(u)}),this.controls.push([n,t])}}},{key:"update",value:function(t){var e=null==t?{}:this.quill.getFormat(t);this.controls.forEach(function(n){var r=f(n,2),o=r[0],i=r[1];if("SELECT"===i.tagName){var l=void 0;if(null==t)l=null;else if(null==e[o])l=i.querySelector("option[selected]");else if(!Array.isArray(e[o])){var a=e[o];"string"==typeof a&&(a=a.replace(/\"/g,'\\"')),l=i.querySelector('option[value="'+a+'"]')}null==l?(i.value="",i.selectedIndex=-1):l.selected=!0}else if(null==t)i.classList.remove("ql-active");else if(i.hasAttribute("value")){var s=e[o]===i.getAttribute("value")||null!=e[o]&&e[o].toString()===i.getAttribute("value")||null==e[o]&&!i.getAttribute("value");i.classList.toggle("ql-active",s)}else i.classList.toggle("ql-active",null!=e[o])})}}]),e}(_.default);O.DEFAULTS={},O.DEFAULTS={container:null,handlers:{clean:function(){var t=this,e=this.quill.getSelection();if(null!=e)if(0==e.length){var n=this.quill.getFormat();Object.keys(n).forEach(function(e){null!=b.default.query(e,b.default.Scope.INLINE)&&t.quill.format(e,!1)})}else this.quill.removeFormat(e,g.default.sources.USER)},direction:function(t){var e=this.quill.getFormat().align;"rtl"===t&&null==e?this.quill.format("align","right",g.default.sources.USER):t||"right"!==e||this.quill.format("align",!1,g.default.sources.USER),this.quill.format("direction",t,g.default.sources.USER)},indent:function(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e),r=parseInt(n.indent||0);if("+1"===t||"-1"===t){var o="+1"===t?1:-1;"rtl"===n.direction&&(o*=-1),this.quill.format("indent",r+o,g.default.sources.USER)}},link:function(t){!0===t&&(t=prompt("Enter link URL:")),this.quill.format("link",t,g.default.sources.USER)},list:function(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e);"check"===t?"checked"===n.list||"unchecked"===n.list?this.quill.format("list",!1,g.default.sources.USER):this.quill.format("list","unchecked",g.default.sources.USER):this.quill.format("list",t,g.default.sources.USER)}}},e.default=O,e.addControls=u},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(28),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.label.innerHTML=n,i.container.classList.add("ql-color-picker"),[].slice.call(i.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(t){t.classList.add("ql-primary")}),i}return i(e,t),l(e,[{key:"buildItem",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"buildItem",this).call(this,t);return n.style.backgroundColor=t.getAttribute("value")||"",n}},{key:"selectItem",value:function(t,n){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n);var r=this.label.querySelector(".ql-color-label"),o=t?t.getAttribute("data-value")||"":"";r&&("line"===r.tagName?r.style.stroke=o:r.style.fill=o)}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(28),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(t,n){r(this,e);var i=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.container.classList.add("ql-icon-picker"),[].forEach.call(i.container.querySelectorAll(".ql-picker-item"),function(t){t.innerHTML=n[t.getAttribute("data-value")||""]}),i.defaultItem=i.container.querySelector(".ql-selected"),i.selectItem(i.defaultItem),i}return i(e,t),l(e,[{key:"selectItem",value:function(t,n){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n),t=t||this.defaultItem,this.label.innerHTML=t.innerHTML}}]),e}(u.default);e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,n){var o=this;r(this,t),this.quill=e,this.boundsContainer=n||document.body,this.root=e.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){o.root.style.marginTop=-1*o.quill.root.scrollTop+"px"}),this.hide()}return o(t,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(t){var e=t.left+t.width/2-this.root.offsetWidth/2,n=t.bottom+this.quill.root.scrollTop;this.root.style.left=e+"px",this.root.style.top=n+"px",this.root.classList.remove("ql-flip");var r=this.boundsContainer.getBoundingClientRect(),o=this.root.getBoundingClientRect(),i=0;if(o.right>r.right&&(i=r.right-o.right,this.root.style.left=e+i+"px"),o.left<r.left&&(i=r.left-o.left,this.root.style.left=e+i+"px"),o.bottom>r.bottom){var l=o.bottom-o.top,a=t.bottom-t.top+l;this.root.style.top=n-a+"px",this.root.classList.add("ql-flip")}return i}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),t}();e.default=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(3),f=r(c),d=n(8),p=r(d),h=n(43),y=r(h),b=n(27),v=r(b),g=n(15),m=n(41),q=r(m),w=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],_=function(t){function e(t,n){o(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=w);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-snow"),r}return l(e,t),u(e,[{key:"extendToolbar",value:function(t){t.container.classList.add("ql-snow"),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),q.default),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),q.default),this.tooltip=new k(this.quill,this.options.bounds),t.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(e,n){t.handlers.link.call(t,!n.format.link)})}}]),e}(y.default);_.DEFAULTS=(0,f.default)(!0,{},y.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){if(t){var e=this.quill.getSelection();if(null==e||0==e.length)return;var n=this.quill.getText(e);/^\S+@\S+\.\S+$/.test(n)&&0!==n.indexOf("mailto:")&&(n="mailto:"+n);this.quill.theme.tooltip.edit("link",n)}else this.quill.format("link",!1)}}}}});var k=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.preview=r.root.querySelector("a.ql-preview"),r}return l(e,t),u(e,[{key:"listen",value:function(){var t=this;s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(e){t.root.classList.contains("ql-editing")?t.save():t.edit("link",t.preview.textContent),e.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(e){if(null!=t.linkRange){var n=t.linkRange;t.restoreFocus(),t.quill.formatText(n,"link",!1,p.default.sources.USER),delete t.linkRange}e.preventDefault(),t.hide()}),this.quill.on(p.default.events.SELECTION_CHANGE,function(e,n,r){if(null!=e){if(0===e.length&&r===p.default.sources.USER){var o=t.quill.scroll.descendant(v.default,e.index),i=a(o,2),l=i[0],s=i[1];if(null!=l){t.linkRange=new g.Range(e.index-s,l.length());var u=v.default.formats(l.domNode);return t.preview.textContent=u,t.preview.setAttribute("href",u),t.show(),void t.position(t.quill.getBounds(t.linkRange))}}else delete t.linkRange;t.hide()}})}},{key:"show",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),e}(h.BaseTooltip);k.TEMPLATE=['<a class="ql-preview" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=_},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(29),i=r(o),l=n(36),a=n(38),s=n(64),u=n(65),c=r(u),f=n(66),d=r(f),p=n(67),h=r(p),y=n(37),b=n(26),v=n(39),g=n(40),m=n(56),q=r(m),w=n(68),_=r(w),k=n(27),O=r(k),x=n(69),E=r(x),A=n(70),N=r(A),j=n(71),T=r(j),P=n(72),S=r(P),C=n(73),L=r(C),R=n(13),M=r(R),I=n(74),B=r(I),D=n(75),U=r(D),z=n(57),F=r(z),H=n(41),K=r(H),Y=n(28),V=r(Y),W=n(59),Z=r(W),G=n(60),$=r(G),X=n(61),Q=r(X),J=n(108),tt=r(J),et=n(62),nt=r(et);i.default.register({"attributors/attribute/direction":a.DirectionAttribute,"attributors/class/align":l.AlignClass,"attributors/class/background":y.BackgroundClass,"attributors/class/color":b.ColorClass,"attributors/class/direction":a.DirectionClass,"attributors/class/font":v.FontClass,"attributors/class/size":g.SizeClass,"attributors/style/align":l.AlignStyle,"attributors/style/background":y.BackgroundStyle,"attributors/style/color":b.ColorStyle,"attributors/style/direction":a.DirectionStyle,"attributors/style/font":v.FontStyle,"attributors/style/size":g.SizeStyle},!0),i.default.register({"formats/align":l.AlignClass,"formats/direction":a.DirectionClass,"formats/indent":s.IndentClass,"formats/background":y.BackgroundStyle,"formats/color":b.ColorStyle,"formats/font":v.FontClass,"formats/size":g.SizeClass,"formats/blockquote":c.default,"formats/code-block":M.default,"formats/header":d.default,"formats/list":h.default,"formats/bold":q.default,"formats/code":R.Code,"formats/italic":_.default,"formats/link":O.default,"formats/script":E.default,"formats/strike":N.default,"formats/underline":T.default,"formats/image":S.default,"formats/video":L.default,"formats/list/item":p.ListItem,"modules/formula":B.default,"modules/syntax":U.default,"modules/toolbar":F.default,"themes/bubble":tt.default,"themes/snow":nt.default,"ui/icons":K.default,"ui/picker":V.default,"ui/icon-picker":$.default,"ui/color-picker":Z.default,"ui/tooltip":Q.default},!0),e.default=i.default},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"add",value:function(t,n){if("+1"===n||"-1"===n){var r=this.value(t)||0;n="+1"===n?r+1:r-1}return 0===n?(this.remove(t),!0):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"add",this).call(this,t,n)}},{key:"canAdd",value:function(t,n){return a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"canAdd",this).call(this,t,n)||a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"canAdd",this).call(this,t,parseInt(n))}},{key:"value",value:function(t){return parseInt(a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t))||void 0}}]),e}(u.default.Attributor.Class),f=new c("indent","ql-indent",{scope:u.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(4),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="blockquote",s.tagName="blockquote",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(4),s=function(t){return t&&t.__esModule?t:{default:t}}(a),u=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,null,[{key:"formats",value:function(t){return this.tagName.indexOf(t.tagName)+1}}]),e}(s.default);u.blotName="header",u.tagName=["H1","H2","H3","H4","H5","H6"],e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},c=n(0),f=r(c),d=n(4),p=r(d),h=n(24),y=r(h),b=function(t){function e(){return i(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"format",value:function(t,n){t!==v.blotName||n?u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n):this.replaceWith(f.default.create(this.statics.scope))}},{key:"remove",value:function(){null==this.prev&&null==this.next?this.parent.remove():u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(t,n){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,n),this):(this.parent.unwrap(),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t,n))}}],[{key:"formats",value:function(t){return t.tagName===this.tagName?void 0:u(e.__proto__||Object.getPrototypeOf(e),"formats",this).call(this,t)}}]),e}(p.default);b.blotName="list-item",b.tagName="LI";var v=function(t){function e(t){i(this,e);var n=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),r=function(e){if(e.target.parentNode===t){var r=n.statics.formats(t),o=f.default.find(e.target);"checked"===r?o.format("list","unchecked"):"unchecked"===r&&o.format("list","checked")}};return t.addEventListener("touchstart",r),t.addEventListener("mousedown",r),n}return a(e,t),s(e,null,[{key:"create",value:function(t){var n="ordered"===t?"OL":"UL",r=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,n);return"checked"!==t&&"unchecked"!==t||r.setAttribute("data-checked","checked"===t),r}},{key:"formats",value:function(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0}}]),s(e,[{key:"format",value:function(t,e){this.children.length>0&&this.children.tail.format(t,e)}},{key:"formats",value:function(){return o({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(t,n){if(t instanceof b)u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n);else{var r=null==n?this.length():n.offset(this),o=this.split(r);o.parent.insertBefore(t,o)}}},{key:"optimize",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t);var n=this.next;null!=n&&n.prev===this&&n.statics.blotName===this.statics.blotName&&n.domNode.tagName===this.domNode.tagName&&n.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(n.moveChildren(this),n.remove())}},{key:"replace",value:function(t){if(t.statics.blotName!==this.statics.blotName){var n=f.default.create(this.statics.defaultChild);t.moveChildren(n),this.appendChild(n)}u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t)}}]),e}(y.default);v.blotName="list",v.scope=f.default.Scope.BLOCK_BLOT,v.tagName=["OL","UL"],v.defaultChild="list-item",v.allowedChildren=[b],e.ListItem=b,e.default=v},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(56),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="italic",s.tagName=["EM","I"],e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(6),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,null,[{key:"create",value:function(t){return"super"===t?document.createElement("sup"):"sub"===t?document.createElement("sub"):a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t)}},{key:"formats",value:function(t){return"SUB"===t.tagName?"sub":"SUP"===t.tagName?"super":void 0}}]),e}(u.default);c.blotName="script",c.tagName=["SUB","SUP"],e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(6),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="strike",s.tagName="S",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(6),a=function(t){return t&&t.__esModule?t:{default:t}}(l),s=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),e}(a.default);s.blotName="underline",s.tagName="U",e.default=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=n(27),f=["alt","height","width"],d=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"format",value:function(t,n){f.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return f.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}},{key:"match",value:function(t){return/\.(jpe?g|gif|png)$/.test(t)||/^data:image\/.+;base64/.test(t)}},{key:"sanitize",value:function(t){return(0,c.sanitize)(t,["http","https","data"])?t:"//:0"}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(u.default.Embed);d.blotName="image",d.tagName="IMG",e.default=d},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=n(4),u=n(27),c=function(t){return t&&t.__esModule?t:{default:t}}(u),f=["height","width"],d=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"format",value:function(t,n){f.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=a(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("frameborder","0"),n.setAttribute("allowfullscreen",!0),n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return f.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}},{key:"sanitize",value:function(t){return c.default.sanitize(t)}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(s.BlockEmbed);d.blotName="video",d.className="ql-video",d.tagName="IFRAME",e.default=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(25),c=r(u),f=n(5),d=r(f),p=n(9),h=r(p),y=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,null,[{key:"create",value:function(t){var n=s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&(window.katex.render(t,n,{throwOnError:!1,errorColor:"#f00"}),n.setAttribute("data-value",t)),n}},{key:"value",value:function(t){return t.getAttribute("data-value")}}]),e}(c.default);y.blotName="formula",y.className="ql-formula",y.tagName="SPAN";var b=function(t){function e(){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(null==window.katex)throw new Error("Formula module requires KaTeX.");return t}return l(e,t),a(e,null,[{key:"register",value:function(){d.default.register(y,!0)}}]),e}(h.default);e.FormulaBlot=y,e.default=b},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},u=n(0),c=r(u),f=n(5),d=r(f),p=n(9),h=r(p),y=n(13),b=r(y),v=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"replaceWith",value:function(t){this.domNode.textContent=this.domNode.textContent,this.attach(),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t)}},{key:"highlight",value:function(t){var e=this.domNode.textContent;this.cachedText!==e&&((e.trim().length>0||null==this.cachedText)&&(this.domNode.innerHTML=t(e),this.domNode.normalize(),this.attach()),this.cachedText=e)}}]),e}(b.default);v.className="ql-syntax";var g=new c.default.Attributor.Class("token","hljs",{scope:c.default.Scope.INLINE}),m=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if("function"!=typeof r.options.highlight)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var l=null;return r.quill.on(d.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(l),l=setTimeout(function(){r.highlight(),l=null},r.options.interval)}),r.highlight(),r}return l(e,t),a(e,null,[{key:"register",value:function(){d.default.register(g,!0),d.default.register(v,!0)}}]),a(e,[{key:"highlight",value:function(){var t=this;if(!this.quill.selection.composing){this.quill.update(d.default.sources.USER);var e=this.quill.getSelection();this.quill.scroll.descendants(v).forEach(function(e){e.highlight(t.options.highlight)}),this.quill.update(d.default.sources.SILENT),null!=e&&this.quill.setSelection(e,d.default.sources.SILENT)}}}]),e}(h.default);m.DEFAULTS={highlight:function(){return null==window.hljs?null:function(t){return window.hljs.highlightAuto(t).value}}(),interval:1e3},e.CodeBlock=v,e.CodeToken=g,e.default=m},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var a=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(r)},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(3),c=r(u),f=n(8),d=r(f),p=n(43),h=r(p),y=n(15),b=n(41),v=r(b),g=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],m=function(t){function e(t,n){o(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=g);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-bubble"),r}return l(e,t),s(e,[{key:"extendToolbar",value:function(t){this.tooltip=new q(this.quill,this.options.bounds),this.tooltip.root.appendChild(t.container),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),v.default),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),v.default)}}]),e}(h.default);m.DEFAULTS=(0,c.default)(!0,{},h.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){t?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var q=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.on(d.default.events.EDITOR_CHANGE,function(t,e,n,o){if(t===d.default.events.SELECTION_CHANGE)if(null!=e&&e.length>0&&o===d.default.sources.USER){r.show(),r.root.style.left="0px",r.root.style.width="",r.root.style.width=r.root.offsetWidth+"px";var i=r.quill.getLines(e.index,e.length);if(1===i.length)r.position(r.quill.getBounds(e));else{var l=i[i.length-1],a=r.quill.getIndex(l),s=Math.min(l.length()-1,e.index+e.length-a),u=r.quill.getBounds(new y.Range(a,s));r.position(u)}}else document.activeElement!==r.textbox&&r.quill.hasFocus()&&r.hide()}),r}return l(e,t),s(e,[{key:"listen",value:function(){var t=this;a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){t.root.classList.remove("ql-editing")}),this.quill.on(d.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!t.root.classList.contains("ql-hidden")){var e=t.quill.getSelection();null!=e&&t.position(t.quill.getBounds(e))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"position",this).call(this,t),r=this.root.querySelector(".ql-tooltip-arrow");if(r.style.marginLeft="",0===n)return n;r.style.marginLeft=-1*n-r.offsetWidth/2+"px"}}]),e}(p.BaseTooltip);q.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=q,e.default=m},function(t,e,n){t.exports=n(63)}]).default})}).call(e,n(2).Buffer)},function(t,e,n){n(17);var r=n(13)(n(4),n(14),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var s=Object.create(a.computed||null);Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}}),a.computed=s}return{esModule:o,exports:i,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quillWrapper"},[n("div",{ref:"quillContainer",attrs:{id:t.id}}),t._v(" "),t.useCustomImageHandler?n("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{id:"file-upload",type:"file"},on:{change:function(e){t.emitImageInfo(e)}}}):t._e()])},staticRenderFns:[]}},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("3a8079a0",r,!0)},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("d22a7388",r,!0)},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("1cdebd1c",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],l=i[0],a=i[1],s=i[2],u=i[3],c={id:t+":"+o,css:a,media:s,sourceMap:u};r[l]?r[l].parts.push(c):n.push(r[l]={id:l,parts:[c]})}return n}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){t.exports=n(3)}])});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('vue-editor', {
	    attrs: {
	      "id": _vm.id
	    },
	    model: {
	      value: (_vm.val),
	      callback: function($$v) {
	        _vm.val = $$v
	      },
	      expression: "val"
	    }
	  })], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5aa9ce06", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-strap.js.map