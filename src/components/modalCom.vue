<template>
  <div>
    <!-- 展示模态框短信内容 -->
    <div>
      <a-modal
        :visible="remindVisible"
        title="确认内容是否需要修改"
        @cancel="() => { $emit('cancel') }"
        @ok="() => { $emit('ok') }"
      >
        <a-icon type="question-circle" />
        <a-form
          ref="ruleForms"
          :model="submitForm"
          :rules="rules"
          :label="{ span: 24, offset: 24 }"
          layout="horizontal"
          class="textareaDialog"
        >
          <a-row :gutter="24">
            <a-col :span="24">
              <a-form-item ref="content" name="content">
                <div class="wrapper">
                  <a-textarea
                    v-bind="$attrs"
                    v-model="$attrs.value"
                    @change="onChange"
                    class="m-textarea"
                  />
                  <!-- // 字数统计 -->
                  <span v-if="showWordLimit" class="m-count">
                    {{textLength}}/
                    <template v-if="$attrs.maxLength">{{$attrs.maxLength}}</template>
                  </span>
                </div>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 是否展示字数统计
    showWordLimit: {
      type: Boolean,
      default: false
    },
    remindVisible: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "value",
    event: "change"
  },
  name: "",
  data() {
    return {
      submitForm: this.$submitForm.createForm(this)
    };
  },
  components: {},
  computed: {
    // 长度控制
    textLength() {
      return (this.$attrs.value || "").length;
    }
  },
  beforeMount() {},
  mounted() {},
  methods: {
    onChange(e) {
      // v-model 回调函数
      this.$emit("change", e.target.value);
    }
  },
  watch: {}
};
</script>
<style scoped>
</style>
