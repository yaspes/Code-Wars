function cubeOdd(arr) {
  let newArr = [];
  
  for(let i=0; i<arr.length; i++) {
    if(isNaN(arr[i])) return undefined;
    else if(arr[i]%2===1 || arr[i]%2===-1) newArr.push(arr[i]);
  }
  newArr = newArr.map(item => {return item * item * item;});
  return newArr.reduce((acc, curr) => {
    return acc + curr;
  });
}