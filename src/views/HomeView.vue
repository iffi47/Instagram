<template>
  <v-container class="grey-lighten-5">
    <v-row no-gutters="true">
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
        <v-card class="mx-auto my-4" max-width="500" position="fixed">
          <template v-slot:prepend>
            <v-avatar
              size="60"
              color="grey-darken-3"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-avatar>
          </template>
          <v-card-title> Iftikhar Ahmad </v-card-title>

          <v-card-subtitle>Lahore, Punjab</v-card-subtitle>
        </v-card>
      </v-col>
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
