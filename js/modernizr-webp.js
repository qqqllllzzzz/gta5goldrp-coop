!function(e,A,n){function o(e,A){return typeof e===A}function a(e,A){if("object"==typeof e)for(var n in e)r(e,n)&&a(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),t=s[o[0]];if(2==o.length&&(t=t[o[1]]),void 0!==t)return s;A="function"==typeof A?A():A,1==o.length?s[o[0]]=A:(!s[o[0]]||s[o[0]]instanceof Boolean||(s[o[0]]=new Boolean(s[o[0]])),s[o[0]][o[1]]=A),function(e){var A=f.className,n=s._config.classPrefix||"";if(u&&(A=A.baseVal),s._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");A=A.replace(o,"$1"+n+"js$2")}s._config.enableClasses&&(A+=" "+n+e.join(" "+n),u?f.className.baseVal=A:f.className=A)}([(A&&0!=A?"":"no-")+o.join("-")]),s._trigger(e,A)}return s}var t=[],i={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,A){var n=this;setTimeout((function(){A(n[e])}),0)},addTest:function(e,A,n){t.push({name:e,fn:A,options:n})},addAsyncTest:function(e){t.push({name:null,fn:e})}},s=function(){};s.prototype=i,s=new s;var r,l=[];!function(){var e={}.hasOwnProperty;r=o(e,"undefined")||o(e.call,"undefined")?function(e,A){return A in e&&o(e.constructor.prototype[A],"undefined")}:function(A,n){return e.call(A,n)}}();var f=A.documentElement,u="svg"===f.nodeName.toLowerCase();i._l={},i.on=function(e,A){this._l[e]||(this._l[e]=[]),this._l[e].push(A),s.hasOwnProperty(e)&&setTimeout((function(){s._trigger(e,s[e])}),0)},i._trigger=function(e,A){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(A)}),0),delete this._l[e]}},s._q.push((function(){i.addTest=a})),s.addAsyncTest((function(){function e(e,A,n){function o(A){var o=!(!A||"load"!==A.type)&&1==t.width;a(e,"webp"===e&&o?new Boolean(o):o),n&&n(A)}var t=new Image;t.onerror=o,t.onload=o,t.src=A}var A=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=A.shift();e(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var o=0;o<A.length;o++)e(A[o].name,A[o].uri)}))})),function(){var e,A,n,a,i,r;for(var f in t)if(t.hasOwnProperty(f)){if(e=[],(A=t[f]).name&&(e.push(A.name.toLowerCase()),A.options&&A.options.aliases&&A.options.aliases.length))for(n=0;n<A.options.aliases.length;n++)e.push(A.options.aliases[n].toLowerCase());for(a=o(A.fn,"function")?A.fn():A.fn,i=0;i<e.length;i++)1===(r=e[i].split(".")).length?s[r[0]]=a:(!s[r[0]]||s[r[0]]instanceof Boolean||(s[r[0]]=new Boolean(s[r[0]])),s[r[0]][r[1]]=a),l.push((a?"":"no-")+r.join("-"))}}(),delete i.addTest,delete i.addAsyncTest;for(var c=0;c<s._q.length;c++)s._q[c]();e.Modernizr=s}(window,document);