<script setup>
const items = [
  {
    label: "Menu",
    content: "This is the content shown for Tab1",
  },
  {
    label: "Podcasts",
    content: "And, this is the content for Tab2",
  },
  {
    label: "Decrypt",
    content: "Finally, this is the content for Tab3",
  },
];
</script>

<template>
  <UTabs color="white" :items="items" class="w-1/3 m-auto">
    <template #default="{ item, index, selected }">
      <span class="">{{ item.label }}</span>
    </template>
  </UTabs>
</template>
