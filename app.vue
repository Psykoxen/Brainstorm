<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style>
@import url("assets/css/main.css");
* {
  font-family: "Poppins", sans-serif;
}
html {
  background-color: white;
}
</style>
