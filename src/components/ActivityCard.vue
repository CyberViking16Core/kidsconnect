<template>
  <v-card class="mb-4" elevation="3" style="border-radius: 12px; border-top: 4px solid #632636;">
    <v-row no-gutters>
      <!-- Изображение -->
      <v-col cols="12" sm="4" md="3">
        <v-img
          :src="activity.image"
          height="180"
          cover
          class="rounded-l"
          style="border-radius: 12px 0 0 12px;"
        />
      </v-col>

      <!-- Основная информация -->
      <v-col cols="12" sm="8" md="9">
        <v-card-item class="pa-4">
          <div class="d-flex flex-wrap align-start justify-space-between">
            <div style="flex: 1;">
              <!-- Название -->
              <div class="text-h6 font-weight-bold" style="color: #1A1A1A;">
                {{ activity.title }}
              </div>

              <!-- Хэштег -->
              <div class="text-body-2" style="color: #D97786;">
                #{{ activity.subcategory }}
              </div>

              <!-- Характеристики с иконками -->
              <div class="mt-2">
                <div class="d-flex align-center mb-1">
                  <v-icon icon="mdi-account" size="20" color="primary" class="mr-2" />
                  <span class="text-body-2">Возраст: {{ activity.age }}</span>
                </div>
                <div class="d-flex align-center mb-1">
                  <v-icon icon="mdi-dumbbell" size="20" color="primary" class="mr-2" />
                  <span class="text-body-2">Адрес: {{ activity.address }}</span>
                </div>
                <div class="d-flex align-center mb-1">
                  <v-icon icon="mdi-map-marker" size="20" color="primary" class="mr-2" />
                  <span class="text-body-2">Место: {{ activity.place }}</span>
                </div>
                <div class="d-flex align-center flex-wrap">
                  <v-icon icon="mdi-clock-outline" size="20" color="primary" class="mr-2" />
                  <span class="text-body-2 mr-3">{{ activity.schedule.join(', ') }}</span>
                  <v-chip
                    v-for="slot in activity.timeSlots"
                    :key="slot"
                    size="small"
                    color="accent"
                    class="mr-1"
                  >
                    {{ slot }}
                  </v-chip>
                </div>
              </div>
            </div>

            <!-- Цена/Статус и Кнопка -->
            <div class="d-flex flex-column align-end" style="min-width: 120px;">
              <div class="mb-2">
                <v-chip
                  v-if="activity.price === 'Бесплатно'"
                  color="secondary"
                  text-color="white"
                  size="small"
                >
                  Бесплатно
                </v-chip>
                <div v-else class="d-flex align-center">
                  <v-chip variant="outlined" color="primary" size="small" class="mr-1">
                    Первое бесплатно
                  </v-chip>
                  <v-chip color="secondary" size="small" text-color="white">
                    {{ activity.priceValue }} руб.
                  </v-chip>
                </div>
              </div>
              <v-btn
                color="primary"
                variant="flat"
                size="small"
                @click="goToDetail"
              >
                Подробнее
              </v-btn>
            </div>
          </div>
        </v-card-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  activity: Object,
})

const router = useRouter()
const goToDetail = () => {
  router.push(`/activity/${props.activity.id}`)
}
</script>

<style scoped>
.v-card {
  transition: box-shadow 0.2s ease;
}
.v-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
</style>