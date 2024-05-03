const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);