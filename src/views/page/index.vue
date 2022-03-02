<template>
  <div class="page_container">
    <a-transfer
      :data-source="mockData"
      show-search
      :filter-option="filterOption"
      :target-keys="targetKeys"
      :render="item => item.title"
      @change="handleChange"
      @search="handleSearch"
    />
    <!-- 点击按钮加遮罩层 -->
    <div>
      <a-button type="primary" @click="showModal">遮罩层</a-button>
      <a-modal
        class="remindTitle"
        title="温馨提示"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
        ok-text="仅发布"
        cancel-text="取消"
      >
        <a-icon type="question-circle" />
        <p class="isContent">是否确认操作此条信息</p>
        <a-button type="primary" @click="remindGo" class="remindBtn">发布并短信提醒</a-button>
      </a-modal>
    </div>
    <div style="margin-top:30px">
      <a-button @click="confirm">Confirm</a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "首页",
  data() {
    return {
      mockData: [
        { description: "人员编码111", key: "resourseCode", title: "人员编码" },
        { description: "张三", key: "zs", title: "张三" },
        { description: "李四", key: "ls", title: "李四" }
      ],
      targetKeys: [],
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {
    this.getMock();
  },
  methods: {
    confirm() {
      this.$confirm({
        title: "Confirm",
        content: "Bla bla ...",
        okText: "确认",
        cancelText: "取消"
      });
    },

    remindGo() {
      console.log("发布并短信提醒按钮");
      this.visible = false;
    },
    // 遮罩层部分 https://blog.csdn.net/LxLzhz/article/details/118493315
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log("我是仅发布按钮");
      this.visible = false;
      // this.ModalText = "The modal will be closed after two seconds";
      // this.confirmLoading = true;
      // setTimeout(() => {
      //   this.visible = false;
      //   this.confirmLoading = false;
      // }, 2000);
    },
    handleCancel(e) {
      console.log("我是取消按钮");
      this.visible = false;
    },
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < this.mockData.length; i++) {
        // const data = {
        //   key: i.toString(),
        //   title: `content${i + 1}`,
        //   description: `description of content${i + 1}`,
        //   chosen: Math.random() * 2 > 1
        // };
        // if (data.chosen) {
        //   targetKeys.push(data.key);
        // }
        // mockData.push(data);
      }
      // this.mockData = mockData;
      // this.targetKeys = targetKeys;
    },
    filterOption(inputValue, option) {
      // console.log("inputValuekkk", inputValue);
      // console.log("optionkkk", option);
      // console.log("option.description+", option.description);
      return option.description.indexOf(inputValue) > -1;
    },
    handleChange(targetKeys, direction, moveKeys) {
      // console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys;
    },
    handleSearch(dir, value) {
      // console.log("search:", dir, value);
    }
  },
  watch: {}
};
</script>
<style scoped lang="less">
.remindTitle {
  position: relative;
}
.remindBtn {
  position: absolute;
  bottom: 10px;
  left: 180px;
}
/deep/ .ant-modal-footer div {
  display: flex;
  justify-content: space-around;
}
/deep/.anticon-question-circle {
  font-size: 25px;
  color: #fcc760;
  position: absolute;
  top: 42px;
  left: 50px;
}
/deep/.ant-modal-header {
  border-bottom: none;
}
/deep/.ant-modal-footer {
  border-top: none;
}

/deep/.ant-modal-title {
  font-size: 17px;
  font-weight: 500;
  margin: 30px 0px 0 68px;
}
.isContent {
  margin-left: 67px;
  margin-top: -29px;
}
</style>>

