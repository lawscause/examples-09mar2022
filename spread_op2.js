const numbers = [1, 2, 3, 4, 5, 6];
console.log('numbers: ', numbers);

const [one, two, ...rest] = numbers;
console.log('one: ', one);
console.log('two: ', two);
console.log('rest: ', rest);