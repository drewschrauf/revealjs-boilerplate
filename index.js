// styles
require('reveal/index.css');
require('./styles/index.scss');
require('highlightjs/styles/atom-one-light.css');

// set up slides
const slides = require('./slides/index.pug');
const div = document.createElement('div');
div.innerHTML = slides();
document.body.appendChild(div.childNodes[0]);

// libs
const reveal = require('reveal');
const hljs = require('highlightjs');
hljs.initHighlightingOnLoad();
reveal.initialize({
  history: true
});
