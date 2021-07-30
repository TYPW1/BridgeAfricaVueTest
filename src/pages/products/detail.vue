<template>
  <div>
    <h1>{{product.name}}</h1>

    <v-img
        height="300"
        :src="`https://business.bridgeafrica.info/assets/img/team/${(product.id % 4) +1}.png`"
    ></v-img>

    <v-layout justify-end class="mt-4" v-if="$store.state.isLoggedIn && product.user_id === $store.state.user.id">
      <v-btn color="black" class="white--text" @click="update">Update</v-btn>
      <v-btn color="error" class="ml-4" @click="deleteProduct">Delete</v-btn>
    </v-layout>

    <div class="mt-4">
      {{product.location}},  {{product.type}}
    </div>

    <div class="text-body-2 blue-grey--text mt-8">
      {{product.description}}
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import sleep from "@/utils/sleep";
export default {
name: "detail",
  title() {
    return `${this.product.name} - Bridge Africa`;
  },
  methods:{
  deleteProduct(){
    Swal.fire({
      titleText: "Do you really want to delete ?",
      text: "This action is irreversible",
      confirmButtonText: "delete",
      confirmButtonColor: "red",
      focusCancel: true,
      cancelButtonText : "cancel",
      showCancelButton: true,
      icon: "info",
      showLoaderOnConfirm: true,
    }).then((async value => {
      if (value.isConfirmed) {
        Swal.fire('Deleting').then()
        Swal.showLoading()

        await sleep(1000)
        this.$store.commit("deleteProduct", this.product.id)
        await this.$router.replace("/products")
        Swal.hideLoading()
        Swal.update({
          icon: "success",
          titleText:"Deleted"
        })
      }
    }))
  },

    update(){


        Swal.fire({
          allowOutsideClick: false,
          title: 'Update Product',
          html: `<input type="text" id="name" class="swal2-input" placeholder="Name" value="${this.product.name}">
<input type="text" id="location" class="swal2-input" placeholder="Location" value="${this.product.location}">
<input type="text" id="type" class="swal2-input" placeholder="Type" value="${this.product.type}">
 <textarea type="text" id="description" class="swal2-textarea" placeholder="Description" >${this.product.description}</textarea>
`,
          confirmButtonText: 'Update',
          cancelButtonText: 'Cancel',
          showCancelButton: true,
          focusConfirm: false,
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
            titleText: "Updating Product",
            text: "Please wait",
            didOpen: async () => {
              value.user_id = this.$store.state.user.id
              value.id = this.product.id
              Swal.showLoading()
              await sleep(1000)
              this.$store.commit("updateProduct", value)
              Swal.update(
                  {
                    icon: "success",
                    titleText: "Article updated",
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
  product(){
    return this.$store.state.products.find(x => x.id === parseInt(this.$route.params.id))
  }
  }
}
</script>

<style scoped>

</style>