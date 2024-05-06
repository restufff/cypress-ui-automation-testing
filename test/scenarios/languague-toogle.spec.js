import landingPage from '../pages/landing.page.js';

describe('Language Toggle', () => {
    it('Switches language to ID and verifies', () => {
        landingPage.visit();
        landingPage.currentLanguage().then((currentLang) => {
            if (currentLang === 'en') {
                landingPage.toggleLanguage('ID');
                landingPage.currentLanguage().should('eq', 'id');
            }
        });
    });

    it('Switches language to EN and verifies', () => {
        landingPage.visit();
        landingPage.currentLanguage().then((currentLang) => {
            if (currentLang === 'id') {
                landingPage.toggleLanguage('EN');
                landingPage.currentLanguage().should('eq', 'en');
            }
        });
    });
});
