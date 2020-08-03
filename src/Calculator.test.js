import Calculator from './Calculator';

test("Mortgage Payment Calculation #1", function() {

    const payment = Calculator(10000, 3.2, 12, 25, 0, 5);
    expect(payment).toBe(48.36);
    console.log( 'payment', payment);
});

test("Mortgage Payment Calculation #2", function() {

    const payment = Calculator(50000, 10, 52, 25, 0, 5);
    expect(payment).toBe(103.14);
    console.log( 'payment', payment);
});

test("Mortgage Payment Calculation #3", function() {

    const payment = Calculator(100000, 5, 12, 25, 0, 5);
    expect(payment).toBe(581.60);
    console.log( 'payment', payment);
});

test("Mortgage Payment Calculation #4", function() {

    const payment = Calculator(300000, 7.5, 26, 20, 6, 5);
    expect(payment).toBe(1093.22);
    console.log( 'payment', payment);
});

test("Mortgage Payment Calculation #5", function() {

    const payment = Calculator(150000, 1, 12, 10, 8, 5);
    expect(payment).toBe(1235.84);
    console.log( 'payment', payment);
});