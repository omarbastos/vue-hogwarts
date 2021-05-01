<template>
  <v-card @click="selectAHouse(house)" :class="classHouse">
    <v-card-title class="justify-center">{{ house.name }}</v-card-title>
    <v-card-subtitle class="text-center">{{ countMembers }}</v-card-subtitle>
    <v-card-text>
      <v-img contain width="auto" :src="getHouseLogo(house.name)"></v-img>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    house: {
      type: Object,
      default: () => {
        return { id: 1, name: "Gryffindor" };
      },
    },
  },
  computed: {
    classHouse() {
      const { house } = this;
      const color = house?.name.toLowerCase();
      return `${color}`;
    },
    countMembers() {
      const { house } = this;
      if (Array.isArray(house.characters)) {
        return house.characters.length;
      }
      return 0;
    },
  },
  methods: {
    selectAHouse(houseSelected) {
      this.$store.dispatch("SELECT_A_HOUSE", houseSelected);
      this.$router.push({ name: "HouseProfile" });
    },
    getHouseLogo(name) {
      return require(`../assets/houses-logos/${name}.png`);
    },
  },
};
</script>

<style></style>
