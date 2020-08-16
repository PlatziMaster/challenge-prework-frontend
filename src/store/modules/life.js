export default {
  namespaced: true,
  state: {
    player1: {
      life: 50,
      name: 'Andres',
    },
    player2: {
      life: 80,
      name: 'Camila',
    },
    modal: false,
  },
  mutations: {
    atack(state) {
      if (state.player2.life <= 10) {
        state.player2.life = 0;
        state.modal = true;
      } else {
        state.player2.life -= 10;
      }
    },
  },
};
