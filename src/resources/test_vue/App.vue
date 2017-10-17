<template>
  <div>
    <router-view /> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    background: #eee;
  }
  a {
    margin: 0 10px;
    &:link {
      color: #a00909;
    }
    &:hover{
      opacity: .6;
    }
    &:visited {
      color: #a00909;
    }
  }
</style>
