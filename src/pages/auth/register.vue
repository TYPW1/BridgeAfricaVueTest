<template>
  <v-layout align-center  column>
    <h2 class="mb-8">Welcome to Bridge Africa</h2>

    <v-card min-width="400" >
      <v-container>

        <v-layout column>
          <v-form ref="form" v-model="valid" @submit.prevent="doLogin">
            <v-text-field
                label="Name"
                :rules="nameRules"
                v-model="name"
                prepend-inner-icon="mdi-account"
                placeholder="Name"
                required

            ></v-text-field>

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

            <v-checkbox label="I accept Bridge Africa terms" :rules="termRules" v-model="term"></v-checkbox>
            <v-btn color="primary" class="my-4" type="submit">Register</v-btn>

            <v-layout justify-end class="mt-4">
              <v-btn text class="grey--text text--darken-1" link to="/login">Login instead</v-btn>
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
  name: "Register Page",
  title: "Join Bridge Cameroon",
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

    nameRules: [
      v => !!v || 'Name is required',
    ],

    termRules: [
      v => !!v || 'Term must be accepted',
    ],

    email: '',
    password: '',
    name: '',
    term: false,
  }),
  methods:{
    async doLogin() {
      if (!this.validate()) return
      console.log('Register')
      Swal.fire({
        allowOutsideClick: false
      }).then()
      Swal.showLoading()
      await sleep(1000)
      this.$store.commit("createUser", {email: this.email, name: this.name, password: this.password})



        await this.$router.replace("/")


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