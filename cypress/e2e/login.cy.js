describe('Login Form Tests', () => {
  beforeEach(() => {
    // Posetiti login stranicu
    cy.visit('../../login.html')
  })

  it('should show error for empty fields', () => {
    // Kliknuti Login dugme bez unosa
    cy.get('#login-btn').click()
    
    // Proveriti da li se prikazuje greška
    cy.get('#message').should('contain', 'Please fill all fields')
  })

  it('should login with valid credentials', () => {
    // Uneti ispravne podatke
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('Password123')
    cy.get('#login-btn').click()
    
    // Proveriti uspešnu prijavu
    cy.get('#message').should('contain', 'Welcome! Login successful.')
  })

  it('should show error for invalid credentials', () => {
    // Uneti pogrešne podatke
    cy.get('#email').type('wrong@example.com')
    cy.get('#password').type('wrongpass')
    cy.get('#login-btn').click()
    
    // Proveriti grešku
    cy.get('#message').should('contain', 'Invalid credentials')
  })
})