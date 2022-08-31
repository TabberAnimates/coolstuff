const div = document.createElement('div');
div.innerHTML = `<button onclick="API.FrameChain.openFrame(API.FrameChain.currentFrame + 1)">Skip Video</button>`;
document.body.insertAdjacentElement('afterbegin', div);
