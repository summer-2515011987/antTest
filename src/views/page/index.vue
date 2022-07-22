<template>
  <div class="page_container">
    <!-- 单个文本框校验 -->
    <!-- <a-input placeholder="Basic usage111" style="width:60%" v-model="name" @change="operationName" /> -->
    <a-input
      label="测试表单："
      placeholder="Basic usage222"
      style="width:60%"
      v-model="name"
      @change="operationName1"
    />
    <div>
      <!-- <span v-if="isSpecial" style="color:red">不可以输入英文特殊字符<>"'&</span> -->
      <!-- 字母汉字，数字 -->
      <span v-if="isSpecial" style="color:red">只能输入字母，汉字，数字</span>
      <span v-else style="color:red"></span>
    </div>
    <!-- <a-button @click="submit">提交</a-button> -->
    <!-- 富文本编辑器 -->
    <!-- 写法1 -->
    <!-- <div style="margin-bottom:40px">
      <quill-editor
        ref="text"
        v-model="editorContent"
        class="myQuillEditor"
        :options="editorOption"
      />
    </div>-->
    <!-- 写法2 -->

    <!-- <a-input placeholder="Basic usage" v-model="curApp" @click="currentSum" /> -->
    <!-- <a-button @click="fengMo">封模</a-button>
    <modalCom :reportVisible="reportVisible"></modalCom>-->
    <!-- <a-button type="primary" @click="modeBox">封模态</a-button>
    <a-button type="primary" @click="showModal">封模态</a-button>-->
    <!-- 首页 -->
    <!-- 穿梭功能开始 -->
    <!-- <a-transfer
      :data-source="mockData"
      show-search
      :filter-option="filterOption"
      :target-keys="targetKeys"
      :render="item => item.title"
      @change="handleChange"
      @search="handleSearch"
    />-->
    <!-- 穿梭功能结束 -->
    <!-- 点击导出加载效果 -->
    <!-- <a-button type="danger" @click="exportBtn" :loading="loading" :disabled="disabled">提交</a-button> -->
    <!-- 点击按钮加遮罩层 -->
    <div>
      <!-- <a-button type="primary" @click="showModal">遮罩层</a-button> -->
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
    <!-- 展示模态框短信内容 -->

    <div>
      <a-modal
        :visible="reportVisible"
        title="确认内容是否需要修改"
        :footer="null"
        :destroyOnClose="true"
        :maskClosable="false"
        @cancel="afterClose"
      >
        <a-icon type="question-circle" />
        <a-form-model
          ref="ruleForms"
          :model="submitForm"
          :rules="rules"
          :label="{ span: 24, offset: 24 }"
        >
          <a-row :gutter="24">
            <a-col :span="24">
              <a-form-model-item prop="content">
                <m-textarea
                  v-model="submitForm.content"
                  :showWordLimit="true"
                  :maxLength="200"
                  placeholder="请输入描述"
                />
              </a-form-model-item>
            </a-col>
          </a-row>
          <div class="footButton">
            <a-button type="primary" @click="onSubmit">确定aaa</a-button>
            <a-button type="primary" @click="afterClose" style="margin-left: 20px">取消</a-button>
          </div>
        </a-form-model>
      </a-modal>
    </div>
    <!-- <div style="margin-top:30px">
      <a-button @click="confirm">Confirm</a-button>
    </div>-->
    <!-- 测试...params -->
    <!-- <a-button type="primary" @click="testBtn">Primary</a-button> -->
    <!-- 封装模态框 -->
  </div>
</template>
<script>
import { escape2Html, html2Escape } from "@/utils/textEscape";
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import modalCom from "@/components/modalCom";
import mTextarea from "@/components/mTextarea";
export default {
  name: "首页",
  data() {
    return {
      name: "", //接收用户输入的值
      isSpecial: false, //定义一个状态
      editorContent: "",
      editorOption: {
        // modules: {
        //   toolbar: [
        //     [
        //       'bold',
        //       'italic',
        //       'underline',
        //       'strike',
        //       'link',
        //       'image',
        //       'code-block'
        //     ], // toggled buttons
        //     [{ align: [] }], //对齐方式
        //     [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
        //     [{ font: [] }], //字体
        //     [{ size: ['small', 'normal', 'large', 'huge'] }],
        //     [{ color: [] }, { background: [] }] // 字体颜色，字体背景颜色
        //   ]
        // }
      },
      curApp: "",
      remindVisible: false,
      submitForm: {
        content: ""
      },
      disabled: true,
      aaa: [],
      loading: false,

      rules: {
        content: [
          { required: true, message: "请输入短信信息" },
          { max: 10, message: "最多输入10个字符", trigger: "change" },
          { validator: this.checkCh, trigger: "change" }
        ]
      },

      // 11
      mockData: [
        { description: "ceshi1", key: "ceshi1", title: "ceshi1" },
        { description: "ceshi2", key: "ceshi2", title: "ceshi2" },
        { description: "ceshi3", key: "ceshi3", title: "ceshi3" },
        { description: "ceshi4", key: "ceshi4", title: "ceshi4" },
        { description: "ceshi5", key: "ceshi5", title: "ceshi5" },
        { description: "ceshi6", key: "ceshi6", title: "ceshi6" },
        { description: "ceshi7", key: "ceshi7", title: "ceshi7" },
        { description: "ceshi8", key: "ceshi8", title: "ceshi8" }
      ],
      targetKeys: [],
      ModalText: "Content of the modal",
      visible: false,
      reportVisible: false,
      confirmLoading: false
    };
  },
  components: {
    mTextarea,
    modalCom,
    quillEditor
  },
  computed: {},
  beforeMount() {},
  mounted() {
    // this.getMock();
  },
  methods: {
    submit() {
      this.isSpecial = false;
      // let regEn = /[<>"'&]/g;//不可以输入英文特殊字符<>"'&
      // e.target.value
      // [a-zA-Z] // 匹配所有的字母
      // [0-9] // 匹配所有的数字
      // 匹配字母汉字，数字
      console.log("this.name", this.name);
      let regEn = "^[a-z0-9A-Z\u4e00-\u9fa5]+$";
      if (!regEn.test(this.name)) {
        this.isSpecial = true;
        return;
      }
    },
    operationName1(e) {
      this.isSpecial = false;
      // console.log("input", e);
      // let regEn = /[<>"'&]/g;
      // 匹配字母汉字，数字
      console.log("this.name", this.name);
      let regEn = /^[a-z0-9A-Z\u4e00-\u9fa5]+$/g;
      // e.target.value
      if (!regEn.test(this.name)) {
        this.isSpecial = true;
        return;
      }
    },
    operationName(e) {
      console.log("e", e);
      console.log("e.target", e.target);
      console.log("e.target.value", e.target.value);
      console.log("e.target.value.length", e.target.value.length);
      // baseURI
      console.log("e.target.baseURI", e.target.baseURI);
    },
    checkCh(rule, value, callback) {
      console.log("valuekkk", value);
      // var reg = new RegExp(/<>"'&/g);
      var regEn = /[<>"'&]/g;

      if (value) {
        if (regEn.test(value)) {
          callback(new Error("11111"));
        } else {
          callback();
        }
      }
      callback();
      // if (value) {
      // if (value.match(/[&<>"']/g, "")) {
      //   callback(new Error("11111"));
      // } else {
      //   callback();
      // }
      // }
      // callback();
    },

    fengMo() {
      this.remindVisible = true;
    },
    // modeBox() {
    //   this.reportVisible = true;
    // },
    onSubmit() {
      let self = this;
      self.$refs.ruleForms.validate(valid => {
        if (!valid) {
          return false;
        } else {
          console.log("4444");
        }
      });
      // this.reportVisible = false;
    },
    afterClose() {
      this.reportVisible = false;
      this.visible = true;
    },
    // 测试...params
    testBtn() {
      // 1.传参的时候将两个对象合并为一个对象,将其中一个{}去掉
      // let params = {
      //   id: 1,
      //   name: "zs"
      // };
      // let aparams = {
      //   ...params,
      //   age: "18"
      // };
      // console.log("aparams", aparams);
      //  2.把数组的【】符号去掉，只剩下里面的value。
      let params = [1, 2, 3, 4, 5, 6];
      let params1 = ["zs", "ls", "ww", "zl"];
      console.log("...params", ...params);
      console.log("...params1", ...params1);
    },
    // exportBtn() {
    //   this.loading = true;
    //   this.disabled = true;
    //   setTimeout(console.log("导出"), 6000);
    //   this.loading = false;
    //   this.disabled = false;
    // },

    // confirm() {
    //   this.$confirm({
    //     title: "Confirm",
    //     content: "Bla bla ...",
    //     okText: "确认",
    //     cancelText: "取消"
    //   });
    // },
    //---点击按钮加遮罩层逻辑开始----
    remindGo() {
      console.log("this.editorContent", this.editorContent);
      let aaa = escape2Html(this.editorContent);
      console.log("aaa", aaa);
      this.submitForm.content = aaa;
      this.reportVisible = true;
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
    }
    //---点击按钮加遮罩层逻辑结束----

    //---穿梭功能开始---
    // getMock() {
    //   const targetKeys = [];
    //   const mockData = [];
    //   for (let i = 0; i < this.mockData.length; i++) {
    //     // const data = {
    //     //   key: i.toString(),
    //     //   title: `content${i + 1}`,
    //     //   description: `description of content${i + 1}`,
    //     //   chosen: Math.random() * 2 > 1
    //     // };
    //     // if (data.chosen) {
    //     // }
    //     // mockData.push(data);
    //   }
    //   // this.mockData = mockData;
    //   // this.targetKeys = targetKeys;
    // },
    // filterOption(inputValue, option) {
    //   console.log("inputValuekkk", inputValue);
    //   console.log("optionkkk", option);
    //   // console.log("option.description+", option.description);
    //   return option.description.indexOf(inputValue) > -1;
    // },
    // handleChange(targetKeys, direction, moveKeys) {
    //   console.log(targetKeys, direction, moveKeys);

    //   if (direction == "right") {
    //     for (let i = 0; i < moveKeys.length; i++) {
    //       this.aaa.push(moveKeys[i]);
    //     }
    //     this.targetKeys = this.aaa;
    //   } else {
    //     for (let i = 0; i < moveKeys.length; i++) {
    //       for (var x = 0; x < this.aaa.length; x++) {
    //         if (moveKeys[i] == this.aaa[x]) {
    //           this.aaa.splice(x, 1);
    //         }
    //       }
    //     }
    //   }

    // },
    // handleSearch(dir, value) {
    //   // console.log("search:", dir, value);
    // }
    // ---穿梭功能结束---
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

.footButton {
  text-align: center;
}
.myQuillEditor {
  height: 200px;
}
</style>
