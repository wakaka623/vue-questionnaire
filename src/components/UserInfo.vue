<template>
  <div class="container userInfo">
    <van-row>
      <van-col span="12"
        ><van-field
          v-model.trim="userInfo.name"
          required
          label="姓名:"
          placeholder="请输入姓名"
      /></van-col>
      <van-col span="12">
        <van-field
          v-model.trim="userInfo.tel"
          required
          label="电话:"
          placeholder="请输入电话"
      /></van-col>
    </van-row>
    <p class="txt">本问卷旨在了解您可承受的风险程度等情况，借此协助您选择合适的金融产品或金融服务类别，以符合您的风险承受能力。</p>
    <p class="txt"><span>本公司特别提醒您：</span>本公司向投资者履行风险承受能力评估等适当性职责，并不能取代您自己的投资判断，也不会降低金融产品或者金融服务的固有风险。
      同时，与金融产品或者金融服务相关的投资风险、履约责任以及费用等将由您自行承担。</p>
    <p class="txt"><span>本公司提示您：</span>本公司根据您提供的信息对您进行风险承受能力评估，开展适当性工作。您应当如实提供相关信息及证明材料，并对所提供的信息和证明材料的真实性、准确性、完整性负责。</p>
    <p class="txt">当您的各项状况发生重大变化时，需对您所投资的金融产品及时进行重新审视，以确保您的投资决定与您可承受的投资风险程度等实际情况一致。</p>
   
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userInfo: {
        name: "",
        // sex: "",
        // age: null,
        // address: "", //地址
        tel: ""
      }
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.container {
  margin: 0;
  padding: 0 3px 10px;
  font-size: 14px;
  border-bottom: 1px solid #f6f6f6;
}
.userInfo >>> .van-field__label {
  margin-right: 5px;
  max-width: 35px;
  font-weight: bold;
}
.userInfo >>> .van-radio__label {
  color: #646566;
}
.userInfo >>> .van-field--disabled .van-field__label {
  color: #646566;
}
.userInfo >>> .van-field__control:disabled {
  color: #323233;
}
.userInfo >>> .van-field--disabled::after {
  border-bottom: unset;
}
.sex {
  display: flex;
  align-items: center;
  /* height: 44px; */
  padding: 10px 0 10px 8px;
  line-height: 24px;
}
.sex > label {
  color: #646566;
  font-size: 14px;
  margin-right: 5px;
  font-weight: bold;
}
.sex >>> .van-radio--horizontal:nth-of-type(2) {
  margin-right: 0;
}
.txt{
  text-indent: 25px;
  font-size: 14px;
  text-align: left;
  padding: 0 8px;
}
.txt span{
  font-weight: 900;
}
</style>
