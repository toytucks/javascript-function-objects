const scriptRootPath = path.join(repositoryRootPath, 'script');
const intermediateAppPath = path.join(buildOutputPath, 'app');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));