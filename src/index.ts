import { App } from 'vue'
import VueMermaidRender from './components/VueMermaidRender.vue'

export { VueMermaidRender }

export default {
  install: ({ component }: App) => {
    component('VueMermaidRender', VueMermaidRender)
  },
}
