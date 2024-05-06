// send_money.spec.js
import landing from '../pages/landing.page';
import globePage from '../pages/globe.page';

describe('Send Money Service', () => {
  it('Simulates sending money to Poundsterling with correct calculation', () => {
    landing.visit();
    globePage.navigateToSendMoney();
    globePage.selectCurrency('GBP');
    globePage.transactionIdrToGbp(2000000);
    globePage.getServiceFee();
    globePage.validateConverseionhasValue();
  });
});
