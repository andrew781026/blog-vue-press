/**
 * 在此練習製作 互動式的 exec
 * 讓我們能執行 certbot 後 , 與其互動 , 輸入 email . 域名...等
 * 參考資料 : https://medium.com/skilllane/build-an-interactive-cli-application-with-node-js-commander-inquirer-and-mongoose-76dc76c726b6
 * */


/*

// const app = require('commander');
const inquirer = require('inquirer');

const receiver = ()=>{

    inquirer.prompt([
        {type:'input',name:'name',message:'Your Name'}
    ])
        .then(answers => console.log(`Hello ${answers.name}`))
}

receiver();

// app.version('1.0.0').action(receiver);
// app.parse(process.argv);

// receiver()
*/

const {exec, spawn} = require('child_process');
let childProcess;

childProcess = exec(`node -i readline-test.js`, {cwd: __dirname});

childProcess.stdout.on("data", (data) => {

    console.log(data);
});

childProcess.stderr.on("data", (data) => {

    console.log(data);
});

childProcess.on('exit', () => {

    console.log('exit');
    childProcess = null;
});


setTimeout(() => {

    // 希望能用 write 與 childProcess 作互動 , 但是沒反應 🌨
    childProcess.stdin.write('3', () => {
        console.log('Write completed, do more writes now.');
    });

    // childProcess.stdin.end();              // flush 寫入的資訊

}, 1000)


// 想要製作一個可以用 exec certbot 然後讓其更使用者輸入互動的 cli 