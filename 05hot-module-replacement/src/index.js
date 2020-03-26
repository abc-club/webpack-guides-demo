import _ from "lodash";
import printMe from "./print.js";
import "./styles.css";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack4"], " ");

  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
