'use strict';



/**
 * add event on mutiple elements
 */

const addEventOnElements = function (elem,type,callback) {
    for (let i = 0, len = elem.length; i < len; i++) {
    elem[i].addEventListener(type, callback);
    }
}

/**
 * LOADING
 */

const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    document.body.classList.add("loaded");
})