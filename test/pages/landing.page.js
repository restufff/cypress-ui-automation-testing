class landingPage {
    visit() {
      cy.visit("");
    }

    currentLanguage() {
      return cy.get('html').invoke('attr', 'lang');
    }

    toggleLanguage(lang) {
      cy.get('.css-12frltk').click();
      cy.contains(lang).should('exist');
    }
  
    scrollToProvidersSection(providers) {
      cy.get('.chakra-accordion > :nth-child(5')
          .scrollIntoView()
          .click();
      cy.wait(500);
      providers.forEach(provider => {
          cy.contains(provider).should('be.visible');
      });
  }
  }
  
  export default new landingPage();
  