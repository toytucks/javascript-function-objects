const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const merge = (a, b) => [...a, ...b];
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;