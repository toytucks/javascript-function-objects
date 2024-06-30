const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());