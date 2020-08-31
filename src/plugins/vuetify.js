import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VLayout,
  },
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#3f51b5',
        accent: '#FFD277',
      },
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
  icons: {
    iconfont: 'md', // default - only for display purposes
  },
})
