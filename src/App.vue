<template>
  <div id="app">
    <div class="title">
      Anagram finder
    </div>
    <div class="filters"></div>
    <div v-if="anagram.length" class="infos">
      Your word is <span class="highlight">{{ anagram }}</span>, we found {{ wordsFound }} {{ wordsFound > 1 ? 'anagrams' : 'anagram' }} | <span class="badge" @click="reset">Reset</span>
    </div>
    <div v-else class="infos">
      Type to find anagrams in the list
    </div>
    <div class="flex justify-center">
      <div class="words">
        <word v-for="word in words" :key="word.value" :word="word" :anagram="anagram" />
      </div>
    </div>
    <div class="input-container">
      <input v-model="wordQuery" @keyup.enter="submit" type="text" placeholder="Type a word and submit" class="input-word"/>
    </div>
    <div>
      <button @click="submit" :disabled="!wordQuery.length" :class="`btn-submit ${!wordQuery.length ? 'disabled' : ''}`" type="button">
        submit
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import compareCompose from '@/composables/compare-compose.js'
import word from './components/word.vue'

export default {
  name: 'App',
  components: { word },
  setup () {
    const anagram = ref('')
    const wordQuery = ref('')
    const words = ref([])

    const getWords = async () => {
      const data = await fetch('http://localhost:3000/words')
      words.value = await data.json()
    }

    const reset = async () => {
      anagram.value = ''
      wordQuery.value = ''
      await getWords()
    }

    const { wordsFound } = compareCompose(anagram, words)
    const wordsFoundWithQuery = compareCompose(wordQuery, words).wordsFound

    const submit = async () => {
      if (!wordQuery.value.length) {
        return
      }
      if (wordsFoundWithQuery.value === 0) {
        const data = await fetch('http://localhost:3000/words', {
          method: 'POST',
          headers: new Headers({'content-type': 'application/json'}),
          body: JSON.stringify({
            "value": wordQuery.value
          })
        })
        const response = await data.json()
        words.value.push({
          ...response,
          new: true
        })
        anagram.value = ''
      } else {
        anagram.value = wordQuery.value
      }
      wordQuery.value = ''
    }

    onMounted(getWords)

    return { wordQuery, words, getWords, anagram, reset, wordsFound, submit }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    .title {
      @apply text-6xl mb-8;
    }
    .infos {
      @apply font-bold mb-4;
      .highlight {
        @apply text-green-500 italic font-extrabold;
      }
      .badge {
        @apply cursor-pointer text-xs font-semibold inline-block py-1 px-2 rounded-full text-black bg-gray-200 mr-1
      }
    }
    .words {
      @apply grid grid-cols-5 gap-4 content-center;
    }
    .input-container {
      @apply m-auto mt-3 mb-3 pt-0 w-1/3;
      .input-word {
        @apply px-3 py-3 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full;
      }
    }
    .btn-submit {
      @apply bg-pink-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150;
      &.disabled {
        @apply opacity-10;
      }
    }
  }
</style>
