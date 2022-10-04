export class frontierXLocators {
    
    collectionsSection() {
      return cy.contains("font-bold").eq(2);
    }

    collectionCheckboxSelect() {
        return cy.get(".block input").eq(2);
    }

    collectionOptionText() {
        return cy.get(".block").eq(2);
    }

    filteredNFTsText() {
        return cy.get(".overflow-hidden").eq(1);
    }

    searchBar(){
        return cy.get('[placeholder="Search NFTs"]').click()
    }    
}

export const NavigateTo = new frontierXLocators();

