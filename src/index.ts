import { App } from 'vue'
import VueMermaidRender from './VueMermaidRender.vue'

export { VueMermaidRender }

export default {
  install: ({ component }: App) => {
    component('VueMermaidRender', VueMermaidRender)
  },
}
