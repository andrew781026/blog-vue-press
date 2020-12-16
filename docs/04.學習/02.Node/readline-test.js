/**
 * 在此練習製作 互動式的 exec
 * 讓我們能執行 certbot 後 , 與其互動 , 輸入 email . 域名...等
 * */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const correctProcess = ()=>{

    console.log('correct answer');
    process.exit(0);
}

const askQuestion = ()=>{

    rl.question('please input answer again ! 1 + 1 = ?\n', (answer) => {

        if (answer === '2') correctProcess();
        else askQuestion();
    })
}

rl.question('1+1=?\n', (answer) => {

    if (answer === '2') correctProcess();
    else askQuestion();
})

process.on('ans',ans => {

    rl.write()
})
