const base = require('@playwright/test');
const { SauceDemoCustomer } = require('../actions/SauceDemoCustomer.actions');

exports.test = base.test.extend({
  sauceDemoCustomer: async({ page }, use) => {
    const sauceDemoCustomer = new SauceDemoCustomer(page, base.expect);
    await use(sauceDemoCustomer);
  }
});

exports.expect = base.expect;