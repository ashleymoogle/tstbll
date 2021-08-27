<template>
  <div class="relative rounded-md shadow-sm">
    <div :class="`word ${classAnagram}`">
      {{ word.value }}
    </div>
    <span v-if="word.new" class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
      <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
    </span>
  </div>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
import wordCompose from '@/composables/word-compose.js'

export default {
  name: "word",
  props: {
    word: {
      default: () => {
        return { id: 0, value: ''}
      },
      type: Object
    },
    anagram: {
      default: '',
      type: String
    }
  },
  setup (props) {
    // Make props reactive
    const { anagram } = toRefs(props)
    const word = reactive(props.word)

    const { isAnagram, classAnagram } = wordCompose(anagram, word)

    return { isAnagram, classAnagram }
  }
}
</script>

<style scoped lang="scss">
  .word {
    @apply bg-purple-500 h-12 rounded-md flex items-center justify-center text-white text-xl font-extrabold p-2;
    &.found {
      @apply bg-green-500;
    }
    &.not-found {
      @apply opacity-20;
    }
  }
</style>
