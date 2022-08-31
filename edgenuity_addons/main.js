// Iframe Element Adder

function createIframeElement(contents) {
    var doc = document.getElementById('stageFrame');
    
    var ifrDoc = doc.contentWindow || doc.contentDocument;
    if (ifrDoc.document) ifrDoc = ifrDoc.document;
    
    
    var elem = ifrDoc.createElement("div");
    elem.innerHTML = `contents`;
    ifrDoc.body.appendChild(elem);
}

// Adds Functions.js
createIframeElement('<script scr="//tabberanimates.github.io/coolstuff/edgenuity_addons/functions.js"></script>');

// Variables (Hope this code works :skull:)

const order = 'afterbegin';

// Button 1

createIframeElement('<button onclick="skipTo()">Skip to Part</button>');

// Button 2

createIframeElement('<button onclick="skipVid()">Skip Video</button>');
