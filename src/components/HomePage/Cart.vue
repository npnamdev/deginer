<template>
  <div id="wp-content">
    <div class="box-head">
      <h3>Giỏ hàng</h3>
      <button class="btn btn-secondary" @click="$store.commit('deleteCart')">
        Delete All Cart
      </button>
    </div>
    <br />
    <hr />
    <ul id="main-cart">
      <li
        v-for="cartProduct in $store.state.cartProducts"
        :key="cartProduct.id"
      >
        <input
          class="form-check-input"
          type="checkbox"
          :value="cartProduct"
          v-model="$store.state.selectedProducts"
        />
        <span class="title">{{ cartProduct.name }}</span>
        <div class="number">
          <button @click="$store.commit('decreaseQuantity', cartProduct)">
            -
          </button>
          <span class="quantity">{{ cartProduct.quantity }}</span>
          <button @click="$store.commit('increaseQuantity', cartProduct)">
            +
          </button>
        </div>
        <div class="price">{{ cartProduct.price }}$</div>
        <span
          class="btn btn-danger mx-5"
          @click="$store.commit('removeFromCart', cartProduct)"
          >Delete</span
        >
      </li>
    </ul>
    <hr />
    <br />
    <div class="total-price">Tổng đơn hàng: {{ $store.getters.total }}$</div>
    <hr />
    <div>{{ $store.state.selectedProducts }}</div>
  </div>
</template>

