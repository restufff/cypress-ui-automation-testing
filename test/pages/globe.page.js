import divideWithPrecision from '../helper/lib-divideFloat';

class globePage {
    navigateToSendMoney() {
      cy.get('.css-kaqrt5 > .panel-container > a[href="/flip-globe"]')
        .should('contain', 'Selengkapnya' || 'Learn More')
        .click();
      cy.get('.css-218nup').click();
    }

    selectCurrency(currency) {
      cy.get('.chakra-input').type(currency);
      cy.wait(200);
      cy.contains('p.chakra-text.css-1i33ipy', 'United Kingdom (GBP)').click();
    }

    transactionIdrToGbp(amount){
      cy.get('.css-mqm6w4 > .css-70qvj9 > .chakra-text').invoke('text').then((text) => {
        const currentRate = text.split('=')[1].trim().split(',')[0].replace('.', '');
        const convertedAmount = divideWithPrecision(amount, parseFloat(currentRate)).value;
        cy.get(':nth-child(1) > .css-19t8ja4').type(amount);
        cy.get('.css-1b29se3 > .chakra-button').should('not.be.disabled');
        cy.get(':nth-child(3) > .css-19t8ja4').invoke('val').should('eq', convertedAmount.toString());
    });
    }

    getServiceFee(){
      cy.get('.css-1kggdj1, .css-1int6b7').then(($sel) => {
        if ($sel.text().includes('+ Biaya transfer via Flip') || $sel.text().includes('+ Transfer fee via Flip')) {
            cy.get('.css-1int6b7').should('contain', '0 IDR');
        }
    });
    }

    validateConverseionhasValue(){
      cy.get(':nth-child(3) > .css-19t8ja4').invoke('val').then((value) => {
        expect(value).to.exist;
        cy.get(':nth-child(3) > .css-19t8ja4').should('have.value', value);
      });
      
    }
  }

export default new globePage();
