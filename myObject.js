const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
[foo, bar] = [bar, foo];
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);