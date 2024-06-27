const repositoryRootPath = path.resolve(__dirname, '..');
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';