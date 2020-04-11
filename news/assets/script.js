"use strict";
var firstBlockItemArr = document.getElementsByClassName("first__block__item");
	window.onload = function(){
		for (var i = 0; i <= 5; i++) {
			console.log(firstBlockItemArr[i]);
			if (firstBlockItemArr[i].style.backgroundImage  == url("")) {
				firstBlockItemArr[i].style.opacity = "0";
			}
		}
	};