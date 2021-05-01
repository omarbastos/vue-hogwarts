import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { getAllCharacters } from "../services/hp-api";

export default new Vuex.Store({
  state: {
    houses: [],
    houseSelected: [],
    loading: false,
  },
  mutations: {
    SET_HOUSES(state, houses) {
      state.houses = houses;
    },
    SET_HOUSE_SELECTED(state, houseSelected) {
      state.houseSelected = houseSelected;
    },
    TOGGLE_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async GET_ALL_HOUSES(context) {
      context.commit("TOGGLE_LOADING", true);
      const characters = await getAllCharacters();
      const groupByHouses = characters.reduce(function (obj, item) {
        obj[item.house] = obj[item.house] || [];
        obj[item.house].push(item);
        return obj;
      }, {});
      const mapGroup = Object.keys(groupByHouses).map(function (key) {
        return { name: key, characters: groupByHouses[key] };
      });
      const filteredHouses = mapGroup.filter((h) => !!h && h.name.length > 0);
      context.commit("SET_HOUSES", filteredHouses);
      context.commit("TOGGLE_LOADING", false);
    },
    SELECT_A_HOUSE(context, houseSelected) {
      context.commit("SET_HOUSE_SELECTED", houseSelected);
    },
  },
  modules: {},
});
