This README provides a comprehensive overview of your Playwright API automation project for the Adventurer's Guild API. It covers setup, structure, and execution instructions.
⚔️ Adventurer's Guild API Automation
This repository contains an automated test suite built with Playwright to validate the core functionalities of the Adventurer's Guild API.
The suite focuses on the lifecycle of a character, from authentication to property updates and deletion.
🚀 Key Features Tested
• Authentication: Token retrieval and validation using a Singleton AuthState pattern.
• Character Management: * Creation of various classes (Rogue, Barbarian). • Retrieving lists of characters and specific character details. • Updating character properties and attributes. • Cleanup (Deletion) of test data.
• Schema Validation: Runtime type checking using TypeScript and custom validation snippets.
🛠️ Tech Stack
• Framework: Playwright Test
• Language: TypeScript
• CI/CD: GitHub Actions
• Patterns: Singleton Auth State, Client/Service abstraction, Enum-based tagging.
📂 Project Structure
├── .github/workflows/        # CI/CD configurations (Playwright GitHub Actions)
├── tests/
│   ├── client/               # API clients (Character and Token requests)
│   ├── data/                 # Test data, Enums (TestTag), and Samples
│   ├── features/             # Spec files (.spec.ts) organized by feature
│   ├── schemas/              # TypeScript types and validation schemas
│   └── snippets/             # Reusable validation logic (Status codes, Tokens)
├── playwright.config.ts      # Global Playwright configuration
└── .env                      # Local environment variables (Git ignored)

⚙️ Setup Instructions
1. Prerequisites
• Node.js (LTS version recommended)
• npm
2. Installation
Clone the repository and install dependencies:
git clone <your-repo-url>
cd adventurers-guild-automation
npm install

3. Environment Variables
Create a .env file in the root directory to store your credentials:
API_USERNAME=your_username
API_PASSWORD=your_password

🧪 Running Tests
Execute all tests
npx playwright test

Execute by Tags
The project uses an enum for tagging. You can run specific groups:
# Run character creation tests
npx playwright test --grep "@create"

# Run token retrieval tests
npx playwright test --grep "@token"

View HTML Report
After the tests complete, you can view the detailed execution report:
npx playwright show-report

🤖 CI/CD Integration
This project uses GitHub Actions. On every push to main or master, the workflow:
1. Sets up a Linux environment.
2. Injects secrets from GitHub Actions (API_USERNAME, API_PASSWORD).
3. Installs dependencies and Playwright browsers.
4. Executes the test suite.
5. Uploads the HTML report as an artifact (retention: 30 days).
🛡️ Validation Snippets
To ensure consistency, this project uses specialized validation snippets located in tests/snippets/:
• expectStatusCodeOk: Validates 200/201 status codes.
• expectValidAttributesSchema: Ensures the API response matches the TypeScript contract.
• expectTokenNotEmpty: Verifies the authentication layer successfully retrieved a JWT.
🔗 Reference
• API Documentation: Adventurer's Guild API