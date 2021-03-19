// const path = require("path");
// const PrerenderSPAPlugin = require("prerender-spa-plugin");
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "http://127.0.0.1:8080",
//         ws: true,
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": ""
//         }
//       }
//     }
//   },
//   configureWebpack: () => {
//     if (process.env.NODE_ENV === "production") {
//       // 为生产环境修改配置...
//       return {
//         plugins: [
//           // 预渲染配置
//           new PrerenderSPAPlugin({
//             //要求-给的WebPack-输出应用程序的路径预渲染。
//             staticDir: path.join(__dirname, "dist"), // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
//             //必需，要渲染的路线。
//             // routes: ["/index"],
//             //必须，要使用的实际渲染器，没有则不能预编译
//             renderer: new Renderer({
//               inject: {
//                 foo: "bar"
//               },
//               headless: false, //渲染时显示浏览器窗口。对调试很有用。
//               //等待渲染，直到检测到指定元素。
//               //例如，在项目入口使用`document.dispatchEvent(new Event('custom-render-trigger'))`
//               renderAfterDocumentEvent: "render-event",
//               renderAfterTime: 5000 //renderAfer 多中条件选一个
//             })
//           })
//         ]
//       };
//     } else {
//       // 为开发环境修改配置...
//       return;
//     }
//   }
// };

module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
}