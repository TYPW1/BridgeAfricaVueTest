<template>
<v-layout align-center  column>
  <h2 class="mb-8">Welcome back to Bridge Africa</h2>

  <v-card min-width="400" >
    <v-container>

      <v-layout column>
<v-form ref="form" v-model="valid" @submit.prevent="doLogin">
        <v-text-field
            label="Email"
            :rules="emailRules"
            v-model="email"
            prepend-inner-icon="mdi-email"
            placeholder="Email"
            required

        ></v-text-field>

        <v-text-field
            label="Password"
            v-model="password"
            :rules="passwordRules"
            placeholder="Password"
            type="password"
            prepend-inner-icon="mdi-lock"

            required

        ></v-text-field>


        <v-btn color="primary" class="my-4" type="submit">Login</v-btn>

        <v-layout justify-end class="mt-4">
          <v-btn text class="grey--text text--darken-1" link to="/register">Create an account</v-btn>
        </v-layout>
</v-form>

      </v-layout>
    </v-container>

  </v-card>
</v-layout>
</template>

<script>

import Swal from 'sweetalert2'
import sleep from "@/utils/sleep";
export default {
name: "LoginPage",
  title: "Login to Bridge Cameroon",
  data: ()=>({
    valid: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],

    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 6 || 'Name must be at least 6 characters',
    ],

    email: '',
    password: ''
  }),
  methods:{
  async doLogin() {
    if (!this.validate()) return
    console.log('Login')
    Swal.fire({
      titleText: "Please wait",
      allowOutsideClick: false
    }).then()
    Swal.showLoading()
    await sleep(1000)
    const user = this.$store.state.users.find(x => x.email === this.email && x.password === this.password)

    if (!user) {
      await Swal.update({
        title: 'Invalid credentials!',
        text: 'Your inputs did not match any of our records, check and try again',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    } else {
      this.$store.commit('setUser', user)
      localStorage.setItem("user", JSON.stringify(user))
      await this.$router.replace("/")
    }

    Swal.hideLoading()
    Swal.update({
      title: 'Bridge Africa',
      text: 'Welcome, our site uses local storage to store local information on your browser',
      icon: 'info',
      confirmButtonText: 'Okay'
    })
  },
    validate () {
      return this.$refs.form.validate()
    },
  }
}
</script>

<style scoped>

</style>