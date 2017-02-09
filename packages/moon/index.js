const {greeting, person} = require('jen-stars');
const sun = require('jen-sun');

console.log('the sun is', sun);

console.log('yo this is the moon');

 window.onload = function() {

    var heading = document.createElement('h1');
    var heading_text = document.createTextNode(greeting);
    heading.appendChild(heading_text);
    document.body.appendChild(heading);

    var heading2 = document.createElement('h1');
    var heading_text2 = document.createTextNode(person);
    heading2.appendChild(heading_text2);
    document.body.appendChild(heading2);
}
