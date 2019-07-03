<template>
  <v-card>
    <v-card-title class="justify-center text--font-primary text__card--big">Your Genster Box</v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex md6 xs12 class="text-xs-center pa-3 pt-4">
          <v-flex xs12>
            <v-avatar color="#DCFFE2" size="122">
              <img src="./../../assets/dashboard/shippedbox.svg" />
            </v-avatar>
          </v-flex>
          <p class="text__card--normal">GenBx-001324</p>
          <p class="text__card--small">
            <strong class="font-weight-medium">Shipping to:</strong>
            <br />Vlastina 11,
            <br />Praha 6, Liboc
            <br />16100
          </p>
        </v-flex>
        <v-flex md6 xs12 class="pa-3 pt-4">
          <v-timeline dense>
            <v-timeline-item small>
              <template v-slot:icon>
                <v-avatar size="35" color="white" tile>
                  <img src="./../../assets/dashboard/shipped.svg" />
                </v-avatar>
              </template>
              <span class="text__card--small">
                <strong class="font-weight-medium">Your box is shipped</strong>
              </span>
              <div class="text__card--small">12 únor, 2019</div>
            </v-timeline-item>

            <v-timeline-item small>
              <template v-slot:icon>
                <v-avatar size="35" color="white" tile>
                  <img src="./../../assets/dashboard/packed.svg" />
                </v-avatar>
              </template>
              <span class="text__card--small">
                <strong class="font-weight-medium">Your box is packed</strong>
              </span>
              <div class="text__card--small">12 únor, 2019</div>
            </v-timeline-item>

            <v-timeline-item small>
              <template v-slot:icon>
                <v-avatar size="35" color="white" tile>
                  <img src="./../../assets/dashboard/shopped.svg" />
                </v-avatar>
              </template>
              <span class="text__card--small">
                <strong class="font-weight-medium">Your box is shopped</strong>
              </span>
              <div class="text__card--small">9 únor, 2019</div>
            </v-timeline-item>

            <v-timeline-item small>
              <template v-slot:icon>
                <v-avatar size="35" color="white" tile>
                  <img src="./../../assets/dashboard/started.svg" />
                </v-avatar>
              </template>
              <span class="text__card--small">
                <strong class="font-weight-medium">We started your box</strong>
              </span>
              <div class="text__card--small">3 únor, 2019</div>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-timeline {
  padding-top: 0px;

  &:before {
    top: 10px;
    height: calc(100% - 35px);
  }

  &-item:last-of-type {
    padding-bottom: 0px;
  }
}
</style>
