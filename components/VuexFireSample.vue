<template>
  <div class="vuexfire-sample">
    <h2>{{ title }}</h2>
    <div v-for="item in items" :key="item.id">
      <li>{{ item.id }}</li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
.vuexfire-sample {
  margin: 0 auto;
  padding: 30px;
  border: 1px solid gray;
  text-align: left;
}
h2 {
  padding: 20px;
}
</style>

