/// <reference types = "cypress"/>

describe("Auto test ", () => {
    it("Positive test", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('[name="first_name"]').type("Sreerag")
        cy.get('#ContactUsFrm_email').type("chisreerag@gmail.com", { force: true })
        cy.get('[name="enquiry"]').type("hbjbsjfbhsjfbj")
        cy.get('.col-md-6 > .btn')
    })
    it("Negative test", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('a[href$="contact"]').click()
        cy.get('[name="first_name"]').type("Sreerag")
        cy.get('[name="enquiry"]').type("hbjbsjfbhsjfbj")
        cy.get('.col-md-6 > .btn')
    })
})