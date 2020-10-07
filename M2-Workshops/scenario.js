// Scenario 1 : Ajout d'atelier
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
var assert = require('assert');

(async function AddWorkshop() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:3000/').catch(function(err){});
      await driver.findElement(By.className('btn')).sendKeys(Key.RETURN);
      await driver.wait(until.urlIs('http://localhost:3000/workshop'),2000);
      await driver.findElement(By.name('name')).sendKeys('NewWorkShop');
      await driver.findElement(By.name('description')).sendKeys('La description du workshop');
      await driver.findElement(By.className('btn')).sendKeys(Key.RETURN);
      await driver.wait(until.elementLocated(By.xpath('/html/body/a')),2000);
      await driver.findElement(By.className('workshop_title')).getText().then(textValue => {assert.strictEqual('NewWorkShop', textValue);});
      await driver.findElement(By.className('workshop_description')) .getText().then(textValue => {assert.strictEqual('La description du workshop', textValue);});
    } finally {
      await driver.quit();
    }
  })();