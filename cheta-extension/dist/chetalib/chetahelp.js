export function addStyles(thisDocument) {
  var link = thisDocument.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
  thisDocument.head.appendChild(link);
};
