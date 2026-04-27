const { chromium } = require('playwright-chromium');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4174/blog', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/home/lehoanghao/.openclaw/workspace/tmp/haobi-screenshots/haobi-blog.png', fullPage: true });
  await page.goto('http://127.0.0.1:4174/blog/geo-cho-haobi', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/home/lehoanghao/.openclaw/workspace/tmp/haobi-screenshots/haobi-blog-post.png', fullPage: true });
  await browser.close();
})();
