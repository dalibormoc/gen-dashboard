<template>
  <div style="position: relative;">
    <v-card class="v-card--1">
      <v-img :src="require('../../assets/dashboard/image.png')" contain></v-img>
      <v-card-text>6</v-card-text>
    </v-card>

    <v-card class="v-card--2">
      <v-img :src="require('../../assets/dashboard/image.png')" contain></v-img>
      <v-card-text>6</v-card-text>
    </v-card>

    <v-card class="v-card--3">
      <v-img :src="require('../../assets/dashboard/image.png')" contain></v-img>
      <v-card-text>
        <v-layout row wrap class="text-xs-center">
          <v-flex xs12 class="text--font-primary text__card--big">Is this your style?</v-flex>
          <v-flex offset-xs2 xs4>
            <v-avatar size="50" color="white" tile>
              <img src="./../../assets/dashboard/ex-c.svg" />
            </v-avatar>
          </v-flex>
          <v-flex xs4>
            <v-avatar size="50" color="white" tile>
              <img src="./../../assets/dashboard/heart-c.svg" />
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-card {
  &--1 {
    position: absolute;
    top: 10px;
    left: 5px;
    height: calc(100% - 5px);
    width: 100%;
  }

  &--2 {
    position: absolute;
    top: 5px;
    left: 0px;
    height: calc(100% - 5px);
    width: 100%;
  }

  &--3 {
    top: 0px;
    left: -5px;
    height: calc(100% - 5px);
    width: 100%;
  }
}
</style>
