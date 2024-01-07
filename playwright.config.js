const config = {
  // testDir: './tests',
  // timeout: 10 * 1000,
  // expect: {
  //   timeout: 5000
  // },
  // fullyParallel: true,
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 0,
  // workers: process.env.CI ? 1 : undefined,
  // reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.saucedemo.com'
  }
};

module.exports = config;
