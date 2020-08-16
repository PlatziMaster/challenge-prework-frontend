<template>
  <div class="modal">
    <div class="content">
      <div class="grid">
        <figure>
          <img src="../assets/images/modal.png" alt="">
        </figure>
        <div class="pic">
          <p>The winnwe is: <br>
          {{winner}}</p>
          <div class="btn" @click.prevent="reset">
            <p>Play again</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Modal',
  props: {
    user: String,
  },
  computed: {
    ...mapState('Life', [
      'winner',
    ]),
  },
  methods: {
    ...mapMutations('Life', [
      'reset',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/index.scss';
.modal{
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  @include center;
  background-color: rgba(128, 128, 128, 0.582);
}

.content{
  height: 80%;
  width: 70%;
  max-width: 1177px;
  max-height: 788px;
  background-color: white;
  @include center;
  border-radius: 20px;
}

.grid{
  height: 80%;
  width: 80%;
  max-width: 941px;
  max-height: 630px;
  display: grid;
  grid-template-columns: minmax(60%, 564px) 1fr;
  grid-template-rows: 100%;
  & figure{
    height: 100%;
    grid-column: 1 / 2;
    text-align: center;
  }
  & img{
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.pic{
  width: 100%;
  height: 100%;
  @include center;
  flex-direction: column;
  & p{
    font-size: 36px ;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }
  &>.btn{
    @include center;
    border-radius: 40px ;
    @include shadow(5px, 6px, 0px, black);
  }
  &>.btn>p{
    color: white;
    margin-bottom: 0;
  }
}

.btn{
  width: 274px;
  height: 78px;
  background-color: var(--btn-blue);
}
</style>
