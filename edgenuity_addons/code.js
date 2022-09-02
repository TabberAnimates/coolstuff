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

// Button 1

createIframeElement(`<button onclick="let array = API.FrameChain.framesStatus; let result = array.splice(array.indexOf('incomplete'), 1, 'complete'); API.FrameChain.framesStatus = array; if (API.FrameChain.currentFrame != API.FrameChain.frameStatus.length) { API.FrameChain.openFrame(API.FrameChain.currentFrame + 1); } else { alert('The ability to go to the next activity has been unlocked.'); }">Skip Video</button>`);

// Button 2

createIframeElement(`<button onclick="let array = API.FrameChain.framesStatus; for (var i = 0; i < array.length; i++) { if (array[i] == 'incomplete') { array[i] = 'complete'; } } API.FrameChain.frameStatus = array;">Auto Completion (In Development)</button>`);

