const { PaymentGateway } = require('@cashfreepayments/cashfree-sdk');
// Instantiate Cashfree Payment Gateway
const pg = new PaymentGateway({
  env: 'TEST',
  apiVersion: '1.0.0',
  appId: 'CF10123844CMV22ROK53DJ5ENIPQBG ',
  secretKey: 'cfsk_ma_test_54219427595986174a28d85ccb654763_bf67859a',
});
module.exports={pg};