const { spawn } = require('child_process');

var userInput = 'untrusted source';
var args = [ userInput ];
var cmd = 'echo';
var subprocess = spawn(cmd, args);
var stderr = '';
var stdout = '';
subprocess.stdout.on('data', function(data) {
    stdout += data;
});
subprocess.stderr.on('data', function(data) {
    stderr += data;
});
subprocess.on('close', function(exitCode) {
    console.log('echo: ' + stdout);
});