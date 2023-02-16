const {config} = require('./wdio.conf');
const AndroidInfo = require('./android.info');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        autoGrantPermissions: true,
        automationName: 'uiautomator2',
        deviceName: AndroidInfo.deviceName1(),
        platformVersion: AndroidInfo.platFormVersion1(),
        app: path.resolve(`./apps/${AndroidInfo.appName()}`),
    }
];


config.port = 4723;

// config.services = [
//     'appium'
// ];

config.appium = {
    command: 'appium',
    args: {},
};

config.path = '/wd/hub';

config.specs = [
    [
        './features/**/login.feature'
    ]
];


config.cucumberOpts = {
    require: [
        './features/step-definitions/*.js'
    ]
};

exports.config = config;
