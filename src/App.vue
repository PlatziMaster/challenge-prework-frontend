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
          :life="player1.life"
          :namePlayer="player1.name"
          background="cardContent green"
          >
            <template v-slot:avatar>
              <Personage />
            </template>
          </card>
        </div>
        <div class="card2">
          <card
          :life="player2.life"
          :namePlayer="player2.name"
          background="cardContent yellow"
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
      'player1',
      'player2',
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
}
.card1, .card2{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
