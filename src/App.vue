<template>
  <div id="app">
    <div id="fv"><div class="fv_wrap"><img src="./assets/img/fv.jpg" alt="合同会社面白い人 Webクリエイション、イラストレーションの会社"></div></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #000;
}
#fv {
  height: 100vh;
  overflow-y: scroll;
  background: #eee;
}
#fv img {
  width: 100%;
}
.fv_wrap {
  margin: 0 auto;
  max-width: 1000px;
  font-size: 0;
}
</style>
