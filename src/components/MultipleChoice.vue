<template>
  <div class="container">
    <div class="field-label">
      <span class="req" v-if="question.required">*</span>
      <span>{{ index + "." + question.title }}</span>
      <span class="qtypetip">【多选题】</span>
    </div>
    <div class="ui-controlgroup">
      <van-checkbox-group v-model="answer" ref="checkboxGroup">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in question.options"
            clickable
            :key="item.id"
            @click="toggle(item, index)"
          >
            <template>
              <van-checkbox shape="square" :name="item" ref="checkboxes">{{
                item.value
              }}</van-checkbox>
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
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
  name: "MultipleChoice",
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
      inputShow: false,
      answer: [],
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
    toggle(item, index) {
      if (item.value === "其他") {
        this.$refs.checkboxGroup.toggleAll(false);
        this.$refs.checkboxes[index].toggle();
        if (!this.$refs.checkboxes[index].checked) {
          this.inputShow = true;
        } else {
          this.inputShow = false;
        }
      } else {
        let findIndex = this.answer.findIndex(item => item.value === "其他");
        if (findIndex !== -1) {
          this.$refs.checkboxes[this.question.options.length - 1].toggle(false);
          this.otherAnswer = "";
        }
        this.inputShow = false;
        this.$refs.checkboxes[index].toggle();
      }
    },
    questionChange() {
      this.$emit("change", this.otherAnswer || this.answer, this.question.id);
    }
  }
};
</script>
<style scoped>
.ui-controlgroup >>> .van-checkbox {
  margin-bottom: 8px;
}
.container >>> .van-field {
  padding: 5px 0;
}
.container >>> .van-cell {
  padding: 0;
}
.container >>> .van-cell::after {
  border-bottom: unset;
}
.container >>> .van-cell-group::after {
  border: unset;
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
