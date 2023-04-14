<template>
  <ContainerList>
    <form class="form" @submit.prevent="handleSubmit">
      <CustomSelect :items="cities" v-model="city" class="form__select" />
      <CustomInput v-model="price" placeholder="Ціна, від" />
      <SubmitButton class="form__submit" type="submit">
        Подбор жилья
      </SubmitButton>
    </form>
  </ContainerList>
</template>

<script>
import ContainerList from "../shared/ContainerList.vue";
import CustomInput from "../shared/CustomInput.vue";
import CustomSelect from "../shared/CustomSelect.vue";
import SubmitButton from "../SubmitButton.vue";

export default {
  components: { CustomSelect, CustomInput, SubmitButton, ContainerList },
  name: "ApartmentFilterForm",
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "Місто", selected: true },
        "Kyiv",
        "Odessa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
