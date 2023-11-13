<template>
  <div class="flex items-center flex-col">
    <p class="text-chart-purple-800 text-3xl m-10 font-semibold">
      {{ podcastName }}
    </p>
    <img class="h-56" id="cover-image" :src="coverImageUrl" alt="Cover Image" />
    <UTable
      class="lg:w-2/4 w-2/3"
      v-model:sort="sort"
      :columns="columns"
      :rows="episodesList"
      :loading-state="{
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Chargement...',
      }"
    >
      <template #actions-data="{ row }">
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-play-solid"
          @click="handlePlayClick(row)"
        />
      </template>
    </UTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const config = useRuntimeConfig();

const sort = ref({
  column: "release_date",
  direction: "desc",
});

const handlePlayClick = (row) => {
  const href = row.external_urls.spotify;
  if (href) {
    window.open(href, "_blank");
  }
};

const columns = [
  {
    key: "name",
    label: "Titre",
    sortable: true,
  },
  {
    key: "release_date",
    label: "Date de sortie",
    sortable: true,
    direction: "desc",
  },
  {
    key: "actions",
  },
];

const episodesList = ref([]);
const podcastName = ref("");
const coverImageUrl = ref("");

const _getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

const _getShow = async (token) => {
  try {
    const result = await fetch(
      "https://api.spotify.com/v1/shows/4lSsudgJrssq6PXGpEbaWs",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();
    console.log("Data from _getShow:", data);

    podcastName.value = data.name;
    coverImageUrl.value = data.images[0].url;

    return data;
  } catch (error) {
    console.error("Error in _getShow:", error);
    return null;
  }
};

const _getEpisodes = async (show) => {
  const episodes = await show.episodes;
  episodes.items.forEach((element) => {
    console.log("element:", element);
    episodesList.value.push(element);
  });
};

const fetchData = async () => {
  try {
    const token = await _getToken();
    const show = await _getShow(token);
    await _getEpisodes(show);
    console.log("Data loaded successfully");
  } catch (error) {
    console.error("Error in fetchData:", error);
  }
};
const clientId = config.public.clientId;
const clientSecret = config.public.clientSecret;

onMounted(fetchData);
</script>
