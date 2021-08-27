import { computed } from '@vue/composition-api'
import { makeObjectFromWord, sortObjectByKeys } from '@/utils/anagrams-shenanigans.js'

export default function wordCompose(anagram, word) {

  const deconstructedAnagram = computed(() => {
    const obj = makeObjectFromWord(anagram.value)
    return sortObjectByKeys(obj)
  })

  const isAnagram = computed(() => {
    if (word.value.length !== anagram.value.length) {
      return false
    }
    const wordObj = sortObjectByKeys(makeObjectFromWord(word.value))
    return JSON.stringify(wordObj) === JSON.stringify(deconstructedAnagram.value)
  })

  const classAnagram = computed(() => {
    if (!anagram.value.length) {
      return ''
    }

    return isAnagram.value ? 'found' : 'not-found'
  })

  return { isAnagram, classAnagram }
}
