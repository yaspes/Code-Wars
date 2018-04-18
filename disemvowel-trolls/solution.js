function disemvowel(str) {
  let vowels = ['a','A','e','E','i','I','o','O','u','U'];
  let strArray = str.split('');
  let newArray = [];
  
  for(char of strArray) {
    if(vowels.includes(char)) continue; 
    else newArray.push(char); 
  }
  return newArray.join('');
}