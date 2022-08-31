// Iframe Element Adder

function createIframeElement(contents) {
    var value = contents;
    var doc = document.getElementById('stageFrame');
    
    var ifrDoc = doc.contentWindow || doc.contentDocument;
    if (ifrDoc.document) ifrDoc = ifrDoc.document;
    
    
    var elem = ifrDoc.createElement("div");
    elem.innerHTML = value;
    ifrDoc.body.appendChild(elem);
}

// Variables (Hope this code works :skull:)

const order = 'afterbegin';

// Auto-Complete (WIP)

createIframeElement('<script>API.FrameChain.framesStatus.length = 1000;</script>');

// Button 1

createIframeElement(`<button onclick="let person = prompt('Please enter a number to skip to', '1'); if ((person - 0) < 1) { person = 1; } API.FrameChain.framesStatus.length = 1000; API.FrameChain.openFrame(person);">Skip to Part</button>`);

// Button 2

createIframeElement('<button onclick="API.FrameChain.framesStatus.length = 1000; API.FrameChain.openFrame(API.FrameChain.currentFrame + 1);">Skip Video</button>');

