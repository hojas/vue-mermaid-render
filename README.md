# vue-mermaid-render

![npm](https://img.shields.io/npm/v/vue-mermaid-render) ![downloads](https://img.shields.io/npm/dm/vue-mermaid-render)

Vue 3 component to render diagrams with Mermaid.

## Install

```shell
$ npm install vue-mermaid-render
```

## Use

```vue
<script setup lang="ts">
import { VueMermaidRender } from 'vue-mermaid-render'

const content = `
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
`
</script>

<template>
  <VueMermaidRender :content="content" />
</template>
```

## Props

- `content`: `string` diagram content string
- `config`: `MermaidConfig` mermaid config

## Related

[mermaid](https://github.com/mermaid-js/mermaid)
