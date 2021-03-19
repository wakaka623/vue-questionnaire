export default [
  {
    id: 1,
    title: "您目前的主要收入来源是：",
    orderNumber: 1,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "工资、劳务报酬"
      },
      {
        id: 2,
        value: "生产经营所得"
      },
      {
        id: 3,
        value: "利息、股息、转让证券等金融性资产收入"
      },
      {
        id: 4,
        value: "出租、出售房地产等非金融性资产收入"
      },
      {
        id: 5,
        value: "无收入来源，生活主要依靠积蓄或社会保障"
      }
    ]
  },
  {
    id: 2,
    title: "您最近三年个人年均收入为：",
    orderNumber: 2,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "不超过5万元人民币"
      },
      {
        id: 2,
        value: "5万-20万元（不含）人民币"
      },
      {
        id: 3,
        value: "20万-70万元（不含）人民币"
      },
      {
        id: 4,
        value: "70万元人民币以上"
      }
    ]
  },
  {
    id: 3,
    title: "最近您家庭预计进行期货投资的资金占家庭现有总资产（不含自住、自用房产及汽车等固定资产）的比例是：",
    orderNumber: 3,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "70%以上"
      },
      {
        id: 2,
        value: "50-70%"
      },
      {
        id: 3,
        value: "30-50%"
      },
      {
        id: 4,
        value: "10%-30%"
      },
      {
        id: 5,
        value: "10%以下"
      }
    ]
  },
  {
    id: 4,
    title: "您是否有尚未清偿的数额较大的债务，如有，其性质是：",
    orderNumber: 4,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "没有"
      },
      {
        id: 2,
        value: "有，住房抵押贷款等长期定额债务"
      },
      {
        id: 3,
        value: "有，信用卡欠款、消费信贷等短期信用债务"
      },
      {
        id: 4,
        value: "有，亲朋之间借款"
      }
    ]
  },
  {
    id: 5,
    title: "您可用于投资的资产数额（包括金融资产和不动产）为：",
    orderNumber: 5,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "不超过10万人民币"
      },
      {
        id: 2,
        value: "10万-100万（不含）人民币"
      },
      {
        id: 3,
        value: "100万-300万元（不含）人民币"
      },
      {
        id: 4,
        value: "300万元人民币以上"
      }
    ]
  },
  {
    id: 6,
    title: "以下描述中何种符合您的实际情况：",
    orderNumber: 6,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "现在或此前曾从事金融、经济或财会等与金融产品投资相关的工作超过两年"
      },
      {
        id: 2,
        value: "已取得金融、经济或财会等与金融产品投资相关专业学士以上学位"
      },
      {
        id: 3,
        value: "取得证券从业资格、期货从业资格、基金从业资格、注册会计师证书(CPA)或注册金融分析师证书(CFA)中的一项及以上"
      },
      {
        id: 4,
        value: "我不符合以上任何一项描述"
      }
    ]
  },
  {
    id: 7,
    title: "您的投资知识可描述为：",
    orderNumber: 7,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "有限：基本没有证券期货投资知识"
      },
      {
        id: 2,
        value: "一般：对证券期货产品及相关风险具有基本的知识和理解"
      },
      {
        id: 3,
        value: "丰富：对证券期货产品及相关风险具有丰富的知识和理解"
      },
      {
        id: 4,
        value: "非常丰富：具有专业的证券期货产品及相关风险知识，且理解深入"
      }
    ]
  },
  {
    id: 8,
    title: "您的投资经验可以被概括为：",
    orderNumber: 8,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "除银行活期和定期存款外，我基本没有其他投资经验"
      },
      {
        id: 2,
        value: "除银行活期和定期存款外，我购买过基金、保险等理财产品，但还需要进一步的指导"
      },
      {
        id: 3,
        value: "我是一位有经验的投资者，参与过股票、基金等产品的交易，并倾向于自己做出投资决策"
      },
      {
        id: 4,
        value: "我是一位非常有经验的投资者，参与过权证、期货或创业板等产品的交易"
      }
    ]
  },
  {
    id: 9,
    title: "有一位投资者一个月内做了15笔交易（同一品种买卖各一次算一笔），我认为这样的交易频率：",
    orderNumber: 9,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "太高了"
      },
      {
        id: 2,
        value: "偏高"
      },
      {
        id: 3,
        value: "正常"
      },
      {
        id: 4,
        value: "偏低"
      }
    ]
  },
  {
    id: 10,
    title: "过去一年时间内，您购买的金融产品或接受的金融服务（含同一类型的不同产品或服务）的数量是：",
    orderNumber: 10,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "5个以下"
      },
      {
        id: 2,
        value: "6至10个"
      },
      {
        id: 3,
        value: "11至15个"
      },
      {
        id: 4,
        value: "16个以上"
      }
    ]
  },
  {
    id: 11,
    title: "以下金融产品或服务，您投资经验在两年以上的有：",
    orderNumber: 11,
    type: "MultipleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "银行存款"
      },
      {
        id: 2,
        value: "债券、货币市场基金、债券型基金或其它固定收益类产品等"
      },
      {
        id: 3,
        value: "股票、混合型基金、偏股型基金、股票型基金等权益类投资品种等"
      },
      {
        id: 4,
        value: "期货、期权"
      },
      {
        id: 5,
        value: "融资融券"
      },
      {
        id: 6,
        value: "复杂金融产品、其它产品或服务"
      }
    ]
  },
  {
    id: 12,
    title: "如果您曾经从事过金融市场投资，在交易较为活跃的月份，平均月交易额大概是多少:",
    orderNumber: 12,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "10万元以内"
      },
      {
        id: 2,
        value: "10万元-30万元"
      },
      {
        id: 3,
        value: "30万元-100万元"
      },
      {
        id: 4,
        value: "100万元以上"
      },
      {
        id: 5,
        value: "从未从事过金融市场投资"
      }
    ]
  },
  {
    id: 13,
    title: "您的投资年限为:",
    orderNumber: 13,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "1年以下"
      },
      {
        id: 2,
        value: "1-5年"
      },
      {
        id: 3,
        value: "5-10年"
      },
      {
        id: 4,
        value: "10年以上"
      }
    ]
  },
  {
    id: 14,
    title: "您用于期货及相关投资的大部分资金不会用作其它用途的时间段为：:",
    orderNumber: 14,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "0到1年"
      },
      {
        id: 2,
        value: "1到5年"
      },
      {
        id: 3,
        value: "无特别要求"
      }
    ]
  },
  {
    id: 15,
    title: "您打算重点投资于哪些种类的投资品种？",
    orderNumber: 15,
    type: "MultipleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "债券、货币市场基金、债券基金等固定收益类投资品种"
      },
      {
        id: 2,
        value: "股票、混合型基金、偏股型基金、股票型基金等权益类投资品种"
      },
      {
        id: 3,
        value: "期货"
      },
      {
        id: 4,
        value: "融资融券"
      },
      {
        id: 5,
        value: "复杂或高风险金融产品或服务"
      },
      {
        id: 6,
        value: "其他产品或服务"
      }
    ]
  },
  {
    id: 16,
    title: "假设有两种不同的投资：投资A预期获得5%的收益，有可能承担非常小的损失；投资B预期获得20%的收益，但有可能面临25%甚至更高的亏损。您将您的投资资产分配为:",
    orderNumber: 16,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "全部投资于A"
      },
      {
        id: 2,
        value: "大部分投资于A"
      },
      {
        id: 3,
        value: "两种投资各一半"
      },
      {
        id: 4,
        value: "大部分投资于B"
      },
      {
        id: 5,
        value: "全部投资于B"
      }
    ]
  },
  {
    id: 17,
    title: "当您进行投资时，您的首要目标是：",
    orderNumber: 17,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "资产保值，我不愿意承担任何投资风险"
      },
      {
        id: 2,
        value: "产生一定的收益，可以承担一定的投资风险"
      },
      {
        id: 3,
        value: "产生较多的收益，可以承担较大的投资风险"
      },
      {
        id: 4,
        value: "实现资产大幅增长，愿意承担很大的投资风险"
      }
    ]
  },
  {
    id: 18,
    title: "您认为自己能承受的最大投资损失是多少？",
    orderNumber: 18,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "尽可能保证本金安全"
      },
      {
        id: 2,
        value: "一定的投资损失"
      },
      {
        id: 3,
        value: "较大的投资损失"
      },
      {
        id: 4,
        value: "损失可能超过本金"
      }
    ]
  },
  {
    id: 19,
    title: "您打算将自己的投资回报主要用于：",
    orderNumber: 19,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "改善生活"
      },
      {
        id: 2,
        value: "个体生产经营或证券、期货投资以外的投资行为"
      },
      {
        id: 3,
        value: "履行抚养、抚育或赡养义务"
      },
      {
        id: 4,
        value: "偿付债务"
      }
    ]
  },
  {
    id: 20,
    title: "您的年龄是：",
    orderNumber: 20,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "18-30岁"
      },
      {
        id: 2,
        value: "31-40岁"
      },
      {
        id: 3,
        value: "41-50岁"
      },
      {
        id: 4,
        value: "51-60岁"
      },
      {
        id: 5,
        value: "超过60岁"
      }
    ]
  },
  {
    id: 21,
    title: "今后五年时间内，您的父母、配偶以及未成年子女等需承担法定抚养和赡养义务的人数为：",
    orderNumber: 21,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "1-2人"
      },
      {
        id: 2,
        value: "3-4人"
      },
      {
        id: 3,
        value: "5人以上"
      }
    ]
  },
  {
    id: 22,
    title: "您的最高学历是：",
    orderNumber: 22,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "高中或以下"
      },
      {
        id: 2,
        value: "大学专科"
      },
      {
        id: 3,
        value: "大学本科"
      },
      {
        id: 4,
        value: "硕士及以上"
      }
    ]
  },
  {
    id: 23,
    title: "您家庭的就业状况是：",
    orderNumber: 23,
    type: "SingleChoice",
    required: "true",
    options: [
      {
        id: 1,
        value: "您与配偶均有稳定收入的工作"
      },
      {
        id: 2,
        value: "有配偶，其中一人有稳定收入的工作"
      },
      {
        id: 3,
        value: "有配偶，均没有稳定收入的工作或者已退休"
      },
      {
        id: 4,
        value: "单身，但有稳定收入的工作"
      },
      {
        id: 5,
        value: "单身，目前暂无稳定收入的工作"
      }
    ]
  }
];
