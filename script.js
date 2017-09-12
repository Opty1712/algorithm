const arr = [70, 10, 20, 30, 40, 50, 60, 30, 40, 50, 60, 0];

const summ = 100;

const findDigits = (arr) => {
  const ret = [];
  arr.reduce((prev, curr) => {
    if (prev[curr]) return prev;
    
    prev[curr] = true;
    const dif = summ - curr;
    if (prev[dif]) ret.push([curr, dif]);
    
    return prev;
  }, {});
  
  return ret;
}

console.log(findDigits(arr));
