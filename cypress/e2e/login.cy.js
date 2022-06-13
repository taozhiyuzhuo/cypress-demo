describe('login', () => {
    it('timestamp', () => {
        const date = new Date(2020,3,10).getTime()
        cy.clock(date)
        cy.log(date)    
    });

	it('visit login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item',{log:true})
        cy.title().should('contain','Zero - Log in')
	})
	it('fill user name', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('invalid name',{delay:50})
	})

	it('fill pwd', () => {
		cy.get('#user_password').as('pwd')

		cy.get('@pwd').clear()
		cy.get('@pwd').type('invalid name{enter}',{delay:50})
	})

	// it('click btn', () => {
	//     cy.contains('Sign in').click()
	// });

	it('display error message', () => {
		cy.get('.alert-error')
        .should('be.visible')
        .and('contain','Login and/or password are wrong.')

	})
})
