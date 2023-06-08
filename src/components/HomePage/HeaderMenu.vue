<template>
  <div id="header">
    <nav>
      <router-link to="/" class="box-logo">
        <img :src="imageTextPath" />
      </router-link>
      <ul id="menu">
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/product"> Product </router-link>
        </li>
      </ul>
      <router-link to="/cart" class="box-cart">
        <box-icon name="cart-alt"></box-icon>({{
          $store.state.cartProducts.length
        }})
      </router-link>
    </nav>
  </div>
</template>

<script>
import imageText from "../../assets/images/logo_black.png";

export default {
  data() {
    return {
      imageTextPath: imageText,
    };
  },
};
</script>

