<template>
  <div class="container">
    商品列表111
    <!-- 日期控件只展示年月 -->
    <span>请选择日期</span>
    <a-date-picker v-model="value3" :format="monthFormat" picker="month" />

 
  </div>
</template>
<script>

export default {
  name: "",
  data() {
    return {
      value3: null, //年月
      monthFormat:'YYYY/MM'
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  created() {
    this.testFn();
  },
  methods: {
 disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    },


    testFn() {
      // 要求：【】及【】内的内容不要
      // let title = "【疫情防控提示】健康宝弹窗如何解除1";
      // let title = "健康宝弹窗如何解除2【疫情防控提示】";
      let title = "健康宝弹窗如何解除【疫情防控提示】健康宝弹窗如何解除3";
      if (title.includes("【")) {
        let a = title.split("【")[0];
        let b = title.split("】")[1];
        let aTitle = a + b;
        console.log("aTitle", aTitle);
      }
    }
  },
  watch: {}
};
</script>
<style scoped>
</style>
