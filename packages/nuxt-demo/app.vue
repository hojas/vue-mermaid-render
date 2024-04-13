<script setup lang="ts">
import { ref } from 'vue'
import { VueMermaidRender } from 'vue-mermaid-render'

const content = ref(`
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
`)

setTimeout(() => {
  content.value = `
  sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
`
}, 2000)
</script>

<template>
  <VueMermaidRender :content="content" />
</template>
