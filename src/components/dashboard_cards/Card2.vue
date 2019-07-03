<template>
  <v-card dark class="v-card--get-new-box">
    <v-card-title class="justify-center">
      <v-layout row wrap>
        <v-flex xs12>
          <v-img
            :src="require('./../../assets/dashboard/calendar.svg')"
            class="ma-4"
            height="32"
            contain
          ></v-img>
        </v-flex>
        <v-flex xs12 class="text--font-primary text__card--big">Already itching for your next box?</v-flex>
        <v-flex xs12>
          <v-btn color="#131634" large>GET A FRESH BOX</v-btn>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <v-layout row wrap class="text-xs-center">
        <v-flex xs12>
          <p class="text__card--small font-weight-medium">Get style refreshers on your own schedule.</p>
        </v-flex>
        <v-flex xs12>
          <v-btn color="white" small>Schedule my boxes</v-btn>
        </v-flex>
        <v-flex xs12>
          <p class="text__card--x-small font-weight-medium">( No obligation, cancel at any time )</p>
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
  &--get-new-box {
    background: linear-gradient(180deg, #6b89f5 0%, #3755bd 100%);
  }
}
</style>
