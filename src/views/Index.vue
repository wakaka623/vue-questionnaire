<template>
  <div class="container" v-if="!loading">
    <div class="toptitle">
      <h1 class="htitle">普通投资者风险承受能力评估问卷说明</h1>
      <h2 class="h2title">（适用于自然人投资者）</h2>
    </div>
    <div class="question">
      <UserInfo ref="userInfo"></UserInfo>
      <component
        v-for="(item, index) in questions"
        :ref="'component' + index"
        :question="item"
        :index="index + 1"
        :key="item.id"
        :is="item.type"
        @change="questionChange"
      ></component>
    </div>
    <div>
        <Confirm ref="getUrl"></Confirm>
    </div>
    <div class="saveBtn">
      <van-button type="info" @click="postInfo">提交</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import validate from "../utils/validate";
import question from "../mock/data/questions"

export default {
  name: "Index",
  components: {
    UserInfo: () => import("@/components/UserInfo"),
    MultipleChoice: () => import("@/components/MultipleChoice"),
    SingleChoice: () => import("@/components/SingleChoice"),
    QuestionInput: () => import("@/components/QuestionInput"),
    Confirm:()=>import("@/components/Confirm")
  },
  data() {
    return {
      questions: [],
      loading: false,
      questionsAnswer: []
    };
  },
  created() {
    // this.getQuestions();
  },
  mounted(){
    this.getQuestions();
  },
  methods: {
    // 获取题目
    getQuestions() {
      // this.loading = true;
      // Toast.loading({
      //   message: "加载中...",
      //   forbidClick: true,
      //   overlay: true
      // });
      
      // console.log(question);
      this.questions = question;
      // 答案
      this.questionsAnswer = question.map(item => {
        return { id: item.id, value: "" };
      });

      // this.$http
      //   .getQuestions()
      //   .then(res => {
      //     if (res.code === 0) {
      //       console.log(res);
      //       let questions = res.data;
      //       this.questions = questions;
      //       // 答案
      //       this.questionsAnswer = questions.map(item => {
      //         return { id: item.id, value: "" };
      //       });
      //     }
      //     Toast.clear();
      //     this.loading = false;
      //     console.log(res);
      //   })
      //   .catch(res => {
      //     Toast.clear();
      //     this.loading = false;
      //     console.log(res);
      //   });
    },
    // 提交数据
    postInfo() {
      const userInfo = this.$refs.userInfo.userInfo;
      const getUrl=this.$refs.getUrl.url
      let questionsAnswer = this.questionsAnswer;
      let params = {};
      // console.log(userInfo);
      // console.log(getUrl);
      for (let key in userInfo) {
        var result = validate[key](userInfo[key]);
        if (result) {
          Toast(result);
          document.documentElement.scrollTop = 0;
          return;
        } else {
          params[key] = userInfo[key];
        }
      }
      for (let i = 0; i < questionsAnswer.length; i++) {
        if (questionsAnswer[i].value === "") {
          Toast("第" + (i + 1) + "题未答");
          const componentName = "component" + i;
          var top = this.$refs[componentName][0].$el.offsetTop;
          document.documentElement.scrollTop = top;
          return;
        } else {
          params["answers[" + i + "].orderNumber"] = questionsAnswer[i].id;
          params["answers[" + i + "].value"] = questionsAnswer[i].value;
        }
      }
      if(getUrl==''){
       return Toast('您忘记签名了！')
      }else{
        params['autograph']=getUrl
      }
      console.log(params);//答案
      this.$http
        .uploadAnswer(params)
        .then(res => {
          if (res.code === '0') {
            // Toast("提交成功");
            this.$dialog.alert({
              title: "问卷结果", //加上标题
              message: res.msg, //改变弹出框的内容
            })
            .then(() => { //点击确认按钮后的调用
              setTimeout(() => {
              this.$router.go(0);
            }, 1500);
            })
          } else {
            Toast("提交失败");
          }
          console.log(res);
        })
        .catch(res => {
          Toast("提交失败");
          console.log(res);
        });
    },
    questionChange(value, id) {
      if (Object.prototype.toString.call(value) === "[object Array]") {
        let str = "";
        value.forEach(item => {
          if (item.value) {
            str += item.value + ",";
          }
        });
        value = str.slice(0, str.length - 1);
      }
      var index = this.questionsAnswer.findIndex(item => {
        return item.id === id;
      });
      if (index === -1) {
        this.questionsAnswer.push({ id, value });
      } else {
        this.questionsAnswer[index].value = value;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0;
  margin: 0;
}
.toptitle {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 12px 10px 12px;
  width: 100%;
  color: #1ea0fa;
  box-sizing: border-box;
  .htitle {
    font-size: 18px;
    line-height: 32px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .h2title{
    font-size: 14px;
    line-height: 32px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
  }
}
.saveBtn {
  margin-bottom: 36px;
  margin-top: 20px;
  button {
    width: 80%;
  }
}
</style>
