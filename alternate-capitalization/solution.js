function capitalize(s){
  let evenStr = [];
  let oddStr = [];
  
  for(let i = 0; i < s.length; i++) {
    if(i % 2 == 0) {
      evenStr.push(s[i].toUpperCase());
      oddStr.push(s[i].toLowerCase());
    } else {
      evenStr.push(s[i].toLowerCase());
      oddStr.push(s[i].toUpperCase());
    }
  }
  return [evenStr.join(''), oddStr.join('')];
};