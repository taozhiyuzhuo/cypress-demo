describe('first simple test', () => {
    it('true should be true', () => {
        expect(true).to.equal(true)
    })
})

describe('another describe', () => {
    it('false should be false', () => {
        expect(false).to.equal(false)
    })
})

describe('browser action', () => {
    it('should load url', () => {
        cy.visit('http://example.com', { timeout: 3000 });
        cy.log('before loaded')
        cy.reload()
        cy.log('after relog')
    })

    it('should has h1', () => {
        cy.get('h1').should('be.visible')
    });

    it('should load books web', () => {
        cy.visit('http://books.toscrape.com/index.html')
        cy.url().should('include','index.html')
    });

    it('should click on traval tag', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    });

    it('get books number', () => {
        cy.get('.product_pod').its('length').should('eq',11)
    });

    it('click poetry catgeory', () => {
         cy.get('a').contains('Poetry').click()
    });

    it('click book detail', () => {
         cy.get('a').contains('Olio').click()
    });

    it('correct price', () => {
         cy.get('.price_color').contains('23.88')
    });
})