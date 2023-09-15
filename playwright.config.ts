import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {

  globalTimeout:process.env.CI?60*60*1000:undefined,
  timeout:process.env.CI?30*60*1000:20*60*1000,
  projects:[
    {

      name: "chrome",
      use:{
            ...devices["Desktop Chrome"]
      }

    },
    {

      name: "firefox",
      use:{
            ...devices["Desktop Firefox"]
      }

    }
  ],

  expect:{
    timeout:30000,
    toHaveScreenshot:{
      maxDiffPixelRatio:1
    },
  },
  
  testMatch: ["pomTest/alertTestPage.test.ts","pomTest/calenderTestPage.test.ts","pomTest/dropDownDemoPage.test.ts",
"pomTest/handleSingleMultiplePopUpPage.test.ts","pomTest/inputFormSubmit.test.ts","pomTest/simpleFormDemoPage.test.ts","pomTest/UploadFileDemo.test.ts","pomTest/jquerydropDownPage.test.ts"],
//testMatch: ["test-3.spec.ts"],
  use: {
    baseURL: "https://www.lambdatest.com/selenium-playground/",
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",
    trace:"on-first-retry",
    launchOptions:{
      slowMo: 50
    },
    actionTimeout:2*60*1000,
    navigationTimeout:2*60*1000
  },
   retries: 2,
  reporter: [["dot"],["json",{
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "always"
  }],["allure-playwright",{outputFolder:'my-allure-results'}],
]}
export default config;