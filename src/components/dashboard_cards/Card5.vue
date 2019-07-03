<template>
  <v-card class="v-card--sizes">
    <v-card-text class="text-xs-center px-3">
      <v-layout row wrap>
        <v-flex xs12 class="pa-3">
          <v-img :src="require('./../../assets/dashboard/face.svg')" height="126" contain></v-img>
        </v-flex>
        <v-flex xs12 class="pa-3">
          <p class="text--font-primary text__card--big">
            Change is the only constant.
            <br />Your style profile is no exception.
          </p>
          <p
            class="text__card--small"
          >Review your profile and help us stay up to date with your style evolution.</p>
        </v-flex>
        <v-flex xs12>
          <v-btn color="white" large>REVIEW MY SIZES</v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-card {
  &--sizes {
    background: linear-gradient(138.04deg, #ffcf97 16.13%, #fde29c 96.1%);
  }
}
</style>
