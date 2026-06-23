import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const colors = {
  primary: '#632636',      // тёмно-бордовый
  secondary: '#D97786',    // розовый
  accent: '#F3DDBA',       // бежевый
  background: '#F4F4F5',   // серый фон
  surface: '#FFFFFF',
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'custom',
    themes: {
      custom: {
        dark: false,
        colors: {
          primary: colors.primary,
          secondary: colors.secondary,
          accent: colors.accent,
          background: colors.background,
          surface: colors.surface,
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },
})