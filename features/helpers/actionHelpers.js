// const { expect } = require('chai');

class ActionHelper {

    //web

    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }
    static getValue(locator) {
        return $(locator).getValue();
    }

    // native
    static async launchApp() {
        await driver.launchApp();
    }

    static async back() {
        await driver.back();
    }

    static async switchToNativeContext() {
        await browser.switchContext('NATIVE_APP');
    }

    static async switchToWebViewContext() {
        await browser.switchContext('WEBVIEW_src.com.bni');
    }

    static async pause(seconds) {
        await browser.pause(seconds * 1000);
    }

    static async isVisible(locator) {
        return await $(locator).isDisplayed() ? true : false;
    }

    static async click(locator) {
        await $(locator).click();
    }

    static async waitForElement(locator, waitTimeInSeconds) {
        await $(locator).waitForDisplayed(waitTimeInSeconds);
    }

    static async clearText(locator) {
        await $(locator).clearValue();
    }

    static async sendText(locator, inputText) {
        await $(locator).addValue(inputText);
    }

    static async getText(locator) {
        return await $(locator).getText();
    }

    static async scrollIntoView(locator) {
        return await $(locator).scrollIntoView()
    }
}

module.exports = ActionHelper;
