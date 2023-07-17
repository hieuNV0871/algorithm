const VNCharactersCount = inputString => {
    const VNCharacters = ["aw", "aa", "dd", "ee", "oo", "ow", "w"]
    let count = 0
    let i = 0
    const inputLength = inputString.length
    while (i < inputLength) {
      for (const char of VNCharacters) {
        if (inputString.slice(i, i + char.length) === char) {
          count++
          i += char.length
        }
      }
        i++
    }
    return count
  }
  
  
  const inputString = "hfdawhwhcoomdd"
  const result = VNCharactersCount(inputString)
  console.log(result)