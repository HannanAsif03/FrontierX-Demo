const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev-f0x-wallet.netlify.app/nft/ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7',
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false,
    scrollBehavior: false
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
