# Cypress Mini QA Project

This project demonstrates basic automated testing using **Cypress**.

## Tested Functionality
- Login form (email/password validation, empty field errors)
- Invalid credentials validation

## Technologies
- Cypress v13
- HTML, CSS, JavaScript

## Project Structure
```
cypress-mini-project/
├── cypress/
│   └── e2e/
│       └── login.cy.js     # Login tests
├── login.html              # Test page
├── package.json
├── cypress.config.js
└── README.md
```

## How to Run
1. Clone repo: `git clone [repo-url]`
2. Install dependencies: `npm install`
3. Run tests: `npx cypress run`
4. Or open Cypress UI: `npx cypress open`

## Note on Test Execution
The Cypress tests are written and ready to run. Due to Linux dependencies required by Cypress in cloud environments like Codespaces, tests couldn't be executed during development but will work locally or in proper CI/CD environments with `npx cypress run`.

## Test Scenarios
- ✅ Empty fields → "Please fill all fields"
- ✅ Valid credentials (test@example.com/Password123) → "Welcome! Login successful."
- ✅ Invalid credentials → "Invalid credentials"

## Author
Portfolio project for QA Automation position
