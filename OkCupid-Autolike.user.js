// ==UserScript==
// @name Badoo-Autolike
// @author nemanjan00
// @include http://www.okcupid.com/quickmatch
// @downloadURL https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js
// @namespace https://github.com/nemanjan00/Badoo-Autolike
// @updateURL https://raw.githubusercontent.com/nemanjan00/Badoo-Autolike/master/Badoo-Autolike.user.js
// @version 1
// ==/UserScript==

setInterval(function(){
	document.getElementById("quickmatch-like").click();
}, 50);