# frontPrepiChallenge

# Project Setup step-by-step:
## 1. It's recommended to setup the back-end project first.
After copy the token integration, you can start setting up.
```
npm install
```
## 2. Open the code, and go to axios.js directory (src/plugins/axios.js)
 - Get the copied token and paste that in 'headers' section:
```
headers: {
      Authorization: "Token copiedToken"
    }
```
## 3. Save it and compiles the code in terminal:
```
npm run serve
```

## 4. Remember:
- The API super user is not part of the system for spreadsheet;
- So, register an user and logIn with username and passwords.
