const { Builder, By } = require('selenium-webdriver');
const path = require('path');

(async function testCalculator() {
  // Get the local file URL
  const filePath = 'file://' + path.resolve('calculator.html');

  // Launch browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Open the calculator page
    await driver.get(filePath);

    // Enter numbers
    await driver.findElement(By.id('num1')).sendKeys('10');
    await driver.findElement(By.id('num2')).sendKeys('25');

    // Click the Add button
    await driver.findElement(By.tagName('button')).click();

    // Wait a bit to allow DOM update
    await driver.sleep(1000);

    // Get result
    const result = await driver.findElement(By.id('result')).getText();
    console.log("Displayed Result:", result);

    // Test condition
    if (result === 'Result: 35') {
      console.log('Test Passed ✅');
    } else {
      console.log('Test Failed ❌');
    }

  } finally {
    await driver.quit();
  }
})();
