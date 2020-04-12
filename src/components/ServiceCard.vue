<template>
  <bulma-accordion-item>
    <h4 slot="title" class="is-6 has-weight-lighter">{{ header }}</h4>
    <div slot="content">
      <p v-for="serviceItem in serviceItems" v-bind:key="serviceItem.id">
        <vue-markdown>{{ serviceItem.itemDescription }}</vue-markdown>
      </p>
    </div>
  </bulma-accordion-item>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { BulmaAccordionItem } from 'vue-bulma-accordion'
export default {
  name: 'ServiceCard',
  components: { VueMarkdown, BulmaAccordionItem },
  inheritAttrs: false,
  props: {
    serviceItems: { type: Array, default: () => [] },
    header: { type: String, default: '', required: true },
    service: { type: Object, default: () => {} },
  },
}
</script>
