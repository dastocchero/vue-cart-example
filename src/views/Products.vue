<template>
  <div class="products">
      <div v-if="User">
        <p>Hi {{User}}</p>
      </div>
      <div>
          <form @submit.prevent="submit">
            <div>
              <label for="title">Title:</label>
              <input type="text" name="title" v-model="form.title">
            </div>
            <div>
              <label for="price">Price:</label>
              <input type="number" name="price" v-model="form.price">
            </div>
            <button type="submit"> Submit</button>
          </form>
      </div>
      <div class="products" v-if="Products">
        <ul>
          <li v-for="product in Products" :key="product.id">
            <div id="product-div">
              <p>{{product.title}}</p>
              <p>{{product.price}}</p>              
            </div>
            <button v-on:click="addToCart(product)"> Add to Cart</button>
          </li>
        </ul>
      </div>
      <div v-else>
        Oh no!!! We have no products
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Products',
  components: {
    
  },
  data() {
    return {
      form: {
        title: '',
        price: '',
      }
    };
  },
  created: function () {
    // a function to call getproducts action
    this.GetProducts()
  },
  computed: {
    ...mapGetters({Products: "StateProducts", User: "StateUser"}),
  },
  methods: {
    ...mapActions(["CreateProduct", "GetProducts", "addToCart"]),
    async submit() {
      try {
        await this.CreateProduct(this.form);
      } catch (error) {
        throw "Sorry you can't add a product now!"
      }
    },
     
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
  margin: 10px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  width:60%;
  margin: 15px;
  border: 0;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
}
textarea {
  width:75%;
  resize: vertical;
  padding:15px;
  border-radius:15px;
  border:0;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  height:150px;
  margin: 15px;
}
ul {
  list-style: none;
}
#product-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;;
}
</style>
