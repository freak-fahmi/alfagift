const path = require('path');
const allureReporter = require('@wdio/allure-reporter').default
const allure = require('allure-commandline');
const { removeSync } = require('fs-extra');
const fs = require('fs');


exports.config = {
    runner: 'local',
    maxInstances: 10,
    logLevel: 'debug',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        profile: [],
        // require: [
        //     './src/stepDefinitions/*.steps.js'
        // ],
        snippetSyntax: undefined,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 50000,
        retry: 0
    },
       
    reporters: [
        'spec',
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true
      }]],

    
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    onPrepare: () => {
        // Remove the `tmp/` folder that holds the json report files
        removeSync('allure-results');
        if (!fs.existsSync('allure-results')){
            fs.mkdirSync('allure-results');
        }
    },

    afterStep:  async function (test, scenario, { error, duration, passed }, context) {
        if (error) {
          await browser.takeScreenshot();
        }
        else{
          await browser.pause(2000);
          await browser.takeScreenshot();
        }
         },

    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
