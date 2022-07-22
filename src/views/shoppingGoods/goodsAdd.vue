<template>
  <div>
    <!-- <editor v-model="yourContent"></editor> -->
     <div>
     <a-button @click="confirm">
      Confirm
    </a-button>
    <a-modal v-model="visible" title="Modal" ok-text="确认"  @ok="hideModal">
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </a-modal>
    <br />
    <br />
  
  </div>

  </div>
</template>
<script>
import Editor from "@/components/imcoderTinymce";
export default {
  name: "",
  data() {
    return {
       visible: false,
      yourContent: ""
    };
  },
  components: {
    Editor
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    confirm() {
      this.$confirm({
        title: 'Confirm',
        content: 'Bla bla ...',
        okText: '确认',

      });
    },
  },
  watch: {}
};
</script>
<style lang="less" scoped>
</style>
