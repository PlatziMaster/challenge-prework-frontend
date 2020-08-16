export default {
  namespaced: true,
  state: {
    players: [
      {
        player: 1,
        life: 100,
        name: 'Andres',
      },
      {
        player: 2,
        life: 100,
        name: 'Camila',
      },
    ],
    modal: false,
    activate_player1: true,
    activate_player2: false,
    winner: 'player',
  },
  mutations: {
    atack(state, payload) {
      const atack = Math.floor(Math.random() * (15 - 0));
      if (payload === 0 && state.activate_player1) {
        if (state.players[1].life < 10) {
          state.players[1].life = 0;
          state.modal = true;
          state.winner = `player ${state.players[payload].name}`;
        } else {
          state.players[1].life -= atack;
          state.activate_player1 = false;
          state.activate_player2 = true;
        }
      } else if (payload === 1 && state.activate_player2) {
        if (state.players[0].life < 10) {
          state.players[0].life = 0;
          state.modal = true;
          state.winner = `player ${state.players[payload].name}`;
        } else {
          state.players[0].life -= atack;
          state.activate_player1 = true;
          state.activate_player2 = false;
        }
      }
    },
    reset(state) {
      state.players[0].life = 100;
      state.players[1].life = 100;
      state.modal = false;
      state.activate = false;
    },
  },
};
