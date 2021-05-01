<template>
  <v-container class="fill-height">
    <v-row justify="center" align-content="center">
      <v-col cols="6" md="3" v-for="house in houses" :key="house.id">
        <house-card :house="house"></house-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

import HouseCard from "@/components/HouseCard";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { HouseCard },
  computed: {
    ...mapState(["houses"]),
  },
  async created() {
    try {
      await this.$store.dispatch("GET_ALL_HOUSES");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {},
};
</script>
