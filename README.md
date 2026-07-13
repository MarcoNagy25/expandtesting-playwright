# ExpandTesting Playwright Automation Suite

A professional, robust, and clean automated end-to-end test suite built with **Playwright** and **Node.js** to test and verify the web components at [practice.expandtesting.com](https://practice.expandtesting.com/).

This suite focuses on automating common real-world web interactions and verifying application behaviors across positive, negative, and dynamic edge cases.

---

## 🚀 Features & Test Coverage

The test suite covers the following practice scenarios:

*   **📝 Web Inputs (`/inputs`):** Automates entering alphanumeric, numeric, masked password, and calendar date fields, submitting the form, verifying output values match input entries, and validating clear actions.
*   **🔐 Login & Secure Area (`/login`):** Tests both positive authentication flows (successful login, redirection, cookie session check, and logout) and negative authentication cases (invalid credentials, error banners).
*   **☑️ Checkboxes (`/checkboxes`):** Validates toggling checked/unchecked states on multiple checkbox elements, verifying initial default states and dynamically checking/unchecking inputs.
*   **📤 File Upload (`/upload`):** Automates the programmatic creation of test files, uploads files using form elements, submits the form, and verifies upload success page states and filenames.

---

## 🛠️ Tech Stack & Dependencies

*   **Test Framework:** [Playwright Test](https://playwright.dev/) (Chromium)
*   **Runtime Environment:** [Node.js](https://nodejs.org/) (v24.18+)
*   **Test Runner:** Built-in Playwright runner with HTML/List reporters

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd charming-bose
   ```
2. Install the required Node.js package dependencies:
   ```powershell
   npm.cmd install
   ```
3. Install the Playwright Chromium browser binaries:
   ```powershell
   npx.cmd playwright install chromium
   ```

---

## 🏃 Running the Tests

You can run the tests using standard npm scripts or directly via `npx`:

### 1. Run all tests in headless mode (default)
Runs all spec files in headless Chromium:
```powershell
npm.cmd test
```

### 2. Run all tests in headed mode (UI visible)
Runs tests with the browser window visible, which is helpful for debugging:
```powershell
npm.cmd run test:headed
```

### 3. Run a specific test file
To target a specific spec file:
```powershell
npx.cmd playwright test tests/inputs.spec.js
```

---

## 📂 Project Structure

```text
├── tests/
│   ├── inputs.spec.js        # Web Inputs page verification
│   ├── login.spec.js         # Authentication validation (positive & negative)
│   ├── checkboxes.spec.js    # Checkbox state and toggling tests
│   └── upload.spec.js        # File upload and result verification
├── playwright.config.js      # Global Playwright configuration
├── package.json              # Dependency configuration
└── README.md                 # Project documentation
```

---

## ⚙️ Configuration details

The global configuration is defined in `playwright.config.js`. Key settings include:
*   **Base URL:** Set to `https://practice.expandtesting.com` so tests use relative endpoints.
*   **Parallel Execution:** Enabled (`fullyParallel: true`) to run spec suites concurrently.
*   **Visual Assets:** Automatically captures screenshots (`only-on-failure`) and records videos (`retain-on-failure`) when a test case fails.
