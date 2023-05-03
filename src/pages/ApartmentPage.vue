<template>
  <main class="apartment-page">
    <ContainerList>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <ReviewsItems :reviews="reviewsList" />
        </div>
      </div>
    </ContainerList>
  </main>
</template>

<script>
import ContainerList from "@/components/shared/ContainerList.vue";
import apartments from "../components/apartment/apartments";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "@/components/apartment/ApartmentsOwner.vue";
import ReviewsItems from "../components/reviews";
import reviewsList from "../components/reviews/reviews.json";

export default {
  name: "ApartmentPage",
  components: {
    ContainerList,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsItems,
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
