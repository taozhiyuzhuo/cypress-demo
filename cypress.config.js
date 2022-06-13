const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'y9r2ov',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "watchForFileChanges":false,
  "viewportWidth":1000,
  "viewportHeight": 600,
  "waitForAnimations": true,
  "animationDistanceThreshold": 20,
  "defaultCommandTimeout": 5000,
  "execTimeout": 60000,
  "pageLoadTimeout": 60000,
  "requestTimeout": 15000,
  "responseTimeout": 15000,
  "video": false
});
