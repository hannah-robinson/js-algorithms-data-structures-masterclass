// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// What about edge cases? Might there be spaces or capitalisations for example? No. Only lowercase letters of the alphabet.

// My solution
function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false
  }
  const string1LetterFrequency = {}
  const string2LetterFrequency = {}
  for (let letter of string1) {
    string1LetterFrequency[letter] = (string1LetterFrequency[letter] || 0) + 1
  }
  for (let letter of string2) {
    string2LetterFrequency[letter] = (string2LetterFrequency[letter] || 0) + 1
  }
  for (let key in string1LetterFrequency) {
    if (!(key in string2LetterFrequency)) {
      return false
    }
    if (string2LetterFrequency[key] !== string1LetterFrequency[key]) {
      return false
    }
  }
  return true
}
// Alternative solution from instructor
function validAnagramAlt(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

// Time Complexity:

// Test cases
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
