import * as _ from "lodash";

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack4"], " ");
  element.onclick = function() {
    throw new Error("error");
  };
  return element;
}

document.body.appendChild(component());
