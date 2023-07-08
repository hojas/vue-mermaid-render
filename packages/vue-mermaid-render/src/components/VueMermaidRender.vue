<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import type { MermaidConfig } from 'mermaid'
import mermaid from 'mermaid'

const props = defineProps<{ content: string; config?: MermaidConfig }>()

const mounted = ref(false)
const el = ref()
const mermaidString = ref('')

function genSvgId() {
  const min = Math.ceil(1)
  const max = Math.floor(100000)
  return `mermaid-svg-${Math.floor(Math.random() * (max - min + 1))}${min}`
}

async function updateGraph(graphDefinition: string) {
  const id = genSvgId()
  const res = await mermaid.render(id, graphDefinition, el.value)
  mermaidString.value = res.svg
}

watchEffect(() => {
  if (!mounted.value)
    return

  if (props.config)
    mermaid.initialize({ startOnLoad: false, ...props.config })
  else
    mermaid.initialize({ startOnLoad: false })
})

watchEffect(() => {
  if (!mounted.value)
    return

  if (props.content)
    updateGraph(props.content)
})

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <pre ref="el" class="mermaid" v-html="mermaidString" />
</template>
