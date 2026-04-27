const { chromium } = require('playwright-chromium');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/home/lehoanghao/.openclaw/workspace/tmp/haobi-screenshots/haobi-home.png', fullPage: true });
  await page.goto('http://127.0.0.1:4173/lab', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/home/lehoanghao/.openclaw/workspace/tmp/haobi-screenshots/haobi-lab.png', fullPage: true });
  await browser.close();
})();
