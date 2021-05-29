import {Selector as t} from 'testcafe'
import step from 'testcafe-reporter-allure';

const basePage = {

// Wanted to add BasePage with logging all TestCafe actions into the allure, but for some reason steps doesn't work...

    async click(locator) {
        await step(`Click on element - ${locator}`, t, await t
            .click(locator)
        )
    },

    async type(locator, text) {
        await step(`Type text "${text}" into element - ${locator}`, t, await t
            .click(locator)
        )
    },

    async waitForElement(locator) {
        await step(`Wait element be visible - ${locator}`, t, await t
            .expect(locator).ok()
        )
    }
}
export default {...basePage}