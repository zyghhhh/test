<template>
  <div id="app">
    <routerView />
    <div class="btn-toolbar" role="toolbar" aria-label="...">
      <div class="btn btn-group" role="group" aria-label="..." @click="goTo('/firstScreen')">1</div>
      <div class="btn btn-group" role="group" aria-label="..." @click="goTo('/twoScreen')">2</div>
      <div class="btn btn-group" role="group" aria-label="..." @click="goTo('/threeScreen')">3</div>
      <div class="btn btn-group" role="group" aria-label="..." @click="goTo('/fourScreen')">4</div>
      <div class="btn btn-group" role="group" aria-label="..." @click="goTo('/test')">气泡</div>
    </div>
    
  </div>
</template>

<script>
import First from "./components/firstScreen";
import Two from "./components/twoScreen";
import Three from "./components/threeScreen";
import Four from "./components/fourScreen";

export default {
  name: "app",
  components: {
    First,
    Two,
    Three,
    Four
  },
  methods:{
    goTo(path){
      
      this.$router.replace(path)

    }
  }
};
</script>

<style scoped>
.btn{
  border:1px solid #ddd;
  border-radius: 2px;
}
</style>
