import {Selector as $, t} from 'testcafe'

const shopPage = {
    addToCartBtn: $('#add_to_cart'),

    async openTShirtCategory() {
        await t
            .click('li:nth-child(3) > a[title="T-shirts"]')
    },

    async addItemToCartAndProceed() {
        await t
            .hover('[itemprop="name"]')
            .click('[itemprop="name"]')
            .click(this.addToCartBtn)
            .click('[title="Proceed to checkout"]')
    },

    async goToSecondCartStep() {
        await t
            .click('p > a.button.btn.btn-default.standard-checkout.button-medium')
    },


    async finishOrder() {
        await t
            .expect('#center_column > form > p > button').ok()
            .click('#center_column > form > p > button')
            .expect('[name="cgv"]').ok()
            .click('[name="cgv"]')
            .click("#form > p > button")
            .expect('[title="Pay by bank wire"]').ok()
            .click('[title="Pay by bank wire"]')
            .expect("#cart_navigation > button").ok()
            .click("#cart_navigation > button")
    },

    async openProfileOrders() {
        await t
            .click('[title="View my customer account"]')
            .expect('[title="Orders"]').ok()
            .click('[title="Orders"]')
    },

    async checkOrderPresent() {
        await t
            .expect('#order-list > tbody > tr').ok()
    },

}
export default {...shopPage}