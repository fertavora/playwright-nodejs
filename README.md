# Playwright

This is an example about how [Playwright](https://playwright.dev/) works.

There are three different aproaches:
* [Vanilla](#vanilla)
* [Page Object](#page-object)
* Fixtures

All the examples are based on the same test scenario:

1. User succesfully logs into Saucedemo
2. User selects a product
3. User addes the product to the cart
4. User proceeds to checkout from the cart

## Approaches
### Vanilla
This approach refers to a simple approach using only the Playwright API, no patterns or models are added.

You can check [tests/vanillaTest.spec.js](tests/vanillaTest.spec.js) for more details.

### Page Object 
This approach refers to the implementation of the [Page Object Model](https://martinfowler.com/bliki/PageObject.html), generating more readable test case code.

You can check [tests/pageObjectTest.spec.js](tests/pageObjectTest.spec.js) for more details.

### Fixtures
This approach refers to the implementation of [Playwright Fixtures](https://playwright.dev/docs/test-fixtures) for different purposes like: 
* Set up test preconditions
* Override steps to make test cases idempotent and self-contained (independent)

You can check [tests/fixturesTest.spec.js](tests/fixturesTest.spec.js) for more details.

## How to run tests
Once the repository is cloned in your local environment, you can run the tests from the command line with the following steps:

1. Install dependencies by running `yarn`
2. Run the package script: `yarn test`
3. Run the Playwright command line: `yarn playwright test`

Playwright provide more options to [run tests from command line](https://playwright.dev/docs/running-tests#command-line).