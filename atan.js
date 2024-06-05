const buildOutputPath = path.join(repositoryRootPath, 'out');
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const randomString = () => Math.random().toString(36).slice(2);