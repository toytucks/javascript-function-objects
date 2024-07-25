const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const randomString = () => Math.random().toString(36).slice(2);