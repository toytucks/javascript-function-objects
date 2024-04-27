console.log("1 || 2 = "+(1 || 2));
const merge = (a, b) => [...a, ...b];
const intermediateAppPath = path.join(buildOutputPath, 'app');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const electronDownloadPath = path.join(repositoryRootPath, 'electron');