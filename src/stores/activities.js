import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useActivityStore = defineStore('activity', () => {
  const activities = ref([
    // Силовой спорт
    {
      id: 1,
      title: 'Тяжелая атлетика (в Юбилейном мкр.)',
      category: 'Силовой спорт',
      subcategory: 'Тяжелая атлетика',
      age: '10-18 лет',
      address: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
      place: 'ФОК "Юбилейный"',
      schedule: ['Пн', 'Ср', 'Пт'],
      timeSlots: ['09:00 - 10:30', '12:00 - 13:30'],
      price: 'Бесплатно',
      priceValue: 0,
      gender: ['male', 'female'],
      image: 'https://via.placeholder.com/300x200/632636/FFFFFF?text=Weightlifting',
      description: 'Развитие силы, выносливости и координации. Подготовка к соревнованиям.',
      trainer: 'Иванов А.А.',
      spots: { total: 20, taken: 15 },
      duration: '12 месяцев',
      levels: [
        { name: 'Базовый уровень', hours: 72, subjects: ['ОФП', 'Техника рывка', 'Техника толчка'] },
        { name: 'Углубленный уровень', hours: 144, subjects: ['Соревновательная практика', 'Психологическая подготовка'] },
      ],
      isOpen: true,
    },
    {
      id: 2,
      title: 'Вольная борьба (в центре)',
      category: 'Силовой спорт',
      subcategory: 'Вольная борьба',
      age: '7-14 лет',
      address: 'г. Иркутск, ул. Ленина, 15',
      place: 'ДЮСШ №3',
      schedule: ['Вт', 'Чт', 'Сб'],
      timeSlots: ['10:00 - 11:30', '14:00 - 15:30'],
      price: 'Первое бесплатно',
      priceValue: 500,
      gender: ['male'],
      image: 'https://via.placeholder.com/300x200/D97786/FFFFFF?text=Wrestling',
      description: 'Обучение основам вольной борьбы, физическая подготовка.',
      trainer: 'Петров С.М.',
      spots: { total: 15, taken: 10 },
      duration: '9 месяцев',
      levels: [
        { name: 'Начальный уровень', hours: 48, subjects: ['Стойка', 'Перемещения', 'Броски'] },
      ],
      isOpen: true,
    },
    {
      id: 3,
      title: 'Дзюдо (в предместье)',
      category: 'Силовой спорт',
      subcategory: 'Дзюдо',
      age: '6-12 лет',
      address: 'г. Иркутск, ул. Розы Люксембург, 10',
      place: 'Спорткомплекс "Дзюдо"',
      schedule: ['Пн', 'Ср', 'Пт'],
      timeSlots: ['16:00 - 17:30', '18:00 - 19:30'],
      price: 'Бесплатно',
      priceValue: 0,
      gender: ['male', 'female'],
      image: 'https://via.placeholder.com/300x200/F3DDBA/632636?text=Judo',
      description: 'Изучение техники, философии и этикета дзюдо.',
      trainer: 'Сидорова Е.В.',
      spots: { total: 25, taken: 18 },
      duration: '12 месяцев',
      levels: [
        { name: 'Основы', hours: 60, subjects: ['Падения', 'Захваты', 'Броски'] },
        { name: 'Продвинутый', hours: 120, subjects: ['Комбинации', 'Удержания'] },
      ],
      isOpen: false,
    },
    // Единоборства
    {
      id: 4,
      title: 'Бокс (в Солнечном)',
      category: 'Единоборства',
      subcategory: 'Бокс',
      age: '10-16 лет',
      address: 'г. Иркутск, мкр. Солнечный, 5',
      place: 'Бокс-клуб "Ринг"',
      schedule: ['Вт', 'Чт', 'Сб'],
      timeSlots: ['11:00 - 12:30', '15:00 - 16:30'],
      price: 'Первое бесплатно',
      priceValue: 600,
      gender: ['male'],
      image: 'https://via.placeholder.com/300x200/632636/FFFFFF?text=Boxing',
      description: 'Техника бокса, спарринги, общефизическая подготовка.',
      trainer: 'Козлов Н.И.',
      spots: { total: 12, taken: 8 },
      duration: '10 месяцев',
      levels: [
        { name: 'Новичок', hours: 40, subjects: ['Стойка', 'Удары', 'Защита'] },
      ],
      isOpen: true,
    },
    {
      id: 5,
      title: 'Карате (в центре)',
      category: 'Единоборства',
      subcategory: 'Карате',
      age: '6-14 лет',
      address: 'г. Иркутск, ул. Карла Маркса, 20',
      place: 'Дворец спорта',
      schedule: ['Пн', 'Ср', 'Пт'],
      timeSlots: ['17:00 - 18:30'],
      price: 'Бесплатно',
      priceValue: 0,
      gender: ['male', 'female'],
      image: 'https://via.placeholder.com/300x200/D97786/FFFFFF?text=Karate',
      description: 'Традиционное карате, ката, кумите.',
      trainer: 'Алексеева М.Ю.',
      spots: { total: 30, taken: 22 },
      duration: '18 месяцев',
      levels: [
        { name: 'Белый пояс', hours: 36, subjects: ['Кихон', 'Ката'] },
        { name: 'Желтый пояс', hours: 72, subjects: ['Кумите', 'Бункай'] },
      ],
      isOpen: true,
    },
    // Дополнительные для разнообразия
    {
      id: 6,
      title: 'Плавание (в бассейне "Олимпиец")',
      category: 'Другие',
      subcategory: 'Плавание',
      age: '5-12 лет',
      address: 'г. Иркутск, ул. Байкальская, 100',
      place: 'Бассейн "Олимпиец"',
      schedule: ['Пн', 'Ср', 'Пт'],
      timeSlots: ['08:00 - 09:00', '19:00 - 20:00'],
      price: 'Первое бесплатно',
      priceValue: 450,
      gender: ['male', 'female'],
      image: 'https://via.placeholder.com/300x200/F3DDBA/632636?text=Swimming',
      description: 'Обучение плаванию, техника стилей, оздоровление.',
      trainer: 'Волкова Т.А.',
      spots: { total: 10, taken: 7 },
      duration: '8 месяцев',
      levels: [
        { name: 'Начальный', hours: 32, subjects: ['Кроль', 'Брасс'] },
      ],
      isOpen: true,
    },
  ])

  // Фильтры
  const filters = ref({
    age: 'Любой',
    gender: ['male', 'female'],
    priceType: 'all', // 'all', 'free', 'paid'
    search: '',
  })

  const ageOptions = ['Любой', '3-6 лет', '7-10 лет', '11-14 лет', '15-18 лет']
  const categoryOptions = ['Все', 'Силовой спорт', 'Единоборства', 'Другие']

  const filteredActivities = computed(() => {
    let list = activities.value

    // Поиск
    if (filters.value.search) {
      const q = filters.value.search.toLowerCase()
      list = list.filter(a => a.title.toLowerCase().includes(q))
    }

    // Возраст
    if (filters.value.age !== 'Любой') {
      list = list.filter(a => a.age === filters.value.age)
    }

    // Пол
    if (filters.value.gender.length > 0) {
      list = list.filter(a => a.gender.some(g => filters.value.gender.includes(g)))
    }

    // Цена
    if (filters.value.priceType === 'free') {
      list = list.filter(a => a.priceValue === 0)
    } else if (filters.value.priceType === 'paid') {
      list = list.filter(a => a.priceValue > 0)
    }

    return list
  })

  function getActivityById(id) {
    return activities.value.find(a => a.id === id)
  }

  return {
    activities,
    filters,
    ageOptions,
    categoryOptions,
    filteredActivities,
    getActivityById,
  }
})