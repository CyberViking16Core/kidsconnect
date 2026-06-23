<template>
  <v-container fluid class="pa-4" style="background: #F4F4F5; min-height: 100vh;">
    <v-btn variant="text" color="primary" @click="$router.back()" class="mb-4">
      <v-icon left>mdi-arrow-left</v-icon> Назад
    </v-btn>

    <v-card v-if="activity" elevation="3" style="border-radius: 16px;">
      <!-- Верхний блок: фото + информация -->
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-img :src="activity.image" height="300" cover class="rounded-l" style="border-radius: 16px 0 0 16px;" />
        </v-col>
        <v-col cols="12" md="6" class="pa-4">
          <div class="d-flex flex-wrap justify-space-between align-start">
            <div>
              <div class="text-h4 font-weight-bold" style="color: #1A1A1A;">{{ activity.title }}</div>
              <div class="d-flex mt-2">
                <v-chip variant="outlined" color="primary" size="small" class="mr-2">Набор открыт</v-chip>
                <v-chip v-if="activity.price === 'Бесплатно'" color="secondary" size="small" text-color="white">Бесплатно</v-chip>
                <v-chip v-else color="secondary" size="small" text-color="white">{{ activity.priceValue }} руб.</v-chip>
              </div>
            </div>
            <v-btn color="primary" large @click="alert('Запись!')">Записаться</v-btn>
          </div>

          <v-divider class="my-3" />

          <div class="d-flex flex-wrap">
            <div class="mr-4"><v-icon icon="mdi-account" color="primary" /> Возраст: {{ activity.age }}</div>
            <div class="mr-4"><v-icon icon="mdi-map-marker" color="primary" /> {{ activity.address }}</div>
            <div><v-icon icon="mdi-domain" color="primary" /> {{ activity.place }}</div>
          </div>
        </v-col>
      </v-row>

      <!-- Блоки информации -->
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="pa-3">
              <h4 class="text-h6 font-weight-bold" style="color: #632636;">ГРУППЫ</h4>
              <div><v-icon icon="mdi-school" color="primary" /> Этап подготовки: базовый</div>
              <div><v-icon icon="mdi-account-tie" color="primary" /> Тренер: {{ activity.trainer }}</div>
              <div><v-icon icon="mdi-account-group" color="primary" /> Места: {{ activity.spots.taken }} из {{ activity.spots.total }}</div>
              <div><v-icon icon="mdi-calendar-month" color="primary" /> Срок: {{ activity.duration }}</div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="pa-3">
              <h4 class="text-h6 font-weight-bold" style="color: #632636;">РАСПИСАНИЕ ЗАНЯТИЙ</h4>
              <div class="d-flex flex-wrap">
                <span class="mr-3 font-weight-bold">{{ activity.schedule.join(', ') }}</span>
                <v-chip v-for="slot in activity.timeSlots" :key="slot" color="accent" class="mr-1 mb-1">{{ slot }}</v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- ОПИСАНИЕ -->
        <v-card variant="outlined" class="pa-3 mt-3">
          <h4 class="text-h6 font-weight-bold" style="color: #632636;">ОПИСАНИЕ</h4>
          <p class="text-body-1">{{ activity.description }}</p>
        </v-card>

        <!-- СОДЕРЖАНИЕ ПРОГРАММЫ (аккордеон) -->
        <v-card variant="outlined" class="pa-3 mt-3">
          <h4 class="text-h6 font-weight-bold" style="color: #632636;">СОДЕРЖАНИЕ ПРОГРАММЫ</h4>
          <v-expansion-panels variant="accordion" class="mt-2">
            <v-expansion-panel
              v-for="level in activity.levels"
              :key="level.name"
              :title="level.name"
            >
              <v-expansion-panel-text>
                <v-list density="compact">
                  <v-list-item v-for="subj in level.subjects" :key="subj" :title="subj" />
                </v-list>
                <div class="text-caption">Часов: {{ level.hours }}</div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-card-text>
    </v-card>

    <v-alert v-else type="error" class="mt-4">Кружок не найден</v-alert>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useActivityStore } from '../stores/activities'

const route = useRoute()
const store = useActivityStore()
const activity = computed(() => store.getActivityById(Number(route.params.id)))
</script>