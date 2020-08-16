<template>
  <div :class="background">
    <h2>{{namePlayer}}</h2>
    <div class="life-atack">
      <div class="life">
        <p>{{life}}</p>
        <div class="progressbar">
          <progress
          class="skill-1"
          max="100"
          :value="life"></progress>
        </div>
      </div>
      <div @click.prevent="atack" class="atack">
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
  },
  methods: {
    ...mapMutations('Life', [
      'atack',
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
  border: 1px solid black;
}
 h2{
  margin: 0;
  font-size: 2rem;
  color: white;
  padding-bottom: 45px;
}

.life-atack{
  width: 80%;
  padding-bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.atack{
  width: 80px;
  height: 80px;
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
</style>
