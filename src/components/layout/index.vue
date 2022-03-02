<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <nav-bar />
    </a-layout-sider>
    <a-layout>
      <header-bar @collapsedStatus="collapsedStatus" />
      <a-layout-content
        :style="{
          margin: '15px',
          padding: '20px',
          background: '#fff',
          minHeight: '280px',
          overflow: 'auto',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import headerBar from "../HeaderBar.vue";
import navBar from "../NavBar.vue";
export default {
  components: {
    headerBar,
    navBar,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    collapsedStatus(data) {
      this.collapsed = data;
    },
  },
};
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100%;
  overflow: hidden;
  display: flex;
}
.ant-layout {
  flex: 1;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 50px !important;
  padding: 0 15px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>