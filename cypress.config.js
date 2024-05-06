const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    reportPageTitle: 'Automated Test Status',
    reportTitle: 'Automated Test Reporting Dashboard',
    showPassed: true,
    autoOpen: false,
    charts: true,
    code: false,
    
  },
  e2e: {
    baseUrl: "https://flip.id",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'test/scenarios/*.spec.js',
  },
});
