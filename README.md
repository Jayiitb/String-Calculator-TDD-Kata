# String Calculator

This project is a basic Node.js application set up with Jest as the testing framework. Follow the steps below to set up your project and configure Jest for testing.

## Step by Step Process Followed

### 1. Created a New Directory

```bash
mkdir string-calculator
cd string-calculator
```

### 2. Initialized a New Node.js Project
```bash
npm init -y
```

### 3. Installed Jest as a development dependency:
```bash
npm install --save-dev jest
```

### 4. Configured Jest
Updated the `package.json` file to configure Jest as testing framework. Added following to the "scripts" section.
```javascript
"scripts": {
  "test": "jest"
}

This will help us run script with `npm test` or `npm run test`. 
```