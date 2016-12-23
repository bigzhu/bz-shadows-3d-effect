<template>
  <div>
    <doc :name="name"
      :desc="desc"
      :parm_desc="parm_desc"
      :parms="parms"
      :code="code"
      >
      <bz :loading="loading" v-on:check_done="call_back"></bz>
    </doc>
  </div>
</template>
<script>
  import toastr from 'toastr'

  import Bz from './Bz'
  import Doc from 'bz-doc'
  export default {
    components: {
      Bz,
      Doc
    },
    data: function () {
      return {
        loading: false,
        name: 'bz-login',
        desc: '登录页面',
        parms: [
          {parm: 'check_done', desc: 'v-on 绑定 check_done 事件，完成了用户名密码必填的check'},
          {parm: 'user_name_placeholder', desc: '可选'},
          {parm: 'password_placeholder', desc: '可选'},
          {parm: 'loading', desc: '控制按钮loading效果(可选)'}
        ],
        parm_desc: ``,
        code: `<bz v-on:check_done="call_back"></bz>`
      }
    },
    methods: {
      call_back: function (user_name, password) {
        this.loading = true
        let _this = this
        window.setTimeout(function () {
          window.alert(`user_name:${user_name}, password: ${password}`)
          toastr.info('登录成功')
          _this.loading = false
        }, 2000)
      }
    }
  }
</script>
