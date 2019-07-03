import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dashboardConfig: {
      hasPassword: false,
      hasAddress: false,
      hasSizes: false,
      hasPrices: false,
      hasPhotos: false,
      hasActiveBox: false,
      hasShippedBox: false,
      hasReturnableBox: false,
      hasFeedbackWaiting: false,
      lastBoxStarted: ""
    }
  },
  mutations: {
    updateStateFromFile(state, config) {
      state.dashboardConfig = config;
    }
  },
  actions: {
    loadFile({ commit }, fileName) {
      let json = {};
      switch (fileName) {
        case "no-active-box":
          json = require("./config/no-active-box.json");
          break;
        case "no-recent-box":
          json = require("./config/no-recent-box.json");
          break;
        case "returnable-box":
          json = require("./config/returnable-box.json");
          break;
        case "all":
          json = require("./config/all.json");
          break;
        default:
          json = require("./config/no-active-box.json");
          break;
      }

      commit("updateStateFromFile", json);
    }
  }
});
