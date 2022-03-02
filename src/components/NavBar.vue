<template>
  <div>
    <div class="logo" />
    <a-menu
      :default-selected-keys="['/index']"
      mode="inline"
      @click="handleClick"
      theme="dark"
    >
      <a-menu-item key="/index">
        <a-icon type="user" />
        <span>首页</span>
      </a-menu-item>
      <a-sub-menu key="/shop">
        <span slot="title"
          ><a-icon type="appstore" /><span>商品管理</span></span
        >
        <a-menu-item key="/shop/add">商品添加</a-menu-item>
        <a-menu-item key="/shop/list">商品列表</a-menu-item>
        <a-menu-item key="/shop/publish">商品发布</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      console.log(e);
      this.$router.push({ path: e.key });
    },
  },
};
</script>