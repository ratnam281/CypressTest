const { defineConfig } = require("cypress");
// import { tagify } from 'cypress-tags';

module.exports = defineConfig({
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  // },
   
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 2
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('file:preprocessor', tagify(config));
    },
  },
});
