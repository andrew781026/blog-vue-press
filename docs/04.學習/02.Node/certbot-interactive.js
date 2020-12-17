const {spawn} = require('child_process');

var childProcess = spawn('certbot', ['-i']);

childProcess.stdout.setEncoding('utf8');

childProcess.stdout.on("data", function (data) {

    console.log('data=', data);
});

setTimeout(() => {

    // double the previous result
    childProcess.stdin.write('testing');

    // that's enough
    childProcess.stdin.end();

}, 1000);
