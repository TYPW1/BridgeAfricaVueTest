<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark

    >
      <v-container class="d-flex">
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://business.bridgeafrica.info/assets/img/logo3.png"
            transition="scale-transition"
            width="40"
        />

        <h2 class="shrink mt-1 hidden-sm-and-down">
          Bridge Africa
        </h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          to="/products"
          link
          text
      >
        <span>Marketplace</span>
      </v-btn>

      <v-btn
          v-if="!isLoggedin"
         to="/login"
         link

          text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn
          v-else
          @click="$store.commit('logOut')"
          text
      >
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      </v-container>
    </v-app-bar>

    <v-main >
      <v-container>
        <router-view></router-view>
      </v-container>

    </v-main>

    <v-footer
        dark
        padless
    >
      <v-card
          flat
          tile
          class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Bridge Africa</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>



export default {
  name: 'App',
  title: "Hiro Title Page",
  components: {

  },

  beforeCreate() {
      this.$store.commit("loadUser")
      this.$store.commit("loadProducts")
  },

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),

  computed:{
    isLoggedin()  {
      return this.$store.state.isLoggedIn;
    }
  }
};
</script>
