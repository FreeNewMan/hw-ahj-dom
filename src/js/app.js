import AreaWidget from "./area-widget/area-widget";

document.addEventListener("DOMContentLoaded", () => {
  const widget = new AreaWidget(document.querySelector("body"));
  widget.initArea();
  setInterval(() => widget.showImg(), 1000);
});
