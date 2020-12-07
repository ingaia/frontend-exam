const faker = require("faker");
const puppeteer = require("puppeteer");

const person = {
  email: faker.internet.email(),
  password: faker.random.words(),
};
describe("Login", () => {
  test("user can make login", async () => {
    let browser = await puppeteer.launch({
      headless: false,
    });
    let page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector("input");

    await page.click("input[name=email]");
    await page.type("input[name=email]", person.email);
    await page.click("input[name=password]");
    await page.type("input[name=password]", person.password);
    await page.click("button");
    await page.$$eval("* > div", (elements) =>
      elements.some((el) => el.textContent.includes("TRAILERS"))
    );
    browser.close();
  }, 9000000);
  test("user can see a video", async () => {
    let browser = await puppeteer.launch({
      headless: false,
    });
    let page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector("input");

    await page.click("input[name=email]");
    await page.type("input[name=email]", person.email);
    await page.click("input[name=password]");
    await page.type("input[name=password]", person.password);
    await page.click("button");
    await page.$$eval("* > div", (elements) =>
      elements.some((el) => el.textContent.includes("TRAILERS"))
    );
    await page.$$eval(".video", (videos) =>
      videos.forEach(async (element) => {
        await page.click(element);
        await page.click("button");
      })
    );

    browser.close();
  }, 9000000);
});

export {};
