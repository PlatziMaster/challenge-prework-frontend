import { key } from '@/assets/keys/key';

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
    urlGif: 'https://media0.giphy.com/media/p4NLw3I4U0idi/giphy.webp?cid=895b396bl39v18f0j7rsxl4l3o6kgrvn4tfhjtxc9i8m9yie&rid=giphy.webp',
  },
  mutations: {
    atack(state, payload) {
      const atack = Math.floor(Math.random() * (25 - 10));
      if (payload === 0 && state.activate_player1) {
        if (state.players[1].life < 1) {
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
    set_gif(state, payload) {
      state.urlGif = payload;
    },
  },
  actions: {
    async gif({ commit }) {
      const params = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'cors',
        cache: 'default',
      };
      let url = 'http://api.giphy.com/v1/gifs/search?';
      const apikey = `api_key=${key}`;
      const search = 'coder';
      const offset = Math.floor(Math.random() * 100);
      const query = `&q=${search}&limit=1&offset=${offset}`;
      url += apikey + query;
      await fetch(url, params)
        .then((res) => res.json())
        .then((userData) => {
          const urlGif = userData.data[0].images.original.webp;
          commit('set_gif', urlGif);
        });
      // state.gif = 'hello';
    },
  },
};
