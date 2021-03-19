import { post } from "./request";
// 获取题目
// const getQuestions = param => get("/question/list", param);
// 提交答案
const uploadAnswer = param => post("http://39.101.134.203:83/public/index.php/?s=question/questionanswer/putQuestion", param);
export default {
  // getQuestions, // 获取题目
  uploadAnswer //提交答案
};
