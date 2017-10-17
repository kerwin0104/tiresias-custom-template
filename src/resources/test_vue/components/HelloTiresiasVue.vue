<template>
  <div>
    <div class="container">
      <p>
        <img src="/static/tiresias.png" />
      </p>
      <h1>
        Tiresias
      </h1>
      <h3>
        Tiresias & Vue
      </h3>
      <p>
        <router-link to="/docs">
          Documents
        </router-link>
      </p>
      <h4>
        tiresias core
      </h4>
      <p>
        <a href="https://github.com/kerwin0104/tiresias" target="_blank">
          tiresias
        </a>
        <a href="https://github.com/kerwin0104/tiresias-webpack" target="_blank">
          tiresias-webpack
        </a>
        <a href="https://github.com/kerwin0104/tiresias-cli" target="_blank">
          tiresias-cli
        </a>
      </p>
      <h4>
        tiresias other template
      </h4>
      <p>
        <a href="https://github.com/kerwin0104/tiresias-hbs-template" target="_blank">
          tiresias-hbs-template
        </a>
        <a href="https://github.com/kerwin0104/tiresias-template" target="_blank">
          tiresias-template
        </a>
        <a href="https://github.com/kerwin0104/tiresias-custom-template" target="_blank">
          tiresias-custom-template
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello-tiresias-vue',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .container {
    width: 500px;
    margin: 0 auto;
    text-align: center;
    img {
      margin: 10px 0;
    }
    h1 {
      margin: 10px auto;
    }
  }
  p {
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
  }
</style>
