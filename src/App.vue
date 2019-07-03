<template>
  <v-app>
    <v-toolbar app flat>
      <v-toolbar-title class="headline text-uppercase">
        <img src="./assets/logo.svg" height="40" class="mt-3" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Config JSON</v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="(item, index) in configFiles" :key="index" @click="item.onClick">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <dash-board />
    </v-content>
  </v-app>
</template>

<script>
import DashBoard from "./components/DashBoard";

export default {
  name: "App",
  components: {
    DashBoard
  },
  data() {
    return {
      configFiles: [
        {
          title: "no-active-box.json",
          onClick: () => this.$store.dispatch("loadFile", "no-active-box")
        },
        {
          title: "no-recent-box.json",
          onClick: () => this.$store.dispatch("loadFile", "no-recent-box")
        },
        {
          title: "returnable-box.json",
          onClick: () => this.$store.dispatch("loadFile", "returnable-box")
        }
      ]
    };
  }
};
</script>
