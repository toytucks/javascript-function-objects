const reversedString = str => str.split('').reverse().join('');
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;