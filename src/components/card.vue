<template>
  <div :class="background">
    <h2>{{namePlayer}}</h2>
    <div class="life-atack">
      <div class="life">
        <p>{{life}}%</p>
        <div class="progressbar">
         <div class="bar" :style="{width: life+'%'} "></div>
        </div>
      </div>
      <div @click.prevent="atack(player)" class="atack btn">
        <p>Atack</p>
      </div>

    </div>
    <slot name="avatar" class="avatar"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    namePlayer: {
      type: String,
      default: 'None',
    },
    life: {
      type: Number,
      default: 0,
    },
    background: {
      type: String,
      default: 'cardContent',
    },
    player: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapMutations('Life', [
      'atack',
      'atack2',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/css/index.scss';

.cardContent{
  width: 50vmin;
  padding: 37px;
  padding-bottom: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  @include border;
  animation: showCards 0.4s cubic-bezier(0.76, 0.18, 0.45, 0.94);
}
 h2{
  margin: 0;
  font-size: 2rem;
  color: white;
  padding-bottom: 45px;
}

.life-atack{
  width: 100%;
  height: auto;
  padding-bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.life{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.life>p{
  color: white;
  text-align: center;
  font-size: 2rem;
}
.progressbar{
  @include basic(50px, 80%);
  background-color: var(--btn-blue);
  border-radius: 30px;
  overflow: hidden;
  @include border;
  &>.bar{
    height: 100%;
    width: 100%;
    transition-duration: 100ms;
    transition-timing-function: ease-out;
    background-color: var(--pink);
  }
}

progress[value] {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--pink);
}

progress[value]::-webkit-progress-bar {
  background-color: var(--pink);
  border-radius: 30px;
}

.atack{
  width: 70px;
  height: 70px;
  @include radius-50;
  background-color: var(--btn-blue);
  color: white;
  @include center;
  @include shadow(5px, 6px, 0px, black);
}
.avatar{
  position: relative;
}
.green{
  background-color: var(--green-card);
}
.yellow{
  background-color:var(--yellow-card);
}
@keyframes showCards {
  0%{
    transform: translateY(100vh);
  }
  100%{
    transform: translateY(0);
  }
}

@media screen and (max-width: 1366px){
  h2{
    padding-bottom: 16px;
  }
  .life-atack{
    padding-bottom: 24px;
  }
}
</style>
