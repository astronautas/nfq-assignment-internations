//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

var _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(){function e(e){function t(t,n,r,i,s,o){for(;s>=0&&o>s;s+=e){var u=i?i[s]:s;r=n(r,t[u],u,t)}return r}return function(n,r,i,s){r=b(r,s,4);var o=!C(n)&&y.keys(n),u=(o||n).length,a=e>0?0:u-1;return arguments.length<3&&(i=n[o?o[a]:a],a+=e),t(n,r,i,o,a,u)}}function t(e){return function(t,n,r){n=w(n,r);for(var i=N(t),s=e>0?0:i-1;s>=0&&i>s;s+=e)if(n(t[s],s,t))return s;return-1}}function n(e,t,n){return function(r,i,s){var o=0,u=N(r);if("number"==typeof s)e>0?o=s>=0?s:Math.max(s+u,o):u=s>=0?Math.min(s+1,u):s+u+1;else if(n&&s&&u)return s=n(r,i),r[s]===i?s:-1;if(i!==i)return s=t(l.call(r,o,u),y.isNaN),s>=0?s+o:-1;for(s=e>0?o:u-1;s>=0&&u>s;s+=e)if(r[s]===i)return s;return-1}}function r(e,t){var n=M.length,r=e.constructor,i=y.isFunction(r)&&r.prototype||u,s="constructor";for(y.has(e,s)&&!y.contains(t,s)&&t.push(s);n--;)s=M[n],s in e&&e[s]!==i[s]&&!y.contains(t,s)&&t.push(s)}var i=this,s=i._,o=Array.prototype,u=Object.prototype,a=Function.prototype,f=o.push,l=o.slice,c=u.toString,h=u.hasOwnProperty,p=Array.isArray,d=Object.keys,v=a.bind,m=Object.create,g=function(){},y=function U(e){return e instanceof U?e:this instanceof U?void (this._wrapped=e):new U(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=y),exports._=y):i._=y,y.VERSION="1.8.3";var b=function(t,n,r){if(n===void 0)return t;switch(null==r?3:r){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)};case 4:return function(e,r,i,s){return t.call(n,e,r,i,s)}}return function(){return t.apply(n,arguments)}},w=function(t,n,r){return null==t?y.identity:y.isFunction(t)?b(t,n,r):y.isObject(t)?y.matcher(t):y.property(t)};y.iteratee=function(e,t){return w(e,t,1/0)};var E=function(t,n){return function(e){var r=arguments.length;if(2>r||null==e)return e;for(var i=1;r>i;i++)for(var s=arguments[i],o=t(s),u=o.length,a=0;u>a;a++){var f=o[a];n&&e[f]!==void 0||(e[f]=s[f])}return e}},S=function(t){if(!y.isObject(t))return{};if(m)return m(t);g.prototype=t;var n=new g;return g.prototype=null,n},x=function(t){return function(e){return null==e?void 0:e[t]}},T=Math.pow(2,53)-1,N=x("length"),C=function(t){var n=N(t);return"number"==typeof n&&n>=0&&T>=n};y.each=y.forEach=function(e,t,n){t=b(t,n);var r,i;if(C(e))for(r=0,i=e.length;i>r;r++)t(e[r],r,e);else{var s=y.keys(e);for(r=0,i=s.length;i>r;r++)t(e[s[r]],s[r],e)}return e},y.map=y.collect=function(e,t,n){t=w(t,n);for(var r=!C(e)&&y.keys(e),i=(r||e).length,s=Array(i),o=0;i>o;o++){var u=r?r[o]:o;s[o]=t(e[u],u,e)}return s},y.reduce=y.foldl=y.inject=e(1),y.reduceRight=y.foldr=e(-1),y.find=y.detect=function(e,t,n){var r;return r=C(e)?y.findIndex(e,t,n):y.findKey(e,t,n),r!==void 0&&r!==-1?e[r]:void 0},y.filter=y.select=function(e,t,n){var r=[];return t=w(t,n),y.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r},y.reject=function(e,t,n){return y.filter(e,y.negate(w(t)),n)},y.every=y.all=function(e,t,n){t=w(t,n);for(var r=!C(e)&&y.keys(e),i=(r||e).length,s=0;i>s;s++){var o=r?r[s]:s;if(!t(e[o],o,e))return!1}return!0},y.some=y.any=function(e,t,n){t=w(t,n);for(var r=!C(e)&&y.keys(e),i=(r||e).length,s=0;i>s;s++){var o=r?r[s]:s;if(t(e[o],o,e))return!0}return!1},y.contains=y.includes=y.include=function(e,t,n,r){return C(e)||(e=y.values(e)),("number"!=typeof n||r)&&(n=0),y.indexOf(e,t,n)>=0},y.invoke=function(e,t){var n=l.call(arguments,2),r=y.isFunction(t);return y.map(e,function(e){var i=r?t:e[t];return null==i?i:i.apply(e,n)})},y.pluck=function(e,t){return y.map(e,y.property(t))},y.where=function(e,t){return y.filter(e,y.matcher(t))},y.findWhere=function(e,t){return y.find(e,y.matcher(t))},y.max=function(e,t,n){var r,i,s=-1/0,o=-1/0;if(null==t&&null!=e){e=C(e)?e:y.values(e);for(var u=0,a=e.length;a>u;u++)r=e[u],r>s&&(s=r)}else t=w(t,n),y.each(e,function(e,n,r){i=t(e,n,r),(i>o||i===-1/0&&s===-1/0)&&(s=e,o=i)});return s},y.min=function(e,t,n){var r,i,s=1/0,o=1/0;if(null==t&&null!=e){e=C(e)?e:y.values(e);for(var u=0,a=e.length;a>u;u++)r=e[u],s>r&&(s=r)}else t=w(t,n),y.each(e,function(e,n,r){i=t(e,n,r),(o>i||1/0===i&&1/0===s)&&(s=e,o=i)});return s},y.shuffle=function(e){for(var t,n=C(e)?e:y.values(e),r=n.length,i=Array(r),s=0;r>s;s++)t=y.random(0,s),t!==s&&(i[s]=i[t]),i[t]=n[s];return i},y.sample=function(e,t,n){return null==t||n?(C(e)||(e=y.values(e)),e[y.random(e.length-1)]):y.shuffle(e).slice(0,Math.max(0,t))},y.sortBy=function(e,t,n){return t=w(t,n),y.pluck(y.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(r>n||r===void 0)return-1}return e.index-t.index}),"value")};var k=function(t){return function(e,n,r){var i={};return n=w(n,r),y.each(e,function(r,s){var o=n(r,s,e);t(i,r,o)}),i}};y.groupBy=k(function(e,t,n){y.has(e,n)?e[n].push(t):e[n]=[t]}),y.indexBy=k(function(e,t,n){e[n]=t}),y.countBy=k(function(e,t,n){y.has(e,n)?e[n]++:e[n]=1}),y.toArray=function(e){return e?y.isArray(e)?l.call(e):C(e)?y.map(e,y.identity):y.values(e):[]},y.size=function(e){return null==e?0:C(e)?e.length:y.keys(e).length},y.partition=function(e,t,n){t=w(t,n);var r=[],i=[];return y.each(e,function(e,n,s){(t(e,n,s)?r:i).push(e)}),[r,i]},y.first=y.head=y.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:y.initial(e,e.length-t)},y.initial=function(e,t,n){return l.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},y.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:y.rest(e,Math.max(0,e.length-t))},y.rest=y.tail=y.drop=function(e,t,n){return l.call(e,null==t||n?1:t)},y.compact=function(e){return y.filter(e,y.identity)};var L=function z(e,t,n,r){for(var i=[],s=0,o=r||0,u=N(e);u>o;o++){var a=e[o];if(C(a)&&(y.isArray(a)||y.isArguments(a))){t||(a=z(a,t,n));var f=0,l=a.length;for(i.length+=l;l>f;)i[s++]=a[f++]}else n||(i[s++]=a)}return i};y.flatten=function(e,t){return L(e,t,!1)},y.without=function(e){return y.difference(e,l.call(arguments,1))},y.uniq=y.unique=function(e,t,n,r){y.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=w(n,r));for(var i=[],s=[],o=0,u=N(e);u>o;o++){var a=e[o],f=n?n(a,o,e):a;t?(o&&s===f||i.push(a),s=f):n?y.contains(s,f)||(s.push(f),i.push(a)):y.contains(i,a)||i.push(a)}return i},y.union=function(){return y.uniq(L(arguments,!0,!0))},y.intersection=function(e){for(var t=[],n=arguments.length,r=0,i=N(e);i>r;r++){var s=e[r];if(!y.contains(t,s)){for(var o=1;n>o&&y.contains(arguments[o],s);o++);o===n&&t.push(s)}}return t},y.difference=function(e){var t=L(arguments,!0,!0,1);return y.filter(e,function(e){return!y.contains(t,e)})},y.zip=function(){return y.unzip(arguments)},y.unzip=function(e){for(var t=e&&y.max(e,N).length||0,n=Array(t),r=0;t>r;r++)n[r]=y.pluck(e,r);return n},y.object=function(e,t){for(var n={},r=0,i=N(e);i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},y.findIndex=t(1),y.findLastIndex=t(-1),y.sortedIndex=function(e,t,n,r){n=w(n,r,1);for(var i=n(t),s=0,o=N(e);o>s;){var u=Math.floor((s+o)/2);n(e[u])<i?s=u+1:o=u}return s},y.indexOf=n(1,y.findIndex,y.sortedIndex),y.lastIndexOf=n(-1,y.findLastIndex),y.range=function(e,t,n){null==t&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),s=0;r>s;s++,e+=n)i[s]=e;return i};var A=function(t,n,r,i,s){if(i instanceof n){var o=S(t.prototype),u=t.apply(o,s);return y.isObject(u)?u:o}return t.apply(r,s)};y.bind=function(e,t){if(v&&e.bind===v)return v.apply(e,l.call(arguments,1));if(!y.isFunction(e))throw new TypeError("Bind must be called on a function");var n=l.call(arguments,2),r=function i(){return A(e,i,t,this,n.concat(l.call(arguments)))};return r},y.partial=function(e){var t=l.call(arguments,1),n=function r(){for(var n=0,i=t.length,s=Array(i),o=0;i>o;o++)s[o]=t[o]===y?arguments[n++]:t[o];for(;n<arguments.length;)s.push(arguments[n++]);return A(e,r,this,this,s)};return n},y.bindAll=function(e){var t,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)n=arguments[t],e[n]=y.bind(e[n],e);return e},y.memoize=function(e,t){var n=function r(n){var i=r.cache,s=""+(t?t.apply(this,arguments):n);return y.has(i,s)||(i[s]=e.apply(this,arguments)),i[s]};return n.cache={},n},y.delay=function(e,t){var n=l.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},y.defer=y.partial(y.delay,y,1),y.throttle=function(e,t,n){var r,i,s,o=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:y.now(),o=null,s=e.apply(r,i),o||(r=i=null)};return function(){var f=y.now();u||n.leading!==!1||(u=f);var l=t-(f-u);return r=this,i=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),u=f,s=e.apply(r,i),o||(r=i=null)):o||n.trailing===!1||(o=setTimeout(a,l)),s}},y.debounce=function(e,t,n){var r,i,s,o,u,a=function f(){var a=y.now()-o;t>a&&a>=0?r=setTimeout(f,t-a):(r=null,n||(u=e.apply(s,i),r||(s=i=null)))};return function(){s=this,i=arguments,o=y.now();var f=n&&!r;return r||(r=setTimeout(a,t)),f&&(u=e.apply(s,i),s=i=null),u}},y.wrap=function(e,t){return y.partial(t,e)},y.negate=function(e){return function(){return!e.apply(this,arguments)}},y.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},y.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},y.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),1>=e&&(t=null),n}},y.once=y.partial(y.before,2);var O=!{toString:null}.propertyIsEnumerable("toString"),M=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];y.keys=function(e){if(!y.isObject(e))return[];if(d)return d(e);var t=[];for(var n in e)y.has(e,n)&&t.push(n);return O&&r(e,t),t},y.allKeys=function(e){if(!y.isObject(e))return[];var t=[];for(var n in e)t.push(n);return O&&r(e,t),t},y.values=function(e){for(var t=y.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},y.mapObject=function(e,t,n){t=w(t,n);for(var r,i=y.keys(e),s=i.length,o={},u=0;s>u;u++)r=i[u],o[r]=t(e[r],r,e);return o},y.pairs=function(e){for(var t=y.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},y.invert=function(e){for(var t={},n=y.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},y.functions=y.methods=function(e){var t=[];for(var n in e)y.isFunction(e[n])&&t.push(n);return t.sort()},y.extend=E(y.allKeys),y.extendOwn=y.assign=E(y.keys),y.findKey=function(e,t,n){t=w(t,n);for(var r,i=y.keys(e),s=0,o=i.length;o>s;s++)if(r=i[s],t(e[r],r,e))return r},y.pick=function(e,t,n){var r,i,s={},o=e;if(null==o)return s;y.isFunction(t)?(i=y.allKeys(o),r=b(t,n)):(i=L(arguments,!1,!1,1),r=function(t,n,r){return n in r},o=Object(o));for(var u=0,a=i.length;a>u;u++){var f=i[u],l=o[f];r(l,f,o)&&(s[f]=l)}return s},y.omit=function(e,t,n){if(y.isFunction(t))t=y.negate(t);else{var r=y.map(L(arguments,!1,!1,1),String);t=function(t,n){return!y.contains(r,n)}}return y.pick(e,t,n)},y.defaults=E(y.allKeys,!0),y.create=function(e,t){var n=S(e);return t&&y.extendOwn(n,t),n},y.clone=function(e){return y.isObject(e)?y.isArray(e)?e.slice():y.extend({},e):e},y.tap=function(e,t){return t(e),e},y.isMatch=function(e,t){var n=y.keys(t),r=n.length;if(null==e)return!r;for(var i=Object(e),s=0;r>s;s++){var o=n[s];if(t[o]!==i[o]||!(o in i))return!1}return!0};var _=function W(e,t,n,r){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return e===t;e instanceof y&&(e=e._wrapped),t instanceof y&&(t=t._wrapped);var i=c.call(e);if(i!==c.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}var s="[object Array]"===i;if(!s){if("object"!=(typeof e==="undefined"?"undefined":_typeof(e))||"object"!=(typeof t==="undefined"?"undefined":_typeof(t)))return!1;var o=e.constructor,u=t.constructor;if(o!==u&&!(y.isFunction(o)&&o instanceof o&&y.isFunction(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var a=n.length;a--;)if(n[a]===e)return r[a]===t;if(n.push(e),r.push(t),s){if(a=e.length,a!==t.length)return!1;for(;a--;)if(!W(e[a],t[a],n,r))return!1}else{var f,l=y.keys(e);if(a=l.length,y.keys(t).length!==a)return!1;for(;a--;)if(f=l[a],!y.has(t,f)||!W(e[f],t[f],n,r))return!1}return n.pop(),r.pop(),!0};y.isEqual=function(e,t){return _(e,t)},y.isEmpty=function(e){return null==e?!0:C(e)&&(y.isArray(e)||y.isString(e)||y.isArguments(e))?0===e.length:0===y.keys(e).length},y.isElement=function(e){return!!e&&1===e.nodeType},y.isArray=p||function(e){return"[object Array]"===c.call(e)},y.isObject=function(e){var t=typeof e=="undefined"?"undefined":_typeof(e);return"function"===t||"object"===t&&!!e},y.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){y["is"+e]=function(t){return c.call(t)==="[object "+e+"]"}}),y.isArguments(arguments)||(y.isArguments=function(e){return y.has(e,"callee")}),"function"!=typeof /./&&"object"!=(typeof Int8Array==="undefined"?"undefined":_typeof(Int8Array))&&(y.isFunction=function(e){return"function"==typeof e||!1}),y.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},y.isNaN=function(e){return y.isNumber(e)&&e!==+e},y.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===c.call(e)},y.isNull=function(e){return null===e},y.isUndefined=function(e){return e===void 0},y.has=function(e,t){return null!=e&&h.call(e,t)},y.noConflict=function(){return i._=s,this},y.identity=function(e){return e},y.constant=function(e){return function(){return e}},y.noop=function(){},y.property=x,y.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},y.matcher=y.matches=function(e){return e=y.extendOwn({},e),function(t){return y.isMatch(t,e)}},y.times=function(e,t,n){var r=Array(Math.max(0,e));t=b(t,n,1);for(var i=0;e>i;i++)r[i]=t(i);return r},y.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},y.now=Date.now||function(){return(new Date).getTime()};var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=y.invert(D),H=function(t){var n=function(n){return t[n]},r="(?:"+y.keys(t).join("|")+")",i=RegExp(r),s=RegExp(r,"g");return function(e){return e=null==e?"":""+e,i.test(e)?e.replace(s,n):e}};y.escape=H(D),y.unescape=H(P),y.result=function(e,t,n){var r=null==e?void 0:e[t];return r===void 0&&(r=n),y.isFunction(r)?r.call(e):r};var B=0;y.uniqueId=function(e){var t=++B+"";return e?e+t:t},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var j=/(.)^/,F={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},I=/\\|'|\r|\n|\u2028|\u2029/g,q=function(t){return"\\"+F[t]};y.template=function(e,t,n){!t&&n&&(t=n),t=y.defaults({},t,y.templateSettings);var r=RegExp([(t.escape||j).source,(t.interpolate||j).source,(t.evaluate||j).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(r,function(t,n,r,o,u){return s+=e.slice(i,u).replace(I,q),i=u+t.length,n?s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?s+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(s+="';\n"+o+"\n__p+='"),t}),s+="';\n",t.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(t.variable||"obj","_",s)}catch(u){throw u.source=s,u}var a=function(t){return o.call(this,t,y)},f=t.variable||"obj";return a.source="function("+f+"){\n"+s+"}",a},y.chain=function(e){var t=y(e);return t._chain=!0,t};var R=function(t,n){return t._chain?y(n).chain():n};y.mixin=function(e){y.each(y.functions(e),function(t){var n=y[t]=e[t];y.prototype[t]=function(){var e=[this._wrapped];return f.apply(e,arguments),R(this,n.apply(y,e))}})},y.mixin(y),y.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=o[e];y.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],R(this,n)}}),y.each(["concat","join","slice"],function(e){var t=o[e];y.prototype[e]=function(){return R(this,t.apply(this._wrapped,arguments))}}),y.prototype.value=function(){return this._wrapped},y.prototype.valueOf=y.prototype.toJSON=y.prototype.value,y.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return y})}).call(undefined),!function(e,t){"function"==typeof define&&define.amd?define("backbone-judge",["backbone"],t):"object"==typeof module&&module.exports?module.exports=t():e.returnExports=t()}(this,function(){Backbone.Model.prototype.validate=function(e){var t=[],n=this.validations;for(var r in n)if(n.hasOwnProperty(r))for(var i=n[r],s=0;s<i.length;s++){var o=i[s].fn,u=this[o],a=i[s].val,f=e[r],l=i[s].msg,c=u(f,a,l);c!==!0&&t.push(c)}return t.length?t:0},Backbone.Model.prototype.presence=function(e,t,n){return 0!==e.length&&t||0===e.length&&!t?!0:n},Backbone.Model.prototype.number=function(e,t,n){return isNaN(e)?n:!0}}),define("models/Group",["backbone","backbone-judge"],function(e){var t=e.Model.extend({validations:{name:[{fn:"presence",val:!0,msg:"Name cannot be empty!"}]},defaults:{name:""},modelType:"group",newItemAttrs:function(){return["name"]},initialize:function(){}});return t}),define("collections/Groups",["backbone","localstorage","models/Group"],function(e,t,n){var r=e.Collection.extend({model:n,localStorage:new e.LocalStorage("Groups")});return r}),define("models/User",["backbone","collections/Groups","backbone-judge"],function(e,t){var n=e.Model.extend({validations:{name:[{fn:"presence",val:!0,msg:"Name cannot be empty!"}]},defaults:{name:"",groups:""},modelType:"user",newItemAttrs:function(){return["name"]},allGroups:function(){var n=new t;return n}});return n}),define("collections/Users",["backbone","localstorage","models/User"],function(e,t,n){var r=e.Collection.extend({model:n,localStorage:new e.LocalStorage("Users")});return r}),define("text",["module"],function(e){"use strict";var t,n,r,i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f=typeof location!="undefined"&&location.href,l=f&&location.protocol&&location.protocol.replace(/\:/,""),c=f&&location.hostname,h=f&&(location.port||undefined),p={},d=e.config&&e.config()||{};t={version:"2.0.14",strip:function(t){if(t){t=t.replace(u,"");var n=t.match(a);n&&(t=n[1])}else t="";return t},jsEscape:function(t){return t.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,t,n;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;if(typeof ActiveXObject!="undefined")for(t=0;t<3;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(r){}if(e){o=[n];break}}return e},parseName:function(t){var n,r,i,s=!1,o=t.lastIndexOf("."),u=t.indexOf("./")===0||t.indexOf("../")===0;return o!==-1&&(!u||o>1)?(n=t.substring(0,o),r=t.substring(o+1)):n=t,i=r||n,o=i.indexOf("!"),o!==-1&&(s=i.substring(o+1)==="strip",i=i.substring(0,o),r?r=i:n=i),{moduleName:n,ext:r,strip:s}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(n,r,i,s){var o,u,a,f=t.xdRegExp.exec(n);return f?(o=f[2],u=f[3],u=u.split(":"),a=u[1],u=u[0],(!o||o===r)&&(!u||u.toLowerCase()===i.toLowerCase())&&(!a&&!u||a===s)):!0},finishLoad:function(n,r,i,s){i=r?t.strip(i):i,d.isBuild&&(p[n]=i),s(i)},load:function(n,r,i,s){if(s&&s.isBuild&&!s.inlineText){i();return}d.isBuild=s&&s.isBuild;var o=t.parseName(n),u=o.moduleName+(o.ext?"."+o.ext:""),a=r.toUrl(u),p=d.useXhr||t.useXhr;if(a.indexOf("empty:")===0){i();return}!f||p(a,l,c,h)?t.get(a,function(e){t.finishLoad(n,o.strip,e,i)},function(e){i.error&&i.error(e)}):r([u],function(e){t.finishLoad(o.moduleName+"."+o.ext,o.strip,e,i)})},write:function(n,r,i,s){if(p.hasOwnProperty(r)){var o=t.jsEscape(p[r]);i.asModule(n+"!"+r,"define(function () { return '"+o+"';});\n")}},writeFile:function(n,r,i,s,o){var u=t.parseName(r),a=u.ext?"."+u.ext:"",f=u.moduleName+a,l=i.toUrl(u.moduleName+a)+".js";t.load(f,i,function(e){var r=function(t){return s(l,t)};r.asModule=function(e,t){return s.asModule(e,l,t)},t.write(n,f,r,o)},o)}};if(d.env==="node"||!d.env&&typeof process!="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"])n=require.nodeRequire("fs"),t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");i[0]==="﻿"&&(i=i.substring(1)),t(i)}catch(s){r&&r(s)}};else if(d.env==="xhr"||!d.env&&t.createXhr())t.get=function(e,n,r,i){var s=t.createXhr(),o;s.open("GET",e,!0);if(i)for(o in i)i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o]);d.onXhr&&d.onXhr(s,e),s.onreadystatechange=function(t){var i,o;s.readyState===4&&(i=s.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r&&r(o)):n(s.responseText),d.onXhrComplete&&d.onXhrComplete(s,e))},s.send(null)};else if(d.env==="rhino"||!d.env&&typeof Packages!="undefined"&&typeof java!="undefined")t.get=function(e,t){var n,r,i="utf-8",s=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),u=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)),a="";try{n=new java.lang.StringBuffer,r=u.readLine(),r&&r.length()&&r.charAt(0)===65279&&(r=r.substring(1)),r!==null&&n.append(r);while((r=u.readLine())!==null)n.append(o),n.append(r);a=String(n.toString())}finally{u.close()}t(a)};else if(d.env==="xpconnect"||!d.env&&typeof Components!="undefined"&&Components.classes&&Components.interfaces)r=Components.classes,i=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in r,t.get=function(e,t){var n,o,u,a={};s&&(e=e.replace(/\//g,"\\")),u=new FileUtils.File(e);try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(u,1,0,!1),o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),a),o.close(),n.close(),t(a.value)}catch(f){throw new Error((u&&u.path||"")+": "+f)}};return t}),define("text!views/users/templates/EditUser.html",[],function(){return'<label>Name: </label>\r\n<input class="full-width m-bottom" name="name" value="<%= name %>">\r\n<div class="full-width m-bottom">\r\n  <% _.each(allGroups, function(group) { %>\r\n    <% if (_.contains( userGroups, group.get(\'id\') )) { %>\r\n      <input type="checkbox" checked name="group" value="<%= group.get(\'id\') %>"> <%= group.get(\'name\') %>\r\n    <% } else { %>\r\n      <input type="checkbox" name="group" value="<%= group.get(\'id\') %>"> <%= group.get(\'name\') %>\r\n    <% } %>\r\n  <% }); %>\r\n</div>\r\n<div class="m-bottom"><input class="js-delete-user" type="checkbox" name="delete_user"> Delete user?</div>\r\n<div class="text-center"><div class="action-button action-button--success js-update">Update user</div></div>'}),define("views/users/EditUser",["jquery","backbone","underscore","text!views/users/templates/EditUser.html"],function(e,t,n,r){var i=t.View.extend({template:n.template(r),events:{"click .js-close":"close","click .js-update":"update","click .js-delete-user":"deleteWarning"},initialize:function(){n.bindAll(this,"close","update","render","deleteWarning"),this.listenTo(this.model,"invalid",this.invalidSubmit),this.groups=this.model.allGroups(),this.groups.fetch({reset:!0,success:this.render})},render:function(){this.$el.html(this.template({name:this.model.get("name"),allGroups:this.groups.models,userGroups:this.model.get("groups")}))},deleteWarning:function(t){t.currentTarget.checked&&alert("Are you sure you want to delete this user?")},invalidSubmit:function(t,n){var r=!0,i=!1,s=undefined;try{for(var o=n[Symbol.iterator](),u;!(r=(u=o.next()).done);r=!0){var a=u.value;alert(a)}}catch(f){i=!0,s=f}finally{try{!r&&o.return&&o.return()}finally{if(i)throw s}}},close:function(){this.remove(),e(".overlay").remove()},update:function(){var n=this,r=e("input[name=delete_user]"),i=this;r.is(":checked")?this.model.destroy({success:i.close()}):function(){var t=e("input"),r={},s=[];t.each(function(t,n){var i=e(n),o=e.trim(i.val());if(i.attr("name")==="group"&&i.is(":checked"))s.push(o);else if(i.attr("name")!=="group"){var u=i.attr("name");r[u]=o}},n),r.groups=s,n.model.save(r,{wait:!0,success:function(){i.close()}})}()}});return i}),define("views/users/UserItem",["backbone","underscore","views/users/EditUser"],function(e,t,n){var r=e.View.extend({template:t.template("<%= name %>"),tagName:"div",className:"page-list__item",events:{click:"edit"},initialize:function(){t.bindAll(this,"render","edit","close"),this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"destroy",this.close),this.render()},render:function(){this.$el.html(this.template({name:this.model.get("name")}))},edit:function(){$("body").append('<div class="overlay"><div class="modal"></div></div>'),new n({model:this.model,el:".modal"})},close:function(){this.remove()}});return r}),define("views/users/UsersList",["backbone","underscore","collections/Users","views/users/UserItem"],function(e,t,n,r){var i=e.View.extend({initialize:function(){t.bindAll(this,"addAll","addOne"),this.collection=new n,this.children=[],this.listenTo(this.collection,"reset",this.addAll),this.listenTo(this.collection,"add",this.addOne),this.collection.fetch({reset:!0})},addAll:function(){var t=!0,n=!1,r=undefined;try{for(var i=this.collection.models[Symbol.iterator](),s;!(t=(s=i.next()).done);t=!0){var o=s.value;this.addOne(o)}}catch(u){n=!0,r=u}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}},addOne:function(t){var n=new r({model:t});this.children.push(n),this.$el.append(n.$el)},close:function(){var t=!0,n=!1,r=undefined;try{for(var i=this.children[Symbol.iterator](),s;!(t=(s=i.next()).done);t=!0){var o=s.value;o.close?o.close():o.remove()}}catch(u){n=!0,r=u}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}this.remove()}});return i}),define("views/users/UsersPage",["jquery","backbone","underscore","views/users/UsersList"],function(e,t,n,r){var i=t.View.extend({template:n.template('<h1 class="page-title">Users</h1><div class="page-list js-users"></div>'),initialize:function(){n.bindAll(this,"render"),this.render(),this.usersList=new r({el:".js-users"}),this.children=[this.usersList]},render:function(){this.$el.html(this.template)},close:function(){var t=!0,n=!1,r=undefined;try{for(var i=this.children[Symbol.iterator](),s;!(t=(s=i.next()).done);t=!0){var o=s.value;o.close?o.close():o.remove()}}catch(u){n=!0,r=u}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}this.remove()}});return i}),define("text!views/groups/templates/EditGroup.html",[],function(){return'<input class="full-width m-bottom" name="name" value="<%= groupAttrs.name %>">\r\n<div class="m-bottom"><input class="js-delete-group" type="checkbox" name="delete_group"> Delete group?</div>\r\n<div class="text-center"><div class="action-button action-button--success js-update">Update group</div></div>'}),define("views/groups/EditGroup",["jquery","backbone","underscore","collections/Users","text!views/groups/templates/EditGroup.html"],function(e,t,n,r,i){var s=t.View.extend({template:n.template(i),events:{"click .js-close":"close","click .js-update":"update","click .js-delete-group":"deleteWarning"},initialize:function(){var t=this;n.bindAll(this,"close","update","deleteWarning"),this.users=new r,this.listenTo(this.model,"invalid",this.invalidSubmit),this.users.fetch({reset:!0}).done(function(){t.render()})},render:function(){this.$el.html(this.template({groupAttrs:this.model.attributes}))},deleteWarning:function(t){t.currentTarget.checked&&(this.noUsers(this.users,this.model.get("id"))?alert("Are you sure you want to delete this group?"):(alert("Group has users. It cannot be deleted!"),t.currentTarget.checked=!1))},invalidSubmit:function(t,n){var r=!0,i=!1,s=undefined;try{for(var o=n[Symbol.iterator](),u;!(r=(u=o.next()).done);r=!0){var a=u.value;alert(a)}}catch(f){i=!0,s=f}finally{try{!r&&o.return&&o.return()}finally{if(i)throw s}}},noUsers:function(t,r){var i=!0,s=!1,o=undefined;try{for(var u=t.models[Symbol.iterator](),a;!(i=(a=u.next()).done);i=!0){var f=a.value;if(n.contains(f.get("groups"),r))return!1}}catch(l){s=!0,o=l}finally{try{!i&&u.return&&u.return()}finally{if(s)throw o}}return!0},close:function(){this.remove(),e(".overlay").remove()},update:function(){var n=this,r=e("input[name=delete_group]"),i=this;r.is(":checked")&&this.noUsers(this.users,this.model.get("id"))?this.model.destroy({success:i.close()}):function(){var t=e("input"),r={};t.each(function(t,n){var i=e(n),s=e.trim(i.val()),o=i.attr("name");r[o]=s},n),n.model.save(r,{wait:!0,success:function(){i.close()}})}()}});return s}),define("views/groups/GroupItem",["backbone","underscore","views/groups/EditGroup"],function(e,t,n){var r=e.View.extend({template:t.template("<%= name %>"),tagName:"div",className:"page-list__item",events:{click:"edit"},initialize:function(){t.bindAll(this,"render","close"),this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"destroy",this.close),this.render()},render:function(){this.$el.html(this.template({name:this.model.get("name")}))},edit:function(){$("body").append('<div class="overlay"><div class="modal"></div></div>'),new n({model:this.model,el:".modal"})},close:function(){this.remove()}});return r}),define("views/Groups/GroupsList",["backbone","underscore","collections/Groups","views/groups/GroupItem"],function(e,t,n,r){var i=e.View.extend({initialize:function(){t.bindAll(this,"addAll","addOne"),this.collection=new n,this.children=[],this.listenTo(this.collection,"reset",this.addAll),this.listenTo(this.collection,"add",this.addOne),this.collection.fetch({reset:!0})},addAll:function(){var t=!0,n=!1,r=undefined;try{for(var i=this.collection.models[Symbol.iterator](),s;!(t=(s=i.next()).done);t=!0){var o=s.value;this.addOne(o)}}catch(u){n=!0,r=u}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}},addOne:function(t){var n=new r({model:t});this.children.push(n),this.$el.append(n.$el)},close:function(){var t=!0,n=!1,r=undefined;try{for(var i=this.children[Symbol.iterator](),s;!(t=(s=i.next()).done);t=!0){var o=s.value;o.close?o.close():o.remove()}}catch(u){n=!0,r=u}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}this.remove()}});return i}),define("views/groups/GroupsPage",["jquery","backbone","underscore","views/Groups/GroupsList"],function(e,t,n,r){var i=t.View.extend({template:n.template('<h1 class="page-title">Groups</h1><div class="page-list js-groups"></div>'),initialize:function(){n.bindAll(this,"render"),this.render(),this.groupsList=new r({el:".js-groups"}),this.children=[this.groupsList]},render:function(){this.$el.html(this.template)},close:function(){var t=!0,n=!1,r=undefined;try{for(var i=this.children[Symbol.iterator](),s;!(t=(s=i.next()).done);t=!0){var o=s.value;o.close?o.close():o.remove()}}catch(u){n=!0,r=u}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}this.remove()}});return i}),define("text!views/templates/Add.html",[],function(){return'<div class="form-content">\r\n  <h1 class="page-title">Add <%= name %></h1>\r\n  <% _.each(attrs, function(attr) { %>\r\n    <input placeholder="<%= attr.charAt(0).toUpperCase() + attr.substring(1).toLowerCase() %>" class="full-width m-bottom" name="<%= attr %>">\r\n  <% }); %>\r\n  <div class="text-center"><div class="action-button action-button--success inline-block js-submit">Submit</div></div>\r\n</div>'}),define("views/Add",["jquery","backbone","underscore","collections/Users","text!views/templates/Add.html"],function(e,t,n,r,i){var s=t.View.extend({template:n.template(i),events:{"click .js-submit":"add"},initialize:function(t){n.bindAll(this,"render","add"),this.collection=new t.collection,this.model=new t.model,this.listenTo(this.collection,"invalid",this.invalidSubmit),this.listenTo(this.model,"invalid",this.invalidSubmit),this.render()},render:function(){this.$el.html(this.template({name:this.model.modelType,attrs:this.model.newItemAttrs()}))},invalidSubmit:function(t,n){var r=!0,i=!1,s=undefined;try{for(var o=n[Symbol.iterator](),u;!(r=(u=o.next()).done);r=!0){var a=u.value;alert(a)}}catch(f){i=!0,s=f}finally{try{!r&&o.return&&o.return()}finally{if(i)throw s}}},add:function(){var n={},r=this.$el.find("input");r.each(function(t,r){var i=e(r);n[i.attr("name")]=i.val()}),this.collection.create(n,{wait:!0,validate:!0})},close:function(){this.remove()}});return s}),define("router",["jquery","backbone","views/users/UsersPage","views/groups/GroupsPage","views/Add","models/User","models/Group","collections/Users","collections/Groups"],function(e,t,n,r,i,s,o,u,a){var f=t.Router.extend({routes:{"(/)":"usersPage","(/)users":"usersPage","(/)groups":"groupsPage","(/)add-user":"addUser","(/)add-group":"addGroup"},initialize:function(){this.activeTab()},activeTab:function(){e(".main-navigation__item").first().addClass("clicked"),e(".main-navigation__item").on("click",function(){var t=e(".main-navigation__item");t.hasClass("clicked")&&t.removeClass("clicked"),e(this).addClass("clicked")})},usersPage:function(){this.loadPage(n)},groupsPage:function(){this.loadPage(r)},addUser:function(){this.loadPage(i,{model:s,collection:u})},addGroup:function(){this.loadPage(i,{model:o,collection:a})},loadPage:function(n){var r=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];this.view&&(this.view.close?this.view.close():this.view.remove()),e("body").append('<div class="content js-app clearfix"></div>'),this.view=new n({el:".js-app",model:r.model,collection:r.collection})}});return f}),requirejs.config({paths:{jquery:"https://code.jquery.com/jquery-1.12.0.min",backbone:"https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min",underscore:"libs/underscore",text:"libs/text",localstorage:"https://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min","backbone-judge":"libs/backbone-judge.min"}}),requirejs(["jquery","backbone","router"],function(e,t,n){e(document).ready(function(){var e=new n;t.history&&t.history.start()})}),define("app",function(){});