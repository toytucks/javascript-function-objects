const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const timeFromDate = date => date.toTimeString().slice(0, 8);