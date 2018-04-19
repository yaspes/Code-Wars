Problem Domain: Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

Link: https://www.codewars.com/kata/format-words-into-a-sentence

Alogrithm: If input is an empty array, return emptystring
Filter out every white space in the array using array.filter
Using for each, loop through each word in the array
  ~If theres only one word in the array, return it
  ~If current word being iterated is second last, concat ' and' instead of a comma
  ~Otherwise concat string with ', ' if its not the first word in the array
return string

