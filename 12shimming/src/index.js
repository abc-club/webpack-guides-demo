// import "babel-polyfill";

// import _ from "lodash";
// 注意由于imports-loader的影响，官网的例子这里会报Error: Module parse failed: 'import' and 'export' may only appear at the top level (5:0)
import * as globals from "./globals.js";

// const globals = require("./globals");
console.log(globals);

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // 假设我们处于 `window` 上下文
  // this.alert("Hmmm, this probably isn't a great idea...");
  return element;
}

document.body.appendChild(component());

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    console.log(
      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
    );
    console.log(json);
  })
  .catch(error =>
    console.error("Something went wrong when fetching this data: ", error)
  );
