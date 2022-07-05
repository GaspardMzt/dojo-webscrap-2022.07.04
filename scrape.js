const puppeteer = require("puppeteer");

const mainPage =
  "https://www.timeout.com/sydney/restaurants/the-best-vegan-restaurants-in-sydney";

async function scrape() {
  const data = {};

  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto(mainPage);

  /*  CORRECTION  de Pierre :
  https://github.com/ComicScrip/dojo-scrapping/tree/correction-step1
   data.title = await page.$eval("h1", (el) => el.textContent);
   data.date = await page.$eval("time", (el) => el.textContent);
   data.restaurant = await page.$$eval(
     document.querySelectorAll("._h3_cuogz_1", (el) => el.textContent)
  );
*/

  // Methode en suivant (fin de page) https://www.smooth-code.com/articles/scraper-le-web-avec-puppeteer :
  //3 - Récupérer les données
  const result = await page.evaluate(() => {
    let title = document.querySelector("h1").innerText;
    let price = document.querySelector("time").innerText;
    let restaurant = [...document.querySelectorAll("._h3_cuogz_1")]
      .map((rest) => rest.innerText)
      // pour enlever la span :   (remarque let span = document.querySelector("._h3_cuogz_1 span").innertext;   : ne récupère que la 1ère)
      .map((r) => r.split(".").slice(1).join().slice(1, r.length));
    return { title, price, restaurant };
  });

  console.log(result);
  browser.close();
}
scrape();
