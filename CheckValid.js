const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
var DELIM_SIZE = 4;
const isTabInView = () => !document.hidden;
const isArray = (arr) => Array.isArray(arr);
[foo, bar] = [bar, foo];