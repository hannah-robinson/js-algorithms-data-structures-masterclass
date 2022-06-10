// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// What about edge cases? Might there be spaces or capitalisations for example? No. Only lowercase letters of the alphabet.

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

// Time Complexity:

// Test cases
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
