import type { App } from 'vue'
import VueMermaidRender from './components/VueMermaidRender.vue'

export { VueMermaidRender }

export default {
  install: (app: App) => {
    app.component('VueMermaidRender', VueMermaidRender)
  },
}
