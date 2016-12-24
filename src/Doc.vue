<template>
  <div>
    <doc :name="name"
      :desc="desc"
      :parm_desc="parm_desc"
      :parms="parms"
      :code="code"
      >
      <shadows-3d-effect></shadows-3d-effect>
    </doc>
  </div>
</template>
<script>
  import Shadows3dEffect from './Bz'
  import Doc from 'bz-doc'
  export default {
    components: {
      Shadows3dEffect,
      Doc
    },
    data: function () {
      return {
        name: 'bz-shadows-3d-effect',
        desc: '3d效果图片',
        parms: [],
        parm_desc: ``,
        code: `<shadows-3d-effect></shadows-3d-effect>`
      }
    },
    methods: {
    }
  }
</script>
