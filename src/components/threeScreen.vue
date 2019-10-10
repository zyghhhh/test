<!--  -->
<template>
  <div class="wrap">
    three
  </div>
</template>

<script>

import bg from '../assets/imgs/bg3.jpg'
  import {qHeight} from '../utils/index'
export default {
  data () {
    return {
    };
  },
mounted(){
    
    qHeight('.wrap',bg)
  },
  components: {},

  
}

</script>
<style  scoped>
.wrap{
        width:100%;
        /* height:667px; */
        /* background-image:url(../assets/imgs/bg.jpg); */
        background-size:100%;
        background-repeat:no-repeat
    }
</style>