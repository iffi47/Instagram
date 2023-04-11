<template>
  <v-container class="grey-lighten-5">
    <v-row no-gutters>
      <v-col cols="8"
        ><v-card
          class="mx-auto my-4"
          max-width="500"
          elevation="2"
          v-for="post in post"
          :key="post.index"
        >
          <template v-slot:prepend>
            <v-avatar
              color="grey-darken-3"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-avatar>
          </template>
          <v-card-title> Iftikhar Ahmad </v-card-title>

          <v-card-subtitle>{{ post.location }}</v-card-subtitle>
          <v-spacer class="mx-4 mb-1"></v-spacer>
          <v-img :src="post.imageUrl" height="200px" cover></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              size="small"
              color="red-accent-3"
              variant="text"
              icon="mdi-heart-outline"
            ></v-btn>
            <v-btn size="small" color="grey-10" variant="text" icon="mdi-bookmark-outline"></v-btn>
            <v-btn
              size="small"
              color="blue-darken-1"
              variant="text"
              icon="mdi-share-variant"
            ></v-btn>
          </v-card-actions>
          <v-spacer class="mx-4 mb-1"></v-spacer>
          <v-card-title>Lorem, ipsum dolor sit </v-card-title>
          <v-card-text class="text-caption">{{ newDate(post.date) }}</v-card-text>
          <v-card-text
            >Cards are entry points to more detailed information. To keep things concise, ensure to
            limit the number of actions the user can take.</v-card-text
          >
        </v-card></v-col
      >
      <v-col cols="4">
        <v-card
          class="mx-auto my-4"
          color="#26c6da"
          theme="dark"
          max-width="400"
          prepend-icon="mdi-twitter"
          title="Twitter"
        >
          <template v-slot:prepend>
            <v-icon size="x-large"></v-icon>
          </template>

          <v-card-text class="text-h5 py-2">
            "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases
            are type invalid as well."
          </v-card-text>

          <v-card-actions>
            <v-list-item class="w-100">
              <template v-slot:prepend>
                <v-avatar
                  color="grey-darken-3"
                  image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-avatar>
              </template>

              <v-list-item-title>Evan You</v-list-item-title>

              <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

              <template v-slot:append>
                <div class="justify-self-end">
                  <v-icon class="me-1" icon="mdi-heart"></v-icon>
                  <span class="subheading me-2">256</span>
                  <span class="me-1">·</span>
                  <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                  <span class="subheading">45</span>
                </div>
              </template>
            </v-list-item>
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      post: [
        {
          id: 1,
          caption: 'Nature Scenery',
          date: Date.now(),
          location: 'Lahore, Punjab',
          imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        },
        {
          id: 2,
          caption: 'Nature Scenery',
          date: Date.now(),
          location: 'Lahore, Punjab',
          imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        },
        {
          id: 3,
          caption: 'Nature Scenery',
          date: Date.now(),
          location: 'Lahore, Punjab',
          imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        },
        {
          id: 4,
          caption: 'Nature Scenery',
          date: Date.now(),
          location: 'Lahore, Punjab',
          imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        },
        {
          id: 5,
          caption: 'Nature Scenery',
          date: Date.now(),
          location: 'Lahore, Punjab',
          imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        },
        {
          id: 6,
          caption: 'Nature Scenery',
          date: Date.now(),
          location: 'Lahore, Punjab',
          imageUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        }
      ]
    }
  },
  methods: {
    newDate(time) {
      let date = new Date(time)
      return date.toLocaleDateString()
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
