describe('fixture demo',()=>{
    it('login ', async() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture('user').then(user=>{
            const username = user.username
            const pwd = user.password
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(pwd)
        })

        const user =  await cy.fixture('user')
        cy.log(user.username)
        cy.log('username')
    });
})