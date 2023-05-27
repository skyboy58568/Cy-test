/// <reference types ="Cypress" />

describe("Test contact us from Website", () => {
    it("Should be able to submit a succesful submission via contact us", () => {
        
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Sreerag")
        cy.get('[name="last_name"]').type("S")
        cy.get('[name="email"]').type("chisreerag@gmail.com")
        cy.get('textarea.feedback-input').type("NA")
        cy.get('[type="submit"]').click({ timeout: 1000 })
    });
    it.("Should not be able to submit a succesful submission via contact us", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Sreerag")
        cy.get('[name="last_name"]').type("S")
        cy.get('textarea.feedback-input').type("NA")
        cy.get('[type="submit"]').click({ timeout: 1000 })
    });
})
