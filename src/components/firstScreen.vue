<!--  -->
<template>
  <div class="wrap">
    <div class="top"></div>
    <div class="bottom">
      <img src="../assets/imgs/smallFish.png" alt class="leftFish1" />
      <img src="../assets/imgs/smallFish.png" alt class="leftFish2" />
      <img src="../assets/imgs/smallFish.png" alt class="rightFish1" />
      <img src="../assets/imgs/smallFish.png" alt class="rightFish2" />
    </div>
  </div>
</template>

<script>
import bg from "../assets/imgs/bg.jpg";
import { qHeight } from "../utils/index";

export default {
  data() {
    return {};
  },
  mounted() {
    qHeight(".wrap", bg);
  },
  components: {}
};
</script>
<style  scoped>
.wrap {
  position: relative;

  width: 100%;
  /* height:667px; */
  /* background-image:url(../assets/imgs/bg.jpg); */
  background-size: 100%;
  background-repeat: no-repeat;
}
.top {
  /* height:60%; */
}
.bottom {
  /* position: relative; */
  /* height:40%; */
}
.leftFish1,
.leftFish2,
.rightFish1,
.rightFish2 {
  position: absolute;
}
.leftFish1 {
  left:0;
  bottom:50%;
  width: 60px;
  margin-bottom:10px;
  animation: leftFish1Move 6s linear infinite;
}
@keyframes leftFish1Move {
  0%{left:0%}
  49%{left:79%;transform:rotateY(0deg) }
  50%{left:80%;transform:rotateY(180deg)}
  100%{transform: rotateY(180deg)}
}

.leftFish2 {
  left: 15%;
  bottom: 48%;
  width: 60px;
  margin-bottom:10px;
  animation: leftFish2Move 9s infinite
}

@keyframes leftFish2Move {
  0%{left:15%}
  49%{left:79%;transform:rotateY(0deg) }
  50%{left:80%;transform:rotateY(180deg)}
  100%{left:15%;transform: rotateY(180deg)}
}
.rightFish1 {
  left: 25%;
  bottom: 46%;
  width: 60px;
  margin-bottom:10px;
  animation: rightFish1Move 7s infinite
}

@keyframes rightFish1Move {
  0%{left:25%}
  49%{left:79%;transform:rotateY(0deg) }
  50%{left:80%;transform:rotateY(180deg)}
  100%{transform: rotateY(180deg)}
}

.rightFish2 {
  left: 25%;
  bottom: 44%;
  width: 60px;
  animation: rightFish2Move 12s infinite

}

@keyframes rightFish2Move {
  0%{left:25%}
  49%{left:79%;transform:rotateY(0deg) }
  50%{left:80%;transform:rotateY(180deg)}
  100%{transform: rotateY(180deg)}
}
</style>