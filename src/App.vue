<template>
  <div id="app">
    <div id="main">
      <Modal user="sjdkjfkj" v-show="modal"/>
      <div class="circle one"></div>
      <div class="circle two"></div>
      <div class="circle three"></div>
      <div class="circle four"></div>
      <div class="titleM">
        <h1>Platzi Game</h1>
      </div>
      <div class="cards">
        <div class="card1">
          <card
          :life="players[0].life"
          :namePlayer="players[0].name"
          background="cardContent green"
          v-bind:player="parseInt(0)"
          >
            <template v-slot:avatar>
              <Personage />
            </template>
          </card>
        </div>
        <div class="card2">
          <card
          :life="players[1].life"
          :namePlayer="players[1].name"
          background="cardContent yellow"
           v-bind:player="parseInt(1)"
          >
            <template v-slot:avatar>
              <Personage2 />
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Modal from '@/components/Modal.vue';
import Personage from '@/components/Personage.vue';
import Personage2 from '@/components/Personage2.vue';
import card from '@/components/card.vue';

export default {

  computed: {
    ...mapState('Life', [
      'players',
      'modal',
    ]),
  },

  components: {
    Modal,
    Personage,
    Personage2,
    card,
  },

};

</script>

<style lang="scss">
@import './assets/css/index.scss';

#main{
  @include center;
  flex-direction: column;
}
.circle{
  position: fixed;
  @include radius-50;
  z-index: -1;
  background-color: var(--btn-blue);
  &.one{
    @include basic(195px, 195px, 26px, $l:-48px);
  }
  &.two{
    @include basic(97px, 97px, 16px, $l: 162px);
  }
  &.three{
    @include basic(335px, 335px, -222px, 10px);
  }
  &.four{
    @include basic( 49px, 49px, 99px, 8px);
  }
}

.titleM{
  height: 18vh;
  @include center;
  align-items: flex-end;
  & h1{
    font-size: 3.5rem;
  }
}
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 82vh;
  width: 80vw;
  max-width: 1820px;
}
.card1, .card2{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
