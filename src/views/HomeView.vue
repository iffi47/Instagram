<template>
  <v-container class="grey-lighten-5">
    <v-card class="mx-auto" max-width="500">
      <template v-slot:prepend>
        <v-avatar
          color="grey-darken-3"
          image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-avatar>
      </template>
      <v-card-title> Iftikhar Ahmad </v-card-title>

      <v-card-subtitle>Lahore, Punjab</v-card-subtitle>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You
            won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then
            we'll go with that data file! Hey, you add a one and two zeros to that or we walk!
            You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script>
// Components

export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
<style>
.constrain {
  max-width: 975px;
  margin: 0 auto;
}
</style>
