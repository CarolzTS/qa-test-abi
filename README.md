# QA Automation Test - Senior QA Tester MOUTS TI

This project was developed as part of a QA Automation technical assessment using Cypress as the framework and javascript as the language.

## Objective

The goal of this project is to validate key functionalities of the ServeRest application through automated tests, covering both frontend (E2E) and API scenarios.

---

## Implemented Scenarios

### Frontend (E2E)
1. Login successfully with valid credentials (non-static data)
2. Register a new user successfully
3. Register a new product successfully

### API
1. Create a new user successfully
2. Login successfully and validate authorization token
3. Create a new product successfully with authorization

---

## Technologies Used

- Cypress
- JavaScript
- Node.js

---

## Project Structure

qa-test-abi/
## Project Structure

```
## Project Structure

```
qa-test-abi/
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   ├── login-success-api.cy.js
│   │   │   └── cadastrar-produto-api.cy.js
│   │   └── frontend/
│   │       ├── login-success.cy.js
│   │       ├── cadastrar-usuario-sucesso.cy.js
│   │       └── cadastrar-novo-produto-sucesso.cy.js
│   ├── fixtures/
│   │   └── images/
│   │       └── kittycat.jpg
│   ├── pages/
│   │   ├── loginPage.js
│   │   ├── cadastrarUsuarioPage.js
│   │   └── cadastrarProdutoPage.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── package.json
├── cypress.config.js
└── README.md
```


- `frontend/` → UI test scenarios
- `api/` → API test scenarios using `cy.request()`
- `pages/` → Page Object Model (POM) structure
- `fixtures/` → image needed for scenario

---

## Prerequisites

- Node.js installed (v16+ recommended)
- npm or yarn

---

## Installation
Clone the repository:
1. git clone <https://github.com/CarolzTS/qa-test-abi.git>
2. cd qa-test-abi

Install dependencies:
1. npm install

---

## Running the tests with live results

### Open Cypress UI
1. Open CMD
2. Run npx cypress open
3. Select desired options in the UI

or 

1. Open CMD
2. npm run cy:open

---

## Notes

- Dynamic data (e.g. emails, product names) is generated at runtime to avoid duplication issues.
- Login credentials are no longer stored in fixtures for reuse across tests, due to token expiring after some time and demo account being deleted.
- API tests are independent and follow the actual behavior of each endpoint.
- Frontend tests follow the Page Object Model (POM) pattern for better organization and maintainability.
- Instructions for test found in /instruction-docs
- For test results, please review link /evidence-results


## Final Considerations

Thank you for reviewing my application, I appreciate the time allocated to continue with my candidate process.
