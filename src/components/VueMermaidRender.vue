<script setup lang="ts">
import mermaid, { MermaidConfig } from 'mermaid'

const props = defineProps<{ content: string; config?: MermaidConfig }>()

mermaid.initialize(props.config || mermaid.mermaidAPI.defaultConfig)
</script>

<template>
  <pre class="mermaid">{{ content }}</pre>
</template>
