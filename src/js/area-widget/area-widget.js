import Goblin from "./img/goblin.png";

export default class AreaWidget {
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
    img.src = Goblin;
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
