const { Cashfree } = require('cashfree-pg');
// Instantiate Cashfree Payment Gateway
Cashfree.XClientId = "TEST10123844e567d51edbee7c8a8cec44832101";
Cashfree.XClientSecret = "cfsk_ma_test_42383a0c508319c6afbaaa8518324565_1b53e05d";
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
module.exports= {Cashfree} ;