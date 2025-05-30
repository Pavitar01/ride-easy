import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import fs from 'fs';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const url = `https://www.justdial.com/${query}`;

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

    await page.waitForSelector('.jdwrapper', { timeout: 30000 });
    const { address, callAction, timing } = await page.evaluate(() => {
      const address = document.querySelector('.vendorinfo_address') as HTMLElement;
      const timing = document.querySelector('.timebox_text') as HTMLElement;
      const callAction = document.querySelector('.address_action_btn') as HTMLElement
      return {
        address: address ? address.innerText.trim() : null,
        timing: timing ? timing.innerText.trim() : null,
        callAction: callAction ? callAction.innerText.trim() : null
      }
    });

    const reviewSectionHTML = await page.$eval('.jdwrapper', (node) => node.outerHTML);


    console.log(reviewSectionHTML, 'reviewBoxes')



    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Review Section</title>
</head>
<body>
  ${reviewSectionHTML}
</body>
</html>
`;

    fs.writeFileSync('review-section.html', fullHTML, 'utf-8');
    console.log('HTML file created: review-section.html');
    await browser.close();
    return NextResponse.json({
      results: {
        address,
        timing,
        callAction,
      }, message: 'Data fetched successfully!'
    });
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
