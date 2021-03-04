install nodejs
install java
npm install
setting java path



#### Prerequisites
1. Run `npm install` to install the dependencies

##### Optional
1. Run `../selenium/start.sh`   
   OR
2. Run `npm run setup-selenium` to download Selenium artifacts (.jar, chromedriver)

#### End-To-End Tests
##### Solution 1
We are using CodeceptJS for our end-to-end (E2E) tests.
1. Start the application `npm start`
2. Start Selenium webdriver `../selenium/start.sh`
3. Run `npm run e2e`


##### Solution 2
We are using CodeceptJS for our end-to-end (E2E) tests.
1. Start the application `npm start`
2. Start Selenium webdriver `npm run start-selenium`
3. Check your chrome version, if the chromedriver installed by selenium is the same as your chrome version, skip to step 6.
4. Download matching chromedriver from [here](https://chromedriver.chromium.org/downloads)
5. Put downloaded chromedriver into %frontend_dir%/node_modules/protractor/node_modules/webdriver-manager/selenium/
6. Run `npm run e2e`

