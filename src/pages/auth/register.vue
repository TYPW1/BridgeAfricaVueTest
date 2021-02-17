<template>
  <v-layout align-center  column>
    <h2 class="mb-8">Welcome to Bridge Africa</h2>

    <v-card min-width="400">
      <v-container>

        <v-layout column>
          <v-text-field
              label="Name"
              prepend-inner-icon="mdi-account"
              placeholder="First name and last name"
              required

          ></v-text-field>
          <v-text-field
              label="Email"
              prepend-inner-icon="mdi-email"
              placeholder="Email"
              required

          ></v-text-field>

          <v-text-field
              label="Password"
              placeholder="Password"
              type="password"
              prepend-inner-icon="mdi-lock"

              required

          ></v-text-field>

<v-checkbox label="I accept Bridge Africa terms and condition"></v-checkbox>
          <v-btn color="primary">Register</v-btn>

          <v-layout justify-end class="mt-4">
            <v-btn text class="grey--text text--darken-1" link to="/login">Login instead</v-btn>
          </v-layout>

        </v-layout>
      </v-container>

    </v-card>
  </v-layout>
</template>

<script>
export default {
name: "register",
  title: "Register to Bridge Cameroon",
  data:()=>({
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length >= 10 || 'Name must be at least 10 characters',
    ],

    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],

    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 6 || 'Name must be at least 6 characters',
    ],
  })
}
</script>

<style scoped>

</style>