const puppeteer = require("puppeteer");
const { userName, coords, agence } = require('./ep');


(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 10000,
  });
  await page.goto(url, { waitUntil: "networkidle2" });


  // cookie
  //await page.click("artdeco-global-alert-action__wrapper > button");
  //data-tracking-control-name="auth_wall_desktop-login-toggle"
  //await page.click('[data-controle-name=ga-cookie.consent.accet.v4]');
  //await page.click("action-type=ACCEPT")

  // login
  await page.type('[name=session_key]', "cindy.alves0304@gmail.com", { delay: 100 });
  await page.type('[name=session_password]', "dydylele00", { delay: 100 });
  await page.click("button[type=submit]");

  // search bar.
  await page.type('[aria-label=Recherche]', `${userName} ${coords} `, { delay: 100 }); // "data[nom], data[prénom], data[agence]"
  await page.keyboard.press('Enter');

  console.log(userName);
  console.log(coords);
  // console.log(agence);

  // research personne
  await page.click("button[class=artdeco-pill artdeco-pill--slate artdeco-pill--choice artdeco-pill--2 search-reusables__filter-pill-button search-reusables__filter-pill-button]");
  await page.click("reusable-search__result-container > reusable-search__entity-result-list list-style-none");

  // contact
  await page.click("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view");
  await page.click("artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view mr1");
  await page.type('[class=ember-text-area ember-view connect-button-send-invite__custom-message mb3]', "vbtff leane", { delay: 100 });
  await page.click("class=artdeco-button artdeco-button--2 artdeco-button--primary artdeco-button--disabled ember-view ml1");

  // auto connect
  //await page.waitForSelector(".cmbtv > button", { visible: true });
  //await page.click(".cmbtv > button");

  // notif
  //await page.waitForSelector(".mt3GC > button", { visible: true });
  //await page.click(".mt3GC > button");

  //debugger;
  // await browser.close();
})();
