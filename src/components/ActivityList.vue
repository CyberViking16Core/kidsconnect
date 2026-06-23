<template>
  <div>
    <div v-for="(act, index) in activities" :key="act.id">
      <div v-if="index === 0 || act.category !== activities[index-1].category" class="text-h5 font-weight-bold mt-4 mb-2" style="color: #632636;">
        {{ act.category }}
      </div>
      <ActivityCard :activity="act" />
    </div>
    <div v-if="!activities.length" class="text-center pa-8">
      <v-icon icon="mdi-emoticon-sad" size="48" color="grey" />
      <p class="text-h6 grey--text">Ничего не найдено</p>
    </div>
  </div>
</template>

<script setup>
import ActivityCard from './ActivityCard.vue'
import { useActivityStore } from '../stores/activities'
import { computed } from 'vue'

const store = useActivityStore()
const activities = computed(() => store.filteredActivities)
</script>