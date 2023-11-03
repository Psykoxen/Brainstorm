<script setup>
const items = [
  {
    label: "Home",
  },
  {
    label: "Podcasts",
  },
  {
    label: "Decrypt",
  },
];

function onChange(index) {
  const item = items[index];

  alert(`${item.label} was clicked!`);
}
</script>

<template>
  <UTabs color="primary" :items="items" class="w-1/3 m-auto" @change="onChange">
    <template #default="{ item, index, selected }">
      <span class="">{{ item.label }}</span>
    </template>
  </UTabs>
</template>
