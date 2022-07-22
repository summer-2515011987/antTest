<template>　
<!-- <-- 用emit方法触发父级方法，自己本身不需要处理方法 -->　　
<!-- <-- 表单校验的时候，可以表单校验成功了之后再去触发父元素方法  --> 
  <a-modal
    :visible="visible"
    title='Create a new collection'
    okText='完成'
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('ok') }"
  >
    <a-form layout='vertical' :form="form">
      <a-form-item label='Title'>
        <a-input v-decorator="[ 'title' ]" />
      </a-form-item>
      <a-form-item label='Description'>
        <a-input  type='textarea' v-decorator="['description']"/>
      </a-form-item>
      <a-form-item class='collection-create-form_last-form-item'>
        <a-radio-group
          v-decorator="['modifier',{initialValue: 'private'}]">
          <a-radio value='public'>Public</a-radio>
          <a-radio value='private'>Private</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>

</template>

<script>
  export default {
    name: 'TestAdd',
    props: ['visible'],
    data () {
      return {
        form: this.$form.createForm(this)
      }
    }
  }
</script>

<style scoped lang="less">

</style>