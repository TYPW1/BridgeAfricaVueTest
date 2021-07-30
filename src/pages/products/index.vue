<template>
  <div>
    <h1>Products</h1>
    <p class="text-body-2 blue-grey--text text--darken-1">These are the products</p>
    <v-row justify="end">
      <v-btn color="white" class="black--text" @click="addNew" v-if="$store.state.isLoggedIn">New Product</v-btn>
    </v-row>

    <div class="mt-4">
      <v-row align="start" align-content="start">
        <v-col lg="3" class="hidden-md-and-down">


        </v-col>
        <v-col class="px-0">

            <v-row >
              <v-col v-for="product in pageProduct" cols="12" md="4" :key="product.id">
                <v-card

                    class="mx-auto"
                    max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img
                      height="250"
                        :src="`src/assets/bridge-logo.png`"
                  ></v-img>

                  <v-card-title class="one-line"><router-link :to="`/products/${product.id}`" class="text-decoration-none">{{product.name}}</router-link> </v-card-title>

                  <v-card-text>


                    <div class="mb-4 subtitle-1 one-line">
                      • {{ product.location }}, {{ product.type }}
                    </div>

                    <div class="one-line">{{product.description}}</div>
                  </v-card-text>

                </v-card>
              </v-col>
            </v-row>

          <v-row class="my-4"  justify="center">
           <v-col>
             <v-pagination
                 color="primary"
                 circle
                 v-model="page"
                 :length="pages"
                 :total-visible="7"
             ></v-pagination>
           </v-col>
          </v-row>

        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import sleep from "@/utils/sleep";

export default {
name: "index",
  title: "Our products - Bridge Cameroon",
  data: () => ({
    page: 1,
    selectedItem: 1,
    items: [
      { text: 'Agriculture', icon: 'mdi-clock' },

    ],
  }),

  methods:{
  addNew(){

    Swal.fire({
      allowOutsideClick: false,
      title: 'New Product',
      html: `<input type="text" id="name" class="swal2-input" placeholder="Name">
<input type="text" id="location" class="swal2-input" placeholder="Location">
<input type="text" id="type" class="swal2-input" placeholder="Type">
 <textarea type="text" id="description" class="swal2-textarea" placeholder="Description">
`,
      confirmButtonText: 'Create',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
      focusCancel: true,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector('#name').value
        const location = Swal.getPopup().querySelector('#location').value
        const type = Swal.getPopup().querySelector('#type').value
        const description = Swal.getPopup().querySelector('#description').value

        if (!name || !location || !type || !description) {
          Swal.showValidationMessage(`Please all the fields are required`)
        }
        return {name, location, type, description }
      }
    }).then(({value, ...rest}) => {
      if (rest.isDismissed)return
      Swal.fire({
        titleText: "Adding Product",
        text: "Please wait",
        didOpen: async () => {
          value.user_id = this.$store.state.user.id
          Swal.showLoading()
          await sleep(1000)
          this.$store.commit("addProduct", value)
          Swal.update(
              {
                icon: "success",
                titleText: "Article added",
                text: undefined,
                cancelButtonText: "Okay",
                //showCancelButton: true,
                confirmButtonText: "Okay",
              }
          )
          Swal.hideLoading()
        }
      })
    })


  }
  },

  computed:{
    products(){
      const p = [...this.$store.state.products]
      return p.reverse()
    },
    pageProduct(){
      return this.products.slice((this.page-1)*6, this.page*6)
    },
    pages(){
      return Math.ceil(this.products.length / 6)
    }
  }
}
</script>

<style scoped>

</style>