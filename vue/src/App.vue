<template>
  <h1 v-bind:title="currentDate">
    {{name}}
  </h1>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    data: function() {
      return {
        name: 'Hello World!',
        currentDate: new Date().toLocaleString()
      }
    },
  });
</script>

<style lang="scss">
$primary-color: white;
$bg: black;
h1 {
  color: $primary-color;
  background-color: $bg;
}
</style>