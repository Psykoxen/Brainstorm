<template class="flex items-center">
  <div
    class="summary w-3/4 lg:w-1/3 mx-auto grid grid-cols-2 grid-rows-4 pt-10 gap-5"
  >
    <a
      href="/podcasts"
      class="flex flex-col gap-8 justify-end row-start-1 row-end-3 bg-chart-blue-300 rounded-lg shadow-md p-4"
    >
      <img src="../assets/svg/podcast.svg" class="h-80" alt="Podcast SVG" />
      <p class="text-white lg:text-3xl text-xl font-bold">Podcast récent</p>
    </a>
    <div class="bg-chart-pink-500 rounded-lg shadow-md p-4">
      <p class="text-white text-lg">Coming soon ..</p>
    </div>
    <div class="bg-chart-brown-400 rounded-lg shadow-md p-4">
      <p class="text-white text-lg">Coming soon ..</p>
    </div>
    <a
      href="/decrypt"
      class="row-start-2 row-end-4 bg-chart-mint-200 rounded-lg shadow-md p-4"
    >
      <p class="text-white lg:text-3xl text-xl font-bold">Dernier decryptage</p>
      <img
        src="../assets/svg/decryptage.svg"
        class="h-80"
        alt="Decryptage SVG"
      />
    </a>
    <div
      class="col-start-1 col-end-3 bg-chart-purple-800 rounded-lg shadow-md p-4 flex flex-column w-full justify-around items-center"
    >
      <p class="text-white lg:text-3xl text-xl font-bold">Portraits</p>
      <img
        src="../assets/svg/portrait.svg"
        class="h-60 m-1"
        alt="Portrait SVG"
      />
    </div>
  </div>
</template>
