<template>
  <div id="app">
    <ApartmentsList :items="apartments" />
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";

export default {
  name: "App",
  data() {
    return {
      apartments,
      apartment: {
        id: "dwd23rew",
        title: "wefwegrgergr",
        descr: "ewgegergrg",
        price: 2032,
        rating: 4.5,
        location: {
          city: "Kiyv",
        },
        owner: {
          name: "Ellen",
          phone: "123-234-2345",
          email: "rut@mail.com",
        },
      },
    };
  },
  components: { ApartmentsList },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
