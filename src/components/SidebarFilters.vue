<template>
  <v-card class="pa-4" elevation="2" style="border-radius: 12px;">
    <h3 class="text-h6 font-weight-bold mb-4" style="color: #632636;">Фильтры</h3>

    <!-- Возраст -->
    <v-select
      v-model="store.filters.age"
      :items="store.ageOptions"
      label="Возраст"
      variant="outlined"
      density="comfortable"
      hide-details
      class="mb-4"
    />

    <!-- Пол -->
    <v-label class="text-body-2 font-weight-medium mb-2">Пол</v-label>
    <v-checkbox
      v-model="store.filters.gender"
      label="Мужской"
      value="male"
      hide-details
      color="primary"
    />
    <v-checkbox
      v-model="store.filters.gender"
      label="Женский"
      value="female"
      hide-details
      color="primary"
      class="mb-4"
    />

    <!-- Категории аккордеоном -->
    <v-label class="text-body-2 font-weight-medium mb-2">Категории</v-label>
    <v-expansion-panels variant="accordion" class="mb-2">
      <v-expansion-panel
        v-for="cat in categories"
        :key="cat.name"
        :title="cat.name"
        density="compact"
      >
        <v-expansion-panel-text>
          <v-list density="compact">
            <v-list-item
              v-for="sub in cat.subcategories"
              :key="sub"
              :title="sub"
              @click="selectCategory(sub)"
              style="cursor: pointer;"
            />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Тип цены (табы) -->
    <v-btn-toggle
      v-model="priceType"
      color="primary"
      density="compact"
      class="mt-2"
      @update:model-value="updatePriceType"
    >
      <v-btn value="all">Все</v-btn>
      <v-btn value="free">Бесплатные</v-btn>
      <v-btn value="paid">Платные</v-btn>
    </v-btn-toggle>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useActivityStore } from '../stores/activities'

const store = useActivityStore()
const priceType = ref('all')

const categories = computed(() => {
  const catMap = new Map()
  store.activities.forEach(a => {
    if (!catMap.has(a.category)) {
      catMap.set(a.category, new Set())
    }
    catMap.get(a.category).add(a.subcategory)
  })
  return Array.from(catMap.entries()).map(([name, subs]) => ({
    name,
    subcategories: Array.from(subs),
  }))
})

const selectCategory = (sub) => {
  alert(`Вы выбрали категорию: ${sub}`)
}

const updatePriceType = (val) => {
  store.filters.priceType = val
}
</script>

<style scoped>
.v-checkbox :deep(.v-selection-control) {
  min-height: 32px;
}
</style>