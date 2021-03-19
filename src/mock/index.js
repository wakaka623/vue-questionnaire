import Mock from "mockjs";
import questions from "./data/questions";
// 正则取get参数
// function getQueryByName (url, name) {
//   var reg = new RegExp('[?&]' + name + '=([^&#]+)')
//   var query = url.match(reg)
//   return query ? query[1] : null
// }
Mock.mock(/^\/api\/question\/list/, "get", () => {
  return {
    code: 0,
    msg: "成功",
    data: questions
  };
});
Mock.mock(/^\/api\/question\/upload/, "post", () => {
  return {
    code: 0,
    msg: "成功"
  };
});
export default Mock;
