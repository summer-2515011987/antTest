<template>
  <div class="login-container">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              rules: [{ required: true, message: '请输入用户名!' }],
            },
          ]"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '请输入用户密码!' }],
            },
          ]"
          type="password"
          placeholder="用户密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button" style="width:100%">Log in</a-button>
        <!-- <a href>register now!</a> -->
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      checkNick: false,
      form: this.$form.createForm(this, { name: "dynamic_rule" })
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$router.push("/index");
      //
      // let that = this;
      // this.form.validateFields((err, values) => {
      //   if (!err) {
      //     console.log("Received values of form: ", values);
      //     this.$axios
      //       .LoginSys({
      //         username: values.userName.trim(),
      //         password: values.password.trim(),
      //       })
      //       .then((res) => {
      //         console.log(res);
      //       });
      //   }
      // });
    }
  }
};
</script>
<style scoped lang="less">
/* #components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
} */

.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: skyblue;
}
</style>
