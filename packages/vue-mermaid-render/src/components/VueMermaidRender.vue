<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import mermaid from 'mermaid'
import type { MermaidConfig } from 'mermaid'

/**
 * props
 *
 * @param {string} content - mermaid graph definition
 * @param {MermaidConfig} config - mermaid config
 */
const props = defineProps<{ content: string, config?: MermaidConfig }>()

const el = ref()
const mermaidString = ref('')

/**
 * generate svg id
 */
function genSvgId() {
  const max = 1000000
  return `mermaid-svg-${genId(max)}${genId(max)}`

  function genId(max: number) {
    return ~~(Math.random() * max)
  }
}

/**
 * update graph
 * @param graphDefinition - mermaid graph definition
 */
async function updateGraph(graphDefinition: string) {
  const id = genSvgId()
  const res = await mermaid.render(id, graphDefinition, el.value)
  mermaidString.value = res.svg
}

// init mermaid
watchEffect(() => {
  if (!el.value)
    return

  if (props.config)
    mermaid.initialize({ startOnLoad: false, ...props.config })
  else
    mermaid.initialize({ startOnLoad: false })
})

// update graph
watchEffect(() => {
  if (!el.value)
    return

  if (props.content)
    updateGraph(props.content)
})
</script>

<template>
  <pre ref="el" class="mermaid" v-html="mermaidString" />
</template>
