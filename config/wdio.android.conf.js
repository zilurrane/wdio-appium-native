const { join } = require('path');
const { config } = require('./shared/wdio.shared.conf');

config.specs = [
    './tests/specs/**/app*.spec.js',
];

config.capabilities = [
    {
        automationName: 'UiAutomator2',
        deviceName: '3f27126', // Update with your device name
        platformName: 'Android', // Update
        platformVersion: '8.1.0', // Update
        orientation: 'PORTRAIT',
        maxInstances: 1,
        app: join(process.cwd(), './app/DemoApp.apk'),
        noReset: true,
        newCommandTimeout: 240,
    },
];

exports.config = config;
