<template>
  <div class="container questionInput">
    <div class="field-label">
      <span class="req" v-if="question.required">*</span>
      <span>{{ index + "." + question.title }}</span>
      <span class="qtypetip">【填空题】</span>
    </div>
    <div class="ui-controlgroup">
      <template v-if="!multiple">
        <van-field
          v-model="result"
          autosize
          type="textarea"
          placeholder="请输入内容"
        />
      </template>
      <template v-else>
        <van-field
          v-for="(item, index) in results"
          :key="index"
          v-model="item.value"
          center
          clearable
          :label="index + 1 + '.'"
          placeholder="请输入内容"
        >
          <template #button>
            <van-button
              v-if="results.length - 1 === index"
              size="mini"
              plain
              type="info"
              @click="addResult"
              >添加</van-button
            >
            <van-button
              v-else
              size="mini"
              plain
              type="danger"
              @click="deleteResult(index)"
              >删除</van-button
            >
          </template>
        </van-field>
      </template>
    </div>
  </div>
</template>
<script>
import { debounce } from "../utils/util";
import { Dialog } from "vant";
export default {
  name: "QuestionInput",
  props: {
    question: {
      type: Object,
      default: () => {
        return {};
      }
    },
    index: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      result: "", //单个输入框
      results: [{ value: "" }] //多个输入框
    };
  },
  watch: {
    results: {
      handler: function() {
        this.inputChange();
      },
      deep: true
    },
    result() {
      this.inputChange();
    }
  },
  computed: {
    multiple() {
      if (typeof this.question.answer === "string") {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    // 添加
    addResult() {
      this.results.push({ value: "" });
    },
    //删除
    deleteResult(index) {
      Dialog.confirm({
        title: "温馨提示",
        message: "确定要删除此内容吗"
      })
        .then(() => {
          // on confirm
          this.results.splice(index, 1);
        })
        .catch(() => {
          // on cancel
        });
    },
    //改变
    inputChange: debounce(
      function() {
        var result =
          typeof this.question.answer === "string" ? this.result : this.results;
        this.$emit("change", result, this.question.id);
      },
      1000,
      false
    )
  }
};
</script>
<style scoped>
.container >>> .van-field {
  padding: 5px 0;
}
.container >>> .van-field::after {
  border: unset;
}
.questionInput >>> .van-field__label {
  margin-right: 5px;
  /* max-width: 32px; */
  width: auto;
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
  font-weight: bold;
  padding: 0 0 8px 0;
  display: flex;
  text-align: left;
  color: #646566;
  align-items: center;
  .req {
    color: red;
    margin: 2px 5px 0 2px;
  }
  .qtypetip {
    font-weight: normal;
    color: #999;
  }
  .add {
    position: absolute;
    right: 10px;
  }
}
.ui-controlgroup {
  padding: 0px 10px;
}
</style>
