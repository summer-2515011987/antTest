<template>
  <a-locale-provider :locale="locale">
    <router-view />
  </a-locale-provider>
</template>

<script>
import zhCn from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      locale: zhCn
    };
  }
};
</script>

<style lang="less">
@keyframes opt {
  0% {
    opacity: 0;
  }
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  animation: opt 0.3s 1;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  background-image: none;
}
// 自定义滚动条
::-webkit-scrollbar-track-piece {
  //滚动条凹槽的颜色，还可以设置边框属性
  background-color: #ffffff;
}
::-webkit-scrollbar {
  //滚动条的宽度
  width: 9px;
  height: 9px;
}
::-webkit-scrollbar-thumb {
  //滚动条的设置
  background-color: #dddddd;
  background-clip: padding-box;
  min-height: 28px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}
</style>