window.onload is a JavaScript event that fires when the entire page has fully loaded, including all images, stylesheets, scripts, and other resources—not just the HTML.

Usage example:

window.onload = function() {
// Code here runs after everything (DOM, images, CSS, etc.) is loaded
};

Difference from DOMContentLoaded:

- window.onload waits for all resources to load.
- DOMContentLoaded (or jQuery's $(document).ready) fires as soon as the HTML is parsed, before images and other resources finish loading.

Use window.onload if your code depends on images or other resources being fully loaded.
For most DOM manipulation, DOMContentLoaded or using defer is preferred.

For JQuery:
$(document).ready(...)
