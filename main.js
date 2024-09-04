const sumAll = (min, max) => {
  let sum = 0;
  if (min > max) {
    let temp;
    temp = min;
    min = max;
    max = temp;
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4));
