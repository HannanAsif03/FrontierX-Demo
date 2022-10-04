const { NavigateTo } = require("../support/page_objects/FrontierX");

describe('When user is on Wallet Balance Dashboard', () => {
  
  before("User should be on Wallet Balance Dashboard Page", () => {
    cy.visit("https://dev-f0x-wallet.netlify.app/nft/ethereum/0xdAC17F958D2ee523a2206206994597C13D831ec7");
    cy.url().should("include", "ethereum");
  });  

  context("Verify the functionality of Collections", () => {
    it('Verify clicking on Collection checkboxes', () => {
      NavigateTo.collectionCheckboxSelect().check()
    })
    it('Verify related NFTs are displayed', () => {
      NavigateTo.collectionOptionText().invoke("text").then((optionText) => {
        NavigateTo.filteredNFTsText().invoke("text").then((displayedNFTs) => {
          expect(optionText).to.contain(displayedNFTs);
        })
      })
      NavigateTo.collectionCheckboxSelect().uncheck()
    })
  });  

  context("Verify the functionality of Search bar", () => {
  
    it('Filling data in search bar', () => {
      let input = "Catch";
      NavigateTo.searchBar().type(input);
      NavigateTo.filteredNFTsText().invoke("text").then((searchedNFTs) => {
        expect(searchedNFTs).to.contain(input);
      })
    })
  })
})
