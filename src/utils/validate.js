export default {
  name: function(name) {
    if (!name) {
      return "用户名不能为空";
    }
  },
  sex: function(sex) {
    if (!sex) {
      return "请选择性别";
    }
  },
  age: function(age) {
    if (!age) {
      return "年龄不能为空";
    } else if (age < 0 || age > 150) {
      return "年龄输入有误";
    }
  },
  tel: function(phone) {
    if (!phone) {
      return "手机号码不能为空";
    } else if (!/^1[3456789]\d{9}$/.test(phone)) {
      return "手机号码有误";
    }
  },
  address: function(address) {
    if (!address) {
      return "地址不能为空";
    }
  }
};
