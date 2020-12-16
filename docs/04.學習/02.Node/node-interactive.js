var cp = require('child_process');
var childProcess = cp.spawn('node', ['-i']);

childProcess.stdout.setEncoding('utf8')

childProcess.stdout.on("data", function(data) {
    console.log(data)
});


childProcess.stdin.write('1 + 1 + 1');

// that's enough
childProcess.stdin.end();