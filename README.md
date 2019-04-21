# wdio-appium-native

## Getting Started

1. Install Appium Desktop
    https://github.com/appium/appium-desktop/releases/tag/v1.12.1

2. Open Appium Desktop and Start Appium Server (PORT 4723)

3. Clone Repository and Install NPM Packages

    ```
        git clone https://github.com/zilurrane/wdio-appium-native.git
        cd wdio-appium-native
        npm install
    ```

4. Make sure you have ADB installed on your computer, appium uses ADB to communicate with your android device. Else you can install SDK from  https://developer.android.com/studio which will help you to run ADB on your computer.

5. Run Tests (Android)
    Update your Android device details in capabilities section of ```config/wdio.android.conf.js``` file.
    And then run following command
    ```
        npm run android
    ```

    - This script will install couple of applications on your device to support execution of tests on your device.
    And then script will install DemoApp.apk and start executing tests.


## Thanks

    https://github.com/webdriverio/appium-boilerplate
