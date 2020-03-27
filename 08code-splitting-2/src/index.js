// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ "lodash")
//     .then(({ default: _ }) => {
//       var element = document.createElement("div");

//       element.innerHTML = _.join(["Hello", "webpack"], " ");

//       return element;
//     })
//     .catch(error => "An error occurred while loading the component");
// }

async function getComponent() {
  var element = document.createElement("button");
  const { default: _ } = await import(
    /* webpackChunkName: "lodash" */ "lodash"
  );
  element.innerHTML = _.join(["click", "me"], " ");
  element.onclick = async function() {
    const { default: LoginModal } = await import(
      /* webpackPrefetch: true ,webpackChunkName: "LoginModal" */ "./LoginModal"
    );
    if (LoginModal.status === "hide") LoginModal.show();
    else LoginModal.hide();
  };
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
