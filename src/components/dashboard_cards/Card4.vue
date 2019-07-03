<template>
  <v-card dark class="v-card--overdue">
    <v-card-title class="justify-center">
      <v-layout row wrap>
        <v-flex xs12>
          <v-img
            :src="require('./../../assets/dashboard/warning.svg')"
            class="ma-4"
            height="32"
            contain
          ></v-img>
        </v-flex>
        <v-flex xs12>
          <p class="text--font-primary text__card--big">Your box is overdue!</p>
          <p
            class="text__card--normal"
          >Oh no! It looks like it’s time to return your box. Please drop it off at a Zasilkovna location as soon as possible.</p>
        </v-flex>
        <v-flex xs12>
          <v-btn color="white" large>HOW TO RETURN</v-btn>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text class="text-xs-center">
      <v-layout row wrap>
        <v-flex xs12>
          <p class="text__card--small font-weight-medium">
            If you have any questions, please
            <br />feel free to write us a message.
          </p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex offset-sm3 sm2 xs4 class="text-xs-right">
          <img src="./../../assets/dashboard/whatsapp.svg" />
        </v-flex>
        <v-flex sm2 xs4 class="text-xs-center">
          <img src="./../../assets/dashboard/mail.svg" />
        </v-flex>
        <v-flex sm2 xs4 class="text-xs-left">
          <img src="./../../assets/dashboard/messenger.svg" />
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
  &--overdue {
    background: linear-gradient(180deg, #f75d1a 0%, #f18a2f 100%);
  }
}
</style>
