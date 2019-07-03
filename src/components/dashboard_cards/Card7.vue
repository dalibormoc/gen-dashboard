<template>
  <v-card>
    <v-card-title class="justify-center text--font-primary text__card--big">Past Genster Boxes</v-card-title>
    <v-card-text class="ma-4">
      <v-timeline dense>
        <v-timeline-item small>
          <template v-slot:icon>
            <v-avatar size="35">
              <img src="./../../assets/dashboard/timeline.svg" />
            </v-avatar>
          </template>
          <span class="text__card--small">
            <strong class="font-weight-medium">GenBx-001432</strong>
          </span>
          <div class="text__card--small">únor, 2019</div>
        </v-timeline-item>

        <v-timeline-item small>
          <template v-slot:icon>
            <v-avatar size="35">
              <img src="./../../assets/dashboard/timeline.svg" />
            </v-avatar>
          </template>
          <span class="text__card--small">
            <strong class="font-weight-medium">GenBx-001432</strong>
          </span>
          <div class="text__card--small">prosinec, 2018</div>
        </v-timeline-item>

        <v-timeline-item small>
          <template v-slot:icon>
            <v-avatar size="35">
              <img src="./../../assets/dashboard/timeline.svg" />
            </v-avatar>
          </template>
          <span class="text__card--small">
            <strong class="font-weight-medium">GenBx-001432</strong>
          </span>
          <div class="text__card--small">rijen, 2018</div>
        </v-timeline-item>

        <v-timeline-item small>
          <template v-slot:icon>
            <v-avatar size="35">
              <img src="./../../assets/dashboard/timeline.svg" />
            </v-avatar>
          </template>
          <span class="text__card--small">
            <strong class="font-weight-medium">GenBx-001432</strong>
          </span>
          <div class="text__card--small">únor, 2018</div>
        </v-timeline-item>
      </v-timeline>
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
