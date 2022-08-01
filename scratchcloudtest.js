npm i scratch-api node-fetch
var Scratch = require('scratch-api');
const fetch = require('node-fetch');
Scratch.UserSession.load(function (err, user) {
    user.cloudSession(10000 718435029, function (err, cloud) {
        function timeout() {
            setTimeout(function () {
                fetch('https://api.scratch.mit.edu/users/Collertabber/messages/count')
                    .then(res => res.json())
                    .then(data => {
                        cloud.set('☁ a', data "1")
                    })
                timeout();
            }, 5000
        }
        timeout() //a loop
    });
});
