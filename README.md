本文示例参照官网指南 https://webpack.docschina.org/guides/

供入门 webpack 的同学参考

食用方法：文件夹命名即每个章节的路径名，如https://webpack.docschina.org/guides/getting-started/的示例，在getting-started文件夹中

## 笔记

optimization.splitChunks 只需要把 node_modules 里的公共模块打包成 vendors, 不需要把我们自己的工具类 utils 打包进 vendors
