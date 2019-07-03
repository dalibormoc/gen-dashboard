<template>
  <v-card>
    <v-card-title class="justify-center text--font-primary text__card--big">Your Items</v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex md3 sm6 pa-2 d-flex>
          <v-card flat>
            <v-img :src="require('../../assets/dashboard/model1.png')" contain></v-img>
          </v-card>
        </v-flex>
        <v-flex md3 sm6 xs6 pa-2 d-flex>
          <v-card flat>
            <v-img :src="require('../../assets/dashboard/model2.png')" contain></v-img>
          </v-card>
        </v-flex>
        <v-flex md3 sm6 xs6 pa-2 d-flex>
          <v-card flat>
            <v-img :src="require('../../assets/dashboard/model3.png')" contain></v-img>
          </v-card>
        </v-flex>
        <v-flex md3 sm6 xs6 pa-2 d-flex>
          <v-card flat>
            <v-img :src="require('../../assets/dashboard/model4.png')" contain></v-img>
          </v-card>
        </v-flex>
        <v-flex md3 sm6 xs6 pa-2 d-flex>
          <v-card flat>
            <v-img :src="require('../../assets/dashboard/model1.png')" contain></v-img>
          </v-card>
        </v-flex>
        <v-flex md3 sm6 xs6 pa-2 d-flex>
          <v-card flat>
            <v-img :src="require('../../assets/dashboard/model2.png')" contain></v-img>
          </v-card>
        </v-flex>
        <v-flex md3 sm6 xs6 pa-2 d-flex>
          <v-card flat>
            <v-img :src="require('../../assets/dashboard/model3.png')" contain></v-img>
          </v-card>
        </v-flex>
        <v-flex md3 sm6 xs6 pa-2 d-flex>
          <v-card flat>
            <v-img :src="require('../../assets/dashboard/model4.png')" contain></v-img>
          </v-card>
        </v-flex>
        <div class="text-xs-center fade">
          <v-btn color="white" large>VIEW ALL ITEMS</v-btn>
        </div>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.fade {
  position: absolute;
  bottom: 10px;
  left: 0;
  height: 130px;
  border-radius: 5px;
  width: 100%;
  background: -webkit-linear-gradient(rgba(255, 255, 255, 0) 0%, #fff 50%);
  background-image: -moz-linear-gradient(rgba(255, 255, 255, 0) 0%, #fff 50%);
  background-image: -o-linear-gradient(rgba(255, 255, 255, 0) 0%, #fff 50%);
  background-image: linear-gradient(rgba(255, 255, 255, 0) 0%, #fff 50%);
  background-image: -ms-linear-gradient(rgba(255, 255, 255, 0) 0%, #fff 50%);
}
</style>
