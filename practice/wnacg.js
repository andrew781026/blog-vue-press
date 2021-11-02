// 紳士漫畫的圖片下載
const puppeteer = require('puppeteer');
const fs = require('fs');
const url = 'http://www.wnacg.org/photos-slide-aid-127221.html';

(async () => {
    const browser = await puppeteer.launch({
        // headless: false, // 是否不顯示 chromium
    });
    const page = await browser.newPage();

    /*
    await page.setRequestInterception(true);
    page.on('request', (interceptedRequest) => {

        const url = interceptedRequest.url();
        const resourceType = interceptedRequest.resourceType();
        if (resourceType === 'image') {

            // endWiths .jpg & startWiths http://img3.wnacg.org/data/
            console.log('interceptedRequest=', url); // 需要將圖片連結給儲存到某 txt 檔案中 , 然後就根據 txt 檔做下載
            return interceptedRequest.continue();
        }

        interceptedRequest.continue();
    });
     */

    // await page.setDefaultNavigationTimeout(0); // set timeout infinite globally
    await page.goto(url, {waitUntil: 'networkidle2', timeout: 0}); // You can use "timeout: 0" to disable timeout errors if you're loading a heavy page.
    const title = await page.title();
    const images = await page.evaluate(() => window.imglist);

    // 需要將 title & images 的資料儲存起來
    console.log('title=', title);
    console.log('images=', images);

    fs.writeFileSync('./info.txt', title, {flag: 'a+'})

    await browser.close();
})();
