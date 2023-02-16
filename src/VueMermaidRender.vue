<script setup lang="ts">
import { watch, onMounted, ref, nextTick } from 'vue'
import mermaid, { MermaidConfig } from 'mermaid'

const props = defineProps<{ content: string; config?: MermaidConfig }>()

const el = ref()

const insertSvg = (svgCode: string) => {
  el.value.innerHTML = svgCode
}

const updateGraph = (graphDefinition: string) =>
  mermaid.mermaidAPI.render('null', graphDefinition, insertSvg)

watch(
  () => props.content,
  async () => {
    await nextTick()
    updateGraph(props.content)
  }
)

onMounted(() => {
  mermaid.mermaidAPI.initialize(props.config)
})
</script>

<template>
  <pre ref="el" class="mermaid">{{ content }}</pre>
</template>
