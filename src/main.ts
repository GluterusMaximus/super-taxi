import { type Component, createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App as Component)

app.use(createPinia())
app.use(router)
app.use(vuetify)
// eslint-disable-next-line ts/no-unsafe-argument
app.use(VueGoogleMaps, {
  load: {
    // eslint-disable-next-line ts/no-unsafe-assignment
    key: import.meta.env.VITE_GOOGLE_MAPS_APIKEY,
    libraries: 'places',
  },
})

app.mount('#app')
