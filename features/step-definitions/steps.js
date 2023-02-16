const {Given, When, Then} = require('@cucumber/cucumber');
const Login = require('../pageobjects/login.page');


Given(/^I am on launch and verify splash screen$/, async () => {
    console.log("App Launched");
    await Login.launchApp()
});

When(/^I click button Masuk$/, async () => {
    await Login.btnMasuk()
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await Login.loginUser(username, password)
});

Then(/^I verify notif wrong password$/, async () => {
    await Login.verifyNotif()
});