/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/js/area-widget/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// ./src/js/area-widget/area-widget.js

class AreaWidget {
  constructor(widgetDiv) {
    this.widgetDiv = widgetDiv;
  }
  initArea() {
    const container = document.createElement("div");
    container.classList.add("container");
    this.widgetDiv.appendChild(container);
    const createdContainer = document.querySelector(".container");
    for (let i = 1; i <= 16; i++) {
      let item = document.createElement("div");
      item.classList.add(`cell-${i}`);
      createdContainer.appendChild(item);
    }
  }
  showImg() {
    const img = new Image();
    img.src = goblin_namespaceObject;
    if (this.currentCell) {
      document.querySelector(`.cell-${this.currentCell} > img`).remove();
    }
    let cell = document.querySelector(`.cell-${this.randCell()}`);
    cell.appendChild(img);
  }
  randCell() {
    let currentCell = Math.floor(Math.random() * 16) + 1;
    this.currentCell = currentCell;
    return this.currentCell;
  }
}
;// ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const widget = new AreaWidget(document.querySelector("body"));
  widget.initArea();
  setInterval(() => widget.showImg(), 1000);
});
;// ./src/index.js



// TODO: write your code in app.js
/******/ })()
;