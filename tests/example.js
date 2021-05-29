import registerPage from '../pages/registrationPage'
import shopPage from '../pages/shopPage'
import step from 'testcafe-reporter-allure';
import {t} from "testcafe";


fixture`Getting Started`
    .page`http://automationpractice.com/index.php`.meta({
    epic: 'Example Epic Ticket',
    suite: 'Example Fixture Group',
});

test('Order T-Shirt', async (t) => {
    await step('Open T-Shirt category', t,
        await shopPage.openTShirtCategory());
    await step('Open item to cart and proceed', t,
        await shopPage.addItemToCartAndProceed());
    await step('Go to the second cart step', t,
        await shopPage.goToSecondCartStep());
    await step('Register new account', t,
        await registerPage.register());
    await step('Finish order after registration', t,
        await shopPage.finishOrder());
    await step('Open profile orders page', t,
        await shopPage.openProfileOrders());
    await step('Check at least 1 order present', t,
        await shopPage.checkOrderPresent());
});