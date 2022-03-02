<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div style="width: auto; float: left">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="handleCollapsed"
      />
      <a-tooltip placement="bottomLeft">
        <template slot="title"> 点击刷新 </template>
        <a-icon class="trigger" type="reload" />
      </a-tooltip>
    </div>
    <div style="width: auto; float: right">123</div>
  </a-layout-header>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleCollapsed() {
      this.$emit("collapsedStatus", (this.collapsed = !this.collapsed));
    },
  },
};
</script>