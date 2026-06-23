<template>
  <v-container fluid class="pa-4" style="background: #F4F4F5; min-height: 100vh;">
    <v-row>
      <!-- Левая часть (основной список) -->
      <v-col cols="12" md="8">
        <ActivityList />
      </v-col>

      <!-- Правая часть (фильтры) -->
      <v-col cols="12" md="4">
        <SidebarFilters />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ActivityList from '../components/ActivityList.vue'
import SidebarFilters from '../components/SidebarFilters.vue'
</script>