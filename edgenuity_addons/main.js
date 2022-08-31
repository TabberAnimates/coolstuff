API.FrameChain.openFrame(API.FrameChain.currentFrame);
const div2 = document.createElement('div'); 
div2.innerHTML = `<button onclick='let person = prompt("Please enter a number to skip to", "1"); if ((person - 0) < 1) { person = 1; } return API.FrameChain.openFrame(person);'>Skip to Part</button>`; 
document.body.insertAdjacentElement('beforeend', div2);
const div = document.createElement('div'); 
div.innerHTML = `<button onclick="return API.FrameChain.openFrame(API.FrameChain.currentFrame + 1)">Skip Video</button>`; 
document.body.insertAdjacentElement('beforeend', div);
