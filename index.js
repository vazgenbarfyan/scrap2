const puppeteer = require('puppeteer-extra')
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdblockerPlugin())



function delay(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time)
	});
}

(async () => {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	const proxy = ""//'https://proxybot.io/api/v1/scQtru84pDPeiB4jcNXa0FaCLdG3?geolocation_code=eu&url=';
	const url = 'https://ouo.io/CPksTe';
	const pageUrl = proxy + url;

	await page.goto(pageUrl);

	console.log('Start Loading')
	console.log(page.url());
	console.log(typeof page.url());
	console.time('v');
	await delay(4000)
	await page.waitForSelector('#btn-main');
	const btn = await page.$('#btn-main');
	await btn.evaluate(btn => btn.click());
	console.timeEnd('v')

	await delay(4000)
	console.log('I am human clicked')
	console.log(page.url());
	console.log(typeof page.url());

	await delay(4000)

	console.log('Get link clicked')
	await page.waitForSelector('#btn-main');
	const submitBtn = await page.$('#btn-main');
	await submitBtn.evaluate(submitBtn => submitBtn.click());

	await delay(4000)

	const expectedURl = "https://www.youtube.com/watch?v=7LzF-JU04vs&list=RD7LzF-JU04vs&start_radio=1"
	console.log("expected Url : " + expectedURl)
	console.log(page.url());
	console.log("isSame URls: ", page.url() === expectedURl)
	console.log(typeof page.url());


	await browser.close();
})();
