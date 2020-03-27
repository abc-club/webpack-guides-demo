console.log("登录弹窗组件初始化");

export default {
  status: "hide",
  show() {
    this.status = "show";
    console.log("登录弹窗加载成功");
  },
  hide() {
    this.status = "hide";
    console.log("登录弹窗隐藏");
  }
};
