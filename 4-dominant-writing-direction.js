const SCRIPTS = require('./includes/scripts.js');

require('./includes/scripts.js') // include the scripts used by the chapter

function dominantDirection(text) {
    // Your code here.
    // let typeOfLanguage = i18n.detectLanguage(text);
    const typeOfLanguage = SCRIPTS.detect(text);
    console.log(typeOfLanguage);
    // console.log(SCRIPTS.indexOf("rtl", 0));
    // console.log(SCRIPTS);
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl