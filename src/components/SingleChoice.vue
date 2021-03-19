<template>
  <div class="container">
    <div class="field-label">
      <span class="req" v-if="question.required">*</span>
      <span>{{ index + "." + question.title }}</span>
      <span class="qtypetip">【单选题】</span>
    </div>
    <div class="ui-controlgroup">
      <van-radio-group v-model="answer" @change="radioChange">
        <van-radio
          v-for="item in question.options"
          :key="item.id"
          :name="item.value"
          >{{ item.value }}</van-radio
        >
      </van-radio-group>
      <van-field
        v-if="inputShow"
        v-model="otherAnswer"
        placeholder="请输入内容"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleChoice",
  props: {
    question: {
      type: Object,
      default: () => {
        return {};
      }
    },
    index: {
      type: Number || String,
      default: null
    }
  },
  data() {
    return {
      inputShow: false,
      answer: "",
      otherAnswer: ""
    };
  },
  watch: {
    answer: {
      handler() {
        this.questionChange();
      }
    },
    otherAnswer: {
      handler() {
        this.questionChange();
      }
    }
  },
  methods: {
    radioChange(e) {
      if (e === "其他") {
        this.inputShow = true;
      } else {
        this.inputShow = false;
      }
    },
    questionChange() {
      this.$emit("change", this.otherAnswer || this.answer, this.question.id);
    }
  }
};
</script>
<style scoped>
.ui-controlgroup >>> .van-radio {
  margin-bottom: 8px;
  text-align: left;
}
.container >>> .van-field {
  padding: 5px 0;
}
</style>
<style scoped lang="scss">
.container {
  margin: 0;
  padding: 10px;
  font-size: 14px;
  // border-bottom: 1px solid #f6f6f6;
}
.field-label {
  position: relative;
  font-size: 14px;
  font-weight: bold;
  padding: 0 0 8px 0;
  display: block;
  text-align: left;
  color: #646566;
  .req {
    color: red;
    margin: 2px 5px 0 2px;
  }
  .qtypetip {
    font-weight: normal;
    color: #999;
  }
}
.ui-controlgroup {
  padding: 0px 10px;
}
</style>
