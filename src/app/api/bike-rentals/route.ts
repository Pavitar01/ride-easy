import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import fs from 'fs/promises'; // Still unused, but kept if needed later

// Simple delay helper
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword') || 'bike rental';
  const city = searchParams.get('city') || 'Delhi';
  const pageNumber = parseInt(searchParams.get('page') || '1');

  const url = `https://www.justdial.com/${city}/${keyword}`;

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
    );

    await page.setExtraHTTPHeaders({
      'Accept-Language': 'en-US,en;q=0.9',
    });

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    await page.waitForSelector('.resultbox', { timeout: 10000 });

    // 🔁 Scroll down 'pageNumber' times to load more data
    for (let i = 0; i < pageNumber; i++) {
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
      });
      await delay(2000); // Let the new data load
    }

    await delay(3000); // Final wait to ensure all data is rendered

    // 🧹 Extract the data
    const resultBoxes = await page.$$eval('.resultbox', (nodes) =>
      nodes.map((node) => {
        const title = (node.querySelector('.resultbox_title_anchor') as HTMLElement)?.innerText.trim() || null;


        const imageLinks = Array.from(node.querySelectorAll('img'))
          .map(img => img.src)
          .filter(src => src.startsWith('https://content.jdmagicbox.com'));

        const href = node.querySelector('a')?.getAttribute('href') || null;
        const totalRate = (node.querySelector('.resultbox_totalrate') as HTMLElement)?.innerText.trim() || null;
        const countRate = (node.querySelector('.resultbox_countrate') as HTMLElement)?.innerText.trim() || null;

        // ✅ Check for presence of specific icons
        const trustBadge = Array.from(node.querySelectorAll('img')).some(img =>
          img.src === 'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/trust_2x.gif'
        );

        const jdVerifiedBadge = Array.from(node.querySelectorAll('img')).some(img =>
          img.src === 'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/verified_2x.gif'
        );

        const callContent = (node.querySelector('.callcontent') as HTMLElement)?.innerText.trim() || null;
        const amenitiesTabs = Array.from(node.querySelectorAll('.resultbox_amenities li'))
          .map(tab => (tab as HTMLElement).innerText.trim());

        return {
          title,
          image_links: imageLinks,
          href,
          totalRate,
          countRate,
          trustBadge: trustBadge ? 'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/trust_2x.gif' : null,         // true/false if trust_2x is present
          jdVerifiedBadge: jdVerifiedBadge ? 'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/verified_2x.gif' : null,    // true/false if verified_2x is present
          amenitiesTabs,
          callContent,
        };
      })
    );


    await browser.close();
    return NextResponse.json({ results: resultBoxes, message: 'Data fetched successfully!' });
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
