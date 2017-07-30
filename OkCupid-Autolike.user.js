// ==UserScript==
// @name OkCupid-Autolike-Autolike
// @author nemanjan00
// @include http://www.okcupid.com/quickmatch
// @include https://www.okcupid.com/quickmatch
// @include http://www.okcupid.com/doubletake
// @include https://www.okcupid.com/doubletake
// @include https://www2.okcupid.com/doubletake
// @include https://www2.okcupid.com/quickmatch
// @downloadURL https://raw.githubusercontent.com/nemanjan00/OkCupid-Autolike/master/OkCupid-Autolike.user.js
// @namespace https://github.com/nemanjan00/OkCupid-Autolike
// @updateURL https://raw.githubusercontent.com/nemanjan00/OkCupid-Autolike/master/OkCupid-Autolike.user.js
// @version 2.1
// ==/UserScript==

setInterval(function(){
	document.getElementsByClassName("cardactions-action--like")[0].click();
}, 50);
