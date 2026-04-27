const { chromium } = require('playwright-chromium');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1800 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4174/screenshot-to-knowledge', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/home/lehoanghao/.openclaw/workspace/tmp/haobi-screenshots/haobi-screenshot-to-knowledge.png', fullPage: true });
  await browser.close();
})();
