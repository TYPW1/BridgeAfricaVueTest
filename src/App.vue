<template>
  <v-app>
    <v-app-bar
        app
        color="black"
        dark
    >
      <v-container class="d-flex">
      <router-link to="/" class="d-flex white--text text-decoration-none align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://business.bridgeafrica.info/assets/img/logo3.png"
            transition="scale-transition"
            width="40"
        />

        <h2 class="shrink mt-1 hidden-sm-and-down">
          Bridge Africa Test
        </h2>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn
          to="/products"
          link
          text
      >
        <span>Store</span>
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

  </v-app>
</template>

<script>



export default {
  name: 'Bridge Africa Test',
  title: "Bridge Africa Test",
  components: {

  },

  beforeCreate() {
      this.$store.commit("loadUser")
      this.$store.commit("loadProducts")
  },


  computed:{
    isLoggedin()  {
      return this.$store.state.isLoggedIn;
    }
  }
};
</script>
