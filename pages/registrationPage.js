import {Selector as $, t} from 'testcafe'
import {Selector} from 'testcafe';

// looks ugly...
const daysSelect = Selector('#days')
const daysOption = daysSelect.find('option');
const monthsSelect = Selector('#months');
const monthsOption = monthsSelect.find('option');
const yearsSelect = Selector('#years');
const yearsOption = yearsSelect.find('option');
const idSelect = Selector('#id_state');
const idOption = idSelect.find('option');

const registerPage = {


    // Locators example
    emailInput: $('#email_create'),
    firstNameInput: $('[name="customer_firstname"]'),
    lastNameInput: $('[name="customer_lastname"]'),
    submitButton: $('#submitAccount'),


    async register() {
        let rand = Math.random().toString(36).substring(7)
        await t
            .click(this.emailInput)
            .typeText(this.emailInput, `goraved@${rand}.com`)
            .click("#SubmitCreate")
            .click('[name="id_gender"]')
            .typeText(this.firstNameInput, "Test")
            .typeText(this.lastNameInput, "Goraved")
            .typeText('[name="passwd"]', "123asd")
            .click(daysSelect).click(daysOption.withText("1"))
            .click(monthsSelect).click(monthsOption.withText("January"))
            .click(yearsSelect).click(yearsOption.withText("2020"))
            .click('[name="optin"]')
            .click("#newsletter")
            .typeText('[name="address1"]', "street")
            .typeText("#city", "test")
            .click(idSelect).click(idOption.withText("Alabama"))
            .typeText("#postcode", "11111")
            .typeText("#other", "123")
            .typeText("#phone_mobile", "123")
            .click("#alias")
            .click("#alias")
            .click("#alias")
            .click("#submitAccount")
    }
}
export default {...registerPage}