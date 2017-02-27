// styles
require('reveal/index.css');
require('reveal/theme/solarized.css');
require('highlightjs/styles/solarized-dark.css');

// set up slides
const slides = require('./slides/index.pug');
var div = document.createElement('div');
div.innerHTML = slides();
document.body.appendChild(div.childNodes[0]);

// libs
const reveal = require('reveal');
const hljs = require('highlightjs');
hljs.initHighlightingOnLoad();
reveal.initialize({
  history: true
});
