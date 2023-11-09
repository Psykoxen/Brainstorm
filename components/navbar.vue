<script setup>
const items = [
  {
    label: "Menu",
    route: "/",
  },
  {
    label: "Podcasts",
    route: "/podcasts",
  },
  {
    label: "Decrypt",
    route: "/decrypt",
  },
];

function onChange(index) {
  const item = items[index];
  navigateTo(item.route);
}
</script>

<template>
  <UTabs
    color="white"
    :items="items"
    @change="onChange"
    class="lg:w-1/3 w-2/3 m-auto"
  />
</template>
