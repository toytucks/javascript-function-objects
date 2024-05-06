const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());