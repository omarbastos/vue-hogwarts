import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#222f5b",
        secondary: "#2a623d",
        accent: "#ae0001",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        gryffindor: "#ae0001",
        hufflepuff: "#d39b03",
        ravenclaw: "#222f5b",
        slytherin: "#2a623d",
      },
    },
  },
  icons: {
    iconfont: "mdiSvg",
  },
});
