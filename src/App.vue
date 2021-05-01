<template>
  <v-app>
    <v-main
      ><v-progress-linear
        class="mt-4"
        color="blue"
        :active="loading"
        :indeterminate="loading"
      ></v-progress-linear>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>
<script>
// @ is an alias to /src

import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loading"]),
  },
};
</script>
<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
