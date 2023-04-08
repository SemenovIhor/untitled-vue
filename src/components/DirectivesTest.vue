<template>
  <div v-if="isVisible">
    <h1 s-show="false">Title Directive</h1>
    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === 'banana'" :key="fruit">{{ fruit }}</li>
      </template>
    </ul>
    <ul>
      <li v-for="(car, key) in cars" :key="key">{{ key }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectiveTest",
  data() {
    return {
      isVisible: true,
      fruits: ["kiwi", "banana", "apple"],
      cars: {
        audi: {
          color: "red",
        },
        bmw: {
          color: "black",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
