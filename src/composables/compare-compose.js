import { computed } from '@vue/composition-api'
import { makeObjectFromWord, sortObjectByKeys } from '@/utils/anagrams-shenanigans.js'

export default function compareCompose(anagram, words) {

  const deconstructedAnagram = computed(() => {
    const obj = makeObjectFromWord(anagram.value)
    return sortObjectByKeys(obj)
  })

  const isAnagramMethod = (word) => {
    if (word.value.length !== anagram.value.length) {
      return false
    }
    const wordObj = sortObjectByKeys(makeObjectFromWord(word.value))
    return JSON.stringify(wordObj) === JSON.stringify(deconstructedAnagram.value)
  }

  const wordsFound = computed(() => {
    return words.value.reduce((acc, item) => {
      if (isAnagramMethod(item)) {
        acc++
      }
      return acc
    }, 0)
  })

  return { wordsFound }
}
