function skipTo() {
let person = prompt("Please enter a number to skip to", "1"); 
  if ((person - 0) < 1) { 
    person = 1; 
  } 
  API.FrameChain.openFrame(person);
}
function skipVid() {
API.FrameChain.openFrame(API.FrameChain.currentFrame + 1);
}
