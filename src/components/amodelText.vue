<template>
  <div>
    <a-modal
      :visible="visibleRemind"
      title="Create a new collection"
      okText="完成"
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('ok') }"
    >
      <a-form layout="vertical" :form="form">
        <a-form-item label="Title">
          <a-input v-decorator="[ 'title' ]" />
        </a-form-item>
        <a-form-item label="Description">
          <a-input type="textarea" v-decorator="['description']" />
        </a-form-item>
        <a-form-item class="collection-create-form_last-form-item">
          <a-radio-group v-decorator="['modifier',{initialValue: 'private'}]">
            <a-radio value="public">Public</a-radio>
            <a-radio value="private">Private</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "TestAdd",
  props: ["visibleRemind"],
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>
<style scoped>
</style>
