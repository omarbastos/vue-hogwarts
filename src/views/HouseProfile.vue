<template>
  <v-container :fluid="$vuetify.breakpoint.smAndDown">
    <v-data-iterator
      :items="characters"
      :search="search"
      items-per-page.sync="10"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar class="mb-2" :color="classHouse" dark flat>
          <v-toolbar-title>{{ houseName }} Members </v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row class="my-12">
          <v-col
            v-for="character in props.items"
            :key="character.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card min-height="126">
              <v-list dense>
                <v-list-item>
                  <v-list-item-avatar size="64">
                    <v-img :src="character.image" :alt="character.name">
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            :color="classHouse"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="font-weight-bold mb-2"
                      v-text="character.name"
                    ></v-list-item-title>

                    <v-list-item-title v-if="character.alive">
                      Blood Status:
                      {{ character.alive ? "😎" : "💀" }}</v-list-item-title
                    >
                    <v-list-item-title v-if="character.species">
                      Species:
                      {{ character.species }}</v-list-item-title
                    >
                    <v-list-item-title v-if="character.gender">
                      Gender:
                      {{
                        character.gender === "male" ? "♂" : "♀"
                      }}</v-list-item-title
                    >
                    <v-list-item-title v-if="character.ancestry">
                      Ancestry:
                      {{ character.ancestry }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" justify="center" align="center">
            <v-btn
              :x-large="$vuetify.breakpoint.mdAndUp"
              width="200"
              color="red"
              to="/"
              >Back</v-btn
            >
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar dark :color="classHouse" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              :color="classHouse"
              solo-inverted
              hide-details
              :item-color="classHouse"
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed :color="classHouse" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed :color="classHouse" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      keys: ["name", "ancestry", "gender", "species", "alive"],
      sortBy: "name",
    };
  },
  computed: {
    ...mapState(["houseSelected"]),
    houseName() {
      return this.houseSelected?.name;
    },
    characters() {
      return this.houseSelected?.characters;
    },
    classHouse() {
      const { houseName } = this;
      const color = houseName.toLowerCase();
      return `${color}`;
    },
  },
};
</script>
