import landing from '../pages/landing.page';

describe('Supported Cellular Providers', () => {
    it('Checks supported cellular providers', () => {
        landing.visit();
        const providers = ['Telkomsel', 'Indosat Ooredoo', 'XL'];
        landing.scrollToProvidersSection(providers);
    });
});
