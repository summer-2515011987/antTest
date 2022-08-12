<template>
  <div>
    <!-- 搜索 -->
    <div class="search-box">
      <a-row class="inquire" type="flex" align="middle">
        <a-col :span="6" style="text-align:left;padding-right:10px">
          <span>{{nameValue}}:</span>
        </a-col>
        <a-col :span="14" style="text-align:left;">
          <a-input
            v-model.trim="searchValue"
            placeholder="请输入"
            style="width:100%;margin-right:30px;"
          ></a-input>
        </a-col>
      </a-row>
      <!-- 2 -->
      <a-row class="inquire" type="flex" align="middle">
        <a-col :span="2" style="text-align:left">
          <span>{{dateValue}}:</span>
        </a-col>
        <a-col :span="14" style="text-align:left">
          <a-range-picker v-model="dateVal" @change="(v,s)=>{dateVal = s}" style="width:100%" />
        </a-col>
      </a-row>
      <!-- 3 -->
      <a-row class="inquire" type="flex" align="middle" style="margin-left: 30px;">
        <a-button @click="searchList">搜索</a-button>
      </a-row>
    </div>
    <div style="margin:20px 0">
      <a-button type="link">新增</a-button>
      <a-button type="link">导出</a-button>
      <a-button 
       type="link"
       v-show="isShow"
       >查看操作日志</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    // 搜索名称
    nameValue: {
      type: String,
      required: false,
      default: () => {}
    },
    dateValue: {
      type: String,
      required: false,
      default: () => {}
    },
    //isShow为true显示按钮，为false隐藏按钮
    isShow:{
      type:Boolean,
      required:false,
      default:()=>{}
    }
  },
  data() {
    return {
      searchValue: "",
      dateVal: ""
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    searchList() {
      let filters = {};
      filters.searchValue = this.searchValue;
      filters.dateVal = this.dateVal;
      //    if (filters.value == '') {
      //     this.$message.warning('查询条件不能为空！')
      //     return
      //   } else {
      console.log("searchEvent", filters);
      this.$emit("searchEvent", filters);
      //   }
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.search-box {
  display: flex;
  //   flex-wrap: wrap;
  padding: 20px 20px 0;
  box-sizing: border-box;
  .inquire {
    flex: 1;
    // margin: 0 0 20px;
  }
}
</style>
