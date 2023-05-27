/// <reference types="cypress" />

describe('Test File Upload via webdriveruni', () => {
    it('Upload a file....', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    });

    it('Upload No file...', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
    });
});