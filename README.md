This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Assumptions

Mortage Payment formula =
(Mortage Amount) * [(rate)*(1+rate)^(numTotalPayments)]/[(1+rate)^(numTotalPayments)-1]

- Amortization Years Range: 1 to 25
- Amortization Months Range: 0 to 11
- Term range: 1 to 10
- Mortgage Amount limit: 1 to 999999
- Interest Rate range: 1 to 49
- Payment Frequency:
    - Accelerated Weekly: 52 payments a year
    - Weekly: 52 payments a year
    - Accelerated Bi-weekly: 26 payments a year
    - Bi-weekly: 26 payments a year
    - Semi-monthly: 24 payments a year
    - Monthly: 12 times a year

### Challenges

- Outside click alerter: drop down list closes when you click outside the list.
- Mortgage payment calculations: Did not implement the prepayment plan and did not adjust the payment frequencies when an accelerate option is selected.
-