<template>
  <h1>Coll API</h1>
  <p>{{ user }}</p>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async getUser() {
      try {
        const response = await axios.get(
          "https://api-hnva.onrender.com/v1/api/users"
        );
        this.user = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.getUser();
  },
};
</script>
