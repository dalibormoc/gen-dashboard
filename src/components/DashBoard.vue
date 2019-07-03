<template>
  <v-container grid-list-md class="text--font-normal">
    <v-layout row wrap>
      <v-flex sm12 xs12 class="text-xs-center pb-5">
        <h2 class="text-xs-center text--font-primary text__headline">Genster Dashboard</h2>
        <div :class="{'headerline': $vuetify.breakpoint.mdAndUp}"></div>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex v-if="dashboardConfig.hasActiveBox" sm6 xs12 pa-2 d-flex>
        <card-1></card-1>
      </v-flex>
      <v-flex v-if="!dashboardConfig.hasActiveBox" lg3 sm6 xs12 pa-2 d-flex>
        <card-2></card-2>
      </v-flex>
      <v-flex lg3 sm6 xs12 pa-2 d-flex>
        <card-3></card-3>
      </v-flex>
      <v-flex sm6 xs12 pa-2 d-flex>
        <card-4></card-4>
      </v-flex>
      <v-flex sm6 xs12 pa-2 d-flex>
        <card-5></card-5>
      </v-flex>
      <v-flex sm6 xs12 pa-2 d-flex>
        <card-6></card-6>
      </v-flex>
      <v-flex lg3 sm6 xs12 pa-2 d-flex>
        <card-7></card-7>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card1 from "./dashboard_cards/Card1";
import Card2 from "./dashboard_cards/Card2";
import Card3 from "./dashboard_cards/Card3";
import Card4 from "./dashboard_cards/Card4";
import Card5 from "./dashboard_cards/Card5";
import Card6 from "./dashboard_cards/Card6";
import Card7 from "./dashboard_cards/Card7";

export default {
  components: {
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6,
    Card7
  },
  computed: {
    dashboardConfig() {
      return this.$store.state.dashboardConfig;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,500|Vollkorn&display=swap&subset=latin-ext");

.theme--light {
  &.application,
  &.v-sheet,
  &.v-card {
    color: #181b38;
  }
}

.headerline {
  border-bottom: 1px solid #707070;
  width: 600px;
  margin: 0 auto;
}

.text {
  &--font-primary {
    font-family: "Vollkorn", serif;
  }

  &--font-normal {
    font-family: "Montserrat", sans-serif;
  }

  &__headline {
    font-weight: normal;
    font-size: 60px;
    line-height: 84px;
  }

  &__card {
    &--big {
      font-weight: normal;
      font-size: 25px;
      line-height: 30px;
    }

    &--normal {
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
    }

    &--small {
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
    }

    &--x-small {
      font-weight: 300;
      font-size: 12px;
      line-height: 15px;
    }
  }
}

// fix for dark card with white button
.theme--dark.v-btn.white {
  color: #131634;
}

.v-card {
  border-radius: 10px;

  &__title {
    text-align: center;
  }

  .theme--light &__title {
    border-bottom: 1px solid #3b3e54;
  }

  .theme--dark &__title {
    border-bottom: 1px solid #ffffff;
  }

  .v-btn {
    border-radius: 5px;
  }
}
</style>
