console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
console.log(1 +  -"1" + "2");
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);