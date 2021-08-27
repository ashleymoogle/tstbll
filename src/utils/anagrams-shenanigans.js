const makeObjectFromWord = (str) => {
  return str.split('').reduce((acc, item) => {
    if (acc[item]) {
      acc[item]++
    } else {
      acc[item] = 1
    }
    return acc
  }, {})
}

const sortObjectByKeys = (original) => {
  return Object.keys(original).sort().reduce(
    (obj, key) => {
      obj[key] = original[key];
      return obj;
    },
    {}
  )
}

export { makeObjectFromWord, sortObjectByKeys }
