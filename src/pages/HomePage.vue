<template>
  <main class="homepage">
    <ContainerList>
      <ApartmentFilterForm class="apartments-filter" @submit="filter" />
    </ContainerList>
    <ContainerList>
      <p v-if="!filteredApartments.length">Not found</p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgUrl="apartment.imgUrl"
            :price="apartment.price"
          />
        </template>
      </ApartmentsList>
    </ContainerList>
  </main>
</template>

<script>
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";
import apartments from "../components/apartment/apartments";
import ContainerList from "../components/shared/ContainerList.vue";
// import { getApartmentsList } from "../services/apartments.service";

export default {
  name: "HomePage",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    ContainerList,
  },
  data() {
    return {
      text: "",
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  // async created() {
  //   try {
  //     const { data } = await getApartmentsList();
  //     this.apartments = data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  methods: {
    filter({ city, price }) {
      if (city !== undefined) {
        this.filters.city = city;
      }
      if (price !== undefined) {
        this.filters.price = price;
      }
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
