<template>
  <div class="wrapper">
    <a-textarea v-bind="$attrs" v-model="$attrs.value" @change="onChange" class="m-textarea" />
    <!-- // 字数统计 -->
    <span v-if="showWordLimit" class="m-count">
      {{textLength}}/
      <template v-if="$attrs.maxLength">{{$attrs.maxLength}}</template>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    //是否展示字数统计
    showWordLimit: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "value",
    event: "change"
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
<style scoped lang="less">
.wrapper {
  position: relative;

  display: block;

  .m-textarea {
    padding: 8px 12px;
    height: 100%;
  }

  .m-count {
    color: #808080;

    background: #fff;

    position: absolute;

    font-size: 12px;

    bottom: 8px;

    right: 12px;
  }
}
</style>
