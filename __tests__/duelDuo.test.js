const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});


  test("page loads with title", async () => {
   
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });


 
test('Title shows up when page loads', async () => {
  const title = await driver.findElement(By.id('title'))
  const displayed = await title.isDisplayed()
  expect(displayed).toBe(true)
})

test('Clicking the Draw button displays the div with id="choices"', async () => {
  const drawButton = await driver.findElement(By.id('draw'))
  await drawButton.click()

  const choicesDiv = await driver.findElement(By.id('choices'))
  const displayed = await choicesDiv.isDisplayed()

  expect(displayed).toBe(true)
})

test('When a bot is "Removed from Duo", it goes back to "choices"', async () => {
  const drawButton = await driver.findElement(By.id('draw'))
  await drawButton.click()

  const duoItems = await driver.findElements(By.id('duo-item'))
  const firstDuoItem = duoItems[0]

  const removeButton = await firstDuoItem.findElement(By.id('remove'))
  await removeButton.click()

  const choicesList = await driver.findElement(By.id('choices-list'))
  const choices = await choicesList.findElements(By.className('choice-item'))

  const botName = await firstDuoItem.findElement(By.className('name')).getText()

  let botIsInChoices = false
  for (let choice of choices) {
      const choiceName = await choice.findElement(By.className('name')).getText()
      if (choiceName === botName) {
          botIsInChoices = true
          break
      }
  }

  expect(botIsInChoices).toBe(true)
})