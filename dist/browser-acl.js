module.exports=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.strict,o=void 0!==r&&r;n(this,t),this.strict=o,this.rules=new Map,this.policies=new Map}return o(t,[{key:"rule",value:function(t,e){var r=this,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=this.subjectMapper(e);return(Array.isArray(t)?t:[t]).forEach(function(t){var e=r.rules.get(o)||{};e[t]=n,r.rules.set(o,e)}),this}},{key:"policy",value:function(t,e){var r=("function"==typeof t&&new t,this.subjectMapper(e));return this.policies.set(r,t),this}},{key:"can",value:function(t,e,r){var n=this.subjectMapper(r),o=this.policies.get(n)||this.rules.get(n);if(void 0===o){if(this.strict)throw new Error('Unknown subject "'+n+'"');return!1}if("function"==typeof o[e]){for(var i=arguments.length,a=Array(i>3?i-3:0),c=3;c<i;c++)a[c-3]=arguments[c];return Boolean(o[e].apply(o,[t,r,n].concat(a)))}if(this.strict&&void 0===o[e])throw new Error('Unknown verb "'+e+'"');return Boolean(o[e])}},{key:"some",value:function(t,e,r){for(var n=arguments.length,o=Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];var a=this;return r.some(function(r){return a.can.apply(a,[t,e,r].concat(o))})}},{key:"every",value:function(t,e,r){for(var n=arguments.length,o=Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];var a=this;return r.every(function(r){return a.can.apply(a,[t,e,r].concat(o))})}},{key:"mixin",value:function(t){var e=this;t.prototype.can=function(){return e.can.apply(e,[this].concat(Array.prototype.slice.call(arguments)))},t.prototype.can.every=function(){return e.every.apply(e,[this].concat(Array.prototype.slice.call(arguments)))},t.prototype.can.some=function(){return e.some.apply(e,[this].concat(Array.prototype.slice.call(arguments)))}}},{key:"subjectMapper",value:function(t){return"string"==typeof t?t:"function"==typeof t?t.name:t.constructor.name}}]),t}();e.default=i}]);
//# sourceMappingURL=browser-acl.js.map