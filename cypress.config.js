const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "13z1sz",
    setupNodeEvents(on, config) {
      // implement node event listeners here
        },
        specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"

    },
   
});
