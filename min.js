const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(false === '0');