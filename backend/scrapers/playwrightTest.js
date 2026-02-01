//jsut to test playwrite
// const { chromium } = require('playwright');

// async function runTest() {
//   // 1. Launch browser
//   const browser = await chromium.launch({
//     headless: false   // IMPORTANT: visible browser
//   });

//   // 2. Create new page (tab)
//   const page = await browser.newPage();

//   // 3. Go to a website
//   await page.goto('https://example.com');

//   // 4. Wait for 5 seconds (so you can SEE it)
//   await page.waitForTimeout(5000);

//   // 5. Close browser
//   await browser.close();
// }

// // Run the function
// runTest();

//scraping job title and link from stripe website
// const { chromium } = require('playwright');

// async function scrapeOpenAICareers() {
//   const browser = await chromium.launch({ headless: false });
//   const page = await browser.newPage();

//   await page.goto('https://openai.com/careers', {
//     waitUntil: 'domcontentloaded',
//     timeout: 60000
//   });

  // give React time to render
//   await page.waitForTimeout(3000);

//   const jobs = await page.evaluate(() => {
//     const seen = new Set();
//     const results = [];

//     document.querySelectorAll('a').forEach(a => {
//       const text = a.innerText
//         ?.split('\n')
//         .map(t => t.trim())
//         .filter(Boolean);

//       if (!text || text.length === 0) return;

//       const title = text[0];
//       const url = a.href;

//       if (
//         title.toLowerCase().includes('research engineer') &&
//         url.startsWith('https://openai.com/careers/') &&
//         !seen.has(url)
//       ) {
//         seen.add(url);

//         results.push({
//           title,
//           company: 'OpenAI',
//           url
//         });
//       }
//     });

//     return results;
//   });

//   console.log('Jobs found:', jobs.length);
//   console.log(jobs);

//   await browser.close();
// }

// scrapeOpenAICareers();


//final
const { chromium } = require('playwright');

async function scrapeOpenAICareers() {
const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://openai.com/careers', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.waitForTimeout(3000);

  const jobs = await page.evaluate(() => {
    const seen = new Set();
    const results = [];

    document.querySelectorAll('a').forEach(a => {
      const parts = a.innerText
        ?.split('\n')
        .map(t => t.trim())
        .filter(Boolean);

      if (!parts || parts.length === 0) return;

      const title = parts[0];
      const url = a.href;

      if (
        title.toLowerCase().includes('research engineer') &&
        url.startsWith('https://openai.com/careers/') &&
        !seen.has(url)
      ) {
        seen.add(url);
        results.push({
          title,
          company: 'OpenAI',
          url
        });
      }
    });

    return results;
  });

  await browser.close();
  return jobs; // 👈 IMPORTANT
}

module.exports = scrapeOpenAICareers;

