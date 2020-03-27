本文示例参照官网指南 https://webpack.docschina.org/guides/

供入门 webpack 的同学参考

食用方法：文件夹命名即每个章节的路径名，如https://webpack.docschina.org/guides/getting-started/的示例，在getting-started文件夹中

注意：dist 目录下的 index.html 需要起服务，推荐 vscode 安装插件 Live Server
![](https://github.com/ritwickdey/vscode-live-server/raw/master/images/Screenshot/vscode-live-server-explorer-menu-demo-1.gif)

## 笔记

- optimization.splitChunks 只需要把 node_modules 里的公共模块打包成 vendors, 不需要把我们自己的工具类 utils 打包进 vendors
- npm 发布的包可以在 https://unpkg.com/lodash 找到
