const removeDuplicates = (arr) => [...new Set(arr)];
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const channel = getChannel(computedAppVersion);