<template>
  <v-app-bar color="primary" dark>
    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <v-icon icon="mdi-star-four-points" size="32" class="mr-2" />
          <span class="text-h5 font-weight-bold">KidsConnect</span>
        </v-col>
        <v-spacer />
        <v-col cols="6" sm="4">
          <v-text-field
            v-model="search"
            placeholder="Поиск"
            density="comfortable"
            variant="solo"
            flat
            hide-details
            prepend-inner-icon="mdi-magnify"
            bg-color="white"
            @input="updateSearch"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import { useActivityStore } from '../stores/activities'

const store = useActivityStore()
const search = ref('')

const updateSearch = () => {
  store.filters.search = search.value
}
</script>

<style scoped>
.v-app-bar {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>