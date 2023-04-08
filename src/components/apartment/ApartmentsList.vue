<template>
  <ContainerList>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgUrl="imgUrl"
        :price="price"
        class="apartments-list__item"
      />
    </div>
  </ContainerList>
</template>

<script>
import ContainerList from "../shared/ContainerList.vue";
import ApartmentsItem from "./ApartmentsItem.vue";

export default {
  name: "ApartmentsList",
  components: { ApartmentsItem, ContainerList },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  &__item {
    margin-bottom: 30px;
  }
}
</style>
